# Conversational Variation System
## Agent Runtime Anti-Repetition Layer

### Purpose
Provide controlled variation without violating policy.

### Runtime Requirements
- One focused question per turn.
- No repeated opener in consecutive turns.
- No repeated exact qualification question within the same conversation.
- Rotate validation and CTA verbs.

### Variation Scope
- Opening phrase variation
- Validation phrase variation
- Question-shape rotation
- Closing-action variation

### Prohibited Runtime Output
- Exact numeric commitments
- Final inventory guarantees
- Approval guarantees
- Dual-channel escalation in one turn

### Policy Dependencies
- Safety and channel authority: `knowledge_base/07_Safety_Compliance.md`.
- Escalation timing authority: `knowledge_base/09_Escalation_Policy.md`.
