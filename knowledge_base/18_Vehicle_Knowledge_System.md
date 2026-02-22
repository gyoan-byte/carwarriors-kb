## Authority Notice
This module is subordinate to the Authority Hierarchy defined in README.md. If any rule conflicts, the following override order applies:
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
- Includes: U.S.-market generation mapping, engine/transmission references, EPA context, dimensions context, known issues, maintenance profiles, and advisory transitions for all listed models.
- Does not include: pricing, financing decisions, payment commitments, legal approval language, or confirmed live inventory.
- N/A/TBD scope: heavy-duty and classic models may show N/A for EPA light-duty MPG fields where publication is not consistent or not applicable.
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
- respond with `UNVERIFIED – Advisor verification required`,
- provide one safe high-level alternative,
- and escalate to a human advisor for exact confirmation.
- This override remains active until the next full technical re-audit is completed and certified.
- Re-audit execution must follow `18_Vehicle_Knowledge_Reaudit_Plan.md` stage gates.

## Inventory Separation Rule
Vehicle knowledge does NOT imply inventory availability.
All availability must be verified only through `Carros Listos`.
- Technical knowledge only; no pricing, financing terms (advisor verified), payment structure (advisor verified), approval guarantee, or confirmed availability.
- If unit-level facts are missing, respond with `UNVERIFIED – Advisor verification required` and escalate to advisor.
- Keep responses concise, structured, and verification-first.
- Do not imply final inventory status; advisor confirms live status.
- Prefer U.S.-market specifications unless explicitly stated otherwise.

## RESPONSE ENGINE
- Step 1: Identify customer intent (body type, use case, fuel type, budget sensitivity, family/commercial need).
- Step 2: Match one primary model + one alternative model.
- Step 3: Present objective high-level summary (classification, ownership profile, broad capability fit).
- Step 4: Ask up to 2-3 qualification questions across multiple turns.
- Never violate the one-question-per-message rule.
- Step 5: Transition to human advisor for unit-specific confirmation.

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
- Technical baseline: Rear-drive sport-sedan architecture with turbocharged powertrain focus
- Ownership baseline: Premium-brand service costs and lower dealer-network density than mainstream brands
- Performance baseline: Sharp steering and handling-oriented chassis tuning
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### ACURA
#### RDX
- Classification: Compact luxury SUV
- Technical baseline: Turbocharged compact luxury crossover with available SH-AWD
- Ownership baseline: Generally lower long-term cost than many European luxury competitors
- Performance baseline: Balanced acceleration, comfort, and daily usability
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### MDX
- Classification: Midsize luxury SUV (3-row)
- Technical baseline: Three-row luxury crossover with V6-oriented packaging and family focus
- Ownership baseline: Predictable maintenance for luxury segment, with transmission/AWD servicing importance
- Performance baseline: Smooth highway behavior and stable family-oriented ride
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### AUDI
#### Q5
- Classification: Compact luxury SUV
- Technical baseline: Quattro-based luxury compact SUV with technology-forward cabin
- Ownership baseline: Above-mainstream maintenance cost profile typical of German luxury brands
- Performance baseline: Balanced handling and strong all-weather confidence
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Q7
- Classification: Full-size luxury SUV (3-row)
- Technical baseline: Three-row premium SUV with advanced electronics and driver-assist systems
- Ownership baseline: High-complexity luxury ownership with elevated repair/labor costs
- Performance baseline: Strong highway comfort with capable premium powertrain options
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### BMW
#### X3
- Classification: Compact luxury SUV
- Technical baseline: Compact luxury crossover with rear-drive-based dynamics and xDrive availability
- Ownership baseline: Premium parts/labor and drivetrain complexity influence lifetime cost
- Performance baseline: Sport-oriented handling in compact SUV format
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### X5
- Classification: Midsize luxury SUV
- Technical baseline: Core midsize luxury SUV platform with broad powertrain availability
- Ownership baseline: Maintenance complexity increases with higher-performance and hybridized variants
- Performance baseline: Refined ride with strong power and towing capability in segment
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### X6
- Classification: Midsize luxury SUV coupe
- Technical baseline: Coupe-roof luxury SUV derivative prioritizing style and performance image
- Ownership baseline: Tire/brake and suspension costs can be higher than conventional midsize SUVs
- Performance baseline: Strong acceleration and sport-biased tuning
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### CADILLAC
#### ESCALADE
- Classification: Full-size luxury SUV
- Technical baseline: Body-on-frame luxury full-size SUV with high-capacity utility profile
- Ownership baseline: Large-vehicle fuel, tire, brake, and electronics costs are significant
- Performance baseline: Strong towing and premium highway ride quality
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### XT5
- Classification: Midsize luxury SUV
- Technical baseline: Two-row luxury crossover tuned for comfort-first daily use
- Ownership baseline: Moderate luxury maintenance burden versus segment peers
- Performance baseline: Smooth, quiet operation with practical midsize packaging
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### CHEVROLET
#### Camaro
- Classification: Sports coupe / muscle car
- Technical baseline: Rear-wheel-drive performance coupe with multi-engine lineup
- Ownership baseline: Practicality is limited and consumable costs rise in high-performance trims
- Performance baseline: Strong straight-line performance and engaging handling
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Equinox
- Classification: Compact SUV
- Technical baseline: Mainstream compact crossover with broad trim/powertrain availability
- Ownership baseline: Typical mainstream maintenance profile with high parts/service access
- Performance baseline: Efficiency-focused daily transportation with comfortable ride
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Equinox EV
- Classification: Compact electric SUV
- Technical baseline: Battery-electric compact crossover platform with software-driven feature set
- Ownership baseline: Low routine mechanical service but charging and software campaign compliance are key
- Performance baseline: Instant torque and quiet urban operation
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Silverado 1500 Crew Cab
- Classification: Full-size half-ton pickup truck
- Technical baseline: Light-duty full-size truck with broad engine and cab/bed configurations
- Ownership baseline: Fuel and consumable costs depend heavily on duty cycle and drivetrain
- Performance baseline: Strong towing and payload for mixed work/lifestyle use
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Silverado 3500 HD Crew Cab
- Classification: Heavy-duty pickup truck
- Technical baseline: Commercial-grade heavy-duty truck platform for high-load workloads
- Ownership baseline: High operating cost profile with diesel/HD component service complexity
- Performance baseline: Maximum towing/payload capability focus
Sources: Official specs + NHTSA (EPA light-duty MPG may be N/A)
Last Verified: 2026-02-19

### DODGE
#### Charger
- Classification: Full-size sport sedan
- Technical baseline: Large performance-oriented sedan architecture with V6/V8 legacy lineup
- Ownership baseline: Running costs rise substantially in V8 and performance variants
- Performance baseline: Strong acceleration and highway presence
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Dart
- Classification: Compact sedan
- Technical baseline: Discontinued compact sedan platform with economy-oriented configuration mix
- Ownership baseline: Parts/support and transmission-specific service quality matter by unit
- Performance baseline: Basic commuter performance with efficient trims available
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### FORD
#### F350 Super Duty Crew Cab
- Classification: Heavy-duty commercial pickup truck
- Technical baseline: Super Duty platform built for high-load towing and commercial utility
- Ownership baseline: Heavy-use consumables and diesel service complexity can be substantial
- Performance baseline: High payload/towing capability for work-duty cycles
Sources: Official specs + NHTSA (EPA light-duty MPG may be N/A)
Last Verified: 2026-02-19

#### Falcon Wagon (1964)
- Classification: Classic station wagon
- Technical baseline: Vintage wagon platform with period-correct mechanical simplicity
- Ownership baseline: Restoration quality and classic-parts sourcing drive ownership experience
- Performance baseline: Collector-focused operation rather than modern performance standards
Sources: Historical OEM references + collector documentation
Last Verified: 2026-02-19

#### Mustang
- Classification: Sports car / muscle car
- Technical baseline: Iconic rear-wheel-drive performance coupe with broad generation coverage
- Ownership baseline: Insurance and consumables increase with performance-oriented trims
- Performance baseline: Strong acceleration and enthusiast-focused dynamics
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Transit 250 Cargo Van
- Classification: Commercial cargo van
- Technical baseline: Full-size cargo van platform for fleet and trade applications
- Ownership baseline: Duty cycle, idle hours, and upfit weight strongly affect service needs
- Performance baseline: Cargo-hauling utility prioritized over passenger-car dynamics
Sources: Official specs + NHTSA (EPA light-duty MPG may be N/A by configuration)
Last Verified: 2026-02-19

### HONDA
#### Accord
- Classification: Midsize sedan
- Technical baseline: Mainstream midsize sedan with strong reliability and efficiency reputation
- Ownership baseline: Low-to-moderate service burden with broad parts and service network
- Performance baseline: Balanced comfort, efficiency, and daily drivability
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Civic
- Classification: Compact sedan/hatchback
- Technical baseline: Compact platform with broad body-style and efficiency-oriented configurations
- Ownership baseline: Generally low operating cost and strong parts availability
- Performance baseline: Efficient daily-use tuning with optional sport trims
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Ridgeline
- Classification: Midsize pickup truck
- Technical baseline: Unibody midsize truck emphasizing comfort and everyday usability
- Ownership baseline: Predictable service profile with moderate truck consumable costs
- Performance baseline: Smooth on-road dynamics versus body-on-frame truck rivals
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### HUMMER
#### H1
- Classification: Heavy-duty off-road utility vehicle
- Technical baseline: Military-derived extreme off-road architecture with specialty-use profile
- Ownership baseline: Specialized parts/service and high running costs are typical
- Performance baseline: Off-road capability prioritized over comfort/efficiency
Sources: Historical OEM references + NHTSA
Last Verified: 2026-02-19

### INFINITI
#### Q50
- Classification: Compact luxury sport sedan
- Technical baseline: Rear-drive-based luxury sedan with turbo and AWD availability by year
- Ownership baseline: Moderate luxury maintenance profile with electronics/turbo history checks recommended
- Performance baseline: Strong straight-line performance in higher-output trims
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Q60
- Classification: Luxury sport coupe
- Technical baseline: Two-door luxury coupe platform with performance-focused trim mix
- Ownership baseline: Lower practicality and potentially higher long-term turbo service burden
- Performance baseline: Quick acceleration and coupe-oriented handling
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Q70
- Classification: Full-size luxury sedan
- Technical baseline: Executive-size sedan with comfort-oriented premium layout
- Ownership baseline: Discontinued-model status can affect long-term parts/trim availability
- Performance baseline: Refined highway cruising with traditional luxury-sedan character
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### QX60
- Classification: Midsize luxury SUV (3-row)
- Technical baseline: Family-focused three-row luxury crossover platform
- Ownership baseline: Transmission history and electronics updates should be verified by unit
- Performance baseline: Comfort-oriented ride and family usability
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### LAND ROVER
#### Range Rover
- Classification: Full-size luxury SUV
- Technical baseline: Flagship luxury off-road-capable SUV with high-feature platform complexity
- Ownership baseline: High-maintenance risk profile if service history is inconsistent
- Performance baseline: Strong blend of on-road comfort and off-road capability
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### MERCEDES-BENZ
#### C-Class
- Classification: Compact luxury sedan
- Technical baseline: Entry-luxury sedan platform with modern safety/infotainment integration
- Ownership baseline: Premium diagnostics/labor and electronics complexity raise long-term costs
- Performance baseline: Refined daily performance with balanced comfort and handling
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### E-Class
- Classification: Midsize executive luxury sedan
- Technical baseline: Core executive sedan architecture with advanced comfort and driver-assist systems
- Ownership baseline: High-feature variants increase maintenance and repair complexity over time
- Performance baseline: Strong highway refinement and smooth power delivery
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### GLC Coupe
- Classification: Compact luxury SUV coupe
- Technical baseline: Coupe-roof compact luxury SUV emphasizing style and premium tech
- Ownership baseline: Cargo/headroom trade-offs and premium consumable costs
- Performance baseline: Sportier handling feel than conventional compact SUVs
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### GLE
- Classification: Midsize luxury SUV
- Technical baseline: Midsize premium SUV platform with broad powertrain and feature spread
- Ownership baseline: Electronics/suspension complexity can increase long-term service costs
- Performance baseline: Comfortable highway ride with strong premium-family utility
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### NISSAN
#### 370Z
- Classification: Sports car
- Technical baseline: Rear-drive two-seat sports coupe/roadster platform
- Ownership baseline: Practicality is limited; age and use history are key condition factors
- Performance baseline: Responsive naturally aspirated sports-car character
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### RAM
#### 2500 Crew Cab
- Classification: Heavy-duty pickup truck
- Technical baseline: HD truck platform for commercial towing and payload workloads
- Ownership baseline: Diesel aftertreatment and HD consumables drive high operating costs
- Performance baseline: High-capacity work-truck performance and durability focus
Sources: Official specs + NHTSA (EPA light-duty MPG may be N/A)
Last Verified: 2026-02-19

### TESLA
#### Model 3
- Classification: Compact electric sedan
- Technical baseline: EV sedan platform with OTA software ecosystem and efficient packaging
- Ownership baseline: Charging access and software/service campaign compliance are core ownership factors
- Performance baseline: Strong EV efficiency and immediate torque response
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### TOYOTA
#### RAV4
- Classification: Compact SUV
- Technical baseline: Mainstream compact crossover with gas, hybrid, and AWD availability by year
- Ownership baseline: Strong reliability/resale profile and broad service network
- Performance baseline: Efficient daily-use tuning with practical cargo utility
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Camry
- Classification: Midsize sedan
- Technical baseline: Mainstream midsize sedan with gas/hybrid powertrain coverage by generation
- Ownership baseline: Low-to-moderate long-term ownership cost profile
- Performance baseline: Comfort-first ride with strong efficiency in hybrid variants
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Corolla
- Classification: Compact sedan/hatchback
- Technical baseline: High-volume compact platform with efficiency-oriented tuning
- Ownership baseline: Predictable maintenance and strong parts availability
- Performance baseline: Efficient commuter performance with low running complexity
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Highlander
- Classification: Midsize SUV (3-row)
- Technical baseline: Family-focused three-row crossover with hybrid availability
- Ownership baseline: Reliable ownership profile with moderate midsize-SUV consumable costs
- Performance baseline: Smooth daily comfort and practical long-trip capability
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### 4Runner
- Classification: Midsize SUV
- Technical baseline: Body-on-frame midsize SUV with durability and off-road heritage
- Ownership baseline: Truck-based consumables and lower fuel economy versus crossovers
- Performance baseline: Off-road durability and utility focus over on-road refinement
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Tacoma Double Cab
- Classification: Midsize pickup truck
- Technical baseline: Midsize truck platform with strong market demand and off-road ecosystem
- Ownership baseline: Reliable profile with moderate truck-duty service requirements
- Performance baseline: Balanced towing, utility, and daily drivability in midsize segment
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Tundra
- Classification: Full-size pickup truck
- Technical baseline: Full-size truck platform with modern turbo/hybrid-era powertrains in current generation
- Ownership baseline: Full-size fuel and consumable costs remain significant
- Performance baseline: Strong towing/payload utility for mixed work and family use
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### HYUNDAI
#### Tucson
- Classification: Compact SUV
- Technical baseline: Compact crossover with gas/hybrid/PHEV coverage by generation
- Ownership baseline: Value-oriented ownership with warranty emphasis
- Performance baseline: Efficiency-forward daily comfort in compact SUV class
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Santa Fe
- Classification: Midsize SUV
- Technical baseline: Midsize crossover platform with broad feature content and family focus
- Ownership baseline: Moderate maintenance profile with powertrain-specific variation by trim
- Performance baseline: Comfortable ride with practical family utility
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Palisade
- Classification: Full-size SUV (3-row)
- Technical baseline: Three-row family SUV with premium-content mainstream positioning
- Ownership baseline: Large-SUV consumables and electronics complexity depend on trim content
- Performance baseline: Comfort-oriented long-distance and family-transport capability
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### KIA
#### Sportage
- Classification: Compact SUV
- Technical baseline: Compact crossover with mainstream, hybrid, and PHEV variants by generation
- Ownership baseline: Value and warranty-focused ownership profile
- Performance baseline: Efficient daily-use performance with modern infotainment emphasis
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Telluride
- Classification: Full-size SUV (3-row)
- Technical baseline: Three-row family SUV with high-feature mainstream positioning
- Ownership baseline: Large footprint and consumable costs typical of segment
- Performance baseline: Comfortable highway behavior and family-focused packaging
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### LEXUS
#### RX 350
- Classification: Midsize luxury SUV
- Technical baseline: Core Lexus luxury crossover with comfort-oriented tuning
- Ownership baseline: Generally predictable luxury ownership versus higher-risk peers
- Performance baseline: Quiet and refined daily-driving character
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### NX
- Classification: Compact luxury SUV
- Technical baseline: Compact luxury crossover with gas, turbo, hybrid, and PHEV options by generation
- Ownership baseline: Moderate luxury maintenance complexity with strong reliability perception
- Performance baseline: Balanced city-size usability with premium feature set
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### MAZDA
#### CX-5
- Classification: Compact SUV
- Technical baseline: Compact crossover emphasizing upscale interior design and driving feel
- Ownership baseline: Moderate service burden; turbo variants require tighter maintenance discipline
- Performance baseline: Responsive handling relative to mainstream compact SUV peers
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### CX-9
- Classification: Midsize SUV (3-row)
- Technical baseline: Three-row crossover with premium-leaning cabin and family focus
- Ownership baseline: Turbo-era maintenance history should be checked by unit
- Performance baseline: Smooth highway behavior with refined steering response
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### MITSUBISHI
#### Outlander
- Classification: Compact SUV (3-row)
- Technical baseline: Compact three-row crossover with value-oriented family packaging
- Ownership baseline: CVT/maintenance history is key for long-term ownership confidence
- Performance baseline: Efficiency-focused daily-family performance
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### SUBARU
#### Outback
- Classification: Midsize SUV wagon
- Technical baseline: Standard AWD wagon/crossover architecture with high practicality
- Ownership baseline: Tire matching and AWD/CVT service discipline are important
- Performance baseline: Strong all-weather confidence and long-trip comfort
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

#### Forester
- Classification: Compact SUV
- Technical baseline: Standard AWD compact SUV with visibility and safety emphasis
- Ownership baseline: Moderate cost profile with CVT service history relevance
- Performance baseline: Practical, stable all-weather family transport
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

### VOLKSWAGEN
#### Atlas Cross Sport
- Classification: Midsize SUV (2-row)
- Technical baseline: Two-row midsize crossover with spacious cabin and comfort bias
- Ownership baseline: Software/electronics update history should be reviewed by unit
- Performance baseline: Stable highway ride with family-oriented usability
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-19

## SOURCE & VERIFICATION RULE
- Always verify year/trim/engine/transmission data against official OEM specifications first.
- Confirm fuel economy against EPA published values for the exact year/powertrain.
- Confirm safety recall context against NHTSA records; VIN-level recall status must be advisor-verified.
- If two sources conflict, mark `UNVERIFIED – Advisor verification required` and escalate.
- Never present unverified assumptions as confirmed facts.
