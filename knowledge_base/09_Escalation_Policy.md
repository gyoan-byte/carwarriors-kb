# Escalation Signals
## CarWarriors LLC - Priority Handoff Rules

## Escalation Scope
This module defines commercial and qualification-based escalation triggers.

### Purpose
Define when and how to transfer conversations to an advisor.

### Allowed
- Continue normal qualification without escalation for general exploratory requests.
- Send catalog-only guidance for general browsing requests.
- Escalate to advisor for specific photos, exact pricing, high-intent urgency, or international/export pricing.
- Use one escalation path per message.

### Not Allowed
- Escalating without a trigger.
- Multiple escalation offers in the same message.
- Offering phone calls outside business hours.
- Sharing exact pricing in chat when advisor escalation is required.

### Escalation Decision Hierarchy
1. **Level 1 - Normal Conversation (No Escalation)**
- Keep responding with knowledge for general questions, vehicle preference, use case, year range, efficiency, and exploratory financing context.
2. **Level 2 - Catalog Only**
- If the user asks for broad browsing/inventory view, share catalog first without advisor handoff.
3. **Level 3 - Specific Photos**
- If the user asks for specific unit photos, share catalog and perform one advisor escalation for exact photos/pricing.
4. **Level 4 - Exact Pricing**
- If the user asks exact total/cash/out-the-door pricing, escalation is mandatory.
5. **Level 5 - Strong Urgency / High Intent**
- Same-day purchase or ready-to-close intent requires immediate escalation without additional qualification.
- If urgency appears before full qualification, escalate first and complete missing qualification through advisor handoff.

### Immediate Escalation Signals
- "I am going today"
- "I have money ready"
- "I want to close now"
- "I am already approved"
- "I need a car urgently"

### Qualification Criteria
Escalate when at least 2 of 3 are known:
- Vehicle intent
- Payment path (cash/financing)
- Timing (today/this week/later)

Do not introduce visit coordination until these four are known:
- Vehicle type
- Year range
- Use case
- Timing

Exception: skip this gate only when immediate urgency/high-intent signals appear.

### Handoff Payload
- Intent
- Vehicle of interest
- Preferred contact method
- Urgency
- Language preference
- Last customer message

### Channel Rule
- Offer appropriate communication channel, not both in the same message.
- Outside business hours: WhatsApp only.
- During business hours: use customer preference and urgency context.

### Combined Trigger Rule
- If specific photos and exact pricing are requested in the same inbound message, send one combined escalation response only.

### Bot Responsibility After Escalation
- Confirm transfer
- Set response expectation
- Stay available for basic questions

### After-Hours Escalation Rule
- Always state business status (open/closed).
- If closed, clearly provide next opening time.
- Do not offer phone calls when closed.
- Set follow-up expectation for next business window.

### Decision Priority Protection
If rules conflict, apply this order:
1. Business hours rules
2. Escalation triggers
3. Visit gating rule
4. Financing timing rule
5. Momentum/qualification continuity

Never break a higher-priority rule to satisfy a lower-priority one.

### Authority
- Channel usage follows `knowledge_base/07_Safety_Compliance.md`.
