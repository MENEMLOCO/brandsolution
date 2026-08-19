import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

/**
 * Set de íconos de línea propios, dibujados sobre una grilla de 24 px.
 * Se usan como decoración: por defecto quedan ocultos para lectores de
 * pantalla salvo que se pase un `title`.
 */
export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "arrow-left"
  | "check"
  | "check-circle"
  | "chevron-down"
  | "chevron-right"
  | "chevron-left"
  | "close"
  | "menu"
  | "star"
  | "quote"
  | "play"
  | "sparkles"
  | "bot"
  | "target"
  | "layers"
  | "calendar"
  | "chart-bar"
  | "chart-line"
  | "mail"
  | "megaphone"
  | "search"
  | "users"
  | "download"
  | "clock"
  | "award"
  | "lock"
  | "bag"
  | "layout"
  | "bulb"
  | "wand"
  | "gauge"
  | "workflow"
  | "book"
  | "pen"
  | "monitor"
  | "phone"
  | "shield"
  | "globe"
  | "zap"
  | "filter"
  | "plus"
  | "minus"
  | "pin"
  | "whatsapp"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "tiktok"
  | "compass"
  | "rocket"
  | "briefcase"
  | "list-check"
  | "refresh"
  | "infinity";

const paths: Record<IconName, React.ReactNode> = {
  "arrow-right": <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />,
  "arrow-up-right": <path d="M7 17 17 7m0 0H8.5M17 7v8.5" />,
  "arrow-left": <path d="M20 12H5m0 0 5.5-5.5M5 12l5.5 5.5" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.2 12.2 2.7 2.7 5-5.6" />
    </>
  ),
  "chevron-down": <path d="m6 9.5 6 6 6-6" />,
  "chevron-right": <path d="m9.5 6 6 6-6 6" />,
  "chevron-left": <path d="m14.5 6-6 6 6 6" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  menu: <path d="M4 8h16M4 16h11" />,
  star: <path d="m12 3.6 2.55 5.4 5.7.8-4.13 4.16.98 5.94L12 17.1l-5.1 2.8.98-5.94L3.75 9.8l5.7-.8z" />,
  quote: (
    <path d="M9.5 6C6.9 7.3 5.5 9.6 5.5 12.9V18h5.2v-5.4H8.3c0-1.9.6-3.3 2.2-4.3zm9 0c-2.6 1.3-4 3.6-4 6.9V18h5.2v-5.4h-2.4c0-1.9.6-3.3 2.2-4.3z" />
  ),
  play: <path d="M9 6.8v10.4l8.4-5.2z" />,
  sparkles: (
    <>
      <path d="M12 3.5 13.6 8l4.5 1.6-4.5 1.6L12 15.7l-1.6-4.5L5.9 9.6 10.4 8z" />
      <path d="M18.5 15.2l.8 2.1 2.2.8-2.2.8-.8 2.1-.8-2.1-2.2-.8 2.2-.8z" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="8" width="16" height="11" rx="3.5" />
      <path d="M12 4.2V8M9 13h.01M15 13h.01M9.8 16.2h4.4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  layers: <path d="m12 3.8 8.4 4.3-8.4 4.3-8.4-4.3zM4.2 12.6 12 16.6l7.8-4M4.2 16.6 12 20.6l7.8-4" />,
  calendar: (
    <>
      <rect x="3.8" y="5.4" width="16.4" height="14.4" rx="3" />
      <path d="M3.8 10h16.4M8.4 3.6v3.4M15.6 3.6v3.4M8 13.6h2.2M14 13.6h2.2M8 16.8h2.2" />
    </>
  ),
  "chart-bar": <path d="M4 20h16M7.4 20V12M12 20V6.6M16.6 20v-5.6" />,
  "chart-line": (
    <>
      <path d="M4 19.5h16" />
      <path d="m5.2 15.4 4-4.6 3.4 2.8 5.6-6.6" />
      <path d="M15.4 6.6h3v3" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.6" width="17" height="12.8" rx="3" />
      <path d="m4.6 8.4 6.3 4.4a2 2 0 0 0 2.2 0l6.3-4.4" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10.4v3.2a2 2 0 0 0 2 2h2l7.6 3.8V6.6L8 10.4H6a2 2 0 0 0-2 2z" />
      <path d="M18.6 9.4a4 4 0 0 1 0 5.2M8 15.6v3.2a1.6 1.6 0 0 0 3.2 0v-2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.6" />
      <path d="m16 16 4.2 4.2" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="8.6" r="3.4" />
      <path d="M3.8 19.4c.5-3.1 2.9-5 5.7-5s5.2 1.9 5.7 5" />
      <path d="M16 6.2a3.2 3.2 0 0 1 0 6M17.4 14.9c2 .6 3.3 2.2 3.6 4.5" />
    </>
  ),
  download: <path d="M12 4.2v10.4m0 0 3.6-3.6M12 14.6 8.4 11M4.6 17v1.4a1.6 1.6 0 0 0 1.6 1.6h11.6a1.6 1.6 0 0 0 1.6-1.6V17" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.4V12l3.2 2" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9.4" r="5.4" />
      <path d="m8.6 14 -1.4 6 4.8-2.4 4.8 2.4-1.4-6" />
    </>
  ),
  lock: (
    <>
      <rect x="4.8" y="10.2" width="14.4" height="9.6" rx="3" />
      <path d="M8.4 10.2V7.8a3.6 3.6 0 0 1 7.2 0v2.4" />
    </>
  ),
  bag: (
    <>
      <path d="M5.4 8h13.2l-1 11.2a1.8 1.8 0 0 1-1.8 1.6H8.2a1.8 1.8 0 0 1-1.8-1.6z" />
      <path d="M9 10V7a3 3 0 0 1 6 0v3" />
    </>
  ),
  layout: (
    <>
      <rect x="3.8" y="4.6" width="16.4" height="14.8" rx="3" />
      <path d="M3.8 9.6h16.4M9.6 9.6v9.8" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 16.4a5.4 5.4 0 1 1 6 0v1.8H9z" />
      <path d="M10 20.6h4" />
    </>
  ),
  wand: (
    <>
      <path d="m5 19 9.4-9.4M15.6 4.4l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" />
      <path d="M19.4 14.2l.6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6z" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 17a8.4 8.4 0 1 1 16 0" />
      <path d="m12 17 3.6-5.2" />
      <circle cx="12" cy="17" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  workflow: (
    <>
      <rect x="3.6" y="4.4" width="6.4" height="5.2" rx="2" />
      <rect x="14" y="14.4" width="6.4" height="5.2" rx="2" />
      <path d="M6.8 9.6v5a2.4 2.4 0 0 0 2.4 2.4H14" />
    </>
  ),
  book: (
    <>
      <path d="M4.4 5.2A2 2 0 0 1 6.4 3.4h12v14.4h-12a2 2 0 0 0-2 2z" />
      <path d="M4.4 17.8v1a2 2 0 0 0 2 2h12" />
    </>
  ),
  pen: <path d="M4.6 19.4h3.2L19 8.2a2.3 2.3 0 0 0-3.2-3.2L4.6 16.2zM14.6 6.4l3.2 3.2" />,
  monitor: (
    <>
      <rect x="3.4" y="4.6" width="17.2" height="11.6" rx="2.6" />
      <path d="M9.4 20h5.2M12 16.2V20" />
    </>
  ),
  phone: (
    <>
      <rect x="7.2" y="3" width="9.6" height="18" rx="2.8" />
      <path d="M10.8 17.8h2.4" />
    </>
  ),
  shield: <path d="M12 3.6 5.4 6.2v5.4c0 3.9 2.6 7.3 6.6 8.8 4-1.5 6.6-4.9 6.6-8.8V6.2z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M3.8 12h16.4M12 3.6c2.2 2.4 3.3 5.2 3.3 8.4S14.2 18 12 20.4C9.8 18 8.7 15.2 8.7 12s1.1-6 3.3-8.4z" />
    </>
  ),
  zap: <path d="M13.4 3.2 5.8 13.4h5.2l-.6 7.4 7.6-10.2h-5.2z" />,
  filter: <path d="M4 6h16l-6.2 7.2v5.4l-3.6 1.8v-7.2z" />,
  plus: <path d="M12 5.6v12.8M5.6 12h12.8" />,
  minus: <path d="M5.6 12h12.8" />,
  pin: (
    <>
      <path d="M12 21c3.6-4.2 5.4-7.2 5.4-9.4A5.4 5.4 0 0 0 6.6 11.6c0 2.2 1.8 5.2 5.4 9.4z" />
      <circle cx="12" cy="11.4" r="2.1" />
    </>
  ),
  whatsapp: (
    <path d="M4.2 20.2 5.6 16A7.6 7.6 0 1 1 8.6 19zM9.2 9.2c-.3.7-.1 1.6.5 2.5.8 1.2 1.9 2 3.2 2.4.9.3 1.5.1 1.9-.4l.4-.6-2-1-.6.7c-.8-.4-1.5-1.1-1.9-1.9l.7-.6-1-2z" />
  ),
  instagram: (
    <>
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.9" cy="7.1" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="3.4" />
      <path d="M8 10.4v6.2M8 7.6v.02M11.6 16.6v-6.2M11.6 12.8c0-1.4.9-2.4 2.2-2.4s2.2 1 2.2 2.4v3.8" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.8" y="5.6" width="18.4" height="12.8" rx="4" />
      <path d="M10.4 9.4v5.2l4.4-2.6z" />
    </>
  ),
  tiktok: (
    <path d="M14.2 3.4v9.9a3 3 0 1 1-2.6-3v-2.7a5.7 5.7 0 1 0 5.3 5.7V9.5a6.4 6.4 0 0 0 3.3.9V7.7a3.8 3.8 0 0 1-3.4-4.3z" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.4" />
      <path d="m14.8 9.2-1.4 4.2-4.2 1.4 1.4-4.2z" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3.4c2.8 2 4.4 5 4.4 8.6l-1.9 3.4h-5L7.6 12c0-3.6 1.6-6.6 4.4-8.6z" />
      <path d="M9.5 15.4c-1.6.8-2.4 2.3-2.4 4.4 2.1 0 3.6-.8 4.4-2.4M14.5 15.4c1.6.8 2.4 2.3 2.4 4.4-2.1 0-3.6-.8-4.4-2.4" />
      <circle cx="12" cy="10" r="1.4" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.4" y="7.4" width="17.2" height="12" rx="3" />
      <path d="M9 7.4V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.4M3.4 12.6h17.2" />
    </>
  ),
  "list-check": <path d="M9.4 7h10M9.4 12h10M9.4 17h10M4 6.6l1.2 1.2L7.2 5.6M4 16.6l1.2 1.2 2-2.2" />,
  refresh: <path d="M4.6 12a7.4 7.4 0 0 1 12.6-5.3M19.4 12a7.4 7.4 0 0 1-12.6 5.3M17.2 3.4v3.3h-3.3M6.8 20.6v-3.3h3.3" />,
  infinity: (
    <path d="M9 12c0 1.9-1.4 3.4-3.1 3.4S2.8 13.9 2.8 12s1.4-3.4 3.1-3.4S9 10.1 9 12zm0 0c0-1.9 1.4-3.4 3.1-3.4S15 10.1 15 12s1.4 3.4 3.1 3.4S21.2 13.9 21.2 12s-1.4-3.4-3.1-3.4S15 10.1 15 12" />
  ),
};

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  /** Texto accesible. Si se omite, el ícono se marca como decorativo. */
  title?: string;
  className?: string;
}

export function Icon({ name, title, className, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-6 shrink-0", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
