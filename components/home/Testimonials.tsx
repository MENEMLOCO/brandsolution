import { testimonials, hasPlaceholderTestimonials } from "@/data/testimonials";
import { accent as accentMap } from "@/lib/accents";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Carousel } from "@/components/ui/Carousel";
import { Stars } from "@/components/ui/Stars";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function Testimonials() {
  return (
    <Section id="testimonios" tone="muted">
      <SectionHeading
        eyebrow="Testimonios"
        title={
          <>
            Personas que ya <span className="mark-signal">empezaron a aplicarlo</span>
          </>
        }
        lead="Comentarios de quienes hicieron los cursos y llevaron lo aprendido a su propio proyecto."
      />

      <Reveal className="mt-12 lg:mt-14">
        <Carousel label="Testimonios de estudiantes">
          {testimonials.map((testimonial) => {
            const a = accentMap[testimonial.accent];
            return (
              <figure
                key={testimonial.id}
                className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-shadow duration-300 hover:shadow-card"
              >
                <Icon name="quote" className="size-8 text-line-2" />

                <blockquote className="mt-5 flex-1 text-[0.975rem] leading-relaxed text-ink-2">
                  {testimonial.quote}
                </blockquote>

                <Stars rating={testimonial.rating} className="mt-6" />

                <figcaption className="mt-5 flex items-center gap-3.5 border-t border-line pt-5">
                  <span
                    className={cn(
                      "grid size-11 shrink-0 place-items-center rounded-full font-display text-sm font-bold",
                      a.soft,
                      a.text,
                    )}
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-[0.95rem] font-semibold tracking-tight">
                      {testimonial.name}
                    </span>
                    <span className="block truncate text-xs text-muted">{testimonial.role}</span>
                    <span className="mt-1 block truncate text-xs font-medium text-brand-700">
                      {testimonial.course}
                    </span>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </Carousel>
      </Reveal>

      {hasPlaceholderTestimonials ? (
        <p className="mt-8 flex items-start gap-2.5 rounded-2xl border border-dashed border-line-2 bg-white/60 p-4 text-xs leading-relaxed text-muted">
          <Icon name="pen" className="mt-0.5 size-4 shrink-0 text-muted-2" />
          <span>
            Estos testimonios son de ejemplo. Reemplazalos por comentarios reales en{" "}
            <code className="rounded bg-paper-2 px-1.5 py-0.5 font-mono">data/testimonials.ts</code> y poné{" "}
            <code className="rounded bg-paper-2 px-1.5 py-0.5 font-mono">placeholder: false</code> para que este aviso
            desaparezca.
          </span>
        </p>
      ) : null}
    </Section>
  );
}
