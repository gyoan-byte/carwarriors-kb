export default {
  // 1) EMAIL: stores email text in KV (K2) ALWAYS + stores CSV attachments in R2 only for subject "CARROS LISTOS"
  async email(message, env, ctx) {
    try {
      const bucket = getInventoryBucket(env); // R2 (solo se usa si subject=CARROS LISTOS)
      const kv = getMailKV(env); // KV (K2) para guardar texto SIEMPRE

      const from = message.from || "";
      const to = message.to || "";
      const subject = message.headers.get("subject") || "";
      const msgId = (message.headers.get("message-id") || "").trim();
      const receivedAt = new Date().toISOString();
      const normalizedSubject = subject.trim().toUpperCase();

      console.log(JSON.stringify({ event: "EMAIL_RECEIVED", from, to, subject, msgId }));

      // --- Leer RAW completo ---
      const rawText = await new Response(message.raw).text();

      // --- Extraer texto legible del correo ---
      const extracted = extractEmailText(rawText);

      // --- Guardar SIEMPRE en KV ---
      const mailKey = buildMailKey(receivedAt, msgId);
      const mailObj = {
        id: mailKey,
        from,
        to,
        subject,
        msgId: msgId || null,
        receivedAt,
        text: clampText(extracted.text || "", 50_000), // limite seguro
        textType: extracted.type || "unknown",
        hasAttachments: extracted.hasAttachments || false,
      };

      await kv.put(mailKey, JSON.stringify(mailObj));

      // puntero al Ãºltimo correo
      await kv.put(
        "mail/latest.json",
        JSON.stringify({ id: mailKey, receivedAt, processedAt: new Date().toISOString(), subject, from, to }, null, 2)
      );

      console.log(JSON.stringify({ event: "MAIL_SAVED_KV", mailKey, textType: mailObj.textType, textLen: mailObj.text.length }));

      // --- Si NO es CARROS LISTOS, NO procesar adjuntos (solo KV) ---
      if (normalizedSubject !== "CARROS LISTOS") {
        console.log(JSON.stringify({ event: "EMAIL_SKIPPED_ATTACHMENTS_SUBJECT", subject }));
        return;
      }

      // --- Procesar adjuntos CSV en R2 como antes ---
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
        const now = new Date(receivedAt);
        const yyyy = now.getUTCFullYear();
        const mm = String(now.getUTCMonth() + 1).padStart(2, "0");
        const dd = String(now.getUTCDate()).padStart(2, "0");

        const safeFilename = sanitizeFilename(filename);
        const key = `inventario/${yyyy}/${mm}/${dd}/${safeFilename}`;

        await bucket.put(key, bytes, {
          httpMetadata: { contentType },
          customMetadata: {
            from,
            to,
            subject: subject.slice(0, 200),
            receivedAt,
            msgId: (msgId || "").slice(0, 200),
            filename: safeFilename,
          },
        });

        const latest = {
          key,
          filename: safeFilename,
          contentType,
          size: bytes.byteLength,
          receivedAt,
          processedAt: new Date().toISOString(),
          source: "email",
          subject,
          from,
        };

        await bucket.put("inventario/latest.json", JSON.stringify(latest, null, 2), {
          httpMetadata: { contentType: "application/json" },
        });
        console.log(JSON.stringify({ event: "INVENTORY_LATEST_UPDATED", key, receivedAt, filename: safeFilename, size: bytes.byteLength }));

        savedCount++;
        console.log(JSON.stringify({ event: "ATTACHMENT_SAVED", key, filename: safeFilename, size: bytes.byteLength }));
      }

      console.log(JSON.stringify({ event: "EMAIL_DONE", savedCount }));
    } catch (err) {
      console.log(JSON.stringify({ event: "EMAIL_ERROR", error: err?.message || String(err) }));
    }
  },

  // 2) HTTP: inventory + mail endpoints
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    const url = new URL(request.url);

    const handlers = {
      // INVENTARIO (R2)
      "/health": () => handleHealth(),
      "/robots-worker.txt": () => handleWorkerRobotsTxt(),
      "/robots.txt": () => handleWorkerRobotsTxt(),
      "/ai.txt": () => handleWorkerAiTxt(),
      "/latest/meta": () => handleLatestMeta(env),
      "/latest/raw": () => handleLatestRaw(env),
      "/stats": () => handleStats(env),
      "/latest": () => handleLatest(url, env),
      "/ready": () => handleReady(url, env),
      "/kb/lookup": () => handleKbLookup(url, env),
      "/kb/test": handleKbTest,
      "/status": () => handleStatus(env),

      // MAIL (KV)
      "/mail/latest": () => handleMailLatest(env),
      "/mail/latest/raw": () => handleMailLatestRaw(env),
      "/mail/get": () => handleMailGet(url, env),
      "/mail/list": () => handleMailList(url, env),
    };

    const handler = handlers[url.pathname];
    const response = handler ? await handler() : notFoundResponse();
    return withCors(response);
  },

  // 3) CRON: keep only last 7 days of files (R2) + keep last 30 days of mail (KV)
  async scheduled(event, env, ctx) {
    ctx.waitUntil(cleanupOldInventory(env));
    ctx.waitUntil(cleanupOldMail(env));
  },
};

/* ---------------- Helpers ---------------- */

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj, null, 2), {
    status,
    headers: {
      "content-type": "application/json",
      ...corsHeaders(),
    },
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
}

function withCors(response) {
  const headers = new Headers(response.headers);
  for (const [k, v] of Object.entries(corsHeaders())) headers.set(k, v);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

/* ---------- Bindings ---------- */

const KB_VEHICLE_MD_URL = "https://gyoan-byte.github.io/carwarriors-kb/knowledge_base/18_Vehicle_Knowledge_System.md";

function getInventoryBucket(env) {
  const bucket = env?.inventario || env?.INVENTARIO;
  // OJO: en este worker se puede recibir correo NO CARROS LISTOS, pero igual llamamos a esta funciÃ³n arriba.
  // Si tÃº quieres permitir operar sin R2, cambia esto a "return null" y protege usos del bucket.
  if (!bucket) throw new Error('Missing R2 binding. Expected "inventario" (or legacy "INVENTARIO").');
  return bucket;
}

function getMailKV(env) {
  const kv = env?.K2 || env?.k2;
  if (!kv) throw new Error('Missing KV binding. Expected "K2" (or legacy "k2").');
  return kv;
}

/* ---------- Health ---------- */

function handleHealth() {
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "content-type": "application/json" },
  });
}

/* ---------- INVENTARIO endpoints (R2) ---------- */

async function handleLatestMeta(env) {
  const bucket = getInventoryBucket(env);
  const obj = await bucket.get("inventario/latest.json");
  if (!obj) return json({ ok: false, error: "No latest.json yet" }, 404);
  return new Response(obj.body, { headers: { "content-type": "application/json" } });
}

async function getLatestFile(env) {
  const latest = await getLatest(env);
  if (!latest) return { error: json({ ok: false, error: "No latest file yet" }, 404) };

  const bucket = getInventoryBucket(env);
  const file = await bucket.get(latest.key);
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

function buildReadyResponse(vehicles, filters, kb, queryInfo) {
  const meta = buildMetaLayer(filters, kb);
  const summary = buildSummaryLayer(vehicles);
  const index = buildIndexLayer(vehicles);
  const kbLayer = buildKbLayer(vehicles, kb);
  const cleanVehicles = buildCleanVehicles(vehicles);

  return {
    meta,
    summary,
    index,
    kb: kbLayer,
    vehicles: cleanVehicles
  };
}

function buildMetaLayer(filters, kb) {
  return {
    schemaVersion: "inventory.kb.v1",
    ok: true,
    generatedAt: new Date().toISOString(),
    source: "CARROS LISTOS",
    disclaimer: "Preliminary availability only. Final unit confirmation with a team advisor.",
    filters: {
      q: filters.q || null,
      make: filters.make || null,
      model: filters.model || null,
      year: filters.year || null,
      bodyType: filters.bodyType || null,
      limit: filters.limit
    },
    kbFetch: kb ? {
      enabled: true,
      available: Boolean(kb?.ok),
      sourceUrl: kb?.ok ? kb.sourceUrl : null,
      fetchedAt: kb?.ok ? kb.fetchedAt : null,
      error: kb?.ok ? null : kb?.error || "Knowledge source unavailable"
    } : {
      enabled: false
    },
    salesRules: {
      noFinalPrice: true,
      noMonthlyPromise: true,
      confirmAvailabilityWithAdvisor: true
    },
    geo: {
      market: "Miami, FL"
    }
  };
}

function buildSummaryLayer(vehicles) {
  const totalAvailable = vehicles.length;
  const byMake = countBy(vehicles, (v) => v.make);
  const byBodyType = countBy(vehicles, (v) => v.bodyType || 'unknown');
  
  // Identificar vehículos con bodyType unknown
  const unknownVehicles = vehicles.filter(v => !v.bodyType);
  
  const highlights = {
    threeRow: vehicles
      .filter(v => v.signals?.includes('3_ROW'))
      .slice(0, 3)
      .map(v => v.stockNumber),
    ev: vehicles
      .filter(v => v.signals?.includes('EV'))
      .slice(0, 3)
      .map(v => v.stockNumber),
    trucks: vehicles
      .filter(v => v.bodyType === 'truck')
      .slice(0, 3)
      .map(v => v.stockNumber)
  };

  return {
    totalAvailable,
    byMake,
    byBodyType,
    highlights,
    dataFreshness: Math.floor(Math.random() * 3600), // Mock: seconds since last update
    unknownVehicles: unknownVehicles.map(v => ({
      stockNumber: v.stockNumber,
      year: v.year,
      make: v.make,
      model: v.model,
      kbKey: v.kbKey,
      kbLookupKeyNorm: v.kb?.lookupKeyNorm,
      hasKbEntry: !!v.kbReference?.found
    }))
  };
}

function buildIndexLayer(vehicles) {
  const index = {
    byMake: {},
    byBodyType: {},
    byLookupKey: {},
    byRiskFlag: {},
    byYear: {}
  };

  vehicles.forEach(vehicle => {
    // Index by make
    if (!index.byMake[vehicle.make]) {
      index.byMake[vehicle.make] = [];
    }
    index.byMake[vehicle.make].push(vehicle.stockNumber);

    // Index by body type
    const bodyType = vehicle.bodyType || 'unknown';
    if (!index.byBodyType[bodyType]) {
      index.byBodyType[bodyType] = [];
    }
    index.byBodyType[bodyType].push(vehicle.stockNumber);

    // Index by lookup key
    if (vehicle.kbKey) {
      if (!index.byLookupKey[vehicle.kbKey]) {
        index.byLookupKey[vehicle.kbKey] = [];
      }
      index.byLookupKey[vehicle.kbKey].push(vehicle.stockNumber);
    }

    // Index by risk flags
    if (vehicle.riskFlags && vehicle.riskFlags.length > 0) {
      vehicle.riskFlags.forEach(flag => {
        if (!index.byRiskFlag[flag]) {
          index.byRiskFlag[flag] = [];
        }
        index.byRiskFlag[flag].push(vehicle.stockNumber);
      });
    }

    // Index by year
    if (vehicle.year) {
      const yearStr = String(vehicle.year);
      if (!index.byYear[yearStr]) {
        index.byYear[yearStr] = [];
      }
      index.byYear[yearStr].push(vehicle.stockNumber);
    }
  });

  return index;
}

function buildKbLayer(vehicles, kb) {
  const models = {};
  const processedKeys = new Set();

  vehicles.forEach(vehicle => {
    if (vehicle.kbKey && !processedKeys.has(vehicle.kbKey)) {
      processedKeys.add(vehicle.kbKey);
      
      const entry = kb?.ok ? kb.index[vehicle.kb.lookupKeyNorm] : null;
      if (entry) {
        models[vehicle.kbKey] = {
          classification: entry.classification,
          maintenanceProfile: entry.maintenanceProfile,
          usedRiskFlags: entry.usedRiskFlags,
          crossShopModels: entry.crossShopModels,
          lastVerified: entry.lastVerified
        };
      }
    }
  });

  const riskFlagsGlossary = {
    "FLOOD_SENSITIVITY": "Check flood history; inspect thoroughly in coastal markets",
    "EV_CHARGING_DEPENDENCY": "Buyer needs access to charging at home/work",
    "HIGH_MILEAGE": "Vehicle has above-average mileage; expect increased maintenance",
    "COMMERCIAL_USE": "Previously used for commercial purposes; verify maintenance records"
  };

  return {
    models,
    riskFlagsGlossary
  };
}

function buildCleanVehicles(vehicles) {
  return vehicles.map(vehicle => {
    const clean = {
      id: vehicle.stockNumber,
      year: vehicle.year,
      make: vehicle.make,
      model: vehicle.model,
      color: vehicle.exteriorColor || null,
      odometer: vehicle.odometer,
      bodyType: vehicle.bodyType || null,
      saleReady: true,
      status: "available_preliminary",
      daysInInventory: vehicle.daysInInventory || null,
      kbKey: vehicle.kbKey || null,
      riskFlags: vehicle.riskFlags || [],
      signals: vehicle.signals || []
    };

    // Add title if possible
    if (vehicle.year && vehicle.make && vehicle.model) {
      clean.title = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
      if (vehicle.exteriorColor) {
        clean.title += ` (${vehicle.exteriorColor})`;
      }
      if (vehicle.odometer) {
        clean.title += ` - ${vehicle.odometer.toLocaleString()} mi`;
      }
      clean.title += ` - Stock ${vehicle.stockNumber}`;
    }

    return clean;
  });
}

function detectVehicleSignals(vehicle, kbEntry) {
  const signals = [];
  
  // Detect EV signals
  if (kbEntry?.classification?.toLowerCase().includes('electric') || 
      vehicle.model?.toLowerCase().includes('tesla') ||
      vehicle.model?.toLowerCase().includes('bolt')) {
    signals.push('EV');
  }

  // Detect 3-row SUV signals
  if (kbEntry?.classification?.toLowerCase().includes('3-row') ||
      kbEntry?.classification?.toLowerCase().includes('7-seat') ||
      vehicle.model?.toLowerCase().includes('expedition') ||
      vehicle.model?.toLowerCase().includes('tahoe') ||
      vehicle.model?.toLowerCase().includes('suburban')) {
    signals.push('3_ROW');
  }

  // Detect heavy duty signals
  if (vehicle.model?.toLowerCase().includes('heavy duty') ||
      vehicle.model?.toLowerCase().includes('2500') ||
      vehicle.model?.toLowerCase().includes('3500')) {
    signals.push('HEAVY_DUTY');
  }

  // Detect commercial signals
  if (vehicle.model?.toLowerCase().includes('cargo') ||
      vehicle.model?.toLowerCase().includes('commercial') ||
      vehicle.model?.toLowerCase().includes('work truck')) {
    signals.push('COMMERCIAL');
  }

  // Detect commuter signals
  if (vehicle.bodyType === 'sedan' || 
      vehicle.make === 'HONDA' || 
      vehicle.make === 'TOYOTA') {
    signals.push('COMMUTER');
  }

  // Detect reliability focus
  if (vehicle.make === 'TOYOTA' || 
      vehicle.make === 'HONDA' || 
      vehicle.make === 'LEXUS') {
    signals.push('RELIABILITY_FOCUS');
  }

  return signals;
}

function extractRiskFlags(kbEntry) {
  const flags = [];
  
  if (kbEntry?.usedRiskFlags) {
    const riskText = kbEntry.usedRiskFlags.toLowerCase();
    
    if (riskText.includes('flood')) {
      flags.push('FLOOD_SENSITIVITY');
    }
    if (riskText.includes('charging') || riskText.includes('electric')) {
      flags.push('EV_CHARGING_DEPENDENCY');
    }
    if (riskText.includes('high mileage') || riskText.includes('mileage')) {
      flags.push('HIGH_MILEAGE');
    }
    if (riskText.includes('commercial')) {
      flags.push('COMMERCIAL_USE');
    }
  }
  
  return flags;
}

function buildReadyVehicle(v, includeKb, kb) {
  const entry = getKbEntryForVehicle(includeKb, kb, v.kb.lookupKeyNorm);
  const detectedBodyType = entry ? detectBodyTypeFromClassification(entry.classification) : null;
  const signals = detectVehicleSignals(v, entry);
  const riskFlags = extractRiskFlags(entry);
  
  const out = {
    stockNumber: v.stockNumber,
    year: v.year,
    make: v.make,
    model: v.model,
    exteriorColor: v.exteriorColor,
    odometer: v.odometer,
    gpsProvider: v.gpsProvider,
    createdDate: v.createdDate,
    daysInInventory: v.daysInInventory,
    bodyType: detectedBodyType,
    saleReady: true,
    status: "available_preliminary",
    kbKey: v.kb.lookupKey,
    kb: {
      makeKey: v.kb.makeKey,
      modelKey: v.kb.modelKey,
      lookupKey: v.kb.lookupKey,
      lookupKeyNorm: v.kb.lookupKeyNorm
    },
    signals,
    riskFlags,
    query: {
      text: v.queryText,
      tokens: v.queryTokens,
    },
  };
  
  if (includeKb) out.kbReference = buildKbReference(entry);
  return out;
}

async function handleReady(url, env) {
  const { file, error } = await getLatestFile(env);
  if (error) return error;

  const csvText = await file.text();
  const rows = parseCSV(csvText);
  const headers = listHeaders(rows);
  const nowMs = Date.now();

  const createdDateCol = resolveColumn(headers, "Created Date");
  const stockCol = resolveColumn(headers, "Stock Number");
  const yearCol = resolveColumn(headers, "Year");
  const makeCol = resolveColumn(headers, "Make");
  const modelCol = resolveColumn(headers, "Model");
  const colorCol = resolveColumn(headers, "Exterior Color");
  const odometerCol = resolveColumn(headers, "Odometer");
  const gpsCol = resolveColumn(headers, "GPS Provider");

  const normalized = rows.map((row) =>
    normalizeReadyRow(row, {
      createdDateCol,
      stockCol,
      yearCol,
      makeCol,
      modelCol,
      colorCol,
      odometerCol,
      gpsCol,
      nowMs,
    })
  );

  const readyQuery = parseReadyQuery(url, normalized.length);
  if (readyQuery.error) return readyQuery.error;

  const { q, makeFilter, modelFilter, bodyTypeFilter, yearFilter, includeKb, limit, qTokens } = readyQuery;

  const filteredBase = normalized.filter((v) =>
    matchesReadyFilters(v, { makeFilter, modelFilter, yearFilter, qTokens })
  );

  const totalMatched = filteredBase.length;
  const kb = includeKb ? await getKnowledgeIndex(env) : null;
  const baseRows = bodyTypeFilter ? filteredBase : filteredBase.slice(0, limit);
  const vehicles = baseRows.map((v) => buildReadyVehicle(v, includeKb, kb));
  const filtered = bodyTypeFilter
    ? vehicles.filter((v) => normalizeSearchText(v.bodyType || "") === bodyTypeFilter).slice(0, limit)
    : vehicles;

  // Build the new 3-layer response structure
  const response = buildReadyResponse(filtered, {
    q: q || null,
    make: makeFilter || null,
    model: modelFilter || null,
    year: yearFilter || null,
    bodyType: bodyTypeFilter || null,
    limit,
    totalMatched: bodyTypeFilter ? filtered.length : totalMatched
  }, kb, { qTokens });

  return json(response);
}

function parseReadyQuery(url, defaultLimit) {
  const q = (url.searchParams.get("q") || "").trim();
  const makeFilter = normalizeSearchText(url.searchParams.get("make") || "");
  const modelFilter = normalizeSearchText(url.searchParams.get("model") || "");
  const bodyTypeFilter = normalizeSearchText(url.searchParams.get("bodyType") || "");
  const yearFilter = String(url.searchParams.get("year") || "").trim();
  const includeKbRaw = String(url.searchParams.get("includeKb") || "").trim().toLowerCase();
  const includeKb = includeKbRaw === "" ? true : /^(1|true|yes)$/i.test(includeKbRaw);

  if (bodyTypeFilter && !includeKb) {
    return {
      error: json(
        {
          ok: false,
          error: "bodyType filter requires includeKb=1 to avoid heuristic classification",
        },
        400
      ),
    };
  }

  const rawLimit = url.searchParams.get("limit");
  const limit = rawLimit === null || String(rawLimit).trim() === "" ? defaultLimit : clampInt(rawLimit, 1, 200, 100);
  return {
    error: null,
    q,
    makeFilter,
    modelFilter,
    bodyTypeFilter,
    yearFilter,
    includeKb,
    limit,
    qTokens: splitSearchTerms(q),
  };
}

function matchesReadyFilters(vehicle, filters) {
  const { makeFilter, modelFilter, yearFilter, qTokens } = filters;
  if (makeFilter && vehicle.search.makeNorm !== makeFilter) return false;
  if (modelFilter && vehicle.search.modelNorm !== modelFilter) return false;
  if (yearFilter && String(vehicle.year || "") !== yearFilter) return false;
  if (qTokens.length && !qTokens.every((t) => vehicle.search.text.includes(t))) return false;
  return true;
}

function handleWorkerRobotsTxt() {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "# Worker API routes",
    "Allow: /health",
    "Allow: /status",
    "Allow: /stats",
    "Allow: /latest",
    "Allow: /latest/meta",
    "Allow: /latest/raw",
    "Allow: /ready",
    "Allow: /kb/lookup",
    "Allow: /mail/latest",
    "Allow: /mail/latest/raw",
    "Allow: /mail/list",
    "Allow: /mail/get",
    "",
    "# AI crawler hints",
    "Allow: /ai.txt",
    "Allow: /robots-worker.txt",
    "",
    "# Notes:",
    "# /ready defaults to includeKb=true when includeKb param is omitted.",
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      ...corsHeaders(),
    },
  });
}

function handleWorkerAiTxt() {
  const body = [
    "service: dc-leads-processor",
    "base_url: https://dc-leads-processor.gyoan.workers.dev",
    "primary_routes:",
    "- /ready",
    "- /status",
    "- /stats",
    "- /latest",
    "- /latest/meta",
    "",
    "ready_defaults:",
    "- includeKb: true (if omitted)",
    "- limit: all matched rows",
    "",
    "notes:",
    "- bodyType filter requires includeKb=true",
    "- source: CARROS LISTOS",
  ].join("\n");

  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      ...corsHeaders(),
    },
  });
}

async function handleKbTest(env) {
  const kb = await getKnowledgeIndex(env);
  if (!kb.ok) {
    return json({ ok: false, error: "Knowledge source unavailable", detail: kb.error }, 503);
  }

  // Extraer marcas y modelos únicos del índice
  const makes = new Set();
  const modelsByMake = {};
  let totalEntries = 0;

  for (const key of Object.keys(kb.index)) {
    const [make, model] = key.split('::');
    if (make && model) {
      makes.add(make);
      if (!modelsByMake[make]) modelsByMake[make] = new Set();
      modelsByMake[make].add(model);
      totalEntries++;
    }
  }

  // Convertir Sets a arrays ordenados
  const makesArray = Array.from(makes).sort((a, b) => a.localeCompare(b));
  const modelsByMakeArray = {};
  for (const make of makesArray) {
    modelsByMakeArray[make] = Array.from(modelsByMake[make]).sort((a, b) => a.localeCompare(b));
  }

  return json({
    ok: true,
    sourceUrl: kb.sourceUrl,
    fetchedAt: kb.fetchedAt,
    summary: {
      totalEntries,
      totalMakes: makesArray.length,
      makes: makesArray,
      modelsByMake: modelsByMakeArray,
    },
    sample: {
      firstEntry: kb.index[Object.keys(kb.index)[0]],
      lastEntry: kb.index[Object.keys(kb.index)[Object.keys(kb.index).length - 1]],
    }
  });
}

async function handleKbLookup(url, env) {
  const make = String(url.searchParams.get("make") || "").trim();
  const model = String(url.searchParams.get("model") || "").trim();
  if (!make || !model) {
    return json({ ok: false, error: "Missing required query params: make, model" }, 400);
  }

  const kb = await getKnowledgeIndex(env);
  if (!kb.ok) {
    return json({ ok: false, error: "Knowledge source unavailable", detail: kb.error }, 503);
  }

  const key = buildKbLookupKey(make, model);
  const entry = kb.index[key] || null;

  return json({
    ok: true,
    sourceUrl: kb.sourceUrl,
    fetchedAt: kb.fetchedAt,
    make: toCanonicalUpper(make),
    model: toCanonicalUpper(model),
    found: Boolean(entry),
    data: entry,
  });
}

function normalizeReadyRow(row, cols) {
  const createdDateRaw = getTrimmedCell(row, cols.createdDateCol);
  const createdTs = parseDateLoose(createdDateRaw);
  const daysInInventory = createdTs === null ? null : Math.max(0, Math.floor((cols.nowMs - createdTs) / 86_400_000));

  const stockNumber = getTrimmedCell(row, cols.stockCol);
  const yearNum = getNumericCell(row, cols.yearCol);
  const year = yearNum === null ? null : Math.trunc(yearNum);
  const make = getUpperCell(row, cols.makeCol);
  const model = getUpperCell(row, cols.modelCol);
  const exteriorColor = getUpperCell(row, cols.colorCol);
  const odometerNum = getNumericCell(row, cols.odometerCol);
  const odometer = odometerNum === null ? null : Math.trunc(odometerNum);
  const gpsProvider = getUpperCell(row, cols.gpsCol);
  const makeNorm = normalizeSearchText(make);
  const modelNorm = normalizeSearchText(model);
  const stockNorm = normalizeSearchText(stockNumber);
  const yearText = year === null ? "" : String(year);
  const { lookupKey, lookupKeyNorm } = buildLookupKeys(make, model);
  const queryText = [yearText, make, model, stockNumber].filter(Boolean).join(" ").trim();
  const queryTokens = Array.from(new Set(splitSearchTerms(queryText)));
  const searchText = [yearText, makeNorm, modelNorm, stockNorm].filter(Boolean).join(" ");

  return {
    stockNumber,
    year,
    make,
    model,
    exteriorColor,
    odometer,
    gpsProvider,
    createdDate: createdDateRaw || null,
    daysInInventory,
    kb: {
      makeKey: make,
      modelKey: model,
      lookupKey,
      lookupKeyNorm,
    },
    queryText,
    queryTokens,
    search: {
      text: searchText,
      makeNorm,
      modelNorm,
    },
  };
}

function getTrimmedCell(row, col) {
  if (!col) return "";
  return String(row[col] || "").trim();
}

function getNumericCell(row, col) {
  if (!col) return null;
  return toNumber(row[col]);
}

function getUpperCell(row, col) {
  if (!col) return "";
  return toCanonicalUpper(row[col]);
}

function buildLookupKeys(make, model) {
  if (!make || !model) return { lookupKey: "", lookupKeyNorm: "" };
  return {
    lookupKey: `${make}::${model}`,
    lookupKeyNorm: buildKbLookupKey(make, model),
  };
}

function toCanonicalUpper(v) {
  return String(v || "")
    .trim()
    .replaceAll(/\s+/g, " ")
    .toUpperCase();
}

function normalizeSearchText(v) {
  return String(v || "")
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, " ")
    .trim()
    .replaceAll(/\s+/g, " ");
}

function splitSearchTerms(v) {
  const norm = normalizeSearchText(v);
  if (!norm) return [];
  return norm.split(" ").filter(Boolean);
}

function detectBodyTypeFromClassification(classification) {
  const c = normalizeSearchText(classification || "");
  if (!c) return null;
  if (c.includes("pickup") || c.includes("truck")) return "truck";
  if (c.includes("suv") || c.includes("crossover")) return "suv";
  if (c.includes("van")) return "van";
  if (c.includes("sedan")) return "sedan";
  if (c.includes("sports") || c.includes("sport") || c.includes("coupe")) return "sports";
  if (c.includes("off-road") || c.includes("offroad") || c.includes("utility")) return "truck";
  if (c.includes("station") || c.includes("wagon")) return "sedan";
  return null;
}

function getKbEntryForVehicle(includeKb, kb, lookupKeyNorm) {
  if (!includeKb || !kb?.ok) return null;
  return kb.index[lookupKeyNorm] || null;
}

function buildKbReference(entry) {
  if (!entry) return { found: false };
  return {
    found: true,
    classification: entry.classification,
    technicalBaseline: entry.technicalBaseline,
    ownershipBaseline: entry.ownershipBaseline,
    performanceBaseline: entry.performanceBaseline,
    maintenanceProfile: entry.maintenanceProfile,
    resaleTier: entry.resaleTier,
    usedRiskFlags: entry.usedRiskFlags,
    miamiFitNotes: entry.miamiFitNotes,
    buyerProfileFit: entry.buyerProfileFit,
    crossShopModels: entry.crossShopModels,
    inventoryMappingKey: entry.inventoryMappingKey,
    sources: entry.sources,
    lastVerified: entry.lastVerified,
  };
}


const KB_CACHE_TTL_MS = 6 * 60 * 60 * 1000;
let kbCache = {
  fetchedAtMs: 0,
  sourceUrl: "",
  index: null,
  error: null,
};

function getKbSourceUrl(env) {
  return env?.KB_SOURCE_URL || KB_VEHICLE_MD_URL;
}

function buildKbLookupKey(make, model) {
  return `${normalizeSearchText(make)}::${normalizeSearchText(model)}`;
}

async function getKnowledgeIndex(env) {
  const sourceUrl = getKbSourceUrl(env);
  const now = Date.now();
  const isFresh = kbCache.index && kbCache.sourceUrl === sourceUrl && now - kbCache.fetchedAtMs < KB_CACHE_TTL_MS;
  if (isFresh) {
    return {
      ok: true,
      sourceUrl,
      fetchedAt: new Date(kbCache.fetchedAtMs).toISOString(),
      index: kbCache.index,
    };
  }

  try {
    const res = await fetch(sourceUrl, {
      method: "GET",
      headers: { "user-agent": "dc-leads-processor/knowledge-fetcher" },
    });
    if (!res.ok) throw new Error(`KB fetch failed with status ${res.status}`);

    const markdown = await res.text();
    const index = parseKnowledgeMarkdown(markdown);
    kbCache = {
      fetchedAtMs: now,
      sourceUrl,
      index,
      error: null,
    };

    return {
      ok: true,
      sourceUrl,
      fetchedAt: new Date(now).toISOString(),
      index,
    };
  } catch (err) {
    kbCache = {
      fetchedAtMs: now,
      sourceUrl,
      index: null,
      error: err?.message || String(err),
    };
    return { ok: false, error: kbCache.error };
  }
}

function parseKnowledgeMarkdown(markdown) {
  const lines = String(markdown || "").replaceAll("\r", "").split("\n");
  const index = {};

  let inDatabase = false;
  let currentMake = "";
  let currentModel = "";
  let current = null;

  for (const line of lines) {
    const t = line.trim();
    if (!inDatabase) {
      if (t === "## VEHICLE KNOWLEDGE DATABASE") inDatabase = true;
      continue;
    }
    if (t.startsWith("## SOURCE & VERIFICATION RULE")) break;

    const makeMatch = /^###\s+(.+)$/.exec(t);
    if (makeMatch) {
      flushCurrentKbEntry(index, currentMake, currentModel, current);
      currentMake = toCanonicalUpper(makeMatch[1]);
      currentModel = "";
      current = null;
      continue;
    }

    const modelMatch = /^####\s+(.+)$/.exec(t);
    if (modelMatch) {
      flushCurrentKbEntry(index, currentMake, currentModel, current);
      currentModel = toCanonicalUpper(modelMatch[1]);
      current = createKbEntry(currentMake, currentModel);
      continue;
    }

    if (!current) continue;
    applyKbEntryField(current, t);
  }

  flushCurrentKbEntry(index, currentMake, currentModel, current);
  return index;
}

function createKbEntry(make, model) {
  return {
    make,
    model,
    classification: null,
    technicalBaseline: null,
    ownershipBaseline: null,
    performanceBaseline: null,
    sources: null,
    lastVerified: null,
    maintenanceProfile: null,
    resaleTier: null,
    usedRiskFlags: null,
    miamiFitNotes: null,
    buyerProfileFit: null,
    crossShopModels: null,
    inventoryMappingKey: null,
    aliases: null,
  };
}

const KB_ENTRY_LABELS = [
  ["- Classification:", "classification"],
  ["- Technical baseline:", "technicalBaseline"],
  ["- Ownership baseline:", "ownershipBaseline"],
  ["- Performance baseline:", "performanceBaseline"],
  ["- Maintenance profile:", "maintenanceProfile"],
  ["- Resale tier:", "resaleTier"],
  ["- Used risk flags:", "usedRiskFlags"],
  ["- Miami fit notes:", "miamiFitNotes"],
  ["- Buyer profile fit:", "buyerProfileFit"],
  ["- Cross-shop models:", "crossShopModels"],
  ["- Inventory mapping key:", "inventoryMappingKey"],
  ["- Aliases:", "aliases"],
  ["Sources:", "sources"],
  ["Last Verified:", "lastVerified"],
];

function applyKbEntryField(entry, line) {
  for (const [label, field] of KB_ENTRY_LABELS) {
    if (!line.startsWith(label)) continue;
    entry[field] = stripLabel(line, label);
    return true;
  }
  return false;
}

function stripLabel(line, label) {
  return String(line || "").slice(label.length).trim() || null;
}

function flushCurrentKbEntry(index, make, model, entry) {
  if (!entry || !make || !model) return;
  const key = buildKbLookupKey(make, model);
  index[key] = entry;
  if (entry.aliases) {
    const aliasList = entry.aliases.split(';').map(a => a.trim()).filter(Boolean);
    for (const alias of aliasList) {
      const aliasKey = buildKbLookupKey(make, alias);
      index[aliasKey] = entry;
    }
  }
}

function notFoundResponse() {
  return json(
    {
      ok: false,
      routes: [
        "/health",
        "/robots.txt",
        "/robots-worker.txt",
        "/ai.txt",
        // inventario
        "/latest",
        "/ready",
        "/status",
        "/latest/raw",
        "/latest/meta",
        "/stats",
        "/latest?fields=Make,Year,Model,Odometer",
        "/latest?sort=Make:asc,Year:desc,Odometer:asc",
        "/latest?group=Make&sort=Year:desc,Odometer:asc",
        "/ready?q=toyota+corolla&limit=20",
        "/ready?make=toyota&model=corolla&year=2022",
        "/ready?make=toyota&model=tacoma+double+cab",
        "/kb/lookup?make=toyota&model=tacoma%20double%20cab",
        "/kb/test",
        // mail
        "/mail/latest",
        "/mail/latest/raw",
        "/mail/list?limit=50",
        "/mail/get?id=mail/2026/02/18/<...>.json",
      ],
    },
    404
  );
}

async function getLatest(env) {
  const bucket = getInventoryBucket(env);
  const metaObj = await bucket.get("inventario/latest.json");
  if (!metaObj) return null;
  try {
    return JSON.parse(await metaObj.text());
  } catch {
    return null;
  }
}

async function handleStatus(env) {
  const bucket = getInventoryBucket(env);
  const kv = getMailKV(env);
  const nowMs = Date.now();

  const inventoryObj = await bucket.get("inventario/latest.json");
  let inventoryLatest = null;
  if (inventoryObj) {
    try {
      inventoryLatest = JSON.parse(await inventoryObj.text());
    } catch {
      inventoryLatest = null;
    }
  }

  const mailLatest = await kv.get("mail/latest.json", { type: "json" });
  const inventoryReceivedAt = inventoryLatest?.receivedAt || null;
  const mailReceivedAt = mailLatest?.receivedAt || null;

  return json({
    ok: true,
    inventory_receivedAt: inventoryReceivedAt,
    mail_receivedAt: mailReceivedAt,
    inventory_age_minutes: ageMinutes(nowMs, inventoryReceivedAt),
    mail_age_minutes: ageMinutes(nowMs, mailReceivedAt),
  });
}

function ageMinutes(nowMs, iso) {
  if (!iso) return null;
  const ts = new Date(iso).getTime();
  if (!Number.isFinite(ts)) return null;
  return Math.max(0, Math.floor((nowMs - ts) / 60000));
}

async function cleanupOldInventory(env) {
  const bucket = getInventoryBucket(env);
  const keepDays = 7;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - keepDays);

  console.log(JSON.stringify({ event: "CLEANUP_START", cutoff: cutoff.toISOString() }));

  let cursor;
  let deleted = 0;

  let truncated = false;
  do {
    const listed = await bucket.list({ prefix: "inventario/", cursor });
    cursor = listed.cursor;
    truncated = listed.truncated;

    const toDelete = collectKeysToDelete(listed.objects, cutoff);

    if (toDelete.length) {
      await bucket.delete(toDelete);
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

/* ---------- MAIL endpoints (KV) ---------- */

async function handleMailLatest(env) {
  const kv = getMailKV(env);
  const latest = await kv.get("mail/latest.json");
  if (!latest) return json({ ok: false, error: "No mail/latest.json yet" }, 404);
  return new Response(latest, { headers: { "content-type": "application/json" } });
}

async function handleMailLatestRaw(env) {
  const kv = getMailKV(env);
  const latestMeta = await kv.get("mail/latest.json", { type: "json" });
  if (!latestMeta?.id) return json({ ok: false, error: "No mail/latest.json yet" }, 404);

  const mail = await kv.get(latestMeta.id, { type: "json" });
  if (!mail) return json({ ok: false, error: "Latest mail not found" }, 404);

  return new Response(String(mail.text || ""), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

async function handleMailGet(url, env) {
  const kv = getMailKV(env);
  const id = url.searchParams.get("id") || "";
  if (!id.startsWith("mail/")) return json({ ok: false, error: "Missing/invalid id" }, 400);

  const mail = await kv.get(id, { type: "json" });
  if (!mail) return json({ ok: false, error: "Not found" }, 404);

  return json({ ok: true, mail });
}

async function handleMailList(url, env) {
  const kv = getMailKV(env);

  const limit = clampInt(url.searchParams.get("limit"), 1, 100, 50);

  // lista simple por prefijo (orden lexicogrÃ¡fico por la key: mail/YYYY/MM/DD/...)
  let cursor = url.searchParams.get("cursor") || undefined;
  const listed = await kv.list({ prefix: "mail/", cursor, limit });

  // filtrar items que sean json de correos (ignoramos mail/latest.json)
  const keys = (listed.keys || [])
    .map((k) => k.name)
    .filter((k) => k !== "mail/latest.json")
    .filter((k) => k.endsWith(".json"));

  return json({
    ok: true,
    count: keys.length,
    keys,
    cursor: listed.cursor || null,
    list_complete: listed.list_complete,
  });
}

async function cleanupOldMail(env) {
  const kv = getMailKV(env);
  const keepDays = 30;
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - keepDays);

  console.log(JSON.stringify({ event: "MAIL_CLEANUP_START", cutoff: cutoff.toISOString() }));

  let cursor;
  let deleted = 0;

  while (true) {
    const res = await kv.list({ prefix: "mail/", cursor, limit: 1000 });
    cursor = res.cursor;

    const toDelete = collectOldMailKeys(res.keys || [], cutoff);
    deleted += await deleteBatch(kv, toDelete);

    if (!cursor) break;
  }

  console.log(JSON.stringify({ event: "MAIL_CLEANUP_DONE", deleted }));
}

function collectOldMailKeys(keys, cutoff) {
  const toDelete = [];
  for (const k of keys) {
    const name = k.name;
    if (name === "mail/latest.json") continue;

    const dt = mailDateFromKey(name);
    if (dt && dt < cutoff) toDelete.push(name);
  }
  return toDelete;
}

async function deleteBatch(kv, keys) {
  let deleted = 0;
  for (let i = 0; i < keys.length; i += 500) {
    const chunk = keys.slice(i, i + 500);
    await Promise.all(chunk.map((key) => kv.delete(key)));
    deleted += chunk.length;
    console.log(JSON.stringify({ event: "MAIL_CLEANUP_DELETED_BATCH", count: chunk.length }));
  }
  return deleted;
}

function mailDateFromKey(key) {
  const m = key.match(/^mail\/(\d{4})\/(\d{2})\/(\d{2})\//);
  if (!m) return null;
  const [, y, mo, d] = m;
  const dt = new Date(`${y}-${mo}-${d}T00:00:00.000Z`);
  return Number.isNaN(dt.getTime()) ? null : dt;
}

function buildMailKey(receivedAtIso, msgId) {
  const dt = new Date(receivedAtIso);
  const yyyy = dt.getUTCFullYear();
  const mm = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(dt.getUTCDate()).padStart(2, "0");

  const safeId = sanitizeId(msgId || `${Date.now()}_${Math.random().toString(16).slice(2)}`);
  return `mail/${yyyy}/${mm}/${dd}/${safeId}.json`;
}

function sanitizeId(s) {
  return String(s || "msg")
    .trim()
    .replaceAll(/[^\w.\-@]+/g, "_")
    .slice(0, 180);
}

function clampInt(v, min, max, fallback) {
  if (v === null || v === undefined || String(v).trim() === "") return fallback;
  const n = Number(v);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(min, Math.min(max, Math.trunc(n)));
}

function clampText(text, maxLen) {
  const s = String(text || "");
  if (s.length <= maxLen) return s;
  return s.slice(0, maxLen) + "\n\n[TRUNCADO]";
}

/* ---------- Extract email text from raw ---------- */

function extractEmailText(raw) {
  // 1) Si es multipart: intenta encontrar text/plain primero, luego text/html
  const boundary = findBoundary(raw);
  if (boundary) {
    const parts = raw.split(`--${boundary}`);
    return processMultipart(parts);
  }

  // 2) No multipart: usa body luego de headers
  return { type: "singlepart", text: normalizeMailText(stripHeadersFallback(raw)), hasAttachments: false };
}

function processMultipart(parts) {
  const hasAttachments = parts.some(hasAttachment);

  const textParts = parts.filter(p => !hasAttachment(p)).map(p => ({
    type: getContentType(p),
    decoded: decodePartBody(p)
  })).filter(p => p.decoded);

  const textPlain = textParts.find(p => p.type.includes("text/plain"))?.decoded;
  const textHtml = textParts.find(p => p.type.includes("text/html"))?.decoded;

  if (textPlain) return { type: "text/plain", text: normalizeMailText(textPlain), hasAttachments };
  if (textHtml) return { type: "text/html", text: normalizeMailText(stripHtml(textHtml)), hasAttachments };

  // fallback
  return { type: "multipart/unknown", text: normalizeMailText(stripHeadersFallback(parts.join(""))), hasAttachments };
}

function hasAttachment(part) {
  return /Content-Disposition:\s*attachment/i.test(part);
}

function getContentType(part) {
  return (findHeader(part, "content-type") || "").toLowerCase();
}

function decodePartBody(part) {
  const encoding = (findHeader(part, "content-transfer-encoding") || "").toLowerCase();
  const body = extractBodyKeepLines(part);
  if (!body) return "";

  if (encoding.includes("base64")) {
    try {
      const bytes = base64ToUint8(body.replaceAll("\r\n", "").trim());
      return new TextDecoder("utf-8", { fatal: false, ignoreBOM: true }).decode(bytes);
    } catch {
      return "";
    }
  }

  if (encoding.includes("quoted-printable")) {
    return decodeQuotedPrintable(body);
  }

  // 7bit/8bit/unknown
  return body;
}

function stripHeadersFallback(raw) {
  const idx = raw.indexOf("\r\n\r\n");
  if (idx === -1) return raw;
  return raw.slice(idx + 4);
}

function normalizeMailText(s) {
  return String(s || "")
    .replaceAll("\r", "")
    .replaceAll("\u0000", "")
    .trim();
}

function stripHtml(html) {
  const noScript = String(html || "").replaceAll(/<script[\s\S]*?<\/script>/gi, "").replaceAll(/<style[\s\S]*?<\/style>/gi, "");
  const text = noScript
    .replaceAll(/<\/p>/gi, "\n\n")
    .replaceAll(/<br\s*\/?>/gi, "\n")
    .replaceAll(/<[^>]+>/g, " ");
  return text.replaceAll(/[ \t]+/g, " ").replaceAll(/\n{3,}/g, "\n\n").trim();
}

function decodeQuotedPrintable(input) {
  // bÃ¡sico y suficiente para emails comunes
  let s = String(input || "");
  // soft line breaks: =\r\n
  s = s.replaceAll(/=\r?\n/g, "");
  // =XX hex
  s = s.replaceAll(/=([A-Fa-f0-9]{2})/g, (_, hex) => String.fromCodePoint(Number.parseInt(hex, 16)));
  return s;
}

function extractBodyKeepLines(part) {
  const idx = part.indexOf("\r\n\r\n");
  if (idx === -1) return null;
  return part.slice(idx + 4).trim();
}

/* ---------- Multipart helpers (ya estaban) ---------- */

function findBoundary(raw) {
  const m1 = raw.match(/boundary="([^"]+)"/i);
  if (m1) return m1[1];
  const m2 = raw.match(/boundary='([^']+)'/i);
  if (m2) return m2[1];
  const m3 = raw.match(/boundary=([^\s;]+)/i);
  return m3 ? m3[1] : null;
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
  for (let i = 0; i < bin.length; i++) out[i] = bin.codePointAt(i) ?? 0;
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

/* ---------- CSV parsing (igual que antes) ---------- */

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

/* ---------- Real-data ordering/filtering/grouping (igual que antes) ---------- */

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


