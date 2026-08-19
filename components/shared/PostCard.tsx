import Link from "next/link";
import type { Post } from "@/data/types";
import { accent as accentMap } from "@/lib/accents";
import { cn, formatDateShort } from "@/lib/utils";
import { CoverVisual } from "@/components/visuals/CoverVisual";
import { Icon } from "@/components/ui/Icon";

export function PostCard({ post, className }: { post: Post; className?: string }) {
  const a = accentMap[post.accent];

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-lift",
        className,
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
          <CoverVisual visual={post.visual} tone={post.accent} />
        </div>
        <span className={cn("absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold", a.solid)}>
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg leading-snug font-bold tracking-tight">
          <Link href={`/blog/${post.slug}`} className="before:absolute before:inset-0 before:content-['']">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2.5 line-clamp-3 flex-1 text-[0.925rem] leading-relaxed text-muted">{post.excerpt}</p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-5 text-xs text-muted-2">
          <span className="inline-flex items-center gap-3">
            <time dateTime={post.date}>{formatDateShort(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-brand-700">
            Leer artículo
            <Icon name="arrow-right" className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </article>
  );
}
