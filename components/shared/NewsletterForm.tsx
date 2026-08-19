"use client";

import { useState, type FormEvent } from "react";
import { isValidEmail, submitForm } from "@/lib/forms";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function NewsletterForm({
  tone = "dark",
  className,
  cta = "Sumarme",
}: {
  tone?: "light" | "dark";
  className?: string;
  cta?: string;
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setError("Ingresá un email válido.");
      return;
    }
    setError(null);
    setStatus("loading");
    try {
      await submitForm("newsletter", { email });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p
        role="status"
        className={cn(
          "inline-flex items-center gap-2.5 rounded-full px-5 py-3.5 text-sm font-semibold",
          tone === "dark" ? "bg-white/10 text-white" : "bg-signal-100 text-ink",
          className,
        )}
      >
        <Icon name="check-circle" className="size-5 text-signal-400" />
        Listo. Te sumaste a la newsletter.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn("w-full", className)}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Tu email
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            inputMode="email"
            autoComplete="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "newsletter-error" : undefined}
            className={cn(
              "h-14 w-full rounded-full border px-6 text-[0.95rem] transition-colors focus:outline-none",
              tone === "dark"
                ? "border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-signal-400"
                : "border-line-2 bg-white text-ink placeholder:text-muted-2 focus:border-brand-500",
              error && "border-coral",
            )}
            required
          />
        </div>
        <Button
          type="submit"
          size="lg"
          variant={tone === "dark" ? "signal" : "primary"}
          icon="arrow-right"
          disabled={status === "loading"}
          className="sm:px-8"
        >
          {status === "loading" ? "Enviando…" : cta}
        </Button>
      </div>

      {error ? (
        <p id="newsletter-error" className="mt-2 text-sm font-medium text-coral">
          {error}
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="mt-2 text-sm font-medium text-coral">
          No pudimos registrarte. Intentá otra vez en unos segundos.
        </p>
      ) : null}
    </form>
  );
}
