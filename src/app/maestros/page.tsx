"use client";

import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { designers } from "@/data/designers";
import { ChevronDown, ChevronUp, Palette, BookOpen, Star, Sparkles } from "lucide-react";

export default function MaestrosPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #E8C9A8 0%, #C4956A 50%, #8B5C2A 100%)",
          padding: "4rem 1.25rem 5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 30% 70%, rgba(255,255,255,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <AnimatedSection direction="up">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.85)" }}>
            Módulo 2
          </span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "#FEFEFE",
              margin: "0.5rem 0 1rem",
            }}
          >
            ⭐ Grandes Maestros de la Moda
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.90)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Ocho visionarios que cambiaron para siempre la forma en que el mundo entiende la belleza y la elegancia.
          </p>
        </AnimatedSection>
      </section>

      {/* Designers */}
      <section style={{ maxWidth: "56rem", margin: "0 auto", padding: "3.5rem 1.25rem 5rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {designers.map((d, i) => {
            const open = expanded === d.id;
            return (
              <AnimatedSection key={d.id} direction="up" delay={i * 0.06}>
                <div
                  style={{
                    background: "rgba(255,255,255,0.90)",
                    border: "1px solid rgba(152,136,196,0.20)",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    boxShadow: open
                      ? "0 16px 48px -8px rgba(155,136,196,0.22)"
                      : "0 4px 24px -4px rgba(155,136,196,0.12)",
                    transition: "box-shadow 0.35s ease",
                  }}
                >
                  {/* Header — always visible */}
                  <button
                    onClick={() => toggle(d.id)}
                    style={{
                      width: "100%",
                      padding: "1.75rem 2rem",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      textAlign: "left",
                    }}
                    aria-expanded={open}
                  >
                    {/* Emoji circle */}
                    <div
                      style={{
                        width: "3.75rem",
                        height: "3.75rem",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${d.color}22, ${d.accentColor}22)`,
                        border: `2px solid ${d.accentColor}40`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.75rem",
                        flexShrink: 0,
                      }}
                    >
                      {d.emoji}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                        <h2
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                            fontWeight: 700,
                            color: "#1C1410",
                          }}
                        >
                          {d.name}
                        </h2>
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.8125rem",
                            color: "#8B7355",
                          }}
                        >
                          {d.years}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: d.accentColor,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {d.origin}
                      </span>
                    </div>

                    <div style={{ flexShrink: 0, color: "#9888C4" }}>
                      {open
                        ? <ChevronUp className="w-5 h-5" />
                        : <ChevronDown className="w-5 h-5" />
                      }
                    </div>
                  </button>

                  {/* Philosophy — always visible */}
                  <div
                    style={{
                      padding: "0 2rem 1.5rem",
                      borderTop: "1px solid rgba(152,136,196,0.10)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.05rem",
                        fontStyle: "italic",
                        color: "#8B7355",
                        lineHeight: 1.65,
                        paddingTop: "1.25rem",
                      }}
                    >
                      "{d.philosophy}"
                    </p>
                  </div>

                  {/* Expanded content */}
                  {open && (
                    <div style={{ padding: "0 2rem 2rem" }}>
                      <div style={{ display: "grid", gap: "1.5rem" }}>

                        {/* Biography */}
                        <div
                          style={{
                            padding: "1.5rem",
                            background: "rgba(237,231,246,0.50)",
                            borderRadius: "1rem",
                            border: "1px solid rgba(152,136,196,0.15)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.875rem" }}>
                            <BookOpen className="w-4 h-4" style={{ color: "#9888C4" }} />
                            <span
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "#9888C4",
                              }}
                            >
                              Historia
                            </span>
                          </div>
                          <p
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.9375rem",
                              color: "#2D2418",
                              lineHeight: 1.75,
                              margin: 0,
                            }}
                          >
                            {d.biography}
                          </p>
                        </div>

                        {/* Key designs */}
                        <div
                          style={{
                            padding: "1.5rem",
                            background: `${d.accentColor}08`,
                            borderRadius: "1rem",
                            border: `1px solid ${d.accentColor}20`,
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.875rem" }}>
                            <Star className="w-4 h-4" style={{ color: d.accentColor }} />
                            <span
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: d.accentColor,
                              }}
                            >
                              Diseños icónicos
                            </span>
                          </div>
                          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {d.keyDesigns.map((design) => (
                              <li
                                key={design}
                                style={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: "0.6rem",
                                  fontFamily: "var(--font-sans)",
                                  fontSize: "0.9375rem",
                                  color: "#2D2418",
                                  lineHeight: 1.5,
                                }}
                              >
                                <span style={{ color: d.accentColor, flexShrink: 0, marginTop: "0.15rem" }}>✦</span>
                                {design}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Techniques */}
                        <div
                          style={{
                            padding: "1.5rem",
                            background: "rgba(255,255,255,0.70)",
                            borderRadius: "1rem",
                            border: "1px solid rgba(152,136,196,0.15)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.875rem" }}>
                            <Palette className="w-4 h-4" style={{ color: "#9888C4" }} />
                            <span
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "#9888C4",
                              }}
                            >
                              Técnicas características
                            </span>
                          </div>
                          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {d.techniques.map((t) => (
                              <li
                                key={t}
                                style={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: "0.6rem",
                                  fontFamily: "var(--font-sans)",
                                  fontSize: "0.9375rem",
                                  color: "#2D2418",
                                  lineHeight: 1.5,
                                }}
                              >
                                <span style={{ color: "#9888C4", flexShrink: 0, marginTop: "0.15rem" }}>◆</span>
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Legacy */}
                        <div
                          style={{
                            padding: "1.5rem",
                            background: "linear-gradient(135deg, rgba(152,136,196,0.08), rgba(196,149,106,0.08))",
                            borderRadius: "1rem",
                            border: "1px solid rgba(152,136,196,0.18)",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "var(--font-serif)",
                              fontSize: "1rem",
                              fontStyle: "italic",
                              color: "#2D2418",
                              lineHeight: 1.7,
                              margin: "0 0 0.5rem",
                            }}
                          >
                            🏛️ <strong>Legado:</strong> {d.legacy}
                          </p>
                        </div>

                        {/* Exercise */}
                        <div
                          style={{
                            padding: "1.5rem",
                            background: `${d.accentColor}10`,
                            borderRadius: "1rem",
                            border: `1.5px dashed ${d.accentColor}40`,
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.875rem" }}>
                            <Sparkles className="w-4 h-4" style={{ color: d.accentColor }} />
                            <span
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: d.accentColor,
                              }}
                            >
                              Ejercicio creativo para ti
                            </span>
                          </div>
                          <p
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.9375rem",
                              color: "#2D2418",
                              lineHeight: 1.75,
                              margin: 0,
                            }}
                          >
                            {d.exercise}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
    </div>
  );
}
