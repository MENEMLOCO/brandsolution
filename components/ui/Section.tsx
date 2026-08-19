import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Tone = "paper" | "muted" | "dark" | "brand" | "transparent";

const tones: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  muted: "bg-paper-2 text-ink",
  dark: "bg-ink text-white",
  brand: "bg-brand-700 text-white",
  transparent: "",
};

interface SectionProps {
  id?: string;
  tone?: Tone;
  className?: string;
  containerClassName?: string;
  compact?: boolean;
  children: ReactNode;
  /** Elemento HTML del contenedor externo. */
  as?: "section" | "div" | "aside" | "footer";
}

export function Section({
  id,
  tone = "paper",
  className,
  containerClassName,
  compact = false,
  children,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={cn("relative", tones[tone], className)}>
      <div className={cn("container-bs", compact ? "section-y-sm" : "section-y", containerClassName)}>
        {children}
      </div>
    </Tag>
  );
}

interface EyebrowProps {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] uppercase",
        tone === "light"
          ? "border-line bg-white/70 text-ink-3 backdrop-blur"
          : "border-white/20 bg-white/10 text-white/90 backdrop-blur",
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          tone === "light" ? "bg-brand-600" : "bg-signal-400",
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  /** Nivel semántico del título. Sólo un h1 por página. */
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  tone?: "light" | "dark";
  actions?: ReactNode;
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  as: Tag = "h2",
  align = "left",
  tone = "light",
  actions,
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        Boolean(actions) && align === "left" && "lg:flex-row lg:items-end lg:justify-between lg:gap-10",
        className,
      )}
    >
      <div className={cn(
          "flex flex-col items-start gap-4",
          align === "center" ? "max-w-3xl items-center" : "max-w-2xl",
        )}>
        {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
        <Tag
          className={cn(
            "font-display font-bold tracking-tighter",
            Tag === "h1"
              ? "text-[2.35rem] leading-[1.06] sm:text-5xl lg:text-6xl"
              : "text-[1.85rem] leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
            tone === "dark" && "text-white",
            titleClassName,
          )}
        >
          {title}
        </Tag>
        {lead ? (
          <p
            className={cn(
              "text-base leading-relaxed sm:text-lg",
              tone === "light" ? "text-muted" : "text-white/70",
            )}
          >
            {lead}
          </p>
        ) : null}
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap gap-3">{actions}</div> : null}
    </div>
  );
}

/** Resalta una palabra estratégica con el marcador de marca. */
export function Mark({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn("mark-signal", className)}>{children}</span>;
}

/** Resalta con degradado de marca (para fondos oscuros). */
export function Gradient({ children }: { children: ReactNode }) {
  return <span className="text-gradient-brand">{children}</span>;
}
