"use client";

import { useState, type FormEvent } from "react";
import { isValidEmail, submitForm } from "@/lib/forms";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Checkbox, Field, SelectField, TextareaField } from "./Field";

const interests = [
  { value: "cursos", label: "Quiero información sobre un curso" },
  { value: "programa", label: "Me interesa un programa" },
  { value: "empresa", label: "Capacitación para mi equipo" },
  { value: "servicios", label: "Necesito servicios de marketing" },
  { value: "otro", label: "Otra consulta" },
];

export function ContactForm({
  defaultInterest = "cursos",
  defaultMessage = "",
}: {
  defaultInterest?: string;
  defaultMessage?: string;
}) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    interest: defaultInterest,
    message: defaultMessage,
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const update = (key: keyof typeof values) => (value: string) =>
    setValues((current) => ({ ...current, [key]: value }));

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2) next.name = "Contanos tu nombre.";
    if (!isValidEmail(values.email)) next.email = "Ingresá un email válido.";
    if (values.message.trim().length < 10) next.message = "Contanos un poco más para poder ayudarte.";
    if (!consent) next.consent = "Necesitamos tu confirmación para poder responderte.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");
    try {
      await submitForm("contacto", { ...values, consent });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-3xl border border-signal-200 bg-signal-100/70 p-8">
        <span className="grid size-12 place-items-center rounded-full bg-signal-400 text-ink">
          <Icon name="check" className="size-6" />
        </span>
        <p className="mt-5 font-display text-xl font-bold tracking-tight">Recibimos tu mensaje</p>
        <p className="mt-2 leading-relaxed text-ink-3">
          Te vamos a responder dentro de las próximas 48 horas hábiles. Si tu consulta es urgente, escribinos por
          WhatsApp y lo resolvemos más rápido.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Nombre y apellido"
          name="name"
          autoComplete="name"
          placeholder="Cómo te llamás"
          value={values.name}
          onChange={(e) => update("name")(e.target.value)}
          error={errors.name}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="tu@email.com"
          value={values.email}
          onChange={(e) => update("email")(e.target.value)}
          error={errors.email}
          required
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Teléfono (opcional)"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Con código de área"
          value={values.phone}
          onChange={(e) => update("phone")(e.target.value)}
        />
        <SelectField
          label="¿En qué te podemos ayudar?"
          name="interest"
          options={interests}
          value={values.interest}
          onChange={(e) => update("interest")(e.target.value)}
        />
      </div>

      <TextareaField
        label="Contanos un poco más"
        name="message"
        placeholder="En qué estás trabajando, qué necesitás resolver y en qué plazo."
        value={values.message}
        onChange={(e) => update("message")(e.target.value)}
        error={errors.message}
        required
      />

      <Checkbox
        checked={consent}
        onChange={(e) => setConsent(e.target.checked)}
        label="Acepto que Brand Solutions use mis datos para responder esta consulta y enviarme información relacionada."
      />
      {errors.consent ? <p className="-mt-3 text-xs font-medium text-coral">{errors.consent}</p> : null}

      <Button type="submit" size="lg" icon="arrow-right" disabled={status === "loading"} className="sm:self-start">
        {status === "loading" ? "Enviando…" : "Enviar consulta"}
      </Button>

      {status === "error" ? (
        <p role="alert" className="text-sm font-medium text-coral">
          No pudimos enviar el mensaje. Probá otra vez o escribinos por email.
        </p>
      ) : null}
    </form>
  );
}
