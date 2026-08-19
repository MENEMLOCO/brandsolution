"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "./ContactForm";

export interface ContactRef {
  slug: string;
  title: string;
  kind: "curso" | "programa";
}

function PanelInner({ items }: { items: ContactRef[] }) {
  const params = useSearchParams();
  const courseSlug = params.get("curso");
  const programSlug = params.get("programa");

  const selected =
    items.find((item) => item.kind === "curso" && item.slug === courseSlug) ??
    items.find((item) => item.kind === "programa" && item.slug === programSlug);

  const defaultInterest = selected?.kind === "programa" ? "programa" : "cursos";
  const defaultMessage = selected
    ? `Hola, me interesa ${selected.kind === "curso" ? "el curso" : "el programa"} "${selected.title}". Quisiera recibir más información.`
    : "";

  return (
    <>
      {selected ? (
        <p className="mb-6 flex items-start gap-2.5 rounded-2xl bg-brand-50 p-4 text-sm text-brand-700">
          <Icon name="check-circle" className="mt-0.5 size-4 shrink-0" />
          <span>
            Consulta sobre <strong className="font-semibold">{selected.title}</strong>
          </span>
        </p>
      ) : null}
      <ContactForm key={selected?.slug ?? "general"} defaultInterest={defaultInterest} defaultMessage={defaultMessage} />
    </>
  );
}

/**
 * Envuelto en Suspense: permite leer los parámetros de la URL
 * sin convertir la página en dinámica.
 */
export function ContactPanel({ items }: { items: ContactRef[] }) {
  return (
    <Suspense fallback={<ContactForm />}>
      <PanelInner items={items} />
    </Suspense>
  );
}
