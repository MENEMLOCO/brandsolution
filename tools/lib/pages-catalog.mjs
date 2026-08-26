/** Páginas de cursos, programas y recursos. */
import { courses, courseCategories, getRelatedCourses } from "../../data/courses.ts";
import { programs } from "../../data/programs.ts";
import { resources } from "../../data/resources.ts";
import { getInstructor } from "../../data/instructors.ts";
import { testimonials } from "../../data/testimonials.ts";
import { generalFaqs } from "../../data/faqs.ts";
import { site, formatPrice } from "../../data/site.ts";
import { accent as accentMap } from "../../lib/accents.ts";
import {
  breadcrumbSchema,
  courseSchema,
  programSchema,
  resourceSchema,
  faqSchema,
  itemListSchema,
} from "../../lib/schema.ts";

import { esc, rel, formatDate } from "./util.mjs";
import { icon, cover, certificateMockup, stars } from "./render.mjs";
import {
  button,
  eyebrow,
  sectionHeading,
  reveal,
  section,
  accordion,
  breadcrumbs,
  pageHeader,
  courseCard,
  resourceCard,
} from "./ui.mjs";
import { leadMagnetForm } from "./forms.mjs";
import { leadMagnetSection } from "./home.mjs";

/* ------------------------------------------------------------------ */
/* Catálogo de cursos                                                  */
/* ------------------------------------------------------------------ */

export function cursosPage() {
  const FROM = "/cursos/";
  const filters = ["Todos", ...courseCategories];

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

  const cards = courses
    .map((course) => `<div data-card-wrapper class="h-full">${courseCard(course, FROM)}</div>`)
    .join("\n            ");

  const highlights = [
    ["monitor", "100% online", "Clases grabadas para ver cuando puedas."],
    ["infinity", "Acceso sin vencimiento", "Incluye las actualizaciones futuras."],
    ["download", "Material descargable", "Plantillas y recursos listos para usar."],
    ["award", "Certificado", "Al completar cada formación."],
  ];

  const body = `${pageHeader({
    from: FROM,
    eyebrow: "Cursos",
    title: 'Formaciones para <span class="mark-signal">aplicar desde el primer día</span>',
    lead: "Cada curso resuelve una parte concreta del trabajo digital: estrategia, contenidos, publicidad, inteligencia artificial y automatización. Elegí por dónde empezar.",
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Cursos", path: "/cursos/" },
    ],
  })}

    <section class="border-y border-line bg-paper-2">
      <div class="container-bs py-8">
        <ul class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          ${highlights
            .map(
              ([glyph, title, text]) =>
                `<li class="flex items-start gap-3">
              <span class="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-brand-700">${icon(glyph, "size-4.5")}</span>
              <span>
                <span class="block font-display text-sm font-semibold tracking-tight">${title}</span>
                <span class="mt-0.5 block text-xs leading-relaxed text-muted">${text}</span>
              </span>
            </li>`,
            )
            .join("\n          ")}
        </ul>
      </div>
    </section>

    ${section({
      id: "cursos",
      content: `        <div data-catalog="category" data-singular="curso" data-plural="cursos">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
            ${chips}
            </div>
            <p data-count class="shrink-0 text-sm text-muted" aria-live="polite">${courses.length} cursos</p>
          </div>

          <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            ${cards}
          </div>

          <p data-empty hidden class="mt-12 flex items-center gap-3 rounded-2xl border border-dashed border-line-2 p-8 text-muted">
            ${icon("search", "size-5")} Todavía no hay cursos en esta categoría.
          </p>
        </div>`,
    })}

    ${section({
      id: "certificacion",
      tone: "muted",
      content: `        <div class="grid items-center gap-12 lg:grid-cols-12">
          <div class="lg:col-span-6">
            ${reveal(
              `${sectionHeading({
                eyebrow: "Certificación",
                title: 'Un certificado por cada <span class="mark-signal">formación completada</span>',
                lead: "Al terminar el curso vas a poder descargar un certificado de participación con el detalle de los contenidos y la carga horaria.",
              })}
              <div class="mt-8">
                ${button({ label: "Elegir un curso", href: "#cursos", from: FROM, variant: "dark", size: "lg", icon: "arrow-right" })}
              </div>`,
            )}
          </div>
          <div class="lg:col-span-6">
            ${reveal(certificateMockup("w-full"), { delay: 120 })}
          </div>
        </div>`,
    })}

    ${section({
      content: `        <div class="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-5">
            ${sectionHeading({
              eyebrow: "Preguntas frecuentes",
              title: "Antes de inscribirte",
              lead: "Si tenés alguna duda que no está acá, escribinos y te respondemos.",
            })}
            <div class="mt-8">
              ${button({ label: "Quiero más información", href: "/contacto/", from: FROM, variant: "outline", icon: "arrow-right" })}
            </div>
          </div>
          <div class="lg:col-span-7">
            ${accordion(
              generalFaqs.slice(0, 6).map((faq) => ({ title: faq.q, content: `<p>${esc(faq.a)}</p>` })),
              { defaultOpen: null },
            )}
          </div>
        </div>`,
    })}`;

  return {
    path: FROM,
    title: "Cursos de Marketing Digital e Inteligencia Artificial",
    description:
      "Cursos online de estrategia digital, community management, Meta Ads, Google Ads, Inteligencia Artificial y email marketing. Clases grabadas, plantillas descargables y certificado.",
    body,
    schema: [
      breadcrumbSchema([
        { name: "Inicio", path: "/" },
        { name: "Cursos", path: "/cursos" },
      ]),
      itemListSchema(
        "Cursos de Brand Solutions",
        courses.map((course) => `/cursos/${course.slug}`),
      ),
      faqSchema(generalFaqs.slice(0, 6)),
    ],
  };
}

/* ------------------------------------------------------------------ */
/* Landing de curso                                                    */
/* ------------------------------------------------------------------ */

export function cursoPage(course) {
  const FROM = `/cursos/${course.slug}/`;
  const a = accentMap[course.accent];
  const instructor = getInstructor(course.instructor);
  const related = getRelatedCourses(course);
  const buyHref = `/contacto/?curso=${course.slug}`;
  const checkout = `data-checkout="curso:${course.slug}"`;

  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Cursos", path: "/cursos/" },
    { name: course.title, path: FROM },
  ];

  const meta = [
    ["clock", "Duración", course.duration],
    ["layers", "Módulos", `${course.modules} módulos`],
    ["monitor", "Modalidad", course.modality],
    ["gauge", "Nivel", course.level],
  ];

  const body = `<section class="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" class="absolute inset-0">
        <div class="absolute inset-0 bg-grid-dark opacity-40"></div>
        <div class="absolute -top-40 right-0 size-[34rem] rounded-full bg-brand-600/30 blur-3xl"></div>
      </div>

      <div class="relative container-bs pt-8 pb-14 lg:pt-10 lg:pb-20">
        ${breadcrumbs(crumbs, FROM, "dark")}

        <div class="grid gap-12 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-7">
            <span class="inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold ${a.solid}">${esc(course.category)}</span>

            <h1 class="mt-5 font-display text-[2.1rem] leading-[1.06] font-extrabold tracking-tighter text-white sm:text-[2.9rem] lg:text-[3.1rem]">${esc(course.title)}</h1>

            <p class="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">${esc(course.promise)}</p>

            <dl class="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              ${meta
                .map(
                  ([glyph, label, value]) =>
                    `<div>
                <dt class="flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-white/40 uppercase">${icon(glyph, "size-3.5")}${label}</dt>
                <dd class="mt-1.5 text-sm font-medium text-white">${esc(value)}</dd>
              </div>`,
                )
                .join("\n              ")}
            </dl>

            <p class="mt-8 flex items-center gap-2 text-sm text-white/45">
              ${icon("refresh", "size-4")}
              Contenido actualizado el ${formatDate(course.updatedAt)}
            </p>
          </div>

          <div class="lg:col-span-5">
            <div class="overflow-hidden rounded-3xl border border-white/12 bg-white text-ink shadow-lift lg:sticky lg:top-24">
              <div class="aspect-[16/10] border-b border-line">${cover(course.visual, course.accent, { decorative: true })}</div>

              <div class="p-6 sm:p-7">
                <p class="text-xs font-medium text-muted-2">Inversión</p>
                <p class="mt-1 flex flex-wrap items-baseline gap-3">
                  <span class="font-display text-3xl font-extrabold tracking-tighter">${formatPrice(course.price)}</span>
                  ${course.compareAtPrice ? `<span class="text-base text-muted-2 line-through">${formatPrice(course.compareAtPrice)}</span>` : ""}
                </p>
                <p class="mt-1.5 text-xs text-muted">Pago único · Acceso sin vencimiento</p>

                <div class="mt-6 flex flex-col gap-3">
                  ${button({ label: "Inscribirme", href: buyHref, from: FROM, size: "lg", fullWidth: true, icon: "arrow-right", attrs: checkout })}
                  ${button({ label: "Quiero más información", href: "/contacto/", from: FROM, variant: "outline", size: "lg", fullWidth: true })}
                </div>

                <ul class="mt-7 flex flex-col gap-3 border-t border-line pt-6">
                  ${course.includes
                    .map(
                      (item) =>
                        `<li class="flex items-start gap-2.5 text-sm text-ink-2">${icon("check", "mt-0.5 size-4 shrink-0 text-brand-600")}${esc(item)}</li>`,
                    )
                    .join("\n                  ")}
                  ${
                    course.certificate
                      ? `<li class="flex items-start gap-2.5 text-sm text-ink-2">${icon("award", "mt-0.5 size-4 shrink-0 text-brand-600")}Certificado de participación</li>`
                      : ""
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${section({
      content: `        <div class="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div class="flex flex-col gap-16 lg:col-span-7">
            ${reveal(`<h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Sobre el curso</h2>
              <div class="mt-5 flex flex-col gap-4 text-[1.02rem] leading-relaxed text-ink-3">
                ${course.description.map((p) => `<p>${esc(p)}</p>`).join("\n                ")}
              </div>`)}

            ${reveal(`<h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Para quién es este curso</h2>
              <ul class="mt-6 grid gap-3 sm:grid-cols-2">
                ${course.audience
                  .map(
                    (item) =>
                      `<li class="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 text-[0.95rem] leading-relaxed text-ink-2">${icon("users", "mt-0.5 size-4.5 shrink-0 text-brand-600")}${esc(item)}</li>`,
                  )
                  .join("\n                ")}
              </ul>`)}

            ${reveal(`<h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Qué vas a aprender</h2>
              <ul class="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                ${course.outcomes
                  .map(
                    (outcome) =>
                      `<li class="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-2">
                    <span class="mt-0.5 grid size-5.5 shrink-0 place-items-center rounded-full bg-signal-100 text-signal-600">${icon("check", "size-3.5")}</span>
                    ${esc(outcome)}
                  </li>`,
                  )
                  .join("\n                ")}
              </ul>`)}

            ${reveal(`<div class="flex flex-wrap items-end justify-between gap-4">
                <h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Temario</h2>
                <p class="text-sm text-muted">${course.modules} módulos · ${esc(course.duration)}</p>
              </div>
              ${accordion(
                course.syllabus.map((module, index) => ({
                  badge: String(index + 1).padStart(2, "0"),
                  title: module.title,
                  subtitle: module.summary,
                  content: `<ul class="flex flex-col gap-2.5">${module.lessons
                    .map(
                      (lesson) =>
                        `<li class="flex items-start gap-3">${icon("play", "mt-0.5 size-4 shrink-0 text-brand-500")}${esc(lesson)}</li>`,
                    )
                    .join("")}</ul>`,
                })),
                { className: "mt-6", defaultOpen: 0 },
              )}`)}

            ${reveal(`<h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Herramientas que vas a usar</h2>
              <ul class="mt-5 flex flex-wrap gap-2.5">
                ${course.tools
                  .map(
                    (tool) =>
                      `<li class="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-2">${esc(tool)}</li>`,
                  )
                  .join("\n                ")}
              </ul>`)}

            ${reveal(`<h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Quién dicta el curso</h2>
              <div class="mt-6 flex flex-col gap-5 rounded-3xl border border-line bg-white p-7 sm:flex-row">
                <span class="grid size-16 shrink-0 place-items-center rounded-2xl bg-brand-50 font-display text-lg font-bold text-brand-700" aria-hidden="true">${esc(instructor.initials)}</span>
                <div>
                  <p class="font-display text-lg font-bold tracking-tight">${esc(instructor.name)}</p>
                  <p class="text-sm text-brand-700">${esc(instructor.role)}</p>
                  <p class="mt-3 text-[0.95rem] leading-relaxed text-ink-3">${esc(instructor.bio)}</p>
                  <ul class="mt-4 flex flex-col gap-2">
                    ${instructor.highlights
                      .map(
                        (h) =>
                          `<li class="flex items-start gap-2.5 text-sm text-muted">${icon("check", "mt-0.5 size-4 shrink-0 text-signal-600")}${esc(h)}</li>`,
                      )
                      .join("\n                    ")}
                  </ul>
                </div>
              </div>`)}

            ${reveal(`<h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Qué dicen quienes lo hicieron</h2>
              <div class="mt-6 grid gap-5 sm:grid-cols-2">
                ${testimonials
                  .slice(0, 2)
                  .map(
                    (t) =>
                      `<figure class="rounded-3xl border border-line bg-white p-6">
                    ${stars(t.rating)}
                    <blockquote class="mt-4 text-[0.95rem] leading-relaxed text-ink-2">${esc(t.quote)}</blockquote>
                    <figcaption class="mt-5 border-t border-line pt-4 text-sm">
                      <span class="block font-semibold">${esc(t.name)}</span>
                      <span class="block text-xs text-muted">${esc(t.role)}</span>
                    </figcaption>
                  </figure>`,
                  )
                  .join("\n                ")}
              </div>
              <p class="mt-4 text-xs text-muted-2">
                Testimonios de ejemplo. Se reemplazan por comentarios reales en
                <code class="rounded bg-paper-2 px-1.5 py-0.5 font-mono">data/testimonials.ts</code>.
              </p>`)}

            ${reveal(`<h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Preguntas frecuentes</h2>
              ${accordion(
                course.faqs.map((faq) => ({ title: faq.q, content: `<p>${esc(faq.a)}</p>` })),
                { className: "mt-6", defaultOpen: null },
              )}`)}
          </div>

          <aside class="lg:col-span-5">
            <div class="flex flex-col gap-6 lg:sticky lg:top-24">
              ${
                course.certificate
                  ? `<div class="overflow-hidden rounded-3xl border border-line bg-paper-2">
                ${certificateMockup("w-full")}
                <div class="border-t border-line bg-white p-6">
                  <h2 class="font-display text-lg font-bold tracking-tight">Certificación</h2>
                  <p class="mt-2 text-sm leading-relaxed text-muted">
                    Al completar el curso vas a poder descargar tu certificado de participación con el detalle de los
                    contenidos y la carga horaria.
                  </p>
                </div>
              </div>`
                  : ""
              }

              <div class="rounded-3xl border border-line bg-white p-7">
                <h2 class="font-display text-lg font-bold tracking-tight">¿Dudas antes de empezar?</h2>
                <p class="mt-2 text-sm leading-relaxed text-muted">
                  Contanos en qué estás trabajando y te decimos si este curso es el indicado.
                </p>
                <div class="mt-5 flex flex-col gap-3">
                  ${button({ label: "Escribinos", href: "/contacto/", from: FROM, variant: "dark", fullWidth: true, icon: "arrow-right" })}
                  <a href="mailto:${site.contact.email}" class="text-center text-sm text-muted underline underline-offset-4 transition-colors hover:text-ink">${esc(site.contact.email)}</a>
                </div>
              </div>

              <div class="rounded-3xl bg-ink p-7 text-white">
                <p class="font-display text-lg font-bold tracking-tight">Llevalo dentro del programa</p>
                <p class="mt-2 text-sm leading-relaxed text-white/60">
                  Este curso también forma parte del Programa Integral de Marketing Digital, con acompañamiento y
                  entregables revisados.
                </p>
                <a href="${rel(FROM, "/programas/programa-integral-de-marketing-digital/")}" class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-400 transition-colors hover:text-signal-300">
                  Ver el programa ${icon("arrow-right", "size-4")}
                </a>
              </div>
            </div>
          </aside>
        </div>`,
    })}

    <section class="bg-brand-700 text-white">
      <div class="container-bs section-y-sm">
        <div class="flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 class="font-display text-2xl leading-tight font-bold tracking-tight text-white sm:text-3xl">Empezá hoy con ${esc(course.title)}</h2>
            <p class="mt-2.5 text-white/70">${esc(course.duration)} · ${course.modules} módulos · ${course.certificate ? "Con certificado" : "Sin certificado"}</p>
          </div>
          <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <p class="font-display text-3xl font-extrabold tracking-tighter">${formatPrice(course.price)}</p>
            ${button({ label: "Comprar curso", href: buyHref, from: FROM, size: "lg", variant: "signal", icon: "arrow-right", attrs: checkout })}
          </div>
        </div>
      </div>
    </section>

    ${
      related.length
        ? section({
            tone: "muted",
            content: `        ${sectionHeading({
              eyebrow: "Seguí aprendiendo",
              title: "Cursos relacionados",
              lead: "Formaciones que combinan bien con lo que vas a ver acá.",
            })}
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${related
            .map((item, index) => reveal(courseCard(item, FROM), { delay: index * 90, className: "h-full" }))
            .join("\n          ")}
        </div>`,
          })
        : ""
    }`;

  const stickyBar = `    <div data-sticky-enroll aria-hidden="true" class="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-xl lg:hidden">
      <div class="container-bs flex items-center gap-4 py-3">
        <div class="min-w-0 flex-1">
          <p class="truncate text-xs text-muted">${esc(course.title)}</p>
          <p class="font-display text-lg font-bold tracking-tight">${formatPrice(course.price)}</p>
        </div>
        ${button({ label: "Inscribirme", href: buyHref, from: FROM, icon: "arrow-right", attrs: `${checkout} tabindex="-1"` })}
      </div>
    </div>`;

  return {
    path: FROM,
    title: `${course.title} · Curso online`,
    description: course.promise,
    body,
    bodyEnd: stickyBar,
    ogImage: `/assets/img/og-curso-${course.slug}.png`,
    schema: [courseSchema(course), faqSchema(course.faqs), breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.path })))],
  };
}

/* ------------------------------------------------------------------ */
/* Programas                                                           */
/* ------------------------------------------------------------------ */

export function programasPage() {
  const FROM = "/programas/";

  const cards = programs
    .map((program, index) =>
      reveal(
        `<article class="group overflow-hidden rounded-[2rem] border border-line bg-white transition-shadow duration-300 hover:shadow-lift">
            <div class="grid lg:grid-cols-12">
              <div class="border-b border-line p-8 sm:p-10 lg:col-span-7 lg:border-r lg:border-b-0 lg:p-12">
                <span class="inline-flex rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">${esc(program.kicker)}</span>
                <h2 class="mt-5 font-display text-2xl leading-tight font-bold tracking-tight sm:text-3xl">
                  <a href="${rel(FROM, `/programas/${program.slug}/`)}" class="transition-colors hover:text-brand-700">${esc(program.title)}</a>
                </h2>
                <p class="mt-4 max-w-xl leading-relaxed text-muted">${esc(program.excerpt)}</p>

                <ul class="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-3">
                  <li class="inline-flex items-center gap-2">${icon("clock", "size-4 text-muted-2")}${esc(program.duration)}</li>
                  <li class="inline-flex items-center gap-2">${icon("monitor", "size-4 text-muted-2")}${esc(program.modality)}</li>
                  <li class="inline-flex items-center gap-2">${icon("layers", "size-4 text-muted-2")}${program.modules.length} módulos</li>
                </ul>

                <div class="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  ${button({ label: "Conocer el programa", href: `/programas/${program.slug}/`, from: FROM, size: "lg", icon: "arrow-right" })}
                  <p class="text-sm text-muted">
                    ${
                      program.price > 0
                        ? `Desde <span class="font-display text-lg font-bold text-ink">${formatPrice(program.price)}</span>`
                        : "Presupuesto a medida"
                    }
                  </p>
                </div>
              </div>

              <div class="bg-paper-2 p-8 sm:p-10 lg:col-span-5 lg:p-10">
                <p class="text-[0.7rem] font-bold tracking-[0.16em] text-muted-2 uppercase">Módulos</p>
                <ol class="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                  ${program.modules
                    .slice(0, 6)
                    .map(
                      (module) =>
                        `<li class="flex items-center gap-3 text-sm">
                    <span class="font-display text-xs font-bold text-brand-600 tabular-nums">${module.code}</span>
                    <span class="font-medium text-ink-2">${esc(module.title)}</span>
                  </li>`,
                    )
                    .join("\n                  ")}
                </ol>
                ${program.modules.length > 6 ? `<p class="mt-4 text-sm text-muted">+ ${program.modules.length - 6} módulos más</p>` : ""}
              </div>
            </div>
          </article>`,
        { delay: index * 100 },
      ),
    )
    .join("\n          ");

  const body = `${pageHeader({
    from: FROM,
    eyebrow: "Programas",
    title: 'Recorridos completos para <span class="mark-signal">construir una estrategia</span>',
    lead: "Cuando lo que necesitás no es una herramienta suelta sino un sistema completo de trabajo, un programa integra todas las piezas y las ordena en una secuencia.",
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Programas", path: "/programas/" },
    ],
  })}

    ${section({
      content: `        <div class="flex flex-col gap-8">
          ${cards}
        </div>`,
    })}

    ${section({
      tone: "muted",
      content: `        ${sectionHeading({
        align: "center",
        eyebrow: "¿No sabés cuál elegir?",
        title: "Te ayudamos a decidir",
        lead: "Contanos en qué momento está tu proyecto y te recomendamos el recorrido más corto para llegar a lo que necesitás.",
      })}
        <div class="mt-8 flex justify-center">
          ${button({ label: "Quiero más información", href: "/contacto/", from: FROM, size: "lg", icon: "arrow-right" })}
        </div>`,
    })}`;

  return {
    path: FROM,
    title: "Programas de formación en Marketing Digital",
    description:
      "Recorridos completos de formación: el Programa Integral de Marketing Digital y capacitaciones a medida para equipos. Estrategia, campañas, IA y medición.",
    body,
    schema: [
      breadcrumbSchema([
        { name: "Inicio", path: "/" },
        { name: "Programas", path: "/programas" },
      ]),
      itemListSchema(
        "Programas de Brand Solutions",
        programs.map((program) => `/programas/${program.slug}`),
      ),
    ],
  };
}

/* ------------------------------------------------------------------ */

export function programaPage(program) {
  const FROM = `/programas/${program.slug}/`;
  const instructor = getInstructor(program.instructor);
  const isQuote = program.price === 0;
  const buyHref = `/contacto/?programa=${program.slug}`;
  const checkout = isQuote ? "" : `data-checkout="programa:${program.slug}"`;

  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Programas", path: "/programas/" },
    { name: program.title, path: FROM },
  ];

  const meta = [
    ["clock", "Duración", program.duration],
    ["layers", "Módulos", `${program.modules.length} módulos`],
    ["monitor", "Modalidad", program.modality],
    ["gauge", "Nivel", program.level],
  ];

  const body = `<section class="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" class="absolute inset-0">
        <div class="absolute inset-0 bg-grid-dark opacity-40"></div>
        <div class="absolute -top-40 left-1/3 size-[34rem] rounded-full bg-brand-600/30 blur-3xl"></div>
      </div>

      <div class="relative container-bs pt-8 pb-14 lg:pt-10 lg:pb-20">
        ${breadcrumbs(crumbs, FROM, "dark")}

        <div class="grid gap-12 lg:grid-cols-12">
          <div class="lg:col-span-7">
            <span class="inline-flex rounded-full bg-signal-400 px-3.5 py-1.5 text-xs font-semibold text-ink">${esc(program.kicker)}</span>
            <h1 class="mt-5 font-display text-[2.1rem] leading-[1.06] font-extrabold tracking-tighter text-white sm:text-[2.9rem] lg:text-[3.1rem]">${esc(program.title)}</h1>
            <p class="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">${esc(program.promise)}</p>

            <dl class="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              ${meta
                .map(
                  ([glyph, label, value]) =>
                    `<div>
                <dt class="flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-white/40 uppercase">${icon(glyph, "size-3.5")}${label}</dt>
                <dd class="mt-1.5 text-sm font-medium text-white">${esc(value)}</dd>
              </div>`,
                )
                .join("\n              ")}
            </dl>
          </div>

          <div class="lg:col-span-5">
            <div class="rounded-3xl border border-white/12 bg-white p-7 text-ink shadow-lift lg:sticky lg:top-24">
              <p class="text-xs font-medium text-muted-2">${isQuote ? "Modalidad" : "Inversión"}</p>
              ${
                isQuote
                  ? '<p class="mt-1 font-display text-2xl font-extrabold tracking-tighter">Presupuesto a medida</p>'
                  : `<p class="mt-1 flex flex-wrap items-baseline gap-3">
                <span class="font-display text-3xl font-extrabold tracking-tighter">${formatPrice(program.price)}</span>
                ${program.compareAtPrice ? `<span class="text-base text-muted-2 line-through">${formatPrice(program.compareAtPrice)}</span>` : ""}
              </p>`
              }

              <div class="mt-6 flex flex-col gap-3">
                ${button({
                  label: isQuote ? "Pedir una propuesta" : "Inscribirme al programa",
                  href: buyHref,
                  from: FROM,
                  size: "lg",
                  fullWidth: true,
                  icon: "arrow-right",
                  attrs: checkout,
                })}
                ${button({ label: "Quiero más información", href: "/contacto/", from: FROM, variant: "outline", size: "lg", fullWidth: true })}
              </div>

              <ul class="mt-7 flex flex-col gap-3 border-t border-line pt-6">
                ${program.includes
                  .map(
                    (item) =>
                      `<li class="flex items-start gap-2.5 text-sm text-ink-2">${icon("check", "mt-0.5 size-4 shrink-0 text-brand-600")}${esc(item)}</li>`,
                  )
                  .join("\n                ")}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${section({
      content: `        <div class="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div class="flex flex-col gap-16 lg:col-span-7">
            ${reveal(`<h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Sobre el programa</h2>
              <div class="mt-5 flex flex-col gap-4 text-[1.02rem] leading-relaxed text-ink-3">
                ${program.description.map((p) => `<p>${esc(p)}</p>`).join("\n                ")}
              </div>`)}

            ${reveal(`<h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Recorrido completo</h2>
              <ol class="mt-6 flex flex-col gap-3">
                ${program.modules
                  .map(
                    (module) =>
                      `<li class="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-line-2">
                    <span class="font-display text-sm font-bold text-brand-600 tabular-nums">${module.code}</span>
                    <span>
                      <span class="block font-display font-semibold tracking-tight">${esc(module.title)}</span>
                      <span class="mt-1 block text-sm leading-relaxed text-muted">${esc(module.summary)}</span>
                    </span>
                  </li>`,
                  )
                  .join("\n                ")}
              </ol>`)}

            ${reveal(`<h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Con qué te vas a ir</h2>
              <ul class="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                ${program.outcomes
                  .map(
                    (outcome) =>
                      `<li class="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-2">
                    <span class="mt-0.5 grid size-5.5 shrink-0 place-items-center rounded-full bg-signal-100 text-signal-600">${icon("check", "size-3.5")}</span>
                    ${esc(outcome)}
                  </li>`,
                  )
                  .join("\n                ")}
              </ul>`)}

            ${reveal(`<h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Para quién es</h2>
              <ul class="mt-6 grid gap-3 sm:grid-cols-2">
                ${program.audience
                  .map(
                    (item) =>
                      `<li class="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 text-[0.95rem] leading-relaxed text-ink-2">${icon("users", "mt-0.5 size-4.5 shrink-0 text-brand-600")}${esc(item)}</li>`,
                  )
                  .join("\n                ")}
              </ul>`)}

            ${reveal(`<h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Preguntas frecuentes</h2>
              ${accordion(
                program.faqs.map((faq) => ({ title: faq.q, content: `<p>${esc(faq.a)}</p>` })),
                { className: "mt-6", defaultOpen: null },
              )}`)}
          </div>

          <aside class="lg:col-span-5">
            <div class="flex flex-col gap-6 lg:sticky lg:top-24">
              <div class="rounded-3xl border border-line bg-white p-7">
                <h2 class="font-display text-lg font-bold tracking-tight">Quién lo dicta</h2>
                <div class="mt-5 flex gap-4">
                  <span class="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-50 font-display font-bold text-brand-700" aria-hidden="true">${esc(instructor.initials)}</span>
                  <div>
                    <p class="font-display font-bold tracking-tight">${esc(instructor.name)}</p>
                    <p class="text-sm text-brand-700">${esc(instructor.role)}</p>
                  </div>
                </div>
                <p class="mt-4 text-sm leading-relaxed text-ink-3">${esc(instructor.bio)}</p>
              </div>

              <div class="rounded-3xl bg-ink p-7 text-white">
                <h2 class="font-display text-lg font-bold tracking-tight">¿Preferís empezar de a poco?</h2>
                <p class="mt-2 text-sm leading-relaxed text-white/60">
                  Podés arrancar por un curso puntual y después sumar el programa completo: lo que ya hiciste se
                  descuenta del valor final.
                </p>
                ${button({ label: "Ver cursos", href: "/cursos/", from: FROM, variant: "signal", className: "mt-5", icon: "arrow-right" })}
              </div>
            </div>
          </aside>
        </div>`,
    })}`;

  const stickyBar = `    <div data-sticky-enroll aria-hidden="true" class="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-xl lg:hidden">
      <div class="container-bs flex items-center gap-4 py-3">
        <div class="min-w-0 flex-1">
          <p class="truncate text-xs text-muted">${esc(program.title)}</p>
          <p class="font-display text-lg font-bold tracking-tight">${isQuote ? "A medida" : formatPrice(program.price)}</p>
        </div>
        ${button({ label: isQuote ? "Pedir propuesta" : "Inscribirme", href: buyHref, from: FROM, icon: "arrow-right", attrs: `${checkout} tabindex="-1"` })}
      </div>
    </div>`;

  return {
    path: FROM,
    title: program.title,
    description: program.promise,
    body,
    bodyEnd: stickyBar,
    schema: [programSchema(program), faqSchema(program.faqs), breadcrumbSchema(crumbs)],
  };
}

/* ------------------------------------------------------------------ */
/* Recursos                                                            */
/* ------------------------------------------------------------------ */

export function recursosPage() {
  const FROM = "/recursos/";
  const options = [
    ["todos", "Todos"],
    ["gratis", "Gratuitos"],
    ["premium", "Con costo"],
  ];

  const chips = options
    .map(
      ([value, label], index) =>
        `<button
              type="button"
              data-filter="${value}"
              aria-pressed="${index === 0}"
              class="rounded-full border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink-3 transition-all duration-200 hover:border-line-2 hover:bg-paper-2"
            >${label}</button>`,
    )
    .join("\n            ");

  const cards = resources
    .map((resource) => `<div data-card-wrapper class="h-full">${resourceCard(resource, FROM)}</div>`)
    .join("\n            ");

  const body = `${pageHeader({
    from: FROM,
    eyebrow: "Recursos digitales",
    title: 'Herramientas para <span class="mark-signal">trabajar mejor</span>',
    lead: "Recursos prácticos para ahorrar tiempo y organizar tu estrategia digital. Algunos son gratuitos y otros forman parte de nuestras formaciones.",
    crumbs: [
      { name: "Inicio", path: "/" },
      { name: "Recursos", path: "/recursos/" },
    ],
  })}

    ${section({
      content: `        <div data-catalog="price" data-singular="recurso" data-plural="recursos">
          <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div class="flex flex-wrap gap-2">
            ${chips}
            </div>
            <p data-count class="text-sm text-muted" aria-live="polite">${resources.length} recursos</p>
          </div>

          <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            ${cards}
          </div>

          <p data-empty hidden class="mt-12 flex items-center gap-3 rounded-2xl border border-dashed border-line-2 p-8 text-muted">
            ${icon("search", "size-5")} No hay recursos con este filtro por ahora.
          </p>
        </div>`,
    })}

    ${leadMagnetSection(FROM)}`;

  return {
    path: FROM,
    title: "Recursos y plantillas de Marketing Digital",
    description:
      "Plantillas, calendarios, checklists y bancos de prompts para organizar tu estrategia digital. Recursos gratuitos y descargables listos para usar.",
    body,
    schema: [
      breadcrumbSchema([
        { name: "Inicio", path: "/" },
        { name: "Recursos", path: "/recursos" },
      ]),
      itemListSchema(
        "Recursos digitales de Brand Solutions",
        resources.map((resource) => `/recursos/${resource.slug}`),
      ),
    ],
  };
}

/* ------------------------------------------------------------------ */

export function recursoPage(resource) {
  const FROM = `/recursos/${resource.slug}/`;
  const isFree = resource.price === 0;
  const related = resources.filter((r) => r.slug !== resource.slug).slice(0, 3);

  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Recursos", path: "/recursos/" },
    { name: resource.title, path: FROM },
  ];

  const body = `${section({
    className: "pb-0",
    containerClassName: "pb-0",
    content: `        ${breadcrumbs(crumbs, FROM)}

        <div class="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div class="lg:col-span-6">
            ${reveal(`<div class="overflow-hidden rounded-3xl border border-line">${cover(resource.visual, resource.accent)}</div>`)}
          </div>

          <div class="lg:col-span-6">
            ${reveal(
              `<span class="inline-flex rounded-full bg-paper-2 px-3.5 py-1.5 text-xs font-semibold text-ink-3">${esc(resource.category)}</span>
              <h1 class="mt-5 font-display text-[2rem] leading-[1.08] font-extrabold tracking-tighter sm:text-[2.6rem]">${esc(resource.title)}</h1>
              <p class="mt-5 text-lg leading-relaxed text-muted">${esc(resource.excerpt)}</p>

              <div class="mt-8 flex flex-wrap items-center gap-4">
                <span class="rounded-full px-4 py-2 font-display text-lg font-bold ${isFree ? "bg-signal-400 text-ink" : "bg-ink text-white"}">${isFree ? "Gratis" : formatPrice(resource.price)}</span>
                <span class="inline-flex items-center gap-2 text-sm text-muted">${icon("download", "size-4")}${esc(resource.format)}</span>
              </div>

              <div class="mt-8">
                ${
                  isFree
                    ? `<div class="rounded-3xl border border-line bg-white p-6 sm:p-7">
                  <p class="font-display text-lg font-bold tracking-tight">Descargalo gratis</p>
                  <p class="mt-1.5 mb-6 text-sm text-muted">Dejanos tus datos y te lo enviamos por email.</p>
                  ${leadMagnetForm(resource.title, `lm-${resource.slug}`)}
                </div>`
                    : `<div class="flex flex-col gap-3 sm:flex-row">
                  ${button({ label: "Comprar recurso", href: `/contacto/?recurso=${resource.slug}`, from: FROM, size: "lg", icon: "arrow-right", attrs: `data-checkout="recurso:${resource.slug}"` })}
                  ${button({ label: "Quiero más información", href: "/contacto/", from: FROM, variant: "outline", size: "lg" })}
                </div>`
                }
              </div>`,
              { delay: 90 },
            )}
          </div>
        </div>`,
  })}

    ${section({
      content: `        <div class="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-7">
            <h2 class="font-display text-2xl font-bold tracking-tight sm:text-3xl">Qué resuelve</h2>
            <div class="mt-5 flex flex-col gap-4 text-[1.02rem] leading-relaxed text-ink-3">
              ${resource.description.map((p) => `<p>${esc(p)}</p>`).join("\n              ")}
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="rounded-3xl border border-line bg-white p-7">
              <h2 class="font-display text-lg font-bold tracking-tight">Qué incluye</h2>
              <ul class="mt-5 flex flex-col gap-3">
                ${resource.includes
                  .map(
                    (item) =>
                      `<li class="flex items-start gap-2.5 text-sm text-ink-2">${icon("check", "mt-0.5 size-4 shrink-0 text-brand-600")}${esc(item)}</li>`,
                  )
                  .join("\n                ")}
              </ul>
            </div>
          </div>
        </div>`,
    })}

    ${section({
      tone: "muted",
      content: `        ${sectionHeading({ eyebrow: "Más recursos", title: "También te puede servir" })}
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${related
            .map((item, index) => reveal(resourceCard(item, FROM), { delay: index * 90, className: "h-full" }))
            .join("\n          ")}
        </div>`,
    })}`;

  return {
    path: FROM,
    title: resource.title,
    description: resource.excerpt,
    body,
    schema: [resourceSchema(resource), breadcrumbSchema(crumbs)],
  };
}
