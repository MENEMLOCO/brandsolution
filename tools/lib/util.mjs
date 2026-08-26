/** Utilidades del generador de HTML. */

/** Escapa texto para insertarlo en HTML. */
export function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Une clases ignorando valores vacíos. */
export function cx(...values) {
  return values.filter((v) => typeof v === "string" && v.length > 0).join(" ");
}

const EXTERNAL = /^(https?:|mailto:|tel:|#|data:)/;

/**
 * Convierte una ruta absoluta del sitio ("/cursos/") en un enlace relativo
 * desde la página actual, apuntando al index.html correspondiente.
 * Así funciona tanto en un servidor como abriendo los archivos directamente.
 */
export function rel(fromPath, toPath) {
  if (EXTERNAL.test(toPath)) return toPath;

  const depth = fromPath.split("/").filter(Boolean).length;
  const prefix = depth === 0 ? "" : "../".repeat(depth);

  const [pathPart, ...restParts] = toPath.split(/(?=[?#])/);
  const rest = restParts.join("");
  const clean = pathPart.replace(/^\//, "");
  const target = clean === "" ? "index.html" : `${clean.replace(/\/$/, "")}/index.html`;

  return `${prefix}${target}${rest}`;
}

/** Ruta relativa a un archivo estático (css, js, imágenes). */
export function asset(fromPath, file) {
  const depth = fromPath.split("/").filter(Boolean).length;
  const prefix = depth === 0 ? "" : "../".repeat(depth);
  return `${prefix}assets/${file}`;
}

/** Fecha larga en español. */
export function formatDate(iso) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function formatDateShort(iso) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/** Bloque JSON-LD listo para insertar. */
export function jsonLd(data) {
  const items = Array.isArray(data) ? data : [data];
  return items
    .map(
      (item) =>
        `<script type="application/ld+json">${JSON.stringify(item).replace(/</g, "\\u003c")}</script>`,
    )
    .join("\n    ");
}
