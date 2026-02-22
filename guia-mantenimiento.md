# Guía de Mantenimiento - Arquitectura KB Neutral

## Propósito
Esta guía asegura que futuras actualizaciones mantengan la separación entre conocimiento operativo (KB) y comportamiento conversacional (Agent Engine).

## Checklist Pre-Modificación

### Para KB (knowledge_base/)
**❌ NO AGREGAR:**
- Referencias a "bot", "AI", "WhatsApp", "call" como canales
- Personalidad, tono, estilo conversacional
- Scripts de respuesta específicos
- Micro-validaciones o variaciones
- Reglas de timing o momentum
- Estrategias por canal

**✅ SÍ AGREGAR:**
- Procedimientos operativos
- Límites y restricciones
- Información factual del negocio
- Reglas universales de compliance
- Referencias cruzadas a otras políticas

### Para Agent Engine (agent_engine/)
**❌ NO AGREGAR:**
- Reglas de negocio operativas
- Límites financieros o de inventario
- Políticas de compliance (excepto implementación)
- Información factual del negocio
- Decisiones rectoras

**✅ SÍ AGREGAR:**
- Variaciones conversacionales
- Scripts de respuesta
- Micro-validaciones
- Estrategias de canal
- Personalidad y tono

## Proceso de Validación

### Paso 1: Definition of Done
Antes de commit, verificar `definition-of-done.md`:
- [ ] KB neutrality: 0 referencias prohibidas
- [ ] Agent Engine completeness: lógica conversacional presente
- [ ] Jerarquía de autoridad respetada
- [ ] Referencias cruzadas funcionando

### Paso 2: Parser Safety
Para módulo 18 y archivos relacionados:
- [ ] Headers `###` intactos
- [ ] Labels de campo sin modificar
- [ ] Formato machine-readable preservado
- [ ] Parser test pasa

### Paso 3: Simulación de 10 Casos
Ejecutar pruebas con escenarios estándar:
1. Precio/pagos insistente
2. Disponibilidad exacta
3. Cliente fuera de zona
4. Trade-in compleja
5. Lenguaje agresivo
6. "Are you real?"
7. Pregunta técnica exacta
8. Crédito pobre
9. Urgencia "hoy"
10. Comparación competidores

### Paso 4: Referencias Cruzadas
Verificar que cambios no rompan:
- [ ] Módulos KB referencian correctamente
- [ ] Agent Engine implementa límites de KB
- [ ] Jerarquía Safety > Policies > KB > Agent Engine

## Manejo de Conflictos

### Si KB requiere comportamiento conversacional
**Solución**: Mover a Agent Engine, dejar en KB solo la regla rectora
```
❌ KB: "Responde con tono amigable"
✅ KB: "Mantén comunicación respetuosa"
✅ Agent Engine: "Usa variaciones amigables: 'Hola', '¡Qué gusto verte!'"
```

### Si Agent Engine necesita reglas operativas
**Solución**: Mover regla a KB apropiada, implementar en Agent Engine
```
❌ Agent Engine: "No des precios si no hay aprobación"
✅ KB: "Precios requieren aprobación financiera"
✅ Agent Engine: "Escala para precios, usa variaciones de 'consultaré precios'"
```

## Archivos de Control

### Obligatorio Consultar
- `definition-of-done.md`: Checklist validación
- `parser-safety-rules.md`: Reglas módulo 18
- `migration-list-detailed.md`: Historial migraciones
- `simulacion-resultados.md`: Casos de prueba

### Mantener Actualizados
- `AGENTS.md`: Documentar cambios arquitecturales
- `baseline-files-hashes.txt`: Verificar integridad

## Escenarios Comunes

### Agregar nueva funcionalidad
1. **¿Es conocimiento operativo?** → KB
2. **¿Es comportamiento conversacional?** → Agent Engine
3. **¿Es específico de canal?** → Agent Engine
4. **¿Es regla universal?** → KB

### Modificar respuesta existente
1. **¿Cambia hechos/límites?** → KB
2. **¿Cambia cómo se dice?** → Agent Engine
3. **¿Afecta múltiples canales?** → Agent Engine

### Resolver conflicto
1. **KB vs Agent Engine**: KB siempre gana (autoridad rectora)
2. **Parser conflict**: Seguir reglas de parser-safety
3. **Jerarquía conflict**: Safety > Policies > KB > Agent Engine

## Contactos de Escalación

### Para dudas arquitecturales
- Revisar: `AGENTS.md` sección 12
- Ejecutar: Simulación de 10 casos
- Validar: Definition of Done

### Para conflictos de parser
- Consultar: `parser-safety-rules.md`
- Probar: Parser test
- Documentar: Cualquier cambio en headers/labels

Esta guía garantiza que la arquitectura KB neutral se mantenga pura y escalable en futuras actualizaciones.
