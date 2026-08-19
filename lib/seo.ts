import type { Metadata } from "next";
import { site } from "@/data/site";

interface SeoInput {
  title: string;
  description: string;
  /** Ruta relativa, por ejemplo "/cursos". */
  path?: string;
  /**
   * Imagen social propia (ruta relativa o absoluta).
   * Por defecto se usa la imagen generada del sitio en /opengraph-image.
   */
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
  keywords?: string[];
}

export const absoluteUrl = (path = "/") =>
  `${site.url.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

/** Construye el objeto Metadata de una página con Open Graph y Twitter Cards. */
export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noIndex = false,
  keywords,
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  // Next reemplaza por completo el objeto openGraph del layout, así que
  // resolvemos siempre la imagen social acá.
  const imageUrl = image ? (image.startsWith("http") ? image : absoluteUrl(image)) : absoluteUrl("/opengraph-image");

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
        },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: site.locale,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      ...(type === "article" ? { publishedTime, modifiedTime, authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
