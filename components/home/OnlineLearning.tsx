import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PlatformMockup } from "@/components/visuals/PlatformMockup";

const features = [
  "Clases grabadas",
  "Material complementario",
  "Plantillas",
  "Ejercicios prácticos",
  "Recursos descargables",
  "Actualizaciones",
  "Certificado",
];

export function OnlineLearning() {
  return (
    <section id="formacion-online" className="relative overflow-hidden bg-paper">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -right-40 size-[32rem] rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <div className="relative container-bs section-y">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Formación 100% online</Eyebrow>
              <h2 className="mt-6 font-display text-[1.9rem] leading-[1.1] font-bold tracking-tighter sm:text-4xl lg:text-[2.75rem]">
                Aprendé cuando quieras. <span className="text-gradient-brand">Aplicalo cuando lo necesites.</span>
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
                Accedé a las clases desde cualquier dispositivo y avanzá a tu ritmo.
              </p>

              <ul className="mt-8 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[0.95rem] text-ink-2">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-signal-100 text-signal-600">
                      <Icon name="check" className="size-3.5" strokeWidth={2.6} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href="/cursos" size="lg" icon="arrow-right">
                  Explorar cursos
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={140}>
              <PlatformMockup className="w-full" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
