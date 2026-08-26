/** Formularios: mismo diseño que la versión React, con validación en JS puro. */
import { icon } from "./render.mjs";
import { button } from "./ui.mjs";
import { esc } from "./util.mjs";

const CONTROL =
  "w-full rounded-xl border border-line-2 bg-white px-4 text-[0.95rem] text-ink transition-colors duration-200 placeholder:text-muted-2/80 focus:border-brand-500 focus:outline-none";

function field({ id, label, type = "text", name, placeholder, autocomplete, inputmode, required = false, hint }) {
  return `<div class="flex flex-col gap-1.5">
              <label for="${id}" class="text-sm font-medium text-ink-2">${esc(label)}</label>
              <input
                id="${id}"
                type="${type}"
                name="${name}"
                ${placeholder ? `placeholder="${esc(placeholder)}"` : ""}
                ${autocomplete ? `autocomplete="${autocomplete}"` : ""}
                ${inputmode ? `inputmode="${inputmode}"` : ""}
                ${required ? "required" : ""}
                class="${CONTROL} h-12"
              />
              ${hint ? `<p class="text-xs text-muted-2">${esc(hint)}</p>` : ""}
              <p data-error-for="${id}" hidden class="text-xs font-medium text-coral"></p>
            </div>`;
}

function checkbox({ id, name, label }) {
  return `<div class="flex items-start gap-3">
              <input id="${id}" type="checkbox" name="${name}" class="mt-0.5 size-4.5 shrink-0 cursor-pointer rounded-sm accent-brand-600" />
              <label for="${id}" class="cursor-pointer text-[0.8rem] leading-relaxed text-muted">${label}</label>
            </div>
            <p data-error-for="${id}" hidden class="-mt-2 text-xs font-medium text-coral"></p>`;
}

/* ------------------------------------------------------------------ */

/** Formulario del recurso gratuito. */
export function leadMagnetForm(resourceName = "30 prompts de IA para Marketing Digital", suffix = "lm") {
  return `<div data-form-wrapper>
            <form data-form="lead-magnet" data-resource="${esc(resourceName)}" novalidate class="flex flex-col gap-4">
              ${field({
                id: `${suffix}-nombre`,
                label: "Nombre",
                name: "name",
                placeholder: "Cómo te llamás",
                autocomplete: "given-name",
                required: true,
              })}
              ${field({
                id: `${suffix}-email`,
                label: "Email",
                name: "email",
                type: "email",
                placeholder: "tu@email.com",
                autocomplete: "email",
                inputmode: "email",
                required: true,
              })}
              ${checkbox({
                id: `${suffix}-consent`,
                name: "consent",
                label:
                  "Quiero recibir el material y las novedades de Brand Solutions. Puedo darme de baja cuando quiera.",
              })}

              ${button({ label: "Quiero mis prompts", type: "submit", size: "lg", fullWidth: true, icon: "download", attrs: "data-submit" })}

              <p data-form-error hidden role="alert" class="text-sm font-medium text-coral">
                No pudimos completar el envío. Probá de nuevo en unos segundos.
              </p>
              <p class="text-xs text-muted-2">Descarga inmediata. Sin costo y sin tarjeta.</p>
            </form>

            <div data-form-success hidden role="status" class="flex flex-col items-start gap-4 rounded-2xl border border-signal-200 bg-signal-100/70 p-7">
              <span class="grid size-12 place-items-center rounded-full bg-signal-400 text-ink">${icon("check", "size-6")}</span>
              <div>
                <p class="font-display text-lg font-bold tracking-tight">Listo, ya te lo enviamos</p>
                <p class="mt-1.5 text-sm leading-relaxed text-ink-3">
                  Revisá tu casilla: el material llega en unos minutos. Si no aparece, mirá en correo no deseado y
                  marcanos como remitente seguro.
                </p>
              </div>
            </div>
          </div>`;
}

/** Formulario de newsletter. */
export function newsletterForm({ tone = "dark", cta = "Sumarme", suffix = "nl" } = {}) {
  const input =
    tone === "dark"
      ? "border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-signal-400"
      : "border-line-2 bg-white text-ink placeholder:text-muted-2 focus:border-brand-500";

  return `<div data-form-wrapper class="w-full">
                  <form data-form="newsletter" novalidate class="w-full">
                    <div class="flex flex-col gap-3 sm:flex-row">
                      <div class="flex-1">
                        <label for="${suffix}-email" class="sr-only">Tu email</label>
                        <input
                          id="${suffix}-email"
                          type="email"
                          name="email"
                          inputmode="email"
                          autocomplete="email"
                          placeholder="tu@email.com"
                          required
                          class="h-14 w-full rounded-full border px-6 text-[0.95rem] transition-colors focus:outline-none ${input}"
                        />
                      </div>
                      ${button({
                        label: cta,
                        type: "submit",
                        size: "lg",
                        variant: tone === "dark" ? "signal" : "primary",
                        icon: "arrow-right",
                        className: "sm:px-8",
                        attrs: "data-submit",
                      })}
                    </div>
                    <p data-error-for="${suffix}-email" hidden class="mt-2 text-sm font-medium text-coral"></p>
                  </form>

                  <p data-form-success hidden role="status" class="inline-flex items-center gap-2.5 rounded-full px-5 py-3.5 text-sm font-semibold ${
                    tone === "dark" ? "bg-white/10 text-white" : "bg-signal-100 text-ink"
                  }">
                    ${icon("check-circle", "size-5 text-signal-400")}
                    Listo. Te sumaste a la newsletter.
                  </p>
                </div>`;
}

/** Formulario de contacto. */
export function contactForm() {
  const options = [
    ["cursos", "Quiero información sobre un curso"],
    ["programa", "Me interesa un programa"],
    ["empresa", "Capacitación para mi equipo"],
    ["servicios", "Necesito servicios de marketing"],
    ["otro", "Otra consulta"],
  ];

  return `<div data-form-wrapper>
              <form data-form="contacto" novalidate class="flex flex-col gap-5">
                <div class="grid gap-5 sm:grid-cols-2">
                  ${field({
                    id: "ct-nombre",
                    label: "Nombre y apellido",
                    name: "name",
                    placeholder: "Cómo te llamás",
                    autocomplete: "name",
                    required: true,
                  })}
                  ${field({
                    id: "ct-email",
                    label: "Email",
                    name: "email",
                    type: "email",
                    placeholder: "tu@email.com",
                    autocomplete: "email",
                    inputmode: "email",
                    required: true,
                  })}
                </div>

                <div class="grid gap-5 sm:grid-cols-2">
                  ${field({
                    id: "ct-telefono",
                    label: "Teléfono (opcional)",
                    name: "phone",
                    type: "tel",
                    placeholder: "Con código de área",
                    autocomplete: "tel",
                  })}
                  <div class="flex flex-col gap-1.5">
                    <label for="ct-interes" class="text-sm font-medium text-ink-2">¿En qué te podemos ayudar?</label>
                    <select id="ct-interes" name="interest" class="${CONTROL} h-12 pr-10">
                      ${options.map(([value, label]) => `<option value="${value}">${esc(label)}</option>`).join("\n                      ")}
                    </select>
                  </div>
                </div>

                <div class="flex flex-col gap-1.5">
                  <label for="ct-mensaje" class="text-sm font-medium text-ink-2">Contanos un poco más</label>
                  <textarea
                    id="ct-mensaje"
                    name="message"
                    required
                    placeholder="En qué estás trabajando, qué necesitás resolver y en qué plazo."
                    class="${CONTROL} min-h-32 py-3"
                  ></textarea>
                  <p data-error-for="ct-mensaje" hidden class="text-xs font-medium text-coral"></p>
                </div>

                ${checkbox({
                  id: "ct-consent",
                  name: "consent",
                  label:
                    "Acepto que Brand Solutions use mis datos para responder esta consulta y enviarme información relacionada.",
                })}

                ${button({ label: "Enviar consulta", type: "submit", size: "lg", icon: "arrow-right", className: "sm:self-start", attrs: "data-submit" })}

                <p data-form-error hidden role="alert" class="text-sm font-medium text-coral">
                  No pudimos enviar el mensaje. Probá otra vez o escribinos por email.
                </p>
              </form>

              <div data-form-success hidden role="status" class="rounded-3xl border border-signal-200 bg-signal-100/70 p-8">
                <span class="grid size-12 place-items-center rounded-full bg-signal-400 text-ink">${icon("check", "size-6")}</span>
                <p class="mt-5 font-display text-xl font-bold tracking-tight">Recibimos tu mensaje</p>
                <p class="mt-2 leading-relaxed text-ink-3">
                  Te vamos a responder dentro de las próximas 48 horas hábiles. Si tu consulta es urgente, escribinos
                  por WhatsApp y lo resolvemos más rápido.
                </p>
              </div>
            </div>`;
}
