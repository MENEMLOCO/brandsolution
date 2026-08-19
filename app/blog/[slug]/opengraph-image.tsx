import { ImageResponse } from "next/og";
import { posts, getPost } from "@/data/posts";
import { accent as accentMap } from "@/lib/accents";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Artículo del blog de Brand Solutions";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

/** Imagen social propia de cada artículo. */
export default async function BlogOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const tone = post ? accentMap[post.accent].hex : "#4a1fe0";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fcfbf8",
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
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700, color: "#0c0a1d" }}>
              Brand <span style={{ color: "#4a1fe0", marginLeft: 8 }}>Solutions</span>
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
            {post?.category ?? "Blog"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 800,
            color: "#0c0a1d",
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          {post?.title ?? "Blog de Brand Solutions"}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 24, color: "#6a6489" }}>
          <div style={{ display: "flex" }}>{post?.readingTime ?? ""}</div>
          <div style={{ display: "flex", width: 6, height: 6, borderRadius: 999, background: "#d5d0c2" }} />
          <div style={{ display: "flex" }}>brandsolutions.com</div>
          <div style={{ display: "flex", flex: 1 }} />
          <div style={{ display: "flex", width: 120, height: 10, borderRadius: 999, background: "#cdf564" }} />
        </div>
      </div>
    ),
    size,
  );
}
