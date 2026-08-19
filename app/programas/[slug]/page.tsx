import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { programs, getProgram } from "@/data/programs";
import { getInstructor } from "@/data/instructors";
import { formatPrice } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, programSchema } from "@/lib/schema";
import { checkoutHref } from "@/lib/commerce";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { StickyEnroll } from "@/components/course/StickyEnroll";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return buildMetadata({ title: "Programa no encontrado", description: "", noIndex: true });

  return buildMetadata({
    title: program.title,
    description: program.promise,
    path: `/programas/${program.slug}`,
  });
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const instructor = getInstructor(program.instructor);
  const isQuote = program.price === 0;
  const buyHref = isQuote ? "/contacto?programa=" + program.slug : checkoutHref("programa", program.slug);

  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Programas", path: "/programas" },
    { name: program.title, path: `/programas/${program.slug}` },
  ];

  return (
    <>
      <JsonLd data={[programSchema(program), faqSchema(program.faqs), breadcrumbSchema(crumbs)]} />

      <section className="relative overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute -top-40 left-1/3 size-[34rem] rounded-full bg-brand-600/30 blur-3xl" />
        </div>

        <div className="relative container-bs pt-8 pb-14 lg:pt-10 lg:pb-20">
          <Breadcrumbs items={crumbs} tone="dark" />

          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="inline-flex rounded-full bg-signal-400 px-3.5 py-1.5 text-xs font-semibold text-ink">
                {program.kicker}
              </span>
              <h1 className="mt-5 font-display text-[2.1rem] leading-[1.06] font-extrabold tracking-tighter text-white sm:text-[2.9rem] lg:text-[3.1rem]">
                {program.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">{program.promise}</p>

              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                {[
                  { icon: "clock" as const, label: "Duración", value: program.duration },
                  { icon: "layers" as const, label: "Módulos", value: `${program.modules.length} módulos` },
                  { icon: "monitor" as const, label: "Modalidad", value: program.modality },
                  { icon: "gauge" as const, label: "Nivel", value: program.level },
                ].map((item) => (
                  <div key={item.label}>
                    <dt className="flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-white/40 uppercase">
                      <Icon name={item.icon} className="size-3.5" />
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-white">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/12 bg-white p-7 text-ink shadow-lift lg:sticky lg:top-24">
                <p className="text-xs font-medium text-muted-2">{isQuote ? "Modalidad" : "Inversión"}</p>
                {isQuote ? (
                  <p className="mt-1 font-display text-2xl font-extrabold tracking-tighter">Presupuesto a medida</p>
                ) : (
                  <p className="mt-1 flex flex-wrap items-baseline gap-3">
                    <span className="font-display text-3xl font-extrabold tracking-tighter">
                      {formatPrice(program.price)}
                    </span>
                    {program.compareAtPrice ? (
                      <span className="text-base text-muted-2 line-through">
                        {formatPrice(program.compareAtPrice)}
                      </span>
                    ) : null}
                  </p>
                )}

                <div className="mt-6 flex flex-col gap-3">
                  <Button href={buyHref} size="lg" fullWidth icon="arrow-right">
                    {isQuote ? "Pedir una propuesta" : "Inscribirme al programa"}
                  </Button>
                  <Button href="/contacto" variant="outline" size="lg" fullWidth>
                    Quiero más información
                  </Button>
                </div>

                <ul className="mt-7 flex flex-col gap-3 border-t border-line pt-6">
                  {program.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-2">
                      <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand-600" strokeWidth={2.4} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-16 lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Sobre el programa</h2>
              <div className="mt-5 flex flex-col gap-4 text-[1.02rem] leading-relaxed text-ink-3">
                {program.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Recorrido completo</h2>
              <ol className="mt-6 flex flex-col gap-3">
                {program.modules.map((module) => (
                  <li
                    key={module.code}
                    className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-line-2"
                  >
                    <span className="font-display text-sm font-bold text-brand-600 tabular-nums">{module.code}</span>
                    <span>
                      <span className="block font-display font-semibold tracking-tight">{module.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">{module.summary}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Con qué te vas a ir</h2>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {program.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-2">
                    <span className="mt-0.5 grid size-5.5 shrink-0 place-items-center rounded-full bg-signal-100 text-signal-600">
                      <Icon name="check" className="size-3.5" strokeWidth={2.8} />
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Para quién es</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {program.audience.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 text-[0.95rem] leading-relaxed text-ink-2"
                  >
                    <Icon name="users" className="mt-0.5 size-4.5 shrink-0 text-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Preguntas frecuentes</h2>
              <Accordion
                className="mt-6"
                defaultOpen={null}
                allowMultiple
                items={program.faqs.map((faq) => ({ title: faq.q, content: <p>{faq.a}</p> }))}
              />
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <div className="flex flex-col gap-6 lg:sticky lg:top-24">
              <div className="rounded-3xl border border-line bg-white p-7">
                <h2 className="font-display text-lg font-bold tracking-tight">Quién lo dicta</h2>
                <div className="mt-5 flex gap-4">
                  <span
                    className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-50 font-display font-bold text-brand-700"
                    aria-hidden="true"
                  >
                    {instructor.initials}
                  </span>
                  <div>
                    <p className="font-display font-bold tracking-tight">{instructor.name}</p>
                    <p className="text-sm text-brand-700">{instructor.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-3">{instructor.bio}</p>
              </div>

              <div className="rounded-3xl bg-ink p-7 text-white">
                <h2 className="font-display text-lg font-bold tracking-tight">¿Preferís empezar de a poco?</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Podés arrancar por un curso puntual y después sumar el programa completo: lo que ya hiciste se
                  descuenta del valor final.
                </p>
                <Button href="/cursos" variant="signal" className="mt-5" icon="arrow-right">
                  Ver cursos
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <StickyEnroll
        title={program.title}
        price={program.price}
        href={buyHref}
        label={isQuote ? "Pedir propuesta" : "Inscribirme"}
      />
    </>
  );
}
