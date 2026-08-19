import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { courses } from "@/data/courses";
import { programs } from "@/data/programs";
import { resources } from "@/data/resources";
import { posts } from "@/data/posts";

const url = (path: string) => `${site.url.replace(/\/$/, "")}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/cursos"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: url("/programas"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/recursos"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/servicios"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/nosotros"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/contacto"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: url("/preguntas-frecuentes"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: url("/como-comprar"), lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: url("/terminos-y-condiciones"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: url("/politica-de-privacidad"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: url(`/cursos/${course.slug}`),
    lastModified: new Date(course.updatedAt),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const programRoutes: MetadataRoute.Sitemap = programs.map((program) => ({
    url: url(`/programas/${program.slug}`),
    lastModified: new Date(program.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = resources.map((resource) => ({
    url: url(`/recursos/${resource.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...programRoutes, ...resourceRoutes, ...postRoutes];
}
