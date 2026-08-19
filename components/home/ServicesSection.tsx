import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function ServicesSection() {
  return (
    <Section id="servicios">
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] border border-line bg-white">
          <div className="grid lg:grid-cols-12">
            <div className="border-b border-line p-8 sm:p-10 lg:col-span-5 lg:border-r lg:border-b-0 lg:p-12">
              <Eyebrow>Servicios</Eyebrow>
              <h2 className="mt-6 font-display text-[1.8rem] leading-[1.1] font-bold tracking-tighter sm:text-[2.15rem]">
                ¿Necesitás que <span className="mark-signal">lo hagamos con vos</span>?
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Además de enseñar Marketing Digital, ayudamos a marcas y empresas a diseñar y ejecutar su estrategia
                digital.
              </p>
              <div className="mt-8">
                <Button href="/servicios" size="lg" variant="dark" icon="arrow-right">
                  Conocer nuestros servicios
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid sm:grid-cols-2">
                {services.map((service, index) => (
                  <li
                    key={service.slug}
                    className={`border-line ${index % 2 === 0 ? "sm:border-r" : ""} ${
                      index < services.length - 1 ? "border-b" : ""
                    } ${index >= services.length - 2 ? "sm:border-b-0" : ""}`}
                  >
                    <a
                      href={`/servicios#${service.slug}`}
                      className="group flex h-full items-start gap-4 p-6 transition-colors duration-200 hover:bg-paper-2/70 sm:p-7"
                    >
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-paper-2 text-ink-3 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
                        <Icon name="arrow-up-right" className="size-4" />
                      </span>
                      <span>
                        <span className="block font-display font-semibold tracking-tight">{service.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted">{service.excerpt}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
