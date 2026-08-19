"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  /** Retardo en milisegundos para escalonar la aparición. */
  delay?: number;
  className?: string;
  as?: ElementType;
  /** Margen del observador; útil para adelantar la animación. */
  rootMargin?: string;
}

/**
 * Aparición progresiva al hacer scroll.
 * Usa IntersectionObserver y se desconecta después de mostrarse una vez.
 * Si el usuario prefiere movimiento reducido, el CSS lo neutraliza.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  rootMargin = "0px 0px -12% 0px",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.08, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      data-visible={visible ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
