# Lista de Migraciones - Arquitectura KB Neutral

## Clasificación por Categoría (Auditoría Completa)

### KB_OK (Mantener en knowledge_base/)
- **01_Business_Identity.md**: Hechos inmutables del negocio, direcciones, mercado, horas de operación, contactos oficiales, alcance de servicio, gobernanza de datos
- **07_Safety_Compliance.md**: Reglas de seguridad y cumplimiento (no conversacional)
- **13_Conditional_Logic.md**: Lógica if/then para decisiones de inventario (operativo)
- **18_Vehicle_Knowledge_System.md**: **PARSER_SENSITIVE** - Contiene headers/labels machine-readable, NO TOCAR

### MOVE_TO_AGENT_ENGINE (Migrar a agent_engine/)
#### **01_Business_Identity.md**
- **Brand Profile** (líneas 27-30): "Friendly, clear, and practical", "Local Miami identity", "Service-focused" - define personalidad

#### **02_Inventory_Policy.md**
- **Contextual Responses (Extended Library)** (líneas 10-49): Todas las variaciones de frases para availability, process, timing, specific models, multiple options, inventory limitations
- **Ejemplos específicos** (líneas 82-86): "We currently show a 2022 Corolla..." y "That exact model is not currently..."

#### **03_Financing_Policy.md**
- **Contextual Responses (Extended Library)** (líneas 27-49): Variaciones para credit concerns, down payment, approval timing
- **Frases permitidas expandidas** (líneas 21-25): Nuevas variaciones de respuestas financieras

#### **04_Purchase_Process.md**
- **Consultative Prompts (Extended Library)** (líneas 14-50): Todas las variaciones para use case, payment path, trade-in, next steps, timing

#### **05_Trade_In_Policy.md**
- **Contextual Responses (Extended Library)** (líneas 20-47): Variaciones para trade-in interest, process questions, value management, timing

#### **14_Automotive_Basics.md**
- **Suggested phrasing** (líneas 23-25, 36-37, 47-48): Frases específicas para tipos de vehículos
- **Consultative questions** (líneas 27-29, 39-40, 50-51): Preguntas específicas para cada categoría

### DUPLICATE (Reglas repetidas - Consolidar)
- Reglas de escalation aparecen en múltiples módulos (02, 03, 04, 05, 07, 09)
- Referencias a "Carros Listos" repetidas en varios módulos
- Reglas de "no prometer" repetidas en múltiples contextos

### CONFLICT (Contradicciones entre módulos)
- Ninguna identificada en auditoría inicial

### PARSER_SENSITIVE (Protegido - No Tocar)
- **18_Vehicle_Knowledge_System.md**: Headers `###`, labels `- Classification:`, parser contract completo
- **18_Vehicle_Knowledge_Reaudit_Plan.md**: Define reglas de parsing para el módulo 18

## Plan de Migración Detallado

### Módulo Destino: agent_engine/20_Conversational_Variation_System.md
**Contenido a migrar:**
- Todas las "Contextual Responses (Extended Library)" de módulos KB
- Todas las variaciones de frases conversacionales
- Brand Profile del módulo 01
- Ejemplos específicos de respuestas

### Módulo Destino: agent_engine/06_Objection_Handling.md (si no existe, crear)
**Contenido a migrar:**
- Variaciones de manejo de objeciones si se identifican en KB

### Módulo Destino: agent_engine/16_Commercial_Psychology.md
**Contenido a migrar:**
- Bridge phrases y patrones psicológicos comerciales

### Acciones Post-Migración por Módulo KB
- **01_Business_Identity.md**: Remover sección Brand Profile, mantener resto
- **02_Inventory_Policy.md**: Remover Contextual Responses, mantener reglas operativas
- **03_Financing_Policy.md**: Remover variaciones conversacionales, mantener límites
- **04_Purchase_Process.md**: Remover Consultative Prompts, mantener flujo estándar
- **05_Trade_In_Policy.md**: Remover Contextual Responses, mantener reglas de valoración
- **14_Automotive_Basics.md**: Remover suggested phrasing y consultative questions, mantener hechos técnicos

## Checklist de Integridad Post-Migración
- [ ] Contenido migrado aparece en módulos agent_engine apropiados
- [ ] Referencias cruzadas actualizadas
- [ ] No hay frases huérfanas en KB
- [ ] Funcionalidad conversacional preservada
- [ ] KB mantiene neutralidad 100%

## Riesgos Identificados
- **Riesgo de pérdida funcional**: Contenido migrado podría romper flujos si referencias no se actualizan
- **Riesgo de duplicación**: Algunas frases podrían quedar en ambos lugares temporalmente
- **Riesgo parser**: Módulo 18 no debe modificarse

## Próximo Paso
Esta lista alimenta la Fase 2: Reestructuración de KB y Fase 3: Migración a Agent Engine.
