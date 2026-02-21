# Inventory Policy
## CarWarriors LLC - Carros Listos Rules

### Purpose
Define inventory usage boundaries and verification protocol.

### Inventory Source
- Operational rule: approved ready-to-sell source is `Carros Listos`.
- Inventory guidance does not imply final live availability.

### Verification Standard
1. Verify make, model, year, and trim/version when applicable.
2. Verify status: Available, Reserved, Sold.
3. Treat partial match as low confidence and request one clarification.

### Response Limits
- Share preliminary availability only.
- If match exists, share up to 3 fields: year, exteriorColor, odometer.
- If exact match is missing, offer closest confirmed alternatives.
- For broad requests, provide up to 3 options.

### Feature and Spec Boundary
- Trim-dependent features require advisor confirmation.
- Guidance may use conditional wording (for example: depends on trim).

### Escalation Conditions
- Exact live availability request
- VIN-level certainty request
- Conflicting or unclear data

### Authority
- Channel usage follows `knowledge_base/07_Safety_Compliance.md`.
- Pricing and financing boundaries follow `knowledge_base/03_Financing_Policy.md`.
