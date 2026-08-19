import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { accent as accentMap } from "@/lib/accents";
import type { Accent } from "@/data/types";
import { Icon, type IconName } from "./Icon";

export function Pill({
  children,
  tone = "ink",
  icon,
  className,
  solid = false,
}: {
  children: ReactNode;
  tone?: Accent;
  icon?: IconName;
  className?: string;
  solid?: boolean;
}) {
  const a = accentMap[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        solid ? a.solid : cn(a.soft, a.text),
        className,
      )}
    >
      {icon ? <Icon name={icon} className="size-3.5" /> : null}
      {children}
    </span>
  );
}

/** Dato compacto con ícono, para metadatos de cursos y recursos. */
export function MetaItem({
  icon,
  children,
  className,
}: {
  icon: IconName;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm text-muted", className)}>
      <Icon name={icon} className="size-4 text-ink-3/60" />
      {children}
    </span>
  );
}
