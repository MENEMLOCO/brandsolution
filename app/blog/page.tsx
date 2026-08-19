import type { Metadata } from "next";
import { sortedPosts, blogTopics, posts } from "@/data/posts";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/ui/Section";
import { BlogCatalog } from "@/components/shared/BlogCatalog";
import { Newsletter } from "@/components/home/Newsletter";

export const metadata: Metadata = buildMetadata({
  title: "Blog de Marketing Digital e Inteligencia Artificial",
  description:
    "Ideas, herramientas y tendencias de marketing digital: estrategia, inteligencia artificial, redes sociales, publicidad, ecommerce y analítica.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
          itemListSchema(
            "Artículos de Brand Solutions",
            posts.map((post) => `/blog/${post.slug}`),
          ),
        ]}
      />

      <PageHeader
        eyebrow="Blog"
        title={
          <>
            Ideas, herramientas y <span className="mark-signal">tendencias</span>
          </>
        }
        lead="Lo que vamos aprendiendo en los proyectos, explicado para que puedas aplicarlo en el tuyo."
        crumbs={[
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />

      <Section>
        <BlogCatalog posts={sortedPosts()} topics={blogTopics} />
      </Section>

      <Newsletter />
    </>
  );
}
