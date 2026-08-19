"use client";

import { useState, type FormEvent } from "react";
import { isValidEmail, submitForm } from "@/lib/forms";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Checkbox, Field } from "./Field";

/** Formulario del recurso gratuito (lead magnet). */
export function LeadMagnetForm({ resource = "30 prompts de IA para Marketing Digital" }: { resource?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; consent?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "Contanos tu nombre.";
    if (!isValidEmail(email)) next.email = "Necesitamos un email válido para enviarte el material.";
    if (!consent) next.consent = "Necesitamos tu confirmación para poder escribirte.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");
    try {
      await submitForm("lead-magnet", { name, email, consent, resource });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-2xl border border-signal-200 bg-signal-100/70 p-7"
      >
        <span className="grid size-12 place-items-center rounded-full bg-signal-400 text-ink">
          <Icon name="check" className="size-6" />
        </span>
        <div>
          <p className="font-display text-lg font-bold tracking-tight">Listo, ya te lo enviamos</p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-3">
            Revisá tu casilla: el material llega en unos minutos. Si no aparece, mirá en correo no deseado y marcanos
            como remitente seguro.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <Field
        label="Nombre"
        name="name"
        autoComplete="given-name"
        placeholder="Cómo te llamás"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name}
        required
      />
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        inputMode="email"
        placeholder="tu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        required
      />
      <Checkbox
        checked={consent}
        onChange={(e) => setConsent(e.target.checked)}
        label="Quiero recibir el material y las novedades de Brand Solutions. Puedo darme de baja cuando quiera."
      />
      {errors.consent ? <p className="-mt-2 text-xs font-medium text-coral">{errors.consent}</p> : null}

      <Button type="submit" size="lg" fullWidth icon="download" disabled={status === "loading"}>
        {status === "loading" ? "Enviando…" : "Quiero mis prompts"}
      </Button>

      {status === "error" ? (
        <p role="alert" className="text-sm font-medium text-coral">
          No pudimos completar el envío. Probá de nuevo en unos segundos.
        </p>
      ) : null}

      <p className="text-xs text-muted-2">Descarga inmediata. Sin costo y sin tarjeta.</p>
    </form>
  );
}
