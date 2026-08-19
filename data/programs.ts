import type { Program } from "./types";

/**
 * PROGRAMAS
 * Recorridos largos que combinan varios ejes de trabajo.
 */
export const programs: Program[] = [
  {
    slug: "programa-integral-de-marketing-digital",
    title: "Programa Integral de Marketing Digital",
    kicker: "De la estrategia a la acción",
    promise:
      "Un recorrido completo para construir la estrategia digital de una marca y llevarla a la práctica.",
    excerpt:
      "Diez módulos para pasar del diagnóstico al plan de acción: estrategia, audiencia, contenidos, campañas, IA y medición.",
    description: [
      "Un recorrido completo para construir la estrategia digital de una marca, definir su posicionamiento, conocer a su audiencia, crear contenido, planificar campañas y medir resultados.",
      "A diferencia de un curso puntual, el programa integra todas las piezas: cada módulo aporta una parte del sistema y al final las partes encajan entre sí.",
      "Se trabaja sobre un proyecto real —el tuyo o uno asignado— y el entregable final es una estrategia digital completa lista para ejecutar.",
    ],
    duration: "10 semanas · 40 horas",
    durationIso: "P10W",
    modality: "Online · Con acompañamiento",
    level: "Todos los niveles",
    certificate: true,
    price: 219900,
    compareAtPrice: 289900,
    modules: [
      { code: "01", title: "Estrategia", summary: "Diagnóstico, objetivos y decisiones de fondo." },
      { code: "02", title: "Buyer Persona", summary: "A quién le hablás y qué le importa." },
      { code: "03", title: "Propuesta de valor", summary: "Por qué te eligen a vos y no a otro." },
      { code: "04", title: "Contenidos", summary: "Pilares, formatos y calendario." },
      { code: "05", title: "Redes Sociales", summary: "Presencia con criterio en cada plataforma." },
      { code: "06", title: "Publicidad Digital", summary: "Meta Ads y Google Ads con objetivos claros." },
      { code: "07", title: "Email Marketing", summary: "Base propia, segmentación y flujos." },
      { code: "08", title: "Inteligencia Artificial", summary: "IA integrada a cada proceso del plan." },
      { code: "09", title: "Analítica", summary: "Qué medir y cómo interpretarlo." },
      { code: "10", title: "Plan de acción", summary: "Cronograma, presupuesto y próximos 90 días." },
    ],
    outcomes: [
      "Una estrategia digital documentada y propia",
      "Un calendario de contenidos de 90 días",
      "Campañas planificadas con presupuesto asignado",
      "Un tablero de métricas con los indicadores que importan",
      "Un plan de acción con responsables y fechas",
    ],
    audience: [
      "Emprendedores que quieren profesionalizar su marketing",
      "Profesionales que buscan un perfil integral y no una especialidad suelta",
      "Equipos internos que necesitan un marco común de trabajo",
      "Personas en transición hacia el marketing digital",
    ],
    includes: [
      "40 horas de clases organizadas por módulo",
      "Ejercicios con devolución",
      "Plantillas de todos los entregables",
      "Encuentros de consultas en vivo",
      "Certificado de participación",
      "Acceso a las actualizaciones del programa",
    ],
    faqs: [
      {
        q: "¿Cuánto tiempo semanal necesito?",
        a: "Entre tres y cinco horas por semana, incluyendo las clases y los ejercicios. El material queda disponible, así que podés reacomodar la carga según tu semana.",
      },
      {
        q: "¿Puedo hacerlo si ya hice alguno de los cursos?",
        a: "Sí. Los cursos ya realizados se descuentan del valor del programa. Escribinos antes de inscribirte y te pasamos el detalle.",
      },
      {
        q: "¿Hay clases en vivo?",
        a: "Las clases son grabadas y se suman encuentros en vivo de consultas para revisar entregables y resolver dudas.",
      },
      {
        q: "¿Qué pasa si no puedo seguir el ritmo?",
        a: "El acceso no vence. Podés retomar cuando quieras y sumarte a los encuentros de consultas de la siguiente cohorte.",
      },
    ],
    instructor: "equipo-brand-solutions",
    accent: "brand",
    updatedAt: "2026-06-12",
  },

  {
    slug: "programa-marketing-con-ia",
    title: "Programa Marketing + IA para equipos",
    kicker: "Formación in company",
    promise:
      "Capacitación a medida para que tu equipo incorpore Inteligencia Artificial en sus procesos reales.",
    excerpt:
      "Un programa que se arma sobre los procesos de tu empresa: diagnóstico, formación, plantillas y seguimiento.",
    description: [
      "Diseñamos el programa después de un diagnóstico: relevamos cómo trabaja hoy el equipo, dónde se pierde tiempo y qué procesos conviene intervenir primero.",
      "La formación se dicta sobre casos y materiales de la propia empresa, de modo que lo aprendido se aplica durante la cursada y no después.",
      "Incluye un manual de uso de IA propio del equipo, con criterios, prompts y flujos estandarizados.",
    ],
    duration: "A medida · Desde 12 horas",
    durationIso: "PT12H",
    modality: "Presencial o remoto · In company",
    level: "Todos los niveles",
    certificate: true,
    price: 0,
    modules: [
      { code: "01", title: "Diagnóstico", summary: "Relevamiento de procesos y detección de oportunidades." },
      { code: "02", title: "Fundamentos", summary: "Nivelación y criterios de uso responsable." },
      { code: "03", title: "Prompting aplicado", summary: "Método común para todo el equipo." },
      { code: "04", title: "Procesos del área", summary: "Aplicación sobre las tareas reales." },
      { code: "05", title: "Automatización", summary: "Flujos y herramientas conectadas." },
      { code: "06", title: "Manual interno", summary: "Documentación y estándares propios." },
      { code: "07", title: "Seguimiento", summary: "Revisión de adopción a los 30 y 60 días." },
    ],
    outcomes: [
      "Un manual interno de uso de IA",
      "Procesos documentados y estandarizados",
      "Ahorro de tiempo medible en tareas repetitivas",
      "Criterios comunes de calidad y verificación",
    ],
    audience: [
      "Equipos de marketing y comunicación",
      "Áreas comerciales que producen contenido",
      "Agencias que quieren estandarizar su forma de trabajo",
      "Pymes que empiezan a incorporar IA",
    ],
    includes: [
      "Diagnóstico previo",
      "Programa diseñado a medida",
      "Materiales y plantillas propias del equipo",
      "Encuentro de seguimiento posterior",
      "Certificados para cada participante",
    ],
    faqs: [
      {
        q: "¿Cómo se define el precio?",
        a: "Depende de la cantidad de participantes, la duración y el alcance del diagnóstico. Después de una primera reunión enviamos una propuesta con el detalle.",
      },
      {
        q: "¿Se puede dictar de forma remota?",
        a: "Sí. Trabajamos en formato presencial, remoto o mixto según la ubicación y la disponibilidad del equipo.",
      },
      {
        q: "¿Qué cantidad de participantes admite?",
        a: "Recomendamos grupos de hasta 20 personas para que la parte práctica funcione bien. Para equipos más grandes proponemos varias camadas.",
      },
    ],
    instructor: "direccion-academica",
    accent: "ink",
    updatedAt: "2026-06-05",
  },
];

export const getProgram = (slug: string): Program | undefined =>
  programs.find((p) => p.slug === slug);

/** Programa que se destaca en la home. */
export const flagshipProgram = programs[0];
