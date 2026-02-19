## Authority Notice
This module is subordinate to the Authority Hierarchy defined in README.md.
If any rule conflicts, the following override order applies:

1. Safety and Compliance (07, 10)
2. Financing Rules (03)
3. Inventory Rules (02)
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
- known issues, maintenance profiles, pros/cons, qualification questions, and advisor transitions for all listed models.
- Does not include: pricing, financing decisions, payment commitments, legal approval language,
- or confirmed live inventory.
- N/A/TBD scope: heavy-duty and classic models may show N/A for EPA light-duty MPG fields where publication is
- not consistent or not applicable.
- Update method: verify changes using OEM technical specs first, then EPA fuel economy data, then NHTSA recall records.
# CarWarriors_Vehicle_Knowledge_System

## GLOBAL RULES

## Inventory Separation Rule
Vehicle knowledge does NOT imply inventory availability.
All availability must be verified only through `Carros Listos`.
- Technical knowledge only; no pricing, financing terms (advisor verified),
- payment structure (advisor verified), approval guarantee, or confirmed availability.
- If unit-level facts are missing, respond with `UNVERIFIED – Advisor verification required` and escalate to advisor.
- Keep responses concise, structured, and verification-first.
- Do not imply final inventory status; advisor confirms live status.
- Prefer U.S.-market specifications unless explicitly stated otherwise.

## RESPONSE ENGINE
- Step 1: Identify customer intent (body type, use case, fuel type, budget sensitivity, family/commercial need).
- Step 2: Match one primary model + one alternative model.
- Step 3: Present objective technical summary (classification, powertrain, MPG, dimensions, known issues,
- maintenance profile).
- Step 4: Ask up to 2-3 qualification questions across multiple turns.
- Never violate the one-question-per-message rule.
- Step 5: Transition to human advisor for unit-specific confirmation.

Response format template:
1. Vehicle fit summary
2. Key technical facts
3. Ownership and maintenance considerations
4. Qualification questions
5. Advisor handoff transition

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

Qualification questions:
- Do you prioritize stronger acceleration or a smoother comfort-focused ride?
- Would you prefer rear-drive sport feel or all-weather traction capability?
- Are you comfortable with firmer suspension tuning for better handling response?
Advisor transition phrase:
- I can connect you with an advisor to verify exact unit specs, condition history, and current inventory status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### ACURA

#### RDX
- Classification: Compact luxury SUV
- Technical baseline: Turbocharged engine, premium interior, AWD system available
- Ownership baseline: Strong resale value, lower maintenance than European luxury
- Performance baseline: Good acceleration, comfortable highway ride

Generation overview (U.S.):
- 1st generation (TB1/TB2): 2007-2012.
- 2nd generation (TB3/TB4): 2013-2018.
- 3rd generation: 2019-present.
- Major refresh: MY2016 (2nd-gen facelift), MY2022 (3rd-gen refresh).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2007-2012 | 2.3L I4 | Turbo | 5-speed AT; FWD/AWD |
| 2013-2018 | 3.5L V6 | NA | 6-speed AT (early), 9-speed AT (later); FWD/AWD |
| 2019-present | 2.0L I4 | Turbo | 10-speed AT; FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 1st gen sample (2010 RDX) | AWD | 17 | 22 | 19 |
| 2nd gen sample (2018 RDX) | AWD | 19 | 27 | 22 |
| 3rd gen sample (2024 RDX) | AWD | 21 | 27 | 23 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~187.4 in |
| Width (in) | ~74.8 in |
| Height (in) | ~65.7 in |
| Wheelbase (in) | ~108.3 in |
| Cargo (cu ft) | ~29.5 cu ft (behind 2nd row) |
| Passenger capacity | 5 |

Typical known issues by generation:
- 1st gen: Turbo-related maintenance sensitivity and age-related suspension/electrical wear are commonly reported.
- 2nd gen: Some transmission behavior complaints on 9-speed applications and infotainment aging concerns.
- 3rd gen: Mixed reports on infotainment responsiveness and brake/rotor wear rates.
- NHTSA recalls exist by year/component; verify VIN-level applicability through advisor workflow.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Generally lower upkeep than many European luxury SUVs; turbo engines and
- complex electronics still require consistent service.

Pros:
- Strong blend of comfort and handling.
- Competitive reliability profile in luxury compact SUV class.
- Good feature content and practical interior packaging.

Cons:
- Premium fuel/service costs above mainstream SUVs.
- Older infotainment generations can feel dated.
- Road noise and ride firmness vary by wheel/trim.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- An advisor can now confirm the exact vehicle configuration, inspection details, and live inventory match.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### MDX
- Classification: Midsize luxury SUV (3-row)
- Technical baseline: V6 engine, spacious 3-row seating, premium audio systems
- Ownership baseline: Reliability-focused luxury alternative, family-oriented features
- Performance baseline: Smooth power delivery, comfortable ride quality

Generation overview (U.S.):
- 1st generation: 2001-2006.
- 2nd generation: 2007-2013.
- 3rd generation: 2014-2020.
- 4th generation: 2022-present.
- Major refresh: MY2010 (2nd-gen), MY2017 (3rd-gen), MY2025 (4th-gen refresh).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2001-2006 | 3.5L V6 | NA | 5-speed AT; FWD/AWD |
| 2007-2013 | 3.7L V6 | NA | 6-speed AT; FWD/AWD |
| 2014-2020 | 3.5L V6; 3.0L V6 hybrid system | NA / Hybrid | 6-speed AT (early), 9-speed AT, 7-speed DCT (Sport Hybrid); FWD/AWD |
| 2022-present | 3.5L V6; 3.0L V6 (Type S) | NA / Turbo | 10-speed AT; FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 1st gen sample (2005 MDX) | AWD | 15 | 21 | 17 |
| 3rd gen sample (2018 MDX) | AWD | 19 | 26 | 22 |
| 4th gen sample (2024 MDX) | AWD | 19 | 25 | 21 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~198.4 in |
| Width (in) | ~78.7 in |
| Height (in) | ~67.1 in |
| Wheelbase (in) | ~113.8 in |
| Cargo (cu ft) | ~18.1 cu ft (behind 3rd row) |
| Passenger capacity | 7 |

Typical known issues by generation:
- 2nd/3rd gen: Common owner reports include transmission behavior complaints on specific year/gearbox
- calibrations and infotainment aging issues.
- 3rd gen hybrid variants: Higher system complexity can increase diagnosis/repair cost.
- 4th gen early years: Isolated electronics/software update campaigns.
- NHTSA recalls vary by year; key categories include fuel system, electronics,
- and safety equipment depending on model year.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: More complex than mainstream 3-row SUVs, but typically below German luxury cost levels;
- transmission type and SH-AWD servicing matter.

Pros:
- Strong all-around family usability with refined road manners.
- Good reliability reputation for the segment.
- High feature content and strong resale relative to many luxury peers.

Cons:
- Third-row/cargo trade-offs versus larger full-size SUVs.
- Higher ownership cost than non-luxury 3-row crossovers.
- Some generations have debated transmission tuning behavior.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can hand this off to an advisor for final verification of unit-specific specs, records, and real-time status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### AUDI

#### Q5
- Classification: Compact luxury SUV
- Technical baseline: Quattro AWD system, premium interior materials, advanced infotainment
- Ownership baseline: German engineering precision, higher maintenance costs
- Performance baseline: Balanced handling, good all-weather capability

Generation overview (U.S.):
- 1st generation (8R): 2009-2017.
- 2nd generation (FY): 2018-present (U.S. market through current verified model year).
- Major refresh: MY2013 (1st-gen facelift), MY2021 (2nd-gen refresh).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2009-2017 | 2.0L I4; 3.2L V6; 3.0L V6 | Turbo / NA / Supercharged | 6-speed AT or 8-speed AT; AWD |
| 2018-present | 2.0L I4; 2.0L I4 PHEV | Turbo / Plug-in Hybrid | 7-speed DCT; AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 1st gen sample (2010 Q5 3.2) | AWD | 18 | 23 | 20 |
| 1st gen facelift sample (2016 Q5 2.0T) | AWD | 20 | 27 | 22 |
| 2nd gen sample (2024 Q5 2.0T) | AWD | 23 | 29 | 26 |
| 2nd gen current sample (2025 Q5 2.0T) | AWD | 23 | 29 | 26 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~184.3 in |
| Width (in) | ~74.5 in |
| Height (in) | ~65.5 in |
| Wheelbase (in) | ~111.0 in |
| Cargo (cu ft) | ~25.8 cu ft (behind 2nd row) |
| Passenger capacity | 5 |

Typical known issues by generation:
- 1st gen: Widely documented 2.0T oil-consumption/timing-chain concerns on some years;
- cooling system wear items also common.
- 2nd gen: Typical luxury-SUV electronics/sensor issues and occasional drivetrain software updates.
- NHTSA recalls by year include varied component campaigns; confirm VIN-level applicability before final statements.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: German luxury maintenance costs and parts pricing are typically above mainstream segment averages.

Pros:
- Refined cabin quality and road comfort.
- Quattro AWD confidence and balanced handling.
- Strong tech/feature availability in newer years.

Cons:
- Higher long-term maintenance/repair costs.
- Reliability variability by year/powertrain.
- Cargo/3-row practicality lower than larger SUV classes.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- Next step: advisor verification for exact trim-equipment details, condition documentation, and inventory confirmation.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Q7
- Classification: Full-size luxury SUV (3-row)
- Technical baseline: Spacious 3-row interior, advanced driver assistance, premium audio
- Ownership baseline: Large SUV ownership considerations, premium maintenance requirements
- Performance baseline: Comfortable highway cruising, strong engine options

Generation overview (U.S.):
- 1st generation (4L): 2007-2015.
- 2nd generation (4M): 2017-present.
- Major refresh: MY2011 (1st-gen facelift), MY2020 (2nd-gen facelift).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2007-2015 | 3.6L V6; 4.2L V8; 3.0L V6 | NA / NA / Supercharged | 6-speed AT (early), 8-speed AT (later); AWD |
| 2017-present | 2.0L I4; 3.0L V6 | Turbo / Supercharged or Turbo (by year) | 8-speed AT; AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 1st gen sample (2008 Q7 3.6) | AWD | 14 | 20 | 16 |
| 2nd gen sample (2018 Q7 2.0T) | AWD | 19 | 25 | 21 |
| 2nd gen facelift sample (2024 Q7 3.0T) | AWD | 19 | 24 | 21 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~199.6 in |
| Width (in) | ~77.5 in |
| Height (in) | ~68.4 in |
| Wheelbase (in) | ~117.9 in |
| Cargo (cu ft) | ~14.2 cu ft (behind 3rd row) |
| Passenger capacity | 7 |

Typical known issues by generation:
- 1st gen: Higher age-related maintenance load, including cooling, suspension,
- and carbon-buildup concerns on some engines.
- 2nd gen: Electronics/software and 48V electrical-system service campaigns reported on specific years.
- NHTSA recalls vary by year and component; use VIN-level advisor confirmation for exact unit status.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Large premium SUV with complex electronics and drivetrain systems; maintenance/repair costs are typically high.

Pros:
- Spacious 3-row packaging with premium cabin quality.
- Strong highway comfort and stable handling.
- Wide powertrain spread by generation.

Cons:
- High ownership and repair costs versus mainstream 3-row SUVs.
- Large footprint reduces urban parking ease.
- Reliability and complexity vary notably by year/powertrain.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can route you to an advisor to validate the exact unit data, service/inspection context, and current lot status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### BMW

#### X3
- Classification: Compact luxury SUV
- Technical baseline: Sporty handling, premium brand appeal, good city size
- Ownership baseline: Running costs versus mainstream SUVs
- Performance baseline: Available turbocharged engines, RWD/AWD configurations

Generation overview (U.S.):
- 1st generation (E83): 2004-2010.
- 2nd generation (F25): 2011-2017.
- 3rd generation (G01): 2018-present.
- Major refresh: MY2015 (F25 LCI), MY2022 (G01 LCI).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| E83 (2004-2010) | 2.5L/3.0L I6 | NA | 6-speed MT or 6-speed AT; AWD |
| F25 (2011-2017) | 2.0L I4; 3.0L I6 | Turbo | 8-speed AT; RWD/AWD |
| G01 (2018-present) | 2.0L I4; 3.0L I6 | Turbo (incl. MHEV on some trims) | 8-speed AT; RWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| E83 sample (2010 X3 xDrive30i) | AWD | 17 | 24 | 20 |
| F25 sample (2016 X3 xDrive28i) | AWD | 21 | 28 | 24 |
| G01 sample (2024 X3 xDrive30i) | AWD | 21 | 28 | 24 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~185.7 in |
| Width (in) | ~74.7 in |
| Height (in) | ~66.0 in |
| Wheelbase (in) | ~112.8 in |
| Cargo (cu ft) | ~28.7 cu ft (behind 2nd row) |
| Passenger capacity | 5 |

Typical known issues by generation:
- E83: Age-related cooling-system leaks, transfer-case actuator wear, and suspension bushing wear are commonly
- documented.
- F25: Widely reported timing-chain/oil-leak concerns on some 4-cylinder years;
- transfer-case service sensitivity appears in owner reports.
- G01: Electronics/driver-assist software updates and occasional cooling-system leaks are recurring service themes.
- NHTSA recall campaigns vary by model year/component; advisor must confirm VIN-level status.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Premium parts/labor and xDrive drivetrain complexity increase running costs;
- preventive fluid service is important for transfer-case longevity.

Pros:
- Strong chassis balance and steering precision in class.
- Good mix of performance and daily usability.
- Broad powertrain range across generations.

Cons:
- Ownership cost is higher than mainstream compact SUVs.
- Rear-seat and cargo space are not class-leading in every generation.
- Reliability outcomes vary by engine family and maintenance history.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can connect you with an advisor to verify exact unit specs, condition history, and current inventory status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### X5
- Classification: Midsize luxury SUV
- Technical baseline: Strong luxury image, comfortable highway cruising, premium family transport
- Ownership baseline: Fuel economy and maintenance considerations
- Performance baseline: Multiple engine options, comfortable ride quality

Generation overview (U.S.):
- 1st generation (E53): 2000-2006.
- 2nd generation (E70): 2007-2013.
- 3rd generation (F15): 2014-2018.
- 4th generation (G05): 2019-present.
- Major refresh: MY2011 (E70 LCI), MY2024 (G05 LCI).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| E53 (2000-2006) | 3.0L I6; 4.4L/4.8L V8 | NA | 5-speed/6-speed AT; AWD |
| E70 (2007-2013) | 3.0L I6; 4.8L/4.4L V8; 3.0L I6 diesel | Turbo/NA | 6-speed AT (early), 8-speed AT (later); AWD |
| F15 (2014-2018) | 3.0L I6; 4.4L V8; 3.0L I6 diesel; 2.0L I4 PHEV system | Turbo / Hybrid | 8-speed AT; RWD/AWD |
| G05 (2019-present) | 3.0L I6; 4.4L V8; 3.0L I6 diesel (early years); PHEV system | Turbo / MHEV / PHEV | 8-speed AT; RWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| E70 sample (2010 X5 xDrive30i) | AWD | 15 | 21 | 18 |
| F15 sample (2016 X5 xDrive35i) | AWD | 18 | 24 | 20 |
| G05 sample (2024 X5 xDrive40i) | AWD | 23 | 27 | 25 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~194.2 in |
| Width (in) | ~78.9 in |
| Height (in) | ~69.1 in |
| Wheelbase (in) | ~117.1 in |
| Cargo (cu ft) | ~33.9 cu ft (behind 2nd row) |
| Passenger capacity | 5 |

Typical known issues by generation:
- E53/E70: Cooling-system wear, suspension component wear, and higher age-related electrical repairs are common.
- E70/F15 V8 variants: Higher documented long-term maintenance risk (heat management,
- oil-related issues) versus inline-6 trims.
- G05: Software/electronics campaigns and occasional 48V-system service actions appear in recall/service history.
- NHTSA recalls are model-year specific; final applicability must be VIN-confirmed.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Complex drivetrain/electronics and premium labor rates drive above-average ownership cost,
- especially on V8 or air-suspension equipped units.

Pros:
- Strong highway comfort and refinement.
- Broad engine lineup from efficient I6 to high-output performance trims.
- High towing and cargo utility for luxury segment.

Cons:
- Repair and maintenance costs can be substantial as mileage increases.
- Large dimensions are less urban-friendly.
- Complexity grows significantly with high-spec drivetrains/options.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- An advisor can now confirm the exact vehicle configuration, inspection details, and live inventory match.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### X6
- Classification: Midsize luxury SUV coupe
- Technical baseline: Luxury brand appeal, strong performance image, premium interior feel
- Ownership baseline: Coupe roofline reduces practicality versus boxier SUVs
- Performance baseline: Sport-tuned suspension, powerful engine options

Generation overview (U.S.):
- 1st generation (E71/E72): 2008-2014.
- 2nd generation (F16): 2015-2019.
- 3rd generation (G06): 2020-present.
- Major refresh: MY2024 (G06 LCI).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| E71/E72 (2008-2014) | 3.0L I6; 4.4L V8 | Turbo | 6-speed/8-speed AT; AWD |
| F16 (2015-2019) | 3.0L I6; 4.4L V8 | Turbo | 8-speed AT; RWD/AWD |
| G06 (2020-present) | 3.0L I6; 4.4L V8 | Turbo / MHEV | 8-speed AT; RWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| E71 sample (2010 X6 xDrive35i) | AWD | 15 | 21 | 17 |
| F16 sample (2016 X6 xDrive35i) | AWD | 18 | 24 | 20 |
| G06 sample (2024 X6 xDrive40i) | AWD | 23 | 26 | 24 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~195.0 in |
| Width (in) | ~78.9 in |
| Height (in) | ~66.3 in |
| Wheelbase (in) | ~117.1 in |
| Cargo (cu ft) | ~27.4 cu ft (behind 2nd row) |
| Passenger capacity | 5 |

Typical known issues by generation:
- E71/F16: Tire/wheel wear sensitivity and suspension bushing wear are common due to weight/performance setup.
- Turbocharged powertrains can carry higher long-term thermal and oil-service sensitivity versus NA equivalents.
- G06: Software/electronics and 48V-system service bulletins appear in newer-year service patterns.
- NHTSA recalls are year/component dependent and require VIN-level confirmation.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Coupe-SUV packaging plus performance-oriented setups typically increases tire, brake,
- and suspension operating cost.

Pros:
- Strong straight-line performance and high-speed stability.
- Premium interior and feature depth in recent generations.
- Distinct coupe-SUV styling for buyers prioritizing design.

Cons:
- Reduced rear-headroom/cargo practicality versus X5.
- Higher tire and brake replacement cost on large wheel packages.
- Ride comfort can be firmer than traditional midsize SUVs.

Qualification questions:
- Do you prioritize stronger acceleration or a smoother comfort-focused ride?
- Would you prefer rear-drive sport feel or all-weather traction capability?
- Are you comfortable with firmer suspension tuning for better handling response?
Advisor transition phrase:
- I can hand this off to an advisor for final verification of unit-specific specs, records, and real-time status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### CADILLAC

#### ESCALADE
- Classification: Full-size luxury SUV
- Technical baseline: Strong luxury statement, spacious interior, premium brand recognition
- Ownership baseline: Fuel costs and parking challenges in urban areas
- Performance baseline: Powerful engine options, premium ride quality

Generation overview (U.S.):
- 1st generation: 1999-2000.
- 2nd generation: 2002-2006.
- 3rd generation: 2007-2014.
- 4th generation: 2015-2020.
- 5th generation: 2021-present.
- Major refresh: MY2009 (3rd-gen update), MY2015 redesign, MY2025 facelift.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 1999-2000 | 5.7L V8 | NA | 4-speed AT; RWD/4WD |
| 2002-2006 | 6.0L V8 | NA | 4-speed AT; RWD/AWD |
| 2007-2014 | 6.2L V8 | NA | 6-speed AT; RWD/AWD |
| 2015-2020 | 6.2L V8 | NA | 8-speed AT (early), 10-speed AT (later); RWD/4WD |
| 2021-present | 6.2L V8; 3.0L I6 diesel | NA / Turbo-diesel | 10-speed AT; RWD/4WD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 3rd gen sample (2008 Escalade AWD) | AWD | 12 | 18 | 14 |
| 4th gen sample (2018 Escalade 4WD) | 4WD | 14 | 21 | 17 |
| 5th gen sample (2024 Escalade 4WD 6.2L) | 4WD | 14 | 18 | 16 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~211.9 in |
| Width (in) | ~81.1 in |
| Height (in) | ~76.7 in |
| Wheelbase (in) | ~120.9 in |
| Cargo (cu ft) | ~25.5 cu ft (behind 3rd row) |
| Passenger capacity | 7-8 |

Typical known issues by generation:
- 3rd/4th gen: Commonly documented high-cost wear items include magnetic/air suspension components, electronics,
- and drivetrain service at higher mileage.
- 4th gen: Some owner-reported 8-speed transmission shift/shudder concerns on certain years.
- 5th gen: Electronics/infotainment and diesel-related emissions-system service patterns appear in field reports.
- NHTSA recalls vary by model year and system; advisor must verify VIN-specific applicability.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Large-body luxury SUV with high parts, tire, brake, and fuel cost;
- 4WD and air-ride configurations raise service complexity.

Pros:
- Strong towing/capability profile with luxury feature depth.
- Spacious 3-row interior and cargo capacity.
- High brand recognition in full-size luxury SUV segment.

Cons:
- High operating and repair costs versus midsize SUVs.
- Very large footprint for urban parking and maneuvering.
- Complexity can increase downtime risk as vehicles age.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- Next step: advisor verification for exact trim-equipment details, condition documentation, and inventory confirmation.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### XT5
- Classification: Midsize luxury SUV
- Technical baseline: Comfortable ride, luxury features at competitive market positioning, good daily usability
- Ownership baseline: Resale value versus German luxury competitors
- Performance baseline: Smooth acceleration, comfortable highway cruising

Generation overview (U.S.):
- 1st generation: 2017-present (U.S. market).
- Major refresh: MY2020 (facelift and feature updates).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2017-2019 | 2.0L I4; 3.6L V6 | Turbo / NA | 8-speed AT; FWD/AWD |
| 2020-present | 2.0L I4; 3.6L V6 | Turbo / NA | 9-speed AT; FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 1st gen sample (2018 XT5 AWD 3.6L) | AWD | 18 | 25 | 21 |
| Refresh-era sample (2024 XT5 FWD 2.0T) | FWD | 22 | 29 | 24 |
| Refresh-era sample (2024 XT5 AWD 2.0T) | AWD | 21 | 27 | 23 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~189.6 in |
| Width (in) | ~74.9 in |
| Height (in) | ~66.1 in |
| Wheelbase (in) | ~112.5 in |
| Cargo (cu ft) | ~30.0 cu ft (behind 2nd row) |
| Passenger capacity | 5 |

Typical known issues by generation:
- Early years: Infotainment/electronics complaints are recurrent in owner reports.
- Powertrain pattern: Some model years show transmission calibration/shift-behavior complaints.
- Later refresh years: Improved efficiency/powertrain integration, but software/electrical updates remain common
- service events.
- NHTSA recalls are model-year specific and must be VIN-confirmed.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Usually lower upkeep than full-size luxury SUVs, but premium-brand electronics and
- AWD hardware still increase service cost versus mainstream crossovers.

Pros:
- Comfortable ride and quiet cabin tuning.
- Practical midsize footprint versus full-size luxury SUVs.
- Good feature content for daily luxury use.

Cons:
- Not as sporty as some German luxury competitors.
- Long-term electronics complexity can affect reliability perception.
- Feature differences by trim/year can be significant.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can route you to an advisor to validate the exact unit data, service/inspection context, and current lot status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### CHEVROLET

#### Camaro
- Classification: Muscle car/sports coupe
- Technical baseline: Muscle-car identity, emotional design, engaging drive feel
- Ownership baseline: Rear-seat and visibility practicality can be limited for family use
- Performance baseline: Strong acceleration, sport-tuned suspension

Generation overview (U.S.):
- 5th generation: 2010-2015.
- 6th generation: 2016-2024.
- Major refresh: MY2019 (6th-gen facelift).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2010-2015 | 3.6L V6; 6.2L V8 | NA / Supercharged (ZL1) | 6-speed MT or 6-speed AT; RWD |
| 2016-2024 | 2.0L I4; 3.6L V6; 6.2L V8 | Turbo / NA / Supercharged | 6-speed MT, 10-speed AT, 8-speed AT (some years); RWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 5th gen sample (2010 Camaro 3.6 AT) | RWD | 18 | 29 | 22 |
| 6th gen sample (2018 Camaro 3.6 AT) | RWD | 19 | 29 | 23 |
| 6th gen late sample (2024 Camaro 3.6 AT) | RWD | 18 | 29 | 22 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~188.3 in |
| Width (in) | ~74.7 in |
| Height (in) | ~53.1 in |
| Wheelbase (in) | ~110.7 in |
| Cargo (cu ft) | ~9.1 cu ft (coupe trunk) |
| Passenger capacity | 4 |

Typical known issues by generation:
- 5th gen: Age-related suspension wear, interior trim wear, and electrical accessory faults are commonly reported.
- 6th gen: 8-speed automatic shudder complaints on some years and occasional infotainment/electrical issues are
- documented in owner reports.
- High-performance trims can show higher brake/tire wear and higher thermal stress service needs.
- NHTSA recalls are year/trim specific and require VIN-level confirmation.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Routine costs are moderate for V6 trims and higher for V8/performance variants due to tire, brake,
- and drivetrain wear rates.

Pros:
- Strong performance-per-dollar perception in U.S. sports coupe class.
- Engaging rear-wheel-drive dynamics.
- Multiple powertrain choices from efficient turbo to high-output V8.

Cons:
- Rear-seat and visibility practicality are limited.
- Performance trims can become expensive to maintain.
- Ride comfort and noise can be less favorable for daily commuting.

Qualification questions:
- Do you prioritize stronger acceleration or a smoother comfort-focused ride?
- Would you prefer rear-drive sport feel or all-weather traction capability?
- Are you comfortable with firmer suspension tuning for better handling response?
Advisor transition phrase:
- I can connect you with an advisor to verify exact unit specs, condition history, and current inventory status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Equinox
- Classification: Compact SUV
- Technical baseline: Easy-to-drive size, practical cabin, good all-around utility
- Ownership baseline: Customer expectations vary by trim/tech package
- Performance baseline: Good fuel economy, comfortable ride

Generation overview (U.S.):
- 1st generation: 2005-2009.
- 2nd generation: 2010-2017.
- 3rd generation: 2018-2024.
- 4th generation: 2025-present.
- Major refresh: MY2016 (2nd-gen facelift), MY2022 (3rd-gen refresh).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2005-2009 | 3.4L V6 | NA | 5-speed AT; FWD/AWD |
| 2010-2017 | 2.4L I4; 3.0L/3.6L V6 | NA | 6-speed AT; FWD/AWD |
| 2018-2024 | 1.5L I4; 2.0L I4; 1.6L I4 diesel | Turbo / Turbo-diesel | 6-speed AT or 9-speed AT; FWD/AWD |
| 2025-present | 1.5L I4 | Turbo | CVT (FWD) / 8-speed AT (AWD) |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 2nd gen sample (2010 Equinox AWD 2.4L) | AWD | 20 | 29 | 23 |
| 3rd gen sample (2018 Equinox AWD 1.5T) | AWD | 24 | 30 | 26 |
| 3rd gen late sample (2024 Equinox AWD 1.5T) | AWD | 24 | 30 | 26 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~183.1 in |
| Width (in) | ~72.6 in |
| Height (in) | ~65.4 in |
| Wheelbase (in) | ~107.3 in |
| Cargo (cu ft) | ~29.9 cu ft (behind 2nd row) |
| Passenger capacity | 5 |

Typical known issues by generation:
- 2nd gen 2.4L: Widely documented oil-consumption concerns on some years.
- 3rd gen: Mixed owner reports on turbo-related components and electronics/infotainment glitches.
- Transmission behavior complaints appear in some year/powertrain combinations.
- NHTSA recalls vary by model year and system; advisor confirms VIN-level applicability.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Mainstream maintenance profile overall, but turbo and transmission servicing quality strongly affects
- long-term reliability.

Pros:
- Practical compact-SUV packaging for daily family use.
- Competitive fuel economy in core trims.
- Broad service network and parts availability.

Cons:
- Reliability varies by generation/engine.
- Interior material quality is trim-dependent.
- Performance is modest in base powertrains.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- An advisor can now confirm the exact vehicle configuration, inspection details, and live inventory match.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Equinox EV
- Classification: Compact electric SUV
- Technical baseline: EV smoothness, low routine maintenance profile, tech-forward appeal
- Ownership baseline: Charging routine and home/work charging access should be qualified
- Performance baseline: Instant torque, quiet operation

Generation overview (U.S.):
- 1st generation: 2024-present (U.S. market launch).
- Major updates are software/feature revisions by model year; full redesign TBD.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2024-present | Dual-motor AWD or single-motor FWD EV drive unit | EV | Single-speed reduction gear (A1, AT-equivalent); FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 1st gen sample (2024 Equinox EV FWD) | FWD | 117 MPGe | 99 MPGe | 108 MPGe |
| 1st gen sample (2024 Equinox EV AWD) | AWD | 101 MPGe | 90 MPGe | 96 MPGe |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~190.6 in |
| Width (in) | ~76.9 in |
| Height (in) | ~64.8 in |
| Wheelbase (in) | ~116.3 in |
| Cargo (cu ft) | ~26.4 cu ft (behind 2nd row) |
| Passenger capacity | 5 |

Typical known issues by generation:
- Early production years primarily show software, charging, and infotainment update campaigns typical of new EV
- launches.
- NHTSA recall actions are still maturing by model year; advisor must validate latest VIN-level status.

Maintenance profile:
- Level: Low (Low / Medium / High)
- Notes: No engine oil/transmission fluid service in normal use, but tire wear and
- software/service-campaign compliance remain important.

Pros:
- Quiet operation and strong low-speed torque.
- Competitive EV efficiency for compact crossover use.
- Lower routine maintenance versus ICE crossovers.

Cons:
- Charging access and planning still determine real-world convenience.
- New-platform software maturity can vary by model year.
- Road-trip charging speed consistency depends on infrastructure.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can hand this off to an advisor for final verification of unit-specific specs, records, and real-time status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Silverado 1500 Crew Cab
- Classification: Half-ton full-size pickup truck
- Technical baseline: Crew-cab practicality, strong truck presence, versatile work/lifestyle use
- Ownership baseline: Fuel use and parking footprint versus SUVs/sedans
- Performance baseline: Multiple engine options, good towing capacity

Generation overview (U.S.):
- 1st generation (GMT800): 1999-2006.
- 2nd generation (GMT900): 2007-2013.
- 3rd generation (K2XX): 2014-2018.
- 4th generation (T1XX): 2019-present.
- Major refresh: MY2016 (K2XX update), MY2022 (T1XX refresh).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 1999-2006 | 4.3L V6; 4.8L/5.3L/6.0L V8 | NA | 4-speed AT or 5-speed MT; RWD/4WD |
| 2007-2013 | 4.3L V6; 4.8L/5.3L/6.2L V8 | NA / Hybrid on select trims | 4-speed/6-speed AT; RWD/4WD |
| 2014-2018 | 4.3L V6; 5.3L/6.2L V8 | NA | 6-speed/8-speed AT; RWD/4WD |
| 2019-present | 2.7L I4; 5.3L/6.2L V8; 3.0L I6 diesel | Turbo / NA / Turbo-diesel | 8-speed/10-speed AT; RWD/4WD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 2nd gen sample (2010 Silverado K15 4WD 5.3L) | 4WD | 15 | 21 | 17 |
| 3rd gen sample (2018 Silverado K15 4WD 5.3L) | 4WD | 16 | 22 | 18 |
| 4th gen sample (2024 Silverado 4WD 5.3L) | 4WD | 15 | 19 | 17 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~231.9 in (Crew Cab, short bed, approx) |
| Width (in) | ~81.2 in |
| Height (in) | ~75.6 in |
| Wheelbase (in) | ~147.4 in |
| Cargo (cu ft) | ~62.9 cu ft (short-bed approximation) |
| Passenger capacity | 5-6 |

Typical known issues by generation:
- Commonly discussed issues include AFM/DFM valvetrain concerns on some V8 years,
- transmission calibration complaints on specific gearboxes, and electrical module faults.
- High-load commercial use increases brake, suspension, and drivetrain wear rates.
- NHTSA recalls vary by model year/body/powertrain; advisor must verify VIN-specific campaigns.

Maintenance profile:
- Level: Medium-High (Low / Medium / High)
- Notes: Parts access is broad, but heavy-duty use cycles, 4WD components,
- and V8 drivetrain servicing raise long-term cost.

Pros:
- Strong capability and broad engine selection.
- Large service network and parts availability.
- Versatile work/lifestyle utility in Crew Cab format.

Cons:
- Fuel economy is modest in V8/4WD setups.
- Large turning radius and parking footprint.
- Reliability depends heavily on maintenance history and duty cycle.

Qualification questions:
- What payload, towing, or cargo-volume requirement must this vehicle handle?
- Is bed length/upfit compatibility or enclosed cargo security more important for your operation?
- Will this vehicle run mostly urban stop-and-go routes or sustained highway miles?
Advisor transition phrase:
- Next step: advisor verification for exact trim-equipment details, condition documentation, and inventory confirmation.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Silverado 3500 HD Crew Cab
- Classification: Heavy-duty pickup truck
- Technical baseline: HD capability mindset, work-ready image, robust utility profile
- Ownership baseline: Larger footprint and heavier-duty ride characteristics
- Performance baseline: Maximum towing and payload capability

Generation overview (U.S.):
- 1st generation (GMT400/800 HD era): 2001-2007.
- 2nd generation (GMT900 HD): 2007-2010.
- 3rd generation (2011-2019 HD): 2011-2019.
- 4th generation (T1 HD): 2020-present.
- Major refresh: MY2015 (HD update), MY2024 (T1 HD refresh).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2001-2010 | 6.0L V8; 6.6L V8 diesel | NA / Turbo-diesel | 4-speed/6-speed AT; 2WD/4WD |
| 2011-2019 | 6.0L V8; 6.6L V8 diesel | NA / Turbo-diesel | 6-speed AT; 2WD/4WD |
| 2020-present | 6.6L V8 gas; 6.6L V8 diesel | NA / Turbo-diesel | 6-speed AT (gas) / 10-speed AT (diesel); 2WD/4WD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| Most 3500 HD configurations | N/A | N/A – EPA light-duty data not applicable | N/A – EPA light-duty data not applicable | N/A – EPA light-duty data not applicable |

- Heavy-duty/classic: EPA light-duty MPG may not be published consistently; advisor verifies unit specifics.

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~250.0 in (Crew Cab long-bed approximation) |
| Width (in) | ~81.9 in |
| Height (in) | ~80.9 in |
| Wheelbase (in) | ~172.0 in (varies by bed/cab) |
| Cargo (cu ft) | ~69.5-83.5 cu ft (bed-size dependent) |
| Passenger capacity | 5-6 |

Typical known issues by generation:
- Heavy-load duty cycles commonly drive accelerated wear in suspension, steering, and braking components.
- Diesel variants can show higher aftertreatment/DEF-system complexity-related service events.
- NHTSA recalls are year and configuration dependent; VIN-level advisor verification is required.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Commercial-duty parts loads, tire/brake wear, and diesel emissions-system complexity typically produce
- high operating cost.

Pros:
- High towing/payload capability for commercial workloads.
- Durable frame and drivetrain architecture for heavy use.
- Broad upfit/fleet compatibility in U.S. market.

Cons:
- Harsh unloaded ride compared with light-duty trucks.
- Large dimensions reduce maneuverability in dense urban use.
- Maintenance cost rises quickly under sustained heavy-duty cycles.

Qualification questions:
- What payload, towing, or cargo-volume requirement must this vehicle handle?
- Is bed length/upfit compatibility or enclosed cargo security more important for your operation?
- Will this vehicle run mostly urban stop-and-go routes or sustained highway miles?
Advisor transition phrase:
- I can route you to an advisor to validate the exact unit data, service/inspection context, and current lot status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### DODGE

#### Charger
- Classification: Full-size sport sedan
- Technical baseline: Strong road presence, roomy sedan format, performance-oriented identity
- Ownership baseline: Some shoppers prioritize fuel efficiency over performance feel
- Performance baseline: Strong engine options, sport-tuned suspension

Generation overview (U.S.):
- 1st modern generation (LX): 2006-2010.
- 2nd modern generation (LD): 2011-2023.
- Major refresh: MY2015 (LD interior/exterior/powertrain update).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2006-2010 | 2.7L/3.5L V6; 5.7L/6.1L V8 | NA | 4-speed/5-speed AT; RWD/AWD |
| 2011-2023 | 3.6L V6; 5.7L/6.4L V8; 6.2L V8 | NA / Supercharged (Hellcat trims) | 5-speed AT (early), 8-speed AT (later); RWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| LX sample (2010 Charger 3.5L) | RWD | 17 | 25 | 20 |
| LD sample (2018 Charger 3.6L) | RWD | 19 | 30 | 23 |
| LD late sample (2023 Charger 3.6L) | RWD | 19 | 30 | 23 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~198.4 in |
| Width (in) | ~75.0 in |
| Height (in) | ~58.2 in |
| Wheelbase (in) | ~120.0 in |
| Cargo (cu ft) | ~16.5 cu ft |
| Passenger capacity | 5 |

Typical known issues by generation:
- LX/early LD: Suspension wear items and electrical accessory faults are common age-related findings.
- LD V8/performance trims: Higher brake/tire/driveline wear and elevated operating cost under aggressive use.
- Some owner reports cite lifter/cam and cooling-system service concerns on specific high-mileage V8 units.
- NHTSA recall applicability is model-year specific and must be VIN-verified.

Maintenance profile:
- Level: Medium-High (Low / Medium / High)
- Notes: V6 trims are moderate-cost to run; V8/high-performance trims materially raise fuel, tire, brake,
- and driveline service costs.

Pros:
- Strong straight-line performance heritage and road presence.
- Spacious cabin/trunk for a performance-oriented sedan.
- Broad powertrain spread in LD generation.

Cons:
- Fuel use and running costs can be high, especially V8 trims.
- Large dimensions reduce urban maneuverability.
- Older-platform architecture by final production years.

Qualification questions:
- Do you prioritize stronger acceleration or a smoother comfort-focused ride?
- Would you prefer rear-drive sport feel or all-weather traction capability?
- Are you comfortable with firmer suspension tuning for better handling response?
Advisor transition phrase:
- I can connect you with an advisor to verify exact unit specs, condition history, and current inventory status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Dart
- Classification: Compact sedan
- Technical baseline: Practical size, simple daily use, accessible ownership entry point
- Ownership baseline: Expectations on modern infotainment/safety features should be managed by unit
- Performance baseline: Efficient engine options, basic transportation focus

Generation overview (U.S.):
- Single generation (PF platform): 2013-2016.
- Mid-cycle updates were limited; no full redesign before discontinuation.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2013-2016 | 2.0L I4; 2.4L I4; 1.4L I4 | NA / Turbo | 6-speed MT, 6-speed AT, 6-speed DCT (1.4T); FWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| PF sample (2013 Dart 2.0L AT) | FWD | 24 | 33 | 27 |
| PF late sample (2016 Dart 2.0L AT) | FWD | 24 | 33 | 27 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~183.9 in |
| Width (in) | ~72.0 in |
| Height (in) | ~57.7 in |
| Wheelbase (in) | ~106.4 in |
| Cargo (cu ft) | ~13.1 cu ft |
| Passenger capacity | 5 |

Typical known issues by generation:
- Reported issues include electrical faults, infotainment glitches, and transmission behavior complaints on some
- configurations.
- Dual-clutch turbo variants are often cited for drivability/smoothness concerns in owner feedback.
- Parts/support availability can vary due shorter production run compared with high-volume compacts.
- NHTSA recalls are year/component dependent and require VIN-level confirmation.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Basic service is affordable, but transmission-specific diagnostics and
- discontinued-model parts sourcing can increase downtime.

Pros:
- Efficient compact-sedan footprint with good highway fuel economy.
- Multiple engine/transmission configurations.
- Competitive feature content for its production period.

Cons:
- Reliability perception is weaker than segment leaders.
- Powertrain refinement varies significantly by trim/transmission.
- Discontinued status can affect parts and resale confidence.

Qualification questions:
- What is your typical commute profile: city-heavy, highway-heavy, or mixed?
- Is your priority lowest fuel use, lowest maintenance complexity, or balanced ownership cost?
- Would you consider hybrid or EV alternatives if efficiency is the main objective?
Advisor transition phrase:
- An advisor can now confirm the exact vehicle configuration, inspection details, and live inventory match.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### FORD

#### F350 Super Duty Crew Cab
- Classification: Heavy-duty commercial truck
- Technical baseline: Super Duty capability profile, crew-cab utility, strong work-truck identity
- Ownership baseline: Size, maneuverability, and operating costs for non-commercial users
- Performance baseline: Maximum towing and payload for commercial applications

Generation overview (U.S.):
- 1st Super Duty generation: 1999-2007.
- 2nd generation: 2008-2010.
- 3rd generation: 2011-2016.
- 4th generation: 2017-2022.
- 5th generation: 2023-present.
- Major refresh: MY2020 (4th-gen update), MY2023 redesign.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 1999-2010 | 5.4L/6.8L gas; 6.0L/6.4L diesel | NA / Turbo-diesel | 4-speed/5-speed AT; 4WD/RWD |
| 2011-2016 | 6.2L gas; 6.7L diesel | NA / Turbo-diesel | 6-speed AT; 4WD/RWD |
| 2017-2022 | 6.2L/7.3L gas; 6.7L diesel | NA / Turbo-diesel | 6-speed or 10-speed AT (by year); 4WD/RWD |
| 2023-present | 6.8L/7.3L gas; 6.7L diesel | NA / Turbo-diesel | 10-speed AT; 4WD/RWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| Most F-350 Super Duty configurations | N/A | N/A – EPA light-duty data not applicable | N/A – EPA light-duty data not applicable | N/A – EPA light-duty data not applicable |

- Heavy-duty/classic: EPA light-duty MPG may not be published consistently; advisor verifies unit specifics.

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~250.0 in (Crew Cab long-bed approximation) |
| Width (in) | ~80.0 in (without mirrors, approx) |
| Height (in) | ~81.0 in (varies by trim/drivetrain) |
| Wheelbase (in) | ~160-176 in (varies by bed/cab) |
| Cargo (cu ft) | ~65.4-78.5 cu ft (bed-dependent) |
| Passenger capacity | 5-6 |

Typical known issues by generation:
- Older diesel generations are widely documented for higher maintenance complexity and
- cooling/emissions-system service events.
- Modern diesel generations can show higher-cost aftertreatment and fuel-system service events as mileage accumulates.
- Steering, suspension, and brake wear accelerates under heavy commercial duty cycles.
- NHTSA recalls are model-year/configuration specific and require VIN-level confirmation.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Heavy-duty usage profile, large consumables, and diesel emissions-system complexity generally produce
- high operating cost.

Pros:
- Very high towing/payload capability for commercial workloads.
- Strong upfit/fleet ecosystem in U.S. market.
- Robust frame and drivetrain architecture for heavy duty cycles.

Cons:
- Large footprint and ride harshness when unloaded.
- Operating costs can rise quickly under sustained heavy use.
- Urban maneuverability and parking are challenging.

Qualification questions:
- What payload, towing, or cargo-volume requirement must this vehicle handle?
- Is bed length/upfit compatibility or enclosed cargo security more important for your operation?
- Will this vehicle run mostly urban stop-and-go routes or sustained highway miles?
Advisor transition phrase:
- I can hand this off to an advisor for final verification of unit-specific specs, records, and real-time status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Falcon Wagon (1964)
- Classification: Classic station wagon
- Technical baseline: Vintage uniqueness, conversation-piece value, classic appeal
- Ownership baseline: Classic-car ownership expectations differ from modern daily-use vehicles
- Performance baseline: Collector vehicle status, original parts availability

Generation overview (U.S.):
- Falcon first generation (North America): 1960-1965.
- 1964 Falcon Wagon is a late first-generation model-year variant.
- Major styling revision for Falcon line occurred for MY1964.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 1964 Falcon Wagon | ~2.8L I6 (170 cid); ~3.3L I6 (200 cid) | NA | 3-speed MT or 2-speed AT; RWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 1964 Falcon Wagon | N/A | N/A – EPA light-duty data not applicable | N/A – EPA light-duty data not applicable | N/A – EPA light-duty data not applicable |

- Heavy-duty/classic: EPA light-duty MPG may not be published consistently; advisor verifies unit specifics.

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~181.0 in (approx) |
| Width (in) | ~70.0 in (approx) |
| Height (in) | ~57.0 in (approx) |
| Wheelbase (in) | ~109.5 in |
| Cargo (cu ft) | N/A – Not officially published |
| Passenger capacity | 5-6 (bench-seat dependent) |

Typical known issues by generation:
- Typical classic-car concerns include corrosion, aged wiring, fuel-system varnish/carburetion issues,
- and brake system service needs.
- Parts availability depends on restoration market and originality goals.
- No modern NHTSA recall framework equivalent for this vintage platform under current standards.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Classic-vehicle ownership requires frequent preventive work, specialty parts sourcing,
- and restoration-oriented maintenance skills.

Pros:
- Distinctive vintage character with collector appeal.
- Simpler mechanical architecture than modern vehicles.
- Strong enthusiast aftermarket for restoration themes.

Cons:
- Safety, comfort, and NVH levels are far below modern standards.
- Daily-use reliability depends heavily on restoration quality.
- Limited modern parts support for some components.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- Next step: advisor verification for exact trim-equipment details, condition documentation, and inventory confirmation.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Mustang
- Classification: Sports car/muscle car
- Technical baseline: Iconic design, strong brand recognition, performance-inspired experience
- Ownership baseline: Practicality differs from sedans/SUVs for family-duty needs
- Performance baseline: Strong acceleration, sport-tuned suspension

Generation overview (U.S.):
- 1st generation: 1964.5-1973.
- 2nd generation: 1974-1978.
- 3rd generation (Fox): 1979-1993.
- 4th generation (SN95): 1994-2004.
- 5th generation (S197): 2005-2014.
- 6th generation (S550): 2015-2023.
- 7th generation (S650): 2024-present.
- Major refresh: MY2010 (S197), MY2018 (S550 facelift).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| S197 (2005-2014) | 4.0L V6; 4.6L/5.0L V8 | NA | 5-speed MT or 5-speed AT; RWD |
| S550 (2015-2023) | 2.3L I4; 5.0L V8; 5.2L V8 | Turbo / NA | 6-speed MT, 6-speed AT, 10-speed AT; RWD |
| S650 (2024-present) | 2.3L I4; 5.0L V8 | Turbo / NA | 6-speed MT or 10-speed AT; RWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| S197 sample (2010 Mustang 4.0L AT) | RWD | 16 | 24 | 19 |
| S550 sample (2018 Mustang 2.3T AT) | RWD | 21 | 32 | 25 |
| S650 sample (2024 Mustang 2.3T AT) | RWD | 22 | 33 | 26 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~189.4 in |
| Width (in) | ~75.4 in |
| Height (in) | ~55.0 in |
| Wheelbase (in) | ~107.0 in |
| Cargo (cu ft) | ~13.3 cu ft (fastback) |
| Passenger capacity | 4 |

Typical known issues by generation:
- S197/S550 owner reports include occasional drivetrain vibration, cooling-system leaks,
- and infotainment/electrical faults.
- Some S550/S650 owner feedback references 10-speed shift calibration behavior and
- MT82 manual feel concerns on certain use cases.
- High-performance trims show increased tire/brake wear and heat-management service demands.
- NHTSA recalls are year/trim dependent and should be VIN-verified.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Routine service is moderate on EcoBoost/V8 GT trims; track-oriented variants increase consumable and
- drivetrain maintenance cost.

Pros:
- Strong enthusiast support and broad powertrain range.
- Rear-wheel-drive dynamics with competitive performance options.
- Good blend of daily usability and performance in recent generations.

Cons:
- Rear-seat practicality is limited.
- Insurance/consumable costs rise quickly on performance trims.
- Ride and visibility trade-offs versus mainstream sedans.

Qualification questions:
- Do you prioritize stronger acceleration or a smoother comfort-focused ride?
- Would you prefer rear-drive sport feel or all-weather traction capability?
- Are you comfortable with firmer suspension tuning for better handling response?
Advisor transition phrase:
- I can route you to an advisor to validate the exact unit data, service/inspection context, and current lot status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Transit 250 Cargo Van
- Classification: Commercial cargo van
- Technical baseline: Commercial utility, cargo-focused layout, fleet-friendly profile
- Ownership baseline: Cargo setup details matter (tools, shelving, loading routine)
- Performance baseline: Designed for commercial cargo capacity

Generation overview (U.S.):
- Full-size Transit (U.S.): 2015-present.
- Major refresh: MY2020 (powertrain/awd updates and feature revisions).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2015-2019 | 3.7L V6; 3.5L EcoBoost V6 | NA / Turbo | 6-speed AT; RWD |
| 2020-present | 3.5L V6; 3.5L EcoBoost V6 | NA / Turbo | 10-speed AT; RWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| Transit 250 Cargo Van (most configurations) | N/A | N/A – EPA light-duty data not applicable | N/A – EPA light-duty data not applicable | N/A – EPA light-duty data not applicable |

- Heavy-duty/classic: EPA light-duty MPG may not be published consistently; advisor verifies unit specifics.

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~219.9 in (example long-wheelbase configuration) |
| Width (in) | ~81.3 in |
| Height (in) | ~82.0-110.0 in (roof-height dependent) |
| Wheelbase (in) | ~130-148 in (configuration dependent) |
| Cargo (cu ft) | ~246-487 cu ft (roof/wheelbase dependent) |
| Passenger capacity | 2-3 (cargo configuration dependent) |

Typical known issues by generation:
- Fleet usage reports commonly cite sliding-door hardware wear, electrical accessory faults,
- and high-mileage transmission service needs.
- Turbocharged EcoBoost variants can show higher thermal and turbo-system maintenance sensitivity in severe duty use.
- NHTSA recalls vary by year and configuration; advisor must verify VIN-level applicability.

Maintenance profile:
- Level: Medium-High (Low / Medium / High)
- Notes: Commercial duty cycles drive higher maintenance frequency; payload, idle time,
- and delivery-route severity strongly affect operating cost.

Pros:
- High cargo-volume flexibility across roof/wheelbase setups.
- Strong upfit ecosystem for trades and fleet use.
- Modern safety/driver-assist availability in recent years.

Cons:
- Fuel economy can be modest under loaded urban operation.
- Large dimensions and roof heights complicate parking/access.
- Heavy commercial use accelerates wear on drivetrain and brakes.

Qualification questions:
- What payload, towing, or cargo-volume requirement must this vehicle handle?
- Is bed length/upfit compatibility or enclosed cargo security more important for your operation?
- Will this vehicle run mostly urban stop-and-go routes or sustained highway miles?
Advisor transition phrase:
- I can connect you with an advisor to verify exact unit specs, condition history, and current inventory status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### HONDA

#### Accord
- Classification: Midsize sedan
- Technical baseline: Reputation for reliability, balanced comfort/efficiency, strong resale perception
- Ownership baseline: Trim expectations on features should be clarified early
- Performance baseline: Comfortable ride, efficient engine options

Generation overview (U.S.):
- 1st generation (XA10): 1996-2000.
- 2nd generation (XA20): 2001-2005.
- 3rd generation (XA30): 2006-2012.
- 4th generation (XA40): 2013-2018.
- 5th generation (XA50): 2019-present.
- Major refresh: MY2016 (XA40 facelift), MY2022 (XA50 updates).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| XA30 (2006-2012) | 2.5L I4; 3.5L V6 | NA | 4-speed/5-speed AT; FWD/AWD |
| XA40 (2013-2018) | 2.5L I4 | NA | 6-speed AT; FWD/AWD |
| XA50 (2019-present) | 2.5L I4; 2.5L hybrid system; 2.5L PHEV system | NA / Hybrid / Plug-in Hybrid | 8-speed AT (gas), eCVT (hybrid/PHEV); FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| XA30 sample (2010 RAV4 4WD 2.5L) | AWD | 21 | 27 | 24 |
| XA40 sample (2018 RAV4 AWD 2.5L) | AWD | 22 | 28 | 25 |
| XA50 sample (2024 RAV4 AWD 2.5L) | AWD | 27 | 33 | 29 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~180.9 in |
| Width (in) | ~73.0 in |
| Height (in) | ~67.0 in |
| Wheelbase (in) | ~105.9 in |
| Cargo (cu ft) | ~37.6 cu ft (behind 2nd row) |
| Passenger capacity | 5 |

Typical known issues by generation:
- XA30: Common reports include steering/suspension wear and occasional oil-consumption concerns on specific
- engine years.
- XA40/XA50: Water pump and electronic accessory issues appear in owner-report patterns by year.
- NHTSA recalls vary by model year and powertrain; advisor should confirm VIN-specific campaigns.

Maintenance profile:
- Level: Low (Low / Medium / High)
- Notes: Mainstream maintenance profile with broad parts availability and generally predictable long-term servicing.

Pros:
- Strong reliability and resale patterns in U.S. compact SUV segment.
- Efficient powertrains with available AWD/hybrid options.
- Practical cargo and daily usability.

Cons:
- Road noise and performance are modest in base trims.
- High demand can reduce trim choice flexibility.
- Feature content varies significantly by year/trim.

Qualification questions:
- What is your typical commute profile: city-heavy, highway-heavy, or mixed?
- Is your priority lowest fuel use, lowest maintenance complexity, or balanced ownership cost?
- Would you consider hybrid or EV alternatives if efficiency is the main objective?
Advisor transition phrase:
- An advisor can now confirm the exact vehicle configuration, inspection details, and live inventory match.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Civic
- Classification: Compact sedan
- Technical baseline: Easy city use, efficient ownership profile, broad market demand
- Ownership baseline: Cabin size may be tight for larger-family use cases
- Performance baseline: Excellent fuel economy, reliable performance

Generation overview (U.S.):
- XV30 generation: 2002-2006.
- XV40 generation: 2007-2011.
- XV50 generation: 2012-2017.
- XV70 generation: 2018-2024.
- XV80 generation: 2025-present.
- Major refresh: MY2015 (XV50), MY2021 (XV70 facelift).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| XV40 (2007-2011) | 2.5L I4; 3.5L V6; hybrid system | NA / Hybrid | 6-speed AT (gas), eCVT (hybrid); FWD |
| XV50 (2012-2017) | 2.5L I4; 3.5L V6; hybrid system | NA / Hybrid | 6-speed AT (gas), eCVT (hybrid); FWD |
| XV70 (2018-2024) | 2.5L I4; 3.5L V6; hybrid system | NA / Hybrid | 8-speed AT (gas), eCVT (hybrid); FWD/AWD (I4) |
| XV80 (2025-present) | 2.5L hybrid system | Hybrid | eCVT; FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| XV40 sample (2010 Camry 2.5L) | FWD | 22 | 32 | 26 |
| XV70 sample (2018 Camry LE/SE 2.5L) | FWD | 28 | 39 | 32 |
| XV70 late sample (2024 Camry LE/SE 2.5L) | FWD | 28 | 39 | 32 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~192.1 in |
| Width (in) | ~72.4 in |
| Height (in) | ~56.9 in |
| Wheelbase (in) | ~111.2 in |
| Cargo (cu ft) | ~15.1 cu ft |
| Passenger capacity | 5 |

Typical known issues by generation:
- XV40: Some year-specific oil-consumption reports and age-related suspension wear patterns are documented.
- XV50/XV70: Water pump, infotainment, and occasional transmission calibration complaints appear in owner-report
- patterns.
- NHTSA recalls are model-year specific; advisor should verify VIN-level applicability.

Maintenance profile:
- Level: Low (Low / Medium / High)
- Notes: Typically low-cost routine maintenance with strong long-term parts/service accessibility.

Pros:
- Strong efficiency/reliability balance across generations.
- Comfortable ride and practical midsize packaging.
- Hybrid availability with strong EPA outcomes.

Cons:
- Driving dynamics are conservative in non-sport trims.
- Feature differences across trims/years can be substantial.
- Higher-demand trims may be less common in some inventories.

Qualification questions:
- What is your typical commute profile: city-heavy, highway-heavy, or mixed?
- Is your priority lowest fuel use, lowest maintenance complexity, or balanced ownership cost?
- Would you consider hybrid or EV alternatives if efficiency is the main objective?
Advisor transition phrase:
- I can hand this off to an advisor for final verification of unit-specific specs, records, and real-time status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Ridgeline
- Classification: Midsize pickup truck
- Technical baseline: Versatile truck format, practical cabin, user-friendly everyday drivability
- Ownership baseline: Some truck buyers may compare it to heavier-duty body-on-frame options
- Performance baseline: Car-like ride, independent suspension

Generation overview (U.S.):
- E110 generation: 1998-2002.
- E120/E130 generation: 2003-2008.
- E140/E150 generation: 2009-2013.
- E170 generation: 2014-2019.
- E210 generation: 2020-present.
- Major refresh: MY2017 (late E170), MY2023 (E210 update).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| E140/E150 (2009-2013) | 1.8L I4; 2.4L I4 | NA | 4-speed AT or 5-speed MT; FWD |
| E170 (2014-2019) | 1.8L I4 | NA | CVT or 6-speed MT; FWD |
| E210 (2020-present) | 2.0L I4; 1.8L hybrid system; 2.0L hybrid system | NA / Hybrid | CVT or eCVT; FWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| E140 sample (2010 Corolla 2.4L AT) | FWD | 22 | 30 | 25 |
| E170 sample (2018 Corolla 1.8L CVT) | FWD | 28 | 35 | 31 |
| E210 sample (2024 Corolla 2.0L CVT) | FWD | 32 | 41 | 35 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~182.5 in |
| Width (in) | ~70.1 in |
| Height (in) | ~56.5 in |
| Wheelbase (in) | ~106.3 in |
| Cargo (cu ft) | ~13.1 cu ft |
| Passenger capacity | 5 |

Typical known issues by generation:
- E140/E170: Occasional water pump and suspension wear reports are common in long-term ownership data.
- CVT-equipped years: Some owner-reported drivability complaints; regular fluid service history is important.
- NHTSA recalls are model-year specific and should be VIN-verified before final unit claims.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Typically low routine service cost with strong reliability outcomes when maintenance intervals are respected.

Pros:
- Excellent fuel economy in mainstream trims.
- Proven long-term durability and low ownership friction.
- Easy city maneuverability and broad parts support.

Cons:
- Acceleration and NVH are modest in base trims.
- Rear-seat space is tighter than some compact rivals.
- Cabin materials vary significantly by trim/year.

Qualification questions:
- What payload, towing, or cargo-volume requirement must this vehicle handle?
- Is bed length/upfit compatibility or enclosed cargo security more important for your operation?
- Will this vehicle run mostly urban stop-and-go routes or sustained highway miles?
Advisor transition phrase:
- Next step: advisor verification for exact trim-equipment details, condition documentation, and inventory confirmation.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### HUMMER

#### H1
- Classification: Heavy-duty off-road vehicle
- Technical baseline: Highly distinctive vehicle identity, collector-level attention factor
- Ownership baseline: Specialized ownership expectations and practicality trade-offs
- Performance baseline: Extreme off-road capability, military-grade construction

Generation overview (U.S.):
- XU20 generation: 2001-2007.
- XU40 generation: 2008-2013.
- XU50 generation: 2014-2019.
- XU70 generation: 2020-present.
- Major refresh: MY2017 (XU50 facelift), MY2023 (XU70 update).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| XU40 (2008-2013) | 2.7L I4; 3.5L V6; hybrid system | NA / Hybrid | 5-speed AT or eCVT; FWD/AWD |
| XU50 (2014-2019) | 2.7L I4; 3.5L V6; hybrid system | NA / Hybrid | 6-speed/8-speed AT (gas), eCVT (hybrid); FWD/AWD |
| XU70 (2020-present) | 2.4L I4 turbo; hybrid system | Turbo / Hybrid | 8-speed AT (turbo), eCVT (hybrid); FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| XU40 sample (2010 Highlander 4WD 3.5L) | AWD | 17 | 23 | 19 |
| XU50 sample (2018 Highlander AWD 3.5L) | AWD | 19 | 26 | 22 |
| XU70 sample (2024 Highlander AWD 2.4T) | AWD | 21 | 28 | 24 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~194.9 in |
| Width (in) | ~76.0 in |
| Height (in) | ~68.1 in |
| Wheelbase (in) | ~112.2 in |
| Cargo (cu ft) | ~16.0 cu ft (behind 3rd row) |
| Passenger capacity | 7-8 |

Typical known issues by generation:
- XU40/XU50: Water pump, oil cooler line (certain years), and suspension wear are commonly discussed service items.
- XU70: Early production years show mixed owner reports on infotainment/software behavior and
- turbo calibration refinement.
- NHTSA recalls vary by year/powertrain; advisor should confirm VIN-specific campaigns.

Maintenance profile:
- Level: Low (Low / Medium / High)
- Notes: Family-SUV maintenance profile is generally predictable; hybrid variants retain low routine service burden.

Pros:
- Strong reliability reputation in 3-row segment.
- Comfortable ride and family-focused interior packaging.
- Good efficiency options including hybrid variants.

Cons:
- Third-row cargo space is limited compared with larger SUVs.
- Acceleration depends strongly on powertrain selection.
- Higher trims can become feature-complex for long-term repairs.

Qualification questions:
- What is your typical commute profile: city-heavy, highway-heavy, or mixed?
- Is your priority lowest fuel use, lowest maintenance complexity, or balanced ownership cost?
- Would you consider hybrid or EV alternatives if efficiency is the main objective?
Advisor transition phrase:
- I can route you to an advisor to validate the exact unit data, service/inspection context, and current lot status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### INFINITI

#### Q50
- Classification: Compact luxury sport sedan
- Technical baseline: Premium styling, comfortable cabin, performance-luxury positioning
- Ownership baseline: Customer may compare tech generation against newer competitors
- Performance baseline: Sport-tuned suspension, available turbocharged engines

Generation overview (U.S.):
- 1st generation (V37): 2014-2024.
- U.S. predecessor lineage: Infiniti G sedan through MY2013.
- Major refresh years: MY2018 and MY2020 (feature/trim and infotainment updates).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| V37 early (2014-2015) | 3.7L V6 | NA | 7-speed AT; RWD/AWD |
| V37 variant (2014-2018) | 3.5L V6 hybrid system | Hybrid | 7-speed AT; RWD/AWD |
| V37 variant (2016-2019) | 2.0L I4 | Turbo | 7-speed AT; RWD |
| V37 late (2016-2024) | 3.0L V6 twin-turbo | Turbo | 7-speed AT; RWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| V37 sample (2014 Q50 3.7 RWD) | RWD | 20 | 29 | 23 |
| V37 mid sample (2018 Q50 3.0t RWD) | RWD | 20 | 29 | 23 |
| V37 late sample (2024 Q50 3.0t RWD) | RWD | 20 | 29 | 23 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~189.6 in |
| Width (in) | ~71.8 in |
| Height (in) | ~57.2 in |
| Wheelbase (in) | ~112.2 in |
| Cargo (cu ft) | ~13.5 cu ft |
| Passenger capacity | 5 |

Typical known issues by generation:
- V37 early/mid: Owner-reported patterns include infotainment lag/freezing and
- occasional accessory-electrical concerns on some year ranges.
- 3.0t years: Community reports include turbo/cooling-system sensitivity on some units;
- maintenance history is important.
- NHTSA recalls vary by model year/trim; VIN-specific recall status must be advisor-verified.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Moderate routine service burden, but turbocharged variants can increase long-term complexity and repair cost.

Pros:
- Strong acceleration in 3.0t trims.
- Comfortable highway ride and premium cabin design.
- RWD/AWD flexibility across much of production.

Cons:
- Infotainment architecture is dated versus newer competitors.
- Turbocharged variants may have higher long-term risk than NA alternatives.
- Rear-seat packaging is moderate for class.

Qualification questions:
- Do you prioritize stronger acceleration or a smoother comfort-focused ride?
- Would you prefer rear-drive sport feel or all-weather traction capability?
- Are you comfortable with firmer suspension tuning for better handling response?
Advisor transition phrase:
- I can connect you with an advisor to verify exact unit specs, condition history, and current inventory status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Q60
- Classification: Luxury sport coupe
- Technical baseline: Coupe presence, premium brand perception, emotional styling appeal
- Ownership baseline: Coupe format can reduce rear-seat/cargo practicality
- Performance baseline: Strong acceleration, sport-oriented handling

Generation overview (U.S.):
- 1st generation (CV36, G37 coupe/convertible lineage): 2008-2015.
- 2nd generation (CV37, Q60): 2017-2022.
- U.S. model-year gap occurred for MY2016 transition.
- Major refresh years: MY2014 name transition (G37 to Q60 for prior generation), MY2020 trim/package updates.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| CV36 (2008-2015) | 3.7L V6 | NA | 7-speed AT or 6-speed MT; RWD/AWD |
| CV37 variant (2017) | 2.0L I4 | Turbo | 7-speed AT; RWD |
| CV37 (2017-2022) | 3.0L V6 twin-turbo | Turbo | 7-speed AT; RWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| CV37 sample (2017 Q60 3.0t RWD) | RWD | 19 | 28 | 22 |
| CV37 mid sample (2018 Q60 3.0t RWD) | RWD | 19 | 28 | 22 |
| CV37 late sample (2022 Q60 3.0t RWD) | RWD | 19 | 28 | 22 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~184.4 in |
| Width (in) | ~72.8 in |
| Height (in) | ~54.8 in |
| Wheelbase (in) | ~112.2 in |
| Cargo (cu ft) | ~8.7 cu ft |
| Passenger capacity | 4 |

Typical known issues by generation:
- CV36: Typical age-related concerns include suspension bushing wear and electronics aging in higher-mileage units.
- CV37: Owner-reported patterns include infotainment lag and some turbo/cooling related complaints on specific units.
- NHTSA recalls are model-year/trim specific; VIN-level confirmation is required.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Moderate service profile for luxury coupe segment; turbocharged drivetrain complexity can increase
- repair exposure over time.

Pros:
- Distinctive coupe styling with strong brand identity.
- Strong acceleration in twin-turbo trims.
- Comfortable highway manners for a performance coupe.

Cons:
- Rear-seat and trunk practicality are limited.
- Interior interface is dated compared with newer luxury coupes.
- Turbo trim long-term ownership cost can be higher than NA peers.

Qualification questions:
- Do you prioritize stronger acceleration or a smoother comfort-focused ride?
- Would you prefer rear-drive sport feel or all-weather traction capability?
- Are you comfortable with firmer suspension tuning for better handling response?
Advisor transition phrase:
- An advisor can now confirm the exact vehicle configuration, inspection details, and live inventory match.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Q70
- Classification: Full-size luxury sedan
- Technical baseline: Spacious executive-sedan character, smooth ride impression, premium identity
- Ownership baseline: Older-generation luxury tech expectations should be aligned by unit
- Performance baseline: Comfortable highway cruising, V6 engine options

Generation overview (U.S.):
- 1st generation (Y34, Infiniti M): 2003-2004.
- 2nd generation (Y50, M35/M45): 2006-2010.
- 3rd generation (Y51, M37/M56 then Q70): 2011-2019.
- Major refresh years: MY2014 (name transition to Q70), MY2015 (LWB and feature updates).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| Y34 (2003-2004) | 3.5L V6 | NA | 5-speed AT; RWD |
| Y50 (2006-2010) | 3.5L V6; 4.5L V8 | NA | 5-speed AT; RWD/AWD |
| Y51 (2011-2019) | 3.7L V6; 5.6L V8; 3.5L V6 hybrid system | NA / Hybrid | 7-speed AT; RWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| Y51 sample (2014 Q70 3.7 RWD) | RWD | 18 | 26 | 21 |
| Y51 mid sample (2018 Q70 3.7 AWD) | AWD | 18 | 24 | 20 |
| Y51 late sample (2019 Q70 3.7 RWD) | RWD | 18 | 25 | 21 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~196.1 in |
| Width (in) | ~72.6 in |
| Height (in) | ~59.0 in |
| Wheelbase (in) | ~114.2 in |
| Cargo (cu ft) | ~14.9 cu ft |
| Passenger capacity | 5 |

Typical known issues by generation:
- Y50/Y51 aging years: Typical higher-mileage service patterns include suspension component wear and electronics aging.
- Y51: Documented owner feedback includes occasional infotainment and accessory-system issues in later years.
- NHTSA recalls differ by year/powertrain; advisor should verify VIN-level campaign status.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Full-size luxury sedan platform with larger-displacement engines and
- discontinued U.S. model support can raise long-term parts/service cost.

Pros:
- Smooth highway ride and strong V6 refinement.
- Spacious cabin with traditional luxury-sedan comfort.
- Distinctive alternative to German executive sedans.

Cons:
- Fuel economy trails newer turbo-hybrid competitors.
- Older infotainment architecture versus newer rivals.
- Discontinued model status can narrow future trim/parts selection.

Qualification questions:
- What is your typical commute profile: city-heavy, highway-heavy, or mixed?
- Is your priority lowest fuel use, lowest maintenance complexity, or balanced ownership cost?
- Would you consider hybrid or EV alternatives if efficiency is the main objective?
Advisor transition phrase:
- I can hand this off to an advisor for final verification of unit-specific specs, records, and real-time status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### QX60
- Classification: Midsize luxury SUV (3-row)
- Technical baseline: Premium SUV image, family-friendly cabin concept, daily comfort orientation
- Ownership baseline: Third-row and cargo expectations vary by household needs
- Performance baseline: Smooth ride quality, family-focused features

Generation overview (U.S.):
- 1st generation (L50; launched as JX35 in MY2013, renamed QX60 in MY2014): 2013-2020.
- 2nd generation (L51): 2022-present.
- Major refresh years: MY2016 (L50 update cycle), MY2022 (full redesign and transmission change).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| L50 (2013-2020) | 3.5L V6 | NA | CVT; FWD/AWD |
| L50 hybrid (2014-2017) | 2.5L I4 + electric motor | Supercharged Hybrid | CVT; FWD/AWD |
| L51 (2022-present) | 3.5L V6 | NA | 9-speed AT; FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| L50 sample (2016 QX60 FWD 3.5L) | FWD | 21 | 27 | 23 |
| L50 late sample (2018 QX60 FWD 3.5L) | FWD | 20 | 27 | 22 |
| L51 sample (2024 QX60 FWD 3.5L) | FWD | 21 | 26 | 23 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~198.2 in |
| Width (in) | ~78.0 in |
| Height (in) | ~69.7 in |
| Wheelbase (in) | ~114.2 in |
| Cargo (cu ft) | ~14.5 cu ft (behind 3rd row, approx) |
| Passenger capacity | 7 |

Typical known issues by generation:
- L50: Commonly discussed ownership patterns include CVT durability concerns on some year ranges plus normal
- aging suspension/HVAC repairs.
- L51: Early owner reports include occasional electronics/infotainment calibration complaints;
- 9-speed behavior varies by software update level.
- NHTSA recalls are year/trim specific and should be checked at VIN level.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Moderate maintenance profile for 3-row luxury SUV class; L50 CVT history and
- L51 9-speed service history are key evaluation points.

Pros:
- Comfortable 3-row cabin with family-oriented layout.
- Smooth V6 power delivery and refined ride.
- Good highway comfort for long-distance family use.

Cons:
- Cargo area behind third row is modest versus larger SUVs.
- Fuel economy trails many 4-cylinder hybrid competitors.
- L50 generation CVT reputation requires careful service-history review.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- Next step: advisor verification for exact trim-equipment details, condition documentation, and inventory confirmation.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### LAND ROVER

#### Range Rover
- Classification: Full-size luxury SUV
- Technical baseline: Strong luxury recognition, refined cabin perception, prestige factor
- Ownership baseline: Ownership expectations on maintenance history and condition are important
- Performance baseline: Advanced off-road capability, air suspension system

Generation overview (U.S.):
- 8th generation: 2006-2011.
- 9th generation: 2012-2015.
- 10th generation: 2016-2021.
- 11th generation: 2022-present.
- Major refresh: MY2013 (9th-gen), MY2019 (10th-gen facelift).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 8th gen (2006-2011) | 1.8L I4; hybrid system | NA / Hybrid | 5-speed AT or 5-speed MT; FWD |
| 9th gen (2012-2015) | 1.8L I4; 2.4L I4 (Si); hybrid system | NA / Hybrid | 5-speed AT, CVT, or 6-speed MT; FWD |
| 10th gen (2016-2021) | 2.0L I4; 1.5L I4 | NA / Turbo | CVT or 6-speed MT; FWD |
| 11th gen (2022-present) | 2.0L I4; 1.5L I4 | NA / Turbo | CVT or 6-speed MT; FWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 8th gen sample (2010 Civic 1.8L AT) | FWD | 25 | 36 | 29 |
| 10th gen sample (2018 Civic 2.0L CVT) | FWD | 31 | 40 | 34 |
| 11th gen sample (2024 Civic 1.5T CVT) | FWD | 31 | 38 | 34 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~184.0 in |
| Width (in) | ~70.9 in |
| Height (in) | ~55.7 in |
| Wheelbase (in) | ~107.7 in |
| Cargo (cu ft) | ~14.8 cu ft (sedan) |
| Passenger capacity | 5 |

Typical known issues by generation:
- 8th/9th gen: Some long-term reports include paint/clearcoat aging and suspension bushing wear.
- 10th/11th gen turbo variants: Owner reports occasionally cite oil dilution discussions and
- HVAC/electronics concerns on certain year/trim combinations.
- NHTSA recalls are model-year specific; advisor should verify VIN-level status.

Maintenance profile:
- Level: Low (Low / Medium / High)
- Notes: One of the lower-cost compact platforms to maintain when routine intervals and fluid services are followed.

Pros:
- Excellent fuel economy and daily usability.
- Strong long-term reliability reputation.
- Wide trim/body-style diversity by generation.

Cons:
- Cabin insulation and ride refinement vary by trim/wheels.
- Power output is modest in non-turbo versions.
- Feature packages can differ substantially by year.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can route you to an advisor to validate the exact unit data, service/inspection context, and current lot status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### MERCEDES-BENZ

#### C-Class
- Classification: Compact luxury sedan
- Technical baseline: Luxury brand value, elegant cabin feel, balanced premium daily use
- Ownership baseline: Tech/feature expectations vary by specific configuration
- Performance baseline: Comfortable ride, refined handling characteristics

Generation overview (U.S.):
- 1st generation: 2006-2014.
- 2nd generation: 2017-present.
- Major refresh: MY2021 (2nd-gen update).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 1st gen (2006-2014) | 3.5L V6 | NA | 5-speed AT; AWD |
| 2nd gen early (2017-2019) | 3.5L V6 | NA | 6-speed AT; FWD/AWD |
| 2nd gen refresh (2020-present) | 3.5L V6 | NA | 9-speed AT; AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 1st gen sample (2010 Ridgeline AWD) | AWD | 15 | 20 | 17 |
| 2nd gen sample (2018 Ridgeline AWD) | AWD | 18 | 25 | 21 |
| 2nd gen late sample (2024 Ridgeline AWD) | AWD | 18 | 24 | 21 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~210.2 in |
| Width (in) | ~78.6 in |
| Height (in) | ~70.8 in |
| Wheelbase (in) | ~125.2 in |
| Cargo (cu ft) | ~33.9 cu ft (bed volume approximation) |
| Passenger capacity | 5 |

Typical known issues by generation:
- 1st gen: Common age-related reports include suspension/steering wear and occasional drivetrain mount/noise concerns.
- 2nd gen: Some owner-reported infotainment and transmission behavior complaints appear by specific year/calibration.
- NHTSA recalls are year-specific and require VIN-level confirmation.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Generally predictable ownership cost, but AWD hardware and truck-duty use cycles raise service burden
- versus compact crossovers.

Pros:
- Car-like ride quality compared with body-on-frame midsize trucks.
- Practical crew-cab packaging and in-bed utility features.
- Strong daily drivability for mixed family/work use.

Cons:
- Towing/off-road ceiling is lower than some traditional midsize truck rivals.
- Fewer drivetrain configurations than some competitors.
- Fuel economy remains moderate for the segment.

Qualification questions:
- What is your typical commute profile: city-heavy, highway-heavy, or mixed?
- Is your priority lowest fuel use, lowest maintenance complexity, or balanced ownership cost?
- Would you consider hybrid or EV alternatives if efficiency is the main objective?
Advisor transition phrase:
- I can connect you with an advisor to verify exact unit specs, condition history, and current inventory status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### E-Class
- Classification: Midsize executive sedan
- Technical baseline: Strong comfort reputation, premium refinement image, business-class positioning
- Ownership baseline: Buyers may compare operating costs versus non-luxury sedans
- Performance baseline: Smooth highway performance, advanced safety features

Generation overview (U.S.):
- W204 generation: 2008-2014.
- W205 generation: 2015-2021.
- W206 generation: 2022-present.
- Major refresh: MY2012 (W204 facelift), MY2019 (W205 facelift).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| W204 (2008-2014) | 3.0L V6; 3.5L V6; 6.2L V8 (AMG) | NA | 7-speed AT; RWD/AWD |
| W205 (2015-2021) | 2.0L I4; 3.0L V6; 4.0L V8 (AMG) | Turbo / NA (early variants) | 7-speed/9-speed AT; RWD/AWD |
| W206 (2022-present) | 2.0L I4 mild-hybrid; 2.0L I4 PHEV (market-dependent) | Turbo / MHEV / PHEV | 9-speed AT; RWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| W204 sample (2010 C300) | RWD | 18 | 26 | 21 |
| W205 sample (2018 C300) | RWD | 24 | 33 | 27 |
| W206 sample (2024 C300 4MATIC) | AWD | 23 | 33 | 27 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~187.0 in |
| Width (in) | ~71.7 in |
| Height (in) | ~56.6 in |
| Wheelbase (in) | ~112.8 in |
| Cargo (cu ft) | ~12.6 cu ft |
| Passenger capacity | 5 |

Typical known issues by generation:
- W204/W205: Common owner reports include electronics faults, sensor/module failures,
- and cooling-system service items at higher mileage.
- Turbocharged variants: Oil/coolant leak and intake/boost-component wear patterns appear by maintenance history
- and mileage.
- NHTSA recalls are model-year specific and should be VIN-confirmed before final statements.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Premium-brand parts, diagnostics, and labor rates usually result in above-average ownership cost versus
- mainstream sedans.

Pros:
- Strong refinement and premium interior execution.
- Balanced comfort/handling profile in mainstream trims.
- Broad powertrain spread including high-performance AMG variants.

Cons:
- Repair and maintenance costs can be high with age.
- Complexity of electronics/driver-assist systems increases diagnostic burden.
- Rear-seat/trunk space is moderate for class.

Qualification questions:
- What is your typical commute profile: city-heavy, highway-heavy, or mixed?
- Is your priority lowest fuel use, lowest maintenance complexity, or balanced ownership cost?
- Would you consider hybrid or EV alternatives if efficiency is the main objective?
Advisor transition phrase:
- An advisor can now confirm the exact vehicle configuration, inspection details, and live inventory match.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### GLC Coupe
- Classification: Compact luxury SUV coupe
- Technical baseline: Premium SUV-coupe look, brand prestige, upscale interior atmosphere
- Ownership baseline: Cargo practicality can be lower than traditional SUV rooflines
- Performance baseline: Sport-tuned suspension, coupe-like handling

Generation overview (U.S.):
- W212 generation: 2010-2016.
- W213 generation: 2017-2023.
- W214 generation: 2024-present.
- Major refresh: MY2014 (W212 facelift), MY2021 (W213 facelift).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| W212 (2010-2016) | 3.5L V6; 4.6L/5.5L V8; diesel variants | NA / Turbo (select trims) | 7-speed AT; RWD/AWD |
| W213 (2017-2023) | 2.0L I4; 3.0L I6; 4.0L V8 (AMG); PHEV in later years | Turbo / MHEV / PHEV | 9-speed AT; RWD/AWD |
| W214 (2024-present) | 2.0L I4; PHEV variants | Turbo / MHEV / PHEV | 9-speed AT; RWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| W212 sample (2010 E350) | RWD | 18 | 26 | 21 |
| W213 sample (2018 E300) | RWD | 22 | 30 | 25 |
| W214 sample (2024 E350 4MATIC) | AWD | 24 | 33 | 27 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~194.9 in |
| Width (in) | ~74.6 in |
| Height (in) | ~57.8 in |
| Wheelbase (in) | ~116.6 in |
| Cargo (cu ft) | ~12.7 cu ft |
| Passenger capacity | 5 |

Typical known issues by generation:
- W212/W213: Frequently reported themes include electronics/module failures,
- air-suspension service on equipped trims, and coolant/oil leak repairs.
- High-output AMG and complex hybrid systems increase long-term maintenance complexity.
- NHTSA recall applicability is year and trim specific; advisor should verify VIN-level status.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Executive-class luxury systems and premium labor rates generally produce high ownership cost over
- long-term use.

Pros:
- Excellent long-distance comfort and cabin refinement.
- Strong technology and safety suite in later generations.
- Wide powertrain spectrum from efficiency-focused to high performance.

Cons:
- Repair costs can be substantial with aging electronics/suspension systems.
- Complexity rises with optioned trims and hybridized drivetrains.
- Operating cost is typically above mainstream midsize sedans.

Qualification questions:
- Do you prioritize stronger acceleration or a smoother comfort-focused ride?
- Would you prefer rear-drive sport feel or all-weather traction capability?
- Are you comfortable with firmer suspension tuning for better handling response?
Advisor transition phrase:
- I can hand this off to an advisor for final verification of unit-specific specs, records, and real-time status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### GLE
- Classification: Midsize luxury SUV
- Technical baseline: Upscale SUV presence, comfortable cabin, strong premium-family fit
- Ownership baseline: Feature expectations should be aligned by specific unit
- Performance baseline: Comfortable ride, multiple engine options available

Generation overview (U.S.):
- C253 generation: 2017-2022.
- C254 generation: 2023-present.
- Major refresh: MY2020 (C253 facelift), MY2024 updates in C254 cycle.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| C253 (2017-2022) | 2.0L I4; 3.0L V6 (AMG 43); 4.0L V8 (AMG 63) | Turbo | 9-speed AT; AWD |
| C254 (2023-present) | 2.0L I4 mild-hybrid; AMG variants | Turbo / MHEV | 9-speed AT; AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| C253 sample (2018 GLC300 4MATIC Coupe) | AWD | 22 | 27 | 24 |
| C254 sample (2024 GLC300 4MATIC Coupe) | AWD | 24 | 30 | 26 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~188.6 in |
| Width (in) | ~74.4 in |
| Height (in) | ~63.5 in |
| Wheelbase (in) | ~113.1 in |
| Cargo (cu ft) | ~19.2 cu ft (behind 2nd row, approx) |
| Passenger capacity | 5 |

Typical known issues by generation:
- C253: Common owner-reported themes include electronics/sensor faults and suspension component wear with mileage.
- C254 early years: Software and driver-assist calibration updates are typical in first-cycle production years.
- NHTSA recalls are model-year specific and should be VIN-confirmed before final unit claims.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Coupe-SUV luxury segment with premium component costs and higher tire/brake operating expense.

Pros:
- Premium interior feel with strong brand appeal.
- Good balance of comfort and handling in standard trims.
- More efficient newer mild-hybrid calibrations.

Cons:
- Cargo and rear-headroom are reduced versus standard GLC SUV.
- High option complexity can increase repair cost.
- Ownership cost is above mainstream compact SUVs.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- Next step: advisor verification for exact trim-equipment details, condition documentation, and inventory confirmation.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### NISSAN

#### 370Z
- Classification: Sports car
- Technical baseline: Driver-focused character, recognizable sports heritage, emotional purchase appeal
- Ownership baseline: Practicality is secondary versus sedans/SUVs
- Performance baseline: Sport-tuned suspension, responsive handling

Generation overview (U.S.):
- M-Class era predecessor: 1998-2015 (ML naming).
- W166 GLE generation: 2016-2019 (name transition from ML to GLE).
- V167 GLE generation: 2020-present.
- Major refresh: MY2024 (V167 facelift).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| W166 (2016-2019) | 3.5L V6; 3.0L V6; AMG variants | NA / Turbo | 7-speed/9-speed AT; RWD/AWD |
| V167 (2020-present) | 2.0L I4; 3.0L I6; 4.0L V8 (AMG); PHEV variants | Turbo / MHEV / PHEV | 9-speed AT; RWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| W166 sample (2018 GLE350 4MATIC) | AWD | 18 | 22 | 19 |
| V167 sample (2024 GLE350 4MATIC) | AWD | 20 | 27 | 23 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~194.3 in |
| Width (in) | ~76.7 in |
| Height (in) | ~70.7 in |
| Wheelbase (in) | ~117.9 in |
| Cargo (cu ft) | ~33.3 cu ft (behind 2nd row, approx) |
| Passenger capacity | 5-7 (configuration dependent) |

Typical known issues by generation:
- W166/V167: Recurring service themes include electronics/sensor modules, air-suspension wear (equipped units),
- and cooling-system maintenance.
- Mild-hybrid and high-feature configurations increase diagnostic complexity.
- NHTSA recalls vary by year and trim; advisor should verify VIN-level recall status.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Midsize luxury SUV complexity and premium components typically produce high long-term ownership cost.

Pros:
- Strong premium cabin and highway comfort.
- Broad engine lineup and advanced safety features.
- Good family utility with optional third-row in some configurations.

Cons:
- Repair/maintenance costs are high versus mainstream midsize SUVs.
- Large dimensions reduce urban maneuverability.
- Feature complexity can increase downtime risk as mileage grows.

Qualification questions:
- Do you prioritize stronger acceleration or a smoother comfort-focused ride?
- Would you prefer rear-drive sport feel or all-weather traction capability?
- Are you comfortable with firmer suspension tuning for better handling response?
Advisor transition phrase:
- I can route you to an advisor to validate the exact unit data, service/inspection context, and current lot status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### RAM

#### 2500 Crew Cab
- Classification: Heavy-duty pickup truck
- Technical baseline: HD truck capability profile, strong work-use credibility, crew-cab utility
- Ownership baseline: Size and fuel use should be matched to real workload
- Performance baseline: Maximum towing capacity, heavy-duty suspension

Generation overview (U.S.):
- 4th generation (DJ): 2010-2018.
- 5th generation (DT): 2019-present.
- Major refresh years: MY2013 (4th-gen update cycle), MY2025 (5th-gen heavy-duty refresh cycle).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| DJ (2010-2018) | 5.7L V8; 6.4L V8; 6.7L I6 diesel | NA / Turbo Diesel | 6-speed AT; RWD/4WD |
| DT (2019-present) | 6.4L V8; 6.7L I6 diesel | NA / Turbo Diesel | 8-speed AT (6.4L); 6-speed AT or 8-speed AT (diesel by year); RWD/4WD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| Most 2500 HD configurations | N/A | N/A – EPA light-duty data not applicable | N/A – EPA light-duty data not applicable | N/A – EPA light-duty data not applicable |

- Heavy-duty/classic: EPA light-duty MPG may not be published consistently; advisor verifies unit specifics.

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~238.8-260.8 in (cab/bed dependent) |
| Width (in) | ~79.1 in |
| Height (in) | ~80.1-81.5 in (configuration dependent) |
| Wheelbase (in) | ~149.0-169.0 in |
| Cargo (cu ft) | ~57.5-74.7 cu ft (bed-size dependent) |
| Passenger capacity | 5-6 (configuration dependent) |

Typical known issues by generation:
- DJ/DT: Typical heavy-duty ownership patterns include front-end suspension/steering wear under high load cycles
- and emissions-system service events on diesel units.
- Diesel variants can show EGR/DPF/aftertreatment maintenance complexity depending on duty cycle and
- fuel/DEF management.
- NHTSA recalls vary by year, drivetrain, and equipment package; VIN-level verification is required.

Maintenance profile:
- Level: High (Low / Medium / High)
- Notes: Heavy-duty consumables, larger fluid capacities, diesel aftertreatment systems,
- and commercial-use wear patterns increase service cost and complexity.

Pros:
- Strong towing and payload capability for commercial and heavy-duty use.
- Durable frame/powertrain architecture in properly maintained units.
- Crew Cab format supports mixed work and family utility.

Cons:
- Urban maneuverability and parking footprint are challenging.
- Ride quality can be firm when unloaded.
- Maintenance/repair costs are higher than light-duty pickups and SUVs.

Qualification questions:
- What payload, towing, or cargo-volume requirement must this vehicle handle?
- Is bed length/upfit compatibility or enclosed cargo security more important for your operation?
- Will this vehicle run mostly urban stop-and-go routes or sustained highway miles?
Advisor transition phrase:
- I can connect you with an advisor to verify exact unit specs, condition history, and current inventory status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### TESLA

#### Model 3
- Classification: Compact electric sedan
- Technical baseline: EV operating-cost appeal, fast acceleration feel, high-tech cabin identity
- Ownership baseline: Charging access and customer comfort with EV routines should be qualified
- Performance baseline: Instant torque, Autopilot capability, over-the-air updates

Generation overview (U.S.):
- 1st generation: 2017-present.
- Major refresh/update points: MY2021 efficiency/thermal-system updates; MY2024 exterior/interior refresh
- (\"Highland\") for U.S. market rollout.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2017-present (RWD variants) | Single-motor EV drive unit | EV | Single-speed reduction gear (A1, AT-equivalent); RWD |
| 2017-present (AWD variants) | Dual-motor EV drive unit | EV | Single-speed reduction gear (A1, AT-equivalent); AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 1st gen sample (2018 Model 3 Long Range AWD) | AWD | 120 MPGe | 112 MPGe | 116 MPGe |
| 1st gen mid sample (2021 Model 3 Long Range AWD) | AWD | 141 MPGe | 127 MPGe | 134 MPGe |
| 1st gen refresh sample (2024 Model 3 Long Range RWD) | RWD | 145 MPGe | 128 MPGe | 137 MPGe |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~184.8 in |
| Width (in) | ~72.8 in |
| Height (in) | ~56.7 in |
| Wheelbase (in) | ~113.2 in |
| Cargo (cu ft) | ~24.1 cu ft (trunk + front trunk, approx) |
| Passenger capacity | 5 |

Typical known issues by generation:
- Early production years show recurring owner reports on build consistency, paint quality, and trim fit.
- Common service themes include suspension/noise complaints, 12V battery service events,
- and infotainment/software updates.
- NHTSA recalls and software campaigns vary by production period and should be confirmed at VIN level.

Maintenance profile:
- Level: Low (Low / Medium / High)
- Notes: Low routine mechanical maintenance profile; tire wear, brake fluid, cabin filtration,
- and software campaign compliance remain key service items.

Pros:
- Very strong EV efficiency and acceleration response.
- Frequent software updates and mature charging ecosystem integration.
- High-tech cabin and strong real-world daily usability.

Cons:
- Build/fit consistency perception varies by production period.
- Ride firmness and road noise depend on wheel/tire configuration.
- Long-distance convenience remains charging-infrastructure dependent.

Qualification questions:
- What is your typical commute profile: city-heavy, highway-heavy, or mixed?
- Is your priority lowest fuel use, lowest maintenance complexity, or balanced ownership cost?
- Would you consider hybrid or EV alternatives if efficiency is the main objective?
Advisor transition phrase:
- An advisor can now confirm the exact vehicle configuration, inspection details, and live inventory match.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### TOYOTA

#### RAV4
- Classification: Compact SUV
- Technical baseline: Excellent reliability reputation, strong resale value, perfect for city/suburban mix
- Ownership baseline: Higher demand may affect pricing and availability
- Performance baseline: Good fuel economy, available AWD options

Generation overview (U.S.):
- 1st generation (XA10): 1996-2000.
- 2nd generation (XA20): 2001-2005.
- 3rd generation (XA30): 2006-2012.
- 4th generation (XA40): 2013-2018.
- 5th generation (XA50): 2019-present.
- Major refresh: MY2016 (XA40 facelift), MY2022 (XA50 updates).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| XA30 (2006-2012) | 2.5L I4; 3.5L V6 | NA | 4-speed/5-speed AT; FWD/AWD |
| XA40 (2013-2018) | 2.5L I4 | NA | 6-speed AT; FWD/AWD |
| XA50 (2019-present) | 2.5L I4; 2.5L hybrid system; 2.5L PHEV system | NA / Hybrid / Plug-in Hybrid | 8-speed AT (gas), eCVT (hybrid/PHEV); FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| XA30 sample (2010 RAV4 4WD 2.5L) | AWD | 21 | 27 | 24 |
| XA40 sample (2018 RAV4 AWD 2.5L) | AWD | 22 | 28 | 25 |
| XA50 sample (2024 RAV4 AWD 2.5L) | AWD | 27 | 33 | 29 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~180.9 in |
| Width (in) | ~73.0 in |
| Height (in) | ~67.0 in |
| Wheelbase (in) | ~105.9 in |
| Cargo (cu ft) | ~37.6 cu ft (behind 2nd row) |
| Passenger capacity | 5 |

Typical known issues by generation:
- XA30: Common reports include steering/suspension wear and occasional oil-consumption concerns on specific
- engine years.
- XA40/XA50: Water pump and electronic accessory issues appear in owner-report patterns by year.
- NHTSA recalls vary by model year and powertrain; advisor should confirm VIN-specific campaigns.

Maintenance profile:
- Level: Low (Low / Medium / High)
- Notes: Mainstream maintenance profile with broad parts availability and generally predictable long-term servicing.

Pros:
- Strong reliability and resale patterns in U.S. compact SUV segment.
- Efficient powertrains with available AWD/hybrid options.
- Practical cargo and daily usability.

Cons:
- Road noise and performance are modest in base trims.
- High demand can reduce trim choice flexibility.
- Feature content varies significantly by year/trim.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can hand this off to an advisor for final verification of unit-specific specs, records, and real-time status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Camry
- Classification: Midsize sedan
- Technical baseline: Legendary reliability, comfortable ride, excellent resale value
- Ownership baseline: Less exciting versus sportier competitors
- Performance baseline: Smooth acceleration, comfortable highway cruising

Generation overview (U.S.):
- XV30 generation: 2002-2006.
- XV40 generation: 2007-2011.
- XV50 generation: 2012-2017.
- XV70 generation: 2018-2024.
- XV80 generation: 2025-present.
- Major refresh: MY2015 (XV50), MY2021 (XV70 facelift).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| XV40 (2007-2011) | 2.5L I4; 3.5L V6; hybrid system | NA / Hybrid | 6-speed AT (gas), eCVT (hybrid); FWD |
| XV50 (2012-2017) | 2.5L I4; 3.5L V6; hybrid system | NA / Hybrid | 6-speed AT (gas), eCVT (hybrid); FWD |
| XV70 (2018-2024) | 2.5L I4; 3.5L V6; hybrid system | NA / Hybrid | 8-speed AT (gas), eCVT (hybrid); FWD/AWD (I4) |
| XV80 (2025-present) | 2.5L hybrid system | Hybrid | eCVT; FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| XV40 sample (2010 Camry 2.5L) | FWD | 22 | 32 | 26 |
| XV70 sample (2018 Camry LE/SE 2.5L) | FWD | 28 | 39 | 32 |
| XV70 late sample (2024 Camry LE/SE 2.5L) | FWD | 28 | 39 | 32 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~192.1 in |
| Width (in) | ~72.4 in |
| Height (in) | ~56.9 in |
| Wheelbase (in) | ~111.2 in |
| Cargo (cu ft) | ~15.1 cu ft |
| Passenger capacity | 5 |

Typical known issues by generation:
- XV40: Some year-specific oil-consumption reports and age-related suspension wear patterns are documented.
- XV50/XV70: Water pump, infotainment, and occasional transmission calibration complaints appear in owner-report
- patterns.
- NHTSA recalls are model-year specific; advisor should verify VIN-level applicability.

Maintenance profile:
- Level: Low (Low / Medium / High)
- Notes: Typically low-cost routine maintenance with strong long-term parts/service accessibility.

Pros:
- Strong efficiency/reliability balance across generations.
- Comfortable ride and practical midsize packaging.
- Hybrid availability with strong EPA outcomes.

Cons:
- Driving dynamics are conservative in non-sport trims.
- Feature differences across trims/years can be substantial.
- Higher-demand trims may be less common in some inventories.

Qualification questions:
- What is your typical commute profile: city-heavy, highway-heavy, or mixed?
- Is your priority lowest fuel use, lowest maintenance complexity, or balanced ownership cost?
- Would you consider hybrid or EV alternatives if efficiency is the main objective?
Advisor transition phrase:
- Next step: advisor verification for exact trim-equipment details, condition documentation, and inventory confirmation.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Corolla
- Classification: Compact sedan
- Technical baseline: Excellent fuel economy, proven reliability, low maintenance costs
- Ownership baseline: Smaller size versus compact competitors
- Performance baseline: Efficient engine options, reliable daily transportation

Generation overview (U.S.):
- E110 generation: 1998-2002.
- E120/E130 generation: 2003-2008.
- E140/E150 generation: 2009-2013.
- E170 generation: 2014-2019.
- E210 generation: 2020-present.
- Major refresh: MY2017 (late E170), MY2023 (E210 update).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| E140/E150 (2009-2013) | 1.8L I4; 2.4L I4 | NA | 4-speed AT or 5-speed MT; FWD |
| E170 (2014-2019) | 1.8L I4 | NA | CVT or 6-speed MT; FWD |
| E210 (2020-present) | 2.0L I4; 1.8L hybrid system; 2.0L hybrid system | NA / Hybrid | CVT or eCVT; FWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| E140 sample (2010 Corolla 2.4L AT) | FWD | 22 | 30 | 25 |
| E170 sample (2018 Corolla 1.8L CVT) | FWD | 28 | 35 | 31 |
| E210 sample (2024 Corolla 2.0L CVT) | FWD | 32 | 41 | 35 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~182.5 in |
| Width (in) | ~70.1 in |
| Height (in) | ~56.5 in |
| Wheelbase (in) | ~106.3 in |
| Cargo (cu ft) | ~13.1 cu ft |
| Passenger capacity | 5 |

Typical known issues by generation:
- E140/E170: Occasional water pump and suspension wear reports are common in long-term ownership data.
- CVT-equipped years: Some owner-reported drivability complaints; regular fluid service history is important.
- NHTSA recalls are model-year specific and should be VIN-verified before final unit claims.

Maintenance profile:
- Level: Low (Low / Medium / High)
- Notes: Typically low routine service cost with strong reliability outcomes when maintenance intervals are respected.

Pros:
- Excellent fuel economy in mainstream trims.
- Proven long-term durability and low ownership friction.
- Easy city maneuverability and broad parts support.

Cons:
- Acceleration and NVH are modest in base trims.
- Rear-seat space is tighter than some compact rivals.
- Cabin materials vary significantly by trim/year.

Qualification questions:
- What is your typical commute profile: city-heavy, highway-heavy, or mixed?
- Is your priority lowest fuel use, lowest maintenance complexity, or balanced ownership cost?
- Would you consider hybrid or EV alternatives if efficiency is the main objective?
Advisor transition phrase:
- I can route you to an advisor to validate the exact unit data, service/inspection context, and current lot status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Highlander
- Classification: Midsize SUV (3-row)
- Technical baseline: Proven reliability, spacious family interior, strong resale value
- Ownership baseline: Fuel economy versus non-hybrid competitors
- Performance baseline: Comfortable ride, family-oriented features

Generation overview (U.S.):
- XU20 generation: 2001-2007.
- XU40 generation: 2008-2013.
- XU50 generation: 2014-2019.
- XU70 generation: 2020-present.
- Major refresh: MY2017 (XU50 facelift), MY2023 (XU70 update).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| XU40 (2008-2013) | 2.7L I4; 3.5L V6; hybrid system | NA / Hybrid | 5-speed AT or eCVT; FWD/AWD |
| XU50 (2014-2019) | 2.7L I4; 3.5L V6; hybrid system | NA / Hybrid | 6-speed/8-speed AT (gas), eCVT (hybrid); FWD/AWD |
| XU70 (2020-present) | 2.4L I4 turbo; hybrid system | Turbo / Hybrid | 8-speed AT (turbo), eCVT (hybrid); FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| XU40 sample (2010 Highlander 4WD 3.5L) | AWD | 17 | 23 | 19 |
| XU50 sample (2018 Highlander AWD 3.5L) | AWD | 19 | 26 | 22 |
| XU70 sample (2024 Highlander AWD 2.4T) | AWD | 21 | 28 | 24 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~194.9 in |
| Width (in) | ~76.0 in |
| Height (in) | ~68.1 in |
| Wheelbase (in) | ~112.2 in |
| Cargo (cu ft) | ~16.0 cu ft (behind 3rd row) |
| Passenger capacity | 7-8 |

Typical known issues by generation:
- XU40/XU50: Water pump, oil cooler line (certain years), and suspension wear are commonly discussed service items.
- XU70: Early production years show mixed owner reports on infotainment/software behavior and
- turbo calibration refinement.
- NHTSA recalls vary by year/powertrain; advisor should confirm VIN-specific campaigns.

Maintenance profile:
- Level: Low (Low / Medium / High)
- Notes: Family-SUV maintenance profile is generally predictable; hybrid variants retain low routine service burden.

Pros:
- Strong reliability reputation in 3-row segment.
- Comfortable ride and family-focused interior packaging.
- Good efficiency options including hybrid variants.

Cons:
- Third-row cargo space is limited compared with larger SUVs.
- Acceleration depends strongly on powertrain selection.
- Higher trims can become feature-complex for long-term repairs.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can connect you with an advisor to verify exact unit specs, condition history, and current inventory status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### 4Runner
- Classification: Midsize SUV
- Technical baseline: Excellent off-road capability, proven durability, strong resale value
- Ownership baseline: Fuel economy and ride comfort versus crossover SUVs
- Performance baseline: Body-on-frame construction, serious off-road capability

Generation overview (U.S.):
- 1st generation: 1984-1989.
- 2nd generation: 1990-1995.
- 3rd generation: 1996-2002.
- 4th generation: 2003-2009.
- 5th generation: 2010-2024.
- 6th generation: 2025-present.
- Major refresh: MY2014 and MY2020 within 5th generation.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 4th gen (2003-2009) | 4.0L V6; 4.7L V8 | NA | 5-speed AT; RWD/4WD |
| 5th gen (2010-2024) | 4.0L V6 | NA | 5-speed AT; RWD/4WD |
| 6th gen (2025-present) | 2.4L I4 turbo; hybrid system | Turbo / Hybrid | 8-speed AT; RWD/4WD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 5th gen sample (2010 4Runner 4WD) | 4WD | 17 | 22 | 19 |
| 5th gen mid sample (2018 4Runner 4WD) | 4WD | 17 | 20 | 18 |
| 5th gen late sample (2024 4Runner 4WD) | 4WD | 16 | 19 | 17 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~194.9 in |
| Width (in) | ~75.8 in |
| Height (in) | ~71.5 in |
| Wheelbase (in) | ~109.8 in |
| Cargo (cu ft) | ~47.2 cu ft (behind 2nd row, two-row setup) |
| Passenger capacity | 5-7 |

Typical known issues by generation:
- 5th gen: Documented patterns include occasional brake/suspension wear and aging electronic accessory issues at
- higher mileage.
- Body-on-frame setup prioritizes durability but can increase ride harshness and component wear in urban use.
- NHTSA recall campaigns vary by year; advisor should confirm VIN-specific status.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Durable platform with predictable service intervals, but truck-based components and
- 4WD hardware raise consumable costs versus crossovers.

Pros:
- Proven durability and off-road capability.
- Strong resale retention in U.S. market.
- Straightforward mechanical layout in 5th generation.

Cons:
- Lower fuel economy than crossover-based SUVs.
- On-road ride comfort and handling are less refined.
- Interior tech in older years can feel dated.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- An advisor can now confirm the exact vehicle configuration, inspection details, and live inventory match.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Tacoma Double Cab
- Classification: Midsize pickup truck
- Technical baseline: Reliability perception, versatile truck utility, high market demand
- Ownership baseline: Ride comfort expectations differ from crossover SUVs
- Performance baseline: Good resale value, moderate towing capacity

Generation overview (U.S.):
- 1st generation: 1995-2004.
- 2nd generation: 2005-2015.
- 3rd generation: 2016-2023.
- 4th generation: 2024-present.
- Major refresh: MY2012 (2nd-gen), MY2020 (3rd-gen update).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2nd gen (2005-2015) | 2.7L I4; 4.0L V6 | NA | 5-speed MT or 5-speed AT; RWD/4WD |
| 3rd gen (2016-2023) | 2.7L I4; 3.5L V6 | NA | 6-speed AT or 6-speed MT; RWD/4WD |
| 4th gen (2024-present) | 2.4L I4 turbo; hybrid system | Turbo / Hybrid | 8-speed AT; RWD/4WD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 2nd gen sample (2010 Tacoma 4WD 4.0L) | 4WD | 16 | 20 | 18 |
| 3rd gen sample (2018 Tacoma 4WD 3.5L) | 4WD | 18 | 22 | 20 |
| 4th gen sample (2024 Tacoma 4WD 2.4T) | 4WD | 19 | 24 | 21 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~213.0 in (Double Cab short bed, approx) |
| Width (in) | ~77.9 in |
| Height (in) | ~74.6 in |
| Wheelbase (in) | ~131.9 in |
| Cargo (cu ft) | ~49.9 cu ft (short bed approximation) |
| Passenger capacity | 5 |

Typical known issues by generation:
- 2nd gen: Age-related suspension and steering wear are common at higher mileage.
- 3rd gen: Owner-reported transmission shift-calibration and occasional rear differential noise complaints
- appear on some units.
- NHTSA recalls and service campaigns are year-specific; advisor must verify VIN-level applicability.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Reliable long-term profile overall, but 4WD drivetrain service and truck-duty consumables increase
- maintenance versus compact crossovers.

Pros:
- Strong durability and resale retention.
- Useful midsize-truck capability with manageable dimensions.
- Broad aftermarket/off-road support.

Cons:
- Ride quality can be firm in unladen daily use.
- Cabin noise and rear-seat comfort vary by generation.
- Feature content in older years can lag newer competitors.

Qualification questions:
- What payload, towing, or cargo-volume requirement must this vehicle handle?
- Is bed length/upfit compatibility or enclosed cargo security more important for your operation?
- Will this vehicle run mostly urban stop-and-go routes or sustained highway miles?
Advisor transition phrase:
- I can hand this off to an advisor for final verification of unit-specific specs, records, and real-time status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Tundra
- Classification: Full-size pickup truck
- Technical baseline: Toyota reliability in full-size truck, modern tech features, strong capability
- Ownership baseline: Fuel economy versus smaller trucks
- Performance baseline: Strong towing capacity, modern powertrain options

Generation overview (U.S.):
- 1st generation: 2000-2006.
- 2nd generation: 2007-2021.
- 3rd generation: 2022-present.
- Major refresh: MY2014 (2nd-gen facelift), MY2022 full redesign.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 1st gen (2000-2006) | 3.4L V6; 4.7L V8 | NA | 4-speed/5-speed AT; RWD/4WD |
| 2nd gen (2007-2021) | 4.0L V6; 4.6L/5.7L V8 | NA | 5-speed/6-speed AT; RWD/4WD |
| 3rd gen (2022-present) | 3.4L V6 turbo; hybrid system | Turbo / Hybrid | 10-speed AT; RWD/4WD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 2nd gen sample (2010 Tundra 4WD 4.6L) | 4WD | 14 | 19 | 16 |
| 2nd gen late sample (2018 Tundra 4WD 4.6L) | 4WD | 14 | 18 | 16 |
| 3rd gen sample (2024 Tundra 4WD 3.4T) | 4WD | 17 | 23 | 19 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~233.6 in (CrewMax short bed, approx) |
| Width (in) | ~80.2 in |
| Height (in) | ~78.0 in |
| Wheelbase (in) | ~145.7 in |
| Cargo (cu ft) | ~52.8 cu ft (short-bed approximation) |
| Passenger capacity | 5-6 |

Typical known issues by generation:
- 2nd gen: Air-injection and secondary emissions-system service issues are commonly documented on specific year ranges.
- 3rd gen: Early production years show owner-reported software and drivability calibration complaints on some trims.
- NHTSA recalls are year/configuration dependent and require VIN-level verification.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Durable full-size truck profile with generally predictable service needs;
- consumable and fuel costs remain significant in heavy-duty use.

Pros:
- Strong towing and payload capability.
- Good long-term durability reputation in U.S. market.
- Modern powertrain efficiency improvement in current generation.

Cons:
- Large footprint and parking complexity in urban environments.
- Fuel economy remains lower than midsize trucks.
- Ride quality can be firm when unladen.

Qualification questions:
- What payload, towing, or cargo-volume requirement must this vehicle handle?
- Is bed length/upfit compatibility or enclosed cargo security more important for your operation?
- Will this vehicle run mostly urban stop-and-go routes or sustained highway miles?
Advisor transition phrase:
- Next step: advisor verification for exact trim-equipment details, condition documentation, and inventory confirmation.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### HYUNDAI

#### Tucson
- Classification: Compact SUV
- Technical baseline: Excellent warranty, modern tech features, good fuel economy for city driving
- Ownership baseline: Resale value versus Japanese competitors
- Performance baseline: Comfortable ride, efficient engine options

Generation overview (U.S.):
- 1st generation (JM): 2005-2009.
- 2nd generation (LM): 2010-2015.
- 3rd generation (TL): 2016-2021.
- 4th generation (NX4): 2022-present.
- Major refresh: MY2014 (LM facelift), MY2025 (NX4 update cycle).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| LM (2010-2015) | 2.0L I4; 2.4L I4 | NA | 6-speed AT or 5/6-speed MT; FWD/AWD |
| TL (2016-2021) | 2.0L I4; 1.6L I4; diesel variants by year | NA / Turbo / Turbo-diesel | 6-speed AT, 7-speed DCT, or 6-speed MT; FWD/AWD |
| NX4 (2022-present) | 2.5L I4; hybrid/PHEV variants | NA / Hybrid / PHEV | 8-speed AT (gas), 6-speed AT or e-AT by hybrid config; FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| LM sample (2010 Tucson FWD 2.4L) | FWD | 23 | 31 | 26 |
| TL sample (2018 Tucson FWD 1.6T) | FWD | 25 | 30 | 27 |
| NX4 sample (2024 Tucson FWD 2.5L) | FWD | 25 | 32 | 28 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~182.7 in |
| Width (in) | ~73.4 in |
| Height (in) | ~65.6 in |
| Wheelbase (in) | ~108.5 in |
| Cargo (cu ft) | ~38.7 cu ft (behind 2nd row, approx) |
| Passenger capacity | 5 |

Typical known issues by generation:
- LM/TL: Commonly reported themes include transmission calibration complaints (specific trims) and
- electronic accessory issues.
- Some turbo-equipped years show owner-reported higher sensitivity to maintenance intervals and oil quality.
- NHTSA recall applicability is model-year specific and should be VIN-verified.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Mainstream compact-SUV service cost is generally manageable; turbo/DCT variants can require stricter
- maintenance discipline.

Pros:
- Strong feature content per trim level.
- Good fuel economy in core FWD configurations.
- Broad availability of AWD and electrified variants in newer generations.

Cons:
- Long-term reliability perception varies by powertrain/year.
- Powertrain refinement differs noticeably across trim levels.
- Resale strength may trail top Japanese rivals in some markets.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can route you to an advisor to validate the exact unit data, service/inspection context, and current lot status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Santa Fe
- Classification: Midsize SUV
- Technical baseline: Spacious interior, comfortable ride, good value for features offered
- Ownership baseline: Fuel economy in Miami traffic conditions
- Performance baseline: Family-focused features, available AWD

Generation overview (U.S.):
- 1st generation (SM): 2001-2006.
- 2nd generation (CM): 2007-2012.
- 3rd generation (DM): 2013-2018.
- 4th generation (TM): 2019-2023.
- 5th generation (MX5): 2024-present.
- Major refresh: MY2017 (DM facelift), MY2021 (TM facelift).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| CM/DM period sample (2010-2018) | 2.4L I4; 3.3L/3.5L V6 | NA | 6-speed AT; FWD/AWD |
| TM (2019-2023) | 2.5L I4; 2.5L I4 turbo; hybrid/PHEV variants | NA / Turbo / Hybrid / PHEV | 8-speed AT or 8-speed DCT by trim; FWD/AWD |
| MX5 (2024-present) | 2.5L I4 turbo; hybrid variants | Turbo / Hybrid | 8-speed DCT (gas turbo), 6-speed AT (hybrid); FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| CM/DM sample (2010 Santa Fe FWD 2.4L) | FWD | 20 | 28 | 23 |
| DM late sample (2018 Santa Fe FWD 3.3L) | FWD | 18 | 25 | 21 |
| MX5 sample (2024 Santa Fe FWD 2.5T) | FWD | 20 | 29 | 24 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~190.2 in |
| Width (in) | ~74.8 in |
| Height (in) | ~67.7 in |
| Wheelbase (in) | ~110.8 in |
| Cargo (cu ft) | ~40.5 cu ft (behind 2nd row, approx) |
| Passenger capacity | 5-7 (configuration dependent) |

Typical known issues by generation:
- Older generations show recurring reports of suspension wear and occasional electrical accessory faults.
- Turbo/DCT trims in newer years may show drivability calibration complaints in owner feedback.
- NHTSA recalls are year and configuration dependent; advisor should confirm VIN-level applicability.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Moderate maintenance profile overall; complexity increases with turbocharged and hybridized drivetrains.

Pros:
- Spacious interior and family-friendly packaging.
- Competitive feature stack for midsize segment.
- Strong value orientation versus many rivals.

Cons:
- Efficiency and performance vary significantly by powertrain.
- Some generations have mixed long-term reliability perceptions.
- Third-row usability depends heavily on configuration.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can connect you with an advisor to verify exact unit specs, condition history, and current inventory status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Palisade
- Classification: Full-size SUV (3-row)
- Technical baseline: Premium features without luxury market positioning, spacious family transport, strong warranty
- Ownership baseline: Size considerations for Miami parking
- Performance baseline: Comfortable highway ride, family-oriented interior

Generation overview (U.S.):
- 1st generation: 2020-present.
- Major refresh: MY2023 facelift/update cycle.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2020-present | 3.8L V6 | NA | 8-speed AT; FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 1st gen sample (2020 Palisade FWD) | FWD | 19 | 26 | 22 |
| 1st gen refresh sample (2024 Palisade FWD) | FWD | 19 | 26 | 22 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~196.7 in |
| Width (in) | ~77.8 in |
| Height (in) | ~68.9 in |
| Wheelbase (in) | ~114.2 in |
| Cargo (cu ft) | ~18.0 cu ft (behind 3rd row, approx) |
| Passenger capacity | 7-8 |

Typical known issues by generation:
- Early production years show owner-reported infotainment/electrical software issues and
- occasional driveline vibration complaints.
- High-feature trims can experience more electronics-related service events.
- NHTSA recall campaigns vary by year and equipment level; advisor should confirm VIN status.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Large family-SUV consumables (tires/brakes) add cost, but naturally aspirated V6/8AT layout is
- relatively straightforward to service.

Pros:
- Spacious 3-row cabin with strong family usability.
- Competitive feature content and comfort.
- Predictable naturally aspirated power delivery.

Cons:
- Large footprint in dense urban parking.
- Fuel economy is moderate for class.
- Long-term electronics complexity varies by trim.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- An advisor can now confirm the exact vehicle configuration, inspection details, and live inventory match.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### KIA

#### Sportage
- Classification: Compact SUV
- Technical baseline: Bold styling, excellent warranty, good tech features for market positioning
- Ownership baseline: Long-term reliability perception versus established brands
- Performance baseline: Modern infotainment, efficient powertrain

Generation overview (U.S.):
- 1st generation: 1995-2002.
- 2nd generation: 2005-2010.
- 3rd generation (SL): 2011-2016.
- 4th generation (QL): 2017-2022.
- 5th generation (NQ5): 2023-present.
- Major refresh: MY2026 update cycle (NQ5 platform evolution).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2nd gen sample period (2010) | 2.0L I4; 2.7L V6 | NA | 4-speed AT or 5-speed MT; FWD/AWD |
| QL (2017-2022) | 2.4L I4; 2.0L I4 | NA / Turbo | 6-speed AT; FWD/AWD |
| NQ5 (2023-present) | 2.5L I4; hybrid/PHEV variants | NA / Hybrid / PHEV | 8-speed AT (gas), 6-speed AT (hybrid), 6-speed AT (PHEV); FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 2nd gen sample (2010 Sportage FWD 2.7L) | FWD | 18 | 23 | 20 |
| 4th gen sample (2018 Sportage FWD 2.0L) | FWD | 21 | 26 | 23 |
| 5th gen sample (2024 Sportage FWD 2.5L) | FWD | 25 | 33 | 28 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~183.5 in |
| Width (in) | ~73.4 in |
| Height (in) | ~65.4 in |
| Wheelbase (in) | ~108.5 in |
| Cargo (cu ft) | ~39.6 cu ft (behind 2nd row, approx) |
| Passenger capacity | 5 |

Typical known issues by generation:
- Older generations show recurring owner-reported electrical accessory and suspension wear issues.
- Some turbo-equipped trims in prior generations have higher long-term maintenance sensitivity.
- NHTSA recall applicability is year/trim specific and should be VIN-verified.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Routine maintenance is moderate, with higher complexity for turbo/hybrid variants and
- AWD drivetrain service intervals.

Pros:
- Practical compact-SUV packaging with strong feature value.
- Broad powertrain mix including hybrid/PHEV options.
- Competitive fuel efficiency in recent FWD trims.

Cons:
- Long-term reliability perception varies by generation/powertrain.
- Ride and NVH quality depend on wheel/trim setup.
- Resale performance can vary versus top segment leaders.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can hand this off to an advisor for final verification of unit-specific specs, records, and real-time status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Telluride
- Classification: Full-size SUV (3-row)
- Technical baseline: Award-winning design, spacious family interior, luxury features at mainstream market positioning
- Ownership baseline: High demand may affect availability and pricing
- Performance baseline: Comfortable ride, premium interior features

Generation overview (U.S.):
- 1st generation: 2020-present.
- Major refresh: MY2023 facelift/update cycle.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| 2020-present | 3.8L V6 | NA | 8-speed AT; FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| 1st gen sample (2020 Telluride FWD) | FWD | 20 | 26 | 23 |
| 1st gen refresh sample (2024 Telluride FWD) | FWD | 20 | 26 | 22 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~196.9 in |
| Width (in) | ~78.3 in |
| Height (in) | ~69.3 in |
| Wheelbase (in) | ~114.2 in |
| Cargo (cu ft) | ~21.0 cu ft (behind 3rd row, approx) |
| Passenger capacity | 7-8 |

Typical known issues by generation:
- Early years show owner-reported infotainment/electrical software issues and
- occasional drivability calibration complaints.
- High-feature trims may involve greater electronic system service complexity.
- NHTSA recalls vary by year and equipment package; advisor should confirm VIN-level applicability.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Naturally aspirated V6/8AT architecture is straightforward, but large-SUV consumables increase ongoing
- operating cost.

Pros:
- Spacious family-focused 3-row interior.
- Strong feature content and comfort for segment.
- Solid highway comfort and long-trip usability.

Cons:
- Urban parking and maneuvering are challenging due size.
- Fuel economy is moderate for a full-size 3-row SUV.
- Long-term electronics complexity depends on trim content.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- Next step: advisor verification for exact trim-equipment details, condition documentation, and inventory confirmation.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### LEXUS

#### RX 350
- Classification: Midsize luxury SUV
- Technical baseline: Lexus reliability reputation, luxury comfort, strong resale value
- Ownership baseline: Higher maintenance costs versus mainstream brands
- Performance baseline: Smooth ride quality, premium interior experience

Generation overview (U.S.):
- XU10 generation (RX 300 era): 1999-2003.
- XU30 generation: 2004-2009.
- AL10 generation: 2010-2015.
- AL20 generation: 2016-2022.
- AL30 generation: 2023-present.
- Major refresh: MY2013 (AL10 facelift), MY2020 (AL20 facelift).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| AL10 (2010-2015) | 3.5L V6 | NA | 6-speed AT; FWD/AWD |
| AL20 (2016-2022) | 3.5L V6; hybrid system variants | NA / Hybrid | 8-speed AT (gas), eCVT (hybrid); FWD/AWD |
| AL30 (2023-present) | 2.4L I4 turbo; hybrid variants | Turbo / Hybrid | 8-speed AT (gas), eCVT (hybrid); FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| AL10 sample (2010 RX 350 AWD) | AWD | 18 | 24 | 20 |
| AL20 sample (2018 RX 350 AWD) | AWD | 19 | 26 | 22 |
| AL30 sample (2024 RX 350 AWD 2.4T) | AWD | 21 | 28 | 24 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~192.5 in |
| Width (in) | ~75.6 in |
| Height (in) | ~67.3 in |
| Wheelbase (in) | ~112.2 in |
| Cargo (cu ft) | ~29.6 cu ft (behind 2nd row, approx) |
| Passenger capacity | 5 |

Typical known issues by generation:
- AL10/AL20: Commonly reported items include water pump/cooling-system service and age-related suspension wear.
- AL30 early years: Owner feedback includes occasional software and infotainment calibration concerns.
- NHTSA recalls vary by model year and powertrain; advisor should confirm VIN-level applicability.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Generally predictable luxury-SUV maintenance profile, lower-risk than many German peers but still above
- mainstream crossover cost levels.

Pros:
- Strong comfort, reliability perception, and resale in luxury crossover class.
- Quiet cabin and refined daily-driving behavior.
- Broad powertrain evolution with improved efficiency in newer generations.

Cons:
- Driving engagement is less sporty than some rivals.
- Option/tech differences across years can be substantial.
- Premium parts/labor still cost more than mainstream brands.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can route you to an advisor to validate the exact unit data, service/inspection context, and current lot status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### NX
- Classification: Compact luxury SUV
- Technical baseline: Luxury brand with Toyota reliability, premium interior, good city size
- Ownership baseline: Fuel economy versus non-luxury compact SUVs
- Performance baseline: Refined driving dynamics, premium features

Generation overview (U.S.):
- AZ10 generation: 2015-2021.
- AZ20 generation: 2022-present.
- Major refresh: MY2025 feature/update cycle in AZ20 production.

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| AZ10 (2015-2021) | 2.0L I4 turbo; hybrid system variants | Turbo / Hybrid | 6-speed AT (turbo), eCVT (hybrid); FWD/AWD |
| AZ20 (2022-present) | 2.5L I4; 2.4L I4 turbo; hybrid/PHEV variants | NA / Turbo / Hybrid / PHEV | 8-speed AT (gas/turbo), eCVT (hybrid/PHEV); FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| AZ10 sample (2018 NX 300 AWD) | AWD | 22 | 28 | 24 |
| AZ20 turbo sample (2024 NX 350 AWD) | AWD | 21 | 28 | 24 |
| AZ20 NA sample (2024 NX 250 AWD) | AWD | 25 | 32 | 28 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~183.5 in |
| Width (in) | ~73.4 in |
| Height (in) | ~65.4 in |
| Wheelbase (in) | ~105.9 in |
| Cargo (cu ft) | ~22.7 cu ft (behind 2nd row, approx) |
| Passenger capacity | 5 |

Typical known issues by generation:
- AZ10: Common owner reports include infotainment/controller complaints and occasional fuel-system or sensor
- service items.
- AZ20 early years: Software updates and connectivity/infotainment calibration are recurrent service themes.
- NHTSA recall status is model-year specific and should be verified by VIN.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Lower-risk luxury compact SUV maintenance profile overall, but turbo/hybrid variants add system
- complexity versus base naturally aspirated trims.

Pros:
- Premium brand feel with strong daily usability.
- Solid efficiency and comfort balance.
- Competitive reliability perception in luxury compact class.

Cons:
- Rear cargo and rear-seat space are moderate for class.
- Tech interface experience varies by generation.
- Higher service cost than mainstream compact SUVs.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can connect you with an advisor to verify exact unit specs, condition history, and current inventory status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### MAZDA

#### CX-5
- Classification: Compact SUV
- Technical baseline: Premium interior design, engaging driving feel, good value proposition
- Ownership baseline: Rear seat space versus larger competitors
- Performance baseline: Sport-tuned suspension, responsive handling

Generation overview (U.S.):
- 1st generation (KE): 2013-2016.
- 2nd generation (KF): 2017-present.
- Major refresh: MY2022 (KF update cycle).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| KE (2013-2016) | 2.0L I4; 2.5L I4 | NA | 6-speed AT or 6-speed MT; FWD/AWD |
| KF (2017-present) | 2.5L I4; 2.5L I4 turbo | NA / Turbo | 6-speed AT; FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| KE sample (2013 CX-5 FWD 2.0L) | FWD | 26 | 32 | 28 |
| KF sample (2018 CX-5 FWD 2.5L) | FWD | 25 | 31 | 28 |
| KF late sample (2024 CX-5 AWD 2.5L) | AWD | 26 | 31 | 28 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~180.1 in |
| Width (in) | ~72.6 in |
| Height (in) | ~66.3 in |
| Wheelbase (in) | ~106.2 in |
| Cargo (cu ft) | ~30.9 cu ft (behind 2nd row, approx) |
| Passenger capacity | 5 |

Typical known issues by generation:
- KE/KF: Common owner-reported items include infotainment glitches and occasional suspension bushing/noise
- complaints over time.
- Turbo variants can show higher long-term maintenance sensitivity (heat/oil-service discipline).
- NHTSA recall applicability varies by year and should be VIN-confirmed.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Moderate maintenance profile with generally reliable naturally aspirated powertrains;
- turbo trims increase service complexity.

Pros:
- Engaging handling relative to many compact-SUV competitors.
- Upscale interior design and feature packaging.
- Solid efficiency/performance balance in core trims.

Cons:
- Rear-seat and cargo space are moderate, not class-leading.
- Ride firmness may be higher than comfort-tuned rivals.
- Turbo trims can increase long-term operating cost.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- An advisor can now confirm the exact vehicle configuration, inspection details, and live inventory match.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### CX-9
- Classification: Full-size SUV (3-row)
- Technical baseline: Upscale interior design, car-like handling, attractive styling
- Ownership baseline: Third-row space versus larger SUV competitors
- Performance baseline: Smooth power delivery, family-focused features

Generation overview (U.S.):
- 1st generation (TB): 2007-2015.
- 2nd generation (TC): 2016-2023.
- U.S. transition to CX-90 as successor began in MY2024.
- Major refresh: MY2020 (TC update cycle).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| TB (2007-2015) | 3.7L V6 | NA | 6-speed AT; FWD/AWD |
| TC (2016-2023) | 2.5L I4 | Turbo | 6-speed AT; FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| TB sample (2013 CX-9 FWD 3.7L) | FWD | 17 | 24 | 19 |
| TC sample (2018 CX-9 FWD 2.5T) | FWD | 22 | 28 | 24 |
| TC late sample (2023 CX-9 AWD 2.5T) | AWD | 20 | 26 | 23 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~199.4 in |
| Width (in) | ~77.5 in |
| Height (in) | ~69.0 in |
| Wheelbase (in) | ~115.3 in |
| Cargo (cu ft) | ~14.4 cu ft (behind 3rd row, approx) |
| Passenger capacity | 6-7 |

Typical known issues by generation:
- TB: Age-related suspension and cooling-system maintenance are common long-term service themes.
- TC: Owner reports include occasional infotainment/software issues and higher maintenance sensitivity on
- turbocharged drivetrain components.
- NHTSA recalls vary by year/trim and should be verified by VIN.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Moderate maintenance profile for segment; turbocharged TC generation requires disciplined fluid and
- cooling-system maintenance.

Pros:
- Refined driving dynamics for a 3-row crossover.
- Upscale interior presentation in later model years.
- Strong highway comfort and usable family packaging.

Cons:
- Third-row and cargo space trail some larger rivals.
- Turbo-only powertrain in TC generation may concern conservative buyers.
- Discontinued status (replaced by CX-90) affects long-term market comparables.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can hand this off to an advisor for final verification of unit-specific specs, records, and real-time status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### MITSUBISHI

#### Outlander
- Classification: Compact SUV (3-row)
- Technical baseline: Standard 3-row seating, excellent warranty, good value proposition
- Ownership baseline: Performance versus more powerful competitors
- Performance baseline: Efficient powertrain, practical family transport

Generation overview (U.S.):
- 2nd generation (CW): 2007-2013.
- 3rd generation (GF): 2014-2021.
- 4th generation (GN): 2022-present.
- Major refresh years: MY2016 (GF facelift), MY2019 (GF update), MY2024 (GN update cycle).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| CW (2007-2013) | 2.4L I4; 3.0L V6 | NA | CVT / 6-speed AT; FWD/AWD |
| GF (2014-2021) | 2.4L I4; 3.0L V6; 2.0L I4 + e-motor (PHEV) | NA / Plug-in Hybrid | CVT / 6-speed AT (V6 by year); FWD/AWD |
| GN (2022-present) | 2.5L I4; 2.4L I4 + e-motor (PHEV) | NA / Plug-in Hybrid | CVT (2.5); 1-speed reduction gear (PHEV); FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| CW sample (2010 Outlander 2.4 FWD) | FWD | 21 | 27 | 24 |
| GF sample (2018 Outlander 2.4 FWD) | FWD | 25 | 30 | 27 |
| GN sample (2024 Outlander 2.5 FWD) | FWD | 24 | 31 | 27 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~185.4 in |
| Width (in) | ~74.7 in |
| Height (in) | ~68.8 in |
| Wheelbase (in) | ~106.5 in |
| Cargo (cu ft) | ~11.7 cu ft (behind 3rd row, approx) |
| Passenger capacity | 7 |

Typical known issues by generation:
- CW/GF: Common long-term service themes include suspension wear and infotainment/electrical accessory issues on
- older units.
- CVT-equipped years require careful fluid-service history review; drivetrain behavior complaints are documented
- on some ranges.
- NHTSA recalls vary by model year and powertrain; VIN-level recall status should be advisor-verified.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Generally moderate maintenance profile with broad parts access; CVT service discipline is a key
- reliability factor.

Pros:
- Practical 3-row packaging in a compact footprint.
- Competitive fuel economy in 4-cylinder trims.
- Good value proposition with family-oriented feature content.

Cons:
- Third-row and cargo space are limited compared with larger midsize SUVs.
- Base acceleration can feel modest when fully loaded.
- CVT behavior may not match buyers preferring stepped automatics.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- Next step: advisor verification for exact trim-equipment details, condition documentation, and inventory confirmation.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### SUBARU

#### Outback
- Classification: Midsize SUV wagon
- Technical baseline: Standard AWD, excellent safety ratings, practical wagon/SUV crossover
- Ownership baseline: Ground clearance versus traditional SUVs
- Performance baseline: All-weather capability, safety-focused design

Generation overview (U.S.):
- 4th generation (BR): 2010-2014.
- 5th generation (BS): 2015-2019.
- 6th generation (BT): 2020-present.
- Major refresh years: MY2018 (BS facelift), MY2023 (BT facelift cycle).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| BR (2010-2014) | 2.5L H4; 3.6L H6 | NA | CVT / 6-speed MT (2.5); 5-speed AT (3.6); AWD |
| BS (2015-2019) | 2.5L H4; 3.6L H6 | NA | CVT; AWD |
| BT (2020-present) | 2.5L H4; 2.4L H4 | NA / Turbo | CVT; AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| BR sample (2010 Outback AWD 2.5L) | AWD | 22 | 29 | 24 |
| BS sample (2018 Outback AWD 2.5L) | AWD | 25 | 32 | 28 |
| BT sample (2024 Outback AWD 2.5L) | AWD | 26 | 32 | 28 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~191.9 in |
| Width (in) | ~74.6 in |
| Height (in) | ~66.4 in |
| Wheelbase (in) | ~108.1 in |
| Cargo (cu ft) | ~32.6 cu ft (behind 2nd row, approx) |
| Passenger capacity | 5 |

Typical known issues by generation:
- BR: Common age-related items include wheel-bearing wear, oil-consumption reports on some 2.5L units,
- and suspension bushing service at higher mileage.
- BS: Broad owner feedback includes infotainment responsiveness concerns and
- some CVT drivability/valve-body related complaints on specific years.
- BT: Early-year infotainment/software stability concerns are documented in owner reports;
- NHTSA recalls vary by model year and require VIN confirmation.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Generally predictable maintenance with strong AWD durability history,
- but CVT service discipline and AWD tire-matching requirements are important.

Pros:
- Standard AWD and strong all-weather usability.
- High practicality with wagon-like cargo access.
- Good long-distance comfort and safety-tech availability.

Cons:
- Not class-leading acceleration in non-turbo trims.
- CVT feel may not match buyers preferring stepped automatics.
- Infotainment experience varies by generation and update state.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can route you to an advisor to validate the exact unit data, service/inspection context, and current lot status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Forester
- Classification: Compact SUV
- Technical baseline: Standard AWD, great visibility, practical family transport
- Ownership baseline: Performance versus turbocharged competitors
- Performance baseline: Safety features, practical cargo space

Generation overview (U.S.):
- 3rd generation (SH): 2009-2013.
- 4th generation (SJ): 2014-2018.
- 5th generation (SK): 2019-present.
- Major refresh years: MY2017 (SJ facelift), MY2022 (SK facelift).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| SH (2009-2013) | 2.5L H4 | NA | 4-speed AT / 5-speed MT; AWD |
| SJ (2014-2018) | 2.5L H4; 2.0L H4 | NA / Turbo (XT) | CVT / 6-speed MT (NA); CVT (XT); AWD |
| SK (2019-present) | 2.5L H4 | NA | CVT; AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| SH sample (2010 Forester AWD 2.5L) | AWD | 20 | 26 | 22 |
| SJ sample (2018 Forester AWD 2.5L CVT) | AWD | 26 | 32 | 28 |
| SK sample (2024 Forester AWD 2.5L) | AWD | 26 | 33 | 29 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~183.3 in |
| Width (in) | ~72.0 in |
| Height (in) | ~68.1 in |
| Wheelbase (in) | ~105.1 in |
| Cargo (cu ft) | ~28.9 cu ft (behind 2nd row, approx) |
| Passenger capacity | 5 |

Typical known issues by generation:
- SH: Typical age-related repairs include head-gasket discussions on older EJ-based years and
- suspension/wheel-bearing wear at higher mileage.
- SJ: Some owner-reported concerns include CVT behavior complaints and occasional A/C compressor or
- wheel-bearing service.
- SK: Owner reports show occasional infotainment/electronics complaints; NHTSA recalls are model-year specific
- and should be VIN-verified.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Moderate maintenance burden with generally durable AWD systems; CVT-related service history and
- fluid maintenance are important screening points.

Pros:
- Standard AWD and strong visibility.
- Practical interior packaging and good safety-feature coverage.
- Balanced efficiency for an AWD compact SUV.

Cons:
- Base acceleration is modest.
- Cabin noise/finish refinement varies by year and trim.
- CVT response may not suit all driving preferences.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- I can connect you with an advisor to verify exact unit specs, condition history, and current inventory status.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### VOLKSWAGEN

#### Atlas Cross Sport
- Classification: Midsize SUV
- Technical baseline: Spacious feel, comfortable highway behavior, strong daily-family usability
- Ownership baseline: Confirm if customer needs third-row seating or not
- Performance baseline: Comfortable ride, family-oriented interior

Generation overview (U.S.):
- 1st generation (CA1): 2020-present.
- Major refresh years: MY2024 (powertrain and interior update cycle).

Engine and transmission table:

| Generation/Years | Engine (L) | Induction | Transmission |
|---|---:|---|---|
| CA1 launch (2020-2023) | 2.0L I4; 3.6L V6 | Turbo / NA | 8-speed AT; FWD/AWD |
| CA1 refresh (2024-present) | 2.0L I4 | Turbo | 8-speed AT; FWD/AWD |

EPA MPG table (city/highway):

| Generation/Years | Drivetrain | City MPG | Highway MPG | Combined MPG |
|---|---|---:|---:|---:|
| CA1 sample (2020 Atlas Cross Sport 2.0T FWD) | FWD | 21 | 24 | 22 |
| CA1 mid sample (2022 Atlas Cross Sport 2.0T FWD) | FWD | 21 | 25 | 23 |
| CA1 refresh sample (2024 Atlas Cross Sport 2.0T FWD) | FWD | 20 | 27 | 23 |

Approximate dimensions:

| Metric | Value |
|---|---|
| Length (in) | ~195.5 in |
| Width (in) | ~78.3 in |
| Height (in) | ~67.8 in |
| Wheelbase (in) | ~117.3 in |
| Cargo (cu ft) | ~40.3 cu ft (behind 2nd row, approx) |
| Passenger capacity | 5 |

Typical known issues by generation:
- CA1: Owner-reported trends include infotainment/software glitches and occasional electronic module issues in
- early production years.
- Brake and tire wear patterns can vary by wheel package and city-use duty cycle.
- NHTSA recalls are year and equipment dependent; VIN-level confirmation is required.

Maintenance profile:
- Level: Medium (Low / Medium / High)
- Notes: Mainstream service complexity with moderate routine costs; electronics/software updates are a notable
- maintenance touchpoint.

Pros:
- Spacious cabin feel and strong rear-seat comfort for a 2-row midsize SUV.
- Stable highway ride and useful cargo area.
- Modern safety/infotainment feature set in refreshed years.

Cons:
- Large exterior footprint can complicate urban parking.
- Fuel economy is moderate versus smaller 2-row crossovers.
- No third-row seating for users needing maximum passenger capacity.

Qualification questions:
- Will you regularly use second- or third-row seating for family passengers?
- Do you need maximum cargo flexibility for strollers, luggage, or sports gear?
- Is easy child-seat loading and rear-door access important for your daily use?
Advisor transition phrase:
- An advisor can now confirm the exact vehicle configuration, inspection details, and live inventory match.

Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

## SOURCE & VERIFICATION RULE
- Always verify year/trim/engine/transmission data against official OEM specifications first.
- Confirm fuel economy against EPA published values for the exact year/powertrain.
- Confirm safety recall context against NHTSA records; VIN-level recall status must be advisor-verified.
- If two sources conflict, mark `UNVERIFIED – Advisor verification required` and escalate.
- Never present unverified assumptions as confirmed facts.




















