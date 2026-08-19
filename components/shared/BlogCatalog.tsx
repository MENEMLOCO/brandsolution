"use client";

import { useState } from "react";
import type { Post } from "@/data/types";
import { cn } from "@/lib/utils";
import { PostCard } from "./PostCard";
import { Icon } from "@/components/ui/Icon";

export function BlogCatalog({ posts, topics }: { posts: Post[]; topics: readonly string[] }) {
  const [active, setActive] = useState("Todos");
  const filters = ["Todos", ...topics];
  const visible = active === "Todos" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200",
              active === filter
                ? "border-ink bg-ink text-white"
                : "border-line bg-white text-ink-3 hover:border-line-2 hover:bg-paper-2",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-12 flex items-center gap-3 rounded-2xl border border-dashed border-line-2 p-8 text-muted">
          <Icon name="search" className="size-5" />
          Todavía no publicamos artículos en esta categoría.
        </p>
      )}
    </div>
  );
}
