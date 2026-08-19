import { Button } from "@/components/ui/Button";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CertificateMockup } from "@/components/visuals/CertificateMockup";

const details = [
  { title: "Nombre del curso", text: "Con el detalle de los contenidos trabajados." },
  { title: "Carga horaria", text: "Las horas de formación completadas." },
  { title: "Descarga inmediata", text: "Disponible al finalizar la última clase." },
];

export function Certification() {
  return (
    <Section id="certificacion" tone="muted">
      <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <Reveal>
            <CertificateMockup className="w-full max-w-xl" />
          </Reveal>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-6">
          <Reveal delay={80}>
            <Eyebrow>Certificación</Eyebrow>
            <h2 className="mt-6 font-display text-[1.9rem] leading-[1.1] font-bold tracking-tighter sm:text-4xl lg:text-[2.75rem]">
              Certificá <span className="mark-signal">lo que aprendés</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
              Al completar cada formación podrás acceder a un certificado de participación que reconoce las herramientas
              y conocimientos incorporados durante el curso.
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              {details.map((detail) => (
                <li key={detail.title} className="flex gap-4">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name="check" className="size-4" strokeWidth={2.4} />
                  </span>
                  <span>
                    <span className="block font-display font-semibold tracking-tight">{detail.title}</span>
                    <span className="mt-0.5 block text-sm text-muted">{detail.text}</span>
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/cursos" size="lg" icon="award" iconPosition="start">
                Ver cursos certificados
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
