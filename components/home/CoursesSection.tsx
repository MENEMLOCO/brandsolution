import { courses } from "@/data/courses";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { CourseCard } from "@/components/shared/CourseCard";

export function CoursesSection() {
  return (
    <Section id="cursos">
      <SectionHeading
        eyebrow="Cursos"
        title={
          <>
            Cursos para <span className="mark-signal">aprender haciendo</span>
          </>
        }
        lead="Formaciones concretas para incorporar herramientas que puedas aplicar en tu trabajo, emprendimiento o negocio."
        actions={
          <Button href="/cursos" variant="outline" icon="arrow-right" className="hidden lg:inline-flex">
            Ver todos los cursos
          </Button>
        }
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {courses.map((course, index) => (
          <Reveal key={course.slug} delay={(index % 3) * 90} className="h-full">
            <CourseCard course={course} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center lg:hidden">
        <Button href="/cursos" variant="outline" size="lg" fullWidth icon="arrow-right">
          Ver todos los cursos
        </Button>
      </div>
    </Section>
  );
}
