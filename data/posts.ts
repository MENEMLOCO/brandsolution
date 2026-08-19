import type { Post } from "./types";

/**
 * BLOG
 * Cada artículo se renderiza en /blog/[slug] a partir de bloques simples.
 */
export const posts: Post[] = [
  {
    slug: "como-usar-ia-en-tu-plan-de-marketing",
    title: "Cómo usar Inteligencia Artificial en tu plan de marketing sin perder criterio",
    category: "Inteligencia Artificial",
    excerpt:
      "La IA acelera la investigación y la redacción, pero las decisiones siguen siendo tuyas. Un método en cuatro pasos para usarla sin delegar la estrategia.",
    date: "2026-06-16",
    readingTime: "7 min",
    author: "Equipo Brand Solutions",
    accent: "brand",
    visual: "ai",
    body: [
      {
        type: "p",
        text: "Hay dos formas de usar Inteligencia Artificial en marketing. Una es pedirle que resuelva todo y publicar lo que devuelva. La otra es usarla como un acelerador dentro de un proceso que ya tenés claro. La primera se nota enseguida; la segunda es la que da resultados.",
      },
      { type: "h2", text: "El problema no es la herramienta, es el punto de partida" },
      {
        type: "p",
        text: "Cuando alguien le pide a un asistente que le arme un plan de marketing sin darle contexto, recibe un plan genérico. No porque la herramienta falle, sino porque no tiene con qué diferenciarse. La calidad de la respuesta depende casi por completo de la calidad del contexto que le diste.",
      },
      {
        type: "callout",
        title: "Regla práctica",
        text: "Si el resultado que obtuviste le serviría igual a tu competencia, todavía no le diste suficiente contexto propio.",
      },
      { type: "h2", text: "Un método en cuatro pasos" },
      { type: "h3", text: "1. Recolectar antes de pedir" },
      {
        type: "p",
        text: "Antes de abrir el chat, juntá lo que ya sabés: qué vendés, a quién, qué te preguntan tus clientes, qué objeciones aparecen siempre, qué hacen los competidores. Ese material es tu ventaja y es exactamente lo que ninguna herramienta puede inventar.",
      },
      { type: "h3", text: "2. Pedir con estructura" },
      {
        type: "p",
        text: "Un buen pedido define cuatro cosas: el rol desde el que querés que responda, el contexto del proyecto, el formato de salida y las restricciones. Sin esas cuatro piezas vas a iterar mucho más de lo necesario.",
      },
      {
        type: "ul",
        items: [
          "Rol: desde qué perspectiva debe responder",
          "Contexto: datos reales de tu proyecto",
          "Formato: tabla, lista, documento, cantidad de opciones",
          "Restricciones: qué evitar, qué tono usar, qué extensión",
        ],
      },
      { type: "h3", text: "3. Verificar siempre" },
      {
        type: "p",
        text: "Todo dato que vayas a usar para decidir algo tiene que estar verificado en una fuente. Los modelos pueden afirmar cosas incorrectas con total seguridad, y en marketing esos errores se pagan con presupuesto.",
      },
      { type: "h3", text: "4. Documentar lo que funciona" },
      {
        type: "p",
        text: "Cuando un pedido devuelve un buen resultado, guardalo. Con el tiempo vas a tener un banco propio de prompts que refleja tu forma de trabajar. Eso es lo que convierte el uso intuitivo en un sistema.",
      },
      { type: "h2", text: "Dónde la IA suma más" },
      {
        type: "ol",
        items: [
          "Investigación de mercado y competencia: reduce horas a minutos",
          "Generación de variantes: ángulos de comunicación, títulos, copys de anuncios",
          "Análisis de datos: interpretación de tablas y detección de patrones",
          "Tareas repetitivas: adaptación de contenido a distintos formatos",
        ],
      },
      { type: "h2", text: "Dónde conviene no usarla" },
      {
        type: "p",
        text: "En las decisiones de fondo. A quién le vas a hablar, qué vas a dejar de hacer, cuánto vas a invertir y qué riesgo estás dispuesto a asumir son decisiones que dependen de tu conocimiento del negocio y de tu tolerancia al error. Ahí la IA puede darte opciones, pero la elección es tuya.",
      },
      {
        type: "quote",
        text: "La IA no reemplaza el criterio. Lo hace más barato de ejercer, porque te deja más tiempo para pensar y menos para ejecutar.",
      },
    ],
  },

  {
    slug: "errores-frecuentes-al-empezar-con-meta-ads",
    title: "Seis errores que hacen perder presupuesto al empezar con Meta Ads",
    category: "Publicidad Digital",
    excerpt:
      "La mayoría de las campañas que no funcionan fallan antes de publicarse. Repasamos los errores más caros y cómo evitarlos.",
    date: "2026-06-04",
    readingTime: "6 min",
    author: "Equipo Brand Solutions",
    accent: "cyan",
    visual: "ads",
    body: [
      {
        type: "p",
        text: "Cuando una campaña no rinde, la reacción habitual es tocar la segmentación. En la mayoría de los casos el problema está antes: en la configuración, en el objetivo elegido o en el anuncio.",
      },
      { type: "h2", text: "1. Elegir el objetivo equivocado" },
      {
        type: "p",
        text: "Si el objetivo de la campaña es tráfico, la plataforma va a buscar personas que hagan clic. Si lo que querés son ventas o consultas, tenés que decírselo. Optimizar por clics y esperar conversiones es el error más frecuente y el más caro.",
      },
      { type: "h2", text: "2. Publicar sin medición configurada" },
      {
        type: "p",
        text: "Sin píxel, sin eventos y sin verificación de dominio, la campaña avanza a ciegas. No solo no vas a poder evaluar los resultados: la propia plataforma no puede optimizar porque no recibe la señal de qué está funcionando.",
      },
      {
        type: "callout",
        title: "Antes de gastar el primer peso",
        text: "Verificá que el evento de conversión se registre correctamente haciendo una prueba real del recorrido completo.",
      },
      { type: "h2", text: "3. Fragmentar demasiado el presupuesto" },
      {
        type: "p",
        text: "Diez conjuntos de anuncios con presupuesto mínimo no le permiten a la plataforma salir de la fase de aprendizaje. Menos conjuntos con más presupuesto suelen dar resultados más estables.",
      },
      { type: "h2", text: "4. Hablarle a todo el mundo igual" },
      {
        type: "p",
        text: "Una persona que nunca te vio y una que ya visitó tu sitio necesitan mensajes distintos. Separar público frío, tibio y de retargeting es lo mínimo para que la comunicación tenga sentido.",
      },
      { type: "h2", text: "5. Descuidar el anuncio" },
      {
        type: "p",
        text: "La creatividad es la variable con mayor impacto sobre el resultado. Un anuncio que no comunica con claridad qué ofrecés y para quién es no se arregla con ajustes de segmentación.",
      },
      { type: "h2", text: "6. Optimizar demasiado pronto" },
      {
        type: "p",
        text: "Cambiar la campaña todos los días la mantiene en aprendizaje permanente. Definí una rutina de revisión, esperá a tener volumen suficiente y recién ahí ajustá.",
      },
      {
        type: "ul",
        items: [
          "Definí el objetivo real antes de crear la campaña",
          "Probá la medición de punta a punta",
          "Concentrá presupuesto en menos conjuntos",
          "Separá públicos por temperatura",
          "Trabajá varias variantes creativas",
          "Ajustá con datos, no con ansiedad",
        ],
      },
    ],
  },

  {
    slug: "calendario-de-contenidos-que-se-pueda-sostener",
    title: "Cómo armar un calendario de contenidos que puedas sostener",
    category: "Redes Sociales",
    excerpt:
      "Publicar todos los días no es una estrategia. Un método simple para planificar contenido con el tiempo que realmente tenés.",
    date: "2026-05-21",
    readingTime: "5 min",
    author: "Equipo Brand Solutions",
    accent: "coral",
    visual: "calendar",
    body: [
      {
        type: "p",
        text: "El calendario de contenidos ideal no es el más ambicioso: es el que vas a poder cumplir dentro de tres meses, cuando el entusiasmo inicial ya pasó.",
      },
      { type: "h2", text: "Empezá por el tiempo disponible" },
      {
        type: "p",
        text: "Antes de definir cuántas publicaciones vas a hacer por semana, calculá cuántas horas reales podés dedicarle. Si tenés dos horas semanales, planificar cinco publicaciones diarias garantiza abandonar en un mes.",
      },
      { type: "h2", text: "Definí pilares, no temas sueltos" },
      {
        type: "p",
        text: "Un pilar es un territorio de contenido que podés sostener durante meses. Tres o cuatro pilares alcanzan. Cada publicación tiene que poder ubicarse en uno de ellos: si no encaja en ninguno, probablemente no corresponda a tu marca.",
      },
      {
        type: "ul",
        items: [
          "Educativo: enseñás algo que resuelve un problema concreto",
          "Prueba: mostrás resultados, casos y procesos",
          "Marca: contás quién sos y cómo trabajás",
          "Conversión: invitás a un paso concreto",
        ],
      },
      { type: "h2", text: "Producí por lotes" },
      {
        type: "p",
        text: "Grabar, escribir y diseñar en sesiones concentradas rinde mucho más que producir todos los días. Una tarde de producción puede cubrir dos semanas de publicaciones.",
      },
      {
        type: "callout",
        title: "Regla de la mitad",
        text: "Planificá la mitad de lo que creés que podés hacer. El margen que queda es lo que te permite responder a lo que surge.",
      },
      { type: "h2", text: "Dejá lugar para lo que aparece" },
      {
        type: "p",
        text: "Un calendario cerrado al cien por ciento no deja espacio para lo espontáneo, que suele ser lo que mejor funciona. Reservá un lugar por semana para contenido de oportunidad.",
      },
      { type: "h2", text: "Medí y ajustá una vez por mes" },
      {
        type: "p",
        text: "Revisar métricas todos los días no cambia nada y desgasta. Una revisión mensual con los datos suficientes permite decidir qué pilar reforzar y cuál recortar.",
      },
    ],
  },

  {
    slug: "que-medir-en-marketing-digital",
    title: "Qué medir en marketing digital cuando recién empezás",
    category: "Estrategia",
    excerpt:
      "Hay decenas de métricas disponibles y casi ninguna sirve sola. Cómo elegir los pocos indicadores que ayudan a decidir.",
    date: "2026-05-08",
    readingTime: "6 min",
    author: "Equipo Brand Solutions",
    accent: "ink",
    visual: "analytics",
    body: [
      {
        type: "p",
        text: "Las plataformas muestran todo lo que pueden medir, no lo que te conviene mirar. La diferencia entre un tablero útil y uno decorativo está en cuántas decisiones podés tomar con él.",
      },
      { type: "h2", text: "Una métrica sirve si cambia una decisión" },
      {
        type: "p",
        text: "Antes de sumar un indicador al tablero, preguntate qué harías distinto si subiera o bajara. Si la respuesta es nada, no lo agregues.",
      },
      { type: "h2", text: "Tres niveles de medición" },
      { type: "h3", text: "Nivel negocio" },
      {
        type: "p",
        text: "Ingresos, cantidad de clientes nuevos, ticket promedio y costo de adquisición. Son las métricas que le importan a quien toma las decisiones de inversión.",
      },
      { type: "h3", text: "Nivel canal" },
      {
        type: "p",
        text: "Tráfico, leads generados, costo por lead, tasa de conversión. Muestran qué canal está aportando y con qué eficiencia.",
      },
      { type: "h3", text: "Nivel pieza" },
      {
        type: "p",
        text: "Alcance, interacciones, clics, retención de video. Sirven para ajustar contenidos y creatividades, no para evaluar el negocio.",
      },
      {
        type: "quote",
        text: "El error más común es reportar métricas de nivel pieza para justificar decisiones de nivel negocio.",
      },
      { type: "h2", text: "Empezá con cinco" },
      {
        type: "ol",
        items: [
          "Personas que llegan a tu sitio o perfil",
          "Personas que dejan sus datos o consultan",
          "Costo de conseguir cada una de esas consultas",
          "Porcentaje de consultas que se convierten en clientes",
          "Ingreso generado en el período",
        ],
      },
      {
        type: "p",
        text: "Con esos cinco números podés responder si el marketing está funcionando. Todo lo demás es detalle que se agrega cuando ya tenés la base ordenada.",
      },
    ],
  },

  {
    slug: "email-marketing-sigue-funcionando",
    title: "Por qué el email marketing sigue siendo el canal más rentable",
    category: "Marketing Digital",
    excerpt:
      "Sin algoritmo de por medio y con la base en tu poder, el email sigue ganando en relación entre costo y resultado.",
    date: "2026-04-24",
    readingTime: "5 min",
    author: "Equipo Brand Solutions",
    accent: "signal",
    visual: "email",
    body: [
      {
        type: "p",
        text: "Cada tanto alguien anuncia que el email marketing murió. Mientras tanto, sigue siendo el canal donde más control tenés y donde la relación entre lo que invertís y lo que obtenés es más previsible.",
      },
      { type: "h2", text: "La base es tuya" },
      {
        type: "p",
        text: "Si mañana cambia el algoritmo de una red social, tu alcance cambia con él. Si mañana cambia algo en tu plataforma de email, exportás la base y seguís. Esa diferencia de propiedad es la razón principal para trabajar el canal.",
      },
      { type: "h2", text: "Llega a quien decidió recibirte" },
      {
        type: "p",
        text: "Una persona que dejó su email hizo un gesto explícito de interés. Es una audiencia mucho más calificada que la de cualquier campaña de alcance.",
      },
      { type: "h2", text: "Los flujos trabajan sin vos" },
      {
        type: "ul",
        items: [
          "Bienvenida: presenta la marca y ordena las expectativas",
          "Educación: entrega valor antes de pedir algo",
          "Recuperación: retoma carritos y consultas frenadas",
          "Reactivación: recupera contactos que se enfriaron",
        ],
      },
      {
        type: "callout",
        title: "Empezá por uno",
        text: "Si nunca automatizaste nada, armá solo el flujo de bienvenida. Es el que más impacto tiene por unidad de esfuerzo.",
      },
      { type: "h2", text: "Cuidar la entregabilidad es parte del trabajo" },
      {
        type: "p",
        text: "Una base comprada o mal mantenida arruina la reputación del remitente y hace que tus emails dejen de llegar. Limpiar contactos inactivos y respetar las bajas no es un detalle administrativo: es lo que sostiene el canal.",
      },
    ],
  },

  {
    slug: "ecommerce-que-convierte",
    title: "Qué cambia en un ecommerce que convierte y en uno que no",
    category: "Ecommerce",
    excerpt:
      "Mismo producto, mismo precio, resultados distintos. Los factores que más influyen en la conversión de una tienda online.",
    date: "2026-04-09",
    readingTime: "6 min",
    author: "Equipo Brand Solutions",
    accent: "amber",
    visual: "ecommerce",
    body: [
      {
        type: "p",
        text: "Dos tiendas pueden vender lo mismo al mismo precio y tener tasas de conversión muy distintas. La diferencia rara vez está en el diseño: está en la cantidad de dudas que quedan sin responder antes del pago.",
      },
      { type: "h2", text: "Velocidad antes que estética" },
      {
        type: "p",
        text: "En móvil, cada segundo de demora cuesta ventas. Antes de rediseñar nada, medí el tiempo de carga real de la ficha de producto y del checkout.",
      },
      { type: "h2", text: "La ficha de producto responde o pierde" },
      {
        type: "ul",
        items: [
          "Fotos que muestren el producto en uso y a escala",
          "Descripción que responda las preguntas frecuentes",
          "Costo y plazo de envío visibles antes del checkout",
          "Política de cambios explicada sin letra chica",
          "Opiniones de otros compradores",
        ],
      },
      { type: "h2", text: "El checkout es donde se pierde la venta" },
      {
        type: "p",
        text: "Cada campo innecesario, cada registro obligatorio y cada costo que aparece recién al final aumentan el abandono. Probá tu propio checkout desde el celular y contá cuántos pasos hacen falta.",
      },
      {
        type: "callout",
        title: "Prueba rápida",
        text: "Pedile a alguien que no conoce tu tienda que complete una compra mientras te cuenta en voz alta lo que piensa. En diez minutos vas a encontrar más problemas que en un mes de análisis.",
      },
      { type: "h2", text: "Después de la compra también se juega" },
      {
        type: "p",
        text: "La confirmación, el seguimiento del envío y el mensaje posterior a la entrega definen si esa persona vuelve. Conseguir un cliente nuevo cuesta mucho más que retener a uno que ya compró.",
      },
    ],
  },
];

export const postCategories: string[] = Array.from(new Set(posts.map((p) => p.category)));

export const getPost = (slug: string): Post | undefined => posts.find((p) => p.slug === slug);

export const sortedPosts = (): Post[] =>
  [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getRelatedPosts = (post: Post, limit = 3): Post[] =>
  sortedPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, limit);

/** Categorías temáticas que se muestran como filtros. */
export const blogTopics = [
  "Marketing Digital",
  "Inteligencia Artificial",
  "Redes Sociales",
  "Publicidad Digital",
  "Ecommerce",
  "Estrategia",
] as const;
