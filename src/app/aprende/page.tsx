"use client";

import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { tutorials } from "@/data/tutorials";
import { Clock, CheckCircle, Circle, ChevronRight, ChevronLeft, Lightbulb, Package } from "lucide-react";
import type { TutorialProject } from "@/types";

function TutorialDetail({ tutorial, onBack }: { tutorial: TutorialProject; onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const storageKey = `aprende_progress_${tutorial.id}`;
  const [completed, setCompleted] = useState<Set<number>>(() => {
    if (typeof window === "undefined") return new Set();
    const saved = localStorage.getItem(storageKey);
    return saved ? new Set<number>(JSON.parse(saved)) : new Set<number>();
  });

  const step = tutorial.steps[currentStep];
  const isCompleted = completed.has(currentStep);
  const allDone = completed.size === tutorial.steps.length;

  const toggleComplete = () => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(currentStep)) next.delete(currentStep);
      else next.add(currentStep);
      localStorage.setItem(storageKey, JSON.stringify([...next]));
      return next;
    });
  };

  return (
    <div>
      {/* Tutorial Hero */}
      <section
        style={{
          background: `linear-gradient(160deg, ${tutorial.color}55 0%, ${tutorial.color}CC 100%)`,
          padding: "3rem 1.25rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: "rgba(255,255,255,0.85)",
              background: "none",
              border: "none",
              cursor: "pointer",
              marginBottom: "1.5rem",
            }}
          >
            <ChevronLeft className="w-4 h-4" />
            Volver a los proyectos
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "3rem" }}>{tutorial.emoji}</span>
            <div>
              <span
                style={{
                  display: "inline-block",
                  padding: "0.2rem 0.7rem",
                  borderRadius: "9999px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-sans)",
                  background: "rgba(255,255,255,0.20)",
                  color: "#FEFEFE",
                  border: "1px solid rgba(255,255,255,0.30)",
                  marginBottom: "0.4rem",
                }}
              >
                {tutorial.level}
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.6rem,4vw,2.4rem)",
                  fontWeight: 700,
                  color: "#FEFEFE",
                  lineHeight: 1.2,
                }}
              >
                {tutorial.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.88)",
                  marginTop: "0.4rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <Clock className="w-4 h-4" />
                {tutorial.duration}
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: "2rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 600,
                }}
              >
                Progreso: {completed.size} / {tutorial.steps.length} pasos
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 700,
                }}
              >
                {Math.round((completed.size / tutorial.steps.length) * 100)}%
              </span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(completed.size / tutorial.steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Step navigation + content */}
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "3rem 1.25rem 5rem" }}>

        {/* Step selector */}
        <div
          style={{
            display: "flex",
            gap: "0.625rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {tutorial.steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 1.1rem",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                fontWeight: currentStep === i ? 700 : 500,
                transition: "all 0.22s ease",
                background:
                  currentStep === i
                    ? `linear-gradient(135deg, ${tutorial.color}, ${tutorial.color}BB)`
                    : completed.has(i)
                    ? "rgba(34,197,94,0.12)"
                    : "rgba(152,136,196,0.10)",
                color:
                  currentStep === i
                    ? "#FEFEFE"
                    : completed.has(i)
                    ? "#166534"
                    : "#2D2418",
              }}
            >
              {completed.has(i)
                ? <CheckCircle className="w-4 h-4" />
                : <span style={{ fontWeight: 700 }}>Paso {s.number}</span>
              }
            </button>
          ))}
        </div>

        {/* Current step */}
        <AnimatedSection key={currentStep} direction="up">
          <div
            style={{
              background: "rgba(255,255,255,0.95)",
              border: "1px solid rgba(152,136,196,0.20)",
              borderRadius: "1.5rem",
              overflow: "hidden",
              marginBottom: "1.5rem",
            }}
          >
            {/* Step header */}
            <div
              style={{
                background: `linear-gradient(135deg, ${tutorial.color}18, ${tutorial.color}08)`,
                borderBottom: `1px solid ${tutorial.color}20`,
                padding: "1.75rem 2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: tutorial.color,
                    marginBottom: "0.35rem",
                  }}
                >
                  Paso {step.number} de {tutorial.steps.length}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1C1410",
                  }}
                >
                  {step.title}
                </h3>
              </div>
              <button
                onClick={toggleComplete}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "9999px",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  transition: "all 0.25s ease",
                  background: isCompleted
                    ? "rgba(34,197,94,0.15)"
                    : `${tutorial.color}18`,
                  color: isCompleted ? "#166534" : tutorial.color,
                  border: isCompleted
                    ? "1px solid rgba(34,197,94,0.30)"
                    : `1px solid ${tutorial.color}30`,
                }}
              >
                {isCompleted
                  ? <><CheckCircle className="w-4 h-4" /> ¡Completado!</>
                  : <><Circle className="w-4 h-4" /> Marcar completado</>
                }
              </button>
            </div>

            {/* Step body */}
            <div style={{ padding: "2rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.0625rem",
                  color: "#2D2418",
                  lineHeight: 1.8,
                  marginBottom: "1.75rem",
                }}
              >
                {step.description}
              </p>

              {/* Tips */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {step.tips.map((tip, ti) => (
                  <div
                    key={ti}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      padding: "1rem",
                      background: "rgba(196,149,106,0.08)",
                      borderRadius: "0.875rem",
                      border: "1px solid rgba(196,149,106,0.18)",
                    }}
                  >
                    <Lightbulb className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#C4956A" }} />
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        color: "#2D2418",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
            <button
              onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
              disabled={currentStep === 0}
              className="btn-secondary"
              style={{ opacity: currentStep === 0 ? 0.4 : 1, gap: "0.4rem" }}
            >
              <ChevronLeft className="w-4 h-4" />
              Paso anterior
            </button>
            {currentStep < tutorial.steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep((p) => p + 1)}
                className="btn-primary"
                style={{ gap: "0.4rem" }}
              >
                Siguiente paso
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.5rem",
                  background: allDone
                    ? "linear-gradient(135deg, #22c55e, #16a34a)"
                    : "rgba(152,136,196,0.15)",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: allDone ? "#FEFEFE" : "#8B7355",
                }}
              >
                {allDone ? "🎉 ¡Proyecto completado!" : "Última lección"}
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* Materials sidebar */}
        <div
          style={{
            marginTop: "2rem",
            padding: "1.5rem",
            background: "rgba(255,255,255,0.90)",
            borderRadius: "1.25rem",
            border: "1px solid rgba(152,136,196,0.18)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
            <Package className="w-5 h-5" style={{ color: "#C4956A" }} />
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#1C1410",
              }}
            >
              Materiales necesarios
            </h4>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {tutorial.materials.map((m) => (
              <li
                key={m}
                style={{
                  padding: "0.4rem 0.9rem",
                  background: "rgba(196,149,106,0.10)",
                  border: "1px solid rgba(196,149,106,0.22)",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "#2D2418",
                }}
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function AprendePage() {
  const [selected, setSelected] = useState<string | null>(null);

  const tutorial = tutorials.find((t) => t.id === selected);

  if (tutorial) return <TutorialDetail tutorial={tutorial} onBack={() => setSelected(null)} />;

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #C8BDE0 0%, #6B5B9E 100%)",
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
            background: "radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.12) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <AnimatedSection direction="up">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.85)" }}>Módulo 6</span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "#FEFEFE",
              margin: "0.5rem 0 1rem",
            }}
          >
            ✨ Aprende Haciendo
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
            La mejor manera de aprender es crear. Elige un proyecto, sigue los pasos y descubre cuánto eres capaz de hacer.
          </p>
        </AnimatedSection>
      </section>

      {/* Projects */}
      <section style={{ maxWidth: "75rem", margin: "0 auto", padding: "3.5rem 1.25rem 5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {tutorials.map((t, i) => (
            <AnimatedSection key={t.id} direction="up" delay={i * 0.07}>
              <div
                className="card-luxury"
                style={{ cursor: "pointer" }}
                onClick={() => setSelected(t.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(t.id)}
              >
                {/* Color strip */}
                <div
                  style={{
                    height: "4px",
                    background: `linear-gradient(90deg, ${t.color}, ${t.color}55)`,
                    margin: "-2rem -2rem 1.5rem",
                    borderRadius: "0.25rem 0.25rem 0 0",
                  }}
                />

                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ fontSize: "2.25rem" }}>{t.emoji}</span>
                  <span
                    style={{
                      padding: "0.25rem 0.7rem",
                      borderRadius: "9999px",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-sans)",
                      background: `${t.color}15`,
                      color: t.color,
                      border: `1px solid ${t.color}30`,
                    }}
                  >
                    {t.level}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#1C1410",
                    marginBottom: "0.6rem",
                  }}
                >
                  {t.title}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    color: "#8B7355",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem",
                  }}
                >
                  {t.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1rem",
                    borderTop: "1px solid rgba(152,136,196,0.12)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Clock className="w-4 h-4" style={{ color: "#9888C4" }} />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "#8B7355" }}>
                      {t.duration}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: t.color,
                    }}
                  >
                    {t.steps.length} pasos
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
