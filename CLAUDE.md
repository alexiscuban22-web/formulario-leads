# Proyecto: Sitio web de Amabilly Beatriz (Realtor)

## Sobre el negocio
- Amabilly Beatriz — Realtor en Miami-Dade, brokerage **LIFESTYLE INTERNATIONAL REALTY LLC**
- Nicho: primeros compradores y personas buscando renta
- Trilingüe: inglés, español, portugués (diferenciador clave de marca)
- Instagram: @amabillyrealtor

## Estado actual del proyecto
- **Repo de GitHub:** `alexiscuban22-web/formulario-leads` — conectado como remoto de este working directory (`git remote -v` → `origin`). `main` es la rama de producción.
- **Vercel:** proyecto `formulario-leads` bajo el team `tapaslabs`, con dominio personalizado `amabillyrealtor.vercel.app`. Auto-deploy en cada `git push` a `main` — no hace falta tocar Vercel directamente ni usar su CLI.
- **Formspree:** cuenta activa, un solo formulario/endpoint (`https://formspree.io/f/mlgqzvzd`) reutilizado en TODOS los formularios del sitio (el general de `/formulario` y el "La quiero" de cada propiedad). Se diferencian por el campo oculto `_subject` (distinto texto según el origen) y, en el caso de una propiedad, un campo oculto `propiedad` con la dirección.
- Es un sitio **estático puro** (HTML/CSS/JS vanilla, sin build step, sin framework, sin backend/CMS) — así se mantiene desplegable directo en Vercel sin configuración adicional.

## Arquitectura de páginas
```
/index.html                          → entrada: skyline + 2 botones (Catálogo / Formulario)
/formulario/index.html               → formulario de leads general (paleta original)
/privacidad/index.html               → política de privacidad
/catalogo/index.html                 → grid del catálogo (paleta nueva)
/catalogo/data.js                    → PROPERTIES[] + CATALOGO_UI{} (fuente de datos del catálogo)
/catalogo/[slug]/index.html          → ficha de detalle de cada propiedad (una página por casa)
/assets/css/catalogo.css             → estilos compartidos del catálogo (grid, ficha, modal, galería)
/assets/css/site-footer.css          → estilos del footer legal (compartido por TODAS las páginas)
/assets/js/site.js                   → persistencia de idioma (localStorage) + render del footer legal
/assets/js/lightbox.js               → visor de pantalla completa con zoom (galería de fotos)
/assets/img/equal-housing-icon.png   → ícono recortado (sin texto en inglés fijo) para el footer legal
/assets/casas/[slug]/*.jpg           → fotos optimizadas por propiedad (full + thumb)
/CASAS/[direccion]/                  → carpetas de entrada de Amabilly (fotos crudas + ML#.txt) — NO se sube al repo (ver `.gitignore`)
```
- `index.html` y `/formulario` son archivos autocontenidos (CSS inline, su propio diccionario de idioma) — herencia del sitio original, antes de que existiera el catálogo.
- `/catalogo/*` y `/privacidad` sí comparten CSS/JS vía `<link>`/`<script src>` a `/assets/...`.
- Cada ficha de propiedad (`/catalogo/[slug]/index.html`) es una copia casi idéntica de las demás — el único código específico de cada una es el `<title>` y la línea `PROPERTIES.filter(p => p.slug === '...')`. Todo lo demás (galería, i18n, modal, footer) es genérico y lee de `data.js`. Al agregar una casa nueva, copiar un archivo existente y cambiar solo esas dos líneas.

## Sistema de diseño
Actualmente conviven **dos paletas** (pendiente decidir si se unifica todo el sitio a la nueva — ver Notas):

**Paleta original ("coastal luxury")** — usada en `/index.html` y `/formulario`:
```css
--ink: #0E2E32; --ink-soft: #3A5459; --paper: #F6F2EA; --paper-raised: #FFFFFF;
--brass: #A9825A; --brass-deep: #8C6A47; --sage: #7C8A73; --line: rgba(14,46,50,0.14);
```

**Paleta nueva (brand board, marrón/bronce)** — usada en `/catalogo/*` y `/privacidad`:
```css
--ink: #321E14; --ink-soft: #5A4335; --paper: #FBF8F3; --paper-raised: #FFFFFF;
--brass: #B79367; --brass-deep: #915A36; --sage: #7C8A73; --line: rgba(50,30,20,0.14);
```
- `--radius: 3px` en ambas — no usar bordes muy redondeados.
- Tipografía: **Fraunces** (titulares) + **Inter** (cuerpo/UI), vía Google Fonts.
- Mobile-first estricto, máximo ~480px de ancho centrado, hairlines + "eyebrows" en mayúsculas para separar secciones.
- Motivo visual de firma: skyline de Miami en SVG (`<svg class="skyline">`) — reutilizar en cualquier página nueva.

## Idiomas
- Botones en orden **EN, ES, PT** (cambiado desde el orden original ES/EN/PT) en la barra sticky de arriba.
- ES sigue siendo el idioma por defecto para una visita nueva sin preferencia guardada.
- El idioma elegido **persiste entre páginas** vía `localStorage` (clave `ab_lang`, funciones `getSavedLang()` / `saveLang()` en `assets/js/site.js`). Cualquier página nueva debe: leer `getSavedLang('es')` al iniciar en vez de hardcodear `'es'`, y llamar `saveLang(lang)` dentro de su `setLanguage()`.
- Patrón de contenido: atributos `data-i18n` + diccionario JS por idioma (`dict` en páginas standalone, `CATALOGO_UI` en el catálogo).

## Cumplimiento legal (obligatorio en TODA página nueva)
Vive en `assets/js/site.js` (`renderSiteFooter()`) + `assets/css/site-footer.css` — se activa con un simple `<footer class="site-footer" id="siteFooter"></footer>` al final de `.page` y una llamada a `renderSiteFooter(lang)` dentro de `setLanguage()`. Incluye:
- Nombre del brokerage (**LIFESTYLE INTERNATIONAL REALTY LLC**), legible, no en letra microscópica (regla FREC 61J2-10.025 de Florida).
- Símbolo Equal Housing Opportunity + texto traducido (ES/EN/PT).
- Link a `/privacidad/`.

Además, **todo formulario de contacto** (el general y el "La quiero" de cada propiedad) debe incluir la línea de consentimiento TCPA debajo del botón de enviar (`data-i18n="tcpa_consent"`, ya traducida en los 3 diccionarios existentes).

## Catálogo de casas — modelo de datos
Cada propiedad es un objeto dentro de `PROPERTIES` en `catalogo/data.js`:
```js
{
  slug: "ciudad-direccion-slug",       // usado en la URL /catalogo/[slug]/
  operation: "venta" | "renta",
  price: 2200,                          // número, sin formato
  beds: 1, baths: 1,
  sqft: 1200,                           // OPCIONAL — omitir si no se tiene el dato (el chip se oculta solo)
  yearBuilt: 2010,                      // OPCIONAL — mismo comportamiento
  amenities: ["pool", "gym", "sauna"],  // OPCIONAL — array libre; cada item necesita su traducción amenity_<nombre> en CATALOGO_UI
  address: "...", cityLine: "Barrio · Ciudad, FL",
  title: { es, en, pt },
  description: { es, en, pt },          // incluye specs relevantes redactadas en prosa (y términos de renta si aplica)
  neighborhood: { es, en, pt },
  images: { cover: "...thumb.jpg", gallery: [{ full, thumb, alt: {es,en,pt} }, ...] }
}
```
- Si `operation` es `"renta"`, el precio se muestra con sufijo de unidad (`/mes`, `/mo`, `/mês` según idioma) automáticamente — no hace falta nada especial en el dato.
- Specs opcionales (`sqft`, `yearBuilt`, `amenities`) se omiten solos en el grid y en la ficha si no están presentes — no dejar el campo con un valor inventado.

## Flujo de contenido para agregar una casa nueva
Este es el proceso real, paso a paso, cada vez que Amabilly entrega una propiedad:

1. **Localizar la carpeta** en `/CASAS/[dirección de la propiedad]/` — contiene las fotos y un archivo **`ML#.txt`**.
2. **Leer el `ML#.txt` COMPLETO antes de escribir nada.** Es la fuente de verdad — no inventar ni asumir precio, cuartos/baños, o condiciones. Suele incluir: descripción base, término de arrendamiento o venta, costos de mudanza, disponibilidad, política de mascotas, cuota de aplicación, número de MLS. **Si falta un dato crítico (precio, cuartos/baños) y no se puede inferir con certeza razonable del resto del texto, preguntarle al usuario en vez de adivinar** — es información real que se publica en un sitio de negocio.
3. **Investigar la zona** (WebSearch) — nombre real del barrio/edificio, qué hay cerca, transporte, amenidades — para escribir una descripción de zona real, no genérica. Buscar por la dirección y, si aparece, por el nombre del edificio/condominio.
4. **Redactar título, descripción y descripción de zona en ES/EN/PT** — la descripción de la propiedad debe incorporar los datos clave del `ML#.txt` (specs, términos de renta si aplica, disponibilidad) en prosa natural, no solo lo que ya se ve en las fotos.
5. **Optimizar las fotos** (ver Notas técnicas — no hay ImageMagick/Python en esta máquina, se usa PowerShell + System.Drawing) a `/assets/casas/[slug]/`: por cada foto, generar `nombre-full.jpg` (~1400px ancho, calidad ~82) y `nombre-thumb.jpg` (~480px ancho, calidad ~68).
6. **Agregar el objeto de la propiedad** a `PROPERTIES` en `catalogo/data.js`.
7. **Crear la página de detalle**: copiar un `catalogo/[slug-existente]/index.html` a `catalogo/[slug-nuevo]/index.html`, cambiar el `<title>` y la línea del `.filter(slug === ...)`. No tocar el resto del archivo — es genérico.
8. **Probar localmente** antes de subir (servidor estático local — ver Notas técnicas) — revisar grid, ficha, galería/lightbox, cambio de idioma, y el modal "La quiero".
9. **Commit + push** a `main` (Vercel despliega solo). Confirmar en `amabillyrealtor.vercel.app` que la propiedad quedó visible.

No hay panel de administración ni base de datos externa — el catálogo se genera a mano a partir de estas carpetas. Mantenerlo así de simple.

## Notas técnicas / herramientas de esta máquina
- **No hay Python, Node ni ImageMagick instalados.** Para redimensionar/optimizar fotos se usa PowerShell con `System.Drawing` (cargar la imagen vía `MemoryStream`/`ReadAllBytes`, no `Image.FromFile` directo, para evitar locks de archivo). Ver commits anteriores para el script de referencia.
- **Preview local:** no hay servidor de desarrollo del proyecto — se levantó un servidor HTTP estático mínimo en PowerShell (`System.Net.HttpListener`, puerto 8899, sirve la carpeta del proyecto) porque las rutas del sitio son absolutas (`/assets/...`, `/catalogo/...`) y no funcionan abriendo los archivos directo con `file://`.
- **`.gitignore` — cuidado con mayúsculas/minúsculas en Windows:** `core.ignorecase=true` en este repo, así que una regla como `CASAS/` (sin `/` inicial) matchea CUALQUIER carpeta llamada `casas` en cualquier profundidad — incluyendo `assets/casas/`, que sí debe subirse. Las reglas de `.gitignore` que deben aplicar solo a la carpeta raíz van ancladas con `/` inicial (ej. `/CASAS/`).
- `.gitignore` actual excluye: `.claude/settings.local.json`, `/CASAS/` (carpetas crudas de entrada), el PNG original del logo de Equal Housing sin recortar, y un `formulario-leads.html` suelto (duplicado viejo sin usar, no confundir con `/formulario/index.html`).

## Notas de producto / negocio
- La bio de Instagram no soporta un texto de gancho distinto a la URL cuando solo hay un link — por eso el dominio (`amabillyrealtor.vercel.app`) importa y el gancho vive en el texto de la bio, no en el link.
- El formulario general tiene rangos de presupuesto dinámicos (renta = mensual, compra = precio total) — mismo patrón de UX a replicar si el catálogo suma filtros de precio en el futuro.
- El "trato personalizado" y el idioma son los ejes centrales del mensaje de marca — cualquier copy nuevo debe reforzar esto, no ser genérico de bienes raíces.

## Pendientes conocidos
- Decidir si la paleta nueva (marrón/bronce) se extiende a `/index.html` y `/formulario`, o el sitio se queda con dos paletas a propósito.
- Carpeta `/CASAS/A12003970/` todavía no subida al catálogo.
- Catálogo sin filtros ni buscador todavía (por ahora es una lista simple; son 2 propiedades activas al momento de este escrito).
