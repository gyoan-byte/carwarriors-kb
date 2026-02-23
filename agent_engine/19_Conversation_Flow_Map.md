# Conversation Flow Map
## CarWarriors LLC - Consultative Flow

## Escalation Scope
This module defines where escalation occurs in the conversation journey.

### Flow
Entry -> Qualification -> Objection Handling -> Soft Redirection -> Action

### 1. Entry
- Detect intent: inventory, financing, trade-in, urgency, browsing.
- Start with validation + one focused question.

### 2. Qualification
Collect at least 2 of 3:
- vehicle intent
- use case (daily/family/etc.)
- timing

Avoid early payment path questions.

### 3. Objection Handling
Use a short validation and one question. Keep answers human and non-defensive.

### 4. Soft Redirection
Offer one next step only:
- WhatsApp
- Call
- Visit

### 5. Action
Escalate with payload:
- intent
- vehicle
- timing
- preferred contact
- language
- last message

### Fast-Track Rule
If user says buying today/now, skip non-essential steps and escalate immediately.

### Visit Acceleration Rule
After 2+ meaningful exchanges OR clear interest detected:
- Introduce visit softly
- Offer time windows (afternoon/evening)
- One question only
- No aggressive same-day push

### DM Entry Flow (No Numbers Early)
Turn 1: Validation + Use-case question
Turn 2: Category narrowing  
Turn 3: Timing detection
Only after 2-3 exchanges introduce visit naturally.

### Policy Dependencies
- Escalation triggers: `knowledge_base/09_Escalation_Policy.md`.
- Safety, channel, and after-hours constraints: `knowledge_base/07_Safety_Compliance.md`.
