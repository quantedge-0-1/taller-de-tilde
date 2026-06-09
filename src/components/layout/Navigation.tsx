"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Scissors } from "lucide-react";

const links = [
  { href: "/", label: "Inicio", emoji: "🏠" },
  { href: "/escuela", label: "Escuela de Moda", emoji: "📚" },
  { href: "/maestros", label: "Grandes Maestros", emoji: "⭐" },
  { href: "/mundo", label: "Moda del Mundo", emoji: "🌍" },
  { href: "/taller", label: "Taller de Diseño", emoji: "🎨" },
  { href: "/tejido", label: "Tejido", emoji: "🧶" },
  { href: "/aprende", label: "Aprende Haciendo", emoji: "✨" },
  { href: "/rincon", label: "Mi Rincón", emoji: "💛" },
  { href: "/luna", label: "Luna IA", emoji: "🌙" },
  { href: "/oracion", label: "Versículo del Día", emoji: "✝️" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(237, 231, 246, 0.95)"
            : "rgba(237, 231, 246, 0.80)",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled
            ? "0 4px 24px -4px rgba(155, 136, 196, 0.18)"
            : "none",
          borderBottom: scrolled
            ? "1px solid rgba(152, 136, 196, 0.18)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 h-18 flex items-center justify-between" style={{ height: "4.5rem" }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" style={{ textDecoration: "none" }}>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #C4956A 0%, #9888C4 100%)",
              }}
            >
              <Scissors className="w-5 h-5 text-white" />
            </div>
            <div>
              <div
                className="font-serif leading-none"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#1C1410",
                  letterSpacing: "-0.01em",
                }}
              >
                el taller de Tilde
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  color: "#C4956A",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Donde cada puntada cuenta
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Navegación principal">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    padding: "0.45rem 0.85rem",
                    borderRadius: "9999px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    fontWeight: active ? 700 : 500,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    background: active
                      ? "linear-gradient(135deg, #C4956A20, #9888C420)"
                      : "transparent",
                    color: active ? "#8B5C2A" : "#2D2418",
                    border: active
                      ? "1px solid rgba(196, 149, 106, 0.30)"
                      : "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.background = "rgba(152, 136, 196, 0.10)";
                      e.currentTarget.style.color = "#6B5B9E";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#2D2418";
                    }
                  }}
                >
                  <span style={{ fontSize: "0.9rem" }}>{link.emoji}</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            className="xl:hidden flex items-center justify-center w-12 h-12 rounded-full transition-all"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            style={{
              background: "rgba(152, 136, 196, 0.12)",
              border: "1px solid rgba(152, 136, 196, 0.20)",
            }}
          >
            {open ? (
              <X className="w-5 h-5" style={{ color: "#6B5B9E" }} />
            ) : (
              <Menu className="w-5 h-5" style={{ color: "#6B5B9E" }} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-40 xl:hidden"
          onClick={() => setOpen(false)}
          style={{ background: "rgba(44, 26, 18, 0.4)", backdropFilter: "blur(4px)" }}
        />
      )}

      <div
        className="fixed top-0 right-0 bottom-0 z-40 xl:hidden overflow-y-auto"
        style={{
          width: "min(340px, 90vw)",
          background: "#EDE7F6",
          boxShadow: "-8px 0 40px rgba(107, 91, 158, 0.20)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          padding: "5.5rem 1.5rem 2rem",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#1C1410",
            marginBottom: "0.5rem",
          }}
        >
          el taller de Tilde
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            color: "#C4956A",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Donde cada puntada cuenta
        </div>

        <nav className="flex flex-col gap-2" aria-label="Menú móvil">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  padding: "1rem 1.25rem",
                  borderRadius: "1rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.0625rem",
                  fontWeight: active ? 700 : 500,
                  textDecoration: "none",
                  background: active
                    ? "linear-gradient(135deg, rgba(196,149,106,0.15), rgba(152,136,196,0.15))"
                    : "rgba(255,255,255,0.5)",
                  color: active ? "#8B5C2A" : "#2D2418",
                  border: active
                    ? "1px solid rgba(196,149,106,0.25)"
                    : "1px solid rgba(152,136,196,0.12)",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontSize: "1.4rem" }}>{link.emoji}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div
          style={{
            marginTop: "2.5rem",
            padding: "1.25rem",
            background: "rgba(255,255,255,0.6)",
            borderRadius: "1rem",
            border: "1px solid rgba(152,136,196,0.15)",
            fontFamily: "var(--font-serif)",
            fontSize: "1rem",
            color: "#8B7355",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          "Tu creatividad no tiene edad."
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: "4.5rem" }} />
    </>
  );
}
