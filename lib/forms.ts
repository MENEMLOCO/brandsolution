export type FormPayload = Record<string, string | boolean>;

/**
 * Envía los datos de un formulario.
 *
 * Configurá NEXT_PUBLIC_FORM_ENDPOINT con la URL de tu servicio
 * (por ejemplo el webhook de tu plataforma de email marketing o un
 * endpoint propio). Si la variable no está definida, el formulario
 * simula el envío para poder probar la interfaz.
 */
export async function submitForm(formName: string, payload: FormPayload): Promise<void> {
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 650));
    if (process.env.NODE_ENV === "development") {
      console.info(`[Brand Solutions] Formulario "${formName}" (modo demo)`, payload);
    }
    return;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form: formName, ...payload }),
  });

  if (!response.ok) {
    throw new Error(`No pudimos enviar el formulario (${response.status}).`);
  }
}

export const isValidEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
