export default {
  // 1) EMAIL: receives and stores CSV attachments in R2 + updates latest.json
  async email(message, env, ctx) {
    try {
      const from = message.from || "";
      const to = message.to || "";
      const subject = message.headers.get("subject") || "";
      const msgId = message.headers.get("message-id") || "";
      const receivedAt = new Date().toISOString();
      const normalizedSubject = subject.trim().toUpperCase();

      console.log(JSON.stringify({ event: "EMAIL_RECEIVED", from, to, subject, msgId }));

      if (normalizedSubject !== "CARROS LISTOS") {
        console.log(JSON.stringify({ event: "EMAIL_SKIPPED_SUBJECT", subject }));
        return;
      }

      const rawText = await new Response(message.raw).text();
      const boundary = findBoundary(rawText);
      if (!boundary) {
        console.log(JSON.stringify({ event: "EMAIL_NOT_MULTIPART" }));
        return;
      }

      const parts = rawText.split(`--${boundary}`);
      let savedCount = 0;

      for (const part of parts) {
        if (!/Content-Disposition:\s*attachment/i.test(part)) continue;

        const filename = findFilename(part) || `attachment_${Date.now()}.bin`;
        const contentType = findHeader(part, "content-type") || "application/octet-stream";
        if (!isCsvAttachment(filename, contentType)) {
          console.log(JSON.stringify({ event: "SKIP_ATTACHMENT_NOT_CSV", filename, contentType }));
          continue;
        }

        const encoding = (findHeader(part, "content-transfer-encoding") || "").toLowerCase();
        if (!encoding.includes("base64")) {
          console.log(JSON.stringify({ event: "SKIP_ATTACHMENT_NOT_BASE64", filename, encoding }));
          continue;
        }

        const base64Body = extractBody(part);
        if (!base64Body) {
          console.log(JSON.stringify({ event: "SKIP_ATTACHMENT_NO_BODY", filename }));
          continue;
        }

        const bytes = base64ToUint8(base64Body);
        const now = new Date();
        const yyyy = now.getFullYear();
        const mm = String(now.getMonth() + 1).padStart(2, "0");
        const dd = String(now.getDate()).padStart(2, "0");

        const safeFilename = sanitizeFilename(filename);
        const key = `inventario/${yyyy}/${mm}/${dd}/${safeFilename}`;

        await env.INVENTARIO.put(key, bytes, {
          httpMetadata: { contentType },
          customMetadata: {
            from,
            to,
            subject: subject.slice(0, 200),
            receivedAt,
            msgId: msgId.slice(0, 200),
            filename: safeFilename,
          },
        });

        const latest = {
          key,
          filename: safeFilename,
          contentType,
          size: bytes.byteLength,
          receivedAt,
          subject,
          from,
        };

        await env.INVENTARIO.put("inventario/latest.json", JSON.stringify(latest, null, 2), {
          httpMetadata: { contentType: "application/json" },
        });

        savedCount++;
        console.log(JSON.stringify({ event: "ATTACHMENT_SAVED", key, filename: safeFilename, size: bytes.byteLength }));
      }

      console.log(JSON.stringify({ event: "EMAIL_DONE", savedCount }));
    } catch (err) {
      console.log(JSON.stringify({ event: "EMAIL_ERROR", error: err?.message || String(err) }));
    }
  },

  // 2) HTTP: inventory endpoints
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const handlers = {
      "/health": () => handleHealth(),
      "/latest/meta": () => handleLatestMeta(env),
      "/latest/raw": () => handleLatestRaw(env),
      "/stats": () => handleStats(env),
      "/latest": () => handleLatest(url, env),
    };

    const handler = handlers[url.pathname];
    if (handler) return handler();
    return notFoundResponse();
  },

  // 3) CRON: keep only last 7 days of files
  async scheduled(event, env, ctx) {
    ctx.waitUntil(cleanupOldInventory(env));
  },
};

/* ---------------- Helpers ---------------- */

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj, null, 2), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function handleHealth() {
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "content-type": "application/json" },
  });
}

async function handleLatestMeta(env) {
  const obj = await env.INVENTARIO.get("inventario/latest.json");
  if (!obj) return json({ ok: false, error: "No latest.json yet" }, 404);
  return new Response(obj.body, { headers: { "content-type": "application/json" } });
}

async function getLatestFile(env) {
  const latest = await getLatest(env);
  if (!latest) return { error: json({ ok: false, error: "No latest file yet" }, 404) };

  const file = await env.INVENTARIO.get(latest.key);
  if (!file) return { error: json({ ok: false, error: "Latest file not found" }, 404) };
  return { latest, file };
}

async function handleLatestRaw(env) {
  const { latest, file, error } = await getLatestFile(env);
  if (error) return error;

  return new Response(file.body, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `inline; filename="${latest.filename || "latest.csv"}"`,
    },
  });
}

async function handleStats(env) {
  const { latest, file, error } = await getLatestFile(env);
  if (error) return error;

  const csvText = await file.text();
  const rows = parseCSV(csvText);
  const headers = listHeaders(rows);

  const makeCol = resolveColumn(headers, "Make");
  const yearCol = resolveColumn(headers, "Year");
  const odometerCol = resolveColumn(headers, "Odometer");
  const createdDateCol = resolveColumn(headers, "Created Date");

  return json({
    ok: true,
    latest,
    columns: headers,
    totals: { vehicles: rows.length },
    byMake: makeCol ? countBy(rows, (r) => r[makeCol]) : null,
    byYear: yearCol ? countBy(rows, (r) => r[yearCol]) : null,
    odometer: odometerCol ? summarizeNumeric(rows, (r) => toNumber(r[odometerCol])) : null,
    inventoryAge: createdDateCol ? summarizeDates(rows, (r) => parseDateLoose(r[createdDateCol])) : null,
  });
}

async function handleLatest(url, env) {
  const { latest, file, error } = await getLatestFile(env);
  if (error) return error;

  const csvText = await file.text();
  const originalRows = parseCSV(csvText);
  const headers = listHeaders(originalRows);

  const selectedFields = parseFieldsParam(headers, url.searchParams.get("fields"));
  const visibleColumns = selectedFields.length ? selectedFields : headers;
  const baseRows = selectedFields.length ? pickFields(originalRows, selectedFields) : originalRows;

  const defaultSort = "Make:asc,Year:desc,Odometer:asc";
  const sortInput = url.searchParams.get("sort") || defaultSort;
  const sortSpec = parseSortSpec(sortInput, visibleColumns);
  const rows = sortRows(baseRows, sortSpec);

  const groupRaw = url.searchParams.get("group") || "";
  const groupColumn = resolveColumn(visibleColumns, groupRaw);
  if (groupRaw && !groupColumn) {
    return json(
      {
        ok: false,
        error: `Invalid group field: ${groupRaw}`,
        availableFields: visibleColumns,
      },
      400
    );
  }

  if (groupColumn) {
    return json({
      ok: true,
      latest,
      columns: visibleColumns,
      sort: sortSpec,
      group: groupColumn,
      groups: groupBy(rows, (r) => r[groupColumn]),
    });
  }

  return json({
    ok: true,
    latest,
    columns: visibleColumns,
    sort: sortSpec,
    count: rows.length,
    rows,
  });
}

function notFoundResponse() {
  return json(
    {
      ok: false,
      routes: [
        "/health",
        "/latest",
        "/latest/raw",
        "/latest/meta",
        "/stats",
        "/latest?fields=Make,Year,Model,Odometer",
        "/latest?sort=Make:asc,Year:desc,Odometer:asc",
        "/latest?group=Make&sort=Year:desc,Odometer:asc",
      ],
    },
    404
  );
}

async function getLatest(env) {
  const metaObj = await env.INVENTARIO.get("inventario/latest.json");
  if (!metaObj) return null;
  try {
    return JSON.parse(await metaObj.text());
  } catch {
    return null;
  }
}

async function cleanupOldInventory(env) {
  const keepDays = 7;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - keepDays);

  console.log(JSON.stringify({ event: "CLEANUP_START", cutoff: cutoff.toISOString() }));

  let cursor;
  let deleted = 0;

  let truncated = false;
  do {
    const listed = await env.INVENTARIO.list({ prefix: "inventario/", cursor });
    cursor = listed.cursor;
    truncated = listed.truncated;

    const toDelete = collectKeysToDelete(listed.objects, cutoff);

    if (toDelete.length) {
      await env.INVENTARIO.delete(toDelete);
      deleted += toDelete.length;
      console.log(JSON.stringify({ event: "CLEANUP_DELETED_BATCH", count: toDelete.length }));
    }
  } while (truncated);

  console.log(JSON.stringify({ event: "CLEANUP_DONE", deleted }));
}

function collectKeysToDelete(objects, cutoff) {
  return objects
    .map((obj) => obj.key)
    .filter((key) => key !== "inventario/latest.json")
    .filter((key) => {
      const dt = dateFromKey(key);
      return dt && dt < cutoff;
    });
}

function dateFromKey(key) {
  const m = key.match(/^inventario\/(\d{4})\/(\d{2})\/(\d{2})\//);
  if (!m) return null;
  const [, y, mo, d] = m;
  const dt = new Date(`${y}-${mo}-${d}T00:00:00.000Z`);
  return Number.isNaN(dt.getTime()) ? null : dt;
}

function findBoundary(raw) {
  const m1 = raw.match(/boundary="([^"]+)"/i);
  if (m1) return m1[1];
  const m2 = raw.match(/boundary=([^\s;]+)/i);
  return m2 ? m2[1] : null;
}

function findHeader(part, headerName) {
  const re = new RegExp(String.raw`^${headerName}:\s*([^\r\n]+)`, "im");
  const m = part.match(re);
  return m ? m[1].trim() : "";
}

function findFilename(part) {
  const m = part.match(/filename="([^"]+)"/i) || part.match(/filename=([^\s;]+)/i);
  return m ? m[1] : "";
}

function extractBody(part) {
  const idx = part.indexOf("\r\n\r\n");
  if (idx === -1) return null;
  return part.slice(idx + 4).replaceAll("\r\n", "").trim().replace(/--$/, "");
}

function base64ToUint8(b64) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.codePointAt(i);
  return out;
}

function sanitizeFilename(name) {
  return (name || "file.csv").replaceAll(/[^\w.\- ]+/g, "_").slice(0, 120);
}

function isCsvAttachment(filename, contentType) {
  const name = String(filename || "").toLowerCase();
  const ctype = String(contentType || "").toLowerCase();
  return name.endsWith(".csv") || ctype.includes("text/csv") || ctype.includes("application/csv");
}

/* ---------- CSV parsing ---------- */

function parseCSV(text) {
  const lines = text.replaceAll("\r", "").split("\n").filter((l) => l.trim() !== "");
  if (!lines.length) return [];

  const headers = parseCSVLine(lines[0]).map((h) => h.trim());
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = parseCSVLine(lines[i]);
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j] || `col_${j}`] = (cols[j] ?? "").trim();
    }
    rows.push(obj);
  }

  return rows;
}

function parseCSVLine(line) {
  const out = [];
  let cur = "";
  let inQuotes = false;
  let i = 0;

  while (i < line.length) {
    const c = line[i];

    if (c === '"') {
      if (inQuotes && line[i + 1] === '"') {
        cur += '"';
        i += 2;
        continue;
      } else {
        inQuotes = !inQuotes;
      }
      i++;
      continue;
    }

    if (c === "," && !inQuotes) {
      out.push(cur);
      cur = "";
      i++;
      continue;
    }

    cur += c;
    i++;
  }

  out.push(cur);
  return out;
}

/* ---------- Real-data ordering/filtering/grouping ---------- */

function listHeaders(rows) {
  if (!rows.length) return [];
  return Object.keys(rows[0]);
}

function normalizeKey(v) {
  return String(v || "").toLowerCase().replaceAll(/[^a-z0-9]/g, "");
}

function resolveColumn(headers, requested) {
  const target = normalizeKey(requested);
  if (!target) return null;
  const byNormalized = new Map(headers.map((h) => [normalizeKey(h), h]));
  return byNormalized.get(target) || null;
}

function parseFieldsParam(headers, fieldsText) {
  if (!fieldsText) return [];
  const requested = String(fieldsText)
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);

  const selected = [];
  const seen = new Set();
  for (const req of requested) {
    const col = resolveColumn(headers, req);
    if (!col || seen.has(col)) continue;
    seen.add(col);
    selected.push(col);
  }
  return selected;
}

function pickFields(rows, fields) {
  return rows.map((row) => {
    const out = {};
    for (const f of fields) out[f] = row[f] ?? "";
    return out;
  });
}

function parseSortSpec(sortText, availableColumns) {
  const parts = String(sortText || "")
    .split(",")
    .map((x) => x.trim())
    .filter(Boolean);

  const spec = [];
  for (const part of parts) {
    const [rawField, rawOrder] = part.split(":");
    const field = resolveColumn(availableColumns, rawField);
    if (!field) continue;
    const order = String(rawOrder || "asc").toLowerCase() === "desc" ? "desc" : "asc";
    if (spec.some((s) => s.field === field)) continue;
    spec.push({ field, order });
  }

  return spec;
}

function sortRows(rows, sortSpec) {
  if (!sortSpec.length) return [...rows];
  const out = [...rows];

  out.sort((a, b) => {
    for (const { field, order } of sortSpec) {
      const cmp = compareLoose(a[field], b[field]);
      if (cmp !== 0) return order === "desc" ? -cmp : cmp;
    }
    return 0;
  });

  return out;
}

function compareLoose(a, b) {
  const na = toNumber(a);
  const nb = toNumber(b);
  if (na !== null && nb !== null) return na - nb;

  const da = parseDateLoose(a);
  const db = parseDateLoose(b);
  if (da !== null && db !== null) return da - db;

  return String(a ?? "").localeCompare(String(b ?? ""), "en", { sensitivity: "base" });
}

function toNumber(v) {
  if (v === undefined || v === null) return null;
  const cleaned = String(v).trim().replaceAll(",", "");
  if (!cleaned) return null;
  const num = Number(cleaned);
  return Number.isFinite(num) ? num : null;
}

function parseDateLoose(v) {
  if (v === undefined || v === null) return null;
  const s = String(v).trim();
  if (!s) return null;

  const dt = new Date(s);
  if (!Number.isNaN(dt.getTime())) return dt.getTime();

  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(s);
  if (!m) return null;

  const [, mm, dd, yyyy] = m;
  const rest = s.slice(m[0].length).trim();
  const { hour, minute, second, valid } = parseTimePart(rest);
  if (!valid) return null;

  const parsed = Date.UTC(Number(yyyy), Number(mm) - 1, Number(dd), hour, minute, second);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseTimePart(rest) {
  if (!rest) return { hour: 0, minute: 0, second: 0, valid: true };

  const tokens = rest.split(/\s+/).filter(Boolean);
  if (!tokens.length || tokens.length > 2) return { valid: false };

  const timeMatch = /^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(tokens[0]);
  if (!timeMatch) return { valid: false };

  let hour = Number(timeMatch[1]);
  const minute = Number(timeMatch[2]);
  const second = Number(timeMatch[3] || 0);

  const ampm = String(tokens[1] || "").toUpperCase();
  if (ampm && ampm !== "AM" && ampm !== "PM") return { valid: false };
  if (ampm === "PM" && hour < 12) hour += 12;
  if (ampm === "AM" && hour === 12) hour = 0;

  if (hour > 23 || minute > 59 || second > 59) return { valid: false };
  return { hour, minute, second, valid: true };
}

function summarizeNumeric(rows, numFn) {
  const values = [];
  for (const row of rows) {
    const n = numFn(row);
    if (n !== null) values.push(n);
  }
  if (!values.length) return null;

  const total = values.reduce((a, b) => a + b, 0);
  return {
    count: values.length,
    min: Math.min(...values),
    max: Math.max(...values),
    average: Number((total / values.length).toFixed(2)),
  };
}

function summarizeDates(rows, dateFn) {
  const values = [];
  for (const row of rows) {
    const ts = dateFn(row);
    if (ts !== null) values.push(ts);
  }
  if (!values.length) return null;

  const oldest = Math.min(...values);
  const newest = Math.max(...values);
  return {
    count: values.length,
    oldest: new Date(oldest).toISOString(),
    newest: new Date(newest).toISOString(),
  };
}

function groupBy(arr, keyFn) {
  const out = {};
  for (const item of arr) {
    const k = keyFn(item);
    const key = k === undefined || k === null || String(k).trim() === "" ? "" : String(k);
    if (!out[key]) out[key] = [];
    out[key].push(item);
  }
  return out;
}

function countBy(arr, keyFn) {
  const out = {};
  for (const item of arr) {
    const raw = keyFn(item);
    const key = raw === undefined || raw === null || String(raw).trim() === "" ? "" : String(raw);
    out[key] = (out[key] || 0) + 1;
  }
  return out;
}
