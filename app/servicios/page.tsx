import type { Metadata } from "next";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { accent as accentMap } from "@/lib/accents";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CoverVisual } from "@/components/visuals/CoverVisual";

export const metadata: Metadata = buildMetadata({
  title: "Servicios de Marketing Digital para marcas y empresas",
  description:
    "Estrategia digital, redes sociales, Meta Ads, Google Ads, sitios web y ecommerce, email marketing, SEO/SEM y capacitaciones para equipos.",
  path: "/servicios",
});

const steps = [
  { step: "01", title: "Diagnóstico", text: "Entendemos el negocio, el mercado y lo que ya se hizo antes." },
  { step: "02", title: "Estrategia", text: "Definimos objetivos, prioridades y cómo se van a medir." },
  { step: "03", title: "Ejecución", text: "Producimos, publicamos y gestionamos la inversión." },
  { step: "04", title: "Medición", text: "Revisamos resultados y ajustamos el plan cada mes." },
];

export default function ServiciosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
        ])}
      />

      <PageHeader
        eyebrow="Servicios"
        title={
          <>
            Estrategia digital <span className="mark-signal">ejecutada, no solo planificada</span>
          </>
        }
        lead="Además de enseñar Marketing Digital, trabajamos con marcas, profesionales y equipos para diseñar y ejecutar su estrategia. Esa práctica es la que después se convierte en cada curso."
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
        ]}
        actions={
          <>
            <Button href="/contacto" size="lg" icon="arrow-right">
              Quiero más información
            </Button>
            <Button href="/cursos" variant="outline" size="lg">
              Ver cursos
            </Button>
          </>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Servicios"
          lead="Podés contratar un servicio puntual o una gestión integral. En los dos casos trabajamos con objetivos definidos y reportes mensuales."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const a = accentMap[service.accent];
            return (
              <Reveal key={service.slug} delay={(index % 3) * 80} className="h-full">
                <article
                  id={service.slug}
                  className="group flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className="aspect-[16/10] border-b border-line">
                    <CoverVisual visual={service.visual} tone={service.accent} decorative />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-bold tracking-tight">{service.title}</h3>
                    <p className="mt-2.5 flex-1 text-[0.925rem] leading-relaxed text-muted">{service.excerpt}</p>
                    <ul className="mt-5 flex flex-col gap-2 border-t border-line pt-5">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink-2">
                          <span className={`mt-1.5 size-1.5 shrink-0 rounded-full ${a.dot}`} aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Cómo trabajamos" title="Un proceso simple y revisable" />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <Reveal key={item.step} delay={index * 90} className="h-full">
              <li className="flex h-full flex-col rounded-3xl border border-line bg-white p-7">
                <span className="font-display text-sm font-bold text-brand-600 tabular-nums">{item.step}</span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-[0.925rem] leading-relaxed text-muted">{item.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <section id="capacitaciones" className="relative scroll-mt-28 overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute -top-32 right-1/4 size-[30rem] rounded-full bg-brand-600/30 blur-3xl" />
        </div>
        <div className="relative container-bs section-y">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="inline-flex rounded-full bg-signal-400 px-3.5 py-1.5 text-xs font-semibold text-ink">
                  In company
                </span>
                <h2 className="mt-6 font-display text-[1.9rem] leading-[1.1] font-bold tracking-tighter text-white sm:text-4xl">
                  Capacitaciones para equipos
                </h2>
                <p className="mt-5 max-w-lg leading-relaxed text-white/65">
                  Diseñamos el programa después de relevar cómo trabaja hoy tu equipo. La formación se dicta sobre los
                  casos y materiales de la propia empresa, así lo aprendido se aplica durante la cursada.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/programas/programa-marketing-con-ia" size="lg" variant="signal" icon="arrow-right">
                    Conocer el programa
                  </Button>
                  <Button href="/contacto" size="lg" variant="outlineLight">
                    Pedir una propuesta
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={120}>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: "search" as const, title: "Diagnóstico previo", text: "Relevamos procesos y detectamos oportunidades." },
                    { icon: "book" as const, title: "Programa a medida", text: "Contenidos armados sobre tus casos reales." },
                    { icon: "workflow" as const, title: "Manual interno", text: "Criterios y flujos documentados para el equipo." },
                    { icon: "refresh" as const, title: "Seguimiento", text: "Revisión de adopción a los 30 y 60 días." },
                  ].map((item) => (
                    <li key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                      <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-signal-400">
                        <Icon name={item.icon} className="size-5" />
                      </span>
                      <h3 className="mt-4 font-display font-semibold tracking-tight text-white">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/55">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="flex flex-col items-start gap-6 rounded-[2rem] border border-line bg-white p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div>
            <h2 className="font-display text-2xl leading-tight font-bold tracking-tight sm:text-3xl">
              Contanos qué necesitás
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">
              Escribinos y coordinamos una primera charla sin costo para entender el proyecto y proponerte un camino.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contacto" size="lg" icon="arrow-right">
              Quiero más información
            </Button>
            <Button href={`mailto:${site.contact.email}`} variant="outline" size="lg" icon="mail" iconPosition="start">
              Escribir un email
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
