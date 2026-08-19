import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { LeadMagnetForm } from "@/components/shared/LeadMagnetForm";

const bullets = [
  "Investigar tu mercado y tu competencia",
  "Planificar contenido para un mes completo",
  "Escribir anuncios y textos de venta",
  "Analizar resultados y detectar oportunidades",
];

export function LeadMagnet() {
  return (
    <section id="recurso-gratuito" className="relative overflow-hidden bg-brand-700 text-white">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-dark opacity-40" />
        <div className="absolute -top-32 left-1/3 size-[30rem] rounded-full bg-brand-400/30 blur-3xl" />
        <div className="absolute -right-20 -bottom-32 size-[26rem] rounded-full bg-signal-400/20 blur-3xl" />
      </div>

      <div className="relative container-bs section-y">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-signal-400 px-3.5 py-1.5 text-[0.7rem] font-bold tracking-[0.14em] text-ink uppercase">
                <Icon name="download" className="size-3.5" />
                Empezá por acá
              </span>

              <h2 className="mt-6 font-display text-[1.9rem] leading-[1.08] font-bold tracking-tighter text-white sm:text-4xl lg:text-[2.85rem]">
                Descargá gratis:
                <br />
                <span className="text-signal-400">30 prompts de IA</span> para Marketing Digital
              </h2>

              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
                Ideas listas para investigar, planificar contenido, escribir anuncios, analizar competidores y organizar
                tu estrategia.
              </p>

              <ul className="mt-8 flex flex-col gap-3">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-[0.95rem] text-white/80">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/12 text-signal-400">
                      <Icon name="check" className="size-3.5" strokeWidth={2.6} />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pl-8">
            <Reveal delay={140}>
              <div className="rounded-3xl bg-paper p-7 text-ink shadow-lift sm:p-9">
                <p className="font-display text-lg font-bold tracking-tight">Completá y te lo enviamos</p>
                <p className="mt-1.5 mb-6 text-sm text-muted">
                  Te llega por email en menos de dos minutos.
                </p>
                <LeadMagnetForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
