import type { Accent, VisualKey } from "@/data/types";
import { accent as accentMap } from "@/lib/accents";
import { cn } from "@/lib/utils";

/**
 * Portadas ilustradas para cursos, recursos, servicios y artículos.
 * Cada clave dibuja una mini interfaz relacionada con el tema.
 * Son ilustraciones propias: no se usan fotografías de terceros.
 */

const labels: Record<VisualKey, string> = {
  strategy: "Ilustración de un tablero de estrategia con objetivos y prioridades",
  content: "Ilustración de una grilla de contenidos con piezas planificadas",
  social: "Ilustración de un celular mostrando una publicación de red social",
  ads: "Ilustración de una campaña publicitaria con métricas de rendimiento",
  search: "Ilustración de una búsqueda con resultados y anuncios",
  ai: "Ilustración de una conversación con una herramienta de inteligencia artificial",
  email: "Ilustración de un flujo de emails automatizados",
  analytics: "Ilustración de un panel de analítica con una curva de resultados",
  ecommerce: "Ilustración de una tienda online con productos y carrito",
  calendar: "Ilustración de un calendario de contenidos mensual",
  prompts: "Ilustración de una biblioteca de prompts organizados",
  persona: "Ilustración de una ficha de buyer persona",
  dashboard: "Ilustración de un tablero de métricas con indicadores",
  checklist: "Ilustración de una lista de control de campañas",
  plan: "Ilustración de un documento de plan de marketing",
};

function Glyph({ visual, c }: { visual: VisualKey; c: string }) {
  switch (visual) {
    case "strategy":
      return (
        <>
          <circle cx="118" cy="126" r="44" fill="none" stroke={c} strokeWidth="9" opacity="0.25" />
          <circle cx="118" cy="126" r="24" fill="none" stroke={c} strokeWidth="9" opacity="0.5" />
          <circle cx="118" cy="126" r="7" fill={c} />
          <path d="M118 126 190 68" stroke="#0c0a1d" strokeWidth="6" strokeLinecap="round" />
          <path d="M176 62h20v20" stroke="#0c0a1d" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect x="212" y="96" width="120" height="12" rx="6" fill="#e4e0d5" />
          <rect x="212" y="124" width="92" height="12" rx="6" fill="#e4e0d5" />
          <rect x="212" y="152" width="108" height="12" rx="6" fill={c} opacity="0.35" />
        </>
      );
    case "plan":
      return (
        <>
          <rect x="96" y="52" width="150" height="180" rx="14" fill="#ffffff" />
          <rect x="116" y="76" width="76" height="11" rx="5.5" fill={c} />
          <rect x="116" y="102" width="110" height="9" rx="4.5" fill="#e4e0d5" />
          <rect x="116" y="122" width="94" height="9" rx="4.5" fill="#e4e0d5" />
          <rect x="116" y="146" width="110" height="9" rx="4.5" fill="#e4e0d5" />
          <rect x="116" y="166" width="70" height="9" rx="4.5" fill="#e4e0d5" />
          <rect x="116" y="192" width="60" height="22" rx="11" fill={c} opacity="0.2" />
          <g transform="translate(238 128)">
            <rect x="0" y="0" width="112" height="88" rx="14" fill="#0c0a1d" />
            <rect x="18" y="20" width="46" height="8" rx="4" fill="#ffffff" opacity="0.4" />
            {[26, 44, 34].map((h, i) => (
              <rect key={i} x={18 + i * 28} y={68 - h} width="16" height={h} rx="5" fill={i === 2 ? "#cdf564" : c} />
            ))}
          </g>
        </>
      );
    case "content":
      return (
        <>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x={104 + (i % 3) * 68}
              y={64 + Math.floor(i / 3) * 68}
              width="56"
              height="56"
              rx="12"
              fill={i === 1 ? c : i === 4 ? "#0c0a1d" : "#ffffff"}
              opacity={i === 1 || i === 4 ? 1 : 0.95}
            />
          ))}
          <g transform="translate(268 150)">
            <rect x="0" y="0" width="88" height="66" rx="14" fill="#ffffff" />
            <rect x="14" y="18" width="52" height="8" rx="4" fill="#e4e0d5" />
            <rect x="14" y="36" width="36" height="8" rx="4" fill={c} />
          </g>
          <path d="M292 60l24-24a12 12 0 0117 17l-24 24-22 5z" fill="#0c0a1d" />
        </>
      );
    case "social":
      return (
        <>
          <rect x="140" y="34" width="120" height="200" rx="22" fill="#0c0a1d" />
          <rect x="148" y="42" width="104" height="184" rx="16" fill="#ffffff" />
          <circle cx="168" cy="64" r="10" fill={c} />
          <rect x="184" y="59" width="46" height="7" rx="3.5" fill="#e4e0d5" />
          <rect x="158" y="84" width="84" height="72" rx="10" fill={c} opacity="0.25" />
          <path d="M192 108l20 12-20 12z" fill={c} />
          <rect x="158" y="168" width="60" height="7" rx="3.5" fill="#e4e0d5" />
          <rect x="158" y="184" width="76" height="7" rx="3.5" fill="#ebe8df" />
          <g transform="translate(268 96)">
            <rect x="0" y="0" width="76" height="34" rx="17" fill="#ffffff" />
            <path d="M22 22c0-4 3-7 7-7 2 0 4 1 5 3 1-2 3-3 5-3 4 0 7 3 7 7 0 5-7 9-12 13-5-4-12-8-12-13z" fill="#ff6a45" />
          </g>
        </>
      );
    case "ads":
      return (
        <>
          <rect x="96" y="70" width="164" height="112" rx="16" fill="#ffffff" />
          <rect x="114" y="90" width="70" height="10" rx="5" fill={c} />
          <rect x="114" y="112" width="128" height="8" rx="4" fill="#e4e0d5" />
          <rect x="114" y="130" width="96" height="8" rx="4" fill="#e4e0d5" />
          <rect x="114" y="152" width="66" height="20" rx="10" fill="#0c0a1d" />
          <path
            d="M282 92v46a12 12 0 0012 12h8l40 26V54l-40 26h-8a12 12 0 00-12 12z"
            fill={c}
          />
          <path d="M348 96a26 26 0 010 40" stroke="#0c0a1d" strokeWidth="7" fill="none" strokeLinecap="round" />
        </>
      );
    case "search":
      return (
        <>
          <rect x="90" y="60" width="220" height="40" rx="20" fill="#ffffff" />
          <circle cx="118" cy="80" r="11" fill="none" stroke={c} strokeWidth="6" />
          <path d="M126 88l12 12" stroke={c} strokeWidth="6" strokeLinecap="round" />
          <rect x="146" y="75" width="110" height="10" rx="5" fill="#e4e0d5" />
          <rect x="90" y="118" width="220" height="46" rx="12" fill="#ffffff" />
          <rect x="106" y="130" width="34" height="12" rx="6" fill={c} opacity="0.3" />
          <rect x="148" y="131" width="86" height="10" rx="5" fill="#0c0a1d" opacity="0.75" />
          <rect x="106" y="148" width="150" height="7" rx="3.5" fill="#e4e0d5" />
          <rect x="90" y="176" width="220" height="46" rx="12" fill="#ffffff" opacity="0.7" />
          <rect x="106" y="190" width="96" height="10" rx="5" fill="#0c0a1d" opacity="0.4" />
          <rect x="106" y="206" width="140" height="7" rx="3.5" fill="#e4e0d5" />
        </>
      );
    case "ai":
      return (
        <>
          <rect x="88" y="62" width="180" height="62" rx="18" fill="#ffffff" />
          <rect x="108" y="82" width="120" height="9" rx="4.5" fill="#e4e0d5" />
          <rect x="108" y="100" width="80" height="9" rx="4.5" fill="#e4e0d5" />
          <rect x="132" y="140" width="184" height="76" rx="18" fill="#0c0a1d" />
          <rect x="154" y="162" width="132" height="9" rx="4.5" fill="#ffffff" opacity="0.75" />
          <rect x="154" y="180" width="106" height="9" rx="4.5" fill="#ffffff" opacity="0.4" />
          <rect x="154" y="198" width="60" height="9" rx="4.5" fill="#cdf564" />
          <path d="M300 52l7 19 19 7-19 7-7 19-7-19-19-7 19-7z" fill={c} />
          <path d="M96 176l4 11 11 4-11 4-4 11-4-11-11-4 11-4z" fill={c} opacity="0.55" />
        </>
      );
    case "prompts":
      return (
        <>
          <rect x="96" y="52" width="208" height="164" rx="18" fill="#0c0a1d" />
          <circle cx="118" cy="74" r="4.5" fill="#ff6a45" />
          <circle cx="132" cy="74" r="4.5" fill="#ffb020" />
          <circle cx="146" cy="74" r="4.5" fill="#cdf564" />
          {[
            [120, 96, 60],
            [120, 116, 140],
            [120, 136, 108],
            [120, 156, 156],
            [120, 176, 84],
          ].map(([x, y, w], i) => (
            <rect key={i} x={x} y={y} width={w} height="9" rx="4.5" fill={i % 2 === 0 ? c : "#ffffff"} opacity={i % 2 === 0 ? 0.9 : 0.28} />
          ))}
          <g transform="translate(276 150)">
            <rect x="0" y="0" width="72" height="72" rx="18" fill="#ffffff" />
            <path d="M36 18l6 16 16 6-16 6-6 16-6-16-16-6 16-6z" fill={c} />
          </g>
        </>
      );
    case "persona":
      return (
        <>
          <rect x="96" y="56" width="156" height="156" rx="18" fill="#ffffff" />
          <circle cx="140" cy="102" r="24" fill={c} opacity="0.25" />
          <circle cx="140" cy="94" r="10" fill={c} />
          <path d="M122 118c4-8 10-12 18-12s14 4 18 12z" fill={c} />
          <rect x="176" y="86" width="58" height="9" rx="4.5" fill="#e4e0d5" />
          <rect x="176" y="104" width="42" height="9" rx="4.5" fill="#ebe8df" />
          <rect x="116" y="146" width="116" height="9" rx="4.5" fill="#e4e0d5" />
          <rect x="116" y="166" width="88" height="9" rx="4.5" fill="#e4e0d5" />
          <rect x="116" y="186" width="60" height="9" rx="4.5" fill={c} opacity="0.4" />
          <g transform="translate(268 96)">
            <rect x="0" y="0" width="84" height="84" rx="20" fill="#0c0a1d" />
            <path d="M42 22l5 14 14 5-14 5-5 14-5-14-14-5 14-5z" fill="#cdf564" />
          </g>
        </>
      );
    case "email":
      return (
        <>
          <rect x="88" y="80" width="140" height="100" rx="14" fill="#ffffff" />
          <path d="M96 92l56 40a12 12 0 0014 0l54-40" stroke={c} strokeWidth="7" fill="none" strokeLinecap="round" />
          <circle cx="286" cy="72" r="20" fill={c} />
          <circle cx="286" cy="130" r="20" fill="#0c0a1d" />
          <circle cx="286" cy="188" r="20" fill={c} opacity="0.4" />
          <path d="M236 130h20m0 0v-40a8 8 0 018-8h2m-30 48v40a8 8 0 008 8h2" stroke="#0c0a1d" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.5" />
        </>
      );
    case "analytics":
      return (
        <>
          <rect x="88" y="52" width="224" height="164" rx="18" fill="#ffffff" />
          <rect x="110" y="76" width="64" height="10" rx="5" fill="#e4e0d5" />
          <path
            d="M110 178l38-30 30 16 34-42 32 20 40-58"
            fill="none"
            stroke={c}
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="284" cy="84" r="9" fill="#ffffff" stroke={c} strokeWidth="6" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={110 + i * 40} y={192} width="26" height="8" rx="4" fill="#ebe8df" />
          ))}
          <rect x="230" y="66" width="64" height="8" rx="4" fill="#ebe8df" />
        </>
      );
    case "ecommerce":
      return (
        <>
          <rect x="88" y="56" width="104" height="86" rx="14" fill="#ffffff" />
          <rect x="106" y="76" width="68" height="38" rx="8" fill={c} opacity="0.3" />
          <rect x="106" y="122" width="44" height="8" rx="4" fill="#e4e0d5" />
          <rect x="204" y="56" width="104" height="86" rx="14" fill="#ffffff" />
          <rect x="222" y="76" width="68" height="38" rx="8" fill="#0c0a1d" opacity="0.14" />
          <rect x="222" y="122" width="56" height="8" rx="4" fill="#e4e0d5" />
          <path
            d="M118 166h22l16 56h108l16-42"
            fill="none"
            stroke="#0c0a1d"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="176" cy="238" r="10" fill={c} />
          <circle cx="248" cy="238" r="10" fill={c} />
        </>
      );
    case "calendar":
      return (
        <>
          <rect x="96" y="48" width="208" height="172" rx="18" fill="#ffffff" />
          <rect x="96" y="48" width="208" height="42" rx="18" fill={c} />
          <rect x="96" y="72" width="208" height="18" fill={c} />
          <rect x="122" y="62" width="60" height="10" rx="5" fill="#ffffff" opacity="0.85" />
          {Array.from({ length: 15 }, (_, i) => (
            <rect
              key={i}
              x={118 + (i % 5) * 36}
              y={110 + Math.floor(i / 5) * 34}
              width="24"
              height="24"
              rx="8"
              fill={i === 3 ? "#0c0a1d" : i === 7 ? c : i === 11 ? "#cdf564" : "#ebe8df"}
            />
          ))}
        </>
      );
    case "dashboard":
      return (
        <>
          <rect x="80" y="56" width="110" height="72" rx="14" fill="#ffffff" />
          <rect x="98" y="76" width="34" height="8" rx="4" fill="#e4e0d5" />
          <rect x="98" y="94" width="60" height="16" rx="8" fill={c} />
          <rect x="202" y="56" width="118" height="72" rx="14" fill="#0c0a1d" />
          <rect x="220" y="76" width="34" height="8" rx="4" fill="#ffffff" opacity="0.4" />
          <rect x="220" y="94" width="52" height="16" rx="8" fill="#cdf564" />
          <rect x="80" y="142" width="240" height="88" rx="14" fill="#ffffff" />
          {[34, 52, 40, 66, 48, 74].map((h, i) => (
            <rect key={i} x={102 + i * 36} y={210 - h} width="20" height={h} rx="6" fill={i === 5 ? c : "#cbbaff"} />
          ))}
        </>
      );
    case "checklist":
      return (
        <>
          <rect x="104" y="46" width="192" height="180" rx="18" fill="#ffffff" />
          {[0, 1, 2, 3].map((i) => (
            <g key={i} transform={`translate(128 ${76 + i * 40})`}>
              <rect x="0" y="-12" width="24" height="24" rx="8" fill={i < 3 ? c : "#ebe8df"} />
              {i < 3 ? (
                <path d="M6 1l5 5 8-9" stroke="#ffffff" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              ) : null}
              <rect x="38" y="-5" width={i === 3 ? 78 : 118} height="9" rx="4.5" fill="#e4e0d5" />
            </g>
          ))}
        </>
      );
    default:
      return null;
  }
}

export function CoverVisual({
  visual,
  tone = "brand",
  className,
  decorative = false,
}: {
  visual: VisualKey;
  tone?: Accent;
  className?: string;
  decorative?: boolean;
}) {
  const a = accentMap[tone];
  const id = `cv-${visual}-${tone}`;

  return (
    <svg
      viewBox="0 0 400 280"
      className={cn("h-full w-full", className)}
      preserveAspectRatio="xMidYMid slice"
      role={decorative ? undefined : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : labels[visual]}
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={a.hexSoft} />
          <stop offset="100%" stopColor="#fcfbf8" />
        </linearGradient>
        <pattern id={`${id}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0v20" fill="none" stroke="#0c0a1d" strokeOpacity="0.05" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="280" fill={`url(#${id}-bg)`} />
      <rect width="400" height="280" fill={`url(#${id}-grid)`} />
      <circle cx="352" cy="40" r="58" fill={a.hex} opacity="0.14" />
      <circle cx="46" cy="248" r="46" fill={a.hex} opacity="0.1" />
      <g>
        <Glyph visual={visual} c={a.hex} />
      </g>
    </svg>
  );
}
