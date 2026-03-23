/**
 * GHL Multi-Account AI Agent Scheduler
 * 
 * Manages GHL AI agents across multiple accounts with individual schedules.
 * Each agent can have custom day-based schedules and time ranges.
 * 
 * Environment Variables:
 * - ACCOUNTS_CONFIG_JSON: JSON configuration with accounts, agents, and schedules
 * - MODE_ON_DEFAULT: Agent mode when enabled (default: "auto-pilot")
 * - MODE_OFF_DEFAULT: Agent mode when disabled (default: "off")
 * 
 * API Endpoints:
 * - GET /health: Health check
 * - GET /accounts: List all accounts
 * - GET /accounts/{accountId}/agents: List agents in account
 * - GET /accounts/{accountId}/agents/{agentId}/on: Enable agent
 * - GET /accounts/{accountId}/agents/{agentId}/off: Disable agent
 * - GET /accounts/{accountId}/agents/{agentId}/status: Get agent status
 * - GET /accounts/{accountId}/agents/{agentId}/debug: Debug agent info
 * - GET /config/validate: Validate configuration
 * - GET /cron/run: Manual cron trigger
 */

const GHL_BASE = "https://services.leadconnectorhq.com";
const API_VERSION = "2021-07-28";

const BUILD = `ghl-multi-agent-scheduler-build-${new Date().toISOString().split('T')[0].replace(/-/g, '')}-01`;

// Day mapping constants
const DAY_MAP = {
  'sunday': 0,
  'monday': 1,
  'tuesday': 2,
  'wednesday': 3,
  'thursday': 4,
  'friday': 5,
  'saturday': 6
};

// Enhanced error handling and logging with account context
function logError(operation, context, error) {
  console.error(JSON.stringify({
    timestamp: new Date().toISOString(),
    operation,
    accountId: context.accountId,
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
    accountId: context.accountId,
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
    const { path, pathParams, params } = parseRequest(request);
    
    if (path === "/health") {
      return json({
        ok: true,
        worker: "ghl-multi-agent-scheduler",
        build: BUILD,
        base: GHL_BASE,
        api_version_header: API_VERSION,
        routes: ["/health", "/accounts", "/accounts/{accountId}/agents", "/accounts/{accountId}/agents/{agentId}/on", "/accounts/{accountId}/agents/{agentId}/off", "/accounts/{accountId}/agents/{agentId}/status", "/accounts/{accountId}/agents/{agentId}/debug", "/config/validate", "/cron/run"],
      });
    }

    const context = await buildRequestContext(env, pathParams, params);
    
    if (needsValidation(path) && !context.isValid) {
      return json(context.error, 400);
    }

    return await handleRoute(path, context, env);
  },

  async scheduled(event, env, ctx) {
    await applyScheduleToAllAgents(env);
  },
};

// Configuration parsing functions
function parseAccountsConfig(env) {
  const rawConfig = (env.ACCOUNTS_CONFIG_JSON || "").trim();
  if (!rawConfig) {
    return { ok: false, error: "missing_accounts_config" };
  }
  
  try {
    const config = JSON.parse(rawConfig);
    if (!config.accounts || !Array.isArray(config.accounts)) {
      return { ok: false, error: "invalid_accounts_structure" };
    }
    return { ok: true, config };
  } catch (error) {
    return { ok: false, error: "invalid_json", details: error.message };
  }
}

function findAgentConfig(config, accountId, agentId) {
  const account = config.accounts.find(acc => acc.accountId === accountId);
  if (!account) return null;
  
  const agent = account.agents.find(ag => ag.agentId === agentId);
  if (!agent) return null;
  
  return { account, agent };
}

// Schedule evaluation functions
function evaluateAgentSchedule(schedule, timezone) {
  if (!schedule || !schedule.rules || !schedule.rules.length) {
    return { enabled: false, mode: null };
  }
  
  const now = getTimezoneParts(timezone);
  const currentDay = now.weekday; // 0 = Sunday, 1 = Monday, etc.
  const currentMinutes = now.minutes;
  
  // Check each rule in order
  for (const rule of schedule.rules) {
    if (!rule.days || !rule.timeRanges || !rule.timeRanges.length) continue;
    
    // Check if current day matches this rule
    const dayMatches = rule.days.some(day => DAY_MAP[day.toLowerCase()] === currentDay);
    if (!dayMatches) continue;
    
    // Check time ranges
    for (const timeRange of rule.timeRanges) {
      const startMinutes = timeToMinutes(timeRange.start);
      const endMinutes = timeToMinutes(timeRange.end);
      
      if (currentMinutes >= startMinutes && currentMinutes <= endMinutes) {
        return {
          enabled: true,
          mode: timeRange.mode || "auto-pilot",
          matchedRule: { days: rule.days, timeRange }
        };
      }
    }
  }
  
  return { enabled: false, mode: null };
}

function timeToMinutes(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}

function getTimezoneParts(timezone = "America/New_York") {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
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

// Agent ID resolution from environment (legacy compatibility)
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
  return (env.MODE_ON_DEFAULT || "auto-pilot").toString();
}

function modeOff(env) {
  return (env.MODE_OFF_DEFAULT || "off").toString();
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
  const key = (apiKey || "").toString().trim();
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
  const pathParts = url.pathname.split('/').filter(Boolean);
  
  // Extract path parameters for /accounts/{accountId}/agents/{agentId}/action patterns
  let pathParams = {};
  let path = url.pathname;
  
  if (pathParts[0] === 'accounts' && pathParts[2] === 'agents' && pathParts[4]) {
    pathParams = {
      accountId: pathParts[1],
      agentId: pathParts[3],
      action: pathParts[4]
    };
    // Normalize path for routing
    path = `/accounts/{accountId}/agents/{agentId}/${pathParts[4]}`;
  } else if (pathParts[0] === 'accounts' && pathParts[2] === 'agents') {
    pathParams = {
      accountId: pathParts[1]
    };
    path = '/accounts/{accountId}/agents';
  } else if (pathParts[0] === 'accounts') {
    path = '/accounts';
  }
  
  return {
    path,
    pathParams,
    params: {
      apiKey: (url.searchParams.get("apiKey") || "").trim(),
    }
  };
}

async function buildRequestContext(env, pathParams, params) {
  const configResult = parseAccountsConfig(env);
  
  if (!configResult.ok) {
    return {
      isValid: false,
      error: {
        ok: false,
        error: configResult.error,
        details: configResult.details,
        hint: "Configura ACCOUNTS_CONFIG_JSON"
      }
    };
  }
  
  const { config } = configResult;
  const { accountId, agentId } = pathParams;
  
  // If we have accountId and agentId, validate they exist
  if (accountId && agentId) {
    const agentConfig = findAgentConfig(config, accountId, agentId);
    if (!agentConfig) {
      return {
        isValid: false,
        error: {
          ok: false,
          error: "agent_not_found",
          accountId,
          agentId,
          hint: "Verifica que accountId y agentId existan en la configuración"
        }
      };
    }
    
    return {
      isValid: true,
      accountId,
      agentId,
      locationId: agentConfig.agent.locationId,
      apiKey: params.apiKey || agentConfig.account.ghlApiKey,
      accountConfig: agentConfig.account,
      agentConfig: agentConfig.agent,
      fullConfig: config
    };
  }
  
  // If we only have accountId, validate account exists
  if (accountId) {
    const account = config.accounts.find(acc => acc.accountId === accountId);
    if (!account) {
      return {
        isValid: false,
        error: {
          ok: false,
          error: "account_not_found",
          accountId,
          hint: "Verifica que accountId exista en la configuración"
        }
      };
    }
    
    return {
      isValid: true,
      accountId,
      apiKey: params.apiKey || account.ghlApiKey,
      accountConfig: account,
      fullConfig: config
    };
  }
  
  // No specific account/agent context (for /accounts, /config/validate, etc.)
  return {
    isValid: true,
    apiKey: params.apiKey,
    fullConfig: config
  };
}

function needsValidation(path) {
  return ["/accounts/{accountId}/agents/{agentId}/on", "/accounts/{accountId}/agents/{agentId}/off", "/accounts/{accountId}/agents/{agentId}/status", "/accounts/{accountId}/agents/{agentId}/debug"].includes(path);
}

async function handleRoute(path, context, env) {
  const { accountId, agentId, apiKey, accountConfig, agentConfig, fullConfig } = context;
  
  switch (path) {
    case "/accounts":
      return handleAccountsList(fullConfig);
    case "/accounts/{accountId}/agents":
      return handleAccountAgents(accountConfig);
    case "/accounts/{accountId}/agents/{agentId}/on":
      return handleAgentToggle(env, accountId, agentId, agentConfig, true, apiKey);
    case "/accounts/{accountId}/agents/{agentId}/off":
      return handleAgentToggle(env, accountId, agentId, agentConfig, false, apiKey);
    case "/accounts/{accountId}/agents/{agentId}/status":
      return handleAgentStatus(env, accountId, agentId, agentConfig, apiKey);
    case "/accounts/{accountId}/agents/{agentId}/debug":
      return handleAgentDebug(env, accountId, agentId, agentConfig, apiKey);
    case "/config/validate":
      return handleConfigValidate(fullConfig);
    case "/cron/run":
      return handleCronRun(env, apiKey);
    default:
      return json({ ok: false, error: "not_found" }, 404);
  }
}

// New handler functions for multi-account support
async function handleAccountsList(config) {
  const accounts = config.accounts.map(acc => ({
    accountId: acc.accountId,
    name: acc.name,
    agentCount: acc.agents ? acc.agents.length : 0
  }));
  
  return createSuccessResponse({ accounts });
}

async function handleAccountAgents(account) {
  const agents = account.agents.map(agent => ({
    agentId: agent.agentId,
    name: agent.name,
    locationId: agent.locationId,
    timezone: agent.schedule?.timezone || "America/New_York",
    hasSchedule: !!(agent.schedule && agent.schedule.rules)
  }));
  
  return createSuccessResponse({ accountId: account.accountId, accountName: account.name, agents });
}

async function handleConfigValidate(config) {
  const issues = [];
  const warnings = [];
  
  // Validate structure
  if (!config.accounts || !Array.isArray(config.accounts)) {
    issues.push("Estructura de configuración inválida: falta 'accounts' array");
  }
  
  config.accounts.forEach((account, accIndex) => {
    if (!account.accountId) issues.push(`Cuenta ${accIndex}: falta accountId`);
    if (!account.name) warnings.push(`Cuenta ${accIndex}: falta name`);
    if (!account.ghlApiKey) issues.push(`Cuenta ${account.accountId}: falta ghlApiKey`);
    
    if (account.agents && Array.isArray(account.agents)) {
      account.agents.forEach((agent, agIndex) => {
        if (!agent.agentId) issues.push(`Agente ${agIndex} en cuenta ${account.accountId}: falta agentId`);
        if (!agent.locationId) issues.push(`Agente ${agent.agentId}: falta locationId`);
        
        if (agent.schedule) {
          if (!agent.schedule.rules || !agent.schedule.rules.length) {
            warnings.push(`Agente ${agent.agentId}: schedule sin reglas`);
          } else {
            agent.schedule.rules.forEach((rule, ruleIndex) => {
              if (!rule.days || !rule.days.length) {
                issues.push(`Agente ${agent.agentId} regla ${ruleIndex}: sin días`);
              }
              if (!rule.timeRanges || !rule.timeRanges.length) {
                issues.push(`Agente ${agent.agentId} regla ${ruleIndex}: sin timeRanges`);
              }
            });
          }
        }
      });
    }
  });
  
  return createSuccessResponse({
    valid: issues.length === 0,
    issues,
    warnings,
    summary: {
      accounts: config.accounts?.length || 0,
      totalAgents: config.accounts?.reduce((sum, acc) => sum + (acc.agents?.length || 0), 0) || 0,
      issues: issues.length,
      warnings: warnings.length
    }
  });
}

async function handleAgentToggle(env, accountId, agentId, agentConfig, enabled, apiKey) {
  try {
    const context = { accountId, agentId, operation: 'toggle_agent' };
    logInfo('toggle_agent_start', context, { enabled });
    
    const r = await setAgentEnabledByMode(env, { accountId, agentId, locationId: agentConfig.locationId }, enabled, apiKey);
    
    if (r.ok) {
      logInfo('toggle_agent_success', context, { enabled, mode: r.mode });
      return createSuccessResponse({ accountId, agentId, enabled, result: r }, { status: 200 });
    } else {
      return createErrorResponse(r, 500, context);
    }
  } catch (error) {
    return createErrorResponse({ operation: 'toggle_agent', error }, 500, { accountId, agentId });
  }
}

function handleAgentStatus(env, accountId, agentId, agentConfig, apiKey) {
  return getAgentRuntimeStatus(env, { accountId, agentId, locationId: agentConfig.locationId }, apiKey)
    .then(r => {
      if (r.ok) {
        return createSuccessResponse({ accountId, agentId, ...r }, { status: 200 });
      } else {
        return createErrorResponse(r, 500, { accountId, agentId, operation: 'get_status' });
      }
    })
    .catch(error => createErrorResponse({ operation: 'get_status', error }, 500, { accountId, agentId }));
}

async function handleAgentDebug(env, accountId, agentId, agentConfig, apiKey) {
  return ghlGetAgentRaw(env, { accountId, agentId, locationId: agentConfig.locationId }, apiKey)
    .then(r => {
      if (r.ok) {
        // Add current schedule evaluation to debug info
        const scheduleResult = evaluateAgentSchedule(agentConfig.schedule, agentConfig.schedule?.timezone || "America/New_York");
        
        // Extract and organize GHL agent configuration
        const agent = r.raw || {};
        const ghlConfig = {
          id: agent.id,
          name: agent.name,
          mode: agent.mode,
          status: agent.status,
          personality: agent.personality,
          goal: agent.goal,
          instructions: agent.instructions,
          channels: agent.channels,
          waitTime: agent.waitTime,
          waitTimeUnit: agent.waitTimeUnit,
          sleepEnabled: agent.sleepEnabled,
          sleepTime: agent.sleepTime,
          sleepTimeUnit: agent.sleepTimeUnit,
          createdAt: agent.createdAt,
          updatedAt: agent.updatedAt
        };
        
        return createSuccessResponse({ 
          accountId, 
          agentId, 
          locationId: agentConfig.locationId,
          ghlConfig,
          raw: r.raw, 
          status: r.status, 
          body: r.body,
          schedule: {
            timezone: agentConfig.schedule?.timezone || "America/New_York",
            rules: agentConfig.schedule?.rules || [],
            currentEvaluation: scheduleResult
          }
        }, { status: 200 });
      } else {
        return createErrorResponse(r, 500, { accountId, agentId, operation: 'debug_agent' });
      }
    })
    .catch(error => createErrorResponse({ operation: 'debug_agent', error }, 500, { accountId, agentId }));
}

async function handleCronRun(env, apiKey) {
  try {
    const configResult = parseAccountsConfig(env);
    if (!configResult.ok) {
      return createErrorResponse(configResult, 500, { operation: 'cron_run' });
    }
    
    const { config } = configResult;
    const results = [];
    const context = { operation: 'cron_run' };
    
    logInfo('cron_run_start', context, { accountCount: config.accounts.length });

    for (const account of config.accounts) {
      for (const agent of account.agents) {
        try {
          const scheduleResult = evaluateAgentSchedule(agent.schedule, agent.schedule?.timezone || "America/New_York");
          const desired = scheduleResult.enabled;
          const desiredMode = scheduleResult.mode || modeOff(env);
          
          const r = await setAgentEnabledByMode(env, 
            { accountId: account.accountId, agentId: agent.agentId, locationId: agent.locationId }, 
            desired, 
            account.ghlApiKey
          );
          
          const result = {
            accountId: account.accountId,
            agentId: agent.agentId,
            ok: r.ok,
            step: r.step,
            desired,
            desiredMode,
            currentMode: r.mode ?? r.desiredMode ?? null,
            matchedRule: scheduleResult.matchedRule
          };
          results.push(result);
          
          if (r.ok) {
            logInfo('cron_run_success', { accountId: account.accountId, agentId: agent.agentId }, result);
          } else {
            logError('cron_run_failed', { accountId: account.accountId, agentId: agent.agentId }, r);
          }
        } catch (error) {
          const result = { accountId: account.accountId, agentId: agent.agentId, ok: false, error: error.message };
          results.push(result);
          logError('cron_run_exception', { accountId: account.accountId, agentId: agent.agentId }, error);
        }
      }
    }

    return createSuccessResponse({ 
      cronSimulated: true, 
      results,
      summary: {
        total: results.length,
        success: results.filter(r => r.ok).length,
        failed: results.filter(r => !r.ok).length
      }
    }, { status: 200 });
  } catch (error) {
    return createErrorResponse({ operation: 'cron_run', error }, 500);
  }
}

async function applyScheduleToAllAgents(env) {
  const configResult = parseAccountsConfig(env);
  
  if (!configResult.ok) {
    logInfo('scheduled_cron_skip', { operation: 'scheduled_cron' }, { 
      reason: 'invalid_config', 
      error: configResult.error 
    });
    return;
  }
  
  const { config } = configResult;
  const context = { operation: 'scheduled_cron' };

  logInfo('scheduled_cron_start', context, { accountCount: config.accounts.length });
  let successCount = 0;
  let errorCount = 0;
  let totalAgents = 0;

  for (const account of config.accounts) {
    for (const agent of account.agents) {
      totalAgents++;
      
      try {
        const scheduleResult = evaluateAgentSchedule(agent.schedule, agent.schedule?.timezone || "America/New_York");
        const desired = scheduleResult.enabled;
        
        const r = await setAgentEnabledByMode(env, 
          { accountId: account.accountId, agentId: agent.agentId, locationId: agent.locationId }, 
          desired, 
          account.ghlApiKey
        );
        
        if (r.ok) {
          logInfo('scheduled_cron_success', { accountId: account.accountId, agentId: agent.agentId }, { 
            mode: r.mode,
            desired,
            matchedRule: scheduleResult.matchedRule
          });
          successCount++;
        } else {
          logError('scheduled_cron_failed', { accountId: account.accountId, agentId: agent.agentId }, r);
          errorCount++;
        }
      } catch (error) {
        logError('scheduled_cron_exception', { accountId: account.accountId, agentId: agent.agentId }, error);
        errorCount++;
      }
    }
  }

  logInfo('scheduled_cron_complete', context, { 
    successCount, 
    errorCount, 
    total: totalAgents,
    accounts: config.accounts.length
  });
}
