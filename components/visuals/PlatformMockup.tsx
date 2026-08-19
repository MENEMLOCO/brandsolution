/**
 * Mockup de la plataforma educativa: notebook con el reproductor de clases
 * y celular con el listado de módulos.
 */
export function PlatformMockup({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 720 480"
      className={className}
      role="img"
      aria-label="Mockup de la plataforma de Brand Solutions: una notebook reproduciendo una clase con su temario y un celular mostrando el avance del curso."
    >
      <defs>
        <linearGradient id="pm-screen" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#1d0a5e" />
          <stop offset="100%" stopColor="#0c0a1d" />
        </linearGradient>
        <linearGradient id="pm-video" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6a37f0" />
          <stop offset="100%" stopColor="#19c6ea" />
        </linearGradient>
        <filter id="pm-shadow" x="-25%" y="-25%" width="150%" height="160%">
          <feDropShadow dx="0" dy="24" stdDeviation="26" floodColor="#0c0a1d" floodOpacity="0.2" />
        </filter>
        <clipPath id="pm-video-clip">
          <rect x="112" y="86" width="290" height="164" rx="12" />
        </clipPath>
      </defs>

      {/* Notebook */}
      <g filter="url(#pm-shadow)">
        <rect x="86" y="46" width="474" height="316" rx="18" fill="#0c0a1d" />
        <rect x="98" y="58" width="450" height="292" rx="10" fill="url(#pm-screen)" />

        {/* Barra de la aplicación */}
        <rect x="98" y="58" width="450" height="34" rx="10" fill="#ffffff" opacity="0.06" />
        <circle cx="118" cy="75" r="4" fill="#ff6a45" />
        <circle cx="132" cy="75" r="4" fill="#ffb020" />
        <circle cx="146" cy="75" r="4" fill="#cdf564" />
        <rect x="168" y="71" width="96" height="8" rx="4" fill="#ffffff" opacity="0.22" />
        <rect x="486" y="67" width="44" height="16" rx="8" fill="#4a1fe0" />

        {/* Reproductor */}
        <g clipPath="url(#pm-video-clip)">
          <rect x="112" y="86" width="290" height="164" fill="url(#pm-video)" />
          <circle cx="380" cy="108" r="70" fill="#cdf564" opacity="0.28" />
          <path d="M112 214c34-16 52-46 84-46s44 30 72 22 48-24 78-16v76H112z" fill="#0c0a1d" opacity="0.32" />
        </g>
        <circle cx="257" cy="168" r="28" fill="#ffffff" opacity="0.95" />
        <path d="M249 156l20 12-20 12z" fill="#4a1fe0" />

        {/* Barra de progreso */}
        <rect x="112" y="262" width="290" height="6" rx="3" fill="#ffffff" opacity="0.18" />
        <rect x="112" y="262" width="176" height="6" rx="3" fill="#cdf564" />
        <rect x="112" y="282" width="150" height="9" rx="4.5" fill="#ffffff" opacity="0.6" />
        <rect x="112" y="302" width="210" height="7" rx="3.5" fill="#ffffff" opacity="0.24" />

        {/* Temario lateral */}
        <rect x="418" y="86" width="116" height="224" rx="12" fill="#ffffff" opacity="0.07" />
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(432 ${102 + i * 42})`}>
            <circle cx="8" cy="8" r="8" fill={i < 2 ? "#cdf564" : "#ffffff"} fillOpacity={i < 2 ? 1 : 0.16} />
            {i < 2 ? (
              <path d="M4.5 8l2.5 2.5L12 5.5" stroke="#0c0a1d" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            ) : null}
            <rect x="24" y="2" width={i === 4 ? 44 : 66} height="6" rx="3" fill="#ffffff" opacity="0.45" />
            <rect x="24" y="13" width="34" height="5" rx="2.5" fill="#ffffff" opacity="0.2" />
          </g>
        ))}

        {/* Base */}
        <rect x="46" y="362" width="554" height="16" rx="8" fill="#171334" />
        <rect x="284" y="366" width="78" height="8" rx="4" fill="#0c0a1d" />
      </g>

      {/* Celular */}
      <g filter="url(#pm-shadow)">
        <rect x="520" y="152" width="164" height="308" rx="30" fill="#0c0a1d" />
        <rect x="528" y="160" width="148" height="292" rx="24" fill="#fcfbf8" />
        <rect x="576" y="170" width="52" height="10" rx="5" fill="#0c0a1d" />

        <rect x="546" y="196" width="70" height="9" rx="4.5" fill="#0c0a1d" opacity="0.8" />
        <rect x="546" y="213" width="46" height="7" rx="3.5" fill="#918cab" opacity="0.6" />

        <rect x="546" y="234" width="112" height="62" rx="12" fill="#e5dcff" />
        <path d="M594 258l18 11-18 11z" fill="#4a1fe0" />

        <rect x="546" y="308" width="112" height="6" rx="3" fill="#ebe8df" />
        <rect x="546" y="308" width="72" height="6" rx="3" fill="#4a1fe0" />

        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(546 ${330 + i * 38})`}>
            <rect x="0" y="0" width="112" height="30" rx="10" fill="#f4f2ec" />
            <circle cx="17" cy="15" r="7" fill={i === 0 ? "#cdf564" : "#e4e0d5"} />
            <rect x="32" y="11" width={i === 2 ? 40 : 60} height="7" rx="3.5" fill="#d5d0c2" />
          </g>
        ))}
      </g>
    </svg>
  );
}
