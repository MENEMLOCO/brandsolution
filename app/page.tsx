import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { faqSchema, itemListSchema } from "@/lib/schema";
import { generalFaqs } from "@/data/faqs";
import { courses } from "@/data/courses";
import { JsonLd } from "@/components/shared/JsonLd";

import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CoursesSection } from "@/components/home/CoursesSection";
import { FeaturedProgram } from "@/components/home/FeaturedProgram";
import { Methodology } from "@/components/home/Methodology";
import { OnlineLearning } from "@/components/home/OnlineLearning";
import { AiSection } from "@/components/home/AiSection";
import { Certification } from "@/components/home/Certification";
import { Experience } from "@/components/home/Experience";
import { Testimonials } from "@/components/home/Testimonials";
import { ResourcesSection } from "@/components/home/ResourcesSection";
import { LeadMagnet } from "@/components/home/LeadMagnet";
import { Newsletter } from "@/components/home/Newsletter";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BlogSection } from "@/components/home/BlogSection";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = buildMetadata({
  title: "Brand Solutions · Cursos de Marketing Digital e Inteligencia Artificial",
  description:
    "Cursos, programas y herramientas prácticas de Marketing Digital e Inteligencia Artificial. Aprendé estrategia, publicidad, contenidos y automatización aplicándolos a proyectos reales.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(generalFaqs.slice(0, 6)),
          itemListSchema(
            "Cursos de Brand Solutions",
            courses.map((course) => `/cursos/${course.slug}`),
          ),
        ]}
      />

      <Hero />
      <TrustStrip />
      <CoursesSection />
      <FeaturedProgram />
      <Methodology />
      <OnlineLearning />
      <AiSection />
      <Certification />
      <Experience />
      <Testimonials />
      <ResourcesSection />
      <LeadMagnet />
      <Newsletter />
      <ServicesSection />
      <BlogSection />
      <FinalCta />
    </>
  );
}
