import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Icon, type IconName } from "./Icon";

type Variant =
  | "primary"
  | "signal"
  | "dark"
  | "outline"
  | "ghost"
  | "light"
  | "outlineLight";

type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-50 active:translate-y-px";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-[0_14px_30px_-14px_rgba(74,31,224,0.7)] hover:bg-brand-700 hover:shadow-[0_18px_38px_-14px_rgba(74,31,224,0.75)] hover:-translate-y-0.5",
  signal:
    "bg-signal-400 text-ink shadow-[0_14px_30px_-16px_rgba(143,184,31,0.9)] hover:bg-signal-500 hover:-translate-y-0.5",
  dark: "bg-ink text-white hover:bg-ink-2 hover:-translate-y-0.5 shadow-[0_14px_30px_-16px_rgba(12,10,29,0.8)]",
  outline:
    "border border-line-2 bg-white text-ink hover:border-ink hover:bg-paper-2 hover:-translate-y-0.5",
  ghost: "text-ink-2 hover:bg-paper-2 hover:text-ink",
  light: "bg-white text-ink hover:bg-paper-2 hover:-translate-y-0.5 shadow-[0_14px_30px_-18px_rgba(0,0,0,0.6)]",
  outlineLight: "border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
};

const sizes: Record<Size, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-12 px-5.5 text-[0.95rem]",
  lg: "min-h-14 px-7 text-base sm:text-[1.0625rem]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: IconName;
  /** Posición del ícono respecto del texto. */
  iconPosition?: "start" | "end";
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

type AnchorProps = CommonProps & Omit<ComponentProps<typeof Link>, "className" | "children">;
type NativeButtonProps = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & { href?: undefined };

function content(children: ReactNode, icon?: IconName, iconPosition: "start" | "end" = "end") {
  if (!icon) return children;
  const glyph = (
    <Icon
      name={icon}
      className={cn(
        "size-[1.15em] transition-transform duration-200",
        icon === "arrow-right" && "group-hover/btn:translate-x-1",
        icon === "arrow-up-right" && "group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5",
        icon === "download" && "group-hover/btn:translate-y-0.5",
      )}
    />
  );
  return iconPosition === "start" ? (
    <>
      {glyph}
      {children}
    </>
  ) : (
    <>
      {children}
      {glyph}
    </>
  );
}

export function Button(props: AnchorProps | NativeButtonProps) {
  const {
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "end",
    fullWidth,
    className,
    children,
    ...rest
  } = props as CommonProps & { href?: string };

  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...anchorRest } = rest as ComponentProps<typeof Link>;
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {content(children, icon, iconPosition)}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ComponentProps<"button">)}>
      {content(children, icon, iconPosition)}
    </button>
  );
}
