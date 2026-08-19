import type { Metadata } from "next";
import { site } from "@/data/site";
import { instructors } from "@/data/instructors";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { PlatformMockup } from "@/components/visuals/PlatformMockup";

export const metadata: Metadata = buildMetadata({
  title: "Sobre Brand Solutions",
  description:
    "Brand Solutions es un espacio de Marketing Digital e Inteligencia Artificial: trabajamos con marcas y empresas, y esa experiencia se convierte en cada capacitación.",
  path: "/nosotros",
});

const beliefs: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "target",
    title: "Primero el objetivo",
    text: "Ninguna herramienta sirve si no está claro qué se quiere lograr. Todo empieza por ahí.",
  },
  {
    icon: "wand",
    title: "Enseñamos lo que usamos",
    text: "Si algo no lo probamos antes en un proyecto real, no entra en un curso.",
  },
  {
    icon: "list-check",
    title: "Cada clase deja algo hecho",
    text: "Un plan, un calendario, una campaña o un flujo listo para usar.",
  },
  {
    icon: "bot",
    title: "IA con criterio",
    text: "La usamos para acelerar procesos, nunca para reemplazar las decisiones estratégicas.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Sobre nosotros", path: "/nosotros" },
        ])}
      />

      <PageHeader
        eyebrow="Sobre nosotros"
        title={
          <>
            Marketing Digital explicado desde la <span className="mark-signal">experiencia real</span>
          </>
        }
        lead="Brand Solutions trabaja todos los días desarrollando estrategias, campañas, contenidos, sitios web y acciones digitales para marcas, profesionales y empresas. Esa experiencia se transforma en cada capacitación."
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Sobre nosotros", path: "/nosotros" },
        ]}
      />

      <Section className="pt-0" containerClassName="pt-0">
        <div className="grid overflow-hidden rounded-3xl border border-line bg-white sm:grid-cols-2 lg:grid-cols-4">
          {site.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`border-line p-7 lg:p-8 ${index < site.stats.length - 1 ? "border-b" : ""} ${
                index % 2 === 0 ? "sm:border-r" : ""
              } ${index >= site.stats.length - 2 ? "sm:border-b-0" : ""} lg:border-r lg:border-b-0 lg:last:border-r-0`}
            >
              <p className="font-display text-4xl font-extrabold tracking-tighter lg:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-5 font-display text-[0.95rem] font-semibold tracking-tight">{stat.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{stat.hint}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Qué somos"
              title="Una agencia que enseña lo que hace"
              lead="No somos una academia tradicional ni un canal de tutoriales."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-5 text-[1.02rem] leading-relaxed text-ink-3">
              <p>
                Brand Solutions nació trabajando con marcas: armando estrategias, gestionando campañas, produciendo
                contenidos y desarrollando sitios web. Con el tiempo, muchas de las personas con las que trabajábamos
                empezaron a pedirnos lo mismo: <span className="font-medium text-ink">enseñales a hacerlo</span>.
              </p>
              <p>
                Así aparecieron las capacitaciones. Las armamos con el mismo criterio con el que trabajamos en los
                proyectos: entender el objetivo, elegir las herramientas correctas, ejecutar y medir. Sin teoría suelta
                y sin promesas exageradas.
              </p>
              <p>
                Hoy convivimos en dos frentes. Seguimos haciendo el trabajo para marcas y empresas, y todo lo que
                aprendemos ahí vuelve a las clases. Por eso los contenidos se actualizan seguido: cuando algo cambia en
                un proyecto real, cambia también en el curso.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Cómo pensamos"
          title="Cuatro cosas que sostenemos en cada formación"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {beliefs.map((belief, index) => (
            <Reveal key={belief.title} delay={index * 80} className="h-full">
              <article className="flex h-full gap-5 rounded-3xl border border-line bg-white p-7">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon name={belief.icon} className="size-5.5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight">{belief.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{belief.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="La plataforma"
              title="Todo en un solo lugar"
              lead="Las clases, los materiales, las plantillas y el certificado están dentro de la misma plataforma, disponibles desde cualquier dispositivo."
            />
            <div className="mt-8">
              <Button href="/cursos" size="lg" icon="arrow-right">
                Ver cursos
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <PlatformMockup className="w-full" />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Equipo" title="Quiénes dictan las formaciones" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {instructors.map((instructor, index) => (
            <Reveal key={instructor.id} delay={index * 90} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 sm:p-8">
                <div className="flex items-center gap-4">
                  <span
                    className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-50 font-display font-bold text-brand-700"
                    aria-hidden="true"
                  >
                    {instructor.initials}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight">{instructor.name}</h3>
                    <p className="text-sm text-brand-700">{instructor.role}</p>
                  </div>
                </div>
                <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-ink-3">{instructor.bio}</p>
                <ul className="mt-5 flex flex-col gap-2 border-t border-line pt-5">
                  {instructor.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted">
                      <Icon name="check" className="mt-0.5 size-4 shrink-0 text-signal-600" strokeWidth={2.4} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute top-1/2 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/30 blur-3xl" />
        </div>
        <div className="relative container-bs section-y">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="font-display text-[1.9rem] leading-[1.08] font-bold tracking-tighter text-white sm:text-4xl">
              ¿Empezamos por la formación o por el proyecto?
            </h2>
            <p className="mt-5 leading-relaxed text-white/65">
              Podés capacitarte con nosotros o trabajar con nosotros. Muchas veces, lo mejor es combinar las dos cosas.
            </p>
            <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="/cursos" size="lg" variant="signal" icon="arrow-right">
                Quiero aprender
              </Button>
              <Button href="/servicios" size="lg" variant="outlineLight">
                Conocer los servicios
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
