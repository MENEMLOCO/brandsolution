import Link from "next/link";
import type { Course } from "@/data/types";
import { formatPrice } from "@/data/site";
import { accent as accentMap } from "@/lib/accents";
import { cn } from "@/lib/utils";
import { CoverVisual } from "@/components/visuals/CoverVisual";
import { Icon } from "@/components/ui/Icon";

export function CourseCard({ course, className }: { course: Course; className?: string }) {
  const a = accentMap[course.accent];

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-line-2 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        <div className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
          <CoverVisual visual={course.visual} tone={course.accent} />
        </div>
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className={cn("rounded-full px-3 py-1 text-xs font-semibold backdrop-blur", a.solid)}>
            {course.category}
          </span>
          {course.badge ? (
            <span className="rounded-full bg-ink/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {course.badge}
            </span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl leading-snug font-bold tracking-tight">
          <Link href={`/cursos/${course.slug}`} className="before:absolute before:inset-0 before:content-['']">
            {course.title}
          </Link>
        </h3>

        <p className="mt-2.5 line-clamp-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{course.excerpt}</p>

        <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 border-t border-line pt-5 text-sm text-ink-3">
          <li className="flex items-center gap-2">
            <Icon name="clock" className="size-4 text-muted-2" />
            {course.duration}
          </li>
          <li className="flex items-center gap-2">
            <Icon name="layers" className="size-4 text-muted-2" />
            {course.modules} módulos
          </li>
          <li className="flex items-center gap-2">
            <Icon name="monitor" className="size-4 text-muted-2" />
            {course.modality.split("·")[0].trim()}
          </li>
          <li className="flex items-center gap-2">
            <Icon name="award" className="size-4 text-muted-2" />
            {course.certificate ? "Certificado" : "Sin certificado"}
          </li>
        </ul>

        <div className="mt-6 flex items-end justify-between gap-4 pt-1">
          <div>
            <p className="text-xs font-medium text-muted-2">Inversión</p>
            <p className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold tracking-tight">{formatPrice(course.price)}</span>
              {course.compareAtPrice ? (
                <span className="text-sm text-muted-2 line-through">{formatPrice(course.compareAtPrice)}</span>
              ) : null}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-paper-2 px-4 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 group-hover:bg-ink group-hover:text-white">
            Ver curso
            <Icon name="arrow-right" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
