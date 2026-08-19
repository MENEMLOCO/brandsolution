"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

interface CarouselProps {
  children: ReactNode[];
  /** Etiqueta accesible del carrusel. */
  label: string;
  className?: string;
  itemClassName?: string;
  controlsTone?: "light" | "dark";
}

/**
 * Carrusel horizontal con desplazamiento por scroll-snap.
 * Funciona con gesto táctil, rueda y teclado, y no necesita JavaScript
 * para poder leerse: los controles sólo mejoran la experiencia.
 */
export function Carousel({
  children,
  label,
  className,
  itemClassName,
  controlsTone = "light",
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.querySelector<HTMLElement>("[data-carousel-item]");
    const step = first ? first.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  const controlClasses = cn(
    "grid size-11 place-items-center rounded-full border transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed",
    controlsTone === "light"
      ? "border-line bg-white text-ink hover:border-ink hover:-translate-y-0.5 shadow-soft"
      : "border-white/20 bg-white/10 text-white hover:bg-white/20 hover:-translate-y-0.5",
  );

  return (
    <div className={cn("relative", className)}>
      <div
        ref={trackRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="scrollbar-none -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 md:-mx-2 md:px-2"
      >
        {children.map((child, index) => (
          <div
            key={index}
            data-carousel-item
            className={cn(
              "w-[85vw] shrink-0 snap-start sm:w-[22rem] lg:w-[24rem]",
              itemClassName,
            )}
          >
            {child}
          </div>
        ))}
      </div>

      <div className="mt-7 flex items-center gap-3">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          className={controlClasses}
          aria-label="Ver anteriores"
        >
          <Icon name="chevron-left" className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          className={controlClasses}
          aria-label="Ver siguientes"
        >
          <Icon name="chevron-right" className="size-5" />
        </button>
        <span
          className={cn(
            "ml-1 text-sm",
            controlsTone === "light" ? "text-muted" : "text-white/50",
          )}
        >
          Deslizá para ver más
        </span>
      </div>
    </div>
  );
}
