/** Servicios, nosotros, blog, contacto, acceso, ayuda y legales. */
import { services } from "../../data/services.ts";
import { instructors } from "../../data/instructors.ts";
import { sortedPosts, getRelatedPosts, blogTopics, posts } from "../../data/posts.ts";
import { courses } from "../../data/courses.ts";
import { programs } from "../../data/programs.ts";
import { generalFaqs } from "../../data/faqs.ts";
import { site, whatsappLink } from "../../data/site.ts";
import { accent as accentMap } from "../../lib/accents.ts";
import { breadcrumbSchema, faqSchema, articleSchema, itemListSchema } from "../../lib/schema.ts";

import { esc, rel, formatDate } from "./util.mjs";
import { icon, cover, platformMockup, logoMark } from "./render.mjs";
import {
  button,
  eyebrow,
  sectionHeading,
  reveal,
  section,
  accordion,
  breadcrumbs,
  pageHeader,
  postCard,
} from "./ui.mjs";
import { contactForm, newsletterForm } from "./forms.mjs";
import { newsletterSection } from "./home.mjs";

const PROSE = [
  "max-w-3xl text-[1.02rem] leading-[1.75] text-ink-3",
  "[&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink",
  "[&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-ink",
  "[&_p]:mt-4",
  "[&_ul]:mt-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2.5 [&_ul]:pl-5 [&_ul>li]:list-disc",
  "[&_ol]:mt-4 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-2.5 [&_ol]:pl-5 [&_ol>li]:list-decimal",
  "[&_a]:font-medium [&_a]:text-brand-700 [&_a]:underline [&_a]:underline-offset-4",
  "[&_strong]:font-semibold [&_strong]:text-ink",
].join(" ");

const prose = (content) => `<div class="${PROSE}">${content}</div>`;

const legalNotice = (text) =>
  `<p class="mb-8 flex max-w-3xl items-start gap-2.5 rounded-2xl border border-dashed border-line-2 bg-paper-2/70 p-4 text-sm leading-relaxed text-muted">
          ${icon("bulb", "mt-0.5 size-4 shrink-0 text-brand-600")}
          <span>${text}</span>
        </p>`;

/* ------------------------------------------------------------------ */
/* Servicios                                                           */
/* ------------------------------------------------------------------ */

export function serviciosPage() {
  const FROM = "/servicios/";

  const steps = [
    ["01", "Diagnóstico", "Entendemos el negocio, el mercado y lo que ya se hizo antes."],
    ["02", "Estrategia", "Definimos objetivos, prioridades y cómo se van a medir."],
    ["03", "Ejecución", "Producimos, publicamos y gestionamos la inversión."],
    ["04", "Medición", "Revisamos resultados y ajustamos el plan cada mes."],
  ];

  const cards = services
    .map((service, index) => {
      const a = accentMap[service.accent];
      return reveal(
        `<article id="${service.slug}" class="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
            <div class="aspect-[16/10] border-b border-line">${cover(service.visual, service.accent, { decorative: true })}</div>
            <div class="flex flex-1 flex-col p-6">
              <h3 class="font-display text-lg font-bold tracking-tight">${esc(service.title)}</h3>
              <p class="mt-2.5 flex-1 text-[0.925rem] leading-relaxed text-muted">${esc(service.excerpt)}</p>
              <ul class="mt-5 flex flex-col gap-2 border-t border-line pt-5">
                ${service.bullets
                  .map(
                    (bullet) =>
                      `<li class="flex items-start gap-2.5 text-sm text-ink-2">
                  <span class="mt-1.5 size-1.5 shrink-0 rounded-full ${a.dot}" aria-hidden="true"></span>
                  ${esc(bullet)}
                </li>`,
                  )
                  .join("\n                ")}
              </ul>
            </div>
          </article>`,
        { delay: (index % 3) * 80, className: "h-full" },
      );
    })
    .join("\n          ");

  const inCompany = [
    ["search", "Diagnóstico previo", "Relevamos procesos y detectamos oportunidades."],
    ["book", "Programa a medida", "Contenidos armados sobre tus casos reales."],
    ["workflow", "Manual interno", "Criterios y flujos documentados para el equipo."],
    ["refresh", "Seguimiento", "Revisión de adopción a los 30 y 60 días."],
  ];

  const body = `${pageHeader({
    from: FROM,
    eyebrow: "Servicios",
    title: 'Estrategia digital <span class="mark-signal">ejecutada, no solo planificada</span>',
    lead: "Además de enseñar Marketing Digital, trabajamos con marcas, profesionales y equipos para diseñar y ejecutar su estrategia. Esa práctica es la que después se convierte en cada curso.",
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Servicios", path: "/servicios/" },
    ],
    actions: `${button({ label: "Quiero más información", href: "/contacto/", from: FROM, size: "lg", icon: "arrow-right" })}
              ${button({ label: "Ver cursos", href: "/cursos/", from: FROM, variant: "outline", size: "lg" })}`,
  })}

    ${section({
      content: `        ${sectionHeading({
        eyebrow: "Qué hacemos",
        title: "Servicios",
        lead: "Podés contratar un servicio puntual o una gestión integral. En los dos casos trabajamos con objetivos definidos y reportes mensuales.",
      })}

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${cards}
        </div>`,
    })}

    ${section({
      tone: "muted",
      content: `        ${sectionHeading({ eyebrow: "Cómo trabajamos", title: "Un proceso simple y revisable" })}
        <ol class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          ${steps
            .map(([step, title, text], index) =>
              reveal(
                `<li class="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
              <span class="font-display text-sm font-bold text-brand-600 tabular-nums">${step}</span>
              <h3 class="mt-4 font-display text-lg font-bold tracking-tight">${title}</h3>
              <p class="mt-2 text-[0.925rem] leading-relaxed text-muted">${text}</p>
            </li>`,
                { delay: index * 90, className: "h-full" },
              ),
            )
            .join("\n          ")}
        </ol>`,
    })}

    <section id="capacitaciones" class="relative scroll-mt-28 overflow-hidden bg-ink text-white">
      <div aria-hidden="true" class="absolute inset-0">
        <div class="absolute inset-0 bg-grid-dark opacity-40"></div>
        <div class="absolute -top-32 right-1/4 size-[30rem] rounded-full bg-brand-600/30 blur-3xl"></div>
      </div>
      <div class="relative container-bs section-y">
        <div class="grid gap-12 lg:grid-cols-12">
          <div class="lg:col-span-6">
            ${reveal(`<span class="inline-flex rounded-full bg-signal-400 px-3.5 py-1.5 text-xs font-semibold text-ink">In company</span>
              <h2 class="mt-6 font-display text-[1.9rem] leading-[1.1] font-bold tracking-tighter text-white sm:text-4xl">Capacitaciones para equipos</h2>
              <p class="mt-5 max-w-lg leading-relaxed text-white/65">
                Diseñamos el programa después de relevar cómo trabaja hoy tu equipo. La formación se dicta sobre los
                casos y materiales de la propia empresa, así lo aprendido se aplica durante la cursada.
              </p>
              <div class="mt-8 flex flex-wrap gap-3">
                ${button({ label: "Conocer el programa", href: "/programas/programa-marketing-con-ia/", from: FROM, size: "lg", variant: "signal", icon: "arrow-right" })}
                ${button({ label: "Pedir una propuesta", href: "/contacto/", from: FROM, size: "lg", variant: "outlineLight" })}
              </div>`)}
          </div>

          <div class="lg:col-span-6">
            ${reveal(
              `<ul class="grid gap-4 sm:grid-cols-2">
                ${inCompany
                  .map(
                    ([glyph, title, text]) =>
                      `<li class="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span class="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-signal-400">${icon(glyph, "size-5")}</span>
                  <h3 class="mt-4 font-display font-semibold tracking-tight text-white">${title}</h3>
                  <p class="mt-1.5 text-sm leading-relaxed text-white/55">${text}</p>
                </li>`,
                  )
                  .join("\n                ")}
              </ul>`,
              { delay: 120 },
            )}
          </div>
        </div>
      </div>
    </section>

    ${section({
      content: `        <div class="flex flex-col items-start gap-6 rounded-[2rem] border border-line bg-white p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div>
            <h2 class="font-display text-2xl leading-tight font-bold tracking-tight sm:text-3xl">Contanos qué necesitás</h2>
            <p class="mt-3 max-w-xl leading-relaxed text-muted">
              Escribinos y coordinamos una primera charla sin costo para entender el proyecto y proponerte un camino.
            </p>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row">
            ${button({ label: "Quiero más información", href: "/contacto/", from: FROM, size: "lg", icon: "arrow-right" })}
            ${button({ label: "Escribir un email", href: `mailto:${site.contact.email}`, from: FROM, variant: "outline", size: "lg", icon: "mail", iconPosition: "start" })}
          </div>
        </div>`,
    })}`;

  return {
    path: FROM,
    title: "Servicios de Marketing Digital para marcas y empresas",
    description:
      "Estrategia digital, redes sociales, Meta Ads, Google Ads, sitios web y ecommerce, email marketing, SEO/SEM y capacitaciones para equipos.",
    body,
    schema: breadcrumbSchema([
      { name: "Inicio", path: "/" },
      { name: "Servicios", path: "/servicios" },
    ]),
  };
}

/* ------------------------------------------------------------------ */
/* Nosotros                                                            */
/* ------------------------------------------------------------------ */

export function nosotrosPage() {
  const FROM = "/nosotros/";

  const beliefs = [
    ["target", "Primero el objetivo", "Ninguna herramienta sirve si no está claro qué se quiere lograr. Todo empieza por ahí."],
    ["wand", "Enseñamos lo que usamos", "Si algo no lo probamos antes en un proyecto real, no entra en un curso."],
    ["list-check", "Cada clase deja algo hecho", "Un plan, un calendario, una campaña o un flujo listo para usar."],
    ["bot", "IA con criterio", "La usamos para acelerar procesos, nunca para reemplazar las decisiones estratégicas."],
  ];

  const stats = site.stats
    .map((stat, index) => {
      const borders = [
        "border-line p-7 lg:p-8",
        index < site.stats.length - 1 ? "border-b" : "",
        index % 2 === 0 ? "sm:border-r" : "",
        index >= site.stats.length - 2 ? "sm:border-b-0" : "",
        "lg:border-r lg:border-b-0 lg:last:border-r-0",
      ]
        .filter(Boolean)
        .join(" ");

      return `<div class="${borders}">
            <p class="font-display text-4xl font-extrabold tracking-tighter lg:text-5xl">
              <span data-countup="${stat.value ?? ""}" data-suffix="${stat.suffix}">${stat.value === null ? "—" : "0"}</span>
            </p>
            <p class="mt-5 font-display text-[0.95rem] font-semibold tracking-tight">${esc(stat.label)}</p>
            <p class="mt-1 text-sm leading-relaxed text-muted">${esc(stat.hint)}</p>
          </div>`;
    })
    .join("\n          ");

  const body = `${pageHeader({
    from: FROM,
    eyebrow: "Sobre nosotros",
    title: 'Marketing Digital explicado desde la <span class="mark-signal">experiencia real</span>',
    lead: "Brand Solutions trabaja todos los días desarrollando estrategias, campañas, contenidos, sitios web y acciones digitales para marcas, profesionales y empresas. Esa experiencia se transforma en cada capacitación.",
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Sobre nosotros", path: "/nosotros/" },
    ],
  })}

    ${section({
      className: "pt-0",
      containerClassName: "pt-0",
      content: `        <div class="grid overflow-hidden rounded-3xl border border-line bg-white sm:grid-cols-2 lg:grid-cols-4">
          ${stats}
        </div>`,
    })}

    ${section({
      tone: "muted",
      content: `        <div class="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-5">
            ${sectionHeading({
              eyebrow: "Qué somos",
              title: "Una agencia que enseña lo que hace",
              lead: "No somos una academia tradicional ni un canal de tutoriales.",
            })}
          </div>
          <div class="lg:col-span-7">
            <div class="flex flex-col gap-5 text-[1.02rem] leading-relaxed text-ink-3">
              <p>
                Brand Solutions nació trabajando con marcas: armando estrategias, gestionando campañas, produciendo
                contenidos y desarrollando sitios web. Con el tiempo, muchas de las personas con las que trabajábamos
                empezaron a pedirnos lo mismo: <span class="font-medium text-ink">enseñales a hacerlo</span>.
              </p>
              <p>
                Así aparecieron las capacitaciones. Las armamos con el mismo criterio con el que trabajamos en los
                proyectos: entender el objetivo, elegir las herramientas correctas, ejecutar y medir. Sin teoría suelta
                y sin promesas exageradas.
              </p>
              <p>
                Hoy convivimos en dos frentes. Seguimos haciendo el trabajo para marcas y empresas, y todo lo que
                aprendemos ahí vuelve a las clases. Por eso los contenidos se actualizan seguido: cuando algo cambia en
                un proyecto real, cambia también en el curso.
              </p>
            </div>
          </div>
        </div>`,
    })}

    ${section({
      content: `        ${sectionHeading({ eyebrow: "Cómo pensamos", title: "Cuatro cosas que sostenemos en cada formación" })}
        <div class="mt-12 grid gap-5 sm:grid-cols-2">
          ${beliefs
            .map(([glyph, title, text], index) =>
              reveal(
                `<article class="flex h-full gap-5 rounded-3xl border border-line bg-white p-7">
              <span class="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">${icon(glyph, "size-5.5")}</span>
              <div>
                <h3 class="font-display text-lg font-bold tracking-tight">${title}</h3>
                <p class="mt-2 text-[0.95rem] leading-relaxed text-muted">${text}</p>
              </div>
            </article>`,
                { delay: index * 80, className: "h-full" },
              ),
            )
            .join("\n          ")}
        </div>`,
    })}

    ${section({
      tone: "muted",
      content: `        <div class="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-6">
            ${sectionHeading({
              eyebrow: "La plataforma",
              title: "Todo en un solo lugar",
              lead: "Las clases, los materiales, las plantillas y el certificado están dentro de la misma plataforma, disponibles desde cualquier dispositivo.",
            })}
            <div class="mt-8">
              ${button({ label: "Ver cursos", href: "/cursos/", from: FROM, size: "lg", icon: "arrow-right" })}
            </div>
          </div>
          <div class="lg:col-span-6">
            ${reveal(platformMockup("w-full"), { delay: 120 })}
          </div>
        </div>`,
    })}

    ${section({
      content: `        ${sectionHeading({ eyebrow: "Equipo", title: "Quiénes dictan las formaciones" })}
        <div class="mt-12 grid gap-6 sm:grid-cols-2">
          ${instructors
            .map((instructor, index) =>
              reveal(
                `<article class="flex h-full flex-col rounded-3xl border border-line bg-white p-7 sm:p-8">
              <div class="flex items-center gap-4">
                <span class="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-50 font-display font-bold text-brand-700" aria-hidden="true">${esc(instructor.initials)}</span>
                <div>
                  <h3 class="font-display text-lg font-bold tracking-tight">${esc(instructor.name)}</h3>
                  <p class="text-sm text-brand-700">${esc(instructor.role)}</p>
                </div>
              </div>
              <p class="mt-5 flex-1 text-[0.95rem] leading-relaxed text-ink-3">${esc(instructor.bio)}</p>
              <ul class="mt-5 flex flex-col gap-2 border-t border-line pt-5">
                ${instructor.highlights
                  .map(
                    (h) =>
                      `<li class="flex items-start gap-2.5 text-sm text-muted">${icon("check", "mt-0.5 size-4 shrink-0 text-signal-600")}${esc(h)}</li>`,
                  )
                  .join("\n                ")}
              </ul>
            </article>`,
                { delay: index * 90, className: "h-full" },
              ),
            )
            .join("\n          ")}
        </div>`,
    })}

    <section class="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" class="absolute inset-0">
        <div class="absolute inset-0 bg-grid-dark opacity-40"></div>
        <div class="absolute top-1/2 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/30 blur-3xl"></div>
      </div>
      <div class="relative container-bs section-y">
        <div class="mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 class="font-display text-[1.9rem] leading-[1.08] font-bold tracking-tighter text-white sm:text-4xl">
            ¿Empezamos por la formación o por el proyecto?
          </h2>
          <p class="mt-5 leading-relaxed text-white/65">
            Podés capacitarte con nosotros o trabajar con nosotros. Muchas veces, lo mejor es combinar las dos cosas.
          </p>
          <div class="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            ${button({ label: "Quiero aprender", href: "/cursos/", from: FROM, size: "lg", variant: "signal", icon: "arrow-right" })}
            ${button({ label: "Conocer los servicios", href: "/servicios/", from: FROM, size: "lg", variant: "outlineLight" })}
          </div>
        </div>
      </div>
    </section>`;

  return {
    path: FROM,
    title: "Sobre Brand Solutions",
    description:
      "Brand Solutions es un espacio de Marketing Digital e Inteligencia Artificial: trabajamos con marcas y empresas, y esa experiencia se convierte en cada capacitación.",
    body,
    schema: breadcrumbSchema([
      { name: "Inicio", path: "/" },
      { name: "Sobre nosotros", path: "/nosotros" },
    ]),
  };
}

/* ------------------------------------------------------------------ */
/* Blog                                                                */
/* ------------------------------------------------------------------ */

export function blogPage() {
  const FROM = "/blog/";
  const all = sortedPosts();
  const filters = ["Todos", ...blogTopics];

  const chips = filters
    .map(
      (filter, index) =>
        `<button
              type="button"
              data-filter="${filter === "Todos" ? "todos" : esc(filter)}"
              aria-pressed="${index === 0}"
              class="shrink-0 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink-3 transition-all duration-200 hover:border-line-2 hover:bg-paper-2"
            >${esc(filter)}</button>`,
    )
    .join("\n            ");

  const cards = all
    .map((post) => `<div data-card-wrapper class="h-full">${postCard(post, FROM)}</div>`)
    .join("\n            ");

  const body = `${pageHeader({
    from: FROM,
    eyebrow: "Blog",
    title: 'Ideas, herramientas y <span class="mark-signal">tendencias</span>',
    lead: "Lo que vamos aprendiendo en los proyectos, explicado para que puedas aplicarlo en el tuyo.",
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog/" },
    ],
  })}

    ${section({
      content: `        <div data-catalog="category" data-singular="artículo" data-plural="artículos">
          <div class="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
            ${chips}
          </div>

          <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            ${cards}
          </div>

          <p data-empty hidden class="mt-12 flex items-center gap-3 rounded-2xl border border-dashed border-line-2 p-8 text-muted">
            ${icon("search", "size-5")} Todavía no publicamos artículos en esta categoría.
          </p>
        </div>`,
    })}

    ${newsletterSection("blog")}`;

  return {
    path: FROM,
    title: "Blog de Marketing Digital e Inteligencia Artificial",
    description:
      "Ideas, herramientas y tendencias de marketing digital: estrategia, inteligencia artificial, redes sociales, publicidad, ecommerce y analítica.",
    body,
    schema: [
      breadcrumbSchema([
        { name: "Inicio", path: "/" },
        { name: "Blog", path: "/blog" },
      ]),
      itemListSchema(
        "Artículos de Brand Solutions",
        posts.map((post) => `/blog/${post.slug}`),
      ),
    ],
  };
}

/* ------------------------------------------------------------------ */

function renderBlock(block) {
  switch (block.type) {
    case "h2":
      return `<h2 class="mt-12 font-display text-2xl font-bold tracking-tight sm:text-[1.75rem]">${esc(block.text)}</h2>`;
    case "h3":
      return `<h3 class="mt-8 font-display text-lg font-bold tracking-tight sm:text-xl">${esc(block.text)}</h3>`;
    case "p":
      return `<p class="mt-5 text-[1.05rem] leading-[1.75] text-ink-3">${esc(block.text)}</p>`;
    case "ul":
      return `<ul class="mt-6 flex flex-col gap-3">${block.items
        .map(
          (item) =>
            `<li class="flex items-start gap-3 text-[1.02rem] leading-relaxed text-ink-3">
            <span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true"></span>
            ${esc(item)}
          </li>`,
        )
        .join("")}</ul>`;
    case "ol":
      return `<ol class="mt-6 flex flex-col gap-3">${block.items
        .map(
          (item, index) =>
            `<li class="flex items-start gap-3.5 text-[1.02rem] leading-relaxed text-ink-3">
            <span class="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-50 font-display text-xs font-bold text-brand-700">${index + 1}</span>
            ${esc(item)}
          </li>`,
        )
        .join("")}</ol>`;
    case "quote":
      return `<blockquote class="mt-9 border-l-4 border-signal-400 pl-6 font-display text-xl leading-snug font-semibold tracking-tight text-ink">${esc(block.text)}</blockquote>`;
    case "callout":
      return `<aside class="mt-9 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
          <p class="flex items-center gap-2 font-display text-sm font-bold tracking-tight text-brand-700">${icon("bulb", "size-4")}${esc(block.title)}</p>
          <p class="mt-2 leading-relaxed text-ink-3">${esc(block.text)}</p>
        </aside>`;
    default:
      return "";
  }
}

export function articuloPage(post) {
  const FROM = `/blog/${post.slug}/`;
  const a = accentMap[post.accent];
  const related = getRelatedPosts(post);

  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: post.title, path: FROM },
  ];

  const body = `<article>
      <header class="border-b border-line bg-paper-2">
        <div class="container-bs pt-8 pb-12 lg:pt-10 lg:pb-16">
          ${breadcrumbs(crumbs, FROM)}
          <div class="mx-auto max-w-3xl">
            <span class="inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold ${a.solid}">${esc(post.category)}</span>
            <h1 class="mt-5 font-display text-[2rem] leading-[1.08] font-extrabold tracking-tighter sm:text-[2.75rem]">${esc(post.title)}</h1>
            <p class="mt-5 text-lg leading-relaxed text-muted">${esc(post.excerpt)}</p>

            <div class="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span class="inline-flex items-center gap-2">${icon("pen", "size-4")}${esc(post.author)}</span>
              <time datetime="${post.date}" class="inline-flex items-center gap-2">${icon("calendar", "size-4")}${formatDate(post.date)}</time>
              <span class="inline-flex items-center gap-2">${icon("clock", "size-4")}${esc(post.readingTime)} de lectura</span>
            </div>
          </div>
        </div>
      </header>

      <div class="container-bs">
        <div class="mx-auto max-w-3xl">
          <div class="-mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-line shadow-card sm:-mt-10">
            ${cover(post.visual, post.accent, { decorative: true })}
          </div>

          <div class="py-12 lg:py-16">
            ${post.body.map(renderBlock).join("\n            ")}
          </div>

          <div class="mb-16 rounded-3xl bg-ink p-7 text-white sm:p-9">
            <p class="font-display text-xl leading-snug font-bold tracking-tight text-white">¿Te sirvió este artículo?</p>
            <p class="mt-2.5 leading-relaxed text-white/60">
              Cada tanto mandamos una idea de marketing que puedas aplicar. Nada más.
            </p>
            <div class="mt-6">${newsletterForm({ tone: "dark", suffix: `nl-${post.slug}` })}</div>
          </div>
        </div>
      </div>
    </article>

    ${
      related.length
        ? section({
            tone: "muted",
            content: `        ${sectionHeading({
              eyebrow: "Seguí leyendo",
              title: "Otros artículos",
              actions: button({
                label: "Ver todos los artículos",
                href: "/blog/",
                from: FROM,
                variant: "outline",
                icon: "arrow-right",
                className: "hidden lg:inline-flex",
              }),
            })}
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${related
            .map((item, index) => reveal(postCard(item, FROM), { delay: index * 90, className: "h-full" }))
            .join("\n          ")}
        </div>`,
          })
        : ""
    }`;

  return {
    path: FROM,
    title: post.title,
    description: post.excerpt,
    body,
    ogType: "article",
    ogImage: `/assets/img/og-blog-${post.slug}.png`,
    schema: [articleSchema(post), breadcrumbSchema(crumbs)],
  };
}

/* ------------------------------------------------------------------ */
/* Contacto                                                            */
/* ------------------------------------------------------------------ */

export function contactoPage() {
  const FROM = "/contacto/";

  const references = [
    ...courses.map((course) => ({ slug: course.slug, title: course.title, kind: "curso" })),
    ...programs.map((program) => ({ slug: program.slug, title: program.title, kind: "programa" })),
  ];

  const body = `${pageHeader({
    from: FROM,
    eyebrow: "Contacto",
    title: 'Contanos qué <span class="mark-signal">necesitás resolver</span>',
    lead: "Respondemos consultas sobre cursos, programas, capacitaciones para equipos y servicios. Si nos contás en qué estás trabajando, la respuesta va a ser mucho más útil.",
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Contacto", path: "/contacto/" },
    ],
  })}

    ${section({
      className: "pt-0",
      containerClassName: "pt-0",
      content: `        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-7">
            <div class="rounded-3xl border border-line bg-white p-7 sm:p-9">
              <p data-selected-notice hidden class="mb-6 flex items-start gap-2.5 rounded-2xl bg-brand-50 p-4 text-sm text-brand-700">
                ${icon("check-circle", "mt-0.5 size-4 shrink-0")}
                <span>Consulta sobre <strong data-selected-title class="font-semibold"></strong></span>
              </p>
              ${contactForm()}
            </div>
          </div>

          <aside class="lg:col-span-5">
            <div class="flex flex-col gap-5">
              <div class="rounded-3xl border border-line bg-white p-7">
                <h2 class="font-display text-lg font-bold tracking-tight">Otras formas de escribirnos</h2>
                <ul class="mt-5 flex flex-col gap-4 text-sm">
                  <li>
                    <a href="mailto:${site.contact.email}" class="group flex items-center gap-3 text-ink-2 transition-colors hover:text-brand-700">
                      <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-paper-2 text-ink-3 transition-colors group-hover:bg-brand-50 group-hover:text-brand-700">${icon("mail", "size-5")}</span>
                      <span>
                        <span class="block text-xs text-muted-2">Email</span>
                        <span class="font-medium">${esc(site.contact.email)}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="${whatsappLink("Hola, quiero hacer una consulta sobre las formaciones de Brand Solutions.")}" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-3 text-ink-2 transition-colors hover:text-brand-700">
                      <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-paper-2 text-ink-3 transition-colors group-hover:bg-signal-100 group-hover:text-signal-600">${icon("whatsapp", "size-5")}</span>
                      <span>
                        <span class="block text-xs text-muted-2">WhatsApp</span>
                        <span class="font-medium">${esc(site.contact.whatsappDisplay)}</span>
                      </span>
                    </a>
                  </li>
                  <li class="flex items-center gap-3 text-ink-2">
                    <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-paper-2 text-ink-3">${icon("clock", "size-5")}</span>
                    <span>
                      <span class="block text-xs text-muted-2">Horario de atención</span>
                      <span class="font-medium">${esc(site.contact.schedule)}</span>
                    </span>
                  </li>
                  <li class="flex items-center gap-3 text-ink-2">
                    <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-paper-2 text-ink-3">${icon("pin", "size-5")}</span>
                    <span>
                      <span class="block text-xs text-muted-2">Dónde estamos</span>
                      <span class="font-medium">${esc(site.contact.city)}, ${esc(site.contact.country)}</span>
                    </span>
                  </li>
                </ul>
              </div>

              <div class="rounded-3xl bg-ink p-7 text-white">
                <h2 class="font-display text-lg font-bold tracking-tight">¿Tenés una duda rápida?</h2>
                <p class="mt-2 text-sm leading-relaxed text-white/60">
                  Muchas consultas ya están resueltas en las preguntas frecuentes: formas de pago, acceso, certificados
                  y devoluciones.
                </p>
                <a href="${rel(FROM, "/preguntas-frecuentes/")}" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-400 transition-colors hover:text-signal-300">
                  Ver preguntas frecuentes ${icon("arrow-right", "size-4")}
                </a>
              </div>

              <div class="rounded-3xl border border-line bg-paper-2 p-7">
                <p class="text-sm leading-relaxed text-muted">
                  Los datos de contacto de esta página se editan en
                  <code class="rounded bg-white px-1.5 py-0.5 font-mono text-xs">data/site.ts</code>.
                </p>
              </div>
            </div>
          </aside>
        </div>

        <script type="application/json" id="referencias-contacto">${JSON.stringify(references)}</script>`,
    })}`;

  return {
    path: FROM,
    title: "Contacto",
    description:
      "Escribinos para consultar por un curso, un programa, una capacitación para tu equipo o los servicios de marketing digital de Brand Solutions.",
    body,
    schema: breadcrumbSchema([
      { name: "Inicio", path: "/" },
      { name: "Contacto", path: "/contacto" },
    ]),
  };
}

/* ------------------------------------------------------------------ */
/* Acceso                                                              */
/* ------------------------------------------------------------------ */

export function loginPage() {
  const FROM = "/login/";
  const input =
    "h-12 w-full rounded-xl border border-line-2 bg-paper-2 px-4 text-[0.95rem] text-muted-2 placeholder:text-muted-2/70";

  const body = `<section class="relative overflow-hidden bg-paper">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0">
        <div class="absolute inset-0 bg-grid opacity-50"></div>
        <div class="absolute -top-40 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-brand-100/70 blur-3xl"></div>
      </div>

      <div class="relative container-bs flex min-h-[calc(100dvh-16rem)] items-center justify-center py-16 lg:py-24">
        <div class="w-full max-w-md">
          <div class="rounded-3xl border border-line bg-white p-8 shadow-card sm:p-10">
            ${logoMark("size-11")}
            <h1 class="mt-6 font-display text-[1.75rem] leading-tight font-extrabold tracking-tighter">Entrá a tu cuenta</h1>
            <p class="mt-2.5 text-[0.95rem] leading-relaxed text-muted">
              Desde acá vas a poder acceder a tus cursos, materiales descargables y certificados.
            </p>

            <!--
              Formulario preparado para conectar con la plataforma educativa.
              Al integrar el sistema de cursos, reemplazá este bloque por el
              flujo real de inicio de sesión.
            -->
            <form class="mt-8 flex flex-col gap-4" aria-describedby="login-aviso">
              <div class="flex flex-col gap-1.5">
                <label for="login-email" class="text-sm font-medium text-ink-2">Email</label>
                <input id="login-email" type="email" name="email" autocomplete="email" placeholder="tu@email.com" disabled class="${input}" />
              </div>
              <div class="flex flex-col gap-1.5">
                <label for="login-password" class="text-sm font-medium text-ink-2">Contraseña</label>
                <input id="login-password" type="password" name="password" autocomplete="current-password" placeholder="••••••••" disabled class="${input}" />
              </div>

              ${button({ label: "Iniciar sesión", size: "lg", fullWidth: true, icon: "lock", iconPosition: "start", disabled: true })}
            </form>

            <p id="login-aviso" class="mt-6 flex items-start gap-2.5 rounded-2xl border border-dashed border-line-2 bg-paper-2/70 p-4 text-xs leading-relaxed text-muted">
              ${icon("bulb", "mt-0.5 size-4 shrink-0 text-brand-600")}
              <span>
                El acceso a la plataforma todavía no está habilitado. La pantalla queda lista para conectarse con el
                sistema de cursos cuando se integre.
              </span>
            </p>
          </div>

          <p class="mt-6 text-center text-sm text-muted">
            ¿Todavía no tenés cursos?
            <a href="${rel(FROM, "/cursos/")}" class="font-semibold text-brand-700 underline underline-offset-4">Ver el catálogo</a>
          </p>
        </div>
      </div>
    </section>`;

  return {
    path: FROM,
    title: "Iniciar sesión",
    description: "Accedé a tus cursos, materiales y certificados de Brand Solutions.",
    body,
    noIndex: true,
  };
}

/* ------------------------------------------------------------------ */
/* Ayuda y legales                                                     */
/* ------------------------------------------------------------------ */

export function faqPage() {
  const FROM = "/preguntas-frecuentes/";

  const body = `${pageHeader({
    from: FROM,
    eyebrow: "Ayuda",
    title: "Preguntas frecuentes",
    lead: "Las consultas que más nos hacen sobre cursos, acceso, certificados y pagos.",
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Preguntas frecuentes", path: FROM },
    ],
  })}

    ${section({
      className: "pt-0",
      containerClassName: "pt-0",
      content: `        <div class="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-8">
            ${accordion(
              generalFaqs.map((faq) => ({ title: faq.q, content: `<p>${esc(faq.a)}</p>` })),
              { defaultOpen: 0 },
            )}
          </div>
          <aside class="lg:col-span-4">
            <div class="rounded-3xl border border-line bg-white p-7 lg:sticky lg:top-24">
              <h2 class="font-display text-lg font-bold tracking-tight">¿No encontraste tu respuesta?</h2>
              <p class="mt-2.5 text-sm leading-relaxed text-muted">
                Escribinos y te respondemos dentro de las 48 horas hábiles.
              </p>
              ${button({ label: "Escribinos", href: "/contacto/", from: FROM, className: "mt-5", fullWidth: true, icon: "arrow-right" })}
            </div>
          </aside>
        </div>`,
    })}`;

  return {
    path: FROM,
    title: "Preguntas frecuentes",
    description:
      "Dudas habituales sobre los cursos de Brand Solutions: modalidad, acceso, certificados, formas de pago, facturación y devoluciones.",
    body,
    schema: [
      faqSchema(generalFaqs),
      breadcrumbSchema([
        { name: "Inicio", path: "/" },
        { name: "Preguntas frecuentes", path: "/preguntas-frecuentes" },
      ]),
    ],
  };
}

export function comoComprarPage() {
  const FROM = "/como-comprar/";
  const steps = [
    ["search", "1. Elegí la formación", "Revisá el temario, la duración y para quién está pensado cada curso. Si tenés dudas, escribinos antes de comprar."],
    ["bag", "2. Completá la compra", "Desde la página del curso vas al checkout, cargás tus datos y elegís el medio de pago que prefieras."],
    ["mail", "3. Recibí el acceso", "Una vez confirmado el pago te llega un email con los datos para entrar a la plataforma."],
    ["play", "4. Empezá cuando quieras", "Las clases quedan disponibles sin vencimiento. Avanzá a tu ritmo y descargá los materiales."],
  ];

  const body = `${pageHeader({
    from: FROM,
    eyebrow: "Ayuda",
    title: "Cómo comprar",
    lead: "Cuatro pasos para inscribirte y empezar a cursar.",
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Cómo comprar", path: FROM },
    ],
  })}

    ${section({
      className: "pt-0",
      containerClassName: "pt-0",
      content: `        <ol class="grid gap-5 sm:grid-cols-2">
          ${steps
            .map(([glyph, title, text], index) =>
              reveal(
                `<li class="flex h-full gap-5 rounded-3xl border border-line bg-white p-7">
              <span class="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">${icon(glyph, "size-5.5")}</span>
              <div>
                <h2 class="font-display text-lg font-bold tracking-tight">${title}</h2>
                <p class="mt-2 text-[0.95rem] leading-relaxed text-muted">${text}</p>
              </div>
            </li>`,
                { delay: index * 80, className: "h-full" },
              ),
            )
            .join("\n          ")}
        </ol>`,
    })}

    ${section({
      tone: "muted",
      content: `        ${prose(`
          <h2>Medios de pago</h2>
          <p>
            Aceptamos tarjeta de crédito y débito, transferencia bancaria y los medios habilitados por la plataforma de
            pago. Las opciones disponibles, junto con las cuotas, se muestran al momento de completar la compra.
          </p>

          <h2>Facturación</h2>
          <p>
            Emitimos comprobante por todas las operaciones. Si necesitás factura a nombre de una empresa, indicalo
            durante la compra o escribinos con los datos fiscales y la emitimos.
          </p>

          <h2>Compras para equipos</h2>
          <p>
            Para inscribir a varias personas de una misma organización tenemos condiciones especiales y una única
            facturación. <a href="${rel(FROM, "/contacto/")}">Escribinos</a> con la cantidad de participantes y te
            enviamos una propuesta.
          </p>

          <h2>Devoluciones</h2>
          <p>
            Si dentro de los primeros 7 días considerás que el curso no se ajusta a lo que buscabas, escribinos y
            resolvemos la devolución. El detalle está en los
            <a href="${rel(FROM, "/terminos-y-condiciones/")}">términos y condiciones</a>.
          </p>

          <h2>Problemas con el acceso</h2>
          <p>
            Si pagaste y no recibiste el email de acceso, revisá la carpeta de correo no deseado. Si aún así no aparece,
            escribinos indicando el email con el que hiciste la compra y lo resolvemos.
          </p>`)}

        <div class="mt-10">
          ${button({ label: "Ver cursos", href: "/cursos/", from: FROM, size: "lg", icon: "arrow-right" })}
        </div>`,
    })}`;

  return {
    path: FROM,
    title: "Cómo comprar",
    description:
      "Los pasos para inscribirte en un curso de Brand Solutions: elegir la formación, completar el pago y acceder a las clases.",
    body,
    schema: breadcrumbSchema([
      { name: "Inicio", path: "/" },
      { name: "Cómo comprar", path: "/como-comprar" },
    ]),
  };
}

export function terminosPage() {
  const FROM = "/terminos-y-condiciones/";

  const body = `${pageHeader({
    from: FROM,
    eyebrow: "Legales",
    title: "Términos y condiciones",
    lead: "Condiciones de uso del sitio y de contratación de las formaciones y recursos de Brand Solutions.",
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Términos y condiciones", path: FROM },
    ],
  })}

    ${section({
      className: "pt-0",
      containerClassName: "pt-0",
      content: `        ${legalNotice(
        "Este texto es una base editable. Antes de publicar el sitio, revisalo con un asesor legal para adaptarlo a la normativa vigente y a la operatoria real de la empresa.",
      )}

        ${prose(`
          <h2>1. Aceptación</h2>
          <p>
            El uso de este sitio implica la aceptación de estos términos. Si no estás de acuerdo con alguno de sus
            puntos, te pedimos que no utilices el sitio ni contrates los servicios ofrecidos.
          </p>

          <h2>2. Servicios ofrecidos</h2>
          <p>
            ${site.name} ofrece formaciones online, programas, recursos digitales descargables y servicios profesionales
            de marketing digital. Las características, la duración y el precio de cada producto se detallan en su
            página correspondiente.
          </p>

          <h2>3. Inscripción y pago</h2>
          <ul>
            <li>La inscripción se confirma una vez acreditado el pago.</li>
            <li>Los precios se expresan en la moneda indicada en el sitio e incluyen los impuestos aplicables.</li>
            <li>Los medios de pago disponibles se muestran al momento de finalizar la compra.</li>
            <li>Emitimos comprobante por todas las operaciones.</li>
          </ul>

          <h2>4. Acceso a los contenidos</h2>
          <p>
            El acceso a los cursos es personal e intransferible. Salvo indicación en contrario, el acceso no tiene
            fecha de vencimiento e incluye las actualizaciones que publiquemos sobre esa formación. No está permitido
            compartir credenciales de acceso con terceros.
          </p>

          <h2>5. Propiedad intelectual</h2>
          <p>
            Todos los contenidos, materiales, plantillas, textos y elementos gráficos son propiedad de ${site.name} o de
            sus respectivos titulares. Se autoriza su uso personal y profesional por parte de quien contrató la
            formación, y no se permite su reproducción, distribución, reventa ni difusión pública sin autorización
            previa por escrito.
          </p>

          <h2>6. Devoluciones</h2>
          <p>
            Si dentro de los 7 días corridos posteriores a la compra considerás que la formación no se ajusta a lo
            ofrecido, podés solicitar la devolución escribiendo a
            <a href="mailto:${site.contact.email}">${site.contact.email}</a>. La devolución se procesa por el mismo
            medio de pago utilizado.
          </p>

          <h2>7. Certificados</h2>
          <p>
            Los certificados emitidos acreditan la participación en la formación y el detalle de los contenidos
            trabajados. No constituyen títulos oficiales ni habilitaciones profesionales.
          </p>

          <h2>8. Modificaciones del contenido</h2>
          <p>
            Podemos actualizar, ampliar o reorganizar los contenidos de una formación para mantenerlos vigentes. Estas
            actualizaciones quedan incluidas para quienes ya hayan comprado el curso.
          </p>

          <h2>9. Responsabilidad</h2>
          <p>
            Los contenidos tienen finalidad formativa. Los resultados de su aplicación dependen de múltiples factores
            propios de cada proyecto, por lo que ${site.name} no garantiza resultados comerciales específicos.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Para cualquier consulta sobre estos términos podés escribirnos a
            <a href="mailto:${site.contact.email}">${site.contact.email}</a>.
          </p>`)}`,
    })}`;

  return {
    path: FROM,
    title: "Términos y condiciones",
    description:
      "Condiciones de uso del sitio, de compra de cursos y recursos digitales, acceso a los contenidos, propiedad intelectual y devoluciones.",
    body,
    schema: breadcrumbSchema([
      { name: "Inicio", path: "/" },
      { name: "Términos y condiciones", path: "/terminos-y-condiciones" },
    ]),
  };
}

export function privacidadPage() {
  const FROM = "/politica-de-privacidad/";

  const body = `${pageHeader({
    from: FROM,
    eyebrow: "Legales",
    title: "Política de privacidad",
    lead: "Qué datos recolectamos, con qué finalidad los usamos y cómo podés pedirnos que los modifiquemos o eliminemos.",
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Política de privacidad", path: FROM },
    ],
  })}

    ${section({
      className: "pt-0",
      containerClassName: "pt-0",
      content: `        ${legalNotice(
        "Este texto es una base editable. Ajustalo a las herramientas que uses realmente (analítica, email marketing, plataforma de pagos) y revisalo con un asesor legal antes de publicar.",
      )}

        ${prose(`
          <h2>1. Responsable del tratamiento</h2>
          <p>
            ${site.name}, con domicilio en ${site.contact.city}, ${site.contact.country}, es responsable del tratamiento
            de los datos personales recolectados a través de este sitio. Podés contactarnos en
            <a href="mailto:${site.contact.email}">${site.contact.email}</a>.
          </p>

          <h2>2. Qué datos recolectamos</h2>
          <ul>
            <li><strong>Datos de contacto:</strong> nombre, email y, opcionalmente, teléfono, cuando completás un formulario del sitio.</li>
            <li><strong>Datos de la consulta:</strong> el mensaje que nos escribís y el tema seleccionado.</li>
            <li><strong>Datos de compra:</strong> los necesarios para procesar la inscripción y emitir el comprobante.</li>
            <li><strong>Datos de navegación:</strong> información técnica anónima o agregada sobre el uso del sitio.</li>
          </ul>

          <h2>3. Para qué los usamos</h2>
          <ul>
            <li>Responder consultas y brindar soporte.</li>
            <li>Entregar los materiales y accesos que solicitaste.</li>
            <li>Enviarte novedades y contenidos, siempre que lo hayas aceptado.</li>
            <li>Gestionar la inscripción, el pago y la facturación.</li>
            <li>Mejorar el sitio y los contenidos a partir de información agregada.</li>
          </ul>

          <h2>4. Comunicaciones comerciales</h2>
          <p>
            Solo enviamos comunicaciones comerciales a quienes lo aceptaron expresamente. Cada email incluye un enlace
            de baja y podés dejar de recibirlos en cualquier momento, sin que eso afecte tu acceso a los cursos ya
            adquiridos.
          </p>

          <h2>5. Con quién compartimos los datos</h2>
          <p>
            No vendemos ni cedemos datos personales. Compartimos únicamente lo necesario con los proveedores que nos
            permiten operar: plataforma de email marketing, procesador de pagos, servicio de hosting y herramientas de
            analítica. Cada uno trata los datos según sus propias políticas.
          </p>

          <h2>6. Conservación</h2>
          <p>
            Conservamos los datos mientras exista una relación con vos o mientras sea necesario para cumplir
            obligaciones legales y fiscales. Después de ese plazo, los eliminamos o anonimizamos.
          </p>

          <h2>7. Tus derechos</h2>
          <p>
            Podés solicitar el acceso, la rectificación, la actualización o la supresión de tus datos escribiéndonos a
            <a href="mailto:${site.contact.email}">${site.contact.email}</a>. Vamos a responder tu pedido dentro de los
            plazos que fija la normativa aplicable.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y, si están activas, cookies de
            analítica para entender de forma agregada cómo se navega. Podés bloquearlas desde la configuración de tu
            navegador.
          </p>

          <h2>9. Seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger la información. Ningún sistema es
            infalible, pero trabajamos para minimizar los riesgos y actuar rápido ante cualquier incidente.
          </p>

          <h2>10. Cambios en esta política</h2>
          <p>
            Si modificamos esta política, vamos a publicar la versión actualizada en esta misma página. Te recomendamos
            revisarla cada tanto.
          </p>`)}`,
    })}`;

  return {
    path: FROM,
    title: "Política de privacidad",
    description:
      "Cómo tratamos los datos personales que nos dejás en los formularios del sitio: qué recolectamos, para qué los usamos y cómo ejercer tus derechos.",
    body,
    schema: breadcrumbSchema([
      { name: "Inicio", path: "/" },
      { name: "Política de privacidad", path: "/politica-de-privacidad" },
    ]),
  };
}

/* ------------------------------------------------------------------ */
/* 404                                                                  */
/* ------------------------------------------------------------------ */

export function notFoundPage() {
  const FROM = "/";
  const links = [
    ["/recursos/", "Recursos"],
    ["/blog/", "Blog"],
    ["/servicios/", "Servicios"],
    ["/contacto/", "Contacto"],
  ];

  const body = `<section class="relative overflow-hidden bg-paper">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0">
        <div class="absolute inset-0 bg-grid opacity-50"></div>
        <div class="absolute -top-40 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-brand-100/70 blur-3xl"></div>
      </div>

      <div class="relative container-bs flex min-h-[calc(100dvh-18rem)] flex-col items-center justify-center py-20 text-center">
        <p class="font-display text-[5rem] leading-none font-extrabold tracking-tighter text-brand-600 sm:text-[7rem]">404</p>
        <h1 class="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">No encontramos esta página</h1>
        <p class="mt-4 max-w-md leading-relaxed text-muted">
          Puede que el enlace haya cambiado o que la página ya no exista. Estas son algunas opciones para seguir.
        </p>

        <div class="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          ${button({ label: "Ver cursos", href: "/cursos/", from: FROM, size: "lg", icon: "arrow-right" })}
          ${button({ label: "Volver al inicio", href: "/", from: FROM, size: "lg", variant: "outline", icon: "arrow-left", iconPosition: "start" })}
        </div>

        <ul class="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
          ${links
            .map(
              ([href, label]) =>
                `<li><a href="${rel(FROM, href)}" class="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink">${icon("arrow-up-right", "size-3.5")}${label}</a></li>`,
            )
            .join("\n          ")}
        </ul>
      </div>
    </section>`;

  return {
    path: "/",
    file: "404.html",
    title: "Página no encontrada",
    description: "La página que buscás no existe o cambió de dirección.",
    body,
    noIndex: true,
  };
}
