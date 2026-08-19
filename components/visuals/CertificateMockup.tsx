/** Mockup del certificado de participación. */
export function CertificateMockup({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 430"
      className={className}
      role="img"
      aria-label="Mockup del certificado de participación de Brand Solutions, con el nombre del curso, la carga horaria y un sello de validación."
    >
      <defs>
        <linearGradient id="cm-seal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6a37f0" />
          <stop offset="100%" stopColor="#3712b0" />
        </linearGradient>
        <filter id="cm-shadow" x="-25%" y="-25%" width="150%" height="160%">
          <feDropShadow dx="0" dy="22" stdDeviation="24" floodColor="#0c0a1d" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Hoja de atrás */}
      <g transform="rotate(-5 300 215)" opacity="0.55">
        <rect x="74" y="52" width="452" height="326" rx="18" fill="#ffffff" stroke="#e4e0d5" strokeWidth="2" />
      </g>

      {/* Certificado principal */}
      <g filter="url(#cm-shadow)" transform="rotate(2 300 215)">
        <rect x="62" y="42" width="476" height="346" rx="18" fill="#ffffff" />
        <rect x="62" y="42" width="476" height="10" rx="5" fill="#4a1fe0" />
        <rect x="82" y="62" width="436" height="306" rx="10" fill="none" stroke="#ebe8df" strokeWidth="2" />

        {/* Marca */}
        <rect x="110" y="90" width="30" height="30" rx="9" fill="url(#cm-seal)" />
        <path d="M117 112l4.6-4.6 3 2.2L131 100" stroke="#ffffff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="150" y="98" width="56" height="7" rx="3.5" fill="#0c0a1d" opacity="0.8" />
        <rect x="150" y="110" width="38" height="5" rx="2.5" fill="#918cab" opacity="0.7" />

        {/* Título */}
        <rect x="110" y="152" width="128" height="8" rx="4" fill="#cbbaff" />
        <rect x="110" y="176" width="300" height="16" rx="8" fill="#0c0a1d" opacity="0.85" />
        <rect x="110" y="204" width="216" height="16" rx="8" fill="#0c0a1d" opacity="0.45" />

        <rect x="110" y="244" width="180" height="7" rx="3.5" fill="#e4e0d5" />
        <rect x="110" y="260" width="240" height="7" rx="3.5" fill="#e4e0d5" />

        {/* Datos */}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${110 + i * 104} 296)`}>
            <rect x="0" y="0" width="34" height="6" rx="3" fill="#d5d0c2" />
            <rect x="0" y="14" width={i === 1 ? 62 : 48} height="8" rx="4" fill="#4a1fe0" opacity="0.7" />
          </g>
        ))}

        {/* Firma */}
        <path
          d="M112 348c14-14 22 8 34-4s16 6 30-6 20 8 32-2"
          fill="none"
          stroke="#0c0a1d"
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Sello */}
        <g transform="translate(432 268)">
          <circle cx="0" cy="0" r="46" fill="#f2eeff" />
          <circle cx="0" cy="0" r="36" fill="none" stroke="#4a1fe0" strokeWidth="2" strokeDasharray="4 5" opacity="0.6" />
          <circle cx="0" cy="0" r="26" fill="url(#cm-seal)" />
          <path d="M-9 1l6 6 12-14" stroke="#cdf564" strokeWidth="3.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
}
