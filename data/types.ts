/** Tipos compartidos por toda la capa de contenido. */

export type Accent = "brand" | "signal" | "coral" | "cyan" | "amber" | "ink";

/** Identifica qué ilustración SVG original se usa como portada. */
export type VisualKey =
  | "strategy"
  | "content"
  | "social"
  | "ads"
  | "search"
  | "ai"
  | "email"
  | "analytics"
  | "ecommerce"
  | "calendar"
  | "prompts"
  | "persona"
  | "dashboard"
  | "checklist"
  | "plan";

export type Level = "Inicial" | "Intermedio" | "Avanzado" | "Todos los niveles";

export interface Faq {
  q: string;
  a: string;
}

export interface SyllabusModule {
  title: string;
  summary: string;
  lessons: string[];
}

export interface Course {
  slug: string;
  title: string;
  /** Categoría visible en la tarjeta y en el breadcrumb. */
  category: string;
  /** Promesa principal, una sola frase. */
  promise: string;
  /** Descripción breve para tarjetas y metadatos. */
  excerpt: string;
  /** Descripción extendida, un párrafo por elemento. */
  description: string[];
  level: Level;
  /** Texto visible, por ejemplo "3 horas". */
  duration: string;
  /** Duración en formato ISO 8601 para el schema markup. */
  durationIso: string;
  modules: number;
  modality: string;
  language: string;
  certificate: boolean;
  price: number;
  /** Precio tachado opcional para mostrar un descuento. */
  compareAtPrice?: number;
  featured?: boolean;
  badge?: string;
  audience: string[];
  outcomes: string[];
  syllabus: SyllabusModule[];
  includes: string[];
  tools: string[];
  instructor: string;
  faqs: Faq[];
  related: string[];
  accent: Accent;
  visual: VisualKey;
  updatedAt: string;
}

export interface Program {
  slug: string;
  title: string;
  kicker: string;
  promise: string;
  excerpt: string;
  description: string[];
  duration: string;
  durationIso: string;
  modality: string;
  level: Level;
  certificate: boolean;
  price: number;
  compareAtPrice?: number;
  modules: { code: string; title: string; summary: string }[];
  outcomes: string[];
  audience: string[];
  includes: string[];
  faqs: Faq[];
  instructor: string;
  accent: Accent;
  updatedAt: string;
}

export interface Resource {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  description: string[];
  /** 0 significa gratuito. */
  price: number;
  format: string;
  includes: string[];
  accent: Accent;
  visual: VisualKey;
  featured?: boolean;
}

export interface Post {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  accent: Accent;
  visual: VisualKey;
  /** Contenido en bloques simples, sin dependencias externas. */
  body: PostBlock[];
}

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "callout"; title: string; text: string };

export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  highlights: string[];
  initials: string;
}

export interface Testimonial {
  id: string;
  /** Reemplazar por testimonios reales antes de publicar. */
  name: string;
  role: string;
  course: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  initials: string;
  accent: Accent;
  /** Marca los testimonios de ejemplo pendientes de reemplazo. */
  placeholder: boolean;
}

export interface Service {
  slug: string;
  title: string;
  excerpt: string;
  bullets: string[];
  accent: Accent;
  visual: VisualKey;
}
