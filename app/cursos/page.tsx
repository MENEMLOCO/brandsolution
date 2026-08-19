import type { Metadata } from "next";
import { courses, courseCategories } from "@/data/courses";
import { generalFaqs } from "@/data/faqs";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { CourseCatalog } from "@/components/course/CourseCatalog";
import { CertificateMockup } from "@/components/visuals/CertificateMockup";

export const metadata: Metadata = buildMetadata({
  title: "Cursos de Marketing Digital e Inteligencia Artificial",
  description:
    "Cursos online de estrategia digital, community management, Meta Ads, Google Ads, Inteligencia Artificial y email marketing. Clases grabadas, plantillas descargables y certificado.",
  path: "/cursos",
});

const highlights = [
  { icon: "monitor" as const, title: "100% online", text: "Clases grabadas para ver cuando puedas." },
  { icon: "infinity" as const, title: "Acceso sin vencimiento", text: "Incluye las actualizaciones futuras." },
  { icon: "download" as const, title: "Material descargable", text: "Plantillas y recursos listos para usar." },
  { icon: "award" as const, title: "Certificado", text: "Al completar cada formación." },
];

export default function CursosPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Cursos", path: "/cursos" },
          ]),
          itemListSchema(
            "Cursos de Brand Solutions",
            courses.map((course) => `/cursos/${course.slug}`),
          ),
          faqSchema(generalFaqs.slice(0, 6)),
        ]}
      />

      <PageHeader
        eyebrow="Cursos"
        title={
          <>
            Formaciones para <span className="mark-signal">aplicar desde el primer día</span>
          </>
        }
        lead="Cada curso resuelve una parte concreta del trabajo digital: estrategia, contenidos, publicidad, inteligencia artificial y automatización. Elegí por dónde empezar."
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Cursos", path: "/cursos" },
        ]}
      />

      <section className="border-y border-line bg-paper-2">
        <div className="container-bs py-8">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white text-brand-700">
                  <Icon name={item.icon} className="size-4.5" />
                </span>
                <span>
                  <span className="block font-display text-sm font-semibold tracking-tight">{item.title}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Section id="cursos">
        <CourseCatalog courses={courses} categories={courseCategories} />
      </Section>

      <Section id="certificacion" tone="muted">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                eyebrow="Certificación"
                title={
                  <>
                    Un certificado por cada <span className="mark-signal">formación completada</span>
                  </>
                }
                lead="Al terminar el curso vas a poder descargar un certificado de participación con el detalle de los contenidos y la carga horaria."
              />
              <div className="mt-8">
                <Button href="#cursos" variant="dark" size="lg" icon="arrow-right">
                  Elegir un curso
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <CertificateMockup className="w-full" />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Antes de inscribirte"
              lead="Si tenés alguna duda que no está acá, escribinos y te respondemos."
            />
            <div className="mt-8">
              <Button href="/contacto" variant="outline" icon="arrow-right">
                Quiero más información
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Accordion
              items={generalFaqs.slice(0, 6).map((faq) => ({ title: faq.q, content: <p>{faq.a}</p> }))}
              defaultOpen={null}
              allowMultiple
            />
          </div>
        </div>
      </Section>
    </>
  );
}
