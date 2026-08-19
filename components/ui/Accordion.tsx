"use client";

import { useId, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";

export interface AccordionItem {
  /** Etiqueta corta a la izquierda, por ejemplo "01". */
  badge?: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Índice abierto al cargar. null para que arranquen todos cerrados. */
  defaultOpen?: number | null;
  allowMultiple?: boolean;
  className?: string;
  tone?: "light" | "dark";
}

export function Accordion({
  items,
  defaultOpen = 0,
  allowMultiple = false,
  className,
  tone = "light",
}: AccordionProps) {
  const baseId = useId();
  const [open, setOpen] = useState<number[]>(defaultOpen === null ? [] : [defaultOpen]);

  const toggle = (index: number) => {
    setOpen((current) => {
      const isOpen = current.includes(index);
      if (allowMultiple) {
        return isOpen ? current.filter((i) => i !== index) : [...current, index];
      }
      return isOpen ? [] : [index];
    });
  };

  return (
    <div
      className={cn(
        "divide-y overflow-hidden rounded-2xl border",
        tone === "light" ? "divide-line border-line bg-white" : "divide-white/10 border-white/12 bg-white/5",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = open.includes(index);
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.title + index}>
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className={cn(
                  "flex w-full items-center gap-4 px-5 py-5 text-left transition-colors sm:px-6",
                  tone === "light" ? "hover:bg-paper-2/70" : "hover:bg-white/5",
                )}
              >
                {item.badge ? (
                  <span
                    className={cn(
                      "font-display text-sm font-bold tabular-nums",
                      tone === "light" ? "text-brand-600" : "text-signal-400",
                    )}
                  >
                    {item.badge}
                  </span>
                ) : null}

                <span className="flex-1">
                  <span
                    className={cn(
                      "block font-display text-base font-semibold tracking-tight sm:text-lg",
                      tone === "dark" && "text-white",
                    )}
                  >
                    {item.title}
                  </span>
                  {item.subtitle ? (
                    <span
                      className={cn(
                        "mt-1 block text-sm",
                        tone === "light" ? "text-muted" : "text-white/60",
                      )}
                    >
                      {item.subtitle}
                    </span>
                  ) : null}
                </span>

                <span
                  className={cn(
                    "grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300",
                    tone === "light"
                      ? "border-line bg-paper text-ink-3"
                      : "border-white/15 bg-white/5 text-white",
                    isOpen && "rotate-180",
                    isOpen && tone === "light" && "border-brand-200 bg-brand-50 text-brand-700",
                  )}
                  aria-hidden="true"
                >
                  <Icon name="chevron-down" className="size-4" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn(
                "px-5 pb-6 sm:px-6",
                item.badge && "sm:pl-14",
                tone === "light" ? "text-ink-3" : "text-white/75",
              )}
            >
              <div className="animate-fade-up text-[0.95rem] leading-relaxed">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
