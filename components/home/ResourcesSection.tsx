import { resources } from "@/data/resources";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ResourceCard } from "@/components/shared/ResourceCard";

export function ResourcesSection() {
  return (
    <Section id="recursos">
      <SectionHeading
        eyebrow="Recursos digitales"
        title={
          <>
            Herramientas para <span className="text-gradient-brand">trabajar mejor</span>
          </>
        }
        lead="Recursos prácticos para ahorrar tiempo y organizar tu estrategia digital."
        actions={
          <Button href="/recursos" variant="outline" icon="arrow-right" className="hidden lg:inline-flex">
            Ver todos los recursos
          </Button>
        }
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <Reveal key={resource.slug} delay={(index % 3) * 90} className="h-full">
            <ResourceCard resource={resource} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center lg:hidden">
        <Button href="/recursos" variant="outline" size="lg" fullWidth icon="arrow-right">
          Ver todos los recursos
        </Button>
      </div>
    </Section>
  );
}
