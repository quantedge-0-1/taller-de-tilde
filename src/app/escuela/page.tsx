"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { courses, courseCategories } from "@/data/courses";
import { Clock, BookOpen, ChevronRight, Layers } from "lucide-react";

const levelColor: Record<string, string> = {
  Principiante: "#22c55e",
  Intermedio: "#f59e0b",
  Avanzado: "#9888C4",
};

export default function EscuelaPage() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? courses : courses.filter((c) => c.category === active);

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #C8BDE0 0%, #9888C4 100%)",
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
            background: "radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <AnimatedSection direction="up">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.85)" }}>
            Módulo 1
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
            📚 Escuela de Moda
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.90)",
              maxWidth: "540px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Todos los conocimientos que necesitas para crear prendas increíbles, desde las bases hasta la alta costura.
          </p>
        </AnimatedSection>
      </section>

      {/* Filters */}
      <section
        style={{
          background: "rgba(255,255,255,0.70)",
          borderBottom: "1px solid rgba(152,136,196,0.15)",
          padding: "1.25rem",
          position: "sticky",
          top: "4.5rem",
          zIndex: 30,
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          className="max-w-6xl mx-auto"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.625rem",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#8B7355",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginRight: "0.5rem",
              whiteSpace: "nowrap",
            }}
          >
            Filtrar:
          </span>
          {courseCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "0.5rem 1.1rem",
                borderRadius: "9999px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                fontWeight: active === cat ? 700 : 500,
                cursor: "pointer",
                border: "none",
                transition: "all 0.22s ease",
                background:
                  active === cat
                    ? "linear-gradient(135deg, #C4956A, #8B5C2A)"
                    : "rgba(152,136,196,0.10)",
                color: active === cat ? "#FEFEFE" : "#2D2418",
                boxShadow: active === cat
                  ? "0 4px 14px -4px rgba(196,149,106,0.40)"
                  : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Courses grid */}
      <section style={{ maxWidth: "75rem", margin: "0 auto", padding: "3rem 1.25rem 5rem" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "#8B7355" }}>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem" }}>
              No hay cursos en esta categoría todavía.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {filtered.map((course, i) => (
              <AnimatedSection key={course.id} direction="up" delay={i * 0.06}>
                <Link
                  href={`/escuela/${course.id}`}
                  style={{ display: "block", height: "100%", textDecoration: "none" }}
                  className="card-module"
                >
                  {/* Header strip */}
                  <div
                    style={{
                      height: "0.375rem",
                      background: `linear-gradient(90deg, ${course.color}, ${course.color}88)`,
                    }}
                  />

                  <div style={{ padding: "1.75rem" }}>
                    {/* Emoji + badges */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <span style={{ fontSize: "2.25rem" }}>{course.emoji}</span>
                      <span
                        style={{
                          padding: "0.25rem 0.7rem",
                          borderRadius: "9999px",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          fontFamily: "var(--font-sans)",
                          letterSpacing: "0.06em",
                          background: `${levelColor[course.level]}18`,
                          color: levelColor[course.level],
                          border: `1px solid ${levelColor[course.level]}40`,
                        }}
                      >
                        {course.level}
                      </span>
                    </div>

                    {/* Category */}
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: course.color,
                        display: "block",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {course.category}
                    </span>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "#1C1410",
                        marginBottom: "0.75rem",
                        lineHeight: 1.25,
                      }}
                    >
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        color: "#8B7355",
                        lineHeight: 1.6,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {course.description}
                    </p>

                    {/* Meta */}
                    <div
                      style={{
                        display: "flex",
                        gap: "1.25rem",
                        paddingTop: "1rem",
                        borderTop: "1px solid rgba(152,136,196,0.12)",
                        marginBottom: "1.25rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                        <Clock className="w-4 h-4" style={{ color: "#9888C4" }} />
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.8125rem",
                            color: "#8B7355",
                          }}
                        >
                          {course.duration}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                        <BookOpen className="w-4 h-4" style={{ color: "#9888C4" }} />
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.8125rem",
                            color: "#8B7355",
                          }}
                        >
                          {course.lessons} lecciones
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: course.color,
                      }}
                    >
                      Comenzar curso
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
