"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { BookOpen, Star, Globe, Palette, Scissors, Sparkles, Heart, MessageCircle, ChevronRight, Sun, Moon } from "lucide-react";
import { getVersiculoDelDia } from "@/data/versiculos";

const modules = [
  {
    href: "/escuela",
    emoji: "📚",
    title: "Escuela de Moda",
    description: "Aprende costura, patronaje y confección desde cero con lecciones claras y paso a paso.",
    color: "#9888C4",
    bg: "rgba(152, 136, 196, 0.10)",
    border: "rgba(152, 136, 196, 0.25)",
    badge: "8 cursos",
  },
  {
    href: "/maestros",
    emoji: "⭐",
    title: "Grandes Maestros",
    description: "Descubre la historia, filosofía y técnicas de los 8 diseñadores más influyentes del mundo.",
    color: "#C4956A",
    bg: "rgba(196, 149, 106, 0.10)",
    border: "rgba(196, 149, 106, 0.25)",
    badge: "8 maestros",
  },
  {
    href: "/mundo",
    emoji: "🌍",
    title: "Moda del Mundo",
    description: "Viaja a París, Milán, Londres, Nueva York y Tokio y descubre su cultura de moda única.",
    color: "#6B5B9E",
    bg: "rgba(107, 91, 158, 0.10)",
    border: "rgba(107, 91, 158, 0.22)",
    badge: "5 ciudades",
  },
  {
    href: "/taller",
    emoji: "🎨",
    title: "Taller de Diseño",
    description: "Crea y personaliza tus propias prendas con nuestro constructor visual interactivo.",
    color: "#9888C4",
    bg: "rgba(152, 136, 196, 0.10)",
    border: "rgba(152, 136, 196, 0.25)",
    badge: "Diseño libre",
  },
  {
    href: "/tejido",
    emoji: "🧶",
    title: "Taller de Tejido",
    description: "Desde tus primeros puntos hasta prendas completas. Manual y con máquina, para todos los niveles.",
    color: "#C4956A",
    bg: "rgba(196, 149, 106, 0.10)",
    border: "rgba(196, 149, 106, 0.25)",
    badge: "3 niveles",
  },
  {
    href: "/aprende",
    emoji: "✨",
    title: "Aprende Haciendo",
    description: "Tutoriales interactivos paso a paso con proyectos reales que puedes completar en casa.",
    color: "#6B5B9E",
    bg: "rgba(107, 91, 158, 0.10)",
    border: "rgba(107, 91, 158, 0.22)",
    badge: "5 proyectos",
  },
  {
    href: "/rincon",
    emoji: "💛",
    title: "Mi Rincón",
    description: "Tu espacio personal para guardar diseños, notas, colecciones y todo lo que te inspira.",
    color: "#C4956A",
    bg: "rgba(196, 149, 106, 0.10)",
    border: "rgba(196, 149, 106, 0.25)",
    badge: "Tu espacio",
  },
  {
    href: "/luna",
    emoji: "🌙",
    title: "Luna, tu asistente",
    description: "Chatea con Luna, tu profesora virtual. Resuelve dudas, aprende técnicas y recibe inspiración.",
    color: "#9888C4",
    bg: "rgba(152, 136, 196, 0.10)",
    border: "rgba(152, 136, 196, 0.25)",
    badge: "IA disponible",
  },
  {
    href: "/oracion",
    emoji: "✝️",
    title: "Versículo del Día",
    description: "Un versículo bíblico profundo cada mañana a las 6:00 hs y cada tarde a las 18:00 hs.",
    color: "#C4956A",
    bg: "rgba(196, 149, 106, 0.10)",
    border: "rgba(196, 149, 106, 0.25)",
    badge: "Fe y esperanza",
  },
];

export default function HomePage() {
  const [devocional, setDevocional] = useState<ReturnType<typeof getVersiculoDelDia> | null>(null);
  const [versiculoRevelado, setVersiculoRevelado] = useState(false);
  const [stats, setStats] = useState([
    { value: "8", label: "Cursos activos", emoji: "📖" },
    { value: "0", label: "Diseños guardados", emoji: "💾" },
    { value: "0", label: "Notas creadas", emoji: "📝" },
    { value: "∞", label: "Posibilidades creativas", emoji: "✨" },
  ]);

  useEffect(() => {
    const data = getVersiculoDelDia();
    setDevocional(data);
    const clave = `oracion_revelado_${data.versiculo.id}_${data.sesion}`;
    setVersiculoRevelado(localStorage.getItem(clave) === "1");
    const diseños = JSON.parse(localStorage.getItem("rincon_designs") || "[]").length;
    const notas = JSON.parse(localStorage.getItem("rincon_notes") || "[]").length;
    setStats([
      { value: "8", label: "Cursos activos", emoji: "📖" },
      { value: String(diseños), label: "Diseños guardados", emoji: "💾" },
      { value: String(notas), label: "Notas creadas", emoji: "📝" },
      { value: "∞", label: "Posibilidades creativas", emoji: "✨" },
    ]);
  }, []);

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(160deg, #C8BDE0 0%, #9888C4 55%, #6B5B9E 100%)",
          padding: "5rem 1.25rem 6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute", top: "-6rem", right: "-6rem",
            width: "28rem", height: "28rem", borderRadius: "50%",
            background: "rgba(255,255,255,0.07)", pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute", bottom: "-4rem", left: "-4rem",
            width: "18rem", height: "18rem", borderRadius: "50%",
            background: "rgba(255,255,255,0.05)", pointerEvents: "none",
          }}
        />

        <div className="max-w-4xl mx-auto relative">
          <AnimatedSection direction="up" delay={0.1}>
            <div
              style={{
                background: "rgba(255,255,255,0.18)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.30)",
                borderRadius: "2rem",
                padding: "clamp(1.75rem,5vw,3rem)",
                marginBottom: "2.5rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💛</div>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 5vw, 3.2rem)",
                  fontWeight: 700,
                  color: "#FEFEFE",
                  marginBottom: "1.25rem",
                  lineHeight: 1.2,
                }}
              >
                Bienvenida, Tilde
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(1rem, 2.5vw, 1.175rem)",
                  color: "rgba(255,255,255,0.92)",
                  lineHeight: 1.75,
                  maxWidth: "580px",
                  margin: "0 auto 1rem",
                }}
              >
                Este espacio fue creado especialmente para ti. Aquí podrás descubrir diseños maravillosos, aprender nuevas técnicas, desarrollar tu creatividad y transformar cada idea en una creación única.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.25rem",
                  fontStyle: "italic",
                  color: "#F5E6D0",
                  fontWeight: 500,
                }}
              >
                Tu creatividad no tiene edad. ✨
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.25}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "1rem",
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: "1.25rem",
                    padding: "1.25rem 1rem",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "1.75rem", marginBottom: "0.3rem" }}>{s.emoji}</div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "#FEFEFE",
                      lineHeight: 1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.80)",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Versículo del Día ───────────────────────────── */}
      {devocional && (
        <section style={{ padding: "3.5rem 1.25rem 0" }}>
          <AnimatedSection direction="up">
            <Link
              href="/oracion"
              className="max-w-4xl mx-auto block"
              style={{ textDecoration: "none" }}
            >
              {versiculoRevelado ? (
                /* ── Versículo ya revelado: muestra vista previa ── */
                <div
                  style={{
                    background: devocional.sesion === "mañana"
                      ? "linear-gradient(135deg, #FFF8E7 0%, #FFE4A0 60%, #F5C87A 100%)"
                      : "linear-gradient(135deg, #1A1035 0%, #2D1B69 60%, #4A2080 100%)",
                    borderRadius: "2rem",
                    padding: "clamp(1.75rem,4vw,2.5rem) clamp(1.75rem,4vw,3rem)",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "2rem",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: devocional.sesion === "mañana"
                      ? "0 8px 40px -8px rgba(196,149,106,0.30)"
                      : "0 8px 40px -8px rgba(107,91,158,0.40)",
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      position: "absolute", top: "-3rem", right: "-3rem",
                      width: "14rem", height: "14rem", borderRadius: "50%",
                      background: devocional.sesion === "mañana"
                        ? "rgba(255,220,100,0.25)"
                        : "rgba(152,136,196,0.15)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      width: "4rem", height: "4rem", borderRadius: "50%", flexShrink: 0,
                      background: devocional.sesion === "mañana" ? "rgba(196,149,106,0.25)" : "rgba(152,136,196,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: `2px solid ${devocional.sesion === "mañana" ? "rgba(196,149,106,0.35)" : "rgba(152,136,196,0.35)"}`,
                    }}
                  >
                    {devocional.sesion === "mañana"
                      ? <Sun className="w-6 h-6" style={{ color: "#C4956A" }} />
                      : <Moon className="w-6 h-6" style={{ color: "#9888C4" }} />}
                  </div>
                  <div style={{ flex: "1 1 260px", position: "relative" }}>
                    <div style={{
                      fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700,
                      letterSpacing: "0.1em", textTransform: "uppercase" as const,
                      color: devocional.sesion === "mañana" ? "#C4956A" : "#9888C4",
                      marginBottom: "0.5rem",
                    }}>
                      ✝️ Versículo del día · {devocional.versiculo.referencia}
                    </div>
                    <p style={{
                      fontFamily: "var(--font-serif)", fontSize: "clamp(1rem, 2.3vw, 1.15rem)",
                      fontStyle: "italic", color: devocional.sesion === "mañana" ? "#4A3000" : "#EDE7F6",
                      lineHeight: 1.65, margin: "0 0 0.5rem",
                      overflow: "hidden", display: "-webkit-box",
                      WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const,
                    }}>
                      "{devocional.versiculo.texto}"
                    </p>
                    <span style={{
                      fontFamily: "var(--font-sans)", fontSize: "0.8rem", fontWeight: 500,
                      color: devocional.sesion === "mañana" ? "rgba(74,48,0,0.60)" : "rgba(237,231,246,0.55)",
                    }}>
                      {devocional.versiculo.reflexion}
                    </span>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: "0.5rem",
                      padding: "0.8rem 1.5rem",
                      background: devocional.sesion === "mañana" ? "rgba(196,149,106,0.20)" : "rgba(152,136,196,0.25)",
                      border: `2px solid ${devocional.sesion === "mañana" ? "rgba(196,149,106,0.40)" : "rgba(152,136,196,0.40)"}`,
                      borderRadius: "9999px", fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem", fontWeight: 700,
                      color: devocional.sesion === "mañana" ? "#8B5C2A" : "#C8BDE0",
                    }}>
                      Leer completo
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              ) : (
                /* ── Versículo sellado: invita a revelar ── */
                <div
                  style={{
                    background: devocional.sesion === "mañana"
                      ? "linear-gradient(135deg, #FFF8E7 0%, #FFE4A0 60%, #F5C87A 100%)"
                      : "linear-gradient(135deg, #1A1035 0%, #2D1B69 60%, #4A2080 100%)",
                    borderRadius: "2rem",
                    padding: "clamp(2rem,5vw,3rem) clamp(1.75rem,4vw,3rem)",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "2rem",
                    position: "relative",
                    overflow: "hidden",
                    border: `2px dashed ${devocional.sesion === "mañana" ? "rgba(196,149,106,0.50)" : "rgba(152,136,196,0.55)"}`,
                    boxShadow: devocional.sesion === "mañana"
                      ? "0 8px 40px -8px rgba(196,149,106,0.25)"
                      : "0 8px 40px -8px rgba(107,91,158,0.35)",
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      position: "absolute", top: "-3rem", right: "-3rem",
                      width: "14rem", height: "14rem", borderRadius: "50%",
                      background: devocional.sesion === "mañana" ? "rgba(255,220,100,0.20)" : "rgba(152,136,196,0.12)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Cruz pulsante */}
                  <div style={{
                    width: "4rem", height: "4rem", borderRadius: "50%", flexShrink: 0,
                    background: devocional.sesion === "mañana" ? "rgba(196,149,106,0.20)" : "rgba(152,136,196,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.75rem",
                    animation: "sello-pulso 2.8s ease-in-out infinite",
                    border: `2px solid ${devocional.sesion === "mañana" ? "rgba(196,149,106,0.40)" : "rgba(152,136,196,0.45)"}`,
                  }}>
                    ✝️
                  </div>
                  {/* Texto sellado */}
                  <div style={{ flex: "1 1 220px" }}>
                    <div style={{
                      fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700,
                      letterSpacing: "0.1em", textTransform: "uppercase" as const,
                      color: devocional.sesion === "mañana" ? "#C4956A" : "#9888C4",
                      marginBottom: "0.5rem",
                    }}>
                      ✝️ Versículo de {devocional.sesion === "mañana" ? "la mañana" : "la tarde"}
                    </div>
                    <p style={{
                      fontFamily: "var(--font-serif)", fontSize: "clamp(1rem, 2.3vw, 1.2rem)",
                      fontStyle: "italic", fontWeight: 600,
                      color: devocional.sesion === "mañana" ? "#4A3000" : "#EDE7F6",
                      lineHeight: 1.5, margin: "0 0 0.4rem",
                    }}>
                      Tu palabra del día te espera sellada
                    </p>
                    <span style={{
                      fontFamily: "var(--font-sans)", fontSize: "0.82rem", fontWeight: 500,
                      color: devocional.sesion === "mañana" ? "rgba(74,48,0,0.55)" : "rgba(237,231,246,0.55)",
                    }}>
                      Toca para ir a revelarla
                    </span>
                  </div>
                  {/* CTA */}
                  <div style={{ flexShrink: 0 }}>
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: "0.5rem",
                      padding: "0.8rem 1.5rem",
                      background: devocional.sesion === "mañana" ? "rgba(196,149,106,0.22)" : "rgba(152,136,196,0.28)",
                      border: `2px solid ${devocional.sesion === "mañana" ? "rgba(196,149,106,0.45)" : "rgba(152,136,196,0.45)"}`,
                      borderRadius: "9999px", fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem", fontWeight: 700,
                      color: devocional.sesion === "mañana" ? "#8B5C2A" : "#C8BDE0",
                    }}>
                      👆 Revelar
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              )}
            </Link>
          </AnimatedSection>
        </section>
      )}

      {/* ── Modules ─────────────────────────────────────── */}
      <section style={{ maxWidth: "75rem", margin: "0 auto", padding: "5rem 1.25rem" }}>
        <AnimatedSection direction="up">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">Tu mundo creativo</span>
            <div className="section-divider" style={{ margin: "0.75rem auto" }} />
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#1C1410",
              }}
            >
              ¿Qué quieres explorar hoy?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                color: "#8B7355",
                maxWidth: "520px",
                margin: "0.875rem auto 0",
              }}
            >
              Cada módulo es una puerta a un universo de creatividad y aprendizaje diseñado especialmente para ti.
            </p>
          </div>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {modules.map((mod, i) => (
            <AnimatedSection key={mod.href} direction="up" delay={i * 0.07}>
              <Link href={mod.href} className="card-module" style={{ height: "100%", display: "block" }}>
                <div style={{ padding: "1.75rem", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "3.25rem",
                      height: "3.25rem",
                      borderRadius: "1rem",
                      background: mod.bg,
                      border: `1px solid ${mod.border}`,
                      fontSize: "1.5rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {mod.emoji}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#1C1410",
                      }}
                    >
                      {mod.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: mod.color }} />
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "#8B7355",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem",
                      flex: 1,
                    }}
                  >
                    {mod.description}
                  </p>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "0.3rem 0.85rem",
                      background: mod.bg,
                      color: mod.color,
                      border: `1px solid ${mod.border}`,
                      borderRadius: "9999px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase" as const,
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {mod.badge}
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Luna Banner ───────────────────────────────────── */}
      <section style={{ padding: "0 1.25rem 5rem" }}>
        <AnimatedSection direction="up">
          <div
            className="max-w-3xl mx-auto"
            style={{
              background: "linear-gradient(135deg, #9888C4 0%, #6B5B9E 100%)",
              borderRadius: "2rem",
              padding: "clamp(1.75rem,5vw,2.5rem) clamp(1.75rem,5vw,3rem)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "2rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute", top: "-3rem", right: "-3rem",
                width: "12rem", height: "12rem", borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
              }}
            />
            <div style={{ flex: "1 1 240px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🌙</div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem,3.5vw,1.9rem)",
                  fontWeight: 700,
                  color: "#FEFEFE",
                  marginBottom: "0.75rem",
                }}
              >
                Hola, soy Luna 💜
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.90)",
                  lineHeight: 1.65,
                }}
              >
                Soy tu profesora virtual, paciente y amable. Estoy aquí para ayudarte a aprender técnicas, resolver dudas y motivarte en cada paso de tu camino creativo.
              </p>
            </div>
            <div>
              <Link
                href="/luna"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "1rem 2rem",
                  background: "rgba(255,255,255,0.20)",
                  border: "2px solid rgba(255,255,255,0.40)",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#FEFEFE",
                  textDecoration: "none",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.3s ease",
                }}
              >
                Hablar con Luna
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Quote ─────────────────────────────────────────── */}
      <section
        style={{
          background: "rgba(255,255,255,0.55)",
          borderTop: "1px solid rgba(152,136,196,0.15)",
          borderBottom: "1px solid rgba(152,136,196,0.15)",
          padding: "4rem 1.25rem",
          textAlign: "center",
        }}
      >
        <AnimatedSection direction="up">
          <span className="section-label" style={{ marginBottom: "1rem", display: "block" }}>
            Pensamiento del día
          </span>
          <blockquote
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#2D2418",
              maxWidth: "680px",
              margin: "0 auto 1.25rem",
              lineHeight: 1.4,
            }}
          >
            "La moda pasa, el estilo permanece."
          </blockquote>
          <cite
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              color: "#9888C4",
              fontStyle: "normal",
              fontWeight: 600,
            }}
          >
            — Coco Chanel
          </cite>
        </AnimatedSection>
      </section>
    </div>
  );
}
