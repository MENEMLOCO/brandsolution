import type { Resource } from "./types";

/**
 * RECURSOS DIGITALES
 * price: 0 se muestra como "Gratis".
 */
export const resources: Resource[] = [
  {
    slug: "calendario-de-contenidos",
    title: "Calendario de contenidos",
    category: "Planificación",
    excerpt:
      "Planificá un mes completo de publicaciones con pilares, formatos, objetivos y estado de producción.",
    description: [
      "Una planilla lista para usar que resuelve el problema más común de la producción de contenido: no saber qué publicar el lunes a la mañana.",
      "Incluye vista mensual, vista semanal, pilares de contenido, control de estado de cada pieza y un espacio para registrar resultados.",
    ],
    price: 0,
    format: "Google Sheets + Excel",
    includes: [
      "Vista mensual y semanal",
      "Pilares y formatos precargados",
      "Control de estado de producción",
      "Registro de resultados por publicación",
    ],
    accent: "coral",
    visual: "calendar",
    featured: true,
  },
  {
    slug: "plantilla-plan-de-marketing",
    title: "Plantilla de Plan de Marketing",
    category: "Estrategia",
    excerpt:
      "El documento completo para ordenar objetivos, audiencia, mensajes, canales, presupuesto y métricas.",
    description: [
      "La misma estructura que usamos en los proyectos de clientes, simplificada para que puedas completarla sin ayuda.",
      "Cada sección incluye una explicación breve y un ejemplo resuelto para que sepas qué se espera en cada campo.",
    ],
    price: 14900,
    format: "Documento editable + Google Sheets",
    includes: [
      "Estructura completa del plan",
      "Ejemplos resueltos por sección",
      "Planilla de presupuesto",
      "Tablero de objetivos e indicadores",
    ],
    accent: "brand",
    visual: "plan",
    featured: true,
  },
  {
    slug: "banco-de-prompts-para-marketing",
    title: "Banco de prompts para Marketing",
    category: "Inteligencia Artificial",
    excerpt:
      "Más de 100 prompts organizados por tarea: investigación, estrategia, contenido, publicidad y análisis.",
    description: [
      "Un banco organizado por proceso, no por curiosidad. Cada prompt indica para qué sirve, qué contexto necesita y qué formato de respuesta pedir.",
      "Está pensado para copiar, pegar y ajustar con los datos de tu proyecto.",
    ],
    price: 12900,
    format: "Notion + PDF",
    includes: [
      "Más de 100 prompts clasificados",
      "Guía de contexto por tipo de tarea",
      "Ejemplos de respuestas esperadas",
      "Actualizaciones incluidas",
    ],
    accent: "cyan",
    visual: "prompts",
    featured: true,
  },
  {
    slug: "buyer-persona-con-ia",
    title: "Buyer Persona con IA",
    category: "Inteligencia Artificial",
    excerpt:
      "Guía y plantilla para construir un perfil de cliente con evidencia, en lugar de suposiciones.",
    description: [
      "Un proceso guiado en cinco pasos: recolección de datos, entrevistas, síntesis asistida por IA, validación y documentación.",
      "El resultado es un documento que puede usar todo el equipo para tomar decisiones de contenido, campañas y producto.",
    ],
    price: 0,
    format: "PDF + Documento editable",
    includes: [
      "Guía de proceso en 5 pasos",
      "Guion de entrevista",
      "Prompts de síntesis y validación",
      "Ficha de buyer persona editable",
    ],
    accent: "amber",
    visual: "persona",
  },
  {
    slug: "dashboard-de-metricas",
    title: "Dashboard de métricas",
    category: "Analítica",
    excerpt:
      "Un tablero simple para seguir los indicadores de contenido, campañas y conversiones en un solo lugar.",
    description: [
      "Reúne en una sola vista lo que normalmente está disperso entre plataformas: alcance, tráfico, inversión, leads y ventas.",
      "Incluye fórmulas ya cargadas para calcular costo por resultado, tasa de conversión y evolución mensual.",
    ],
    price: 16900,
    format: "Google Sheets",
    includes: [
      "Vista mensual consolidada",
      "Cálculo automático de costos y conversiones",
      "Comparativa entre períodos",
      "Instructivo de carga de datos",
    ],
    accent: "ink",
    visual: "dashboard",
  },
  {
    slug: "checklist-para-campanas",
    title: "Checklist para campañas",
    category: "Publicidad Digital",
    excerpt:
      "Todo lo que hay que revisar antes, durante y después de una campaña para no perder inversión.",
    description: [
      "Una lista de control dividida en tres momentos: preparación, lanzamiento y optimización.",
      "Sirve tanto para Meta Ads como para Google Ads e incluye los errores que más presupuesto hacen perder.",
    ],
    price: 0,
    format: "PDF imprimible + Notion",
    includes: [
      "Checklist previa al lanzamiento",
      "Control de medición y conversiones",
      "Rutina de optimización semanal",
      "Errores frecuentes y cómo evitarlos",
    ],
    accent: "signal",
    visual: "checklist",
  },
];

export const resourceCategories: string[] = Array.from(new Set(resources.map((r) => r.category)));

export const getResource = (slug: string): Resource | undefined =>
  resources.find((r) => r.slug === slug);

export const freeResources = (): Resource[] => resources.filter((r) => r.price === 0);
