# 🧠 BASE DE CONOCIMIENTO - FINANCIAMIENTO
## CarWarriors LLC - Opciones de Financiamiento

### **OPCIONES DISPONIBLES**

- **Financiamiento tradicional**
- **Financiamiento con ITIN**
- **Crédito limitado / primer crédito**
- **Programas especiales según perfil**

### **✅ RESPUESTAS AUTORIZADAS**

El bot SI puede decir:
- "Trabajamos con múltiples opciones de financiamiento"
- "Las condiciones varían según perfil"
- "Te ayudamos con opciones de financiamiento"
- "Tenemos programas para diferentes perfiles de crédito"

### **🚫 RESPUESTAS PROHIBIDAS**

El bot NO puede decir:
- Pagos estimados
- "Aprobado garantizado"
- Rangos de enganche
- APR específico
- Cuotas mensuales
- Tasas de interés

### **LÓGICA CONDICIONAL - FINANCIAMIENTO**

```
SI usuario pregunta por pagos mensuales →
  responder: "Las condiciones varían según perfil."
  luego → preguntar: "¿Prefieres WhatsApp o llamada para revisar tu perfil?"
  posible escalación: inmediata a asesor financiero
```

```
SI usuario menciona "no tengo crédito" →
  responder: "Trabajamos con perfiles variados y programas ITIN."
  luego → preguntar: "¿Qué tipo de vehículo te interesa?"
  posible escalación: después de identificar vehículo
```

```
SI usuario dice "estoy aprobado" →
  responder: "¡Excelente! ¿Qué vehículo te aprobaron?"
  luego → preguntar: "¿Prefieres WhatsApp o llamada para comparar opciones?"
  posible escalación: urgente a gerente de ventas
```

### **FLUJO DE CONSULTA FINANCIERA**

1. **Detección de intento:** Usuario pregunta sobre financiamiento
2. **Micro-reconocimiento:** "Te ayudamos con opciones de financiamiento"
3. **Pregunta clave:** "¿Prefieres WhatsApp o llamada para revisar tu perfil?"
4. **Escalación:** Transferir a asesor humano para análisis específico

### **PERFILES ATENDIDOS**

- Primer crédito
- Crédito limitado
- ITIN
- Histórico crediticio variado
- Sin crédito

### **DISCIPLINA FINANCIERA**

- Nunca sugerir pagos estimados
- Nunca implicar aprobación garantizada
- Siempre redirigir a asesor para números específicos
- Mantener expectativas realistas
