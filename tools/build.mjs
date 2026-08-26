/**
 * Genera la versión en HTML estático del sitio de Brand Solutions.
 *
 * Reutiliza los mismos datos y las mismas ilustraciones que la versión
 * original, de modo que el resultado sea idéntico pero sin framework:
 * el sitio final es HTML, CSS y JavaScript planos.
 */
import { mkdir, writeFile, readFile, rm, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { site } from "../data/site.ts";
import { courses } from "../data/courses.ts";
import { programs } from "../data/programs.ts";
import { resources } from "../data/resources.ts";
import { posts } from "../data/posts.ts";
import { generalFaqs } from "../data/faqs.ts";
import { organizationSchema, websiteSchema, faqSchema, itemListSchema } from "../lib/schema.ts";

import { page } from "./lib/layout.mjs";
import { homeBody } from "./lib/home.mjs";
import {
  cursosPage,
  cursoPage,
  programasPage,
  programaPage,
  recursosPage,
  recursoPage,
} from "./lib/pages-catalog.mjs";
import {
  serviciosPage,
  nosotrosPage,
  blogPage,
  articuloPage,
  contactoPage,
  loginPage,
  faqPage,
  comoComprarPage,
  terminosPage,
  privacidadPage,
  notFoundPage,
} from "./lib/pages-content.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "html");
const BASE = site.url.replace(/\/$/, "");

/* ------------------------------------------------------------------ */
/* Listado de páginas                                                  */
/* ------------------------------------------------------------------ */

const pages = [
  {
    path: "/",
    title: "Brand Solutions · Cursos de Marketing Digital e Inteligencia Artificial",
    description:
      "Cursos, programas y herramientas prácticas de Marketing Digital e Inteligencia Artificial. Aprendé estrategia, publicidad, contenidos y automatización aplicándolos a proyectos reales.",
    body: homeBody(),
    schema: [
      organizationSchema(),
      websiteSchema(),
      faqSchema(generalFaqs.slice(0, 6)),
      itemListSchema(
        "Cursos de Brand Solutions",
        courses.map((course) => `/cursos/${course.slug}`),
      ),
    ],
  },

  cursosPage(),
  ...courses.map(cursoPage),

  programasPage(),
  ...programs.map(programaPage),

  recursosPage(),
  ...resources.map(recursoPage),

  serviciosPage(),
  nosotrosPage(),

  blogPage(),
  ...posts.map(articuloPage),

  contactoPage(),
  loginPage(),

  faqPage(),
  comoComprarPage(),
  terminosPage(),
  privacidadPage(),

  notFoundPage(),
];

/* ------------------------------------------------------------------ */
/* Sitemap y robots                                                    */
/* ------------------------------------------------------------------ */

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);

  const entries = [
    { loc: "/", freq: "weekly", priority: "1.0", lastmod: today },
    { loc: "/cursos/", freq: "weekly", priority: "0.9", lastmod: today },
    { loc: "/programas/", freq: "monthly", priority: "0.8", lastmod: today },
    { loc: "/recursos/", freq: "weekly", priority: "0.8", lastmod: today },
    { loc: "/servicios/", freq: "monthly", priority: "0.7", lastmod: today },
    { loc: "/nosotros/", freq: "yearly", priority: "0.6", lastmod: today },
    { loc: "/blog/", freq: "weekly", priority: "0.8", lastmod: today },
    { loc: "/contacto/", freq: "yearly", priority: "0.6", lastmod: today },
    { loc: "/preguntas-frecuentes/", freq: "monthly", priority: "0.5", lastmod: today },
    { loc: "/como-comprar/", freq: "yearly", priority: "0.4", lastmod: today },
    { loc: "/terminos-y-condiciones/", freq: "yearly", priority: "0.2", lastmod: today },
    { loc: "/politica-de-privacidad/", freq: "yearly", priority: "0.2", lastmod: today },
    ...courses.map((c) => ({
      loc: `/cursos/${c.slug}/`,
      freq: "monthly",
      priority: "0.9",
      lastmod: c.updatedAt,
    })),
    ...programs.map((p) => ({
      loc: `/programas/${p.slug}/`,
      freq: "monthly",
      priority: "0.8",
      lastmod: p.updatedAt,
    })),
    ...resources.map((r) => ({
      loc: `/recursos/${r.slug}/`,
      freq: "monthly",
      priority: "0.6",
      lastmod: today,
    })),
    ...posts.map((p) => ({
      loc: `/blog/${p.slug}/`,
      freq: "yearly",
      priority: "0.6",
      lastmod: p.date,
    })),
  ];

  const urls = entries
    .map(
      (entry) =>
        `  <url>\n    <loc>${BASE}${entry.loc}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n    <changefreq>${entry.freq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

const robots = `User-agent: *
Allow: /
Disallow: /login/

Host: ${BASE}
Sitemap: ${BASE}/sitemap.xml
`;

/* ------------------------------------------------------------------ */
/* Hoja de estilos                                                     */
/* ------------------------------------------------------------------ */

/**
 * Arma la hoja de entrada de Tailwind a partir del mismo globals.css del
 * proyecto, para que los tokens de diseño no se dupliquen. Sólo cambia la
 * declaración de las fuentes (acá se cargan desde el propio sitio) y suma
 * los estados que en la versión original manejaba React.
 */
async function writeTailwindInput() {
  const globals = await readFile(path.join(ROOT, "app", "globals.css"), "utf8");
  const extras = await readFile(path.join(ROOT, "tools", "extras.css"), "utf8");

  const css = globals
    .replace(
      /--font-sans:.*?;/s,
      '--font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;',
    )
    .replace(/--font-display:.*?;/s, '--font-display: "Sora", "Inter", ui-sans-serif, system-ui, sans-serif;')
    .replace(
      '@import "tailwindcss";',
      '@import "tailwindcss";\n\n@source "../html/**/*.html";\n@source "../html/assets/js/*.js";',
    );

  await mkdir(path.join(ROOT, ".tmp"), { recursive: true });
  await writeFile(path.join(ROOT, ".tmp", "tailwind-input.css"), `${css}\n${extras}`, "utf8");
}

/* ------------------------------------------------------------------ */
/* Escritura                                                           */
/* ------------------------------------------------------------------ */

async function build() {
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  for (const options of pages) {
    const dir =
      options.path === "/" ? OUT : path.join(OUT, options.path.replace(/^\/|\/$/g, ""));
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, options.file ?? "index.html"), page(options), "utf8");
  }

  await writeFile(path.join(OUT, "sitemap.xml"), sitemap(), "utf8");
  await writeFile(path.join(OUT, "robots.txt"), robots, "utf8");

  const staticDir = path.join(ROOT, "tools", "static");
  if (existsSync(staticDir)) await cp(staticDir, OUT, { recursive: true });

  await writeTailwindInput();

  console.log(`✓ ${pages.length} páginas generadas en html/`);
}

await build();
