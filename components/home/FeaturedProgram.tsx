import { flagshipProgram } from "@/data/programs";
import { formatPrice } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProgram() {
  const program = flagshipProgram;

  return (
    <section id="programa" className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark opacity-50" />
        <div className="absolute -top-32 -right-24 size-[34rem] rounded-full bg-brand-600/35 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 size-[28rem] rounded-full bg-cyan/15 blur-3xl" />
      </div>

      <div className="relative container-bs section-y">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow tone="dark">Programa destacado</Eyebrow>
              <h2 className="mt-6 font-display text-[2rem] leading-[1.08] font-bold tracking-tighter text-white sm:text-4xl lg:text-[3rem]">
                De la estrategia <br className="hidden sm:block" />
                <span className="text-signal-400">a la acción</span>
              </h2>
              <p className="mt-6 font-display text-lg font-semibold text-white/90">{program.title}</p>
              <p className="mt-3 max-w-lg leading-relaxed text-white/65">{program.description[0]}</p>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
                <li className="inline-flex items-center gap-2">
                  <Icon name="clock" className="size-4 text-signal-400" />
                  {program.duration}
                </li>
                <li className="inline-flex items-center gap-2">
                  <Icon name="monitor" className="size-4 text-signal-400" />
                  {program.modality}
                </li>
                <li className="inline-flex items-center gap-2">
                  <Icon name="award" className="size-4 text-signal-400" />
                  Certificado
                </li>
              </ul>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href={`/programas/${program.slug}`} size="lg" variant="signal" icon="arrow-right">
                  Conocer el programa
                </Button>
                <p className="text-sm text-white/55">
                  Desde{" "}
                  <span className="font-display text-lg font-bold text-white">{formatPrice(program.price)}</span>
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <p className="mb-5 text-[0.72rem] font-bold tracking-[0.16em] text-white/40 uppercase">
                10 módulos · recorrido completo
              </p>
              <ol className="grid gap-3 sm:grid-cols-2">
                {program.modules.map((module, index) => (
                  <li
                    key={module.code}
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-signal-400/40 hover:bg-white/[0.08]"
                    style={{ transitionDelay: `${index * 10}ms` }}
                  >
                    <span className="font-display text-sm font-bold text-signal-400 tabular-nums">{module.code}</span>
                    <span>
                      <span className="block font-display font-semibold tracking-tight text-white">{module.title}</span>
                      <span className="mt-1 block text-[0.82rem] leading-relaxed text-white/50">{module.summary}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
