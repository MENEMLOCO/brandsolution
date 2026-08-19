import Link from "next/link";
import type { Resource } from "@/data/types";
import { formatPrice } from "@/data/site";
import { accent as accentMap } from "@/lib/accents";
import { cn } from "@/lib/utils";
import { CoverVisual } from "@/components/visuals/CoverVisual";
import { Icon } from "@/components/ui/Icon";

export function ResourceCard({ resource, className }: { resource: Resource; className?: string }) {
  const a = accentMap[resource.accent];
  const isFree = resource.price === 0;

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
          <CoverVisual visual={resource.visual} tone={resource.accent} />
        </div>
        <span
          className={cn(
            "absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-bold",
            isFree ? "bg-signal-400 text-ink" : "bg-white text-ink shadow-soft",
          )}
        >
          {isFree ? "Gratis" : formatPrice(resource.price)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className={cn("text-xs font-semibold tracking-wide uppercase", a.text)}>{resource.category}</span>
        <h3 className="mt-2 font-display text-lg leading-snug font-bold tracking-tight">
          <Link href={`/recursos/${resource.slug}`} className="before:absolute before:inset-0 before:content-['']">
            {resource.title}
          </Link>
        </h3>
        <p className="mt-2.5 line-clamp-3 flex-1 text-[0.925rem] leading-relaxed text-muted">{resource.excerpt}</p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-5">
          <span className="inline-flex min-w-0 items-center gap-1.5 text-xs text-muted-2">
            <Icon name="download" className="size-4 shrink-0" />
            <span className="truncate">{resource.format}</span>
          </span>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-600">
            {isFree ? "Descargar gratis" : "Ver recurso"}
            <Icon name="arrow-right" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
