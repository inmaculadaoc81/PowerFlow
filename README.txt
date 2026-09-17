POWERFLOW | SERVICIO DE AUTOMATIZACIÓN POWER AUTOMATE
====================================================

Sitio web: https://desarrolladorpowerautomate.com/
Repositorio: https://github.com/inmaculadaoc81/PowerFlow
Marca: PowerFlow, parte del Grupo N8nLabs.

DISEÑO
- index.html contiene los textos y secciones redactados para Power Automate.
- style.css conserva la estructura de la plantilla original; powerflow.css aplica la identidad visual nueva (azul y magenta) y un hero diferenciado.
- img/logo-1ok-PowerFlow-Automatizacion-Power-Automate.webp es el logotipo; img/icono.jpg se utiliza como favicon.
- img/hero1-powerflow-automatizacion-hero-50.webp e img/hero2-powerflow-automatizacion-hero2-50.webp son las imágenes laterales del hero.
- img/powerflow-hero-pattern.svg añade líneas, nodos y círculos decorativos.
- El botón de WhatsApp mantiene el verde habitual.
- powerflow.js gestiona el menú móvil, el envío del formulario y el banner de preferencias.

DATOS DE CONTACTO
- Teléfono: +34 910 05 40 12.
- WhatsApp: +34 638 61 95 88.
- Dirección: C. Joaquín María López, 26, Madrid.
- Horario: lunes a viernes, 09:30–18:00.
- Reserva de reuniones: https://cal.com/n8n-automatizaciones/30min.
- Google Maps: https://maps.app.goo.gl/SYNnhm98rdRtmCYv6.
- Política de privacidad: https://kelatos.com/privacy-policy/.

FORMULARIO / VERCEL
El formulario envía POST a /api/contacto y requiere en Vercel las variables
SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER y SMTP_PASS. CONTACT_EMAIL es
opcional; si no se indica, se usa SMTP_USER como destinatario. No subir
contraseñas ni secretos al repositorio. Comprobar una entrega real después del
despliegue.

CHATBOT
La integración de n8n necesita una URL de webhook real. Por seguridad no se
inicializa con el marcador PENDIENTE_URL_WEBHOOK_N8N_POWERFLOW. Sustituirlo por
la URL HTTPS válida cuando el flujo esté preparado y autorizado.

CALENDARIO
Es HTML estático, no WordPress: el shortcode [cal_custom] no se ejecuta aquí.
Se usa el iframe de la misma agenda con vista mensual y tema claro.

SEO
El título, la descripción, la URL canónica, Open Graph, datos estructurados,
robots.txt y sitemap.xml utilizan el dominio de PowerFlow.
