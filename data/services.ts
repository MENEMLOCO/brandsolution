import type { Service } from "./types";

/** SERVICIOS de la agencia. */
export const services: Service[] = [
  {
    slug: "estrategia-digital",
    title: "Estrategia Digital",
    excerpt: "Diagnóstico, posicionamiento y plan de acción para ordenar la presencia digital de la marca.",
    bullets: ["Diagnóstico y auditoría", "Posicionamiento y mensajes", "Plan de acción con prioridades"],
    accent: "brand",
    visual: "strategy",
  },
  {
    slug: "redes-sociales",
    title: "Redes Sociales",
    excerpt: "Gestión integral de contenidos: estrategia, producción, publicación y comunidad.",
    bullets: ["Línea de contenidos", "Producción mensual", "Gestión de comunidad"],
    accent: "coral",
    visual: "social",
  },
  {
    slug: "meta-ads",
    title: "Meta Ads",
    excerpt: "Campañas en Instagram y Facebook con medición, optimización y reporte mensual.",
    bullets: ["Estructura y públicos", "Creatividades y variantes", "Optimización continua"],
    accent: "cyan",
    visual: "ads",
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    excerpt: "Captación de demanda existente en búsqueda, Performance Max y remarketing.",
    bullets: ["Investigación de palabras clave", "Configuración de conversiones", "Gestión del presupuesto"],
    accent: "amber",
    visual: "search",
  },
  {
    slug: "sitios-web-y-ecommerce",
    title: "Sitios web & Ecommerce",
    excerpt: "Sitios rápidos, claros y orientados a conversión, con foco en la experiencia móvil.",
    bullets: ["Arquitectura y contenidos", "Diseño y desarrollo", "Optimización de conversión"],
    accent: "ink",
    visual: "ecommerce",
  },
  {
    slug: "email-marketing",
    title: "Email Marketing",
    excerpt: "Base de contactos, segmentación, campañas y automatizaciones que sostienen la relación.",
    bullets: ["Captación y lead magnets", "Campañas periódicas", "Flujos automatizados"],
    accent: "signal",
    visual: "email",
  },
  {
    slug: "seo-sem",
    title: "SEO / SEM",
    excerpt: "Visibilidad en buscadores combinando trabajo orgánico y publicidad de búsqueda.",
    bullets: ["Auditoría técnica y de contenidos", "Estrategia de palabras clave", "Medición e informes"],
    accent: "brand",
    visual: "analytics",
  },
  {
    slug: "capacitaciones-para-equipos",
    title: "Capacitaciones para equipos",
    excerpt: "Formación in company diseñada sobre los procesos reales de tu empresa.",
    bullets: ["Diagnóstico previo", "Programa a medida", "Seguimiento posterior"],
    accent: "coral",
    visual: "persona",
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
