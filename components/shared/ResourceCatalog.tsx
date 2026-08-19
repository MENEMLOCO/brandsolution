"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Resource } from "@/data/types";
import { cn } from "@/lib/utils";
import { ResourceCard } from "./ResourceCard";
import { Icon } from "@/components/ui/Icon";

type Filter = "todos" | "gratis" | "premium";

function CatalogInner({ resources }: { resources: Resource[] }) {
  const params = useSearchParams();
  const fromUrl = params.get("filtro");
  const initialFilter: Filter = fromUrl === "gratis" ? "gratis" : fromUrl === "premium" ? "premium" : "todos";
  const [filter, setFilter] = useState<Filter>(initialFilter);

  const visible =
    filter === "todos"
      ? resources
      : resources.filter((r) => (filter === "gratis" ? r.price === 0 : r.price > 0));

  const options: { id: Filter; label: string }[] = [
    { id: "todos", label: "Todos" },
    { id: "gratis", label: "Gratuitos" },
    { id: "premium", label: "Con costo" },
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setFilter(option.id)}
              aria-pressed={filter === option.id}
              className={cn(
                "rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200",
                filter === option.id
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-white text-ink-3 hover:border-line-2 hover:bg-paper-2",
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted" aria-live="polite">
          {visible.length} {visible.length === 1 ? "recurso" : "recursos"}
        </p>
      </div>

      {visible.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      ) : (
        <p className="mt-12 flex items-center gap-3 rounded-2xl border border-dashed border-line-2 p-8 text-muted">
          <Icon name="search" className="size-5" />
          No hay recursos con este filtro por ahora.
        </p>
      )}
    </div>
  );
}

/** Envuelto en Suspense para que la página siga siendo estática. */
export function ResourceCatalog({ resources }: { resources: Resource[] }) {
  return (
    <Suspense fallback={<div className="mt-10 h-96 rounded-3xl bg-paper-2" aria-hidden="true" />}>
      <CatalogInner resources={resources} />
    </Suspense>
  );
}
