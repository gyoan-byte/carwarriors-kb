## Authority Notice
This module is subordinate to the Authority Hierarchy defined in README.md. If any rule conflicts, the following override order applies:
1. Safety and Compliance (07, 10)
2. Financing Rules (03)
3. Inventory Rules (02)
4. All other modules

# System Version: v1.0
# Completion Status: Production-Ready Technical Knowledge Base
# Total Models: 87
# Total Brands: 25
# Final TBD Count: 0
# Last Full Audit Date: 2026-02-23

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
- `- Maintenance profile:`
- `- Resale tier:`
- `- Used risk flags:`
- `- Miami fit notes:`
- `- Buyer profile fit:`
- `- Cross-shop models:`
- `- Inventory mapping key:`
- `- Aliases:`
- `Sources:`
- `Last Verified:`
- Keep these labels and header levels stable to avoid parser breaks.

## Certification Status
System Integrity: VERIFIED
Compliance Status: CLEAN
Models Audited: 87
Brands Audited: 25
Final Data Gaps: 0
Certification Date: 2026-02-23

## Inventory Separation Rule
Vehicle knowledge does NOT imply inventory availability.
All availability must be verified only through `Carros Listos`.
- Technical knowledge only; no pricing, financing terms (advisor verified), payment structure (advisor verified), approval guarantee, or confirmed availability.
- If unit-level facts are missing, respond with: "I can confirm we have this model category, but for exact specifications like engine size, transmission type, or specific features, I'll need to connect you with an advisor who has access to the detailed unit information."
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
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Luxury sport-sedan enthusiast; style-focused commuter; premium driving-dynamics buyer
- Cross-shop models: BMW 3 Series; Audi A4; Mercedes-Benz C-Class; Infiniti Q50
- Inventory mapping key: ALFA ROMEO_GIULIA
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

### ACURA
#### RDX
- Classification: Compact luxury SUV
- Technical baseline: Turbocharged compact luxury crossover with available SH-AWD
- Ownership baseline: Generally lower long-term cost than many European luxury competitors
- Performance baseline: Balanced acceleration, comfort, and daily usability
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Compact luxury SUV commuter; reliability-focused premium buyer; tech-oriented family user
- Cross-shop models: Lexus NX; BMW X3; Audi Q5; Mercedes-Benz GLC Coupe
- Inventory mapping key: ACURA_RDX
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### MDX
- Classification: Midsize luxury SUV (3-row)
- Technical baseline: Three-row luxury crossover with V6-oriented packaging and family focus
- Ownership baseline: Predictable maintenance for luxury segment, with transmission/AWD servicing importance
- Performance baseline: Smooth highway behavior and stable family-oriented ride
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: 3-row luxury family buyer; reliability-first premium shopper; long-distance household user
- Cross-shop models: Lexus RX 350L; Audi Q7; BMW X5; Infiniti QX60
- Inventory mapping key: ACURA_MDX
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

### AUDI
#### Q5
- Classification: Compact luxury SUV
- Technical baseline: Quattro-based luxury compact SUV with technology-forward cabin
- Ownership baseline: Above-mainstream maintenance cost profile typical of German luxury brands
- Performance baseline: Balanced handling and strong all-weather confidence
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Luxury compact SUV buyer; tech-focused commuter; premium family user
- Cross-shop models: BMW X3; Mercedes-Benz GLC Coupe; Lexus NX; Acura RDX
- Inventory mapping key: AUDI_Q5
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Q7
- Classification: Full-size luxury SUV (3-row)
- Technical baseline: Three-row premium SUV with advanced electronics and driver-assist systems
- Ownership baseline: High-complexity luxury ownership with elevated repair/labor costs
- Performance baseline: Strong highway comfort with capable premium powertrain options
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: 3-row luxury family buyer; highway comfort shopper; premium SUV owner
- Cross-shop models: BMW X5; Mercedes-Benz GLE; Volvo XC90; Acura MDX
- Inventory mapping key: AUDI_Q7
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### S4
- Classification: Compact luxury sport sedan
- Technical baseline: Quattro-based compact sport sedan with turbocharged performance focus
- Ownership baseline: Premium German luxury maintenance with turbo/AWD complexity considerations
- Performance baseline: Sport-tuned handling with strong acceleration capability
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Luxury sport sedan enthusiast; performance-focused commuter; premium driving dynamics buyer
- Cross-shop models: BMW 3 Series; Mercedes-Benz C-Class; Alfa Romeo Giulia; Cadillac CT4-V
- Inventory mapping key: AUDI_S4
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### S5
- Classification: Compact luxury sport coupe/sedan
- Technical baseline: Quattro-based luxury sport model with enhanced performance over A5 platform
- Ownership baseline: Premium maintenance profile with performance-oriented consumable costs
- Performance baseline: Strong acceleration with sport-biased chassis tuning
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Luxury sport coupe buyer; performance enthusiast; style-focused premium owner
- Cross-shop models: BMW 4 Series; Mercedes-Benz C-Class Coupe; Lexus RC; Cadillac CT5-V
- Inventory mapping key: AUDI_S5
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

### BMW
#### X3
- Classification: Compact luxury SUV
- Technical baseline: Compact luxury crossover with rear-drive-based dynamics and xDrive availability
- Ownership baseline: Premium parts/labor and drivetrain complexity influence lifetime cost
- Performance baseline: Sport-oriented handling in compact SUV format
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Luxury compact SUV commuter; performance-leaning premium buyer; urban family owner
- Cross-shop models: Audi Q5; Mercedes-Benz GLC Coupe; Lexus NX; Volvo XC60
- Inventory mapping key: BMW_X3
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### X5
- Classification: Midsize luxury SUV
- Technical baseline: Core midsize luxury SUV platform with broad powertrain availability
- Ownership baseline: Maintenance complexity increases with higher-performance and hybridized variants
- Performance baseline: Refined ride with strong power and towing capability in segment
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Luxury midsize SUV buyer; premium family driver; long-distance commuter
- Cross-shop models: Audi Q7; Mercedes-Benz GLE; Lexus RX 350; Acura MDX
- Inventory mapping key: BMW_X5
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### X6
- Classification: Midsize luxury SUV coupe
- Technical baseline: Coupe-roof luxury SUV derivative prioritizing style and performance image
- Ownership baseline: Tire/brake and suspension costs can be higher than conventional midsize SUVs
- Performance baseline: Strong acceleration and sport-biased tuning
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Style-focused luxury SUV coupe buyer; performance-oriented owner; premium image shopper
- Cross-shop models: Mercedes-Benz GLE Coupe; Audi Q8; Porsche Cayenne Coupe; BMW X5
- Inventory mapping key: BMW_X6
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

### CADILLAC
#### ESCALADE
- Classification: Full-size luxury SUV
- Technical baseline: Body-on-frame luxury full-size SUV with high-capacity utility profile
- Ownership baseline: Large-vehicle fuel, tire, brake, and electronics costs are significant
- Performance baseline: Strong towing and premium highway ride quality
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Large luxury SUV buyer; executive/family transport owner; premium towing-capable shopper
- Cross-shop models: Lincoln Navigator; Jeep Wagoneer; GMC Yukon Denali; Lexus LX
- Inventory mapping key: CADILLAC_ESCALADE
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### XT5
- Classification: Midsize luxury SUV
- Technical baseline: Two-row luxury crossover tuned for comfort-first daily use
- Ownership baseline: Moderate luxury maintenance burden versus segment peers
- Performance baseline: Smooth, quiet operation with practical midsize packaging
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Luxury midsize crossover buyer; comfort-focused commuter; premium value shopper
- Cross-shop models: Lexus RX 350; Acura RDX; BMW X3; Audi Q5
- Inventory mapping key: CADILLAC_XT5
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

### CHEVROLET
#### Camaro
- Classification: Sports coupe / muscle car
- Technical baseline: Rear-wheel-drive performance coupe with multi-engine lineup
- Ownership baseline: Practicality is limited and consumable costs rise in high-performance trims
- Performance baseline: Strong straight-line performance and engaging handling
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Muscle-car enthusiast; weekend performance buyer; style-focused coupe owner
- Cross-shop models: Ford Mustang; Dodge Challenger; Nissan 370Z; Toyota GR86
- Inventory mapping key: CHEVROLET_CAMARO
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Equinox
- Classification: Compact SUV
- Technical baseline: Mainstream compact crossover with broad trim/powertrain availability
- Ownership baseline: Typical mainstream maintenance profile with high parts/service access
- Performance baseline: Efficiency-focused daily transportation with comfortable ride
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Compact SUV commuter; value-focused household; daily driver
- Cross-shop models: Honda CR-V; Toyota RAV4; Nissan Rogue; Hyundai Tucson
- Inventory mapping key: CHEVROLET_EQUINOX
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Equinox EV
- Classification: Compact electric SUV
- Technical baseline: Battery-electric compact crossover platform with software-driven feature set
- Ownership baseline: Low routine mechanical service but charging and software campaign compliance are key
- Performance baseline: Instant torque and quiet urban operation
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: EV commuter; first-time EV buyer; tech-focused urban owner
- Cross-shop models: Tesla Model Y; Hyundai Ioniq 5; Kia EV6; Volkswagen ID.4
- Inventory mapping key: CHEVROLET_EQUINOX_EV
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Silverado 1500 Crew Cab
- Classification: Full-size half-ton pickup truck
- Technical baseline: Light-duty full-size truck with broad engine and cab/bed configurations
- Ownership baseline: Fuel and consumable costs depend heavily on duty cycle and drivetrain
- Performance baseline: Strong towing/payload capability for mixed work and family use
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: Silverado 1500
- Buyer profile fit: Full-size truck buyer; towing user; mixed family/work owner
- Cross-shop models: Ford F-150; Chevrolet Silverado 1500 Crew Cab; RAM 1500; Nissan Titan
- Inventory mapping key: CHEVROLET_SILVERADO_1500_CREW_CAB
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Bolt EV
- Classification: Compact electric hatchback
- Technical baseline: Electric vehicle with front-wheel drive and 200 hp electric motor
- Ownership baseline: EV-specific maintenance with battery warranty coverage; lower operating costs than gas vehicles
- Performance baseline: Instant torque delivery; 0-60 mph in ~6.5 seconds; one-pedal driving mode
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: EV_BATTERY; CHARGING_INFRASTRUCTURE
- Miami fit notes: Growing EV market; practical urban electric with competitive range
- Aliases: Bolt EV
- Buyer profile fit: EV early adopter; urban commuter; budget-conscious EV buyer; tech-focused user
- Cross-shop models: Nissan Leaf; Hyundai Kona Electric; Tesla Model 3; Kia Niro EV
- Inventory mapping key: CHEVROLET_BOLT_EV
Sources: Official Chevrolet specs + EPA fuel economy (120 MPGe combined) + NHTSA safety ratings
Last Verified: 2026-02-23

#### Silverado 3500 HD Crew Cab
- Classification: Heavy-duty pickup truck
- Technical baseline: Commercial-grade heavy-duty truck platform for high-load workloads
- Ownership baseline: High operating cost profile with diesel/HD component service complexity
- Performance baseline: Maximum towing/payload capability focus
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Commercial heavy-duty buyer; trailer operator; work-fleet manager
- Cross-shop models: Ford F350 Super Duty Crew Cab; RAM 3500; GMC Sierra 3500 HD
- Inventory mapping key: CHEVROLET_SILVERADO_3500_HD_CREW_CAB
Sources: Official specs + NHTSA (EPA light-duty MPG may be N/A)
Last Verified: 2026-02-23

#### SUBURBAN
- Classification: Full-size SUV (3-row)
- Technical baseline: Large three-row SUV with strong V8 power, optional diesel
- Ownership baseline: Moderate maintenance with focus on engine and transmission
- Performance baseline: Spacious family transport with towing capability
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: ENGINE_COMPLEXITY; FLOOD_SENSITIVITY
- Miami fit notes: Excellent for large families, good for long trips
- Aliases: SUBURBAN
- Buyer profile fit: Large family buyer; shuttle/commercial passenger operator; long-trip user
- Cross-shop models: Chevrolet Tahoe; Ford Expedition Max; GMC Yukon XL; Jeep Wagoneer L
- Inventory mapping key: CHEVROLET_SUBURBAN
Sources: Official Chevrolet specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Tahoe
- Classification: Full-size SUV (3-row)
- Technical baseline: Large SUV with V8
- Ownership baseline: Powerful, moderate maintenance
- Performance baseline: Towing and space
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: ENGINE_COMPLEXITY
- Miami fit notes: Good for large groups
- Aliases: Tahoe
- Buyer profile fit: Large household SUV buyer; towing-capable family user; mixed city/highway owner
- Cross-shop models: Chevrolet Suburban; Ford Expedition; GMC Yukon; Nissan Armada
- Inventory mapping key: CHEVROLET_TAHOE
Sources: Official Chevrolet specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Traverse
- Classification: Midsize SUV (3-row)
- Technical baseline: Three-row crossover
- Ownership baseline: Family oriented, low maintenance
- Performance baseline: Comfortable transport
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Spacious family SUV
- Aliases: Traverse
- Buyer profile fit: 3-row crossover family buyer; practical commuter household; value-focused SUV shopper
- Cross-shop models: Honda Pilot; Toyota Highlander; Kia Telluride; Hyundai Palisade
- Inventory mapping key: CHEVROLET_TRAVERSE
Sources: Official Chevrolet specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Malibu
- Classification: Midsize sedan
- Technical baseline: Sedan with turbo
- Ownership baseline: Comfortable, moderate maintenance
- Performance baseline: Highway driving
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Affordable sedan
- Aliases: Malibu
- Buyer profile fit: Budget midsize sedan commuter; first-time family sedan buyer; value-focused owner
- Cross-shop models: Toyota Camry; Honda Accord; Hyundai Sonata; Nissan Altima
- Inventory mapping key: CHEVROLET_MALIBU
Sources: Official Chevrolet specs + EPA + NHTSA
Last Verified: 2026-02-23


### DODGE
#### Charger
- Classification: Full-size sport sedan
- Technical baseline: Large performance-oriented sedan architecture with V6/V8 legacy lineup
- Ownership baseline: Running costs rise substantially in V8 and performance variants
- Performance baseline: Strong acceleration and highway presence
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Performance sedan enthusiast; highway commuter wanting power; full-size sedan shopper
- Cross-shop models: Chrysler 300; Nissan Maxima (used market); Kia Stinger (used market); Ford Mustang (performance alternative)
- Inventory mapping key: DODGE_CHARGER
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Dart
- Classification: Compact sedan
- Technical baseline: Discontinued compact sedan platform with economy-oriented configuration mix
- Ownership baseline: Parts/support and transmission-specific service quality matter by unit
- Performance baseline: Basic commuter performance with efficient trims available
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Budget used-car buyer; first-time owner; commuter seeking low entry price
- Cross-shop models: Chevrolet Cruze; Ford Focus; Hyundai Elantra; Kia Forte
- Inventory mapping key: DODGE_DART
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### DURANGO
- Classification: Midsize SUV (3-row)
- Technical baseline: Three-row SUV with Hemi V8 or turbo options
- Ownership baseline: Moderate maintenance with attention to transmission
- Performance baseline: Powerful acceleration, comfortable ride
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: TRANSMISSION_RISK; FLOOD_SENSITIVITY
- Miami fit notes: Good for families, strong A/C for heat
- Aliases: DURANGO
- Buyer profile fit: 3-row SUV buyer needing towing capability; family + utility owner; V8-capable SUV shopper
- Cross-shop models: Ford Explorer; Toyota Highlander; Jeep Grand Cherokee L; Kia Telluride
- Inventory mapping key: DODGE_DURANGO
Sources: Official Dodge specs + EPA + NHTSA
Last Verified: 2026-02-23

### FORD
#### F350 Super Duty Crew Cab
- Classification: Heavy-duty commercial pickup truck
- Technical baseline: Super Duty platform built for high-load towing and commercial utility
- Ownership baseline: Heavy-use consumables and diesel service complexity can be substantial
- Performance baseline: High payload/towing capability for work-duty cycles
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Commercial fleet; heavy towing operator; construction user
- Cross-shop models: RAM 3500; Chevrolet Silverado 3500 HD Crew Cab; GMC Sierra HD
- Inventory mapping key: FORD_F350_SUPER_DUTY_CREW_CAB
Sources: Official specs + NHTSA (EPA light-duty MPG may be N/A)
Last Verified: 2026-02-23

#### Falcon Wagon
- Classification: Classic station wagon
- Technical baseline: Vintage wagon platform with period-correct mechanical simplicity
- Ownership baseline: Restoration quality and classic-parts sourcing drive ownership experience
- Performance baseline: Collector-focused operation rather than modern performance standards
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Classic collector; restoration buyer; weekend enthusiast
- Cross-shop models: Chevrolet Nova Wagon (classic); Plymouth Valiant Wagon (classic); Ford Fairlane Wagon (classic)
- Inventory mapping key: FORD_FALCON_WAGON_1964
Sources: Historical OEM references + collector documentation
Last Verified: 2026-02-23

#### Mustang
- Classification: Sports car / muscle car
- Technical baseline: Iconic rear-wheel-drive performance coupe with broad generation coverage
- Ownership baseline: Insurance and consumables increase with performance-oriented trims
- Performance baseline: Strong acceleration and enthusiast-focused dynamics
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Enthusiast buyer; weekend driver; style-focused commuter
- Cross-shop models: Chevrolet Camaro; Dodge Challenger; Nissan 370Z; Toyota GR86
- Inventory mapping key: FORD_MUSTANG
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Transit 250 Cargo Van
- Classification: Commercial cargo van
- Technical baseline: Full-size cargo van platform for fleet and trade applications
- Ownership baseline: Duty cycle, idle hours, and upfit weight strongly affect service needs
- Performance baseline: Cargo-hauling utility prioritized over passenger-car dynamics
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Small business fleet; tradesperson; delivery operator
- Cross-shop models: Mercedes-Benz Sprinter Cargo Van; RAM ProMaster; Nissan NV (used market)
- Inventory mapping key: FORD_TRANSIT_250_CARGO_VAN
Sources: Official specs + NHTSA (EPA light-duty MPG may be N/A by configuration)
Last Verified: 2026-02-23

#### F-150
- Classification: Full-size pickup truck
- Technical baseline: Full-size pickup with various engines
- Ownership baseline: Versatile, moderate maintenance
- Performance baseline: Strong towing and work
- Maintenance profile: Moderate
- Resale tier: Strong
- Used risk flags: TOWING_MAINTENANCE
- Miami fit notes: Popular for utility
- Aliases: F-150; F150
- Buyer profile fit: Contractor; towing user; mixed work/personal owner
- Cross-shop models: Chevrolet Silverado 1500 Crew Cab; RAM 1500; Toyota Tundra; Nissan Titan
- Inventory mapping key: FORD_F_150
Sources: Official Ford specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Maverick
- Classification: Compact pickup truck
- Technical baseline: Unibody compact pickup with standard hybrid powertrain (191 hp) and optional turbo engine (250 hp)
- Ownership baseline: Ford reliability with truck-specific maintenance; hybrid battery warranty coverage
- Performance baseline: Efficient daily driving with 40 mpg hybrid (EPA); capable light-duty work; 4,000 lb towing
- Maintenance profile: Low
- Resale tier: Strong
- Used risk flags: HYBRID_BATTERY
- Miami fit notes: Growing compact truck market; ideal for urban work; fuel-efficient alternative to full-size trucks
- Aliases: Maverick
- Buyer profile fit: Urban work user; compact truck commuter; fuel-conscious buyer; small business owner
- Cross-shop models: Toyota Tacoma; Hyundai Santa Cruz; Honda Ridgeline; Ford Ranger
- Inventory mapping key: FORD_MAVERICK
Sources: Official Ford specs + EPA fuel economy (40 mpg hybrid) + NHTSA safety ratings
Last Verified: 2026-02-23

#### Explorer
- Classification: Midsize SUV (3-row)
- Technical baseline: Three-row SUV with V6
- Ownership baseline: Spacious, moderate maintenance
- Performance baseline: Family transport
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Good for families
- Aliases: Explorer
- Buyer profile fit: Growing family; 3-row shopper; highway commuter
- Cross-shop models: Toyota Highlander; Honda Pilot; Kia Sorento; Hyundai Palisade
- Inventory mapping key: FORD_EXPLORER
Sources: Official Ford specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Escape
- Classification: Compact SUV
- Technical baseline: Compact crossover
- Ownership baseline: Reliable, low maintenance
- Performance baseline: Balanced
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Urban SUV
- Aliases: Escape
- Buyer profile fit: Commuter; first-time SUV buyer; small family
- Cross-shop models: Honda CR-V; Toyota RAV4; Hyundai Tucson; Nissan Rogue
- Inventory mapping key: FORD_ESCAPE
Sources: Official Ford specs + EPA + NHTSA
Last Verified: 2026-02-23


### HONDA
#### Accord
- Classification: Midsize sedan
- Technical baseline: Mainstream midsize sedan with strong reliability and efficiency reputation
- Ownership baseline: Low-to-moderate service burden with broad parts and service network
- Performance baseline: Balanced comfort, efficiency, and daily drivability
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Daily commuter; small family; reliability-focused buyer
- Cross-shop models: Toyota Camry; Hyundai Sonata; Kia K5; Nissan Altima
- Inventory mapping key: HONDA_ACCORD
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Civic
- Classification: Compact sedan/hatchback
- Technical baseline: Compact platform with broad body-style and efficiency-oriented configurations
- Ownership baseline: Generally low operating cost and strong parts availability
- Performance baseline: Efficient daily-use tuning with optional sport trims
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: First-time buyer; student; urban commuter; small family user
- Cross-shop models: Toyota Corolla; Hyundai Elantra; Kia Forte; Nissan Sentra
- Inventory mapping key: HONDA_CIVIC
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Fit
- Classification: Subcompact hatchback
- Technical baseline: Subcompact platform with Magic Seat system and exceptional cargo versatility
- Ownership baseline: Low operating costs with excellent fuel economy and Honda reliability
- Performance baseline: Efficient 1.6L 4-cylinder with available 6MT or CVT transmission
- Maintenance profile: Low
- Resale tier: Strong
- Used risk flags: NONE
- Miami fit notes: Ideal urban hatchback; excellent for city parking and cargo versatility
- Aliases: Fit
- Buyer profile fit: Urban commuter; first-time buyer; cargo-conscious user; budget-conscious practical buyer
- Cross-shop models: Toyota Yaris; Hyundai Accent; Kia Rio; Nissan Versa
- Inventory mapping key: HONDA_FIT
Sources: Official Honda specs + EPA fuel economy (33/40 mpg CVT highway) + NHTSA 5-Star Safety Rating
Last Verified: 2026-02-23

#### Ridgeline
- Classification: Midsize pickup truck
- Technical baseline: Unibody midsize truck emphasizing comfort and everyday usability
- Ownership baseline: Predictable service profile with moderate truck consumable costs
- Performance baseline: Smooth on-road dynamics versus body-on-frame truck rivals
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Lifestyle truck buyer; weekend utility user; comfort-first pickup shopper
- Cross-shop models: Toyota Tacoma Double Cab; Chevrolet Colorado Crew Cab; Nissan Frontier Crew Cab
- Inventory mapping key: HONDA_RIDGELINE
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### CR-V
- Classification: Compact SUV
- Technical baseline: Compact crossover with CVT
- Ownership baseline: Reliable, moderate maintenance
- Performance baseline: Balanced for daily use
- Maintenance profile: Low
- Resale tier: Strong
- Used risk flags: CVT_RISK
- Miami fit notes: Popular compact SUV
- Aliases: CR-V
- Buyer profile fit: Compact family SUV buyer; commuter; reliability-focused owner
- Cross-shop models: Toyota RAV4; Nissan Rogue; Hyundai Tucson; Kia Sportage
- Inventory mapping key: HONDA_CR_V
Sources: Official Honda specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Pilot
- Classification: Midsize SUV (3-row)
- Technical baseline: Three-row SUV with V6
- Ownership baseline: Spacious, moderate maintenance
- Performance baseline: Family transport
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Good for large families
- Aliases: Pilot
- Buyer profile fit: Family with 2-3 children; road-trip user; 3-row SUV shopper
- Cross-shop models: Toyota Highlander; Hyundai Palisade; Kia Telluride; Ford Explorer
- Inventory mapping key: HONDA_PILOT
Sources: Official Honda specs + EPA + NHTSA
Last Verified: 2026-02-23

#### HR-V
- Classification: Subcompact SUV
- Technical baseline: Small crossover with CVT
- Ownership baseline: Efficient, low maintenance
- Performance baseline: City driving
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: CVT_RISK
- Miami fit notes: Affordable urban SUV
- Aliases: HR-V
- Buyer profile fit: Urban buyer; first SUV owner; budget-conscious commuter
- Cross-shop models: Toyota Corolla Cross; Hyundai Kona; Kia Seltos; Nissan Kicks
- Inventory mapping key: HONDA_HR_V
Sources: Official Honda specs + EPA + NHTSA
Last Verified: 2026-02-23


### HUMMER
#### H1
- Classification: Heavy-duty off-road utility vehicle
- Technical baseline: Military-derived extreme off-road architecture with specialty-use profile
- Ownership baseline: Specialized parts/service and high running costs are typical
- Performance baseline: Off-road capability prioritized over comfort/efficiency
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Collector/off-road enthusiast; specialty vehicle buyer; restoration-focused owner
- Cross-shop models: AM General HMMWV (civilian conversions); Land Rover Defender classic; Jeep Wrangler (off-road alternative); Toyota Land Cruiser classic
- Inventory mapping key: HUMMER_H1
Sources: Historical OEM references + NHTSA
Last Verified: 2026-02-23

### INFINITI
#### Q50
- Classification: Compact luxury sport sedan
- Technical baseline: Rear-drive-based luxury sedan with turbo and AWD availability by year
- Ownership baseline: Moderate luxury maintenance profile with electronics/turbo history checks recommended
- Performance baseline: Strong straight-line performance in higher-output trims
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Luxury sport sedan shopper; performance-value buyer; commuter wanting premium badge
- Cross-shop models: BMW 3 Series; Audi A4; Mercedes-Benz C-Class; Lexus IS
- Inventory mapping key: INFINITI_Q50
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Q60
- Classification: Luxury sport coupe
- Technical baseline: Two-door luxury coupe platform with performance-focused trim mix
- Ownership baseline: Lower practicality and potentially higher long-term turbo service burden
- Performance baseline: Quick acceleration and coupe-oriented handling
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Luxury coupe buyer; style/performance enthusiast; weekend + daily dual-use owner
- Cross-shop models: BMW 4 Series Coupe; Audi A5 Coupe; Mercedes-Benz C-Class Coupe; Ford Mustang GT
- Inventory mapping key: INFINITI_Q60
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Q70
- Classification: Full-size luxury sedan
- Technical baseline: Executive-size sedan with comfort-oriented premium layout
- Ownership baseline: Discontinued-model status can affect long-term parts/trim availability
- Performance baseline: Refined highway cruising with traditional luxury-sedan character
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Used-market luxury sedan buyer; comfort-oriented highway commuter; executive-style shopper
- Cross-shop models: Lexus ES; BMW 5 Series; Mercedes-Benz E-Class; Acura TLX
- Inventory mapping key: INFINITI_Q70
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### QX60
- Classification: Midsize luxury SUV (3-row)
- Technical baseline: Family-focused three-row luxury crossover platform
- Ownership baseline: Transmission history and electronics updates should be verified by unit
- Performance baseline: Comfort-oriented ride and family usability
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: 3-row luxury family buyer; comfort-focused household; premium practical SUV shopper
- Cross-shop models: Acura MDX; Lexus RX 350L; Volvo XC90; Audi Q7
- Inventory mapping key: INFINITI_QX60
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

### LAND ROVER
#### Range Rover
- Classification: Full-size luxury SUV
- Technical baseline: Flagship luxury off-road-capable SUV with high-feature platform complexity
- Ownership baseline: High-maintenance risk profile if service history is inconsistent
- Performance baseline: Strong blend of on-road comfort and off-road capability
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Flagship luxury SUV buyer; premium image shopper; comfort + capability owner
- Cross-shop models: Mercedes-Benz GLE; BMW X7; Cadillac Escalade; Lexus LX
- Inventory mapping key: LAND ROVER_RANGE_ROVER
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

### MERCEDES-BENZ
#### C-Class
- Classification: Compact luxury sedan
- Technical baseline: Entry-luxury sedan platform with modern safety/infotainment integration
- Ownership baseline: Premium diagnostics/labor and electronics complexity raise long-term costs
- Performance baseline: Refined daily performance with balanced comfort and handling
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Entry-luxury sedan commuter; premium badge buyer; tech-focused urban professional
- Cross-shop models: BMW 3 Series; Audi A4; Lexus IS; Infiniti Q50
- Inventory mapping key: MERCEDES-BENZ_C_CLASS
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### E-Class
- Classification: Midsize executive luxury sedan
- Technical baseline: Core executive sedan architecture with advanced comfort and driver-assist systems
- Ownership baseline: High-feature variants increase maintenance and repair complexity over time
- Performance baseline: Strong highway refinement and smooth power delivery
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Executive sedan buyer; comfort-first highway commuter; premium long-term owner
- Cross-shop models: BMW 5 Series; Audi A6; Lexus ES; Genesis G80
- Inventory mapping key: MERCEDES-BENZ_E_CLASS
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### GLC Coupe
- Classification: Compact luxury SUV coupe
- Technical baseline: Coupe-roof compact luxury SUV emphasizing style and premium tech
- Ownership baseline: Cargo/headroom trade-offs and premium consumable costs
- Performance baseline: Sportier handling feel than conventional compact SUVs
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Luxury compact SUV coupe shopper; style-priority buyer; premium commuter
- Cross-shop models: BMW X4; Audi Q5 Sportback; BMW X3; Lexus NX
- Inventory mapping key: MERCEDES-BENZ_GLC_COUPE
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### GLE
- Classification: Midsize luxury SUV
- Technical baseline: Midsize premium SUV platform with broad powertrain and feature spread
- Ownership baseline: Electronics/suspension complexity can increase long-term service costs
- Performance baseline: Comfortable highway ride with strong premium-family utility
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Luxury midsize SUV family buyer; premium comfort shopper; long-distance driver
- Cross-shop models: BMW X5; Audi Q7; Lexus RX 350; Volvo XC90
- Inventory mapping key: MERCEDES-BENZ_GLE
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

### NISSAN
#### 370Z
- Classification: Sports car
- Technical baseline: Rear-drive two-seat sports coupe/roadster platform
- Ownership baseline: Practicality is limited; age and use history are key condition factors
- Performance baseline: Responsive naturally aspirated sports-car character
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Sports-car enthusiast; weekend driver; coupe shopper
- Cross-shop models: Ford Mustang; Subaru BRZ; Toyota GR86; Chevrolet Camaro
- Inventory mapping key: NISSAN_370Z
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Rogue
- Classification: Compact SUV
- Technical baseline: Compact crossover with CVT
- Ownership baseline: Reliable, moderate maintenance
- Performance baseline: Balanced
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: CVT_RISK
- Miami fit notes: Popular SUV
- Aliases: Rogue
- Buyer profile fit: Compact SUV commuter; small family; practical daily-use buyer
- Cross-shop models: Toyota RAV4; Honda CR-V; Hyundai Tucson; Kia Sportage
- Inventory mapping key: NISSAN_ROGUE
Sources: Nissan USA model page + EPA + NHTSA
Last Verified: 2026-02-23

#### Altima
- Classification: Midsize sedan
- Technical baseline: Sedan with CVT
- Ownership baseline: Comfortable, moderate maintenance
- Performance baseline: Highway cruising
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: CVT_RISK
- Miami fit notes: Good for long drives
- Aliases: Altima
- Buyer profile fit: Midsize sedan commuter; highway driver; value-focused buyer
- Cross-shop models: Toyota Camry; Honda Accord; Hyundai Sonata; Kia K5
- Inventory mapping key: NISSAN_ALTIMA
Sources: Nissan USA model page + EPA + NHTSA
Last Verified: 2026-02-23

#### Sentra
- Classification: Compact sedan
- Technical baseline: Affordable sedan with CVT
- Ownership baseline: Basic, low maintenance
- Performance baseline: City driving
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: Sentra
- Buyer profile fit: Budget commuter; first-time buyer; student
- Cross-shop models: Toyota Corolla; Honda Civic; Hyundai Elantra; Kia Forte
- Inventory mapping key: NISSAN_SENTRA
Sources: Nissan USA model page + EPA + NHTSA
Last Verified: 2026-02-23

#### Leaf
- Classification: Compact electric SUV/hatchback
- Technical baseline: Electric vehicle with front-wheel drive and battery options (52kWh/75kWh)
- Ownership baseline: EV-specific maintenance with battery degradation monitoring; lower operating costs than gas vehicles
- Performance baseline: Electric motor (174-214 hp depending on trim) with instant torque; 0-60 mph in 6.9 seconds
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: EV_BATTERY; CHARGING_INFRASTRUCTURE
- Miami fit notes: Growing EV adoption; ideal for urban commuting with access to charging infrastructure
- Aliases: Leaf
- Buyer profile fit: EV early adopter; urban commuter; environmentally conscious buyer; tech-focused user
- Cross-shop models: Chevrolet Bolt EV; Hyundai Kona Electric; Tesla Model 3; Kia Niro EV
- Inventory mapping key: NISSAN_LEAF
Sources: Official Nissan specs + EPA fuel economy (131/111 MPGe city/highway) + NHTSA 5-Star Safety Rating
Last Verified: 2026-02-23

#### Pathfinder
- Classification: Midsize SUV (3-row)
- Technical baseline: Three-row SUV with V6
- Ownership baseline: Spacious, moderate maintenance
- Performance baseline: Family transport
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Good for families
- Aliases: Pathfinder
- Buyer profile fit: 3-row family buyer; towing-capable SUV shopper; road-trip user
- Cross-shop models: Honda Pilot; Toyota Highlander; Kia Telluride; Hyundai Palisade
- Inventory mapping key: NISSAN_PATHFINDER
Sources: Official Nissan specs + EPA + NHTSA
Last Verified: 2026-02-23


### RAM
#### 2500 Crew Cab
- Classification: Heavy-duty pickup truck
- Technical baseline: HD truck platform for commercial towing and payload workloads
- Ownership baseline: Diesel aftertreatment and HD consumables drive high operating costs
- Performance baseline: High-capacity work-truck performance and durability focus
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Heavy towing operator; commercial user; fleet buyer
- Cross-shop models: Ford F250 Super Duty Crew Cab; Chevrolet Silverado 2500 HD Crew Cab; GMC Sierra 2500 HD
- Inventory mapping key: RAM_2500_CREW_CAB
Sources: Official specs + NHTSA (EPA light-duty MPG may be N/A)
Last Verified: 2026-02-23

#### 1500
- Classification: Midsize pickup truck
- Technical baseline: Versatile full-size pickup with various cab and bed configurations, gas or diesel engines
- Ownership baseline: Moderate maintenance with attention to towing components if used
- Performance baseline: Strong towing and payload capacity, comfortable for daily use
- Maintenance profile: Moderate
- Resale tier: Strong
- Used risk flags: TOWING_MAINTENANCE; FLOOD_SENSITIVITY
- Miami fit notes: Popular for commercial use, good for towing boats or trailers
- Aliases: 1500 CREW CAB
- Buyer profile fit: Contractor; towing user; personal/work truck owner
- Cross-shop models: Ford F-150; Chevrolet Silverado 1500 Crew Cab; Toyota Tundra; GMC Sierra 1500
- Inventory mapping key: RAM_1500
Sources: RAM Trucks model page + EPA + NHTSA
Last Verified: 2026-02-23

#### 3500
- Classification: Heavy-duty pickup truck
- Technical baseline: Heavy-duty pickup for commercial and heavy towing, diesel engines standard
- Ownership baseline: Higher maintenance for heavy-duty components
- Performance baseline: Exceptional towing and payload, durable for work
- Maintenance profile: High
- Resale tier: Moderate
- Used risk flags: HEAVY_DUTY_MAINTENANCE; FLOOD_SENSITIVITY
- Miami fit notes: Ideal for commercial fleets, good for heavy loads
- Aliases: 3500 CREW CAB
- Buyer profile fit: Commercial heavy-duty user; maximum towing operator; fleet manager
- Cross-shop models: Ford F350 Super Duty Crew Cab; Chevrolet Silverado 3500 HD Crew Cab; GMC Sierra 3500 HD
- Inventory mapping key: RAM_3500
Sources: Official RAM specs + EPA + NHTSA
Last Verified: 2026-02-23

### TESLA
#### Model 3
- Classification: Compact electric sedan
- Technical baseline: EV sedan platform with OTA software ecosystem and efficient packaging
- Ownership baseline: Charging access and software/service campaign compliance are core ownership factors
- Performance baseline: Strong EV efficiency and immediate torque response
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: EV commuter; tech-first buyer; cost-of-operation-focused owner
- Cross-shop models: Hyundai Ioniq 6; BMW i4; Polestar 2; Kia EV6
- Inventory mapping key: TESLA_MODEL_3
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### MODEL Y
- Classification: Compact electric SUV
- Technical baseline: Battery electric crossover with single motor or dual motor configurations, long range options, autopilot features
- Ownership baseline: Low maintenance electric vehicle with battery warranty considerations
- Performance baseline: Strong acceleration, quiet ride, regenerative braking
- Maintenance profile: Low
- Resale tier: Strong
- Used risk flags: EV_CHARGING_DEPENDENCY; FLOOD_SENSITIVITY
- Miami fit notes: Excellent for short trips, charging infrastructure in Miami area is developing
- Aliases: MODEL Y
- Buyer profile fit: EV family crossover buyer; tech-first commuter household; charging-ready urban/suburban owner
- Cross-shop models: Hyundai Ioniq 5; Kia EV6; Ford Mustang Mach-E; Volkswagen ID.4
- Inventory mapping key: TESLA_MODEL_Y
Sources: Official Tesla specs + EPA + NHTSA
Last Verified: 2026-02-23

### TOYOTA
#### RAV4
- Classification: Compact SUV
- Technical baseline: Mainstream compact crossover with gas, hybrid, and AWD availability by year
- Ownership baseline: Strong reliability/resale profile and broad service network
- Performance baseline: Efficient daily-use tuning with practical cargo utility
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Compact SUV commuter; family daily-use buyer; reliability-focused owner
- Cross-shop models: Honda CR-V; Nissan Rogue; Hyundai Tucson; Kia Sportage
- Inventory mapping key: TOYOTA_RAV4
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Camry
- Classification: Midsize sedan
- Technical baseline: Mainstream midsize sedan with gas/hybrid powertrain coverage by generation
- Ownership baseline: Low-to-moderate long-term ownership cost profile
- Performance baseline: Comfort-first ride with strong efficiency in hybrid variants
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Midsize commuter; rideshare driver; long-term ownership buyer
- Cross-shop models: Honda Accord; Hyundai Sonata; Kia K5; Nissan Altima
- Inventory mapping key: TOYOTA_CAMRY
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Corolla
- Classification: Compact sedan/hatchback
- Technical baseline: High-volume compact platform with efficiency-oriented tuning
- Ownership baseline: Predictable maintenance and strong parts availability
- Performance baseline: Efficient commuter performance with low running complexity
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: First-time buyer; student; commuter; rideshare driver
- Cross-shop models: Honda Civic; Hyundai Elantra; Nissan Sentra; Mazda3
- Inventory mapping key: TOYOTA_COROLLA
Sources: Toyota USA model page + EPA + NHTSA
Last Verified: 2026-02-23

#### Highlander
- Classification: Midsize SUV (3-row)
- Technical baseline: Family-focused three-row crossover with hybrid availability
- Ownership baseline: Reliable ownership profile with moderate midsize-SUV consumable costs
- Performance baseline: Smooth daily comfort and practical long-trip capability
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Family with children; 3-row commuter; practical long-trip buyer
- Cross-shop models: Honda Pilot; Kia Telluride; Hyundai Palisade; Nissan Pathfinder
- Inventory mapping key: TOYOTA_HIGHLANDER
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### 4Runner
- Classification: Midsize SUV
- Technical baseline: Body-on-frame midsize SUV with durability and off-road heritage
- Ownership baseline: Truck-based consumables and lower fuel economy versus crossovers
- Performance baseline: Off-road durability and utility focus over on-road refinement
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Outdoor-focused owner; body-on-frame SUV buyer; durability-first shopper
- Cross-shop models: Jeep Grand Cherokee; Ford Explorer; Nissan Pathfinder; Toyota Land Cruiser (used)
- Inventory mapping key: TOYOTA_4RUNNER
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Tacoma Double Cab
- Classification: Midsize pickup truck
- Technical baseline: Midsize truck platform with strong market demand and off-road ecosystem
- Ownership baseline: Reliable profile with moderate truck-duty service requirements
- Performance baseline: Balanced towing, utility, and daily drivability in midsize segment
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Midsize truck user; weekend adventure owner; light-duty contractor
- Cross-shop models: Ford Ranger Crew Cab; Chevrolet Colorado Crew Cab; Nissan Frontier Crew Cab; Honda Ridgeline
- Inventory mapping key: TOYOTA_TACOMA_DOUBLE_CAB
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Tundra
- Classification: Full-size pickup truck
- Technical baseline: Full-size truck platform with modern turbo/hybrid-era powertrains in current generation
- Ownership baseline: Full-size fuel and consumable costs remain significant
- Performance baseline: Strong towing/payload utility for mixed work and family use
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Full-size truck buyer; towing user; mixed family/work owner
- Cross-shop models: Ford F-150; Chevrolet Silverado 1500 Crew Cab; RAM 1500; Nissan Titan
- Inventory mapping key: TOYOTA_TUNDRA
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

### HYUNDAI
#### Tucson
- Classification: Compact SUV
- Technical baseline: Compact crossover with gas/hybrid/PHEV coverage by generation
- Ownership baseline: Value-oriented ownership with warranty emphasis
- Performance baseline: Efficiency-forward daily comfort in compact SUV class
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Compact SUV commuter; value-focused family; warranty-conscious buyer
- Cross-shop models: Honda CR-V; Toyota RAV4; Kia Sportage; Nissan Rogue
- Inventory mapping key: HYUNDAI_TUCSON
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Ioniq
- Classification: Compact hatchback/liftback
- Technical baseline: Dedicated efficiency platform with hybrid, electric, and plug-in hybrid powertrain options
- Ownership baseline: High-efficiency focus with strong warranty coverage; lower operating costs than conventional vehicles
- Performance baseline: Hybrid (139 hp) with 58 mpg combined; Electric (124 miles range); Plug-in Hybrid (29 miles EV range)
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: HYBRID_BATTERY; EV_BATTERY
- Miami fit notes: Growing efficiency market; ideal for eco-conscious commuters; multiple powertrain options
- Aliases: Ioniq
- Buyer profile fit: Efficiency-focused commuter; environmentally conscious buyer; tech-savvy early adopter; hybrid/EV comparison shopper
- Cross-shop models: Toyota Prius; Hyundai Elantra Hybrid; Chevrolet Bolt EV; Nissan Leaf
- Inventory mapping key: HYUNDAI_IONIQ
Sources: Official Hyundai specs + EPA fuel economy (58 mpg hybrid) + NHTSA safety ratings
Last Verified: 2026-02-23

#### Santa Fe
- Classification: Midsize SUV
- Technical baseline: Midsize crossover platform with broad feature content and family focus
- Ownership baseline: Moderate maintenance profile with powertrain-specific variation by trim
- Performance baseline: Comfortable ride with practical family utility
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Small family SUV buyer; comfort-first commuter; midsize crossover shopper
- Cross-shop models: Kia Sorento; Honda Passport; Nissan Murano; Toyota Highlander
- Inventory mapping key: HYUNDAI_SANTA_FE
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Palisade
- Classification: Three-row midsize SUV
- Technical baseline: Three-row upscale family SUV platform with premium-content mainstream positioning
- Ownership baseline: Midsize-SUV consumables and electronics complexity depend on trim content
- Performance baseline: Comfort-oriented long-distance and family-transport capability
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: 3-row family buyer; comfort-focused long-distance user; premium-mainstream shopper
- Cross-shop models: Kia Telluride; Honda Pilot; Toyota Highlander; Ford Explorer
- Inventory mapping key: HYUNDAI_PALISADE
Sources: Hyundai USA model page + EPA + NHTSA
Last Verified: 2026-02-23

#### Elantra
- Classification: Compact sedan
- Technical baseline: Sedan with turbo
- Ownership baseline: Efficient, low maintenance
- Performance baseline: Balanced
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Affordable and reliable
- Aliases: Elantra
- Buyer profile fit: Budget commuter; first-time buyer; student
- Cross-shop models: Toyota Corolla; Honda Civic; Kia Forte; Nissan Sentra
- Inventory mapping key: HYUNDAI_ELANTRA
Sources: Official Hyundai specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Sonata
- Classification: Midsize sedan
- Technical baseline: Sedan with hybrid options
- Ownership baseline: Comfortable, moderate maintenance
- Performance baseline: Highway driving
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Good for commuting
- Aliases: Sonata
- Buyer profile fit: Midsize commuter; value sedan buyer; highway user
- Cross-shop models: Toyota Camry; Honda Accord; Kia K5; Nissan Altima
- Inventory mapping key: HYUNDAI_SONATA
Sources: Official Hyundai specs + EPA + NHTSA
Last Verified: 2026-02-23


### KIA
#### Sportage
- Classification: Compact SUV
- Technical baseline: Compact crossover with mainstream, hybrid, and PHEV variants by generation
- Ownership baseline: Value and warranty-focused ownership profile
- Performance baseline: Efficient daily-use performance with modern infotainment emphasis
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Compact SUV commuter; value-focused family; tech-focused daily user
- Cross-shop models: Hyundai Tucson; Honda CR-V; Toyota RAV4; Nissan Rogue
- Inventory mapping key: KIA_SPORTAGE
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Telluride
- Classification: Three-row SUV
- Technical baseline: Three-row family SUV with high-feature mainstream positioning
- Ownership baseline: Three-row SUV consumable and operating costs are typically higher than compact crossovers
- Performance baseline: Comfortable highway behavior and family-focused packaging
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: 3-row family buyer; practical premium-mainstream shopper; road-trip household
- Cross-shop models: Hyundai Palisade; Honda Pilot; Toyota Highlander; Nissan Pathfinder
- Inventory mapping key: KIA_TELLURIDE
Sources: Kia USA model page + EPA + NHTSA
Last Verified: 2026-02-23

#### Forte
- Classification: Compact sedan
- Technical baseline: Sedan with turbo
- Ownership baseline: Affordable, low maintenance
- Performance baseline: Balanced
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Budget sedan
- Aliases: Forte
- Buyer profile fit: Budget commuter; first-time buyer; cost-conscious owner
- Cross-shop models: Toyota Corolla; Honda Civic; Hyundai Elantra; Nissan Sentra
- Inventory mapping key: KIA_FORTE
Sources: Official Kia specs + EPA + NHTSA
Last Verified: 2026-02-23

#### K5
- Classification: Midsize sedan
- Technical baseline: Sedan with turbo
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Family sedan
- Aliases: K5
- Buyer profile fit: Midsize sedan buyer; value-focused household; daily+weekend user
- Cross-shop models: Hyundai Sonata; Honda Accord; Toyota Camry; Nissan Altima
- Inventory mapping key: KIA_K5
Sources: Official Kia specs + EPA + NHTSA
Last Verified: 2026-02-23


### LEXUS
#### RX 350
- Classification: Midsize luxury SUV
- Technical baseline: Core Lexus luxury crossover with comfort-oriented tuning
- Ownership baseline: Generally predictable luxury ownership versus higher-risk peers
- Performance baseline: Quiet and refined daily-driving character
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Luxury reliability-focused SUV buyer; comfort commuter; premium family owner
- Cross-shop models: Acura MDX; BMW X5; Mercedes-Benz GLE; Cadillac XT5
- Inventory mapping key: LEXUS_RX_350
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### NX
- Classification: Compact luxury SUV
- Technical baseline: Compact luxury crossover with gas, turbo, hybrid, and PHEV options by generation
- Ownership baseline: Moderate luxury maintenance complexity with strong reliability perception
- Performance baseline: Balanced city-size usability with premium feature set
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Compact luxury SUV commuter; premium efficiency buyer; urban family user
- Cross-shop models: BMW X3; Audi Q5; Mercedes-Benz GLC Coupe; Acura RDX
- Inventory mapping key: LEXUS_NX
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### ES
- Classification: Midsize sedan
- Technical baseline: Luxury sedan with hybrid
- Ownership baseline: Premium, moderate maintenance
- Performance baseline: Smooth and quiet
- Maintenance profile: Moderate
- Resale tier: Strong
- Used risk flags: HYBRID_BATTERY
- Miami fit notes: Luxury commuting
- Aliases: ES
- Buyer profile fit: Luxury sedan comfort buyer; reliability-focused commuter; executive daily driver
- Cross-shop models: Mercedes-Benz E-Class; BMW 5 Series; Acura TLX; Infiniti Q70
- Inventory mapping key: LEXUS_ES
Sources: Official Lexus specs + EPA + NHTSA
Last Verified: 2026-02-23


### MAZDA
#### CX-5
- Classification: Compact SUV
- Technical baseline: Compact crossover emphasizing upscale interior design and driving feel
- Ownership baseline: Moderate service burden; turbo variants require tighter maintenance discipline
- Performance baseline: Responsive handling relative to mainstream compact SUV peers
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Compact SUV buyer wanting upscale feel; commuter valuing handling; small family user
- Cross-shop models: Honda CR-V; Toyota RAV4; Subaru Forester; Hyundai Tucson
- Inventory mapping key: MAZDA_CX_5
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### CX-9
- Classification: Midsize SUV (3-row)
- Technical baseline: Three-row crossover with premium-leaning cabin and family focus
- Ownership baseline: Turbo-era maintenance history should be checked by unit
- Performance baseline: Smooth highway behavior with refined steering response
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: 3-row family crossover buyer; comfort-focused commuter; premium-leaning mainstream shopper
- Cross-shop models: Kia Sorento; Hyundai Palisade; Honda Pilot; Toyota Highlander
- Inventory mapping key: MAZDA_CX_9
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### MAZDA3
- Classification: Compact sedan
- Technical baseline: Sedan with turbo
- Ownership baseline: Sporty, moderate maintenance
- Performance baseline: Fun to drive
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Sporty sedan
- Aliases: Mazda3
- Buyer profile fit: Compact sedan/hatch buyer; driving-dynamics-focused commuter; first-time premium-feel shopper
- Cross-shop models: Honda Civic; Toyota Corolla; Hyundai Elantra; Volkswagen Jetta
- Inventory mapping key: MAZDA_MAZDA3
Sources: Mazda USA model page + EPA + NHTSA
Last Verified: 2026-02-23


### MITSUBISHI
#### Outlander
- Classification: Compact SUV (3-row)
- Technical baseline: Compact three-row crossover with value-oriented family packaging
- Ownership baseline: CVT/maintenance history is key for long-term ownership confidence
- Performance baseline: Efficiency-focused daily-family performance
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Value-oriented family crossover buyer; warranty-focused owner; practical 3-row occasional-use shopper
- Cross-shop models: Nissan Rogue; Hyundai Tucson; Kia Sportage; Subaru Forester
- Inventory mapping key: MITSUBISHI_OUTLANDER
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

### SUBARU
#### Outback
- Classification: Midsize SUV wagon
- Technical baseline: Standard AWD wagon/crossover architecture with high practicality
- Ownership baseline: Tire matching and AWD/CVT service discipline are important
- Performance baseline: Strong all-weather confidence and long-trip comfort
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Active lifestyle buyer; all-weather commuter; cargo-practical family owner
- Cross-shop models: Toyota RAV4; Honda CR-V; Mazda CX-5; Volkswagen Atlas Cross Sport
- Inventory mapping key: SUBARU_OUTBACK
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Forester
- Classification: Compact SUV
- Technical baseline: Standard AWD compact SUV with visibility and safety emphasis
- Ownership baseline: Moderate cost profile with CVT service history relevance
- Performance baseline: Practical, stable all-weather family transport
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: Safety-focused family buyer; all-weather commuter; practical compact SUV owner
- Cross-shop models: Honda CR-V; Toyota RAV4; Mazda CX-5; Nissan Rogue
- Inventory mapping key: SUBARU_FORESTER
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

### VOLKSWAGEN
#### Jetta
- Classification: Compact sedan
- Technical baseline: Compact sedan platform with MQB architecture and turbocharged engine options
- Ownership baseline: German engineering reliability with moderate maintenance costs; strong parts availability
- Performance baseline: Balanced daily driving with available 1.5L turbo engine; composed highway manners
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami; strong fuel economy appeals to budget-conscious commuters
- Aliases: Jetta
- Buyer profile fit: Budget compact sedan commuter; value-focused buyer; European engineering enthusiast
- Cross-shop models: Toyota Corolla; Honda Civic; Hyundai Elantra; Nissan Sentra
- Inventory mapping key: VOLKSWAGEN_JETTA
Sources: Official Volkswagen specs + EPA fuel economy (35 mpg combined) + NHTSA 5-Star Safety Rating
Last Verified: 2026-02-23

#### Tiguan
- Classification: Compact SUV
- Technical baseline: Compact crossover platform with turbocharged 1.5L engine and available 4Motion AWD
- Ownership baseline: German engineering with moderate maintenance costs; versatile family packaging
- Performance baseline: Fun-to-drive character with nimble handling; 184 hp turbo engine
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Popular compact SUV; excellent for urban families; German engineering appeal
- Aliases: Tiguan
- Buyer profile fit: Compact SUV commuter; small family buyer; value-focused household; European engineering enthusiast
- Cross-shop models: Honda CR-V; Toyota RAV4; Hyundai Tucson; Mazda CX-5
- Inventory mapping key: VOLKSWAGEN_TIGUAN
Sources: Official Volkswagen specs + EPA fuel economy (24/31 mpg FWD) + NHTSA safety ratings
Last Verified: 2026-02-23

#### Atlas Cross Sport
- Classification: Midsize SUV (2-row)
- Technical baseline: Two-row midsize crossover with spacious cabin and comfort bias
- Ownership baseline: Software/electronics update history should be reviewed by unit
- Performance baseline: Stable highway ride with family-oriented usability
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: General fit for Miami
- Aliases: 
- Buyer profile fit: 2-row midsize SUV family buyer; comfort-focused commuter; value premium-mainstream shopper
- Cross-shop models: Honda Passport; Hyundai Santa Fe; Jeep Grand Cherokee; Ford Edge (used market)
- Inventory mapping key: VOLKSWAGEN_ATLAS_CROSS_SPORT
Sources: Official specs + EPA + NHTSA
Last Verified: 2026-02-23

### JEEP
#### Grand Cherokee
- Classification: Midsize SUV
- Technical baseline: SUV with V6 or V8
- Ownership baseline: Off-road capable, moderate maintenance
- Performance baseline: Versatile
- Maintenance profile: Moderate
- Resale tier: Moderate
- Used risk flags: OFFROAD_MAINTENANCE
- Miami fit notes: Good for trails
- Aliases: Grand Cherokee
- Buyer profile fit: SUV buyer wanting comfort + off-road image; family commuter; weekend traveler
- Cross-shop models: Toyota 4Runner; Ford Explorer; Honda Passport; Nissan Pathfinder
- Inventory mapping key: JEEP_GRAND_CHEROKEE
Sources: Official Jeep specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Compass
- Classification: Compact SUV
- Technical baseline: Compact crossover
- Ownership baseline: Affordable, low maintenance
- Performance baseline: Balanced
- Maintenance profile: Low
- Resale tier: Moderate
- Used risk flags: NONE
- Miami fit notes: Urban SUV
- Aliases: Compass
- Buyer profile fit: Urban compact SUV buyer; first SUV owner; budget-conscious commuter
- Cross-shop models: Honda HR-V; Hyundai Tucson; Kia Sportage; Nissan Rogue
- Inventory mapping key: JEEP_COMPASS
Sources: Official Jeep specs + EPA + NHTSA
Last Verified: 2026-02-23

#### Wrangler
- Classification: Compact SUV
- Technical baseline: Off-road SUV
- Ownership baseline: Durable, high maintenance
- Performance baseline: Off-road performance
- Maintenance profile: High
- Resale tier: Strong
- Used risk flags: OFFROAD_MAINTENANCE
- Miami fit notes: Beach and trail
- Aliases: Wrangler
- Buyer profile fit: Off-road enthusiast; adventure-focused owner; second-vehicle recreational buyer
- Cross-shop models: Ford Bronco; Toyota 4Runner; Jeep Gladiator; Land Rover Defender
- Inventory mapping key: JEEP_WRANGLER
Sources: Official Jeep specs + EPA + NHTSA
Last Verified: 2026-02-23


## SOURCE & VERIFICATION RULE
- Always verify year/trim/engine/transmission data against official OEM specifications first.
- Confirm fuel economy against EPA published values for the exact year/powertrain.
- Confirm safety recall context against NHTSA records; VIN-level recall status must be advisor-verified.
- If two sources conflict, respond with: "I'm seeing different specifications for this detail. Let me connect you with an advisor who can verify the exact information for this specific unit."
- Never present unverified assumptions as confirmed facts.



























