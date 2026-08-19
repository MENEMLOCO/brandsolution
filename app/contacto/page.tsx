import type { Metadata } from "next";
import { site, whatsappLink } from "@/data/site";
import { courses } from "@/data/courses";
import { programs } from "@/data/programs";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ContactPanel, type ContactRef } from "@/components/shared/ContactPanel";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Escribinos para consultar por un curso, un programa, una capacitación para tu equipo o los servicios de marketing digital de Brand Solutions.",
  path: "/contacto",
});

export default function ContactoPage() {
  const references: ContactRef[] = [
    ...courses.map((course) => ({ slug: course.slug, title: course.title, kind: "curso" as const })),
    ...programs.map((program) => ({ slug: program.slug, title: program.title, kind: "programa" as const })),
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto" },
        ])}
      />

      <PageHeader
        eyebrow="Contacto"
        title={
          <>
            Contanos qué <span className="mark-signal">necesitás resolver</span>
          </>
        }
        lead="Respondemos consultas sobre cursos, programas, capacitaciones para equipos y servicios. Si nos contás en qué estás trabajando, la respuesta va a ser mucho más útil."
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto" },
        ]}
      />

      <Section className="pt-0" containerClassName="pt-0">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-line bg-white p-7 sm:p-9">
              <ContactPanel items={references} />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="flex flex-col gap-5">
              <div className="rounded-3xl border border-line bg-white p-7">
                <h2 className="font-display text-lg font-bold tracking-tight">Otras formas de escribirnos</h2>
                <ul className="mt-5 flex flex-col gap-4 text-sm">
                  <li>
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="group flex items-center gap-3 text-ink-2 transition-colors hover:text-brand-700"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-paper-2 text-ink-3 transition-colors group-hover:bg-brand-50 group-hover:text-brand-700">
                        <Icon name="mail" className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-2">Email</span>
                        <span className="font-medium">{site.contact.email}</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappLink("Hola, quiero hacer una consulta sobre las formaciones de Brand Solutions.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-ink-2 transition-colors hover:text-brand-700"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-paper-2 text-ink-3 transition-colors group-hover:bg-signal-100 group-hover:text-signal-600">
                        <Icon name="whatsapp" className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-muted-2">WhatsApp</span>
                        <span className="font-medium">{site.contact.whatsappDisplay}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-ink-2">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-paper-2 text-ink-3">
                      <Icon name="clock" className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-2">Horario de atención</span>
                      <span className="font-medium">{site.contact.schedule}</span>
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-ink-2">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-paper-2 text-ink-3">
                      <Icon name="pin" className="size-5" />
                    </span>
                    <span>
                      <span className="block text-xs text-muted-2">Dónde estamos</span>
                      <span className="font-medium">
                        {site.contact.city}, {site.contact.country}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl bg-ink p-7 text-white">
                <h2 className="font-display text-lg font-bold tracking-tight">¿Tenés una duda rápida?</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Muchas consultas ya están resueltas en las preguntas frecuentes: formas de pago, acceso, certificados
                  y devoluciones.
                </p>
                <a
                  href="/preguntas-frecuentes"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-400 transition-colors hover:text-signal-300"
                >
                  Ver preguntas frecuentes
                  <Icon name="arrow-right" className="size-4" />
                </a>
              </div>

              <div className="rounded-3xl border border-line bg-paper-2 p-7">
                <p className="text-sm leading-relaxed text-muted">
                  Los datos de contacto de esta página se editan en{" "}
                  <code className="rounded bg-white px-1.5 py-0.5 font-mono text-xs">data/site.ts</code>.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
