/** Une clases condicionales sin dependencias externas. */
export type ClassValue = string | false | null | undefined | 0;

export function cn(...values: ClassValue[]): string {
  return values.filter((v): v is string => typeof v === "string" && v.length > 0).join(" ");
}

/** Fecha larga en español, por ejemplo "16 de junio de 2026". */
export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

/** Fecha corta para tarjetas, por ejemplo "16 jun 2026". */
export function formatDateShort(iso: string): string {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("es-AR").format(value);
}
