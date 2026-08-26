/** Primitivas de interfaz: replican exactamente los componentes del proyecto. */
import { esc, cx, rel, formatDateShort } from "./util.mjs";
import { icon, cover } from "./render.mjs";
import { accent as accentMap } from "../../lib/accents.ts";
import { formatPrice } from "../../data/site.ts";

/* ------------------------------------------------------------------ */
/* Botones                                                             */
/* ------------------------------------------------------------------ */

const BTN_BASE =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-50 active:translate-y-px";

const BTN_VARIANTS = {
  primary:
    "bg-brand-600 text-white shadow-[0_14px_30px_-14px_rgba(74,31,224,0.7)] hover:bg-brand-700 hover:shadow-[0_18px_38px_-14px_rgba(74,31,224,0.75)] hover:-translate-y-0.5",
  signal:
    "bg-signal-400 text-ink shadow-[0_14px_30px_-16px_rgba(143,184,31,0.9)] hover:bg-signal-500 hover:-translate-y-0.5",
  dark: "bg-ink text-white hover:bg-ink-2 hover:-translate-y-0.5 shadow-[0_14px_30px_-16px_rgba(12,10,29,0.8)]",
  outline: "border border-line-2 bg-white text-ink hover:border-ink hover:bg-paper-2 hover:-translate-y-0.5",
  ghost: "text-ink-2 hover:bg-paper-2 hover:text-ink",
  light: "bg-white text-ink hover:bg-paper-2 hover:-translate-y-0.5 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.6)]",
  outlineLight: "border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
};

const BTN_SIZES = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5.5 text-[0.95rem]",
  lg: "min-h-14 px-7 text-base sm:text-[1.0625rem]",
};

const ICON_MOTION = {
  "arrow-right": "group-hover/btn:translate-x-1",
  "arrow-up-right": "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5",
  download: "group-hover/btn:translate-y-0.5",
};

/**
 * Botón o enlace con la misma apariencia que el componente Button del proyecto.
 * `href` puede ser una ruta del sitio ("/cursos/"), y `from` la ruta actual.
 */
export function button({
  label,
  href,
  from = "/",
  variant = "primary",
  size = "md",
  icon: iconName,
  iconPosition = "end",
  fullWidth = false,
  className = "",
  type = "button",
  disabled = false,
  attrs = "",
}) {
  const classes = cx(BTN_BASE, BTN_VARIANTS[variant], BTN_SIZES[size], fullWidth ? "w-full" : "", className);
  const glyph = iconName
    ? icon(iconName, cx("size-[1.15em] transition-transform duration-200", ICON_MOTION[iconName] ?? ""))
    : "";
  const inner = iconName
    ? iconPosition === "start"
      ? `${glyph}${label}`
      : `${label}${glyph}`
    : label;

  if (href !== undefined) {
    return `<a href="${rel(from, href)}" class="${classes}"${attrs ? " " + attrs : ""}>${inner}</a>`;
  }
  return `<button type="${type}" class="${classes}"${disabled ? " disabled" : ""}${attrs ? " " + attrs : ""}>${inner}</button>`;
}

/* ------------------------------------------------------------------ */
/* Encabezados de sección                                              */
/* ------------------------------------------------------------------ */

export function eyebrow(text, tone = "light") {
  const wrap =
    tone === "light"
      ? "border-line bg-white/70 text-ink-3 backdrop-blur"
      : "border-white/20 bg-white/10 text-white/90 backdrop-blur";
  const dot = tone === "light" ? "bg-brand-600" : "bg-signal-400";
  return `<span class="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] uppercase ${wrap}">
            <span class="size-1.5 rounded-full ${dot}" aria-hidden="true"></span>
            ${text}
          </span>`;
}

export function sectionHeading({
  eyebrow: eyebrowText,
  title,
  lead,
  tag = "h2",
  align = "left",
  tone = "light",
  actions = "",
  className = "",
}) {
  const titleClasses = cx(
    "font-display font-bold tracking-tighter",
    tag === "h1"
      ? "text-[2.35rem] leading-[1.06] sm:text-5xl lg:text-6xl"
      : "text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
    tone === "dark" ? "text-white" : "",
  );

  return `<div class="${cx(
    "flex flex-col gap-5",
    align === "center" ? "items-center text-center" : "",
    actions && align === "left" ? "lg:flex-row lg:items-end lg:justify-between lg:gap-10" : "",
    className,
  )}">
        <div class="${cx(
          "flex flex-col items-start gap-4",
          align === "center" ? "max-w-3xl items-center" : "max-w-2xl",
        )}">
          ${eyebrowText ? eyebrow(eyebrowText, tone) : ""}
          <${tag} class="${titleClasses}">${title}</${tag}>
          ${
            lead
              ? `<p class="text-base leading-relaxed sm:text-lg ${tone === "light" ? "text-muted" : "text-white/70"}">${lead}</p>`
              : ""
          }
        </div>
        ${actions ? `<div class="flex shrink-0 flex-wrap gap-3">${actions}</div>` : ""}
      </div>`;
}

/** Envuelve contenido con la animación de aparición al hacer scroll. */
export function reveal(content, { delay = 0, className = "", tag = "div" } = {}) {
  const style = delay ? ` style="--reveal-delay:${delay}ms"` : "";
  return `<${tag} class="${cx("reveal", className)}" data-visible="false"${style}>${content}</${tag}>`;
}

/** Sección con contenedor y ritmo vertical estándar. */
export function section({ id, tone = "paper", compact = false, content, className = "", containerClassName = "" }) {
  const tones = {
    paper: "bg-paper text-ink",
    muted: "bg-paper-2 text-ink",
    dark: "bg-ink text-white",
    brand: "bg-brand-700 text-white",
  };
  return `<section${id ? ` id="${id}"` : ""} class="${cx("relative", tones[tone], className)}">
      <div class="${cx("container-bs", compact ? "section-y-sm" : "section-y", containerClassName)}">
${content}
      </div>
    </section>`;
}

/* ------------------------------------------------------------------ */
/* Miga de pan                                                          */
/* ------------------------------------------------------------------ */

export function breadcrumbs(items, from, tone = "light") {
  const parts = items
    .map((item, index) => {
      const last = index === items.length - 1;
      const sep =
        index > 0
          ? icon("chevron-right", `size-3.5 ${tone === "light" ? "text-muted-2" : "text-white/35"}`)
          : "";
      const label = last
        ? `<span aria-current="page" class="font-medium ${tone === "light" ? "text-ink-3" : "text-white/75"}">${esc(item.name)}</span>`
        : `<a href="${rel(from, item.path)}" class="transition-colors ${
            tone === "light" ? "text-muted hover:text-ink" : "text-white/50 hover:text-white"
          }">${esc(item.name)}</a>`;
      return `<li class="flex items-center gap-1.5">${sep}${label}</li>`;
    })
    .join("");

  return `<nav aria-label="Miga de pan" class="mb-6">
          <ol class="flex flex-wrap items-center gap-1.5 text-[0.8rem]">${parts}</ol>
        </nav>`;
}

/* ------------------------------------------------------------------ */
/* Encabezado de páginas internas                                       */
/* ------------------------------------------------------------------ */

export function pageHeader({ from, eyebrow: eyebrowText, title, lead, crumbs, actions = "", tone = "light" }) {
  const bg =
    tone === "light"
      ? `<div class="absolute inset-0 bg-grid opacity-50"></div>
        <div class="absolute -top-40 -right-24 size-[30rem] rounded-full bg-brand-100/70 blur-3xl"></div>
        <div class="absolute -top-24 -left-32 size-[24rem] rounded-full bg-signal-200/40 blur-3xl"></div>`
      : `<div class="absolute inset-0 bg-grid-dark opacity-40"></div>
        <div class="absolute -top-40 right-1/4 size-[32rem] rounded-full bg-brand-600/30 blur-3xl"></div>`;

  return `<section class="relative overflow-hidden ${tone === "light" ? "bg-paper" : "bg-ink text-white"}">
      <div aria-hidden="true" class="pointer-events-none absolute inset-0">
        ${bg}
      </div>

      <div class="relative container-bs pt-10 pb-14 sm:pt-12 lg:pt-16 lg:pb-20">
        <div class="grid gap-10">
          <div class="max-w-3xl">
            ${crumbs ? breadcrumbs(crumbs, from, tone) : ""}
            ${reveal(`${eyebrowText ? eyebrow(eyebrowText, tone) : ""}
              <h1 class="${cx(
                "font-display text-[2.15rem] leading-[1.06] font-extrabold tracking-tighter sm:text-5xl lg:text-[3.25rem]",
                eyebrowText ? "mt-5" : "",
                tone === "dark" ? "text-white" : "",
              )}">${title}</h1>
              ${
                lead
                  ? `<p class="mt-5 max-w-2xl text-lg leading-relaxed ${tone === "light" ? "text-muted" : "text-white/65"}">${lead}</p>`
                  : ""
              }
              ${actions ? `<div class="mt-8 flex flex-wrap gap-3">${actions}</div>` : ""}`)}
          </div>
        </div>
      </div>
    </section>`;
}

/* ------------------------------------------------------------------ */
/* Acordeón                                                             */
/* ------------------------------------------------------------------ */

let accordionId = 0;

/**
 * @param {{badge?:string,title:string,subtitle?:string,content:string}[]} items
 */
export function accordion(items, { defaultOpen = 0, className = "" } = {}) {
  const base = `ac-${accordionId++}`;

  const rows = items
    .map((item, index) => {
      const open = defaultOpen === index;
      const panelId = `${base}-panel-${index}`;
      const buttonId = `${base}-button-${index}`;
      return `<div data-accordion-item data-open="${open}">
            <h3 class="m-0">
              <button
                id="${buttonId}"
                type="button"
                data-accordion-trigger
                aria-expanded="${open}"
                aria-controls="${panelId}"
                class="flex w-full items-center gap-4 px-5 py-5 text-left transition-colors hover:bg-paper-2/70 sm:px-6"
              >
                ${item.badge ? `<span class="font-display text-sm font-bold text-brand-600 tabular-nums">${esc(item.badge)}</span>` : ""}
                <span class="flex-1">
                  <span class="block font-display text-base font-semibold tracking-tight sm:text-lg">${esc(item.title)}</span>
                  ${item.subtitle ? `<span class="mt-1 block text-sm text-muted">${esc(item.subtitle)}</span>` : ""}
                </span>
                <span
                  data-accordion-icon
                  class="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-paper text-ink-3 transition-all duration-300"
                  aria-hidden="true"
                >${icon("chevron-down", "size-4")}</span>
              </button>
            </h3>
            <div
              id="${panelId}"
              role="region"
              aria-labelledby="${buttonId}"
              ${open ? "" : "hidden"}
              class="${cx("px-5 pb-6 text-ink-3 sm:px-6", item.badge ? "sm:pl-14" : "")}"
            >
              <div class="text-[0.95rem] leading-relaxed">${item.content}</div>
            </div>
          </div>`;
    })
    .join("\n          ");

  return `<div class="${cx("divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white", className)}">
          ${rows}
        </div>`;
}

/* ------------------------------------------------------------------ */
/* Carrusel                                                             */
/* ------------------------------------------------------------------ */

export function carousel(items, label) {
  const slides = items
    .map(
      (item) =>
        `<div data-carousel-item class="w-[85vw] shrink-0 snap-start sm:w-[22rem] lg:w-[24rem]">${item}</div>`,
    )
    .join("\n            ");

  const control = (dir, ariaLabel, glyph) =>
    `<button
              type="button"
              data-carousel-nav="${dir}"
              aria-label="${ariaLabel}"
              class="grid size-11 place-items-center rounded-full border border-line bg-white text-ink shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-ink disabled:cursor-not-allowed disabled:opacity-30"
            >${icon(glyph, "size-5")}</button>`;

  return `<div class="relative" data-carousel>
          <div
            data-carousel-track
            role="region"
            aria-label="${esc(label)}"
            tabindex="0"
            class="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 md:-mx-2 md:px-2"
          >
            ${slides}
          </div>

          <div class="mt-7 flex items-center gap-3">
            ${control("prev", "Ver anteriores", "chevron-left")}
            ${control("next", "Ver siguientes", "chevron-right")}
            <span class="ml-1 text-sm text-muted">Deslizá para ver más</span>
          </div>
        </div>`;
}

/* ------------------------------------------------------------------ */
/* Tarjetas                                                             */
/* ------------------------------------------------------------------ */

export function courseCard(course, from) {
  const a = accentMap[course.accent];
  return `<article
        data-card
        data-category="${esc(course.category)}"
        class="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-line-2 hover:shadow-lift"
      >
        <div class="relative aspect-[16/10] overflow-hidden border-b border-line">
          <div class="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
            ${cover(course.visual, course.accent)}
          </div>
          <div class="absolute top-4 left-4 flex flex-wrap gap-2">
            <span class="rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${a.solid}">${esc(course.category)}</span>
            ${course.badge ? `<span class="rounded-full bg-ink/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">${esc(course.badge)}</span>` : ""}
          </div>
        </div>

        <div class="flex flex-1 flex-col p-6">
          <h3 class="font-display text-xl leading-snug font-bold tracking-tight">
            <a href="${rel(from, `/cursos/${course.slug}/`)}" class="before:absolute before:inset-0 before:content-['']">${esc(course.title)}</a>
          </h3>

          <p class="mt-2.5 line-clamp-3 flex-1 text-[0.95rem] leading-relaxed text-muted">${esc(course.excerpt)}</p>

          <ul class="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-line pt-5 text-sm text-ink-3">
            <li class="flex items-center gap-2">${icon("clock", "size-4 text-muted-2")}${esc(course.duration)}</li>
            <li class="flex items-center gap-2">${icon("layers", "size-4 text-muted-2")}${course.modules} módulos</li>
            <li class="flex items-center gap-2">${icon("monitor", "size-4 text-muted-2")}${esc(course.modality.split("·")[0].trim())}</li>
            <li class="flex items-center gap-2">${icon("award", "size-4 text-muted-2")}${course.certificate ? "Certificado" : "Sin certificado"}</li>
          </ul>

          <div class="mt-6 flex items-end justify-between gap-4 pt-1">
            <div>
              <p class="text-xs font-medium text-muted-2">Inversión</p>
              <p class="flex items-baseline gap-2">
                <span class="font-display text-2xl font-bold tracking-tight">${formatPrice(course.price)}</span>
                ${course.compareAtPrice ? `<span class="text-sm text-muted-2 line-through">${formatPrice(course.compareAtPrice)}</span>` : ""}
              </p>
            </div>
            <span class="inline-flex items-center gap-1.5 rounded-full bg-paper-2 px-4 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-white">
              Ver curso ${icon("arrow-right", "size-4 transition-transform duration-200 group-hover:translate-x-0.5")}
            </span>
          </div>
        </div>
      </article>`;
}

export function resourceCard(resource, from) {
  const a = accentMap[resource.accent];
  const isFree = resource.price === 0;
  return `<article
        data-card
        data-price="${isFree ? "gratis" : "premium"}"
        class="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift"
      >
        <div class="relative aspect-[16/10] overflow-hidden border-b border-line">
          <div class="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
            ${cover(resource.visual, resource.accent)}
          </div>
          <span class="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold ${
            isFree ? "bg-signal-400 text-ink" : "bg-white text-ink shadow-soft"
          }">${isFree ? "Gratis" : formatPrice(resource.price)}</span>
        </div>

        <div class="flex flex-1 flex-col p-6">
          <span class="text-xs font-semibold tracking-wide uppercase ${a.text}">${esc(resource.category)}</span>
          <h3 class="mt-2 font-display text-lg leading-snug font-bold tracking-tight">
            <a href="${rel(from, `/recursos/${resource.slug}/`)}" class="before:absolute before:inset-0 before:content-['']">${esc(resource.title)}</a>
          </h3>
          <p class="mt-2.5 line-clamp-3 flex-1 text-[0.925rem] leading-relaxed text-muted">${esc(resource.excerpt)}</p>

          <div class="mt-5 flex items-center justify-between gap-3 border-t border-line pt-5">
            <span class="inline-flex min-w-0 items-center gap-1.5 text-xs text-muted-2">
              ${icon("download", "size-4 shrink-0")}<span class="truncate">${esc(resource.format)}</span>
            </span>
            <span class="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-600">
              ${isFree ? "Descargar gratis" : "Ver recurso"} ${icon("arrow-right", "size-4 transition-transform duration-200 group-hover:translate-x-0.5")}
            </span>
          </div>
        </div>
      </article>`;
}

export function postCard(post, from) {
  const a = accentMap[post.accent];
  return `<article
        data-card
        data-category="${esc(post.category)}"
        class="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift"
      >
        <div class="relative aspect-[16/9] overflow-hidden border-b border-line">
          <div class="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
            ${cover(post.visual, post.accent)}
          </div>
          <span class="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold ${a.solid}">${esc(post.category)}</span>
        </div>

        <div class="flex flex-1 flex-col p-6">
          <h3 class="font-display text-lg leading-snug font-bold tracking-tight">
            <a href="${rel(from, `/blog/${post.slug}/`)}" class="before:absolute before:inset-0 before:content-['']">${esc(post.title)}</a>
          </h3>
          <p class="mt-2.5 line-clamp-3 flex-1 text-[0.925rem] leading-relaxed text-muted">${esc(post.excerpt)}</p>

          <div class="mt-5 flex items-center justify-between gap-3 border-t border-line pt-5 text-xs text-muted-2">
            <span class="inline-flex items-center gap-3">
              <time datetime="${post.date}">${formatDateShort(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>${esc(post.readingTime)}</span>
            </span>
            <span class="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-brand-700">
              Leer artículo ${icon("arrow-right", "size-4 transition-transform duration-200 group-hover:translate-x-0.5")}
            </span>
          </div>
        </div>
      </article>`;
}
