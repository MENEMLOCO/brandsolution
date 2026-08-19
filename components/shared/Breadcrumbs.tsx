import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  return (
    <nav aria-label="Miga de pan" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-[0.8rem]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 ? (
                <Icon
                  name="chevron-right"
                  className={cn("size-3.5", tone === "light" ? "text-muted-2" : "text-white/35")}
                />
              ) : null}
              {isLast ? (
                <span
                  aria-current="page"
                  className={cn("font-medium", tone === "light" ? "text-ink-3" : "text-white/75")}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className={cn(
                    "transition-colors",
                    tone === "light" ? "text-muted hover:text-ink" : "text-white/50 hover:text-white",
                  )}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
