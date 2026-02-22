# KB Fact Audit Rerun - 2026-02-22

## Scope
- Rerun requested from Batch 1, re-validating already incorporated data.
- File checked: `knowledge_base/18_Vehicle_Knowledge_System.md`
- Method: contrast current KB entries vs primary-source evidence captured in local snapshots.

## Batch 1 Rerun

### HYUNDAI - Palisade
- KB current:
- Classification: `Three-row midsize SUV`
- Sources: `Hyundai USA model page + EPA + NHTSA`
- Last Verified: `2026-02-22`
- Evidence:
- Source title confirms: `2026 Palisade | Three-Row Midsize SUV | Hyundai USA`
- Status: `VERIFIED`

### KIA - Telluride
- KB current:
- Classification: `Three-row SUV`
- Sources: `Kia USA model page + EPA + NHTSA`
- Last Verified: `2026-02-22`
- Evidence:
- Source title includes `SUV` and metadata includes `3-row SUV` and seating for up to 8.
- Status: `VERIFIED`

## Batch 2 Rerun

### NISSAN - Rogue
- KB current:
- Classification: `Compact SUV`
- Sources: `Nissan USA model page + EPA + NHTSA`
- Last Verified: `2026-02-22`
- Evidence:
- Source title: `Nissan Rogue Compact Crossover SUV`
- Status: `VERIFIED`

### NISSAN - Altima
- KB current:
- Classification: `Midsize sedan`
- Sources: `Nissan USA model page + EPA + NHTSA`
- Last Verified: `2026-02-22`
- Evidence:
- Source title: `Nissan Altima Mid-Size AWD Sedan`
- Status: `VERIFIED`

### TOYOTA - Corolla
- KB current:
- Classification: `Compact sedan/hatchback`
- Sources: `Toyota USA model page + EPA + NHTSA`
- Last Verified: `2026-02-22`
- Evidence:
- Source description states `compact sedan`.
- Status: `VERIFIED` (classification remains compatible with compact sedan line context)

## Batch 3 Rerun

### RAM - 1500
- KB current:
- Classification: `Midsize pickup truck`
- Sources: `RAM Trucks model page + EPA + NHTSA`
- Last Verified: `2026-02-22`
- Evidence:
- Source title/description identify `Ram 1500` truck model.
- Status: `PARTIALLY VERIFIED`
- Note: available capture confirms truck identity, but does not explicitly state size class in clear text.

### MAZDA - MAZDA3
- KB current:
- Classification: `Compact sedan`
- Sources: `Mazda USA model page + EPA + NHTSA`
- Last Verified: `2026-02-22`
- Evidence:
- Source title: `2026 Mazda 3 Sedan – Premium AWD Compact Car`.
- Status: `VERIFIED`

## Structural Integrity Check (Post-Rerun)
- Brand headers (`###`): `25`
- Model headers (`####`): `85`
- Invalid headers (`#####`): `0`
- Literal `\\n` lines: `0`
- Database marker count: `1`
- Source rule marker count: `1`

## Pending for Next Batch
- Re-verify blocked OEM targets with alternate official endpoints:
- Toyota RAV4
- Honda CR-V
- Ford Escape
- Tesla Model Y
