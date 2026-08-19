/**
 * Composición del hero: dashboard, celular, calendario, prompt de IA y
 * métricas de campaña. Todo es SVG original y escala sin pérdida.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 690"
      className={className}
      role="img"
      aria-label="Composición del universo del marketing digital: un panel de campañas con gráficos, un celular con una publicación de red social, un calendario de contenidos, un prompt de inteligencia artificial y un indicador de resultados de anuncios."
    >
      <defs>
        <linearGradient id="hv-brand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6a37f0" />
          <stop offset="100%" stopColor="#4a1fe0" />
        </linearGradient>
        <linearGradient id="hv-cyan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#19c6ea" />
          <stop offset="100%" stopColor="#6a37f0" />
        </linearGradient>
        <linearGradient id="hv-signal" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#b6e337" />
          <stop offset="100%" stopColor="#cdf564" />
        </linearGradient>
        <linearGradient id="hv-screen" x1="0" y1="0" x2="0.6" y2="1">
          <stop offset="0%" stopColor="#2a0d87" />
          <stop offset="100%" stopColor="#0c0a1d" />
        </linearGradient>
        <linearGradient id="hv-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a1fe0" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#4a1fe0" stopOpacity="0" />
        </linearGradient>

        <filter id="hv-shadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow dx="0" dy="22" stdDeviation="26" floodColor="#0c0a1d" floodOpacity="0.16" />
        </filter>
        <filter id="hv-shadow-sm" x="-40%" y="-40%" width="180%" height="190%">
          <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0c0a1d" floodOpacity="0.14" />
        </filter>
        <filter id="hv-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="52" />
        </filter>

        <pattern id="hv-grid" width="34" height="34" patternUnits="userSpaceOnUse">
          <path d="M34 0H0v34" fill="none" stroke="#0c0a1d" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>

        <clipPath id="hv-phone-clip">
          <rect x="524" y="54" width="206" height="414" rx="30" />
        </clipPath>
        <clipPath id="hv-post-clip">
          <rect x="538" y="146" width="178" height="156" rx="14" />
        </clipPath>
      </defs>

      {/* Fondos difusos */}
      <g filter="url(#hv-blur)" opacity="0.55">
        <circle cx="170" cy="180" r="150" fill="#a98fff" />
        <circle cx="640" cy="520" r="150" fill="#19c6ea" opacity="0.7" />
        <circle cx="600" cy="90" r="110" fill="#cdf564" />
      </g>

      <rect x="0" y="0" width="760" height="690" fill="url(#hv-grid)" opacity="0.9" />

      {/* ---------- Calendario de contenidos ---------- */}
      <g filter="url(#hv-shadow-sm)" transform="rotate(-4 116 86)">
        <rect x="26" y="26" width="180" height="120" rx="18" fill="#ffffff" />
        <rect x="26" y="26" width="180" height="30" rx="18" fill="#f4f2ec" />
        <rect x="26" y="44" width="180" height="12" fill="#f4f2ec" />
        <circle cx="44" cy="41" r="4" fill="#ff6a45" />
        <rect x="56" y="37" width="62" height="8" rx="4" fill="#d5d0c2" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={`c-${i}`} x={42 + (i % 6) * 24} y={70} width="16" height="16" rx="5" fill="#ebe8df" />
        ))}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect
            key={`c2-${i}`}
            x={42 + i * 24}
            y={96}
            width="16"
            height="16"
            rx="5"
            fill={i === 1 ? "#4a1fe0" : i === 3 ? "#cdf564" : i === 5 ? "#ff6a45" : "#ebe8df"}
          />
        ))}
        <rect x="42" y="122" width="86" height="7" rx="3.5" fill="#e4e0d5" />
      </g>

      {/* ---------- Panel de campañas ---------- */}
      <g filter="url(#hv-shadow)">
        <rect x="24" y="166" width="470" height="306" rx="24" fill="#ffffff" />

        {/* Barra superior */}
        <circle cx="52" cy="196" r="5" fill="#ff6a45" />
        <circle cx="70" cy="196" r="5" fill="#ffb020" />
        <circle cx="88" cy="196" r="5" fill="#cdf564" />
        <rect x="112" y="190" width="118" height="10" rx="5" fill="#ebe8df" />
        <rect x="404" y="184" width="66" height="22" rx="11" fill="#f2eeff" />
        <circle cx="418" cy="195" r="4" fill="#4a1fe0" />
        <rect x="428" y="191" width="32" height="8" rx="4" fill="#cbbaff" />

        <line x1="24" y1="220" x2="494" y2="220" stroke="#ebe8df" strokeWidth="1.5" />

        {/* Indicadores */}
        {[
          { x: 48, label: "#4a1fe0", w: 54 },
          { x: 190, label: "#19c6ea", w: 42 },
          { x: 332, label: "#ff6a45", w: 48 },
        ].map((k, i) => (
          <g key={`kpi-${i}`}>
            <rect x={k.x} y={240} width="36" height="7" rx="3.5" fill="#e4e0d5" />
            <rect x={k.x} y={256} width={k.w} height="16" rx="6" fill={k.label} opacity="0.9" />
            <rect x={k.x} y={280} width="72" height="6" rx="3" fill="#f4f2ec" />
          </g>
        ))}

        {/* Gráfico de barras */}
        <g>
          {[46, 74, 58, 96, 70, 118, 90].map((h, i) => (
            <rect
              key={`bar-${i}`}
              className="chart-bar"
              style={{ animationDelay: `${300 + i * 90}ms` }}
              x={52 + i * 44}
              y={430 - h}
              width="24"
              height={h}
              rx="8"
              fill={i === 5 ? "url(#hv-signal)" : "url(#hv-brand)"}
              opacity={i === 5 ? 1 : 0.86}
            />
          ))}
          <line x1="46" y1="434" x2="466" y2="434" stroke="#ebe8df" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Curva de evolución */}
        <path
          d="M60 396 L104 372 L148 384 L192 344 L236 358 L280 312 L324 330 L368 288 L412 262 L456 240"
          fill="none"
          stroke="#19c6ea"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="chart-line"
          style={{ ["--dash" as string]: "620" }}
        />
        <circle cx="456" cy="240" r="6" fill="#ffffff" stroke="#19c6ea" strokeWidth="3" />

        <rect x="46" y="448" width="90" height="8" rx="4" fill="#f4f2ec" />
        <rect x="146" y="448" width="60" height="8" rx="4" fill="#f4f2ec" />
      </g>

      {/* ---------- Celular ---------- */}
      <g filter="url(#hv-shadow)">
        <rect x="516" y="46" width="222" height="430" rx="38" fill="#0c0a1d" />
        <rect x="524" y="54" width="206" height="414" rx="30" fill="url(#hv-screen)" />
        <g clipPath="url(#hv-phone-clip)">
          <rect x="524" y="54" width="206" height="120" fill="url(#hv-fade)" />

          {/* Barra de estado y muesca */}
          <rect x="596" y="66" width="62" height="14" rx="7" fill="#0c0a1d" />

          {/* Encabezado del perfil */}
          <circle cx="556" cy="112" r="15" fill="url(#hv-signal)" />
          <rect x="580" y="104" width="72" height="8" rx="4" fill="#ffffff" opacity="0.9" />
          <rect x="580" y="118" width="46" height="6" rx="3" fill="#ffffff" opacity="0.45" />
          <circle cx="704" cy="112" r="2.4" fill="#ffffff" opacity="0.6" />
          <circle cx="712" cy="112" r="2.4" fill="#ffffff" opacity="0.6" />

          {/* Publicación */}
          <g clipPath="url(#hv-post-clip)">
            <rect x="538" y="146" width="178" height="156" fill="url(#hv-cyan)" />
            <circle cx="700" cy="160" r="46" fill="#cdf564" opacity="0.35" />
            <path
              d="M538 268c26-10 40-42 62-42s34 30 56 24 38-24 60-18v70H538z"
              fill="#0c0a1d"
              opacity="0.35"
            />
            <path d="M617 200l30 18-30 18z" fill="#ffffff" opacity="0.92" />
          </g>

          {/* Acciones */}
          <path
            d="M545 320c0-5 4-9 9-9 3 0 5 1 7 4 2-3 4-4 7-4 5 0 9 4 9 9 0 7-9 12-16 18-7-6-16-11-16-18z"
            fill="#ff6a45"
          />
          <circle cx="592" cy="322" r="8" fill="none" stroke="#ffffff" strokeOpacity="0.75" strokeWidth="2" />
          <path d="M614 314l14 8-14 8z" fill="none" stroke="#ffffff" strokeOpacity="0.75" strokeWidth="2" strokeLinejoin="round" />

          <rect x="538" y="344" width="150" height="7" rx="3.5" fill="#ffffff" opacity="0.75" />
          <rect x="538" y="358" width="112" height="7" rx="3.5" fill="#ffffff" opacity="0.42" />
          <rect x="538" y="372" width="132" height="7" rx="3.5" fill="#ffffff" opacity="0.42" />

          {/* Barra inferior */}
          <rect x="524" y="404" width="206" height="64" fill="#0c0a1d" opacity="0.65" />
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={`nav-${i}`}
              x={548 + i * 42}
              y={428}
              width="20"
              height="20"
              rx="6"
              fill="#ffffff"
              opacity={i === 0 ? 0.9 : 0.3}
            />
          ))}
        </g>
      </g>

      {/* ---------- Prompt de IA ---------- */}
      <g filter="url(#hv-shadow-sm)" transform="rotate(-1.5 264 574)">
        <rect x="88" y="498" width="352" height="152" rx="22" fill="#ffffff" />
        <rect x="88" y="498" width="352" height="46" rx="22" fill="#0c0a1d" />
        <rect x="88" y="524" width="352" height="20" fill="#0c0a1d" />
        <path
          d="M116 511l3.4 9 9 3.4-9 3.4-3.4 9-3.4-9-9-3.4 9-3.4z"
          fill="#cdf564"
        />
        <rect x="136" y="516" width="96" height="9" rx="4.5" fill="#ffffff" opacity="0.85" />
        <rect x="392" y="512" width="30" height="16" rx="8" fill="#4a1fe0" />

        <rect x="112" y="568" width="300" height="9" rx="4.5" fill="#ebe8df" />
        <rect x="112" y="590" width="256" height="9" rx="4.5" fill="#ebe8df" />
        <rect x="112" y="612" width="176" height="9" rx="4.5" fill="#e5dcff" />
        <rect x="356" y="604" width="56" height="26" rx="13" fill="#f2eeff" />
        <path d="M374 617h20m0 0-6-6m6 6-6 6" stroke="#4a1fe0" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* ---------- Resultado de campaña ---------- */}
      <g filter="url(#hv-shadow-sm)" className="animate-float" style={{ animationDelay: "1.2s" }}>
        <rect x="470" y="496" width="246" height="124" rx="22" fill="#0c0a1d" />
        <rect x="492" y="518" width="70" height="8" rx="4" fill="#ffffff" opacity="0.4" />
        <text
          x="492"
          y="566"
          fill="#ffffff"
          fontFamily="var(--font-sora), system-ui, sans-serif"
          fontSize="34"
          fontWeight="700"
          letterSpacing="-1"
        >
          4,8%
        </text>
        <g transform="translate(596 534)">
          <rect x="0" y="0" width="96" height="30" rx="15" fill="#cdf564" />
          <path d="M18 20l8-9 6 5 10-11" stroke="#0c0a1d" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="50" y="11" width="30" height="8" rx="4" fill="#0c0a1d" opacity="0.75" />
        </g>
        <rect x="492" y="586" width="188" height="7" rx="3.5" fill="#ffffff" opacity="0.22" />
        <rect x="492" y="602" width="120" height="7" rx="3.5" fill="#ffffff" opacity="0.14" />
      </g>
    </svg>
  );
}
