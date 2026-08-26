import { site, mainNav, footerNav } from "../../data/site.ts";
import { esc, rel, asset, jsonLd } from "./util.mjs";
import { icon, logoMark } from "./render.mjs";
import { button } from "./ui.mjs";

const SOCIAL_ICONS = {
  Instagram: "instagram",
  LinkedIn: "linkedin",
  YouTube: "youtube",
  TikTok: "tiktok",
};

const clean = (path) => `${site.url.replace(/\/$/, "")}${path}`;

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

function header(ctx) {
  const link = (to) => rel(ctx.path, to);

  const navItems = mainNav
    .map((item) => {
      const active = ctx.path === item.href + "/" || ctx.path.startsWith(item.href + "/");
      return `
              <li>
                <a
                  href="${link(item.href + "/")}"
                  ${active ? 'aria-current="page"' : ""}
                  class="relative rounded-full px-3.5 py-2 text-[0.925rem] font-medium transition-colors duration-200 ${
                    active ? "text-ink" : "text-ink-3/85 hover:bg-paper-2 hover:text-ink"
                  }"
                >
                  ${esc(item.label)}${
                    active
                      ? '<span class="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand-600" aria-hidden="true"></span>'
                      : ""
                  }
                </a>
              </li>`;
    })
    .join("");

  const mobileItems = mainNav
    .map(
      (item) => `
              <li class="border-b border-line last:border-0">
                <a
                  href="${link(item.href + "/")}"
                  class="flex items-center justify-between py-4 font-display text-2xl font-semibold tracking-tight"
                >
                  ${esc(item.label)}
                  ${icon("arrow-up-right", "size-5 text-muted-2")}
                </a>
              </li>`,
    )
    .join("");

  return `
    <a
      href="#contenido"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >Saltar al contenido</a
    >

    <header data-header class="fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]">
      <div class="container-bs">
        <div data-header-bar class="flex items-center justify-between gap-6 transition-all duration-300">
          <a href="${link("/")}" aria-label="Brand Solutions, ir al inicio" class="group inline-flex items-center gap-2.5">
            ${logoMark("size-9 shrink-0 transition-transform duration-300 group-hover:-rotate-6")}
            <span class="font-display text-[1.05rem] font-bold tracking-tight sm:text-[1.15rem]">
              <span class="text-ink">Brand</span> <span class="text-brand-600">Solutions</span>
            </span>
          </a>

          <nav aria-label="Navegación principal" class="hidden lg:block">
            <ul class="flex items-center gap-1">${navItems}
            </ul>
          </nav>

          <div class="hidden items-center gap-2.5 lg:flex">
            <a
              href="${link("/login/")}"
              class="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.925rem] font-medium text-ink-3/85 transition-colors duration-200 hover:bg-paper-2 hover:text-ink"
            >
              ${icon("lock", "size-4")}
              Iniciar sesión
            </a>
            ${button({ label: "Ver cursos", href: "/cursos/", from: ctx.path, size: "sm", icon: "arrow-right", className: "px-5" })}
          </div>

          <button
            type="button"
            data-menu-toggle
            aria-expanded="false"
            aria-controls="menu-movil"
            aria-label="Abrir menú"
            class="grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink lg:hidden"
          >
            <span data-menu-icon="open">${icon("menu", "size-5")}</span>
            <span data-menu-icon="close" hidden>${icon("close", "size-5")}</span>
          </button>
        </div>
      </div>

      <div id="menu-movil" hidden class="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden">
        <div class="container-bs flex flex-col gap-8 py-8">
          <nav aria-label="Navegación móvil">
            <ul class="flex flex-col">${mobileItems}
            </ul>
          </nav>

          <div class="flex flex-col gap-3">
            ${button({ label: "Ver cursos", href: "/cursos/", from: ctx.path, size: "lg", icon: "arrow-right", fullWidth: true })}
            ${button({
              label: "Iniciar sesión",
              href: "/login/",
              from: ctx.path,
              size: "lg",
              variant: "outline",
              icon: "lock",
              iconPosition: "start",
              fullWidth: true,
            })}
          </div>

          <p class="text-sm text-muted">
            ¿Necesitás ayuda para elegir?
            <a href="${link("/contacto/")}" class="font-semibold text-brand-700 underline underline-offset-4">Escribinos</a>
          </p>
        </div>
      </div>
    </header>`;
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function footer(ctx) {
  const link = (to) => rel(ctx.path, to);
  const year = new Date().getFullYear();

  const socials = site.social
    .map(
      (network) => `
                <li>
                  <a
                    href="${network.href}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="grid size-11 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-signal-400 hover:bg-white/5 hover:text-signal-400"
                  >
                    ${icon(SOCIAL_ICONS[network.name] ?? "globe", "size-5", network.name)}
                  </a>
                </li>`,
    )
    .join("");

  const columns = footerNav
    .map(
      (column) => `
              <nav aria-label="${esc(column.title)}">
                <h2 class="font-display text-[0.72rem] font-bold tracking-[0.16em] text-white/40 uppercase">${esc(column.title)}</h2>
                <ul class="mt-4 flex flex-col gap-3">
                  ${column.links
                    .map(
                      (item) =>
                        `<li><a href="${link(item.href)}" class="text-[0.925rem] text-white/70 transition-colors duration-200 hover:text-signal-400">${esc(item.label)}</a></li>`,
                    )
                    .join("\n                  ")}
                </ul>
              </nav>`,
    )
    .join("");

  return `
    <footer class="bg-ink text-white">
      <div class="container-bs py-16 lg:py-20">
        <div class="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div class="lg:col-span-4">
            <a href="${link("/")}" class="inline-flex items-center gap-2.5" aria-label="Brand Solutions, ir al inicio">
              ${logoMark("size-10")}
              <span class="font-display text-lg font-bold tracking-tight">
                Brand <span class="text-signal-400">Solutions</span>
              </span>
            </a>

            <p class="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/60">
              Marketing Digital, estrategia, herramientas e Inteligencia Artificial para aprender, aplicar y crecer.
            </p>

            <ul class="mt-7 flex flex-wrap gap-2.5">${socials}
            </ul>

            <div class="mt-7 flex flex-col gap-2 text-sm text-white/55">
              <a href="mailto:${site.contact.email}" class="inline-flex items-center gap-2 transition-colors hover:text-white">
                ${icon("mail", "size-4")}
                ${esc(site.contact.email)}
              </a>
              <span class="inline-flex items-center gap-2">
                ${icon("pin", "size-4")}
                ${esc(site.contact.city)}, ${esc(site.contact.country)}
              </span>
            </div>
          </div>

          <div class="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">${columns}
          </div>
        </div>

        <div class="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© Brand Solutions ${year}. Todos los derechos reservados.</p>
          <p class="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="${link("/terminos-y-condiciones/")}" class="transition-colors hover:text-white">Términos y condiciones</a>
            <a href="${link("/politica-de-privacidad/")}" class="transition-colors hover:text-white">Política de privacidad</a>
          </p>
        </div>
      </div>
    </footer>`;
}

/* ------------------------------------------------------------------ */
/* Documento                                                           */
/* ------------------------------------------------------------------ */

/**
 * Arma el documento HTML completo de una página.
 *
 * @param {object} options
 * @param {string} options.path      Ruta del sitio, por ejemplo "/cursos/".
 * @param {string} options.title     Título de la pestaña y de Open Graph.
 * @param {string} options.description
 * @param {string} options.body      Contenido de <main>.
 * @param {object|object[]} [options.schema] Datos estructurados JSON-LD.
 * @param {string} [options.ogImage] Ruta de la imagen social.
 * @param {boolean} [options.noIndex]
 * @param {string} [options.ogType]
 */
export function page({
  path,
  title,
  description,
  body,
  schema,
  ogImage = "/assets/img/og-default.png",
  noIndex = false,
  ogType = "website",
  bodyEnd = "",
}) {
  const ctx = { path };
  const canonical = clean(path);
  const ogUrl = ogImage.startsWith("http") ? ogImage : clean(ogImage);

  return `<!doctype html>
<html lang="es-AR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${canonical}" />
    <meta name="robots" content="${noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1"}" />
    <meta name="author" content="${esc(site.name)}" />
    <meta name="theme-color" content="#fcfbf8" media="(prefers-color-scheme: light)" />
    <meta name="theme-color" content="#0c0a1d" media="(prefers-color-scheme: dark)" />
    <meta name="format-detection" content="telephone=no" />

    <meta property="og:type" content="${ogType}" />
    <meta property="og:site_name" content="${esc(site.name)}" />
    <meta property="og:locale" content="${site.locale}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:image" content="${ogUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="${esc(title)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${ogUrl}" />

    <link rel="icon" href="${asset(path, "img/favicon.svg")}" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="${asset(path, "img/favicon.svg")}" />

    <link rel="preload" as="font" type="font/woff2" href="${asset(path, "fonts/inter-latin.woff2")}" crossorigin />
    <link rel="preload" as="font" type="font/woff2" href="${asset(path, "fonts/sora-latin.woff2")}" crossorigin />
    <link rel="stylesheet" href="${asset(path, "css/fonts.css")}" />
    <link rel="stylesheet" href="${asset(path, "css/styles.css")}" />

    ${schema ? jsonLd(schema) : ""}
  </head>
  <body class="flex min-h-dvh flex-col antialiased">
${header(ctx)}

    <main id="contenido" class="flex-1 pt-16 lg:pt-18">
${body}
    </main>

${footer(ctx)}
${bodyEnd}
    <script src="${asset(path, "js/main.js")}" defer></script>
  </body>
</html>
`;
}
