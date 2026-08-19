# Brand Solutions

Sitio web de **Brand Solutions**, un espacio de formación y servicios en Marketing Digital e
Inteligencia Artificial. Está construido con Next.js (App Router), TypeScript y Tailwind CSS v4,
y se genera completamente estático: todas las rutas se prerenderizan en el build.

---

## Puesta en marcha

```bash
npm install
npm run dev      # entorno de desarrollo en http://localhost:3000
npm run build    # build de producción
npm start        # sirve el build
npm run typecheck
```

Copiá `.env.example` como `.env.local` para conectar formularios y checkout.

---

## Estructura

```
app/                     Rutas (App Router)
  layout.tsx             Layout raíz: fuentes, metadata global, header y footer
  page.tsx               Home
  cursos/                Catálogo y landing de cada curso
  programas/             Programas y su detalle
  recursos/              Recursos digitales y su detalle
  servicios/             Servicios de la agencia
  nosotros/              Sobre Brand Solutions
  blog/                  Listado y artículos
  contacto/  login/      Contacto y acceso a la plataforma
  preguntas-frecuentes/  como-comprar/  terminos-y-condiciones/  politica-de-privacidad/
  sitemap.ts  robots.ts  opengraph-image.tsx  icon.svg

components/
  layout/                Header sticky, footer y encabezado de páginas internas
  home/                  Secciones de la home
  course/                Catálogo de cursos y barra de inscripción fija
  shared/                Tarjetas, formularios y utilidades reutilizables
  ui/                    Primitivas: Button, Section, Accordion, Carousel, Icon, Reveal…
  visuals/               Ilustraciones SVG originales (hero, mockups, portadas, logo)

data/                    Contenido editable (ver más abajo)
lib/                     Utilidades: SEO, schema markup, formularios, checkout, estilos de acento
```

---

## Editar el contenido

Todo el contenido vive en `data/` como objetos tipados. No hace falta tocar los componentes.

| Archivo | Qué controla |
| --- | --- |
| `data/site.ts` | Nombre, dominio, contacto, redes, moneda, navegación e **indicadores de experiencia** |
| `data/courses.ts` | Cursos: temario, precio, duración, FAQ, herramientas, relacionados |
| `data/programs.ts` | Programas largos y capacitaciones in company |
| `data/resources.ts` | Recursos descargables (`price: 0` se muestra como “Gratis”) |
| `data/posts.ts` | Artículos del blog, en bloques simples (`p`, `h2`, `ul`, `quote`, `callout`…) |
| `data/services.ts` | Servicios de la agencia |
| `data/testimonials.ts` | Testimonios (hoy son **placeholders**, ver abajo) |
| `data/instructors.ts` | Docentes |
| `data/faqs.ts` | Preguntas frecuentes generales |
| `data/types.ts` | Tipos compartidos |

### Agregar un curso nuevo

1. Sumá un objeto al array `courses` en `data/courses.ts`.
2. Elegí un `slug` único, un `accent` (`brand`, `signal`, `coral`, `cyan`, `amber`, `ink`) y un
   `visual` (la ilustración de portada, ver `data/types.ts`).
3. Listo: aparece en la home, en `/cursos`, genera su landing `/cursos/[slug]`, su imagen social,
   su entrada en el sitemap y su schema markup de tipo `Course`.

### Reemplazar los testimonios

Los testimonios actuales son de ejemplo y están marcados con `placeholder: true`. Mientras quede
alguno así, el sitio muestra un aviso en la sección de testimonios. Reemplazá nombre, rol, curso,
comentario y valoración por datos reales y poné `placeholder: false`.

### Indicadores de experiencia

Los valores de años de experiencia, proyectos, personas capacitadas y marcas acompañadas se editan
en `site.stats` (`data/site.ts`). Si un valor todavía no está definido, poné `value: null` y se
muestra un guion.

---

## Formularios y ventas

Los tres formularios (recurso gratuito, newsletter y contacto) usan `lib/forms.ts`.

- Sin `NEXT_PUBLIC_FORM_ENDPOINT`, simulan el envío y muestran el estado de éxito. Sirve para
  probar la interfaz.
- Con la variable definida, hacen un `POST` con `{ form, ...datos }` en JSON a esa URL.

Los botones de compra usan `lib/commerce.ts`. Sin `NEXT_PUBLIC_CHECKOUT_URL`, llevan al formulario
de contacto con el curso preseleccionado. Con la variable definida, arman
`<URL>?tipo=curso&item=<slug>`.

---

## Identidad visual

La paleta, la tipografía, los radios, las sombras y las animaciones están declarados como tokens en
el bloque `@theme` de `app/globals.css`. Cambiando ese bloque cambia todo el sitio.

- **Violeta** `#4a1fe0` — color primario de marca.
- **Lima** `#cdf564` — acento de señal, resalta palabras estratégicas y CTAs sobre fondo oscuro.
- **Papel** `#fcfbf8` — fondo cálido, con `#f4f2ec` para secciones alternas.
- **Tinta** `#0c0a1d` — texto y bloques oscuros.
- Tipografías: **Sora** para títulos e **Inter** para texto, cargadas con `next/font`.

Todas las imágenes son **ilustraciones SVG propias** (`components/visuals/`): la composición del
hero, los mockups de plataforma y certificado, y las portadas de cursos, recursos y artículos. No se
usan fotografías ni recursos gráficos de terceros.

---

## SEO

- `title` y `meta description` propios en cada página, con canonical y Open Graph/Twitter Cards.
- Un solo `h1` por página y jerarquía `h2`/`h3` consistente.
- Imágenes sociales generadas en el build: una general y una propia por curso y por artículo.
- `sitemap.xml` y `robots.txt` generados a partir de los datos.
- Datos estructurados JSON-LD: `Organization`/`EducationalOrganization`, `WebSite`, `Course`,
  `Article`, `Product`, `FAQPage`, `BreadcrumbList` e `ItemList`.
- URLs amigables en español y `alt`/`aria-label` en todas las ilustraciones.

---

## Accesibilidad y rendimiento

- Mobile-first, sin scroll horizontal en ningún breakpoint.
- Enlace “Saltar al contenido”, foco visible, menú móvil con `aria-expanded` y bloqueo de scroll.
- Acordeones y carrusel operables con teclado y anunciados correctamente.
- Las animaciones de aparición se desactivan con `prefers-reduced-motion: reduce`.
- Todo el sitio es estático: sin dependencias de terceros en el cliente más allá de React.

---

## Despliegue

Al ser 100% estático, funciona en cualquier hosting de Next.js (Vercel, Netlify, Cloudflare) o en un
servidor Node con `npm run build && npm start`.

Antes de publicar:

1. Actualizá `site.url` en `data/site.ts` con el dominio definitivo (de ahí salen canonical, sitemap
   y schema markup).
2. Completá contacto, redes e indicadores en `data/site.ts`.
3. Reemplazá los testimonios de ejemplo.
4. Revisá los textos legales de `/terminos-y-condiciones` y `/politica-de-privacidad` con un asesor
   legal: son una base editable, no un documento definitivo.
5. Definí las variables de entorno de formularios y checkout.
