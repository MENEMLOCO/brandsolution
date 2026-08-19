import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function Newsletter() {
  return (
    <section id="newsletter" className="bg-paper-2">
      <div className="container-bs section-y-sm">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 bg-grid-dark opacity-40" />
              <div className="absolute -top-24 -right-16 size-80 rounded-full bg-signal-500/15 blur-3xl" />
            </div>

            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <span className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.14em] text-signal-400 uppercase">
                  <Icon name="mail" className="size-3.5" />
                  Newsletter
                </span>
                <h2 className="mt-4 font-display text-[1.75rem] leading-[1.12] font-bold tracking-tighter text-white sm:text-[2.1rem]">
                  Una idea de Marketing que puedas usar.
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-white/60">
                  Estrategias, herramientas, IA, tendencias y recursos para aplicar a tus proyectos.
                </p>
              </div>

              <div className="lg:col-span-6">
                <NewsletterForm tone="dark" cta="Sumarme" />
                <p className="mt-4 text-xs text-white/45">Sin spam. Solo contenido que valga la pena abrir.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
