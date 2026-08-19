import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/data/programs";
import { formatPrice } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = buildMetadata({
  title: "Programas de formación en Marketing Digital",
  description:
    "Recorridos completos de formación: el Programa Integral de Marketing Digital y capacitaciones a medida para equipos. Estrategia, campañas, IA y medición.",
  path: "/programas",
});

export default function ProgramasPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Programas", path: "/programas" },
          ]),
          itemListSchema(
            "Programas de Brand Solutions",
            programs.map((program) => `/programas/${program.slug}`),
          ),
        ]}
      />

      <PageHeader
        eyebrow="Programas"
        title={
          <>
            Recorridos completos para <span className="mark-signal">construir una estrategia</span>
          </>
        }
        lead="Cuando lo que necesitás no es una herramienta suelta sino un sistema completo de trabajo, un programa integra todas las piezas y las ordena en una secuencia."
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Programas", path: "/programas" },
        ]}
      />

      <Section>
        <div className="flex flex-col gap-8">
          {programs.map((program, index) => (
            <Reveal key={program.slug} delay={index * 100}>
              <article className="group overflow-hidden rounded-[2rem] border border-line bg-white transition-shadow duration-300 hover:shadow-lift">
                <div className="grid lg:grid-cols-12">
                  <div className="border-b border-line p-8 sm:p-10 lg:col-span-7 lg:border-r lg:border-b-0 lg:p-12">
                    <span className="inline-flex rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
                      {program.kicker}
                    </span>
                    <h2 className="mt-5 font-display text-2xl leading-tight font-bold tracking-tight sm:text-3xl">
                      <Link href={`/programas/${program.slug}`} className="transition-colors hover:text-brand-700">
                        {program.title}
                      </Link>
                    </h2>
                    <p className="mt-4 max-w-xl leading-relaxed text-muted">{program.excerpt}</p>

                    <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-3">
                      <li className="inline-flex items-center gap-2">
                        <Icon name="clock" className="size-4 text-muted-2" />
                        {program.duration}
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <Icon name="monitor" className="size-4 text-muted-2" />
                        {program.modality}
                      </li>
                      <li className="inline-flex items-center gap-2">
                        <Icon name="layers" className="size-4 text-muted-2" />
                        {program.modules.length} módulos
                      </li>
                    </ul>

                    <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                      <Button href={`/programas/${program.slug}`} size="lg" icon="arrow-right">
                        Conocer el programa
                      </Button>
                      <p className="text-sm text-muted">
                        {program.price > 0 ? (
                          <>
                            Desde{" "}
                            <span className="font-display text-lg font-bold text-ink">
                              {formatPrice(program.price)}
                            </span>
                          </>
                        ) : (
                          "Presupuesto a medida"
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="bg-paper-2 p-8 sm:p-10 lg:col-span-5 lg:p-10">
                    <p className="text-[0.7rem] font-bold tracking-[0.16em] text-muted-2 uppercase">Módulos</p>
                    <ol className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                      {program.modules.slice(0, 6).map((module) => (
                        <li key={module.code} className="flex items-center gap-3 text-sm">
                          <span className="font-display text-xs font-bold text-brand-600 tabular-nums">
                            {module.code}
                          </span>
                          <span className="font-medium text-ink-2">{module.title}</span>
                        </li>
                      ))}
                    </ol>
                    {program.modules.length > 6 ? (
                      <p className="mt-4 text-sm text-muted">
                        + {program.modules.length - 6} módulos más
                      </p>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          align="center"
          eyebrow="¿No sabés cuál elegir?"
          title="Te ayudamos a decidir"
          lead="Contanos en qué momento está tu proyecto y te recomendamos el recorrido más corto para llegar a lo que necesitás."
        />
        <div className="mt-8 flex justify-center">
          <Button href="/contacto" size="lg" icon="arrow-right">
            Quiero más información
          </Button>
        </div>
      </Section>
    </>
  );
}
