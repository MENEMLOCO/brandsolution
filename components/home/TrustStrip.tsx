import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

const items: { icon: IconName; label: string }[] = [
  { icon: "book", label: "Cursos prácticos" },
  { icon: "list-check", label: "Clases paso a paso" },
  { icon: "download", label: "Plantillas descargables" },
  { icon: "pen", label: "Ejercicios" },
  { icon: "sparkles", label: "IA aplicada" },
  { icon: "award", label: "Certificación" },
];

export function TrustStrip() {
  return (
    <section className="relative bg-ink text-white" aria-label="Qué incluye la formación">
      <div className="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true" />
      <div className="relative container-bs py-10 lg:py-12">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          <p className="max-w-xs font-display text-lg leading-snug font-semibold tracking-tight text-balance lg:text-xl">
            Marketing Digital aplicado a <span className="text-signal-400">proyectos reales</span>.
          </p>

          <ul className="grid flex-1 grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
            {items.map((item) => (
              <li key={item.label} className="flex items-center gap-2.5 lg:flex-col lg:gap-2.5 lg:text-center">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/12 bg-white/5 text-signal-400">
                  <Icon name={item.icon} className="size-4.5" />
                </span>
                <span className="text-[0.8rem] leading-tight font-medium text-white/75">{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
