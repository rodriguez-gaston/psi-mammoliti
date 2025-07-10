# 🧠 Challenge: Gestión de Sesiones para Pacientes

Aplicación para visualizar psicólogos/as disponibles

<img width="1469" alt="Home desktop" src="https://github.com/user-attachments/assets/97cc2e25-1644-40b4-ab34-84ff75f7c0f0" />

---

## 📦 Entrega

### 🔗 Repositorio
[https://github.com/rodriguez-gaston/psi-mammoliti](https://github.com/rodriguez-gaston/psi-mammoliti)

Incluye:
- Este README con:
  - Instrucciones de uso
  - Decisiones técnicas y funcionales
  - Aclaraciones
 
### 🌐 Deploy en Vercel
[https://psi-mammoliti.vercel.app/](https://psi-mammoliti.vercel.app/)

---

## 📄 Documento funcional

### ¿Qué se puede hacer?

- Ver psicólogos/as disponibles con nombre y temáticas.
- Filtrar por temática (ansiedad, pareja, etc).
- Filtrar por modalidad (online, presencial, mixta).
- Ver la disponibilidad semanal en formato calendario sencillo.
- Agendar una sesión (simulada).
- Confirmar la sesión en un modal adicional.
- Guardar la sesión agendada en `localStorage` usando Zustand.
- Mostrar horarios adaptados al huso horario del usuario.
- UI responsive y mobile-friendly.
- Mostrar psicólogos con poca disponibilidad.

### ¿Qué flujos están cubiertos?

- **Explorar profesionales**
- **Filtrar por temática y modalidad**
- **Seleccionar un horario**
- **Agendar y confirmar la sesión**
- **Persistencia local de la sesión elegida**
- **Renderizado adaptado al horario local del usuario**

---

## Decisiones técnicas

- **Next.js 15 App Router** por familiaridad, performance y estructura moderna.
- **TypeScript** para tipado estricto, especialmente útil en horarios y filtros.
- **Zustand** como store local liviano + persistencia en `localStorage`.
- **Luxon** para manejo de timezones entre psicólogo y paciente.
- **Shadcn/ui** para interfaz accesible, estilizada y rápida de montar (Dialog, Button, etc).

---

## Supuestos

- El calendario del profesional es el mismo cada semana y no era necesario diferenciar la agenda por fecha.
- Puede haber 3 tipos de modalidad (online, presencial y mixta que puede incluir en su disponibilidad ambas modalidades).

---

## Trade-offs

- No usé librería de calendario o date-pickers y la vista se simplificó en una grilla de días disponibles.
- Persistencia limitada a `localStorage` (en producción se usaría una DB real).
- Si bien se podía usar una API routes para simular la búsqueda de profesionales, para una POC usé data local mockeada
- Los horarios están agrupados y simplificados como `string` (`"10:00"`), lo que puede ser un límite si se requiere precisión con segundos o visibilizar mejor el huso horario.

---

## Cambio de requerimiento

- Para agregar la opción de modalidad, se incluyó el campo `session_type` al `type` de Psychologist para incluir que tipo de sesiones ofrece: "online", "presencial" o "mixto".
- El tipado de la disponibilidad es dinámica, si `session_type === "mixto"` se incluye a cada horario el campo `mode` para determinar que tipo de sesión es para ese horario.
- Se agregó un filtro para poder elegir profesionales según la modalidad preferida.
- Tanto en el selector de horarios como en la confirmación, se ve que tipo de modalidad tiene el turno.

---

## Próximos pasos posibles

- Implementar base de datos de profesionales, disponibilidad y sesiones agendadas.
- Agregar autenticación de pacientes.
- Integrar APIs con el front.
- Permitir edición o cancelación de una sesión ya agendada integrando la base de datos.

---

## Screenshots

![Home](https://github.com/user-attachments/assets/dec054e8-6dd1-40d1-8867-5cb7703649f9)
![Availability](https://github.com/user-attachments/assets/a1e4dec2-d742-4a5a-88ed-1f7c3944c71f)
![Confirmation](https://github.com/user-attachments/assets/669e3857-fe56-4418-a61a-ecfadb78ed12)
![Appointment](https://github.com/user-attachments/assets/f8d84e6e-ead4-484f-8676-e3571e1a1f1c)
