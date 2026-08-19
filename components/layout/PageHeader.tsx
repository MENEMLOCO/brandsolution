import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs, type Crumb } from "@/components/shared/Breadcrumbs";

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  crumbs?: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

/** Encabezado estándar de las páginas internas. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  crumbs,
  actions,
  aside,
  tone = "light",
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        tone === "light" ? "bg-paper" : "bg-ink text-white",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {tone === "light" ? (
          <>
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute -top-40 -right-24 size-[30rem] rounded-full bg-brand-100/70 blur-3xl" />
            <div className="absolute -top-24 -left-32 size-[24rem] rounded-full bg-signal-200/40 blur-3xl" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-grid-dark opacity-40" />
            <div className="absolute -top-40 right-1/4 size-[32rem] rounded-full bg-brand-600/30 blur-3xl" />
          </>
        )}
      </div>

      <div className="relative container-bs pt-10 pb-14 sm:pt-12 lg:pt-16 lg:pb-20">
        <div className={cn("grid gap-10", aside ? "lg:grid-cols-12 lg:gap-12" : "")}>
          <div className={cn(aside ? "lg:col-span-7" : "max-w-3xl")}>
            {crumbs ? <Breadcrumbs items={crumbs} tone={tone} /> : null}
            <Reveal>
              {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
              <h1
                className={cn(
                  "font-display text-[2.15rem] leading-[1.06] font-extrabold tracking-tighter sm:text-5xl lg:text-[3.25rem]",
                  eyebrow && "mt-5",
                  tone === "dark" && "text-white",
                )}
              >
                {title}
              </h1>
              {lead ? (
                <p
                  className={cn(
                    "mt-5 max-w-2xl text-lg leading-relaxed",
                    tone === "light" ? "text-muted" : "text-white/65",
                  )}
                >
                  {lead}
                </p>
              ) : null}
              {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
            </Reveal>
          </div>

          {aside ? (
            <div className="lg:col-span-5">
              <Reveal delay={120}>{aside}</Reveal>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
