import type { Metadata } from "next";
import { generalFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = buildMetadata({
  title: "Preguntas frecuentes",
  description:
    "Dudas habituales sobre los cursos de Brand Solutions: modalidad, acceso, certificados, formas de pago, facturación y devoluciones.",
  path: "/preguntas-frecuentes",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(generalFaqs),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Preguntas frecuentes", path: "/preguntas-frecuentes" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="Ayuda"
        title="Preguntas frecuentes"
        lead="Las consultas que más nos hacen sobre cursos, acceso, certificados y pagos."
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Preguntas frecuentes", path: "/preguntas-frecuentes" },
        ]}
      />

      <Section className="pt-0" containerClassName="pt-0">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <Accordion
              items={generalFaqs.map((faq) => ({ title: faq.q, content: <p>{faq.a}</p> }))}
              defaultOpen={0}
              allowMultiple
            />
          </div>
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-line bg-white p-7 lg:sticky lg:top-24">
              <h2 className="font-display text-lg font-bold tracking-tight">¿No encontraste tu respuesta?</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                Escribinos y te respondemos dentro de las 48 horas hábiles.
              </p>
              <Button href="/contacto" className="mt-5" fullWidth icon="arrow-right">
                Escribinos
              </Button>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
