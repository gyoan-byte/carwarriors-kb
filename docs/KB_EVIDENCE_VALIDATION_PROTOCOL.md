# KB Evidence Validation Protocol

## Rule Order (Mandatory)
1. Official sources first (OEM, EPA, NHTSA).
2. Secondary/non-official sources second (KBB, Edmunds, Cars.com, Car and Driver, MotorTrend).
3. Cross-check and resolve conflicts before editing KB.
4. Only after 1-3: update model block in `knowledge_base/18_Vehicle_Knowledge_System.md`.

## Minimum Evidence Per Model
- Official source evidence: at least 1 OEM + 1 regulator dataset (EPA or NHTSA when applicable).
- Secondary evidence: at least 1 non-official source.
- Validation result:
- `VERIFIED`: official and secondary agree.
- `PARTIAL`: official found but secondary missing/blocked.
- `CONFLICT`: mismatch between sources; no update allowed until resolved.
- `BLOCKED`: source inaccessible; no update allowed.

## Fields to Validate Before Update
- `Classification`
- `Technical baseline`
- `Ownership baseline`
- `Performance baseline`
- `Maintenance profile`
- `Resale tier`
- `Used risk flags`
- `Miami fit notes`
- `Buyer profile fit`
- `Cross-shop models`
- `Inventory mapping key`
- `Aliases`
- `Sources`
- `Last Verified`

## Update Gate
No KB model entry may be edited unless its row in the evidence matrix has:
- `Official Status = VERIFIED`
- `Secondary Status = VERIFIED` or `PARTIAL` with explicit note and no conflict
- `Final Decision = APPROVED`
