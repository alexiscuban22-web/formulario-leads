# Proyecto: Sitio web de Amabilly Beatriz (Realtor)

## Sobre el negocio
- Amabilly Beatriz — Realtor en Miami-Dade
- Nicho: primeros compradores y personas buscando renta
- Trilingüe: inglés, español, portugués (diferenciador clave de marca)
- Instagram: @amabillyrealtor

## Estado actual del proyecto
- **Repo de GitHub existente:** `alexiscuban22-web/formulario-leads` — usar ESTE repo, no crear uno nuevo, para que los cambios se desplieguen en el dominio ya conectado.
- **Vercel:** proyecto `formulario-leads` bajo el team `tapaslabs`, con dominio personalizado `amabillyrealtor.vercel.app` ya configurado y funcionando (dominio viejo `formulario-leads-three.vercel.app` con redirect activo).
- **Formspree:** cuenta activa. Formulario principal con endpoint `https://formspree.io/f/mlgqzvzd` — envía email con todos los datos del lead.
- **`index.html`** (incluido en esta carpeta): la página de formulario de leads, ya en producción. Es el punto de partida — no rediseñar desde cero, evolucionar a partir de este archivo.

## Sistema de diseño (mantener consistente en todo el sitio)

**Paleta — "coastal luxury" Miami, minimalista:**
```css
--ink: #0E2E32;        /* texto principal, headers, botones */
--ink-soft: #3A5459;   /* texto secundario */
--paper: #F6F2EA;      /* fondo base, lino cálido */
--paper-raised: #FFFFFF; /* inputs, tarjetas */
--brass: #A9825A;      /* acento — enlaces, focus, iconos */
--brass-deep: #8C6A47; /* hover, eyebrows, textos de acento */
--sage: #7C8A73;       /* acento secundario, éxito/confirmación */
--line: rgba(14,46,50,0.14); /* divisores, bordes */
--radius: 3px;          /* radios de borde, NO usar bordes muy redondeados */
```

**Tipografía:**
- Titulares/display: **Fraunces** (serif, variable font, con cursiva de acento en palabras clave)
- Cuerpo/UI: **Inter**
- Cargar vía Google Fonts (`fonts.googleapis.com`)

**Principios de layout:**
- Mobile-first estricto — el 100% del tráfico llega desde el link en bio de Instagram
- Máximo ~480px de ancho, centrado
- Secciones separadas por líneas finas (hairlines) con "eyebrows" en mayúsculas + letter-spacing
- Motivo visual de firma: línea fina de skyline de Miami en SVG (ver `<svg class="skyline">` en index.html) — reutilizar este lenguaje visual en nuevas páginas, no un logo genérico

**Idiomas:**
- Todo el contenido de cara al usuario debe existir en ES / EN / PT
- Seguir el mismo patrón ya usado en `index.html`: atributos `data-i18n` + diccionario JS por idioma + botones de bandera (🇪🇸 🇺🇸 🇧🇷) en una barra sticky arriba
- ES es el idioma por defecto al cargar

## Roadmap — próxima función: Catálogo de casas

### Estructura de navegación
- Página de entrada (la que va en el link de la bio) con **dos botones grandes**: "📋 Formulario" y "🏡 Catálogo de casas"
- `/formulario` — el formulario de leads actual, se mantiene igual
- `/catalogo` — grid de tarjetas de propiedades
- `/catalogo/[direccion-slug]` — vista de detalle de cada propiedad

### Página de catálogo (grid)
- Tarjetas con: foto principal, precio, dirección, cuartos, baños
- Mismo lenguaje visual que el formulario (paleta, tipografía, radios de borde)

### Vista de detalle de propiedad
- Galería de fotos en **alta calidad** (más grande y nítida que en el grid)
- Descripción completa de la propiedad
- Precio, cuartos, baños, tipo de operación (venta/renta), datos clave
- Descripción de la zona (ver flujo de contenido abajo)
- **Botón "La quiero"** → abre formulario simplificado (nombre, email, teléfono) → al enviar, el correo a Amabilly debe indicar explícitamente **por cuál propiedad pregunta** (dirección en el asunto o cuerpo del email). Puede ser un segundo form de Formspree, o el mismo endpoint con un campo oculto con la dirección.

### Flujo de contenido para agregar/actualizar una casa
Este es el modelo de trabajo real, importante para cómo se construye el sistema:

1. **Amabilly entrega:** una carpeta nombrada con la dirección de la propiedad, que contiene las fotos + precio + cuartos + baños + tipo de operación + cualquier dato clave que quiera destacar.
2. **Claude (en esta sesión de Code) hace:**
   - Investiga la zona/vecindario (qué hay cerca, ambiente, transporte) para escribir una descripción real, no genérica
   - Redacta la descripción de la propiedad (en los 3 idiomas)
   - Optimiza las fotos para web (nítidas, pero que no hagan pesada la página en móvil)
   - Agrega la propiedad al catálogo (nueva entrada/página)
3. **No hay panel de administración ni base de datos externa** — el catálogo se genera a partir de estas carpetas/datos que Amabilly entrega por conversación. Mantenerlo simple: cada propiedad puede vivir como un objeto de datos (JSON o similar) + sus imágenes, sin necesidad de backend con login.

## Notas de producto / negocio (contexto para las decisiones de diseño)
- La bio de Instagram no soporta un texto de gancho distinto a la URL cuando solo hay un link (limitación de Instagram, no del sitio) — por eso el nombre del dominio (`amabillyrealtor.vercel.app`) importa y el gancho vive en el texto de la bio, no en el link.
- El formulario ya tiene rangos de presupuesto dinámicos (renta = mensual, compra = precio total) — replicar ese mismo patrón de UX donde aplique en el catálogo (ej. filtros de precio).
- El "trato personalizado" y el idioma son los ejes centrales del mensaje de marca — cualquier copy nuevo debe reforzar esto, no ser genérico de bienes raíces.
