import type { Instructor } from "./types";

/**
 * DOCENTES
 * Reemplazá nombres, biografías y destacados por los datos reales del equipo.
 */
export const instructors: Instructor[] = [
  {
    id: "equipo-brand-solutions",
    name: "Equipo Brand Solutions",
    role: "Estrategia, campañas y contenidos",
    initials: "BS",
    bio: "El equipo que dicta las capacitaciones es el mismo que trabaja todos los días en proyectos de clientes: estrategia digital, campañas de performance, contenidos, sitios web y automatizaciones. Cada clase nace de algo que ya probamos en un proyecto real.",
    highlights: [
      "Estrategias digitales para pymes, profesionales y equipos internos",
      "Gestión de inversión publicitaria en Meta Ads y Google Ads",
      "Implementación de IA dentro de procesos de marketing",
    ],
  },
  {
    id: "direccion-academica",
    name: "Dirección académica",
    role: "Diseño de programas y metodología",
    initials: "DA",
    bio: "Responsable de que cada curso tenga un objetivo claro, un entregable concreto y una secuencia que se pueda sostener con poco tiempo disponible. Define la estructura de módulos, ejercicios y plantillas de cada formación.",
    highlights: [
      "Diseño instruccional aplicado a formación profesional",
      "Programas para equipos de marketing y comunicación",
      "Actualización permanente de contenidos y herramientas",
    ],
  },
];

export const getInstructor = (id: string): Instructor =>
  instructors.find((i) => i.id === id) ?? instructors[0];
