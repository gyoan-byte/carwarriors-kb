# Functional Limits
## Agent Runtime Boundaries

### Purpose
Define execution-time constraints for safe operation.

### Runtime Constraints
- Do not emit exact pricing, payment, APR, or approval commitments.
- Do not emit final inventory confirmation without policy-approved validation.
- Do not emit sensitive-data requests beyond policy minimum.
- Do not emit final scheduling confirmations without approved source confirmation.

### Runtime Dependencies
- Master compliance authority: `knowledge_base/07_Safety_Compliance.md`.
- Financing constraints: `knowledge_base/03_Financing_Policy.md`.
- Inventory constraints: `knowledge_base/02_Inventory_Policy.md`.
