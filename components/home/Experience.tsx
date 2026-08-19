import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <Section id="experiencia">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow>Experiencia</Eyebrow>
            <h2 className="mt-6 font-display text-[1.9rem] leading-[1.1] font-bold tracking-tighter sm:text-4xl lg:text-[2.6rem]">
              Marketing Digital explicado desde la <span className="mark-signal">experiencia real</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={100}>
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted">
              <p>
                Brand Solutions trabaja todos los días desarrollando estrategias, campañas, contenidos, sitios web y
                acciones digitales para marcas, profesionales y empresas. Esa experiencia se transforma en cada
                capacitación.
              </p>
              <p className="font-medium text-ink">
                No enseñamos Marketing Digital solamente desde la teoría. Enseñamos lo que usamos, probamos y aplicamos.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/nosotros" variant="outline" icon="arrow-right">
                Conocer Brand Solutions
              </Button>
              <Button href="/servicios" variant="ghost" icon="arrow-up-right">
                Ver servicios
              </Button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mt-14 grid overflow-hidden rounded-3xl border border-line bg-white sm:grid-cols-2 lg:grid-cols-4">
        {site.stats.map((stat, index) => (
          <Reveal
            key={stat.label}
            delay={index * 80}
            className={cn(
              "border-line",
              index < site.stats.length - 1 && "border-b sm:border-b",
              index % 2 === 0 && "sm:border-r",
              index >= site.stats.length - 2 && "sm:border-b-0",
              "lg:border-r lg:border-b-0 lg:last:border-r-0",
            )}
          >
            <div className="flex h-full flex-col justify-between gap-6 bg-white p-7 lg:p-8">
              <p className="font-display text-4xl font-extrabold tracking-tighter text-ink lg:text-5xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <div>
                <p className="font-display text-[0.95rem] font-semibold tracking-tight">{stat.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted">{stat.hint}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-5 flex items-center gap-2 text-xs text-muted-2">
          <Icon name="refresh" className="size-3.5" />
          Los indicadores se editan desde <code className="rounded bg-paper-2 px-1.5 py-0.5 font-mono">data/site.ts</code>.
        </p>
      </Reveal>
    </Section>
  );
}
