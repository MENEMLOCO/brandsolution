import { ImageResponse } from "next/og";
import { courses, getCourse } from "@/data/courses";
import { accent as accentMap } from "@/lib/accents";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Curso de Brand Solutions";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

/** Imagen social propia de cada curso. */
export default async function CourseOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourse(slug);
  const tone = course ? accentMap[course.accent].hex : "#4a1fe0";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1d0a5e 0%, #0c0a1d 60%)",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background: "linear-gradient(135deg, #6a37f0, #3712b0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                color: "#cdf564",
                fontWeight: 700,
              }}
            >
              ↗
            </div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#ffffff" }}>
              Brand <span style={{ color: "#cdf564", marginLeft: 8 }}>Solutions</span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "12px 24px",
              borderRadius: 999,
              background: tone,
              color: "#ffffff",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            {course?.category ?? "Curso"}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            {course?.title ?? "Cursos de Marketing Digital"}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: 26,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 900,
            }}
          >
            {course?.promise ?? ""}
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {[course?.duration, course ? `${course.modules} módulos` : null, course?.modality, "Certificado"]
            .filter(Boolean)
            .map((tag) => (
              <div
                key={String(tag)}
                style={{
                  display: "flex",
                  padding: "12px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 22,
                }}
              >
                {tag}
              </div>
            ))}
        </div>
      </div>
    ),
    size,
  );
}
