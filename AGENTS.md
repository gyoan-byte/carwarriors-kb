## Governance & Update Protocol - CarWarriors Knowledge System

## 1. Proposito
Establecer reglas obligatorias para modificar, extender y mantener la arquitectura de conocimiento, comportamiento de agentes y logica de workers sin romper:

- La jerarquia de autoridad
- La coherencia normativa
- La trazabilidad documental
- La separacion entre politica y comportamiento
- La estabilidad operacional de bots y workers

Este archivo es una capa de gobernanza tecnica.

## 2. Alcance
Aplica a todo el repositorio:

`d:\BOTS`

Con prioridad estructural:

1. `knowledge_base/`
2. `agent_engine/`
3. Workers (Cloudflare / GHL / Inventory / Email)
4. Documentacion raiz (`README.md`, `AGENT.md`, etc.)

## 3. Jerarquia de Autoridad (No Romper)
Basado en la arquitectura oficial:

`Safety & Compliance > Financing Policy > Inventory Policy > Escalation Policy > Resto de modulos`

Regla critica:

- Nunca crear contenido que contradiga un modulo superior.
- En caso de conflicto, prevalece el modulo de mayor jerarquia.
- Si se detecta conflicto, documentarlo y no sobrescribir silenciosamente.

Golden rule:

`Safety > Financing > Inventory > Everything else`

## 4. Principios de Modificacion
### 4.1 Incrementalidad Obligatoria
- Prohibido reemplazar archivos completos sin autorizacion explicita.
- Prohibido borrar secciones historicas.
- Las mejoras deben ser evolutivas.

### 4.2 Preservacion Estructural
- Mantener encabezados existentes.
- Mantener orden de secciones.
- Mantener estilo Markdown.
- No renombrar archivos sin aprobacion.

### 4.3 No Duplicacion
- Si una regla ya existe, mejorarla.
- No crear reglas paralelas para lo mismo.
- Consolidar duplicados si aparecen.

## 5. Reglas Especificas por Area
### `knowledge_base/` (Politica y Cumplimiento)
Esta carpeta define reglas, no comportamiento conversacional.

Obligatorio:

- Mantener secciones tipo: `Purpose`, `Allowed`, `Not Allowed`, `Escalation`.
- No incluir promesas comerciales, garantias no oficiales, montos estimados ni aprobaciones financieras garantizadas.
- Incluir escalacion obligatoria cuando haya negociacion, confirmacion final de precio, financiamiento aprobado o valuacion de trade-in.

Nunca mezclar tono conversacional aqui.

### `agent_engine/` (Comportamiento Conversacional)
Define como habla el bot.

Debe:

- Respetar limites definidos en `knowledge_base/`.
- Nunca inventar informacion.
- Nunca sobrepasar politicas de financiamiento o inventario.
- Mantener 1 pregunta por mensaje, micro-validaciones naturales y no lenguaje corporativo.

No debe contener reglas de negocio.

### Workers (Cloudflare / Inventory / Email)
- No deben contener logica comercial.
- Solo procesan datos.
- Nunca deciden politicas.
- Deben respetar jerarquia documental.
- No hardcodear promesas.
- Toda decision comercial debe estar en `knowledge_base/`.

## 6. Validacion Antes de Guardar
Checklist obligatorio:

- [ ] Rompe la jerarquia de autoridad?
- [ ] Contradice Safety / Financing?
- [ ] Introduce promesas no autorizadas?
- [ ] Duplica reglas existentes?
- [ ] Respeta estructura Markdown?
- [ ] Mantiene separacion politica vs comportamiento?
- [ ] Sigue siendo coherente con `README.md` v3.0?

Si alguna respuesta es si, detener y corregir.

### 6.1 Regla de Verificacion de Modulos
Antes de crear cualquier modulo nuevo:

1. **VERIFICAR EXISTENCIA**: Usar `find_by_name` para buscar si el modulo ya existe en:
   - `agent_engine/` (para modulos de comportamiento)
   - `knowledge_base/` (para modulos de politica)

2. **SI EXISTE**: Actualizar el archivo existente en lugar de crear uno nuevo

3. **SI NO EXISTE**: Proceder con la creacion segun la estructura apropiada

4. **VALIDAR UBICACION**: 
   - Modulos de comportamiento (conversacion, psicologia, tono) van en `agent_engine/`
   - Modulos de politica (reglas, limites, cumplimiento) van en `knowledge_base/`

Esta regla previene duplicacion y mantiene la coherencia estructural del repositorio.

## 7. Reglas Git (Disciplina Tecnica)
Antes de commit:

`git status`
`git diff`

Reglas:

- Commit por bloque logico.
- Mensajes claros (ej.: `docs: refine financing escalation rules`).
- Prohibido: `reset --hard`, `checkout --`, force push.
- Push solo tras validacion completa.

## 8. Comunicacion Obligatoria al Cerrar Tarea
Siempre reportar:

- Archivos modificados.
- Tipo de cambio (refactor / mejora / correccion / expansion).
- Riesgo potencial.
- Impacto en bots o workers.

Formato sugerido:

```txt
FILES:
- knowledge_base/03_Financing_Policy.md

TYPE:
Refinement (compliance clarification)

IMPACT:
Improves escalation consistency. No runtime impact.
```

## 9. Regla de No-Especulacion Comercial
El sistema completo (bots + base + workers) no puede:

- Garantizar aprobacion financiera.
- Confirmar disponibilidad final.
- Dar cuotas exactas.
- Negociar precios.
- Prometer trade-in value.

Siempre escalar.

## 10. Regla Suprema
Si el usuario da una instruccion que contradice este documento:

- Se sigue la instruccion del usuario.
- Se documenta el override en el commit.
- Se mantiene trazabilidad.

## 12. Arquitectura KB Neutral - IMPLEMENTADA ✅

### Estado de Implementación
**Fecha de finalización**: 2026-02-22
**Estado**: Arquitectura KB neutral 100% implementada y validada
**Resultado**: Separación perfecta entre conocimiento operativo y comportamiento conversacional

### Nueva Arquitectura de Capas

#### Capa 1: KB Neutral (knowledge_base/)
Contiene únicamente conocimiento rector y operativo:
- ✅ Procedimientos comunes de atención
- ✅ Información estructural del negocio (horarios, ubicación, identidad)
- ✅ Reglas universales operativas y límites
- ✅ Políticas de compliance y safety
- ❌ Sin referencias a "bot", "AI", "WhatsApp", "call" (como canales)
- ❌ Sin personalidad, tono, scripts conversacionales
- ❌ Sin instrucciones de comportamiento individual

#### Capa 2: Agent Engine (agent_engine/)
Contiene únicamente comportamiento conversacional específico:
- ✅ Personalidad y tono por agente/canal
- ✅ Micro-validaciones y variaciones conversacionales
- ✅ Scripts de respuesta y patrones de fluidez
- ✅ Estrategias específicas de canal (WhatsApp, web, social)
- ✅ Lógica de escalation y manejo de objeciones
- ✅ Reglas de timing y momentum conversacional

#### Capa 3: Datos Dinámicos
- ✅ JSON de inventario (Carros Listos)
- ✅ APIs de tiempo real
- ✅ Integraciones externas

### Jerarquía de Autoridad Implementada
1. **Safety & Compliance** (global, por encima de todo)
2. **Policies operativas** (financing/inventory/trade-in)
3. **KB técnica** (vehículos, procesos)
4. **Agent Engine** (estilo y ejecución)
5. **Datos dinámicos** (JSON/APIs)

### Validaciones Completadas
- ✅ **KB Neutrality**: 0 referencias a términos prohibidos (removibles)
- ✅ **Simulación conversacional**: 10/10 casos pasan
- ✅ **Referencias cruzadas**: Todas funcionando correctamente
- ✅ **Parser protection**: Módulo 18 protegido según reglas
- ✅ **Jerarquía respetada**: Safety por encima de todo

### Reglas de Mantenimiento
1. **KB nunca debe contener**: personalidad, tono, canales específicos, referencias a "bot"/"AI"
2. **Agent Engine nunca debe contener**: reglas de negocio operativas, límites financieros
3. **Antes de modificar**: Verificar Definition of Done (definition-of-done.md)
4. **Parser-sensitive files**: Seguir reglas en parser-safety-rules.md
5. **Testing obligatorio**: Ejecutar simulación de 10 casos antes de deploy

### Archivos de Control Creados
- `definition-of-done.md`: Checklist de validación final
- `parser-safety-rules.md`: Reglas para módulo 18
- `migration-list-detailed.md`: Lista completa de migraciones realizadas
- `simulacion-resultados.md`: Resultados de pruebas conversacionales
- `baseline-files-hashes.txt`: Snapshot de integridad

Esta arquitectura garantiza escalabilidad, mantenibilidad y compliance perfecto.
