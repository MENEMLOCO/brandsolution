import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { LogoMark } from "@/components/visuals/Logo";

export const metadata: Metadata = buildMetadata({
  title: "Iniciar sesión",
  description: "Accedé a tus cursos, materiales y certificados de Brand Solutions.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute -top-40 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-brand-100/70 blur-3xl" />
      </div>

      <div className="relative container-bs flex min-h-[calc(100dvh-16rem)] items-center justify-center py-16 lg:py-24">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-line bg-white p-8 shadow-card sm:p-10">
            <LogoMark className="size-11" />
            <h1 className="mt-6 font-display text-[1.75rem] leading-tight font-extrabold tracking-tighter">
              Entrá a tu cuenta
            </h1>
            <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">
              Desde acá vas a poder acceder a tus cursos, materiales descargables y certificados.
            </p>

            {/*
              Formulario preparado para conectar con la plataforma educativa.
              Al integrar el LMS o el proveedor de autenticación, reemplazá este
              bloque por el flujo real de inicio de sesión.
            */}
            <form className="mt-8 flex flex-col gap-4" aria-describedby="login-aviso">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="login-email" className="text-sm font-medium text-ink-2">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="tu@email.com"
                  disabled
                  className="h-12 w-full rounded-xl border border-line-2 bg-paper-2 px-4 text-[0.95rem] text-muted-2 placeholder:text-muted-2/70"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="login-password" className="text-sm font-medium text-ink-2">
                  Contraseña
                </label>
                <input
                  id="login-password"
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  disabled
                  className="h-12 w-full rounded-xl border border-line-2 bg-paper-2 px-4 text-[0.95rem] text-muted-2 placeholder:text-muted-2/70"
                />
              </div>

              <Button type="button" size="lg" fullWidth icon="lock" iconPosition="start" disabled>
                Iniciar sesión
              </Button>
            </form>

            <p
              id="login-aviso"
              className="mt-6 flex items-start gap-2.5 rounded-2xl border border-dashed border-line-2 bg-paper-2/70 p-4 text-xs leading-relaxed text-muted"
            >
              <Icon name="bulb" className="mt-0.5 size-4 shrink-0 text-brand-600" />
              <span>
                El acceso a la plataforma todavía no está habilitado. La pantalla queda lista para conectarse con el
                sistema de cursos cuando se integre.
              </span>
            </p>
          </div>

          <p className="mt-6 text-center text-sm text-muted">
            ¿Todavía no tenés cursos?{" "}
            <Link href="/cursos" className="font-semibold text-brand-700 underline underline-offset-4">
              Ver el catálogo
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
