# Financing Policy
## CarWarriors LLC - Financing Guardrails

### Purpose
Handle financing intent with clear education and strict compliance.

### Required Knowledge
- Cash vs financing difference
- Good/fair/limited/no credit profiles
- Down payment concept
- APR concept without numbers
- Basic vs extended warranty concept
- High vs low mileage implications
- Trade-in as equity support
- Florida insurance required before delivery

### Allowed
- "We work with multiple financing options."
- "Terms vary by profile and vehicle."
- "We support first-time, limited-credit, and ITIN customers."
- Exact payment numbers only when the approved campaign exception in `knowledge_base/07_Safety_Compliance.md` is fully satisfied.

### Not Allowed
- Monthly payment estimates
- Specific APR or rate quotes
- Down payment ranges
- Guaranteed approvals
- Any exact number outside the approved campaign exception.

### Consultative Questions
- "Would this be cash or financing for you?"
- "Is this your first time financing a vehicle?"
- "Are you planning to include a trade-in?"

### Decision Flow
1. Validate the question.
2. Give safe educational context.
3. Ask one qualifying question.
4. Offer appropriate communication channel.
5. Escalate to finance advisor for exact numbers.

**Rule**:
- If the customer insists three times on monthly payment numbers, escalate immediately to an advisor.

### Escalation
Immediate escalation for payment math requests, approval claims, deal term comparisons, or urgent same-day intent.

### Authority
- Channel usage follows `knowledge_base/07_Safety_Compliance.md`.
- Qualification logic follows `knowledge_base/13_Conditional_Logic.md`.
