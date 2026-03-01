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

Payment path (cash or financing) only after vehicle intent and timing are clarified.
Never ask about financing in first two turns.

### 2.1 Emotional Trigger Detection
If strong emotional intent detected ("I love it", "I really want this one"):
- Ask one confirmation question about timing
- If timing is near-term, introduce visit immediately
- Skip to visit acceleration rule

### 2.2 Low-Intent Lead Handling
If engagement drops (short replies, hesitation, vague answers):
- Ask one soft anchoring question focused on timing or use-case
- Do not escalate immediately
- Examples: "👍", "Ok", "Maybe", "I'll think about it"

### 2.3 Context Memory Guard
If customer changes vehicle category mid-conversation:
- Acknowledge change
- Re-anchor vehicle intent before introducing payment path or visit

### 2.4 Language Adaptation
- Always reply in customer's latest language.
- If customer switches language mid-conversation, adapt immediately.

### 2.5 Location Qualification Timing
- Location should be captured after timing detection and before escalation.
- Do not ask location in first message.

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

### Fast-Track Rule (Refined)
If user says buying today/now:
- Skip non-essential qualification
- Confirm timing once before introducing visit
- Offer immediate visit options

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

### Escalation Controls
- Do not escalate more than once within 3-message window
- If customer declines escalation, continue qualification calmly
- WhatsApp handoff: one transition message only, no follow-ups

### Soft Exit Protocol (Refined)
If customer stops responding after escalation offer:
- Send one soft value-based follow-up within same session
- Follow-up must add value (availability reminder, category suggestion, or visit flexibility)
- Do not send generic "just checking in" messages

### Policy Dependencies
- Escalation triggers: `knowledge_base/09_Escalation_Policy.md`.
- Safety, channel, and after-hours constraints: `knowledge_base/07_Safety_Compliance.md`.
