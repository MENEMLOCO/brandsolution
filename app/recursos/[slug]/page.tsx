import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resources, getResource } from "@/data/resources";
import { formatPrice } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, resourceSchema } from "@/lib/schema";
import { checkoutHref } from "@/lib/commerce";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CoverVisual } from "@/components/visuals/CoverVisual";
import { ResourceCard } from "@/components/shared/ResourceCard";
import { LeadMagnetForm } from "@/components/shared/LeadMagnetForm";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return buildMetadata({ title: "Recurso no encontrado", description: "", noIndex: true });

  return buildMetadata({
    title: resource.title,
    description: resource.excerpt,
    path: `/recursos/${resource.slug}`,
  });
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const isFree = resource.price === 0;
  const related = resources.filter((r) => r.slug !== resource.slug).slice(0, 3);

  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Recursos", path: "/recursos" },
    { name: resource.title, path: `/recursos/${resource.slug}` },
  ];

  return (
    <>
      <JsonLd data={[resourceSchema(resource), breadcrumbSchema(crumbs)]} />

      <Section className="pb-0" containerClassName="pb-0">
        <Breadcrumbs items={crumbs} />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-line">
                <CoverVisual visual={resource.visual} tone={resource.accent} />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={90}>
              <span className="inline-flex rounded-full bg-paper-2 px-3.5 py-1.5 text-xs font-semibold text-ink-3">
                {resource.category}
              </span>
              <h1 className="mt-5 font-display text-[2rem] leading-[1.08] font-extrabold tracking-tighter sm:text-[2.6rem]">
                {resource.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">{resource.excerpt}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span
                  className={`rounded-full px-4 py-2 font-display text-lg font-bold ${
                    isFree ? "bg-signal-400 text-ink" : "bg-ink text-white"
                  }`}
                >
                  {isFree ? "Gratis" : formatPrice(resource.price)}
                </span>
                <span className="inline-flex items-center gap-2 text-sm text-muted">
                  <Icon name="download" className="size-4" />
                  {resource.format}
                </span>
              </div>

              <div className="mt-8">
                {isFree ? (
                  <div className="rounded-3xl border border-line bg-white p-6 sm:p-7">
                    <p className="font-display text-lg font-bold tracking-tight">Descargalo gratis</p>
                    <p className="mt-1.5 mb-6 text-sm text-muted">Dejanos tus datos y te lo enviamos por email.</p>
                    <LeadMagnetForm resource={resource.title} />
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button href={checkoutHref("recurso", resource.slug)} size="lg" icon="arrow-right">
                      Comprar recurso
                    </Button>
                    <Button href="/contacto" variant="outline" size="lg">
                      Quiero más información
                    </Button>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Qué resuelve</h2>
            <div className="mt-5 flex flex-col gap-4 text-[1.02rem] leading-relaxed text-ink-3">
              {resource.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-line bg-white p-7">
              <h2 className="font-display text-lg font-bold tracking-tight">Qué incluye</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {resource.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-2">
                    <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand-600" strokeWidth={2.4} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Más recursos" title="También te puede servir" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item, index) => (
            <Reveal key={item.slug} delay={index * 90} className="h-full">
              <ResourceCard resource={item} />
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
