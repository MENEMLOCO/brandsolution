import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPost, getRelatedPosts } from "@/data/posts";
import type { PostBlock } from "@/data/types";
import { accent as accentMap } from "@/lib/accents";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { formatDate } from "@/lib/utils";
import { JsonLd } from "@/components/shared/JsonLd";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { CoverVisual } from "@/components/visuals/CoverVisual";
import { PostCard } from "@/components/shared/PostCard";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return buildMetadata({ title: "Artículo no encontrado", description: "", noIndex: true });

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: `/blog/${post.slug}/opengraph-image`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
    authors: [post.author],
    keywords: [post.category, "marketing digital", "Brand Solutions"],
  });
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-12 font-display text-2xl font-bold tracking-tight sm:text-[1.75rem]">{block.text}</h2>
      );
    case "h3":
      return <h3 className="mt-8 font-display text-lg font-bold tracking-tight sm:text-xl">{block.text}</h3>;
    case "p":
      return <p className="mt-5 text-[1.05rem] leading-[1.75] text-ink-3">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-6 flex flex-col gap-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[1.02rem] leading-relaxed text-ink-3">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-6 flex flex-col gap-3">
          {block.items.map((item, index) => (
            <li key={item} className="flex items-start gap-3.5 text-[1.02rem] leading-relaxed text-ink-3">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-50 font-display text-xs font-bold text-brand-700">
                {index + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="mt-9 border-l-4 border-signal-400 pl-6 font-display text-xl leading-snug font-semibold tracking-tight text-ink">
          {block.text}
        </blockquote>
      );
    case "callout":
      return (
        <aside className="mt-9 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
          <p className="flex items-center gap-2 font-display text-sm font-bold tracking-tight text-brand-700">
            <Icon name="bulb" className="size-4" />
            {block.title}
          </p>
          <p className="mt-2 leading-relaxed text-ink-3">{block.text}</p>
        </aside>
      );
    default:
      return null;
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const a = accentMap[post.accent];

  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={[articleSchema(post), breadcrumbSchema(crumbs)]} />

      <article>
        <header className="border-b border-line bg-paper-2">
          <div className="container-bs pt-8 pb-12 lg:pt-10 lg:pb-16">
            <Breadcrumbs items={crumbs} />
            <div className="mx-auto max-w-3xl">
              <span className={`inline-flex rounded-full px-3.5 py-1.5 text-xs font-semibold ${a.solid}`}>
                {post.category}
              </span>
              <h1 className="mt-5 font-display text-[2rem] leading-[1.08] font-extrabold tracking-tighter sm:text-[2.75rem]">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">{post.excerpt}</p>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <Icon name="pen" className="size-4" />
                  {post.author}
                </span>
                <time dateTime={post.date} className="inline-flex items-center gap-2">
                  <Icon name="calendar" className="size-4" />
                  {formatDate(post.date)}
                </time>
                <span className="inline-flex items-center gap-2">
                  <Icon name="clock" className="size-4" />
                  {post.readingTime} de lectura
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="container-bs">
          <div className="mx-auto max-w-3xl">
            <div className="-mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-line shadow-card sm:-mt-10">
              <CoverVisual visual={post.visual} tone={post.accent} decorative />
            </div>

            <div className="py-12 lg:py-16">
              {post.body.map((block, index) => (
                <Block key={index} block={block} />
              ))}
            </div>

            <div className="mb-16 rounded-3xl bg-ink p-7 text-white sm:p-9">
              <p className="font-display text-xl leading-snug font-bold tracking-tight text-white">
                ¿Te sirvió este artículo?
              </p>
              <p className="mt-2.5 leading-relaxed text-white/60">
                Cada tanto mandamos una idea de marketing que puedas aplicar. Nada más.
              </p>
              <div className="mt-6">
                <NewsletterForm tone="dark" cta="Sumarme" />
              </div>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <Section tone="muted">
          <SectionHeading
            eyebrow="Seguí leyendo"
            title="Otros artículos"
            actions={
              <Button href="/blog" variant="outline" icon="arrow-right" className="hidden lg:inline-flex">
                Ver todos los artículos
              </Button>
            }
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 90} className="h-full">
                <PostCard post={item} />
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
