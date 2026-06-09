"use client";

import Link from "next/link";
import { Scissors, Heart } from "lucide-react";

export default function Footer() {
  const links = [
    { href: "/escuela", label: "Escuela de Moda" },
    { href: "/maestros", label: "Grandes Maestros" },
    { href: "/mundo", label: "Moda del Mundo" },
    { href: "/taller", label: "Taller de Diseño" },
    { href: "/tejido", label: "Taller de Tejido" },
    { href: "/aprende", label: "Aprende Haciendo" },
    { href: "/rincon", label: "Mi Rincón" },
    { href: "/luna", label: "Luna IA" },
    { href: "/oracion", label: "Versículo del Día" },
  ];

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #1C1410 0%, #2D2418 100%)",
        color: "#EDE7F6",
        paddingTop: "3.5rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #C4956A 0%, #9888C4 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Scissors className="w-4 h-4 text-white" />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#EDE7F6",
                }}
              >
                el taller de Tilde
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                color: "#B8A088",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              Un atelier digital creado con amor, para que cada puntada cuente una historia única y maravillosa.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                background: "rgba(196, 149, 106, 0.15)",
                border: "1px solid rgba(196, 149, 106, 0.30)",
                borderRadius: "9999px",
                fontFamily: "var(--font-serif)",
                fontSize: "0.875rem",
                fontStyle: "italic",
                color: "#C4956A",
              }}
            >
              "Donde cada puntada cuenta una historia"
            </div>
          </div>

          {/* Links */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C4956A",
                marginBottom: "1.25rem",
              }}
            >
              Explorar
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {links.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "#B8A088",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#EDE7F6"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#B8A088"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C4956A",
                marginBottom: "1.25rem",
              }}
            >
              Crear
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {links.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "#B8A088",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#EDE7F6"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#B8A088"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C4956A",
                marginBottom: "1.25rem",
              }}
            >
              Inspiración de hoy
            </h3>
            <div
              style={{
                padding: "1.25rem",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "1rem",
                border: "1px solid rgba(152,136,196,0.20)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.0625rem",
                  fontStyle: "italic",
                  color: "#EDE7F6",
                  lineHeight: 1.6,
                  marginBottom: "0.75rem",
                }}
              >
                "La elegancia es la única belleza que nunca se desvanece."
              </p>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  color: "#9888C4",
                  fontWeight: 600,
                }}
              >
                — Audrey Hepburn
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(152,136,196,0.15)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: "#8B7355",
            }}
          >
            © 2025 el taller de Tilde · Creado con{" "}
            <Heart className="inline w-3.5 h-3.5 text-rose-400 fill-rose-400" />{" "}
            especialmente para ti
          </p>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "0.9375rem",
              fontStyle: "italic",
              color: "#8B7355",
            }}
          >
            Tu creatividad no tiene edad 💛
          </p>
        </div>
      </div>
    </footer>
  );
}
