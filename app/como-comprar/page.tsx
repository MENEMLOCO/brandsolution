import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Prose } from "@/components/shared/Prose";

export const metadata: Metadata = buildMetadata({
  title: "Cómo comprar",
  description:
    "Los pasos para inscribirte en un curso de Brand Solutions: elegir la formación, completar el pago y acceder a las clases.",
  path: "/como-comprar",
});

const steps: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "search",
    title: "1. Elegí la formación",
    text: "Revisá el temario, la duración y para quién está pensado cada curso. Si tenés dudas, escribinos antes de comprar.",
  },
  {
    icon: "bag",
    title: "2. Completá la compra",
    text: "Desde la página del curso vas al checkout, cargás tus datos y elegís el medio de pago que prefieras.",
  },
  {
    icon: "mail",
    title: "3. Recibí el acceso",
    text: "Una vez confirmado el pago te llega un email con los datos para entrar a la plataforma.",
  },
  {
    icon: "play",
    title: "4. Empezá cuando quieras",
    text: "Las clases quedan disponibles sin vencimiento. Avanzá a tu ritmo y descargá los materiales.",
  },
];

export default function ComoComprarPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Cómo comprar", path: "/como-comprar" },
        ])}
      />

      <PageHeader
        eyebrow="Ayuda"
        title="Cómo comprar"
        lead="Cuatro pasos para inscribirte y empezar a cursar."
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Cómo comprar", path: "/como-comprar" },
        ]}
      />

      <Section className="pt-0" containerClassName="pt-0">
        <ol className="grid gap-5 sm:grid-cols-2">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80} className="h-full">
              <li className="flex h-full gap-5 rounded-3xl border border-line bg-white p-7">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon name={step.icon} className="size-5.5" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold tracking-tight">{step.title}</h2>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="muted">
        <Prose>
          <h2>Medios de pago</h2>
          <p>
            Aceptamos tarjeta de crédito y débito, transferencia bancaria y los medios habilitados por la plataforma de
            pago. Las opciones disponibles, junto con las cuotas, se muestran al momento de completar la compra.
          </p>

          <h2>Facturación</h2>
          <p>
            Emitimos comprobante por todas las operaciones. Si necesitás factura a nombre de una empresa, indicalo
            durante la compra o escribinos con los datos fiscales y la emitimos.
          </p>

          <h2>Compras para equipos</h2>
          <p>
            Para inscribir a varias personas de una misma organización tenemos condiciones especiales y una única
            facturación.{" "}
            <a href="/contacto">Escribinos</a> con la cantidad de participantes y te enviamos una propuesta.
          </p>

          <h2>Devoluciones</h2>
          <p>
            Si dentro de los primeros 7 días considerás que el curso no se ajusta a lo que buscabas, escribinos y
            resolvemos la devolución. El detalle está en los{" "}
            <a href="/terminos-y-condiciones">términos y condiciones</a>.
          </p>

          <h2>Problemas con el acceso</h2>
          <p>
            Si pagaste y no recibiste el email de acceso, revisá la carpeta de correo no deseado. Si aún así no aparece,
            escribinos indicando el email con el que hiciste la compra y lo resolvemos.
          </p>
        </Prose>

        <div className="mt-10">
          <Button href="/cursos" size="lg" icon="arrow-right">
            Ver cursos
          </Button>
        </div>
      </Section>
    </>
  );
}
