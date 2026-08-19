import type { Testimonial } from "./types";

/**
 * ============================================================
 * TESTIMONIOS — CONTENIDO PROVISORIO
 * ------------------------------------------------------------
 * Todos los elementos tienen placeholder: true.
 * Reemplazá nombre, rol, curso, comentario y valoración por
 * testimonios reales y poné placeholder: false. El componente
 * muestra un aviso en desarrollo mientras queden placeholders.
 * ============================================================
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Nombre Apellido",
    role: "Emprendedora · Rubro",
    course: "Plan de Marketing Digital con IA",
    quote:
      "Espacio reservado para el testimonio real. Conviene que mencione la situación previa, qué hizo durante el curso y qué resultado concreto obtuvo después.",
    rating: 5,
    initials: "NA",
    accent: "brand",
    placeholder: true,
  },
  {
    id: "t2",
    name: "Nombre Apellido",
    role: "Community Manager",
    course: "Community Manager",
    quote:
      "Espacio reservado para el testimonio real. Los testimonios que mencionan un cambio medible resultan más creíbles que los elogios generales.",
    rating: 5,
    initials: "NA",
    accent: "coral",
    placeholder: true,
  },
  {
    id: "t3",
    name: "Nombre Apellido",
    role: "Responsable de Marketing",
    course: "Meta Ads desde cero",
    quote:
      "Espacio reservado para el testimonio real. Sumar el rol y el rubro de la persona ayuda a que otros se identifiquen con el caso.",
    rating: 5,
    initials: "NA",
    accent: "cyan",
    placeholder: true,
  },
  {
    id: "t4",
    name: "Nombre Apellido",
    role: "Profesional independiente",
    course: "Inteligencia Artificial aplicada al Marketing",
    quote:
      "Espacio reservado para el testimonio real. Si la persona autoriza el uso de su foto, se muestra en lugar de las iniciales.",
    rating: 5,
    initials: "NA",
    accent: "amber",
    placeholder: true,
  },
  {
    id: "t5",
    name: "Nombre Apellido",
    role: "Ecommerce · Rubro",
    course: "Email Marketing y Automatización",
    quote:
      "Espacio reservado para el testimonio real. Un comentario breve y específico funciona mejor que uno largo y genérico.",
    rating: 5,
    initials: "NA",
    accent: "signal",
    placeholder: true,
  },
  {
    id: "t6",
    name: "Nombre Apellido",
    role: "Equipo de Marketing",
    course: "Programa Integral de Marketing Digital",
    quote:
      "Espacio reservado para el testimonio real. Para capacitaciones a equipos conviene incluir el nombre de la empresa y la cantidad de participantes.",
    rating: 5,
    initials: "NA",
    accent: "ink",
    placeholder: true,
  },
];

export const hasPlaceholderTestimonials = testimonials.some((t) => t.placeholder);
