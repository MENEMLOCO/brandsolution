import { cn } from "@/lib/utils";

/** Valoración en estrellas con etiqueta accesible. */
export function Stars({ rating, className }: { rating: number; className?: string }) {
  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Valoración: ${rating} de 5`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="size-4" aria-hidden="true">
          <path
            d="m12 3.6 2.55 5.4 5.7.8-4.13 4.16.98 5.94L12 17.1l-5.1 2.8.98-5.94L3.75 9.8l5.7-.8z"
            fill={i < rating ? "#ffb020" : "#e4e0d5"}
          />
        </svg>
      ))}
    </div>
  );
}
