/**
 * Enlaces de compra e inscripción.
 *
 * Mientras no haya una pasarela conectada, el botón lleva al formulario de
 * contacto con el curso preseleccionado. Para integrar un checkout real
 * (Mercado Pago, Hotmart, Stripe, una plataforma LMS, etc.) definí
 * NEXT_PUBLIC_CHECKOUT_URL y se usará esa URL como base.
 */
export function checkoutHref(kind: "curso" | "programa" | "recurso", slug: string): string {
  const base = process.env.NEXT_PUBLIC_CHECKOUT_URL;
  if (base) {
    const separator = base.includes("?") ? "&" : "?";
    return `${base}${separator}tipo=${kind}&item=${encodeURIComponent(slug)}`;
  }
  return `/contacto?${kind}=${encodeURIComponent(slug)}`;
}
