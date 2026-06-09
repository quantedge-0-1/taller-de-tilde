import { notFound } from "next/navigation";
import Link from "next/link";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { getCourseById, courses } from "@/data/courses";
import { Clock, BookOpen, Package, Wrench, Lightbulb, ChevronLeft, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return courses.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) return { title: "Curso no encontrado" };
  return {
    title: `${course.title} — el taller de Tilde`,
    description: course.description,
  };
}

const levelColor: Record<string, string> = {
  Principiante: "#22c55e",
  Intermedio: "#f59e0b",
  Avanzado: "#9888C4",
};

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = getCourseById(id);
  if (!course) notFound();

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: `linear-gradient(160deg, ${course.color}55 0%, ${course.color}CC 100%)`,
          padding: "3.5rem 1.25rem 4.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div className="max-w-4xl mx-auto">
          <AnimatedSection direction="up" delay={0.05}>
            <Link
              href="/escuela"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                marginBottom: "1.5rem",
              }}
            >
              <ChevronLeft className="w-4 h-4" />
              Volver a la Escuela de Moda
            </Link>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.1}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "3rem" }}>{course.emoji}</span>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-sans)",
                    letterSpacing: "0.08em",
                    background: `${levelColor[course.level]}25`,
                    color: "#FEFEFE",
                    border: "1px solid rgba(255,255,255,0.35)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {course.level}
                </span>
                <h1
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.75rem,4vw,2.8rem)",
                    fontWeight: 700,
                    color: "#FEFEFE",
                    lineHeight: 1.2,
                  }}
                >
                  {course.title}
                </h1>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.90)",
                maxWidth: "600px",
                lineHeight: 1.7,
              }}
            >
              {course.description}
            </p>

            <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
              {[
                { icon: Clock, text: course.duration },
                { icon: BookOpen, text: `${course.lessons} lecciones` },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(255,255,255,0.18)",
                    backdropFilter: "blur(8px)",
                    padding: "0.5rem 1rem",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <Icon className="w-4 h-4 text-white" />
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "#FEFEFE",
                      fontWeight: 600,
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto" style={{ padding: "3rem 1.25rem 5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>

          {/* Outcome */}
          <AnimatedSection direction="up">
            <div
              style={{
                background: `${course.color}10`,
                border: `1.5px solid ${course.color}30`,
                borderRadius: "1.25rem",
                padding: "1.75rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#1C1410",
                  marginBottom: "0.75rem",
                }}
              >
                🎯 ¿Qué lograrás?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.0625rem",
                  color: "#2D2418",
                  lineHeight: 1.7,
                }}
              >
                {course.outcome}
              </p>
            </div>
          </AnimatedSection>

          {/* Materials & Tools */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            <AnimatedSection direction="up" delay={0.05}>
              <div className="card-luxury" style={{ height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <Package className="w-5 h-5" style={{ color: "#C4956A" }} />
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#1C1410",
                    }}
                  >
                    Materiales
                  </h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {course.materials.map((m) => (
                    <li
                      key={m}
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
                      <span style={{ color: "#C4956A", marginTop: "0.1rem", flexShrink: 0 }}>✦</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <div className="card-luxury" style={{ height: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <Wrench className="w-5 h-5" style={{ color: "#9888C4" }} />
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#1C1410",
                    }}
                  >
                    Herramientas
                  </h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {course.tools.map((t) => (
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
                      <span style={{ color: "#9888C4", marginTop: "0.1rem", flexShrink: 0 }}>✦</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Tips */}
          <AnimatedSection direction="up" delay={0.08}>
            <div className="card-luxury">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <Lightbulb className="w-5 h-5" style={{ color: "#C4956A" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1C1410",
                  }}
                >
                  Consejos de Tilde
                </h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {course.tips.map((tip, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.875rem",
                      padding: "1rem",
                      background: "rgba(196,149,106,0.07)",
                      borderRadius: "0.875rem",
                      border: "1px solid rgba(196,149,106,0.15)",
                    }}
                  >
                    <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: "0.1rem" }}>💡</span>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        color: "#2D2418",
                        lineHeight: 1.6,
                        margin: 0,
                      }}
                    >
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Lessons list */}
          <AnimatedSection direction="up" delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#1C1410",
                marginBottom: "1.5rem",
              }}
            >
              Contenido del curso
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {course.lessonsList.map((lesson, i) => (
                <div
                  key={lesson.id}
                  style={{
                    background: "rgba(255,255,255,0.90)",
                    border: "1px solid rgba(152,136,196,0.18)",
                    borderRadius: "1.25rem",
                    padding: "1.5rem",
                    transition: "all 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "2.25rem",
                        height: "2.25rem",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${course.color}30, ${course.color}60)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        fontFamily: "var(--font-serif)",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: course.color,
                      }}
                    >
                      {i + 1}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: "1rem",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: "#1C1410",
                            marginBottom: "0.3rem",
                          }}
                        >
                          {lesson.title}
                        </h3>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.25rem",
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.8rem",
                            color: "#8B7355",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                          }}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          {lesson.duration}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.9rem",
                          color: "#8B7355",
                          margin: 0,
                        }}
                      >
                        {lesson.description}
                      </p>
                    </div>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {lesson.content.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.6rem",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.875rem",
                          color: "#2D2418",
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            width: "0.45rem",
                            height: "0.45rem",
                            borderRadius: "50%",
                            background: course.color,
                            flexShrink: 0,
                            marginTop: "0.4rem",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection direction="up" delay={0.1}>
            <div
              style={{
                background: `linear-gradient(135deg, ${course.color}18 0%, ${course.color}08 100%)`,
                border: `1px solid ${course.color}25`,
                borderRadius: "1.5rem",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.3rem",
                  fontStyle: "italic",
                  color: "#2D2418",
                  marginBottom: "1.25rem",
                }}
              >
                ¿Tienes dudas sobre este curso? ¡Luna puede ayudarte!
              </p>
              <Link href="/luna" className="btn-primary">
                Preguntar a Luna
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
