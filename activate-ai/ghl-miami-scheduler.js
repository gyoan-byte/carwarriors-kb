/**
 * GHL Conversation AI Agent Scheduler (Miami TZ)
 * 
 * Schedules GHL AI agents based on Miami business hours.
 * Weekends: Always ON
 * Weekdays: ON before 8am or after 5pm, OFF during business hours
 * 
 * Environment Variables:
 * - LOCATION_IDS: Comma-separated location IDs
 * - AGENT_MAP_JSON: JSON mapping locationId -> agentId
 * - AGENT_ID_DEFAULT: Default agent ID fallback
 * - MODE_ON: Agent mode when enabled (default: "auto-pilot")
 * - MODE_OFF: Agent mode when disabled (default: "off")
 * - GHL_API_KEY: GHL API key
 * 
 * API Endpoints:
 * - GET /health: Health check
 * - GET /on: Enable agent
 * - GET /off: Disable agent
 * - GET /status: Get agent status
 * - GET /debug: Debug agent info
 * - GET /cron/run: Manual cron trigger
 */

const GHL_BASE = "https://services.leadconnectorhq.com";
const API_VERSION = "2021-07-28";

const BUILD = `ghl-agent-scheduler-build-${new Date().toISOString().split('T')[0].replace(/-/g, '')}-01`;

// Enhanced error handling and logging
function logError(operation, context, error) {
  console.error(JSON.stringify({
    timestamp: new Date().toISOString(),
    operation,
    locationId: context.locationId,
    agentId: context.agentId,
    error: error?.message || String(error),
    context
  }));
}

function logInfo(operation, context, data) {
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    operation,
    locationId: context.locationId,
    agentId: context.agentId,
    ...data
  }));
}

function createErrorResponse(error, status = 500, context = {}) {
  logError(error.operation || 'api_error', context, error);
  return json({
    ok: false,
    error: error.error || 'internal_server_error',
    message: error.message,
    timestamp: new Date().toISOString(),
    ...context
  }, status);
}

function createSuccessResponse(data, context = {}) {
  return json({
    ok: true,
    timestamp: new Date().toISOString(),
    ...data,
    ...context
  });
}

export default {
  async fetch(request, env, ctx) {
    const { path, params } = parseRequest(request);
    
    if (path === "/health") {
      return json({
        ok: true,
        worker: "ghl-conversation-ai-agent-scheduler",
        build: BUILD,
        tz_rule: "America/New_York (Miami)",
        base: GHL_BASE,
        api_version_header: API_VERSION,
        routes: ["/health", "/on", "/off", "/status", "/debug", "/cron/run"],
      });
    }

    const context = await buildRequestContext(env, params);
    
    if (needsLocationValidation(path) && !context.isValid) {
      return json(context.error, 400);
    }

    return await handleRoute(path, context, env);
  },

  async scheduled(event, env, ctx) {
    const desired = desiredStateMiami();
    await applyScheduleToAllLocations(env, desired);
  },
};

// Miami timezone business rules
function desiredStateMiami() {
  const now = miamiNowParts();
  const { weekday, minutes } = now;

  // Weekend: always ON
  if (weekday === 0 || weekday === 6) return true;

  // Weekday: ON before 8am or after 5pm
  const startWork = 8 * 60;
  const endWork = 17 * 60;

  return minutes < startWork || minutes >= endWork;
}

function miamiNowParts() {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = dtf.formatToParts(new Date());
  const map = Object.fromEntries(parts.map(p => [p.type, p.value]));
  const weekdayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  const weekday = weekdayMap[map.weekday] ?? 0;
  const hour = Number(map.hour);
  const minute = Number(map.minute);
  const minutes = hour * 60 + minute;

  return { weekday, hour, minute, minutes };
}

// Agent ID resolution from environment
function resolveAgentId(env, locationId) {
  const rawMap = (env.AGENT_MAP_JSON || "").trim();
  if (rawMap) {
    try {
      const map = JSON.parse(rawMap);
      const v = map?.[locationId];
      if (typeof v === "string" && v.trim()) return v.trim();
    } catch {}
  }
  return (env.AGENT_ID_DEFAULT || "").trim();
}

// GHL API mode helpers
function modeOn(env) {
  return (env.MODE_ON || "auto-pilot").toString();
}

function modeOff(env) {
  return (env.MODE_OFF || "off").toString();
}

async function getAgentRuntimeStatus(env, ids, apiKey) {
  const r = await ghlGetAgentRaw(env, ids, apiKey);
  if (!r.ok) return r;

  const agent = r.raw || {};
  const curMode = (agent.mode ?? "").toString();
  const enabled = curMode ? curMode.toLowerCase() === modeOn(env).toLowerCase() : null;

  return {
    ok: true,
    enabled,
    mode: curMode,
    agent: {
      name: agent.name ?? null,
      channels: agent.channels ?? null,
      waitTime: agent.waitTime ?? null,
      waitTimeUnit: agent.waitTimeUnit ?? null,
      sleepEnabled: agent.sleepEnabled ?? null,
      sleepTime: agent.sleepTime ?? null,
      sleepTimeUnit: agent.sleepTimeUnit ?? null,
    },
  };
}

async function setAgentEnabledByMode(env, ids, enabled, apiKey) {
  const current = await ghlGetAgentRaw(env, ids, apiKey);
  if (!current.ok) {
    return { ok: false, step: "get_agent", ...current, locationId: ids.locationId, agentId: ids.agentId };
  }

  const agent = current.raw || {};
  const curMode = (agent.mode ?? "").toString();
  const nextMode = enabled ? modeOn(env) : modeOff(env);

  if (curMode && curMode.toLowerCase() === nextMode.toLowerCase()) {
    return { ok: true, step: "noop", locationId: ids.locationId, agentId: ids.agentId, enabled, mode: curMode };
  }

  const payload = buildAgentUpdatePayloadRequired(agent, nextMode);
  if (!payload.ok) {
    return {
      ok: false,
      step: "build_payload",
      locationId: ids.locationId,
      agentId: ids.agentId,
      enabled,
      desiredMode: nextMode,
      error: payload.error,
      missing: payload.missing,
      hint: "Abre /debug y revisa si esos campos existen en el GET; si existen con otro nombre, ajustamos mapping.",
    };
  }

  const put = await ghlUpdateAgent(env, ids, payload.payload, apiKey);
  return buildUpdateResponse(put, ids, enabled, nextMode, payload.payload);
}

function buildUpdateResponse(put, ids, enabled, nextMode, payload) {
  const baseResponse = {
    locationId: ids.locationId,
    agentId: ids.agentId,
    enabled,
    desiredMode: nextMode,
    payloadSentKeys: Object.keys(payload),
    response: put,
  };

  return put.ok
    ? { ok: true, step: "update_agent", mode: nextMode, ...baseResponse }
    : { ok: false, step: "update_agent", ...baseResponse };
}

/**
 * Builds update payload with required fields.
 * Includes personality, goal, instructions, and mode.
 * Strips id fields to prevent API conflicts.
 */
function buildAgentUpdatePayloadRequired(agentRaw, nextMode) {
  const missing = [];

  const personality = agentRaw?.personality;
  const goal = agentRaw?.goal;
  const instructions = agentRaw?.instructions;

  if (personality === undefined || personality === null || personality === "") missing.push("personality");
  if (goal === undefined || goal === null || goal === "") missing.push("goal");
  if (instructions === undefined || instructions === null || instructions === "") missing.push("instructions");

  if (missing.length) {
    return { ok: false, error: "required_fields_missing_in_get", missing };
  }

  // Minimal safe payload with required fields only
  const payload = {
    personality,
    goal,
    instructions,
    mode: nextMode,
  };

  // Remove ID fields to prevent API conflicts
  delete payload.id;
  delete payload._id;

  return { ok: true, payload };
}

async function ghlGetAgentRaw(env, ids, apiKey) {
  const res = await fetch(`${GHL_BASE}/conversation-ai/agents/${encodeURIComponent(ids.agentId)}`, {
    method: "GET",
    headers: ghlHeaders(env, apiKey, ids.locationId),
  });

  const text = await res.text();
  let data = null;
  try {
    data = JSON.parse(text);
  } catch {}

  if (!res.ok) return { ok: false, status: res.status, body: safeTrunc(text, 1600), raw: data };
  return { ok: true, status: res.status, raw: data, body: safeTrunc(text, 1600) };
}

async function ghlUpdateAgent(env, ids, payload, apiKey) {
  const context = { locationId: ids.locationId, agentId: ids.agentId, operation: 'update_agent' };
  
  logInfo('update_agent_start', context, { keys: Object.keys(payload || {}) });

  try {
    const res = await fetch(`${GHL_BASE}/conversation-ai/agents/${encodeURIComponent(ids.agentId)}`, {
      method: "PUT",
      headers: { ...ghlHeaders(env, apiKey, ids.locationId), "content-type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await res.text();
    let data = null;
    try {
      data = JSON.parse(text);
    } catch {}

    const result = !res.ok 
      ? { ok: false, status: res.status, body: safeTrunc(text, 1600), raw: data }
      : { ok: true, status: res.status, raw: data, body: safeTrunc(text, 1600) };

    if (result.ok) {
      logInfo('update_agent_success', context, { status: res.status });
    } else {
      logError('update_agent_failed', context, { status: res.status, body: safeTrunc(text, 500) });
    }

    return result;
  } catch (error) {
    logError('update_agent_exception', context, error);
    return { ok: false, error: error.message, status: 0 };
  }
}

function ghlHeaders(env, apiKey, locationId) {
  const key = (apiKey || env.GHL_API_KEY || "").toString().trim();
  const headers = { accept: "application/json", version: API_VERSION };
  if (key) headers.authorization = `Bearer ${key}`;
  if (locationId) headers.locationId = locationId;
  return headers;
}

// Utility functions
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj, null, 2), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function safeTrunc(s, max) {
  s = (s || "").toString();
  return s.length > max ? s.slice(0, max) + "…" : s;
}

// Request parsing and context building
function parseRequest(request) {
  const url = new URL(request.url);
  return {
    path: url.pathname,
    params: {
      apiKey: (url.searchParams.get("apiKey") || "").trim(),
      locationId: (url.searchParams.get("locationId") || url.searchParams.get("loc") || "").trim(),
    }
  };
}

async function buildRequestContext(env, params) {
  let { locationId } = params;
  
  if (!locationId) {
    locationId = getLocationIds(env)[0] || "";
  }

  const agentId = resolveAgentId(env, locationId);
  const isValid = !!(locationId && agentId);
  
  return {
    locationId,
    agentId,
    apiKey: params.apiKey,
    isValid,
    error: isValid ? null : {
      ok: false,
      error: locationId ? "agentId_not_configured_for_location" : "missing_locationId",
      locationId,
      hint: locationId ? "Configura AGENT_MAP_JSON o AGENT_ID_DEFAULT" : undefined
    }
  };
}

function needsLocationValidation(path) {
  return ["/on", "/off", "/status", "/debug"].includes(path);
}

async function handleRoute(path, context, env) {
  const { locationId, agentId, apiKey } = context;
  
  switch (path) {
    case "/on":
      return handleAgentToggle(env, locationId, agentId, true, apiKey);
    case "/off":
      return handleAgentToggle(env, locationId, agentId, false, apiKey);
    case "/status":
      return handleAgentStatus(env, locationId, agentId, apiKey);
    case "/debug":
      return handleAgentDebug(env, locationId, agentId, apiKey);
    case "/cron/run":
      return handleCronRun(env, apiKey);
    default:
      return json({ ok: false, error: "not_found" }, 404);
  }
}

async function handleAgentToggle(env, locationId, agentId, enabled, apiKey) {
  try {
    const context = { locationId, agentId, operation: 'toggle_agent' };
    logInfo('toggle_agent_start', context, { enabled });
    
    const r = await setAgentEnabledByMode(env, { locationId, agentId }, enabled, apiKey);
    
    if (r.ok) {
      logInfo('toggle_agent_success', context, { enabled, mode: r.mode });
      return createSuccessResponse({ locationId, agentId, enabled, result: r }, { status: 200 });
    } else {
      return createErrorResponse(r, 500, context);
    }
  } catch (error) {
    return createErrorResponse({ operation: 'toggle_agent', error }, 500, { locationId, agentId });
  }
}

function handleAgentStatus(env, locationId, agentId, apiKey) {
  return getAgentRuntimeStatus(env, { locationId, agentId }, apiKey)
    .then(r => {
      if (r.ok) {
        return createSuccessResponse({ locationId, agentId, ...r }, { status: 200 });
      } else {
        return createErrorResponse(r, 500, { locationId, agentId, operation: 'get_status' });
      }
    })
    .catch(error => createErrorResponse({ operation: 'get_status', error }, 500, { locationId, agentId }));
}

function handleAgentDebug(env, locationId, agentId, apiKey) {
  return ghlGetAgentRaw(env, { locationId, agentId }, apiKey)
    .then(r => {
      if (r.ok) {
        return createSuccessResponse({ locationId, agentId, raw: r.raw, status: r.status, body: r.body }, { status: 200 });
      } else {
        return createErrorResponse(r, 500, { locationId, agentId, operation: 'debug_agent' });
      }
    })
    .catch(error => createErrorResponse({ operation: 'debug_agent', error }, 500, { locationId, agentId }));
}

async function handleCronRun(env, apiKey) {
  try {
    const ids = getLocationIds(env);
    const desired = desiredStateMiami();
    const results = [];
    const context = { operation: 'cron_run', desired };
    
    logInfo('cron_run_start', context, { locationCount: ids.length });

    for (const locationId of ids) {
      const agentId = resolveAgentId(env, locationId);
      if (!agentId) {
        const error = { locationId, ok: false, error: 'missing_agentId' };
        results.push(error);
        logError('cron_run_missing_agent', { locationId }, error);
        continue;
      }
      
      try {
        const r = await setAgentEnabledByMode(env, { locationId, agentId }, desired, apiKey);
        const result = { locationId, agentId, ok: r.ok, step: r.step, desired, mode: r.mode ?? r.desiredMode ?? null };
        results.push(result);
        
        if (r.ok) {
          logInfo('cron_run_success', { locationId, agentId }, result);
        } else {
          logError('cron_run_failed', { locationId, agentId }, r);
        }
      } catch (error) {
        const result = { locationId, agentId, ok: false, error: error.message };
        results.push(result);
        logError('cron_run_exception', { locationId, agentId }, error);
      }
    }

    return createSuccessResponse({ cronSimulated: true, desired, results }, { status: 200 });
  } catch (error) {
    return createErrorResponse({ operation: 'cron_run', error }, 500);
  }
}

function getLocationIds(env) {
  return (env.LOCATION_IDS || "").split(",").map(s => s.trim()).filter(Boolean);
}

async function applyScheduleToAllLocations(env, desired) {
  const ids = getLocationIds(env);
  const context = { operation: 'scheduled_cron', desired };

  if (!ids.length) {
    logInfo('scheduled_cron_skip', context, { reason: 'no_locations' });
    return;
  }

  logInfo('scheduled_cron_start', context, { locationCount: ids.length });
  let successCount = 0;
  let errorCount = 0;

  for (const locationId of ids) {
    const agentId = resolveAgentId(env, locationId);
    if (!agentId) {
      logError('scheduled_cron_missing_agent', { locationId }, { error: 'missing_agentId' });
      errorCount++;
      continue;
    }

    try {
      const r = await setAgentEnabledByMode(env, { locationId, agentId }, desired, "");
      if (r.ok) {
        logInfo('scheduled_cron_success', { locationId, agentId }, { mode: r.mode });
        successCount++;
      } else {
        logError('scheduled_cron_failed', { locationId, agentId }, r);
        errorCount++;
      }
    } catch (error) {
      logError('scheduled_cron_exception', { locationId, agentId }, error);
      errorCount++;
    }
  }

  logInfo('scheduled_cron_complete', context, { successCount, errorCount, total: ids.length });
}
