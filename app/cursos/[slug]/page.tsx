import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, getCourse, getRelatedCourses } from "@/data/courses";
import { getInstructor } from "@/data/instructors";
import { testimonials } from "@/data/testimonials";
import { formatPrice, site } from "@/data/site";
import { accent as accentMap } from "@/lib/accents";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, courseSchema, faqSchema } from "@/lib/schema";
import { checkoutHref } from "@/lib/commerce";
import { formatDate } from "@/lib/utils";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Accordion } from "@/components/ui/Accordion";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Stars } from "@/components/ui/Stars";
import { CoverVisual } from "@/components/visuals/CoverVisual";
import { CertificateMockup } from "@/components/visuals/CertificateMockup";
import { CourseCard } from "@/components/shared/CourseCard";
import { StickyEnroll } from "@/components/course/StickyEnroll";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return buildMetadata({ title: "Curso no encontrado", description: "", noIndex: true });

  return buildMetadata({
    title: `${course.title} · Curso online`,
    description: course.promise,
    path: `/cursos/${course.slug}`,
    image: `/cursos/${course.slug}/opengraph-image`,
    keywords: [course.title, `curso de ${course.category.toLowerCase()}`, "curso online", "Brand Solutions"],
  });
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const instructor = getInstructor(course.instructor);
  const related = getRelatedCourses(course);
  const a = accentMap[course.accent];
  const buyHref = checkoutHref("curso", course.slug);
  const courseTestimonials = testimonials.slice(0, 2);

  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Cursos", path: "/cursos" },
    { name: course.title, path: `/cursos/${course.slug}` },
  ];

  const meta = [
    { icon: "clock" as const, label: "Duración", value: course.duration },
    { icon: "layers" as const, label: "Módulos", value: `${course.modules} módulos` },
    { icon: "monitor" as const, label: "Modalidad", value: course.modality },
    { icon: "gauge" as const, label: "Nivel", value: course.level },
  ];

  return (
    <>
      <JsonLd data={[courseSchema(course), faqSchema(course.faqs), breadcrumbSchema(crumbs)]} />

      {/* ---------- Encabezado ---------- */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-dark opacity-40" />
          <div className="absolute -top-40 right-0 size-[34rem] rounded-full bg-brand-600/30 blur-3xl" />
        </div>

        <div className="relative container-bs pt-8 pb-14 lg:pt-10 lg:pb-20">
          <Breadcrumbs items={crumbs} tone="dark" />

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className={`inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold ${a.solid}`}>
                {course.category}
              </span>

              <h1 className="mt-5 font-display text-[2.1rem] leading-[1.06] font-extrabold tracking-tighter text-white sm:text-[2.9rem] lg:text-[3.1rem]">
                {course.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">{course.promise}</p>

              <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                {meta.map((item) => (
                  <div key={item.label}>
                    <dt className="flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.12em] text-white/40 uppercase">
                      <Icon name={item.icon} className="size-3.5" />
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium text-white">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-8 flex items-center gap-2 text-sm text-white/45">
                <Icon name="refresh" className="size-4" />
                Contenido actualizado el {formatDate(course.updatedAt)}
              </p>
            </div>

            {/* Tarjeta de compra */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-white/12 bg-white text-ink shadow-lift lg:sticky lg:top-24">
                <div className="aspect-[16/10] border-b border-line">
                  <CoverVisual visual={course.visual} tone={course.accent} decorative />
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-xs font-medium text-muted-2">Inversión</p>
                  <p className="mt-1 flex flex-wrap items-baseline gap-3">
                    <span className="font-display text-3xl font-extrabold tracking-tighter">
                      {formatPrice(course.price)}
                    </span>
                    {course.compareAtPrice ? (
                      <span className="text-base text-muted-2 line-through">
                        {formatPrice(course.compareAtPrice)}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-1.5 text-xs text-muted">Pago único · Acceso sin vencimiento</p>

                  <div className="mt-6 flex flex-col gap-3">
                    <Button href={buyHref} size="lg" fullWidth icon="arrow-right">
                      Inscribirme
                    </Button>
                    <Button href="/contacto" variant="outline" size="lg" fullWidth>
                      Quiero más información
                    </Button>
                  </div>

                  <ul className="mt-7 flex flex-col gap-3 border-t border-line pt-6">
                    {course.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ink-2">
                        <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand-600" strokeWidth={2.4} />
                        {item}
                      </li>
                    ))}
                    {course.certificate ? (
                      <li className="flex items-start gap-2.5 text-sm text-ink-2">
                        <Icon name="award" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                        Certificado de participación
                      </li>
                    ) : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Contenido ---------- */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-16 lg:col-span-7">
            {/* Descripción */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Sobre el curso</h2>
              <div className="mt-5 flex flex-col gap-4 text-[1.02rem] leading-relaxed text-ink-3">
                {course.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            {/* Para quién es */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Para quién es este curso
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {course.audience.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 text-[0.95rem] leading-relaxed text-ink-2"
                  >
                    <Icon name="users" className="mt-0.5 size-4.5 shrink-0 text-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Qué vas a aprender */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Qué vas a aprender</h2>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {course.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-2">
                    <span className="mt-0.5 grid size-5.5 shrink-0 place-items-center rounded-full bg-signal-100 text-signal-600">
                      <Icon name="check" className="size-3.5" strokeWidth={2.8} />
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Temario */}
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Temario</h2>
                <p className="text-sm text-muted">
                  {course.modules} módulos · {course.duration}
                </p>
              </div>
              <Accordion
                className="mt-6"
                allowMultiple
                items={course.syllabus.map((module, index) => ({
                  badge: String(index + 1).padStart(2, "0"),
                  title: module.title,
                  subtitle: module.summary,
                  content: (
                    <ul className="flex flex-col gap-2.5">
                      {module.lessons.map((lesson) => (
                        <li key={lesson} className="flex items-start gap-3">
                          <Icon name="play" className="mt-0.5 size-4 shrink-0 text-brand-500" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  ),
                }))}
              />
            </Reveal>

            {/* Herramientas */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Herramientas que vas a usar
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {course.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink-2"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Docente */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Quién dicta el curso</h2>
              <div className="mt-6 flex flex-col gap-5 rounded-3xl border border-line bg-white p-7 sm:flex-row">
                <span
                  className="grid size-16 shrink-0 place-items-center rounded-2xl bg-brand-50 font-display text-lg font-bold text-brand-700"
                  aria-hidden="true"
                >
                  {instructor.initials}
                </span>
                <div>
                  <p className="font-display text-lg font-bold tracking-tight">{instructor.name}</p>
                  <p className="text-sm text-brand-700">{instructor.role}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-3">{instructor.bio}</p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {instructor.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-muted">
                        <Icon name="check" className="mt-0.5 size-4 shrink-0 text-signal-600" strokeWidth={2.4} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            {/* Testimonios */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                Qué dicen quienes lo hicieron
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {courseTestimonials.map((testimonial) => (
                  <figure key={testimonial.id} className="rounded-3xl border border-line bg-white p-6">
                    <Stars rating={testimonial.rating} />
                    <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">
                      {testimonial.quote}
                    </blockquote>
                    <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                      <span className="block font-semibold">{testimonial.name}</span>
                      <span className="block text-xs text-muted">{testimonial.role}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-2">
                Testimonios de ejemplo. Se reemplazan por comentarios reales en{" "}
                <code className="rounded bg-paper-2 px-1.5 py-0.5 font-mono">data/testimonials.ts</code>.
              </p>
            </Reveal>

            {/* Preguntas frecuentes */}
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Preguntas frecuentes</h2>
              <Accordion
                className="mt-6"
                defaultOpen={null}
                allowMultiple
                items={course.faqs.map((faq) => ({ title: faq.q, content: <p>{faq.a}</p> }))}
              />
            </Reveal>
          </div>

          {/* Columna lateral */}
          <aside className="lg:col-span-5">
            <div className="flex flex-col gap-6 lg:sticky lg:top-24">
              {course.certificate ? (
                <div className="overflow-hidden rounded-3xl border border-line bg-paper-2">
                  <CertificateMockup className="w-full" />
                  <div className="border-t border-line bg-white p-6">
                    <h2 className="font-display text-lg font-bold tracking-tight">Certificación</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Al completar el curso vas a poder descargar tu certificado de participación con el detalle de los
                      contenidos y la carga horaria.
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="rounded-3xl border border-line bg-white p-7">
                <h2 className="font-display text-lg font-bold tracking-tight">¿Dudas antes de empezar?</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Contanos en qué estás trabajando y te decimos si este curso es el indicado.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Button href="/contacto" variant="dark" fullWidth icon="arrow-right">
                    Escribinos
                  </Button>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-center text-sm text-muted underline underline-offset-4 transition-colors hover:text-ink"
                  >
                    {site.contact.email}
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-ink p-7 text-white">
                <p className="font-display text-lg font-bold tracking-tight">Llevalo dentro del programa</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  Este curso también forma parte del Programa Integral de Marketing Digital, con acompañamiento y
                  entregables revisados.
                </p>
                <Link
                  href="/programas/programa-integral-de-marketing-digital"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-signal-400 transition-colors hover:text-signal-300"
                >
                  Ver el programa
                  <Icon name="arrow-right" className="size-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {/* ---------- Compra ---------- */}
      <section className="bg-brand-700 text-white">
        <div className="container-bs section-y-sm">
          <div className="flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-2xl leading-tight font-bold tracking-tight text-white sm:text-3xl">
                Empezá hoy con {course.title}
              </h2>
              <p className="mt-2.5 text-white/70">
                {course.duration} · {course.modules} módulos · {course.certificate ? "Con certificado" : "Sin certificado"}
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <p className="font-display text-3xl font-extrabold tracking-tighter">{formatPrice(course.price)}</p>
              <Button href={buyHref} size="lg" variant="signal" icon="arrow-right">
                Comprar curso
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Cursos relacionados ---------- */}
      {related.length > 0 ? (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Seguí aprendiendo"
            title="Cursos relacionados"
            lead="Formaciones que combinan bien con lo que vas a ver acá."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 90} className="h-full">
                <CourseCard course={item} />
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <StickyEnroll title={course.title} price={course.price} href={buyHref} />
    </>
  );
}
