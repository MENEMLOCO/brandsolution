import type { Metadata } from "next";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/shared/Prose";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = buildMetadata({
  title: "Términos y condiciones",
  description:
    "Condiciones de uso del sitio, de compra de cursos y recursos digitales, acceso a los contenidos, propiedad intelectual y devoluciones.",
  path: "/terminos-y-condiciones",
});

export default function TerminosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Términos y condiciones", path: "/terminos-y-condiciones" },
        ])}
      />

      <PageHeader
        eyebrow="Legales"
        title="Términos y condiciones"
        lead="Condiciones de uso del sitio y de contratación de las formaciones y recursos de Brand Solutions."
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Términos y condiciones", path: "/terminos-y-condiciones" },
        ]}
      />

      <Section className="pt-0" containerClassName="pt-0">
        <p className="mb-8 flex max-w-3xl items-start gap-2.5 rounded-2xl border border-dashed border-line-2 bg-paper-2/70 p-4 text-sm leading-relaxed text-muted">
          <Icon name="bulb" className="mt-0.5 size-4 shrink-0 text-brand-600" />
          <span>
            Este texto es una base editable. Antes de publicar el sitio, revisalo con un asesor legal para adaptarlo a
            la normativa vigente y a la operatoria real de la empresa.
          </span>
        </p>

        <Prose>
          <h2>1. Aceptación</h2>
          <p>
            El uso de este sitio implica la aceptación de estos términos. Si no estás de acuerdo con alguno de sus
            puntos, te pedimos que no utilices el sitio ni contrates los servicios ofrecidos.
          </p>

          <h2>2. Servicios ofrecidos</h2>
          <p>
            {site.name} ofrece formaciones online, programas, recursos digitales descargables y servicios profesionales
            de marketing digital. Las características, la duración y el precio de cada producto se detallan en su
            página correspondiente.
          </p>

          <h2>3. Inscripción y pago</h2>
          <ul>
            <li>La inscripción se confirma una vez acreditado el pago.</li>
            <li>Los precios se expresan en la moneda indicada en el sitio e incluyen los impuestos aplicables.</li>
            <li>Los medios de pago disponibles se muestran al momento de finalizar la compra.</li>
            <li>Emitimos comprobante por todas las operaciones.</li>
          </ul>

          <h2>4. Acceso a los contenidos</h2>
          <p>
            El acceso a los cursos es personal e intransferible. Salvo indicación en contrario, el acceso no tiene
            fecha de vencimiento e incluye las actualizaciones que publiquemos sobre esa formación. No está permitido
            compartir credenciales de acceso con terceros.
          </p>

          <h2>5. Propiedad intelectual</h2>
          <p>
            Todos los contenidos, materiales, plantillas, textos y elementos gráficos son propiedad de {site.name} o de
            sus respectivos titulares. Se autoriza su uso personal y profesional por parte de quien contrató la
            formación, y no se permite su reproducción, distribución, reventa ni difusión pública sin autorización
            previa por escrito.
          </p>

          <h2>6. Devoluciones</h2>
          <p>
            Si dentro de los 7 días corridos posteriores a la compra considerás que la formación no se ajusta a lo
            ofrecido, podés solicitar la devolución escribiendo a{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>. La devolución se procesa por el mismo
            medio de pago utilizado.
          </p>

          <h2>7. Certificados</h2>
          <p>
            Los certificados emitidos acreditan la participación en la formación y el detalle de los contenidos
            trabajados. No constituyen títulos oficiales ni habilitaciones profesionales.
          </p>

          <h2>8. Modificaciones del contenido</h2>
          <p>
            Podemos actualizar, ampliar o reorganizar los contenidos de una formación para mantenerlos vigentes. Estas
            actualizaciones quedan incluidas para quienes ya hayan comprado el curso.
          </p>

          <h2>9. Responsabilidad</h2>
          <p>
            Los contenidos tienen finalidad formativa. Los resultados de su aplicación dependen de múltiples factores
            propios de cada proyecto, por lo que {site.name} no garantiza resultados comerciales específicos.
          </p>

          <h2>10. Contacto</h2>
          <p>
            Para cualquier consulta sobre estos términos podés escribirnos a{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>
        </Prose>
      </Section>
    </>
  );
}
