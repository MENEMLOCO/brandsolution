import type { Metadata } from "next";
import { resources } from "@/data/resources";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { ResourceCatalog } from "@/components/shared/ResourceCatalog";
import { LeadMagnet } from "@/components/home/LeadMagnet";

export const metadata: Metadata = buildMetadata({
  title: "Recursos y plantillas de Marketing Digital",
  description:
    "Plantillas, calendarios, checklists y bancos de prompts para organizar tu estrategia digital. Recursos gratuitos y descargables listos para usar.",
  path: "/recursos",
});

export default function RecursosPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Recursos", path: "/recursos" },
          ]),
          itemListSchema(
            "Recursos digitales de Brand Solutions",
            resources.map((resource) => `/recursos/${resource.slug}`),
          ),
        ]}
      />

      <PageHeader
        eyebrow="Recursos digitales"
        title={
          <>
            Herramientas para <span className="mark-signal">trabajar mejor</span>
          </>
        }
        lead="Recursos prácticos para ahorrar tiempo y organizar tu estrategia digital. Algunos son gratuitos y otros forman parte de nuestras formaciones."
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Recursos", path: "/recursos" },
        ]}
      />

      <Section>
        <ResourceCatalog resources={resources} />
      </Section>

      <LeadMagnet />
    </>
  );
}
