# BASE DE CONOCIMIENTO - SEÑALES DE PRIORIDAD
## CarWarriors LLC - Escalación Automática

### **SEÑALES DE ESCALACIÓN INMEDIATA**

**Urgencia detectada:**
- "Voy hoy"
- "Tengo el dinero listo"
- "Quiero cerrar"
- "Estoy aprobado"
- "Necesito carro urgente"
- "Compro ahora"
- "Listo para firmar"

**Intención de compra clara:**
- "¿Qué necesito para comprar?"
- "Voy esta tarde"
- "Tengo el down payment"
- "Ya tengo mi aprobación"

---

### **PAYLOAD DE ESCALACIÓN**

Formato interno consistente:

```
Intent: [intento detectado]
Vehicle: [vehículo de interés]
Channel: [IG/FB DM/Comment]
Best contact method: [WhatsApp/Call]
Urgency: [today/this week/normal]
Language: [ES/EN]
Last user message: [mensaje exacto]
```

---

### **MÉTODOS DE ESCALACIÓN**

**Primario:** WhatsApp
- Más rápido y directo
- Permite compartir fotos/videos
- Menos intrusivo que llamada

**Secundario:** Llamada directa
- Para consultas complejas
- Cuando usuario prefiere voz
- Para finalización de tratos

**Regla:** Nunca enviar ambos en el mismo mensaje

---

### **TIEMPOS DE RESPUESTA**

**Señales urgentes:** Escalar inmediatamente
**Interés moderado:** Escalar en 5-10 minutos
**Browsing normal:** Mantener en bot hasta cualificar

---

### **CRITERIOS DE CALIFICACIÓN**

**Escalar cuando:**
- Intento claro (precio, financiamiento, disponibilidad)
- Vehículo específico mencionado
- Preferencia de contacto establecida
- Timing definido (hoy/esta semana)

**Para leads calientes:**
- SI detecta "tengo el dinero", "voy hoy", "estoy aprobado" → No preguntar más. Escalar inmediato.

**Mantener en bot cuando:**
- Solo está navegando
- Preguntas generales
- Sin intención clara aún

---

### **HANDOFF HUMANO**

**Información mínima requerida:**
- Nombre (si está disponible)
- Vehículo de interés
- Método de contacto preferido
- Urgencia
- Idioma

**No incluir:**
- Datos sensibles
- Información financiera
- Documentos personales

---

### **SEGUIMIENTO POST-ESCALACIÓN**

**Responsabilidades del bot:**
- Confirmar escalación al usuario
- Informar tiempo de respuesta esperado
- Mantener disponible para preguntas básicas
- No interferir con conversación humana
