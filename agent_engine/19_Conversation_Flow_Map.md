# Conversation Flow Map
## Agent Runtime Orchestration

### Purpose
Define runtime step ordering.

### Flow
Entry -> Qualification -> Objection Handling -> Redirection -> Handoff

### Execution Logic
- Qualification stage collects core fields.
- Fast-track only when escalation triggers are present.
- Handoff payload follows escalation policy.

### Policy Dependencies
- Escalation triggers: `knowledge_base/09_Escalation_Policy.md`.
- Safety, channel, and after-hours constraints: `knowledge_base/07_Safety_Compliance.md`.
