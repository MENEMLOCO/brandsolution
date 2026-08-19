"use client";

import { useMemo, useState } from "react";
import type { Course } from "@/data/types";
import { cn } from "@/lib/utils";
import { CourseCard } from "@/components/shared/CourseCard";
import { Icon } from "@/components/ui/Icon";

export function CourseCatalog({ courses, categories }: { courses: Course[]; categories: string[] }) {
  const [active, setActive] = useState<string>("Todos");

  const filters = useMemo(() => ["Todos", ...categories], [categories]);
  const visible = active === "Todos" ? courses : courses.filter((c) => c.category === active);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

        <p className="shrink-0 text-sm text-muted" aria-live="polite">
          {visible.length} {visible.length === 1 ? "curso" : "cursos"}
        </p>
      </div>

      {visible.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      ) : (
        <p className="mt-12 flex items-center gap-3 rounded-2xl border border-dashed border-line-2 p-8 text-muted">
          <Icon name="search" className="size-5" />
          Todavía no hay cursos en esta categoría.
        </p>
      )}
    </div>
  );
}
