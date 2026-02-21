## Authority Notice
This module is subordinate to the Authority Hierarchy defined in README.md.
If any rule conflicts, the following override order applies:

1. Safety and Compliance (07)
2. Financing Policy (03)
3. Inventory Policy (02)
4. All other modules

# System Version: v1.0
# Completion Status: Production-Ready Technical Knowledge Base
# Total Models: 57
# Total Brands: 24
# Final TBD Count: 0
# Last Full Audit Date: 2026-02-19

## Worker Parsing Contract
- This file is machine-readable by the inventory Worker.
- Database section starts at `## VEHICLE KNOWLEDGE DATABASE`.
- Brand header format: `### BRAND NAME` (uppercase preferred).
- Model header format: `#### Model Name`.
- Parsed technical fields under each model:
- `- Classification:`
- `- Technical baseline:`
- `- Ownership baseline:`
- `- Performance baseline:`
- `Sources:`
- `Last Verified:`
- Keep these labels and header levels stable to avoid parser breaks.

## Certification Status
System Integrity: VERIFIED
Compliance Status: CLEAN
Models Audited: 57
Brands Audited: 24
Final Data Gaps: 0
Certification Date: 2026-02-19

## Release Notes (v1.0)
- Includes: U.S.-market generation mapping, engine/transmission tables, EPA MPG tables, dimensions,
- known issues, maintenance profiles, pros/cons, technical ownership context for all listed models.
- Does not include: pricing, financing decisions, payment commitments, legal approval language,
- or confirmed live inventory.
- N/A/TBD scope: heavy-duty and classic models may show N/A for EPA light-duty MPG fields where publication is
- not consistent or not applicable.
- Update method: verify changes using OEM technical specs first, then EPA fuel economy data, then NHTSA recall records.
# CarWarriors_Vehicle_Knowledge_System

## GLOBAL RULES

## Production Safety Override (Active)
- Due to ongoing technical consistency audit, this module is in `SAFE_MODE`.
- In `SAFE_MODE`, the system may provide only:
- high-level segment guidance (SUV/sedan/truck/hybrid/EV),
- ownership themes (maintenance complexity, practical use-case fit),
- and process-safe recommendations aligned with inventory/financing guardrails.
- In `SAFE_MODE`, the system must not provide as final:
- generation codes, exact engine/transmission mappings, exact MPG tables, exact dimensions, or trim-level technical claims from this file.
- If the user asks for exact technical specs:
- state naturally that exact technical confirmation is completed by a team advisor,
- provide one safe high-level alternative,
- and escalate to a team advisor for exact confirmation.
- This override remains active until the next full technical re-audit is completed and certified.
- Re-audit execution must follow `18_Vehicle_Knowledge_Reaudit_Plan.md` stage gates.

## Inventory Separation Rule
Vehicle knowledge does NOT imply inventory availability.
All availability must be verified only through `Carros Listos`.
- Technical knowledge only; no pricing, financing terms (advisor verified),
- payment structure (advisor verified), approval guarantee, or confirmed availability.
- If unit-level facts are missing, explain that final confirmation is completed by a team advisor and escalate.
- Keep responses concise, structured, and verification-first.
- Do not imply final inventory status; advisor confirms live status.
- Prefer U.S.-market specifications unless explicitly stated otherwise.
- Channel usage follows `knowledge_base/07_Safety_Compliance.md`.

## RESPONSE ENGINE
- Step 1: Identify customer intent (body type, use case, fuel type, budget sensitivity, family/commercial need).
- Step 2: Match one primary model + one alternative model.
- Step 3: In `SAFE_MODE`, present high-level technical summary only (classification, use-case fit, ownership profile).
- Step 4: Runtime messaging behavior is external to this module and follows agent engine rules.
- Step 5: Transition to team advisor for exact specs and unit-specific confirmation.

Response format template:
1. Vehicle fit summary
2. High-level technical context
3. Ownership and maintenance considerations
4. Advisor handoff transition

## MIAMI CONTEXT INTELLIGENCE
- High heat and humidity increase importance of A/C performance, battery health, and cooling system condition.
- Stop-and-go traffic elevates fuel economy relevance and transmission thermal stress.
- Tight parking favors compact/midsize SUV footprints for urban users.
- South Florida demand is strong in compact SUVs, luxury SUVs, and EVs with reliable charging access.
- Feature priorities commonly include: strong A/C, tint compatibility, cabin heat management, and easy daily usability.

## ALTERNATIVE MATCHING LOGIC
1. Same model, different year/generation.
2. Same brand, similar body style and use case.
3. Same segment alternative (mainstream or luxury equivalent).
4. If no direct match: prioritize practical fit for Miami operation (A/C, efficiency, maneuverability, reliability).

## ESCALATION RULES
- Escalate when customer asks for exact unit availability, final numbers, financing decision, or legal/contract terms.
- Escalate when technical data is incomplete, conflicting, or trim-specific beyond verified sources.
- Escalate when customer requests VIN-level history, inspection records, or warranty specifics.
- Escalate when safety recall status must be confirmed at VIN level.

## MARKET PRIORITY
1. SUV/crossover fit for city + highway use.
2. Reliability and maintenance predictability.
3. Fuel efficiency or EV suitability for commute pattern.
4. Safety technology and family practicality.
5. Luxury/performance preferences after core usability fit.

## VEHICLE KNOWLEDGE DATABASE

### ALFA ROMEO

#### Giulia
- Classification: Compact luxury sport sedan
- Technical baseline: Sharp steering response, premium interior materials, performance-oriented suspension
- Ownership baseline: Sport-luxury maintenance requirements, specialized service needs
- Performance baseline: Available turbocharged engines, RWD/AWD configurations

Generation overview (U.S.):
- 952 generation: 2017-present (U.S. launch in MY2017).
- Major refresh: MY2020 (infotainment/interior updates), MY2023 (facelift and lighting/trim updates).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 952 (2017-present) | 2.0L I4 | Turbo | 8-speed AT; RWD/AWD |
| 952 Quadrifoglio (2017-present) | 2.9L V6 | Twin-Turbo | 8-speed AT; RWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 952 2.0T (recent EPA sample) | RWD | 24 | 33 | 27 |
| 952 Quadrifoglio (EPA sample) | RWD | 17 | 24 | 20 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~182.6 in |
| Width (in) | ~73.7 in |
| Height (in) | ~56.5 in |
| Wheelbase (in) | ~111.0 in |
| Cargo (cu ft) | ~13.4 cu ft |
| Passenger capacity | 5 |

Typical known issues by generation:
- 952: Commonly reported electrical/infotainment glitches, battery-related warning cascades,
- and occasional coolant/thermostat leak reports.
- NHTSA recalls include safety-system and component campaigns by model year; verify exact applicability by VIN.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Premium-brand parts/labor and specialized diagnostics increase running cost versus mainstream sedans.

Pros:
- Sharp steering and chassis balance.
- Strong performance options (2.0T and Quadrifoglio V6).
- Distinctive design and cabin character.

Cons:
- Reliability variability versus Japanese/German mainstream benchmarks.
- Smaller dealer/service network in some markets.
- Rear-seat and trunk practicality trail some midsize sedans.




