/** Secciones de la home, equivalentes a components/home/*. */
import { courses } from "../../data/courses.ts";
import { flagshipProgram } from "../../data/programs.ts";
import { resources } from "../../data/resources.ts";
import { sortedPosts } from "../../data/posts.ts";
import { services } from "../../data/services.ts";
import { testimonials, hasPlaceholderTestimonials } from "../../data/testimonials.ts";
import { site, formatPrice } from "../../data/site.ts";
import { accent as accentMap } from "../../lib/accents.ts";

import { esc, rel } from "./util.mjs";
import { icon, heroVisual, platformMockup, certificateMockup, cover, stars } from "./render.mjs";
import {
  button,
  eyebrow,
  sectionHeading,
  reveal,
  section,
  accordion,
  carousel,
  courseCard,
  resourceCard,
  postCard,
} from "./ui.mjs";
import { leadMagnetForm, newsletterForm } from "./forms.mjs";

const FROM = "/";
const link = (to) => rel(FROM, to);

/* ------------------------------------------------------------------ */

function hero() {
  const microcopy = ["Aprendé a tu ritmo", "Aplicalo desde el primer día", "Formación práctica"];

  return `<section class="relative overflow-hidden">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-grid opacity-60"></div>
        <div class="absolute -top-40 -left-32 size-[36rem] rounded-full bg-brand-200/45 blur-3xl"></div>
        <div class="absolute -top-24 right-0 size-[30rem] rounded-full bg-signal-200/45 blur-3xl"></div>
        <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper"></div>
      </div>

      <div class="container-bs pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
        <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div class="lg:col-span-6 xl:col-span-5">
            ${reveal(eyebrow("Marketing Digital + IA"))}

            ${reveal(
              `<h1 class="mt-6 font-display text-[2.6rem] leading-[1.04] font-extrabold tracking-tighter text-balance sm:text-[3.4rem] lg:text-[3.75rem]">
                Aprendé <span class="mark-signal">Marketing Digital</span> para hacerlo, aplicarlo y
                <span class="text-gradient-brand">hacerlo crecer</span>.
              </h1>`,
              { delay: 80 },
            )}

            ${reveal(
              `<p class="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Cursos, programas y herramientas prácticas para aprender estrategia digital, publicidad, contenidos,
                inteligencia artificial y automatización aplicándolos a proyectos reales.
              </p>`,
              { delay: 160 },
            )}

            ${reveal(
              `<div class="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                ${button({ label: "Ver cursos", href: "/cursos/", from: FROM, size: "lg", icon: "arrow-right", className: "sm:min-w-48" })}
                ${button({ label: "Explorar recursos", href: "/recursos/", from: FROM, size: "lg", variant: "outline", icon: "download", iconPosition: "start" })}
              </div>`,
              { delay: 240 },
            )}

            ${reveal(
              `<ul class="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-3">
                ${microcopy
                  .map(
                    (item, index) =>
                      `<li class="flex items-center gap-3"><span class="font-medium">${item}</span>${
                        index < microcopy.length - 1
                          ? '<span class="size-1 rounded-full bg-muted-2/70" aria-hidden="true"></span>'
                          : ""
                      }</li>`,
                  )
                  .join("\n                ")}
              </ul>`,
              { delay: 320 },
            )}

            ${reveal(
              `<p class="mt-8 flex items-center gap-2 text-sm text-muted">
                ${icon("users", "size-4 text-brand-600")}
                ¿No sabés por dónde empezar?
                <a href="${link("/#recurso-gratuito")}" class="font-semibold text-ink underline decoration-signal-400 decoration-2 underline-offset-4 transition-colors hover:text-brand-700">
                  Descargá el material gratuito
                </a>
              </p>`,
              { delay: 400 },
            )}
          </div>

          <div class="lg:col-span-6 xl:col-span-7">
            ${reveal(heroVisual("w-full max-w-2xl lg:max-w-none"), { delay: 120, className: "relative" })}
          </div>
        </div>
      </div>
    </section>`;
}

/* ------------------------------------------------------------------ */

function trustStrip() {
  const items = [
    ["book", "Cursos prácticos"],
    ["list-check", "Clases paso a paso"],
    ["download", "Plantillas descargables"],
    ["pen", "Ejercicios"],
    ["sparkles", "IA aplicada"],
    ["award", "Certificación"],
  ];

  return `<section class="relative bg-ink text-white" aria-label="Qué incluye la formación">
      <div class="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true"></div>
      <div class="relative container-bs py-10 lg:py-12">
        ${reveal(
          `<p class="max-w-xs font-display text-lg leading-snug font-semibold tracking-tight text-balance lg:text-xl">
            Marketing Digital aplicado a <span class="text-signal-400">proyectos reales</span>.
          </p>

          <ul class="grid flex-1 grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
            ${items
              .map(
                ([glyph, label]) =>
                  `<li class="flex items-center gap-2.5 lg:flex-col lg:gap-2.5 lg:text-center">
                <span class="grid size-9 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/5 text-signal-400">${icon(glyph, "size-4.5")}</span>
                <span class="text-[0.8rem] leading-tight font-medium text-white/75">${label}</span>
              </li>`,
              )
              .join("\n            ")}
          </ul>`,
          { className: "flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12" },
        )}
      </div>
    </section>`;
}

/* ------------------------------------------------------------------ */

function coursesSection() {
  const cards = courses
    .map((course, index) => reveal(courseCard(course, FROM), { delay: (index % 3) * 90, className: "h-full" }))
    .join("\n        ");

  return section({
    id: "cursos",
    content: `        ${sectionHeading({
      eyebrow: "Cursos",
      title: 'Cursos para <span class="mark-signal">aprender haciendo</span>',
      lead: "Formaciones concretas para incorporar herramientas que puedas aplicar en tu trabajo, emprendimiento o negocio.",
      actions: button({
        label: "Ver todos los cursos",
        href: "/cursos/",
        from: FROM,
        variant: "outline",
        icon: "arrow-right",
        className: "hidden lg:inline-flex",
      }),
    })}

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        ${cards}
        </div>

        <div class="mt-10 flex justify-center lg:hidden">
          ${button({ label: "Ver todos los cursos", href: "/cursos/", from: FROM, variant: "outline", size: "lg", fullWidth: true, icon: "arrow-right" })}
        </div>`,
  });
}

/* ------------------------------------------------------------------ */

function featuredProgram() {
  const program = flagshipProgram;
  const modules = program.modules
    .map(
      (module) => `<li class="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal-400/40 hover:bg-white/[0.08]">
                    <span class="font-display text-sm font-bold text-signal-400 tabular-nums">${module.code}</span>
                    <span>
                      <span class="block font-display font-semibold tracking-tight text-white">${esc(module.title)}</span>
                      <span class="mt-1 block text-[0.82rem] leading-relaxed text-white/50">${esc(module.summary)}</span>
                    </span>
                  </li>`,
    )
    .join("\n                  ");

  return `<section id="programa" class="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" class="absolute inset-0">
        <div class="absolute inset-0 bg-grid-dark opacity-50"></div>
        <div class="absolute -top-32 -right-24 size-[34rem] rounded-full bg-brand-600/35 blur-3xl"></div>
        <div class="absolute -bottom-40 -left-24 size-[28rem] rounded-full bg-cyan/15 blur-3xl"></div>
      </div>

      <div class="relative container-bs section-y">
        <div class="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-5">
            ${reveal(`${eyebrow("Programa destacado", "dark")}
              <h2 class="mt-6 font-display text-[2rem] leading-[1.08] font-bold tracking-tighter text-white sm:text-4xl lg:text-[3rem]">
                De la estrategia <br class="hidden sm:block" />
                <span class="text-signal-400">a la acción</span>
              </h2>
              <p class="mt-6 font-display text-lg font-semibold text-white/90">${esc(program.title)}</p>
              <p class="mt-3 max-w-lg leading-relaxed text-white/65">${esc(program.description[0])}</p>

              <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
                <li class="inline-flex items-center gap-2">${icon("clock", "size-4 text-signal-400")}${esc(program.duration)}</li>
                <li class="inline-flex items-center gap-2">${icon("monitor", "size-4 text-signal-400")}${esc(program.modality)}</li>
                <li class="inline-flex items-center gap-2">${icon("award", "size-4 text-signal-400")}Certificado</li>
              </ul>

              <div class="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                ${button({ label: "Conocer el programa", href: `/programas/${program.slug}/`, from: FROM, size: "lg", variant: "signal", icon: "arrow-right" })}
                <p class="text-sm text-white/55">
                  Desde <span class="font-display text-lg font-bold text-white">${formatPrice(program.price)}</span>
                </p>
              </div>`)}
          </div>

          <div class="lg:col-span-7">
            ${reveal(
              `<p class="mb-5 text-[0.72rem] font-bold tracking-[0.16em] text-white/40 uppercase">
                  10 módulos · recorrido completo
                </p>
                <ol class="grid gap-3 sm:grid-cols-2">
                  ${modules}
                </ol>`,
              { delay: 120 },
            )}
          </div>
        </div>
      </div>
    </section>`;
}

/* ------------------------------------------------------------------ */

function methodology() {
  const pillars = [
    ["01", "Aprendé", "Conceptos explicados de manera simple y estratégica.", "bulb", "bg-brand-50 text-brand-700"],
    ["02", "Aplicá", "Ejercicios y actividades basados en situaciones reales.", "target", "bg-coral-soft text-coral"],
    ["03", "Creá", "Plantillas, estrategias, campañas y materiales concretos.", "wand", "bg-cyan-soft text-cyan"],
    ["04", "Medí", "Aprendé a analizar resultados y tomar decisiones.", "gauge", "bg-signal-100 text-signal-600"],
  ];

  const cards = pillars
    .map(([step, title, text, glyph, tone], index) =>
      reveal(
        `<article class="group relative flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
            <span class="absolute top-6 right-7 font-display text-sm font-bold text-line-2 tabular-nums transition-colors group-hover:text-brand-200">${step}</span>
            <span class="grid size-12 place-items-center rounded-2xl ${tone}">${icon(glyph, "size-6")}</span>
            <h3 class="mt-6 font-display text-xl font-bold tracking-tight">${title}</h3>
            <p class="mt-2.5 text-[0.95rem] leading-relaxed text-muted">${text}</p>
          </article>`,
        { delay: index * 90, className: "h-full" },
      ),
    )
    .join("\n          ");

  return section({
    id: "metodologia",
    tone: "muted",
    content: `        ${sectionHeading({
      eyebrow: "Metodología",
      title:
        'No se trata solamente de aprender.<br class="hidden sm:block" /> Se trata de <span class="mark-signal">poder hacerlo</span>.',
      lead: "Nuestros cursos están pensados para que cada concepto se transforme en una acción concreta. Trabajamos con ejemplos, herramientas, ejercicios, plantillas y casos reales para que puedas aplicar lo aprendido desde el primer día.",
    })}

        <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          ${cards}
        </div>

        ${reveal(
          `<div class="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-line bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <p class="max-w-xl text-[0.95rem] leading-relaxed text-ink-3">
              Cada curso termina con algo hecho: un plan, un calendario, una campaña o un flujo listo para usar.
            </p>
            ${button({ label: "Cómo trabajamos", href: "/nosotros/", from: FROM, variant: "outline", icon: "arrow-right" })}
          </div>`,
          { delay: 120 },
        )}`,
  });
}

/* ------------------------------------------------------------------ */

function onlineLearning() {
  const features = [
    "Clases grabadas",
    "Material complementario",
    "Plantillas",
    "Ejercicios prácticos",
    "Recursos descargables",
    "Actualizaciones",
    "Certificado",
  ];

  return `<section id="formacion-online" class="relative overflow-hidden bg-paper">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0">
        <div class="absolute top-1/4 -right-40 size-[32rem] rounded-full bg-brand-100/60 blur-3xl"></div>
      </div>

      <div class="relative container-bs section-y">
        <div class="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div class="lg:col-span-5">
            ${reveal(`${eyebrow("Formación 100% online")}
              <h2 class="mt-6 font-display text-[1.9rem] leading-[1.1] font-bold tracking-tighter sm:text-4xl lg:text-[2.75rem]">
                Aprendé cuando quieras. <span class="text-gradient-brand">Aplicalo cuando lo necesites.</span>
              </h2>
              <p class="mt-5 max-w-lg text-lg leading-relaxed text-muted">
                Accedé a las clases desde cualquier dispositivo y avanzá a tu ritmo.
              </p>

              <ul class="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
                ${features
                  .map(
                    (feature) =>
                      `<li class="flex items-center gap-3 text-[0.95rem] text-ink-2">
                    <span class="grid size-6 shrink-0 place-items-center rounded-full bg-signal-100 text-signal-600">${icon("check", "size-3.5", undefined)}</span>
                    ${feature}
                  </li>`,
                  )
                  .join("\n                ")}
              </ul>

              <div class="mt-10">
                ${button({ label: "Explorar cursos", href: "/cursos/", from: FROM, size: "lg", icon: "arrow-right" })}
              </div>`)}
          </div>

          <div class="lg:col-span-7">
            ${reveal(platformMockup("w-full"), { delay: 140 })}
          </div>
        </div>
      </div>
    </section>`;
}

/* ------------------------------------------------------------------ */

function aiSection() {
  const uses = [
    ["Investigación", "Buyer Persona, competencia y tendencias.", "search"],
    ["Estrategia", "Planes, campañas y propuestas de valor.", "compass"],
    ["Contenido", "Ideas, copys, guiones y calendarios.", "pen"],
    ["Publicidad", "Análisis y optimización de campañas.", "megaphone"],
    ["Automatización", "Procesos y recorridos de clientes.", "workflow"],
    ["Analítica", "Interpretación de datos e informes.", "chart-line"],
  ];

  const cards = uses
    .map(([title, text, glyph], index) =>
      reveal(
        `<article class="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-signal-400/35 hover:bg-white/[0.07]">
            <span aria-hidden="true" class="absolute -top-16 -right-16 size-40 rounded-full bg-brand-500/0 blur-2xl transition-colors duration-500 group-hover:bg-brand-500/25"></span>
            <span class="relative grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-signal-400 transition-colors duration-300 group-hover:border-signal-400/40">${icon(glyph, "size-6")}</span>
            <h3 class="relative mt-6 font-display text-xl font-bold tracking-tight text-white">${title}</h3>
            <p class="relative mt-2.5 text-[0.95rem] leading-relaxed text-white/60">${text}</p>
          </article>`,
        { delay: (index % 3) * 90, className: "h-full" },
      ),
    )
    .join("\n          ");

  return `<section id="inteligencia-artificial" class="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" class="absolute inset-0">
        <div class="absolute inset-0 bg-grid-dark opacity-40"></div>
        <div class="absolute top-0 left-1/4 size-[36rem] -translate-y-1/2 rounded-full bg-brand-600/30 blur-3xl"></div>
        <div class="absolute right-0 bottom-0 size-[26rem] translate-y-1/3 rounded-full bg-signal-500/12 blur-3xl"></div>
      </div>

      <div class="relative container-bs section-y">
        ${reveal(
          `${eyebrow("Inteligencia Artificial", "dark")}
          <h2 class="mt-6 font-display text-[2rem] leading-[1.08] font-bold tracking-tighter text-white sm:text-4xl lg:text-[3rem]">
            La Inteligencia Artificial <span class="text-signal-400">ya es parte del Marketing</span>
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-white/65">
            No enseñamos IA como una herramienta aislada. La incorporamos dentro de los procesos reales de Marketing
            Digital para investigar, crear, analizar, automatizar y tomar mejores decisiones.
          </p>`,
          { className: "max-w-3xl" },
        )}

        <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          ${cards}
        </div>

        ${reveal(
          `<div class="mt-12 flex flex-col items-start gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <p class="max-w-xl leading-relaxed text-white/70">
              Todo lo que enseñamos sobre IA lo usamos antes en proyectos reales. Si funciona, entra al curso.
            </p>
            ${button({
              label: "Aprender Marketing + IA",
              href: "/cursos/inteligencia-artificial-aplicada-al-marketing/",
              from: FROM,
              size: "lg",
              variant: "signal",
              icon: "arrow-right",
            })}
          </div>`,
          { delay: 120 },
        )}
      </div>
    </section>`;
}

/* ------------------------------------------------------------------ */

function certification() {
  const details = [
    ["Nombre del curso", "Con el detalle de los contenidos trabajados."],
    ["Carga horaria", "Las horas de formación completadas."],
    ["Descarga inmediata", "Disponible al finalizar la última clase."],
  ];

  return section({
    id: "certificacion",
    tone: "muted",
    content: `        <div class="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div class="order-2 lg:order-1 lg:col-span-6">
            ${reveal(certificateMockup("w-full max-w-xl"))}
          </div>

          <div class="order-1 lg:order-2 lg:col-span-6">
            ${reveal(
              `${eyebrow("Certificación")}
              <h2 class="mt-6 font-display text-[1.9rem] leading-[1.1] font-bold tracking-tighter sm:text-4xl lg:text-[2.75rem]">
                Certificá <span class="mark-signal">lo que aprendés</span>
              </h2>
              <p class="mt-5 max-w-lg text-lg leading-relaxed text-muted">
                Al completar cada formación podrás acceder a un certificado de participación que reconoce las
                herramientas y conocimientos incorporados durante el curso.
              </p>

              <ul class="mt-8 flex flex-col gap-4">
                ${details
                  .map(
                    ([title, text]) =>
                      `<li class="flex gap-4">
                    <span class="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">${icon("check", "size-4")}</span>
                    <span>
                      <span class="block font-display font-semibold tracking-tight">${title}</span>
                      <span class="mt-0.5 block text-sm text-muted">${text}</span>
                    </span>
                  </li>`,
                  )
                  .join("\n                ")}
              </ul>

              <div class="mt-10">
                ${button({ label: "Ver cursos certificados", href: "/cursos/", from: FROM, size: "lg", icon: "award", iconPosition: "start" })}
              </div>`,
              { delay: 80 },
            )}
          </div>
        </div>`,
  });
}

/* ------------------------------------------------------------------ */

function experience() {
  const stats = site.stats
    .map((stat, index) => {
      const borders = [
        "border-line",
        index < site.stats.length - 1 ? "border-b" : "",
        index % 2 === 0 ? "sm:border-r" : "",
        index >= site.stats.length - 2 ? "sm:border-b-0" : "",
        "lg:border-r lg:border-b-0 lg:last:border-r-0",
      ]
        .filter(Boolean)
        .join(" ");

      return reveal(
        `<div class="flex h-full flex-col justify-between gap-6 bg-white p-7 lg:p-8">
            <p class="font-display text-4xl font-extrabold tracking-tighter text-ink lg:text-5xl">
              <span data-countup="${stat.value ?? ""}" data-suffix="${stat.suffix}">${stat.value === null ? "—" : "0"}</span>
            </p>
            <div>
              <p class="font-display text-[0.95rem] font-semibold tracking-tight">${esc(stat.label)}</p>
              <p class="mt-1 text-sm leading-relaxed text-muted">${esc(stat.hint)}</p>
            </div>
          </div>`,
        { delay: index * 80, className: borders },
      );
    })
    .join("\n          ");

  return section({
    id: "experiencia",
    content: `        <div class="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div class="lg:col-span-5">
            ${reveal(`${eyebrow("Experiencia")}
              <h2 class="mt-6 font-display text-[1.9rem] leading-[1.1] font-bold tracking-tighter sm:text-4xl lg:text-[2.6rem]">
                Marketing Digital explicado desde la <span class="mark-signal">experiencia real</span>
              </h2>`)}
          </div>

          <div class="lg:col-span-7">
            ${reveal(
              `<div class="flex flex-col gap-5 text-lg leading-relaxed text-muted">
                <p>
                  Brand Solutions trabaja todos los días desarrollando estrategias, campañas, contenidos, sitios web y
                  acciones digitales para marcas, profesionales y empresas. Esa experiencia se transforma en cada
                  capacitación.
                </p>
                <p class="font-medium text-ink">
                  No enseñamos Marketing Digital solamente desde la teoría. Enseñamos lo que usamos, probamos y
                  aplicamos.
                </p>
              </div>

              <div class="mt-9 flex flex-wrap gap-3">
                ${button({ label: "Conocer Brand Solutions", href: "/nosotros/", from: FROM, variant: "outline", icon: "arrow-right" })}
                ${button({ label: "Ver servicios", href: "/servicios/", from: FROM, variant: "ghost", icon: "arrow-up-right" })}
              </div>`,
              { delay: 100 },
            )}
          </div>
        </div>

        <div class="mt-14 grid overflow-hidden rounded-3xl border border-line bg-white sm:grid-cols-2 lg:grid-cols-4">
          ${stats}
        </div>

        ${reveal(
          `<p class="mt-5 flex items-center gap-2 text-xs text-muted-2">
            ${icon("refresh", "size-3.5")}
            Los indicadores se editan desde <code class="rounded bg-paper-2 px-1.5 py-0.5 font-mono">data/site.ts</code>.
          </p>`,
        )}`,
  });
}

/* ------------------------------------------------------------------ */

function testimonialsSection() {
  const slides = testimonials.map((testimonial) => {
    const a = accentMap[testimonial.accent];
    return `<figure class="flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-shadow duration-300 hover:shadow-card">
                ${icon("quote", "size-8 text-line-2")}
                <blockquote class="mt-5 flex-1 text-[0.975rem] leading-relaxed text-ink-2">${esc(testimonial.quote)}</blockquote>
                ${stars(testimonial.rating, "mt-6")}
                <figcaption class="mt-5 flex items-center gap-3.5 border-t border-line pt-5">
                  <span class="grid size-11 shrink-0 place-items-center rounded-full font-display text-sm font-bold ${a.soft} ${a.text}" aria-hidden="true">${esc(testimonial.initials)}</span>
                  <span class="min-w-0">
                    <span class="block truncate font-display text-[0.95rem] font-semibold tracking-tight">${esc(testimonial.name)}</span>
                    <span class="block truncate text-xs text-muted">${esc(testimonial.role)}</span>
                    <span class="mt-1 block truncate text-xs font-medium text-brand-700">${esc(testimonial.course)}</span>
                  </span>
                </figcaption>
              </figure>`;
  });

  const notice = hasPlaceholderTestimonials
    ? `<p class="mt-8 flex items-start gap-2.5 rounded-2xl border border-dashed border-line-2 bg-white/60 p-4 text-xs leading-relaxed text-muted">
          ${icon("pen", "mt-0.5 size-4 shrink-0 text-muted-2")}
          <span>
            Estos testimonios son de ejemplo. Reemplazalos por comentarios reales en
            <code class="rounded bg-paper-2 px-1.5 py-0.5 font-mono">data/testimonials.ts</code> y poné
            <code class="rounded bg-paper-2 px-1.5 py-0.5 font-mono">placeholder: false</code> para que este aviso
            desaparezca.
          </span>
        </p>`
    : "";

  return section({
    id: "testimonios",
    tone: "muted",
    content: `        ${sectionHeading({
      eyebrow: "Testimonios",
      title: 'Personas que ya <span class="mark-signal">empezaron a aplicarlo</span>',
      lead: "Comentarios de quienes hicieron los cursos y llevaron lo aprendido a su propio proyecto.",
    })}

        ${reveal(carousel(slides, "Testimonios de estudiantes"), { className: "mt-12 lg:mt-14" })}

        ${notice}`,
  });
}

/* ------------------------------------------------------------------ */

function resourcesSection() {
  const cards = resources
    .map((resource, index) => reveal(resourceCard(resource, FROM), { delay: (index % 3) * 90, className: "h-full" }))
    .join("\n        ");

  return section({
    id: "recursos",
    content: `        ${sectionHeading({
      eyebrow: "Recursos digitales",
      title: 'Herramientas para <span class="text-gradient-brand">trabajar mejor</span>',
      lead: "Recursos prácticos para ahorrar tiempo y organizar tu estrategia digital.",
      actions: button({
        label: "Ver todos los recursos",
        href: "/recursos/",
        from: FROM,
        variant: "outline",
        icon: "arrow-right",
        className: "hidden lg:inline-flex",
      }),
    })}

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        ${cards}
        </div>

        <div class="mt-10 flex justify-center lg:hidden">
          ${button({ label: "Ver todos los recursos", href: "/recursos/", from: FROM, variant: "outline", size: "lg", fullWidth: true, icon: "arrow-right" })}
        </div>`,
  });
}

/* ------------------------------------------------------------------ */

export function leadMagnetSection(from = FROM) {
  const bullets = [
    "Investigar tu mercado y tu competencia",
    "Planificar contenido para un mes completo",
    "Escribir anuncios y textos de venta",
    "Analizar resultados y detectar oportunidades",
  ];

  return `<section id="recurso-gratuito" class="relative overflow-hidden bg-brand-700 text-white">
      <div aria-hidden="true" class="absolute inset-0">
        <div class="absolute inset-0 bg-grid-dark opacity-40"></div>
        <div class="absolute -top-32 left-1/3 size-[30rem] rounded-full bg-brand-400/30 blur-3xl"></div>
        <div class="absolute -right-20 -bottom-32 size-[26rem] rounded-full bg-signal-400/20 blur-3xl"></div>
      </div>

      <div class="relative container-bs section-y">
        <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div class="lg:col-span-6">
            ${reveal(`<span class="inline-flex items-center gap-2 rounded-full bg-signal-400 px-3.5 py-1.5 text-[0.7rem] font-bold tracking-[0.14em] text-ink uppercase">
                ${icon("download", "size-3.5")}
                Empezá por acá
              </span>

              <h2 class="mt-6 font-display text-[1.9rem] leading-[1.08] font-bold tracking-tighter text-white sm:text-4xl lg:text-[2.85rem]">
                Descargá gratis:<br />
                <span class="text-signal-400">30 prompts de IA</span> para Marketing Digital
              </h2>

              <p class="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                Ideas listas para investigar, planificar contenido, escribir anuncios, analizar competidores y organizar
                tu estrategia.
              </p>

              <ul class="mt-8 flex flex-col gap-3">
                ${bullets
                  .map(
                    (bullet) =>
                      `<li class="flex items-center gap-3 text-[0.95rem] text-white/80">
                    <span class="grid size-6 shrink-0 place-items-center rounded-full bg-white/12 text-signal-400">${icon("check", "size-3.5")}</span>
                    ${bullet}
                  </li>`,
                  )
                  .join("\n                ")}
              </ul>`)}
          </div>

          <div class="lg:col-span-6 lg:pl-8">
            ${reveal(
              `<div class="rounded-3xl bg-paper p-7 text-ink shadow-lift sm:p-9">
                <p class="font-display text-lg font-bold tracking-tight">Completá y te lo enviamos</p>
                <p class="mt-1.5 mb-6 text-sm text-muted">Te llega por email en menos de dos minutos.</p>
                ${leadMagnetForm(undefined, `lm-${from.replace(/\W+/g, "") || "home"}`)}
              </div>`,
              { delay: 140 },
            )}
          </div>
        </div>
      </div>
    </section>`;
}

/* ------------------------------------------------------------------ */

export function newsletterSection(suffix = "home") {
  return `<section id="newsletter" class="bg-paper-2">
      <div class="container-bs section-y-sm">
        ${reveal(`<div class="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
            <div aria-hidden="true" class="absolute inset-0">
              <div class="absolute inset-0 bg-grid-dark opacity-40"></div>
              <div class="absolute -top-24 -right-16 size-80 rounded-full bg-signal-500/15 blur-3xl"></div>
            </div>

            <div class="relative grid items-center gap-10 lg:grid-cols-12">
              <div class="lg:col-span-6">
                <span class="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.14em] text-signal-400 uppercase">
                  ${icon("mail", "size-3.5")}
                  Newsletter
                </span>
                <h2 class="mt-4 font-display text-[1.75rem] leading-[1.12] font-bold tracking-tighter text-white sm:text-[2.1rem]">
                  Una idea de Marketing que puedas usar.
                </h2>
                <p class="mt-4 max-w-md leading-relaxed text-white/60">
                  Estrategias, herramientas, IA, tendencias y recursos para aplicar a tus proyectos.
                </p>
              </div>

              <div class="lg:col-span-6">
                ${newsletterForm({ tone: "dark", suffix: `nl-${suffix}` })}
                <p class="mt-4 text-xs text-white/45">Sin spam. Solo contenido que valga la pena abrir.</p>
              </div>
            </div>
          </div>`)}
      </div>
    </section>`;
}

/* ------------------------------------------------------------------ */

function servicesSection() {
  const items = services
    .map((service, index) => {
      const borders = [
        "border-line",
        index % 2 === 0 ? "sm:border-r" : "",
        index < services.length - 1 ? "border-b" : "",
        index >= services.length - 2 ? "sm:border-b-0" : "",
      ]
        .filter(Boolean)
        .join(" ");

      return `<li class="${borders}">
                    <a href="${link(`/servicios/#${service.slug}`)}" class="group flex h-full items-start gap-4 p-6 transition-colors duration-200 hover:bg-paper-2/70 sm:p-7">
                      <span class="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-paper-2 text-ink-3 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">${icon("arrow-up-right", "size-4")}</span>
                      <span>
                        <span class="block font-display font-semibold tracking-tight">${esc(service.title)}</span>
                        <span class="mt-1 block text-sm leading-relaxed text-muted">${esc(service.excerpt)}</span>
                      </span>
                    </a>
                  </li>`;
    })
    .join("\n                  ");

  return section({
    id: "servicios",
    content: `        ${reveal(`<div class="overflow-hidden rounded-[2rem] border border-line bg-white">
            <div class="grid lg:grid-cols-12">
              <div class="border-b border-line p-8 sm:p-10 lg:col-span-5 lg:border-r lg:border-b-0 lg:p-12">
                ${eyebrow("Servicios")}
                <h2 class="mt-6 font-display text-[1.8rem] leading-[1.1] font-bold tracking-tighter sm:text-[2.15rem]">
                  ¿Necesitás que <span class="mark-signal">lo hagamos con vos</span>?
                </h2>
                <p class="mt-5 leading-relaxed text-muted">
                  Además de enseñar Marketing Digital, ayudamos a marcas y empresas a diseñar y ejecutar su estrategia
                  digital.
                </p>
                <div class="mt-8">
                  ${button({ label: "Conocer nuestros servicios", href: "/servicios/", from: FROM, size: "lg", variant: "dark", icon: "arrow-right" })}
                </div>
              </div>

              <div class="lg:col-span-7">
                <ul class="grid sm:grid-cols-2">
                  ${items}
                </ul>
              </div>
            </div>
          </div>`)}`,
  });
}

/* ------------------------------------------------------------------ */

function blogSection() {
  const latest = sortedPosts().slice(0, 3);
  const cards = latest
    .map((post, index) => reveal(postCard(post, FROM), { delay: index * 90, className: "h-full" }))
    .join("\n        ");

  return section({
    id: "blog",
    tone: "muted",
    content: `        ${sectionHeading({
      eyebrow: "Blog",
      title: 'Ideas, herramientas y <span class="text-gradient-brand">tendencias</span>',
      lead: "Lo que vamos aprendiendo en los proyectos, explicado para que puedas aplicarlo.",
      actions: button({
        label: "Ver todos los artículos",
        href: "/blog/",
        from: FROM,
        variant: "outline",
        icon: "arrow-right",
        className: "hidden lg:inline-flex",
      }),
    })}

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        ${cards}
        </div>

        <div class="mt-10 flex justify-center lg:hidden">
          ${button({ label: "Ver todos los artículos", href: "/blog/", from: FROM, variant: "outline", size: "lg", fullWidth: true, icon: "arrow-right" })}
        </div>`,
  });
}

/* ------------------------------------------------------------------ */

function finalCta() {
  return `<section class="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" class="absolute inset-0">
        <div class="absolute inset-0 bg-grid-dark opacity-40"></div>
        <div class="absolute top-1/2 left-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/35 blur-3xl"></div>
        <div class="absolute -bottom-32 left-1/4 size-[24rem] rounded-full bg-signal-500/15 blur-3xl"></div>
      </div>

      <div class="relative container-bs section-y">
        ${reveal(
          `<h2 class="font-display text-[2.1rem] leading-[1.06] font-extrabold tracking-tighter text-white text-balance sm:text-5xl lg:text-[3.4rem]">
            El Marketing cambia <span class="text-signal-400">todo el tiempo</span>.
          </h2>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            La mejor forma de seguir creciendo es seguir aprendiendo.
          </p>
          <p class="mt-3 font-display text-lg font-semibold text-white">Elegí por dónde empezar.</p>

          <div class="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            ${button({ label: "Ver cursos", href: "/cursos/", from: FROM, size: "lg", variant: "signal", icon: "arrow-right", className: "sm:min-w-52" })}
            ${button({ label: "Ver recursos gratuitos", href: "/recursos/?filtro=gratis", from: FROM, size: "lg", variant: "outlineLight", icon: "download", iconPosition: "start" })}
          </div>`,
          { className: "mx-auto flex max-w-3xl flex-col items-center text-center" },
        )}
      </div>
    </section>`;
}

/* ------------------------------------------------------------------ */

export function homeBody() {
  return [
    hero(),
    trustStrip(),
    coursesSection(),
    featuredProgram(),
    methodology(),
    onlineLearning(),
    aiSection(),
    certification(),
    experience(),
    testimonialsSection(),
    resourcesSection(),
    leadMagnetSection(),
    newsletterSection(),
    servicesSection(),
    blogSection(),
    finalCta(),
  ].join("\n\n");
}
