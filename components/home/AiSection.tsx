import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const uses: { title: string; text: string; icon: IconName }[] = [
  { title: "Investigación", text: "Buyer Persona, competencia y tendencias.", icon: "search" },
  { title: "Estrategia", text: "Planes, campañas y propuestas de valor.", icon: "compass" },
  { title: "Contenido", text: "Ideas, copys, guiones y calendarios.", icon: "pen" },
  { title: "Publicidad", text: "Análisis y optimización de campañas.", icon: "megaphone" },
  { title: "Automatización", text: "Procesos y recorridos de clientes.", icon: "workflow" },
  { title: "Analítica", text: "Interpretación de datos e informes.", icon: "chart-line" },
];

export function AiSection() {
  return (
    <section id="inteligencia-artificial" className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="absolute top-0 left-1/4 size-[36rem] -translate-y-1/2 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute right-0 bottom-0 size-[26rem] translate-y-1/3 rounded-full bg-signal-500/12 blur-3xl" />
      </div>

      <div className="relative container-bs section-y">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="dark">Inteligencia Artificial</Eyebrow>
          <h2 className="mt-6 font-display text-[2rem] leading-[1.08] font-bold tracking-tighter text-white sm:text-4xl lg:text-[3rem]">
            La Inteligencia Artificial <span className="text-signal-400">ya es parte del Marketing</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/65">
            No enseñamos IA como una herramienta aislada. La incorporamos dentro de los procesos reales de Marketing
            Digital para investigar, crear, analizar, automatizar y tomar mejores decisiones.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {uses.map((use, index) => (
            <Reveal key={use.title} delay={(index % 3) * 90} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-signal-400/35 hover:bg-white/[0.07]">
                <span
                  aria-hidden="true"
                  className="absolute -top-16 -right-16 size-40 rounded-full bg-brand-500/0 blur-2xl transition-colors duration-500 group-hover:bg-brand-500/25"
                />
                <span className="relative grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/5 text-signal-400 transition-colors duration-300 group-hover:border-signal-400/40">
                  <Icon name={use.icon} className="size-6" />
                </span>
                <h3 className="relative mt-6 font-display text-xl font-bold tracking-tight text-white">{use.title}</h3>
                <p className="relative mt-2.5 text-[0.95rem] leading-relaxed text-white/60">{use.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-start gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <p className="max-w-xl leading-relaxed text-white/70">
              Todo lo que enseñamos sobre IA lo usamos antes en proyectos reales. Si funciona, entra al curso.
            </p>
            <Button
              href="/cursos/inteligencia-artificial-aplicada-al-marketing"
              size="lg"
              variant="signal"
              icon="arrow-right"
            >
              Aprender Marketing + IA
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
