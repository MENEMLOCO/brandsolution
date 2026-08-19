import { sortedPosts } from "@/data/posts";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PostCard } from "@/components/shared/PostCard";

export function BlogSection() {
  const latest = sortedPosts().slice(0, 3);

  return (
    <Section id="blog" tone="muted">
      <SectionHeading
        eyebrow="Blog"
        title={
          <>
            Ideas, herramientas y <span className="text-gradient-brand">tendencias</span>
          </>
        }
        lead="Lo que vamos aprendiendo en los proyectos, explicado para que puedas aplicarlo."
        actions={
          <Button href="/blog" variant="outline" icon="arrow-right" className="hidden lg:inline-flex">
            Ver todos los artículos
          </Button>
        }
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {latest.map((post, index) => (
          <Reveal key={post.slug} delay={index * 90} className="h-full">
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center lg:hidden">
        <Button href="/blog" variant="outline" size="lg" fullWidth icon="arrow-right">
          Ver todos los artículos
        </Button>
      </div>
    </Section>
  );
}
