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
  title: "Política de privacidad",
  description:
    "Cómo tratamos los datos personales que nos dejás en los formularios del sitio: qué recolectamos, para qué los usamos y cómo ejercer tus derechos.",
  path: "/politica-de-privacidad",
});

export default function PrivacidadPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Política de privacidad", path: "/politica-de-privacidad" },
        ])}
      />

      <PageHeader
        eyebrow="Legales"
        title="Política de privacidad"
        lead="Qué datos recolectamos, con qué finalidad los usamos y cómo podés pedirnos que los modifiquemos o eliminemos."
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Política de privacidad", path: "/politica-de-privacidad" },
        ]}
      />

      <Section className="pt-0" containerClassName="pt-0">
        <p className="mb-8 flex max-w-3xl items-start gap-2.5 rounded-2xl border border-dashed border-line-2 bg-paper-2/70 p-4 text-sm leading-relaxed text-muted">
          <Icon name="bulb" className="mt-0.5 size-4 shrink-0 text-brand-600" />
          <span>
            Este texto es una base editable. Ajustalo a las herramientas que uses realmente (analítica, email marketing,
            plataforma de pagos) y revisalo con un asesor legal antes de publicar.
          </span>
        </p>

        <Prose>
          <h2>1. Responsable del tratamiento</h2>
          <p>
            {site.name}, con domicilio en {site.contact.city}, {site.contact.country}, es responsable del tratamiento de
            los datos personales recolectados a través de este sitio. Podés contactarnos en{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>.
          </p>

          <h2>2. Qué datos recolectamos</h2>
          <ul>
            <li>
              <strong>Datos de contacto:</strong> nombre, email y, opcionalmente, teléfono, cuando completás un
              formulario del sitio.
            </li>
            <li>
              <strong>Datos de la consulta:</strong> el mensaje que nos escribís y el tema seleccionado.
            </li>
            <li>
              <strong>Datos de compra:</strong> los necesarios para procesar la inscripción y emitir el comprobante.
            </li>
            <li>
              <strong>Datos de navegación:</strong> información técnica anónima o agregada sobre el uso del sitio.
            </li>
          </ul>

          <h2>3. Para qué los usamos</h2>
          <ul>
            <li>Responder consultas y brindar soporte.</li>
            <li>Entregar los materiales y accesos que solicitaste.</li>
            <li>Enviarte novedades y contenidos, siempre que lo hayas aceptado.</li>
            <li>Gestionar la inscripción, el pago y la facturación.</li>
            <li>Mejorar el sitio y los contenidos a partir de información agregada.</li>
          </ul>

          <h2>4. Comunicaciones comerciales</h2>
          <p>
            Solo enviamos comunicaciones comerciales a quienes lo aceptaron expresamente. Cada email incluye un enlace
            de baja y podés dejar de recibirlos en cualquier momento, sin que eso afecte tu acceso a los cursos ya
            adquiridos.
          </p>

          <h2>5. Con quién compartimos los datos</h2>
          <p>
            No vendemos ni cedemos datos personales. Compartimos únicamente lo necesario con los proveedores que nos
            permiten operar: plataforma de email marketing, procesador de pagos, servicio de hosting y herramientas de
            analítica. Cada uno trata los datos según sus propias políticas.
          </p>

          <h2>6. Conservación</h2>
          <p>
            Conservamos los datos mientras exista una relación con vos o mientras sea necesario para cumplir
            obligaciones legales y fiscales. Después de ese plazo, los eliminamos o anonimizamos.
          </p>

          <h2>7. Tus derechos</h2>
          <p>
            Podés solicitar el acceso, la rectificación, la actualización o la supresión de tus datos escribiéndonos a{" "}
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>. Vamos a responder tu pedido dentro de los
            plazos que fija la normativa aplicable.
          </p>

          <h2>8. Cookies</h2>
          <p>
            Utilizamos cookies técnicas necesarias para el funcionamiento del sitio y, si están activas, cookies de
            analítica para entender de forma agregada cómo se navega. Podés bloquearlas desde la configuración de tu
            navegador.
          </p>

          <h2>9. Seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger la información. Ningún sistema es
            infalible, pero trabajamos para minimizar los riesgos y actuar rápido ante cualquier incidente.
          </p>

          <h2>10. Cambios en esta política</h2>
          <p>
            Si modificamos esta política, vamos a publicar la versión actualizada en esta misma página. Te recomendamos
            revisarla cada tanto.
          </p>
        </Prose>
      </Section>
    </>
  );
}
