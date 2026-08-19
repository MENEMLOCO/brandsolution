import Link from "next/link";
import { cn } from "@/lib/utils";

/** Marca gráfica original de Brand Solutions. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={cn("size-10", className)} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="bs-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6a37f0" />
          <stop offset="100%" stopColor="#3712b0" />
        </linearGradient>
      </defs>
      <rect width="44" height="44" rx="13" fill="url(#bs-mark)" />
      <path
        d="M11 30.5 17.6 24l4.4 3.1L31 15"
        fill="none"
        stroke="#ffffff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32.2" cy="14.2" r="4" fill="#cdf564" />
      <path d="M11 36h13" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
  href?: string;
  /** Etiqueta accesible del enlace. */
  label?: string;
}

export function Logo({ tone = "light", className, href = "/", label = "Brand Solutions, ir al inicio" }: LogoProps) {
  const content = (
    <>
      <LogoMark className="size-9 shrink-0 transition-transform duration-300 group-hover:-rotate-6" />
      <span className="font-display text-[1.05rem] font-bold tracking-tight sm:text-[1.15rem]">
        <span className={tone === "light" ? "text-ink" : "text-white"}>Brand</span>{" "}
        <span className={tone === "light" ? "text-brand-600" : "text-signal-400"}>Solutions</span>
      </span>
    </>
  );

  return (
    <Link href={href} aria-label={label} className={cn("group inline-flex items-center gap-2.5", className)}>
      {content}
    </Link>
  );
}
