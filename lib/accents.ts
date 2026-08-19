import type { Accent } from "@/data/types";

/**
 * Mapa estático de estilos por acento.
 * Tailwind necesita clases literales, por eso se declaran completas.
 */
export const accent: Record<
  Accent,
  {
    /** Fondo suave para chips y bloques secundarios. */
    soft: string;
    /** Texto sobre fondo claro. */
    text: string;
    /** Fondo sólido con su color de texto legible. */
    solid: string;
    /** Borde tenue. */
    border: string;
    /** Punto o marcador. */
    dot: string;
    /** Degradado decorativo para portadas. */
    gradient: string;
    /** Anillo en estados hover. */
    hoverRing: string;
    /** Valor hexadecimal, útil para SVG inline. */
    hex: string;
    hexSoft: string;
  }
> = {
  brand: {
    soft: "bg-brand-50",
    text: "text-brand-700",
    solid: "bg-brand-600 text-white",
    border: "border-brand-100",
    dot: "bg-brand-600",
    gradient: "from-brand-600 via-brand-500 to-brand-400",
    hoverRing: "group-hover:ring-brand-200",
    hex: "#4a1fe0",
    hexSoft: "#e5dcff",
  },
  signal: {
    soft: "bg-signal-100",
    text: "text-signal-600",
    solid: "bg-signal-400 text-ink",
    border: "border-signal-200",
    dot: "bg-signal-500",
    gradient: "from-signal-500 via-signal-400 to-signal-200",
    hoverRing: "group-hover:ring-signal-300",
    hex: "#b6e337",
    hexSoft: "#e6fbaa",
  },
  coral: {
    soft: "bg-coral-soft",
    text: "text-coral",
    solid: "bg-coral text-ink",
    border: "border-coral-soft",
    dot: "bg-coral",
    gradient: "from-coral via-coral to-amber",
    hoverRing: "group-hover:ring-coral-soft",
    hex: "#ff6a45",
    hexSoft: "#ffe6df",
  },
  cyan: {
    soft: "bg-cyan-soft",
    text: "text-cyan",
    solid: "bg-cyan text-ink",
    border: "border-cyan-soft",
    dot: "bg-cyan",
    gradient: "from-cyan via-cyan to-brand-400",
    hoverRing: "group-hover:ring-cyan-soft",
    hex: "#19c6ea",
    hexSoft: "#d9f6fd",
  },
  amber: {
    soft: "bg-amber-soft",
    text: "text-amber",
    solid: "bg-amber text-ink",
    border: "border-amber-soft",
    dot: "bg-amber",
    gradient: "from-amber via-amber to-coral",
    hoverRing: "group-hover:ring-amber-soft",
    hex: "#ffb020",
    hexSoft: "#fff1d6",
  },
  ink: {
    soft: "bg-paper-2",
    text: "text-ink-2",
    solid: "bg-ink text-white",
    border: "border-line",
    dot: "bg-ink",
    gradient: "from-ink via-ink-2 to-ink-3",
    hoverRing: "group-hover:ring-line-2",
    hex: "#171334",
    hexSoft: "#ebe8df",
  },
};
