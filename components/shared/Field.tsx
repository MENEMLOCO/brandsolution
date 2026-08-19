"use client";

import { useId, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const controlBase =
  "w-full rounded-xl border bg-white px-4 text-[0.95rem] text-ink transition-colors duration-200 placeholder:text-muted-2/80 focus:border-brand-500 focus:outline-none";

interface BaseProps {
  label: string;
  hint?: string;
  error?: string;
  tone?: "light" | "dark";
}

export function Field({
  label,
  hint,
  error,
  tone = "light",
  className,
  ...rest
}: BaseProps & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className={cn("text-sm font-medium", tone === "light" ? "text-ink-2" : "text-white/80")}
      >
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className={cn(
          controlBase,
          "h-12",
          error ? "border-coral" : "border-line-2",
          className,
        )}
        {...rest}
      />
      {hint && !error ? (
        <p id={`${id}-hint`} className={cn("text-xs", tone === "light" ? "text-muted-2" : "text-white/50")}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} className="text-xs font-medium text-coral">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function TextareaField({
  label,
  hint,
  error,
  tone = "light",
  className,
  ...rest
}: BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className={cn("text-sm font-medium", tone === "light" ? "text-ink-2" : "text-white/80")}
      >
        {label}
      </label>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(controlBase, "min-h-32 py-3", error ? "border-coral" : "border-line-2", className)}
        {...rest}
      />
      {hint && !error ? <p className="text-xs text-muted-2">{hint}</p> : null}
      {error ? (
        <p id={`${id}-error`} className="text-xs font-medium text-coral">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function SelectField({
  label,
  options,
  tone = "light",
  className,
  ...rest
}: BaseProps & {
  options: { value: string; label: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className={cn("text-sm font-medium", tone === "light" ? "text-ink-2" : "text-white/80")}
      >
        {label}
      </label>
      <select id={id} className={cn(controlBase, "h-12 border-line-2 pr-10", className)} {...rest}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function Checkbox({
  label,
  tone = "light",
  className,
  ...rest
}: { label: React.ReactNode; tone?: "light" | "dark" } & InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <input
        id={id}
        type="checkbox"
        className="mt-0.5 size-4.5 shrink-0 cursor-pointer rounded-sm accent-brand-600"
        {...rest}
      />
      <label
        htmlFor={id}
        className={cn(
          "cursor-pointer text-[0.8rem] leading-relaxed",
          tone === "light" ? "text-muted" : "text-white/60",
        )}
      >
        {label}
      </label>
    </div>
  );
}
