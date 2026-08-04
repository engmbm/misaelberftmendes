"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/engenharia", label: "Engenharia" },
  { href: "/coaching", label: "Coaching" },
  { href: "/docencia", label: "Docência" },
  { href: "/blog", label: "Blog" },
  { href: "/sobre", label: "Sobre" },
];

export function Header() {
  const [aberto, setAberto] = useState(false);
  const pathname = usePathname();

  // Fecha o menu quando muda de rota
  useEffect(() => {
    setAberto(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-rule/70 bg-canvas">
        <div className="container-x flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="Página inicial"
          >
            <img
              src="/logo.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[15px] sm:text-[16px] font-semibold tracking-tight">
                MBM
              </span>
              <span className="font-mono text-[9px] uppercase tracking-tag text-ink-muted">
                Misael Berft Mendes
              </span>
            </span>
          </Link>

          {/* Navegação desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-7 text-sm text-ink-soft">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contato"
                  className="rounded-md bg-tensao px-4 py-2 text-sm font-medium text-white transition hover:bg-tensao-lo"
                >
                  Solicitar orçamento
                </Link>
              </li>
            </ul>
          </nav>

          {/* Botão hamburger mobile */}
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-ink active:bg-black/5"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            aria-expanded={aberto}
            aria-controls="mobile-menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ pointerEvents: "none" }}
            >
              {aberto ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Drawer mobile fora do header sticky para evitar problemas de posicionamento */}
      {aberto && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-canvas"
        >
          <nav className="container-x py-6">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setAberto(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-ink active:bg-black/5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <Link
                  href="/contato"
                  onClick={() => setAberto(false)}
                  className="block rounded-md bg-tensao px-4 py-3 text-center text-base font-medium text-white"
                >
                  Solicitar orçamento
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/5551992387777"
                  target="_blank"
                  rel="noopener"
                  onClick={() => setAberto(false)}
                  className="mt-2 block rounded-md border border-ink/15 px-4 py-3 text-center text-base font-medium text-ink"
                >
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
