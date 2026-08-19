import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Contenedor de texto largo con ritmo tipográfico consistente. */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "max-w-3xl text-[1.02rem] leading-[1.75] text-ink-3",
        "[&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-ink",
        "[&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-ink",
        "[&_p]:mt-4",
        "[&_ul]:mt-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2.5 [&_ul]:pl-5 [&_ul>li]:list-disc",
        "[&_ol]:mt-4 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-2.5 [&_ol]:pl-5 [&_ol>li]:list-decimal",
        "[&_a]:font-medium [&_a]:text-brand-700 [&_a]:underline [&_a]:underline-offset-4",
        "[&_strong]:font-semibold [&_strong]:text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}
