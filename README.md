# Brand Solutions

Sitio web de **Brand Solutions**, un espacio de formación y servicios en Marketing Digital e
Inteligencia Artificial.

El repositorio contiene **dos versiones del mismo sitio**, con idéntico diseño y contenido:

| Versión | Carpeta | Para qué sirve |
| --- | --- | --- |
| **HTML plano** | `html/` | Sitio listo para subir a cualquier hosting. Sin frameworks ni build. |
| **Next.js** | `app/`, `components/` | Misma web con React y TypeScript, para escalar hacia una academia online. |

Las dos comparten los mismos datos (`data/`), los mismos tokens de diseño (`app/globals.css`) y las
mismas ilustraciones SVG, así que cualquier cambio de contenido o de estilo se refleja en ambas.

---

## Versión en HTML

Es la versión recomendada si querés subir el sitio por FTP, a un hosting compartido, a GitHub Pages
o a cualquier servidor estático.

```
html/
├── index.html                     Home
├── cursos/index.html              Catálogo de cursos
├── cursos/<curso>/index.html      Landing de cada curso (6)
├── programas/…                    Programas y su detalle (2)
├── recursos/…                     Recursos y su detalle (6)
├── servicios/index.html
├── nosotros/index.html
├── blog/index.html                Listado
├── blog/<articulo>/index.html     Artículos (6)
├── contacto/index.html
├── login/index.html
├── preguntas-frecuentes/  como-comprar/
├── terminos-y-condiciones/  politica-de-privacidad/
├── 404.html
├── sitemap.xml   robots.txt
└── assets/
    ├── css/styles.css             Estilos compilados
    ├── css/fonts.css              Tipografías
    ├── fonts/*.woff2              Inter y Sora, alojadas en el propio sitio
    ├── img/*.png                  Imágenes para redes sociales
    ├── img/favicon.svg
    └── js/main.js                 Todo el comportamiento del sitio
```

### Cómo usarla

- **Ver el sitio:** abrí `html/index.html` con doble clic. Los enlaces son relativos, así que la
  navegación funciona incluso sin servidor.
- **Publicarla:** subí el contenido de `html/` a la raíz de tu hosting. No hace falta instalar nada.
- **Editar textos:** abrí el `.html` de la página y cambiá el texto. No hay plantillas ocultas.

### Configuración de `assets/js/main.js`

Arriba del archivo hay un bloque `CONFIG` con dos valores:

```js
var CONFIG = {
  formEndpoint: "",   // URL que recibe los formularios
  checkoutUrl: "",    // URL base del checkout o de la plataforma de cursos
};
```

- **`formEndpoint`**: pegá la URL de tu plataforma de email marketing o de tu endpoint propio. Los
  tres formularios (recurso gratuito, newsletter y contacto) hacen un `POST` en JSON con los datos y
  el nombre del formulario. Si queda vacía, muestran la confirmación sin enviar nada, para poder
  probar la interfaz.
- **`checkoutUrl`**: si la completás, los botones de compra apuntan ahí con
  `?tipo=curso&item=<slug>`. Si queda vacía, llevan al formulario de contacto con el curso
  preseleccionado.

### Antes de publicar

1. Reemplazá el dominio de ejemplo `https://www.brandsolutions.com` por el definitivo. Aparece en
   las etiquetas `canonical`, en las de Open Graph, en `sitemap.xml` y en `robots.txt`.
2. Completá los datos de contacto y las redes sociales.
3. Reemplazá los testimonios de ejemplo: hoy son placeholders y el sitio lo avisa en pantalla.
4. Revisá los textos legales con un asesor: son una base editable, no un documento definitivo.
5. Configurá `formEndpoint` para que los formularios lleguen a algún lado.

### Regenerar el HTML desde los datos

Si preferís seguir editando el contenido en `data/` (útil para sumar cursos o artículos sin tocar
el HTML), el sitio se vuelve a generar con:

```bash
npm install
npm run build:html
```

El comando reescribe por completo la carpeta `html/`, así que **los cambios hechos a mano en los
`.html` se pierden**. Elegí un camino: o editás el HTML directamente, o editás `data/` y regenerás.

---

## Versión en Next.js

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de producción (todas las rutas estáticas)
npm start
npm run typecheck
```

Copiá `.env.example` como `.env.local` para conectar formularios (`NEXT_PUBLIC_FORM_ENDPOINT`) y
checkout (`NEXT_PUBLIC_CHECKOUT_URL`).

```
app/                     Rutas (App Router), metadata, sitemap, robots e imágenes sociales
components/layout/       Header sticky, footer y encabezado de páginas internas
components/home/         Secciones de la home
components/course/       Catálogo de cursos y barra de inscripción fija
components/shared/       Tarjetas, formularios y utilidades reutilizables
components/ui/           Button, Section, Accordion, Carousel, Icon, Reveal…
components/visuals/      Ilustraciones SVG originales
lib/                     SEO, schema markup, formularios, checkout y estilos de acento
tools/                   Generador de la versión HTML
```

---

## Editar el contenido

Todo el contenido vive en `data/` como objetos tipados y alimenta a las dos versiones.

| Archivo | Qué controla |
| --- | --- |
| `data/site.ts` | Nombre, dominio, contacto, redes, moneda, navegación e **indicadores de experiencia** |
| `data/courses.ts` | Cursos: temario, precio, duración, FAQ, herramientas, relacionados |
| `data/programs.ts` | Programas largos y capacitaciones in company |
| `data/resources.ts` | Recursos descargables (`price: 0` se muestra como “Gratis”) |
| `data/posts.ts` | Artículos del blog, en bloques simples (`p`, `h2`, `ul`, `quote`, `callout`…) |
| `data/services.ts` | Servicios de la agencia |
| `data/testimonials.ts` | Testimonios (hoy son **placeholders**) |
| `data/instructors.ts` | Docentes |
| `data/faqs.ts` | Preguntas frecuentes generales |

### Agregar un curso nuevo

1. Sumá un objeto al array `courses` en `data/courses.ts`.
2. Elegí un `slug` único, un `accent` (`brand`, `signal`, `coral`, `cyan`, `amber`, `ink`) y un
   `visual` (la ilustración de portada, ver `data/types.ts`).
3. Corré `npm run build:html` (y `npm run build` si usás la versión Next).

Aparece en la home, en el catálogo, genera su landing, su entrada en el sitemap y su schema markup.

### Reemplazar los testimonios

Los testimonios están marcados con `placeholder: true` y el sitio muestra un aviso mientras quede
alguno así. Cambiá nombre, rol, curso, comentario y valoración por datos reales y poné
`placeholder: false`.

### Indicadores de experiencia

Se editan en `site.stats` (`data/site.ts`). Si un valor todavía no está definido, poné `value: null`
y se muestra un guion.

---

## Identidad visual

Los tokens de color, tipografía, radios, sombras y animaciones están en el bloque `@theme` de
`app/globals.css`. Cambiando ese bloque cambian las dos versiones.

- **Violeta** `#4a1fe0` — color primario de marca.
- **Lima** `#cdf564` — acento de señal: resalta palabras clave y CTAs sobre fondo oscuro.
- **Papel** `#fcfbf8` — fondo cálido, con `#f4f2ec` para secciones alternas.
- **Tinta** `#0c0a1d` — texto y bloques oscuros.
- Tipografías: **Sora** para títulos e **Inter** para texto, alojadas en el propio sitio.

Todas las imágenes son **ilustraciones SVG propias** (`components/visuals/`): la composición del
hero, los mockups de plataforma y certificado, y las portadas de cursos, recursos y artículos. No se
usan fotografías ni recursos gráficos de terceros.

---

## SEO

- `title` y `meta description` propios en cada página, con canonical y Open Graph/Twitter Cards.
- Un solo `h1` por página y jerarquía `h2`/`h3` consistente.
- Imágenes sociales propias: una general y una por curso y por artículo.
- `sitemap.xml` y `robots.txt` generados a partir de los datos.
- Datos estructurados JSON-LD: `Organization`/`EducationalOrganization`, `WebSite`, `Course`,
  `Article`, `Product`, `FAQPage`, `BreadcrumbList` e `ItemList`.
- URLs amigables en español y `alt`/`aria-label` en todas las ilustraciones.

---

## Accesibilidad y rendimiento

- Mobile-first, sin scroll horizontal en ningún breakpoint.
- Enlace “Saltar al contenido”, foco visible, menú móvil con `aria-expanded` y bloqueo de scroll.
- Acordeones, filtros y carrusel operables con teclado y anunciados correctamente.
- Las animaciones se desactivan con `prefers-reduced-motion: reduce`.
- La versión HTML no carga ninguna librería externa: un CSS, un JS de unos 17 KB y las tipografías
  propias.
