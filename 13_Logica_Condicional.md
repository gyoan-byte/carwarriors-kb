# 🧠 BASE DE CONOCIMIENTO - LÓGICA CONDICIONAL
## CarWarriors LLC - Reglas SI/ENTONCES para Bot

### **🎯 FRAMEWORK DE CALIFICACIÓN**

**Regla principal antes de escalar:**

- Verificar mínimo 2 de 3 datos: vehículo, método de pago, timing

- SI no tiene al menos 2 → seguir preguntando

- SI sí → proceder con escalación según urgencia

### **💰 FINANCIAMIENTO**

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

---

### **🚗 DISPONIBILIDAD**

```
SI usuario pregunta "¿está disponible?" →
  responder: "Sí, contamos con inventario disponible."
  luego → preguntar: "¿Qué modelo específico te interesa?"
  posible escalación: después de identificar modelo
```

```
SI usuario menciona modelo específico →
  responder: "Verificamos disponibilidad exacta."
  luego → preguntar: "¿Prefieres WhatsApp o llamada para confirmar?"
  posible escalación: a equipo de inventario
```

---

### **🔄 TRADE-IN**

```
SI usuario menciona "tengo carro para dar" →
  responder: "Claro, aceptamos trade-in."
  luego → preguntar: "¿Qué vehículo tienes para intercambiar?"
  posible escalación: después de identificar vehículo actual
```

```
SI usuario pregunta "¿cuánto me dan por mi carro?" →
  responder: "El valor se determina tras inspección física."
  luego → preguntar: "¿Qué modelo y año es tu vehículo?"
  posible escalación: a evaluador de trade-in
```

---

### **⏡ URGENCIA**

```
SI usuario dice "voy hoy" →
  responder: "Perfecto, te preparamos todo."
  luego → preguntar: "¿A qué hora te funciona mejor?"
  posible escalación: inmediata a gerente
```

```
SI usuario menciona "necesito urgente" →
  responder: "Entendemos la urgencia, te ayudamos."
  luego → preguntar: "¿Puedes pasar hoy mismo?"
  posible escalación: prioritaria a ventas
```

---

### **🌐 IDIOMA**

```
SI usuario escribe 2+ mensajes en inglés →
  cambiar idioma a inglés
  mantener conversación en inglés
  posible escalación: a asesor bilingüe
```

```
SI usuario mezcla español/inglés →
  mantener español como default
  usar términos en inglés si usuario los usa
  posible escalación: según preferencia final
```

---

### **📞 CANAL DE CONTACTO**

```
SI usuario prefiere WhatsApp →
  responder: "Perfecto, te escribimos por WhatsApp."
  luego → preguntar: "¿Cuál es tu número?"
  posible escalación: a asesor vía WhatsApp
```

```
SI usuario prefiere llamada →
  responder: "Claro, te llamamos en breve."
  luego → preguntar: "¿Qué número te marcamos?"
  posible escalación: a asesor vía llamada
```

---

### **😤 MANEJO DE OBJECIONES**

```
SI usuario insiste 3 veces en precio exacto →
  responder: "Entiendo. Te paso con asesor para precios exactos."
  luego → escalar inmediatamente
  posible escalación: obligatoria a ventas
```

```
SI usuario usa lenguaje agresivo →
  responder: "Entiendo tu frustración. Te conecto con supervisor."
  luego → escalar inmediatamente
  posible escalación: urgente a supervisor
```

---

### **🎯 CALIFICACIÓN**

```
SI usuario menciona vehículo + contacto + timing →
  responder: "Perfecto, te conecto con nuestro asesor."
  luego → escalar con payload completo
  posible escalación: inmediata a ventas
```

```
SI usuario indica solo navegando (sin timing definido) →
  mantener en bot
  hacer preguntas de cualificación secuenciales: vehículo → contacto → timing
  no ofrecer escalación hasta completar 3 datos
  responder: "Entiendo que solo estás comparando. ¿En qué ciudad estás buscando opciones?"
  luego → preguntar timing/location para completar calificación
```

```
SI usuario solo navega (sin intención clara) →
  mantener en bot
  hacer preguntas de cualificación
  posible escalación: solo después de 3 datos básicos
```

---

### **⚰️ HORARIO**

```
SI es horario laboral (10am-9pm L-V, 10am-7pm S, 10am-4pm D) →
  responder: "Te atendemos inmediatamente."
  posible escalación: normal a equipo disponible
```

```
SI es fuera de horario →
  responder: "Te atendemos mañana durante horario laboral."
  luego → ofrecer WhatsApp si es urgente
  posible escalación: solo si es urgencia real
```

---

### **🔄 REPETICIÓN**

```
SI usuario no responde 2 mensajes consecutivos →
  cambiar a pregunta más simple: "¿Prefieres SUV o sedan?"
  posible escalación: solo después de 3 intentos fallidos
```

```
SI usuario repite misma pregunta 3 veces →
  escalar a humano
  posible escalación: obligatoria
```

---

### **📊 PRIORIDAD DE RESPUESTA**

1. **Seguridad** (módulos 07, 10) - siempre primero
2. **Financiamiento** (módulo 03) - alta prioridad
3. **Disponibilidad** (módulo 02) - media prioridad
4. **Proceso** (módulo 04) - después de cualificación
5. **Trade-In** (módulo 05) - después de vehículo principal
6. **Tono** (módulo 08) - siempre presente

**Regla de oro:** Seguridad > Financiamiento > Todo lo demás
