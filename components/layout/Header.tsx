"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/visuals/Logo";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú al navegar.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquea el scroll del fondo mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled || open
            ? "border-b border-line bg-paper/92 backdrop-blur-xl"
            : "border-b border-transparent bg-paper/0",
        )}
      >
        <div className="container-bs">
          <div
            className={cn(
              "flex items-center justify-between gap-6 transition-all duration-300",
              scrolled ? "h-16" : "h-18",
            )}
          >
            <Logo />

            <nav aria-label="Navegación principal" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "relative rounded-full px-3.5 py-2 text-[0.925rem] font-medium transition-colors duration-200",
                        isActive(item.href)
                          ? "text-ink"
                          : "text-ink-3/85 hover:bg-paper-2 hover:text-ink",
                      )}
                    >
                      {item.label}
                      {isActive(item.href) ? (
                        <span
                          className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-brand-600"
                          aria-hidden="true"
                        />
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden items-center gap-2.5 lg:flex">
              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.925rem] font-medium text-ink-3/85 transition-colors duration-200 hover:bg-paper-2 hover:text-ink"
              >
                <Icon name="lock" className="size-4" />
                Iniciar sesión
              </Link>
              <Button href="/cursos" size="sm" icon="arrow-right" className="px-5">
                Ver cursos
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:border-ink lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="size-5" />
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          id="menu-movil"
          hidden={!open}
          className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden"
        >
          <div className="container-bs flex flex-col gap-8 py-8">
            <nav aria-label="Navegación móvil">
              <ul className="flex flex-col">
                {mainNav.map((item, index) => (
                  <li key={item.href} className="border-b border-line last:border-0">
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-4 font-display text-2xl font-semibold tracking-tight"
                      style={{ animationDelay: `${index * 40}ms` }}
                    >
                      {item.label}
                      <Icon name="arrow-up-right" className="size-5 text-muted-2" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-3">
              <Button href="/cursos" size="lg" fullWidth icon="arrow-right">
                Ver cursos
              </Button>
              <Button href="/login" variant="outline" size="lg" fullWidth icon="lock" iconPosition="start">
                Iniciar sesión
              </Button>
            </div>

            <p className="text-sm text-muted">
              ¿Necesitás ayuda para elegir?{" "}
              <Link href="/contacto" className="font-semibold text-brand-700 underline underline-offset-4">
                Escribinos
              </Link>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
