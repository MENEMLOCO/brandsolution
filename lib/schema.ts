import { site } from "@/data/site";
import type { Course, Faq, Post, Program, Resource } from "@/data/types";
import { absoluteUrl } from "./seo";

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "EducationalOrganization"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.description,
    email: site.contact.email,
    foundingDate: site.founded,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/icon.svg"),
    },
    image: absoluteUrl("/opengraph-image"),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.city,
      addressCountry: site.contact.countryCode,
    },
    sameAs: site.social.map((s) => s.href),
    knowsAbout: [
      "Marketing Digital",
      "Inteligencia Artificial aplicada al marketing",
      "Publicidad digital",
      "Email marketing",
      "Ecommerce",
      "Analítica digital",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "es-AR",
    publisher: { "@id": ORG_ID },
  };
}

export function courseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": absoluteUrl(`/cursos/${course.slug}#course`),
    name: course.title,
    description: course.excerpt,
    url: absoluteUrl(`/cursos/${course.slug}`),
    image: absoluteUrl(`/cursos/${course.slug}/opengraph-image`),
    inLanguage: "es",
    educationalLevel: course.level,
    teaches: course.outcomes,
    about: course.category,
    dateModified: course.updatedAt,
    provider: { "@id": ORG_ID },
    offers: {
      "@type": "Offer",
      price: course.price,
      priceCurrency: site.currency.code,
      category: "Paid",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/cursos/${course.slug}`),
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: course.durationIso,
      inLanguage: "es",
      instructor: { "@type": "Organization", name: site.name },
    },
    numberOfCredits: undefined,
    syllabusSections: course.syllabus.map((module, index) => ({
      "@type": "Syllabus",
      name: module.title,
      description: module.summary,
      position: index + 1,
    })),
  };
}

export function programSchema(program: Program) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": absoluteUrl(`/programas/${program.slug}#course`),
    name: program.title,
    description: program.excerpt,
    url: absoluteUrl(`/programas/${program.slug}`),
    inLanguage: "es",
    educationalLevel: program.level,
    teaches: program.outcomes,
    dateModified: program.updatedAt,
    provider: { "@id": ORG_ID },
    ...(program.price > 0
      ? {
          offers: {
            "@type": "Offer",
            price: program.price,
            priceCurrency: site.currency.code,
            category: "Paid",
            availability: "https://schema.org/InStock",
            url: absoluteUrl(`/programas/${program.slug}`),
          },
        }
      : {}),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: program.durationIso,
      inLanguage: "es",
      instructor: { "@type": "Organization", name: site.name },
    },
  };
}

export function resourceSchema(resource: Resource) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: resource.title,
    description: resource.excerpt,
    url: absoluteUrl(`/recursos/${resource.slug}`),
    brand: { "@id": ORG_ID },
    category: resource.category,
    offers: {
      "@type": "Offer",
      price: resource.price,
      priceCurrency: site.currency.code,
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/recursos/${resource.slug}`),
    },
  };
}

export function articleSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.excerpt,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "es",
    articleSection: post.category,
    image: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
    author: { "@type": "Organization", name: post.author, url: site.url },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(`/blog/${post.slug}`) },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListSchema(name: string, urls: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: urls.map((url, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(url),
    })),
  };
}
