"use client";

import { useEffect, useState } from "react";
import { formatPrice } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

/**
 * Barra de inscripción fija en móvil y tablet.
 * Aparece cuando el usuario dejó atrás el bloque de compra principal,
 * de modo que la acción siempre esté a mano durante la navegación.
 */
export function StickyEnroll({
  title,
  price,
  href,
  label = "Inscribirme",
}: {
  title: string;
  price: number;
  href: string;
  label?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 240;
      setVisible(window.scrollY > 620 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <div className="container-bs flex items-center gap-4 py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs text-muted">{title}</p>
          <p className="font-display text-lg font-bold tracking-tight">
            {price > 0 ? formatPrice(price) : "A medida"}
          </p>
        </div>
        <Button href={href} size="md" icon="arrow-right" tabIndex={visible ? undefined : -1}>
          {label}
        </Button>
      </div>
    </div>
  );
}
