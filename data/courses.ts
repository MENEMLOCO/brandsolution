import type { Course } from "./types";

/**
 * ============================================================
 * CURSOS
 * ------------------------------------------------------------
 * Para sumar un curso nuevo alcanza con agregar un objeto a este
 * array. La grilla de /cursos, la landing /cursos/[slug], el
 * sitemap y el schema markup se generan automáticamente.
 * ============================================================
 */

export const courses: Course[] = [
  {
    slug: "plan-de-marketing-digital-con-ia",
    title: "Plan de Marketing Digital con IA",
    category: "Estrategia",
    promise:
      "Construí en pocas horas la estrategia digital de tu negocio utilizando herramientas de Inteligencia Artificial.",
    excerpt:
      "Un plan de marketing digital concreto, escrito y accionable, construido paso a paso con ayuda de IA.",
    description: [
      "La mayoría de los proyectos no falla por falta de ideas, sino por falta de un plan que ordene esas ideas. En este curso construimos ese plan mientras avanzamos: cada módulo termina con una parte del documento completa.",
      "Trabajamos con Inteligencia Artificial en cada etapa, pero siempre con criterio propio: la IA acelera la investigación y la redacción, y vos tomás las decisiones estratégicas.",
      "Al terminar te llevás un plan de marketing digital propio, con objetivos, audiencia, mensajes, canales, calendario y métricas.",
    ],
    level: "Inicial",
    duration: "3 horas",
    durationIso: "PT3H",
    modules: 6,
    modality: "Online · A tu ritmo",
    language: "Español",
    certificate: true,
    price: 34900,
    compareAtPrice: 49900,
    featured: true,
    badge: "Más elegido",
    audience: [
      "Emprendedores que necesitan ordenar su estrategia digital",
      "Profesionales independientes que quieren atraer clientes con método",
      "Equipos chicos de marketing sin un plan escrito",
      "Personas que ya usan IA de forma suelta y quieren aplicarla con criterio",
    ],
    outcomes: [
      "Definir objetivos de marketing medibles y realistas",
      "Investigar tu mercado y tu competencia en una fracción del tiempo",
      "Construir un buyer persona con evidencia y no con suposiciones",
      "Redactar una propuesta de valor clara y diferenciada",
      "Elegir los canales correctos según tu objetivo y tu presupuesto",
      "Armar un calendario de contenidos y un tablero de métricas",
    ],
    syllabus: [
      {
        title: "Punto de partida",
        summary: "Diagnóstico rápido de tu proyecto y definición del objetivo del plan.",
        lessons: [
          "Qué resuelve un plan de marketing y qué no",
          "Diagnóstico digital en 20 minutos",
          "Objetivos: de la intención al número",
          "Cómo usar la IA sin delegar la estrategia",
        ],
      },
      {
        title: "Mercado y competencia",
        summary: "Investigación asistida por IA para entender el contexto real.",
        lessons: [
          "Mapa de competidores directos e indirectos",
          "Prompts de investigación y verificación de fuentes",
          "Detección de oportunidades y espacios vacíos",
        ],
      },
      {
        title: "Audiencia y buyer persona",
        summary: "De los datos a un perfil accionable que guíe cada decisión.",
        lessons: [
          "Segmentación: quién sí y quién no",
          "Construcción de buyer persona con IA",
          "Dolores, objeciones y momentos de decisión",
        ],
      },
      {
        title: "Propuesta de valor y mensajes",
        summary: "Qué decís, por qué te eligen y cómo lo comunicás.",
        lessons: [
          "Fórmulas de propuesta de valor",
          "Mensajes clave por etapa del embudo",
          "Pruebas de claridad antes de publicar",
        ],
      },
      {
        title: "Canales, contenidos y campañas",
        summary: "Dónde jugar y con qué recursos.",
        lessons: [
          "Criterios para elegir canales",
          "Calendario de contenidos de 90 días",
          "Presupuesto y prioridades cuando los recursos son limitados",
        ],
      },
      {
        title: "Medición y plan de acción",
        summary: "Cerramos el documento y definimos los próximos 30 días.",
        lessons: [
          "Indicadores que importan según el objetivo",
          "Tablero simple de seguimiento",
          "Plan de acción y revisión mensual",
        ],
      },
    ],
    includes: [
      "Plantilla editable de Plan de Marketing Digital",
      "Banco de prompts específicos para cada módulo",
      "Checklist de diagnóstico digital",
      "Tablero de métricas listo para completar",
    ],
    tools: ["ChatGPT", "Claude", "Google Sheets", "Notion", "Canva"],
    instructor: "equipo-brand-solutions",
    faqs: [
      {
        q: "¿Necesito experiencia previa en marketing?",
        a: "No. El curso arranca desde el diagnóstico y explica cada concepto antes de aplicarlo. Si ya tenés experiencia, vas a avanzar más rápido y aprovechar mejor la parte de IA.",
      },
      {
        q: "¿Sirve si todavía no tengo un negocio en marcha?",
        a: "Sí. Podés trabajar sobre una idea, un proyecto propio o el negocio donde trabajás. Los ejercicios están pensados para adaptarse a cualquiera de esos casos.",
      },
      {
        q: "¿Qué herramientas de IA necesito?",
        a: "Alcanza con la versión gratuita de un asistente conversacional. Mostramos ejemplos en más de una herramienta para que puedas usar la que prefieras.",
      },
      {
        q: "¿Por cuánto tiempo tengo acceso?",
        a: "El acceso no vence y las actualizaciones del curso quedan incluidas.",
      },
    ],
    related: ["inteligencia-artificial-aplicada-al-marketing", "community-manager", "meta-ads-desde-cero"],
    accent: "brand",
    visual: "plan",
    updatedAt: "2026-06-10",
  },

  {
    slug: "community-manager",
    title: "Community Manager",
    category: "Contenidos",
    promise:
      "Aprendé a planificar, crear y gestionar contenidos para marcas y proyectos digitales.",
    excerpt:
      "Planificación, producción y gestión de contenidos con criterio profesional, no publicando por publicar.",
    description: [
      "Ser community manager no es solo publicar. Es entender la marca, planificar con anticipación, producir contenido que se sostenga en el tiempo y leer los resultados para ajustar.",
      "En este curso vas a armar un sistema de trabajo completo: línea de contenidos, calendario, producción, gestión de comunidad y reporte mensual.",
      "Todo el trabajo se hace sobre un caso: el tuyo, el de tu cliente o uno propuesto por nosotros.",
    ],
    level: "Inicial",
    duration: "12 horas",
    durationIso: "PT12H",
    modules: 8,
    modality: "Online · A tu ritmo",
    language: "Español",
    certificate: true,
    price: 59900,
    audience: [
      "Personas que quieren trabajar gestionando redes sociales",
      "Emprendedores que manejan las cuentas de su propio negocio",
      "Diseñadores y comunicadores que suman gestión de contenidos",
      "Equipos que necesitan ordenar la producción de contenido",
    ],
    outcomes: [
      "Definir una línea de contenidos coherente con la marca",
      "Planificar un mes completo de publicaciones sin quedarte sin ideas",
      "Escribir copys que se entiendan y generen acción",
      "Producir piezas simples con buen criterio visual",
      "Gestionar comentarios, mensajes y situaciones delicadas",
      "Armar un reporte mensual claro para un cliente o un jefe",
    ],
    syllabus: [
      {
        title: "El rol del community manager",
        summary: "Qué se espera realmente del puesto y cómo organizar el trabajo.",
        lessons: [
          "Responsabilidades y límites del rol",
          "Flujo de trabajo semanal",
          "Herramientas mínimas para empezar",
        ],
      },
      {
        title: "La marca antes del contenido",
        summary: "Identidad, tono y territorio de comunicación.",
        lessons: ["Brief de marca en una página", "Tono de voz y ejemplos", "Qué comunica y qué no comunica la marca"],
      },
      {
        title: "Estrategia de contenidos",
        summary: "Pilares, formatos y objetivos por publicación.",
        lessons: ["Pilares de contenido", "Formatos por objetivo", "Proporciones y equilibrio del feed"],
      },
      {
        title: "Planificación y calendario",
        summary: "Cómo dejar de improvisar todas las semanas.",
        lessons: ["Calendario mensual", "Fechas clave y campañas", "Producción por lotes"],
      },
      {
        title: "Copywriting para redes",
        summary: "Escribir para que se lea y se entienda.",
        lessons: ["Ganchos y primeras líneas", "Estructuras de copy", "Llamados a la acción según el objetivo"],
      },
      {
        title: "Producción visual",
        summary: "Criterio visual sin ser diseñador.",
        lessons: ["Plantillas y sistemas visuales", "Video corto: guion y edición simple", "Errores frecuentes"],
      },
      {
        title: "Gestión de comunidad",
        summary: "Conversación, moderación y crisis.",
        lessons: ["Protocolo de respuesta", "Comentarios difíciles", "Colaboraciones y contenido de terceros"],
      },
      {
        title: "Métricas y reportes",
        summary: "Qué mirar y cómo contarlo.",
        lessons: ["Métricas por objetivo", "Reporte mensual en una página", "Decisiones a partir de los datos"],
      },
    ],
    includes: [
      "Plantilla de calendario de contenidos",
      "Brief de marca editable",
      "Banco de estructuras de copy",
      "Modelo de reporte mensual",
    ],
    tools: ["Meta Business Suite", "Canva", "CapCut", "Google Sheets", "ChatGPT"],
    instructor: "equipo-brand-solutions",
    faqs: [
      {
        q: "¿Sirve para conseguir mis primeros clientes?",
        a: "El curso incluye los entregables que un cliente suele pedir: propuesta de línea de contenidos, calendario y reporte. Son la base de una presentación profesional.",
      },
      {
        q: "¿Necesito saber diseñar?",
        a: "No. Trabajamos con plantillas y criterios visuales simples para que las piezas se vean prolijas sin conocimientos de diseño.",
      },
      {
        q: "¿Se actualiza cuando cambian las redes?",
        a: "Sí. Cuando una plataforma cambia algo relevante actualizamos las clases afectadas y quedan disponibles sin costo adicional.",
      },
    ],
    related: ["plan-de-marketing-digital-con-ia", "inteligencia-artificial-aplicada-al-marketing", "meta-ads-desde-cero"],
    accent: "coral",
    visual: "content",
    updatedAt: "2026-05-22",
  },

  {
    slug: "meta-ads-desde-cero",
    title: "Meta Ads desde cero",
    category: "Publicidad Digital",
    promise:
      "Creá campañas publicitarias en Instagram y Facebook con una estrategia orientada a resultados.",
    excerpt:
      "Del primer píxel a la campaña optimizada: estructura, segmentación, creatividades y lectura de resultados.",
    description: [
      "Poner plata en anuncios es fácil. Lo difícil es que esa inversión devuelva resultados y que puedas explicar por qué funcionó o por qué no.",
      "Este curso recorre el circuito completo: configuración de la cuenta, medición, estructura de campañas, públicos, creatividades y optimización.",
      "Vas a salir con una campaña armada y con criterios claros para decidir cuándo escalar, cuándo ajustar y cuándo cortar.",
    ],
    level: "Inicial",
    duration: "8 horas",
    durationIso: "PT8H",
    modules: 7,
    modality: "Online · A tu ritmo",
    language: "Español",
    certificate: true,
    price: 54900,
    audience: [
      "Emprendedores que quieren invertir en publicidad con criterio",
      "Community managers que suman pauta a sus servicios",
      "Equipos de marketing que gestionan presupuesto propio",
      "Personas que ya pautaron sin obtener resultados claros",
    ],
    outcomes: [
      "Configurar correctamente cuenta publicitaria, píxel y eventos",
      "Definir una estructura de campañas según el objetivo",
      "Construir públicos fríos, tibios y de retargeting",
      "Escribir y diseñar creatividades que sostengan la campaña",
      "Leer las métricas que realmente indican rendimiento",
      "Optimizar y escalar sin romper lo que funciona",
    ],
    syllabus: [
      {
        title: "Fundamentos de la pauta",
        summary: "Cómo funciona el sistema publicitario y la subasta.",
        lessons: ["Objetivos y ubicaciones", "Subasta y entrega", "Presupuesto y expectativas realistas"],
      },
      {
        title: "Configuración y medición",
        summary: "La base sin la cual todo lo demás falla.",
        lessons: ["Administrador comercial", "Píxel y API de conversiones", "Eventos y verificación del dominio"],
      },
      {
        title: "Estructura de campañas",
        summary: "Cómo ordenar campañas, conjuntos y anuncios.",
        lessons: ["Estructuras según objetivo", "Presupuesto por campaña o por conjunto", "Errores de estructura frecuentes"],
      },
      {
        title: "Públicos",
        summary: "A quién le hablás en cada etapa.",
        lessons: ["Públicos guardados y de interés", "Personalizados y similares", "Retargeting por comportamiento"],
      },
      {
        title: "Creatividades que funcionan",
        summary: "El anuncio es la mayor palanca de resultado.",
        lessons: ["Ángulos de comunicación", "Formatos: imagen, video y colecciones", "Variantes para testear"],
      },
      {
        title: "Lectura de resultados",
        summary: "Qué métricas mirar y en qué orden.",
        lessons: ["Costos, frecuencia y relevancia", "Del clic a la conversión", "Diagnóstico de campañas con bajo rendimiento"],
      },
      {
        title: "Optimización y escalado",
        summary: "Decisiones sostenidas en el tiempo.",
        lessons: ["Cuándo tocar y cuándo esperar", "Escalado horizontal y vertical", "Rutina semanal de gestión"],
      },
    ],
    includes: [
      "Checklist de configuración de cuenta",
      "Plantilla de estructura de campañas",
      "Matriz de ángulos creativos",
      "Tablero de seguimiento de resultados",
    ],
    tools: ["Meta Ads Manager", "Meta Business Suite", "Google Sheets", "Canva"],
    instructor: "equipo-brand-solutions",
    faqs: [
      {
        q: "¿Necesito invertir dinero durante el curso?",
        a: "No es obligatorio, pero recomendamos un presupuesto mínimo para ver el comportamiento real de una campaña. Todo el curso se puede completar sin invertir.",
      },
      {
        q: "¿Sirve si vendo servicios y no productos?",
        a: "Sí. Trabajamos objetivos de venta directa y también de generación de consultas y leads, que es el caso más común en servicios.",
      },
      {
        q: "¿Incluye Instagram y Facebook?",
        a: "Sí, ambas plataformas se gestionan desde el mismo administrador y se trabajan de manera integrada durante todo el curso.",
      },
    ],
    related: ["google-ads", "plan-de-marketing-digital-con-ia", "email-marketing-y-automatizacion"],
    accent: "cyan",
    visual: "ads",
    updatedAt: "2026-06-02",
  },

  {
    slug: "google-ads",
    title: "Google Ads",
    category: "Publicidad Digital",
    promise:
      "Aprendé a crear campañas para captar clientes cuando están buscando tus productos o servicios.",
    excerpt:
      "Búsqueda, palabras clave, anuncios y conversiones: publicidad para demanda que ya existe.",
    description: [
      "Google Ads trabaja sobre una intención que ya está: alguien busca algo y vos aparecés. Bien usado, es uno de los canales más directos que existen.",
      "El curso se enfoca en campañas de búsqueda, que son las que resuelven la mayoría de los casos, y suma Performance Max y remarketing como complementos.",
      "Vas a aprender a elegir palabras clave, escribir anuncios, configurar conversiones y controlar el gasto.",
    ],
    level: "Intermedio",
    duration: "8 horas",
    durationIso: "PT8H",
    modules: 7,
    modality: "Online · A tu ritmo",
    language: "Español",
    certificate: true,
    price: 54900,
    audience: [
      "Negocios con demanda existente que quieren captarla",
      "Profesionales y servicios locales",
      "Ecommerce que necesita sumar un canal de captación",
      "Equipos que ya usan redes y quieren diversificar",
    ],
    outcomes: [
      "Investigar y seleccionar palabras clave con intención de compra",
      "Estructurar campañas y grupos de anuncios de forma ordenada",
      "Escribir anuncios que respondan exactamente a la búsqueda",
      "Configurar conversiones y medir lo que importa",
      "Usar concordancias y negativas para controlar el gasto",
      "Optimizar según costo por conversión y no según clics",
    ],
    syllabus: [
      {
        title: "Cómo funciona Google Ads",
        summary: "Intención de búsqueda, subasta y nivel de calidad.",
        lessons: ["Tipos de campaña", "Subasta y ranking del anuncio", "Cuándo conviene y cuándo no"],
      },
      {
        title: "Palabras clave",
        summary: "El corazón de la campaña de búsqueda.",
        lessons: ["Investigación y volumen", "Intención informativa vs. transaccional", "Concordancias y palabras negativas"],
      },
      {
        title: "Estructura de la cuenta",
        summary: "Orden que se pueda mantener en el tiempo.",
        lessons: ["Campañas y grupos de anuncios", "Agrupación por temática", "Presupuestos y pujas"],
      },
      {
        title: "Anuncios y extensiones",
        summary: "Relevancia entre búsqueda, anuncio y página.",
        lessons: ["Anuncios adaptables de búsqueda", "Recursos y extensiones", "Coherencia con la página de destino"],
      },
      {
        title: "Conversiones y medición",
        summary: "Sin conversiones no hay optimización posible.",
        lessons: ["Configuración de conversiones", "Google Analytics 4 y Google Ads", "Atribución básica"],
      },
      {
        title: "Performance Max y remarketing",
        summary: "Complementos para escalar la captación.",
        lessons: ["Cuándo usar Performance Max", "Recursos y señales de audiencia", "Remarketing y listas"],
      },
      {
        title: "Optimización",
        summary: "Rutina de mejora continua.",
        lessons: ["Informe de términos de búsqueda", "Ajustes de puja y presupuesto", "Diagnóstico de campañas caras"],
      },
    ],
    includes: [
      "Plantilla de investigación de palabras clave",
      "Estructura de cuenta modelo",
      "Checklist de configuración de conversiones",
      "Rutina de optimización semanal",
    ],
    tools: ["Google Ads", "Google Analytics 4", "Google Keyword Planner", "Google Sheets"],
    instructor: "equipo-brand-solutions",
    faqs: [
      {
        q: "¿Es mejor Google Ads o Meta Ads?",
        a: "Resuelven momentos distintos. Google capta demanda existente y Meta genera demanda. En el curso vemos cómo decidir según tu objetivo y tu presupuesto.",
      },
      {
        q: "¿Necesito un sitio web?",
        a: "Sí, o al menos una página de destino. Sin un lugar donde recibir la visita, la campaña no puede convertir.",
      },
      {
        q: "¿Cuánto presupuesto necesito para empezar?",
        a: "Depende del rubro y de la competencia por las palabras clave. En el curso mostramos cómo estimarlo antes de invertir.",
      },
    ],
    related: ["meta-ads-desde-cero", "plan-de-marketing-digital-con-ia", "inteligencia-artificial-aplicada-al-marketing"],
    accent: "amber",
    visual: "search",
    updatedAt: "2026-05-30",
  },

  {
    slug: "inteligencia-artificial-aplicada-al-marketing",
    title: "Inteligencia Artificial aplicada al Marketing",
    category: "Inteligencia Artificial",
    promise:
      "Aprendé a utilizar IA para investigar, crear contenido, planificar campañas, analizar información y optimizar procesos.",
    excerpt:
      "IA dentro de los procesos reales de marketing: investigación, estrategia, contenido, publicidad, automatización y análisis.",
    description: [
      "No enseñamos IA como una herramienta aislada ni como una lista de trucos. La incorporamos dentro de los procesos de marketing que ya existen.",
      "Cada módulo toma una tarea concreta del trabajo diario y muestra cómo hacerla mejor y más rápido, con criterios para revisar y validar lo que la IA devuelve.",
      "Vas a construir tu propio sistema de prompts y flujos de trabajo reutilizables.",
    ],
    level: "Todos los niveles",
    duration: "6 horas",
    durationIso: "PT6H",
    modules: 8,
    modality: "Online · A tu ritmo",
    language: "Español",
    certificate: true,
    price: 49900,
    compareAtPrice: 64900,
    featured: true,
    badge: "Actualizado",
    audience: [
      "Profesionales de marketing que quieren ganar tiempo",
      "Emprendedores que trabajan solos y necesitan multiplicarse",
      "Equipos que quieren estandarizar el uso de IA",
      "Personas que usan IA a diario pero sin método",
    ],
    outcomes: [
      "Escribir prompts que devuelvan resultados usables la primera vez",
      "Investigar mercado, competencia y audiencia con verificación",
      "Producir contenido manteniendo la voz de la marca",
      "Analizar datos de campañas y redactar informes",
      "Automatizar tareas repetitivas del área de marketing",
      "Definir criterios de uso responsable dentro de un equipo",
    ],
    syllabus: [
      {
        title: "Cómo pensar la IA en marketing",
        summary: "Dónde suma de verdad y dónde conviene no usarla.",
        lessons: ["Panorama de herramientas", "Tareas que sí y tareas que no", "Riesgos, sesgos y verificación"],
      },
      {
        title: "Prompting con método",
        summary: "De la pregunta suelta al pedido estructurado.",
        lessons: ["Anatomía de un buen prompt", "Contexto, rol, formato y restricciones", "Iteración y refinamiento"],
      },
      {
        title: "Investigación",
        summary: "Mercado, competencia, tendencias y buyer persona.",
        lessons: ["Investigación con fuentes", "Análisis competitivo", "Buyer persona documentado"],
      },
      {
        title: "Estrategia",
        summary: "Planes, propuestas de valor y campañas.",
        lessons: ["Del diagnóstico al plan", "Propuestas de valor alternativas", "Ideación de campañas"],
      },
      {
        title: "Contenido",
        summary: "Ideas, copys, guiones y calendarios.",
        lessons: ["Voz de marca y guías de estilo", "Producción por lotes", "Adaptación por canal y formato"],
      },
      {
        title: "Publicidad",
        summary: "Creatividades, variantes y análisis de resultados.",
        lessons: ["Ángulos y variantes de anuncios", "Análisis de rendimiento", "Hipótesis de optimización"],
      },
      {
        title: "Automatización",
        summary: "Procesos y recorridos de clientes.",
        lessons: ["Mapa de tareas automatizables", "Flujos con herramientas no-code", "Control de calidad del proceso"],
      },
      {
        title: "Analítica e informes",
        summary: "Interpretar datos y comunicarlos.",
        lessons: ["Lectura de tablas y métricas", "Informes claros para decidir", "Errores comunes de interpretación"],
      },
    ],
    includes: [
      "Banco de más de 100 prompts organizados por tarea",
      "Plantilla de guía de voz de marca",
      "Mapa de procesos automatizables",
      "Modelo de informe asistido por IA",
    ],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Make", "Google Sheets"],
    instructor: "equipo-brand-solutions",
    faqs: [
      {
        q: "¿Necesito conocimientos técnicos?",
        a: "No. Todo se hace desde herramientas conversacionales y plataformas no-code. No se programa en ningún momento.",
      },
      {
        q: "¿Se actualiza cuando salen herramientas nuevas?",
        a: "Sí. Es el curso que más actualizamos: cuando aparece algo que cambia la forma de trabajar, revisamos las clases afectadas.",
      },
      {
        q: "¿Sirve si ya uso IA todos los días?",
        a: "Sí. El foco está en el método y en los flujos de trabajo reutilizables, que es lo que más suele faltar cuando el uso es intuitivo.",
      },
      {
        q: "¿Se puede aplicar en equipo?",
        a: "Sí. Incluye criterios de uso responsable y plantillas pensadas para estandarizar el trabajo dentro de un área.",
      },
    ],
    related: ["plan-de-marketing-digital-con-ia", "community-manager", "email-marketing-y-automatizacion"],
    accent: "brand",
    visual: "ai",
    updatedAt: "2026-06-18",
  },

  {
    slug: "email-marketing-y-automatizacion",
    title: "Email Marketing y Automatización",
    category: "Automatización",
    promise:
      "Diseñá estrategias de email marketing, segmentaciones, automatizaciones y recorridos de clientes.",
    excerpt:
      "El canal que sí es tuyo: base de contactos, segmentación, campañas y flujos que trabajan solos.",
    description: [
      "El email sigue siendo el canal con mejor relación entre costo y resultado, y además es el único donde la base de contactos te pertenece.",
      "En este curso vas a construir una base sana, segmentarla con criterio y diseñar los flujos automáticos que sostienen la relación con tus contactos.",
      "Cerramos con medición: qué mirar, cómo mejorar y cómo cuidar la entregabilidad.",
    ],
    level: "Intermedio",
    duration: "6 horas",
    durationIso: "PT6H",
    modules: 6,
    modality: "Online · A tu ritmo",
    language: "Español",
    certificate: true,
    price: 44900,
    audience: [
      "Negocios con base de contactos sin aprovechar",
      "Ecommerce que quiere recuperar carritos y fidelizar",
      "Profesionales que venden servicios con ciclos largos",
      "Equipos que quieren automatizar tareas repetitivas",
    ],
    outcomes: [
      "Construir una base de contactos propia y sana",
      "Diseñar lead magnets que atraigan al contacto correcto",
      "Segmentar por comportamiento e interés",
      "Escribir emails que se abran y se lean",
      "Armar flujos de bienvenida, venta y recuperación",
      "Medir entregabilidad, aperturas, clics y conversiones",
    ],
    syllabus: [
      {
        title: "Estrategia de email",
        summary: "Qué rol cumple el email dentro de tu marketing.",
        lessons: ["Tipos de envío", "Frecuencia y expectativas", "Permiso y buenas prácticas"],
      },
      {
        title: "Base de contactos",
        summary: "Cómo crecer sin ensuciar la lista.",
        lessons: ["Lead magnets que funcionan", "Formularios y páginas de captura", "Higiene de base"],
      },
      {
        title: "Segmentación",
        summary: "Hablarle distinto a personas distintas.",
        lessons: ["Criterios de segmentación", "Etiquetas y campos personalizados", "Segmentos por comportamiento"],
      },
      {
        title: "Contenido y redacción",
        summary: "Asuntos, estructura y llamados a la acción.",
        lessons: ["Asuntos y previsualización", "Estructura de un email efectivo", "Diseño simple y legible"],
      },
      {
        title: "Automatizaciones",
        summary: "Flujos que trabajan mientras hacés otra cosa.",
        lessons: [
          "Flujo de bienvenida",
          "Recuperación de carrito y de interés",
          "Recorridos según etapa del cliente",
        ],
      },
      {
        title: "Métricas y entregabilidad",
        summary: "Que el email llegue y que sirva.",
        lessons: ["Entregabilidad y reputación", "Métricas por tipo de envío", "Pruebas y mejora continua"],
      },
    ],
    includes: [
      "Plantillas de emails por tipo de envío",
      "Mapa de flujos de automatización",
      "Checklist de entregabilidad",
      "Calculadora simple de resultados",
    ],
    tools: ["Mailchimp", "Brevo", "Make", "Google Sheets"],
    instructor: "equipo-brand-solutions",
    faqs: [
      {
        q: "¿Sirve con una lista chica?",
        a: "Sí, y suele ser el mejor momento para empezar: se aprenden los flujos con menos ruido y la base crece ya ordenada.",
      },
      {
        q: "¿Qué plataforma se usa?",
        a: "Mostramos los conceptos de forma general y los ejemplos en dos plataformas con plan gratuito, para que puedas replicarlo en la que uses.",
      },
      {
        q: "¿Incluye automatizaciones fuera del email?",
        a: "Sí, vemos flujos con herramientas no-code que conectan formularios, planillas y notificaciones.",
      },
    ],
    related: ["plan-de-marketing-digital-con-ia", "inteligencia-artificial-aplicada-al-marketing", "meta-ads-desde-cero"],
    accent: "signal",
    visual: "email",
    updatedAt: "2026-05-14",
  },
];

/** Categorías únicas, en orden de aparición, para los filtros de /cursos. */
export const courseCategories: string[] = Array.from(new Set(courses.map((c) => c.category)));

export const getCourse = (slug: string): Course | undefined =>
  courses.find((c) => c.slug === slug);

export const featuredCourses = (limit = 6): Course[] =>
  [...courses].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))).slice(0, limit);

export const getRelatedCourses = (course: Course, limit = 3): Course[] =>
  course.related
    .map((slug) => getCourse(slug))
    .filter((c): c is Course => Boolean(c))
    .slice(0, limit);
