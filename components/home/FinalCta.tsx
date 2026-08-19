import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="absolute top-1/2 left-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/35 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 size-[24rem] rounded-full bg-signal-500/15 blur-3xl" />
      </div>

      <div className="relative container-bs section-y">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="font-display text-[2.1rem] leading-[1.06] font-extrabold tracking-tighter text-white text-balance sm:text-5xl lg:text-[3.4rem]">
            El Marketing cambia <span className="text-signal-400">todo el tiempo</span>.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            La mejor forma de seguir creciendo es seguir aprendiendo.
          </p>
          <p className="mt-3 font-display text-lg font-semibold text-white">Elegí por dónde empezar.</p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="/cursos" size="lg" variant="signal" icon="arrow-right" className="sm:min-w-52">
              Ver cursos
            </Button>
            <Button href="/recursos?filtro=gratis" size="lg" variant="outlineLight" icon="download" iconPosition="start">
              Ver recursos gratuitos
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
