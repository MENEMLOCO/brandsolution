import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "@/components/visuals/HeroVisual";

const microcopy = ["Aprendé a tu ritmo", "Aplicalo desde el primer día", "Formación práctica"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -top-40 -left-32 size-[36rem] rounded-full bg-brand-200/45 blur-3xl" />
        <div className="absolute -top-24 right-0 size-[30rem] rounded-full bg-signal-200/45 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
      </div>

      <div className="container-bs pt-12 pb-16 sm:pt-16 lg:pt-20 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6 xl:col-span-5">
            <Reveal>
              <Eyebrow>Marketing Digital + IA</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[2.6rem] leading-[1.04] font-extrabold tracking-tighter text-balance sm:text-[3.4rem] lg:text-[3.75rem]">
                Aprendé <span className="mark-signal">Marketing Digital</span> para hacerlo, aplicarlo y{" "}
                <span className="text-gradient-brand">hacerlo crecer</span>.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                Cursos, programas y herramientas prácticas para aprender estrategia digital, publicidad, contenidos,
                inteligencia artificial y automatización aplicándolos a proyectos reales.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="/cursos" size="lg" icon="arrow-right" className="sm:min-w-48">
                  Ver cursos
                </Button>
                <Button href="/recursos" size="lg" variant="outline" icon="download" iconPosition="start">
                  Explorar recursos
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-ink-3">
                {microcopy.map((item, index) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="font-medium">{item}</span>
                    {index < microcopy.length - 1 ? (
                      <span className="size-1 rounded-full bg-muted-2/70" aria-hidden="true" />
                    ) : null}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={400}>
              <p className="mt-8 flex items-center gap-2 text-sm text-muted">
                <Icon name="users" className="size-4 text-brand-600" />
                ¿No sabés por dónde empezar?{" "}
                <Link
                  href="/#recurso-gratuito"
                  className="font-semibold text-ink underline decoration-signal-400 decoration-2 underline-offset-4 transition-colors hover:text-brand-700"
                >
                  Descargá el material gratuito
                </Link>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 xl:col-span-7">
            <Reveal delay={120} className="relative">
              <HeroVisual className="w-full max-w-2xl lg:max-w-none" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
