import Link from "next/link";
import { footerNav, site } from "@/data/site";
import { LogoMark } from "@/components/visuals/Logo";
import { Icon, type IconName } from "@/components/ui/Icon";

const socialIcons: Record<string, IconName> = {
  Instagram: "instagram",
  LinkedIn: "linkedin",
  YouTube: "youtube",
  TikTok: "tiktok",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="container-bs py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Columna de marca */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Brand Solutions, ir al inicio">
              <LogoMark className="size-10" />
              <span className="font-display text-lg font-bold tracking-tight">
                Brand <span className="text-signal-400">Solutions</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/60">
              Marketing Digital, estrategia, herramientas e Inteligencia Artificial para aprender, aplicar y crecer.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {site.social.map((network) => (
                <li key={network.name}>
                  <a
                    href={network.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid size-11 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-signal-400 hover:bg-white/5 hover:text-signal-400"
                  >
                    <Icon name={socialIcons[network.name] ?? "globe"} className="size-5" title={network.name} />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-2 text-sm text-white/55">
              <a href={`mailto:${site.contact.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Icon name="mail" className="size-4" />
                {site.contact.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <Icon name="pin" className="size-4" />
                {site.contact.city}, {site.contact.country}
              </span>
            </div>
          </div>

          {/* Columnas de navegación */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {footerNav.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="font-display text-[0.72rem] font-bold tracking-[0.16em] text-white/40 uppercase">
                  {column.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.925rem] text-white/70 transition-colors duration-200 hover:text-signal-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © Brand Solutions {year}. Todos los derechos reservados.
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/terminos-y-condiciones" className="transition-colors hover:text-white">
              Términos y condiciones
            </Link>
            <Link href="/politica-de-privacidad" className="transition-colors hover:text-white">
              Política de privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
