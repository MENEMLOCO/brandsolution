import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const pillars: { step: string; title: string; text: string; icon: IconName; className: string }[] = [
  {
    step: "01",
    title: "Aprendé",
    text: "Conceptos explicados de manera simple y estratégica.",
    icon: "bulb",
    className: "bg-brand-50 text-brand-700",
  },
  {
    step: "02",
    title: "Aplicá",
    text: "Ejercicios y actividades basados en situaciones reales.",
    icon: "target",
    className: "bg-coral-soft text-coral",
  },
  {
    step: "03",
    title: "Creá",
    text: "Plantillas, estrategias, campañas y materiales concretos.",
    icon: "wand",
    className: "bg-cyan-soft text-cyan",
  },
  {
    step: "04",
    title: "Medí",
    text: "Aprendé a analizar resultados y tomar decisiones.",
    icon: "gauge",
    className: "bg-signal-100 text-signal-600",
  },
];

export function Methodology() {
  return (
    <Section id="metodologia" tone="muted">
      <SectionHeading
        eyebrow="Metodología"
        title={
          <>
            No se trata solamente de aprender.
            <br className="hidden sm:block" /> Se trata de <span className="mark-signal">poder hacerlo</span>.
          </>
        }
        lead="Nuestros cursos están pensados para que cada concepto se transforme en una acción concreta. Trabajamos con ejemplos, herramientas, ejercicios, plantillas y casos reales para que puedas aplicar lo aprendido desde el primer día."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <Reveal key={pillar.title} delay={index * 90} className="h-full">
            <article className="group relative flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
              <span className="absolute top-6 right-7 font-display text-sm font-bold text-line-2 tabular-nums transition-colors group-hover:text-brand-200">
                {pillar.step}
              </span>
              <span className={`grid size-12 place-items-center rounded-2xl ${pillar.className}`}>
                <Icon name={pillar.icon} className="size-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{pillar.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{pillar.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <div className="mt-12 flex flex-col items-start gap-4 rounded-3xl border border-line bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <p className="max-w-xl text-[0.95rem] leading-relaxed text-ink-3">
            Cada curso termina con algo hecho: un plan, un calendario, una campaña o un flujo listo para usar.
          </p>
          <Button href="/nosotros" variant="outline" icon="arrow-right">
            Cómo trabajamos
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
