import { ImageResponse } from "next/og";

export const alt = "Brand Solutions · Cursos de Marketing Digital e Inteligencia Artificial";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen social por defecto del sitio, generada en tiempo de compilación. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1d0a5e 0%, #0c0a1d 55%, #2a0d87 100%)",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              background: "linear-gradient(135deg, #6a37f0, #3712b0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              color: "#cdf564",
              fontWeight: 700,
            }}
          >
            ↗
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#ffffff" }}>
            Brand <span style={{ color: "#cdf564", marginLeft: 10 }}>Solutions</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.08,
              letterSpacing: -2,
              maxWidth: 950,
              display: "flex",
            }}
          >
            Aprendé Marketing Digital para hacerlo, aplicarlo y hacerlo crecer.
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "rgba(255,255,255,0.65)", display: "flex" }}>
            Cursos, programas y herramientas con Inteligencia Artificial aplicada.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {["Estrategia", "Publicidad", "Contenidos", "IA aplicada", "Automatización"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "12px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.18)",
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
