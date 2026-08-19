import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute -top-40 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-brand-100/70 blur-3xl" />
      </div>

      <div className="relative container-bs flex min-h-[calc(100dvh-18rem)] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-[5rem] leading-none font-extrabold tracking-tighter text-brand-600 sm:text-[7rem]">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          No encontramos esta página
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-muted">
          Puede que el enlace haya cambiado o que la página ya no exista. Estas son algunas opciones para seguir.
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button href="/cursos" size="lg" icon="arrow-right">
            Ver cursos
          </Button>
          <Button href="/" size="lg" variant="outline" icon="arrow-left" iconPosition="start">
            Volver al inicio
          </Button>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
          {[
            { href: "/recursos", label: "Recursos" },
            { href: "/blog", label: "Blog" },
            { href: "/servicios", label: "Servicios" },
            { href: "/contacto", label: "Contacto" },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink"
              >
                <Icon name="arrow-up-right" className="size-3.5" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
