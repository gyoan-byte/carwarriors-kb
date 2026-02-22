# Parser Safety Rules - Módulo 18 Contract

## PROTEGIDO: No Modificar Durante Arquitectura KB Neutral

### Headers Estructurales (###)
- `### Classification:`
- `### Technical baseline:`
- `### Ownership baseline:`
- `### Performance baseline:`
- `### Sources:`
- `### Last Verified:`

### Labels de Campo (sin espacios después de :)
- `- Classification:`
- `- Technical baseline:`
- `- Ownership baseline:`
- `- Performance baseline:`
- `Sources:`
- `Last Verified:`

### Reglas de Parsing
1. **NO** cambiar formato de headers (mantener `###`)
2. **NO** agregar/remover labels existentes
3. **NO** modificar sintaxis de campos
4. **SÍ** agregar nuevos campos opcionales con labels diferentes
5. **SÍ** actualizar contenido de campos existentes
6. **SÍ** agregar secciones nuevas sin afectar parsing

### Validación Post-Migración
- Ejecutar parser test después de cualquier cambio
- Verificar que campos requeridos estén presentes
- Confirmar que formato machine-readable no cambió

### Riesgo de Violación
Si se modifica algún header/label protegido:
- Parser fallará
- Sistema de vehículos dejará de funcionar
- SAFE_MODE activará automáticamente
- Requiere rollback completo

### Checklist de Seguridad Parser
- [ ] Headers `###` intactos
- [ ] Labels de campo sin modificar
- [ ] Formato consistente
- [ ] Parser test pasa
- [ ] SAFE_MODE desactivado
