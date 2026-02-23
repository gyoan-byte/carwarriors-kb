# KB Model-by-Model Update Plan

## Objective
Standardize every model entry in `knowledge_base/18_Vehicle_Knowledge_System.md` with the expanded field set and verified sources, without breaking worker parsing.

## Standard Field Template (Per Model)
- `- Classification:`
- `- Technical baseline:`
- `- Ownership baseline:`
- `- Performance baseline:`
- `- Maintenance profile:`
- `- Resale tier:`
- `- Used risk flags:`
- `- Miami fit notes:`
- `- Buyer profile fit:` (new, optional but recommended)
- `- Cross-shop models:` (new, optional but recommended)
- `- Inventory mapping key:` (new, optional but recommended)
- `- Aliases:`
- `Sources:`
- `Last Verified:`

## Governance Rules (Must Keep)
- Keep headers as:
- `### MAKE`
- `#### Model`
- No `#####` model headers.
- No literal `\\n` in lines.
- Do not add financing approval promises or negotiation commitments.

## Batch Sequence
1. Batch A (Top volume mainstream):
- TOYOTA, HONDA, NISSAN, FORD, HYUNDAI, KIA
2. Batch B (Trucks and utility):
- RAM, CHEVROLET trucks/SUVs, GMC-style equivalents if present, JEEP
3. Batch C (Luxury high-variance):
- BMW, AUDI, MERCEDES-BENZ, LEXUS, INFINITI, LAND ROVER, CADILLAC
4. Batch D (Niche/legacy):
- HUMMER, classic entries, low-volume variants

## Per-Model Workflow
1. Pull current model block from KB.
2. Verify core segment and model identity in OEM page.
3. Verify fuel economy context from EPA where applicable.
4. Verify safety/complaint context references from NHTSA.
5. Update fields using neutral language and no guarantees.
6. Set `Sources` with concrete source family.
7. Set `Last Verified` to audit date.

## Definition of Done (Per Batch)
- All models in batch contain the full standard field template.
- Structural checks pass:
- no duplicate `MAKE::MODEL`
- all required labels present
- parser markers intact (`## VEHICLE KNOWLEDGE DATABASE`, `## SOURCE & VERIFICATION RULE`)
- Worker syntax and parse checks pass after updates.
- Batch report created in `docs/KB_FACT_AUDIT_<date>_BATCHX.md`.

## Tracking Table
- `PENDING`: not yet reviewed
- `VERIFIED`: reviewed and aligned with sources
- `PARTIAL`: source blocked or incomplete evidence
- `UPDATED`: content changed and validated
