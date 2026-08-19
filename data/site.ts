/**
 * ============================================================
 * CONFIGURACIÓN GENERAL DEL SITIO
 * ------------------------------------------------------------
 * Este archivo concentra los datos editables de Brand Solutions.
 * Modificá acá la información de contacto, redes, indicadores y
 * moneda sin tocar ningún componente.
 * ============================================================
 */

export const site = {
  name: "Brand Solutions",
  legalName: "Brand Solutions",
  /** Cambiar por el dominio definitivo antes de publicar. */
  url: "https://www.brandsolutions.com",
  locale: "es_AR",
  lang: "es",
  tagline: "Marketing Digital + Inteligencia Artificial aplicados",
  description:
    "Cursos, programas y herramientas prácticas de Marketing Digital e Inteligencia Artificial para aprender, aplicar y hacer crecer tu proyecto.",
  founded: "2016",

  contact: {
    email: "hola@brandsolutions.com",
    /** Formato internacional, sin espacios, para el enlace de WhatsApp. */
    whatsapp: "5491100000000",
    whatsappDisplay: "+54 9 11 0000-0000",
    city: "Buenos Aires",
    country: "Argentina",
    countryCode: "AR",
    schedule: "Lunes a viernes de 9 a 18 h",
  },

  /** Moneda usada para mostrar precios y para el schema markup. */
  currency: {
    code: "ARS",
    locale: "es-AR",
  },

  social: [
    { name: "Instagram", href: "https://www.instagram.com/", handle: "@brandsolutions" },
    { name: "LinkedIn", href: "https://www.linkedin.com/", handle: "Brand Solutions" },
    { name: "YouTube", href: "https://www.youtube.com/", handle: "Brand Solutions" },
    { name: "TikTok", href: "https://www.tiktok.com/", handle: "@brandsolutions" },
  ],

  /**
   * INDICADORES DE EXPERIENCIA
   * Valores editables: se muestran en la sección "Experiencia" y en /nosotros.
   * Si un valor todavía no está definido, dejalo en null y se muestra un guion.
   */
  stats: [
    { value: 9, suffix: "+", label: "Años de experiencia", hint: "Trabajando en proyectos digitales" },
    { value: 240, suffix: "+", label: "Proyectos realizados", hint: "Estrategias, campañas y sitios web" },
    { value: 1800, suffix: "+", label: "Personas capacitadas", hint: "En cursos y capacitaciones" },
    { value: 120, suffix: "+", label: "Marcas acompañadas", hint: "Pymes, profesionales y equipos" },
  ] satisfies ReadonlyArray<{
    value: number | null;
    suffix: string;
    label: string;
    hint: string;
  }>,
} as const;

/** Navegación principal del header. */
export const mainNav = [
  { label: "Cursos", href: "/cursos" },
  { label: "Programas", href: "/programas" },
  { label: "Recursos", href: "/recursos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Sobre nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
] as const;

/** Columnas del footer. */
export const footerNav = [
  {
    title: "Formación",
    links: [
      { label: "Cursos", href: "/cursos" },
      { label: "Programas", href: "/programas" },
      { label: "Capacitaciones para equipos", href: "/servicios#capacitaciones" },
      { label: "Certificados", href: "/cursos#certificacion" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Recursos gratuitos", href: "/recursos?filtro=gratis" },
      { label: "Plantillas", href: "/recursos" },
      { label: "Blog", href: "/blog" },
      { label: "Newsletter", href: "/#newsletter" },
    ],
  },
  {
    title: "Brand Solutions",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Servicios", href: "/servicios" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    title: "Ayuda",
    links: [
      { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
      { label: "Cómo comprar", href: "/como-comprar" },
      { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
      { label: "Política de privacidad", href: "/politica-de-privacidad" },
    ],
  },
] as const;

/** Formatea un precio con la moneda configurada. */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat(site.currency.locale, {
    style: "currency",
    currency: site.currency.code,
    maximumFractionDigits: 0,
  }).format(amount);
}

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
