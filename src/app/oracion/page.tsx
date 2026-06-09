"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { versiculos, getVersiculoDelDia, getProximoCambio } from "@/data/versiculos";
import { BookOpen, Sun, Moon, Clock, ChevronLeft, ChevronRight, Heart } from "lucide-react";

function claveRevelado(id: number, sesion: string) {
  return `oracion_revelado_${id}_${sesion}`;
}

function useCuenta(): string {
  const [cuenta, setCuenta] = useState("");

  useEffect(() => {
    function calcular() {
      const ahora = new Date();
      const proximo = getProximoCambio();
      const diff = proximo.getTime() - ahora.getTime();
      if (diff <= 0) {
        setCuenta("¡Nuevo versículo disponible!");
        return;
      }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setCuenta(
        `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
      );
    }
    calcular();
    const id = setInterval(calcular, 1000);
    return () => clearInterval(id);
  }, []);

  return cuenta;
}

export default function OracionPage() {
  const [{ versiculo, sesion }, setSesionData] = useState(() => getVersiculoDelDia());

  // Inicializar desde localStorage para evitar flash de sello→revelado
  const [revelado, setRevelado] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const { versiculo: v, sesion: s } = getVersiculoDelDia();
    return localStorage.getItem(claveRevelado(v.id, s)) === "1";
  });
  const [revelando, setRevelando] = useState(false);

  const [indiceExplora, setIndiceExplora] = useState<number | null>(null);
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const cuenta = useCuenta();

  useEffect(() => {
    const guardados = localStorage.getItem("oracion_favoritos");
    if (guardados) setFavoritos(JSON.parse(guardados));
  }, []);

  // Cuando cambia el versículo (cada 60 s), actualizar revelado
  useEffect(() => {
    const id = setInterval(() => {
      const nueva = getVersiculoDelDia();
      setSesionData(nueva);
      const yaRevelado =
        localStorage.getItem(claveRevelado(nueva.versiculo.id, nueva.sesion)) === "1";
      setRevelado(yaRevelado);
      setRevelando(false);
    }, 60000);
    return () => clearInterval(id);
  }, []);

  const versiculoMostrado =
    indiceExplora !== null ? versiculos[indiceExplora] : versiculo;

  const esMañana = sesion === "mañana";
  const esFavorito = favoritos.includes(versiculoMostrado.id);

  // Sellado solo aplica al versículo del día (no al explorador)
  const sellado = indiceExplora === null && !revelado;

  function revelar() {
    if (revelando || revelado) return;
    setRevelando(true);
    // Fade-out del sello: 420ms → luego mostrar revelado
    setTimeout(() => {
      setRevelado(true);
      setRevelando(false);
      localStorage.setItem(claveRevelado(versiculo.id, sesion), "1");
    }, 420);
  }

  function toggleFavorito() {
    const nuevos = esFavorito
      ? favoritos.filter((id) => id !== versiculoMostrado.id)
      : [...favoritos, versiculoMostrado.id];
    setFavoritos(nuevos);
    localStorage.setItem("oracion_favoritos", JSON.stringify(nuevos));
  }

  function anterior() {
    const base = indiceExplora !== null ? indiceExplora : versiculo.id - 1;
    setIndiceExplora((base - 1 + 100) % 100);
  }

  function siguiente() {
    const base = indiceExplora !== null ? indiceExplora : versiculo.id - 1;
    setIndiceExplora((base + 1) % 100);
  }

  function volverHoy() {
    setIndiceExplora(null);
  }

  const gradienteSesion = esMañana
    ? "linear-gradient(160deg, #FFF8E7 0%, #FFE4A0 40%, #F5C87A 100%)"
    : "linear-gradient(160deg, #1A1035 0%, #2D1B69 50%, #4A2080 100%)";

  const colorTexto = esMañana ? "#4A3000" : "#EDE7F6";
  const colorSub = esMañana ? "#7A5500" : "rgba(237,231,246,0.75)";
  const colorAccent = esMañana ? "#C4956A" : "#9888C4";

  return (
    <div>
      {/* ── Hero sesión ─────────────────────────────────── */}
      <section
        style={{
          background: gradienteSesion,
          padding: "5rem 1.25rem 6rem",
          position: "relative",
          overflow: "hidden",
          transition: "background 1.5s ease",
        }}
      >
        {/* Decoración de fondo */}
        <div
          aria-hidden
          style={{
            position: "absolute", top: "-5rem", right: "-5rem",
            width: "26rem", height: "26rem", borderRadius: "50%",
            background: esMañana
              ? "rgba(255,220,100,0.18)"
              : "rgba(152,136,196,0.12)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute", bottom: "-4rem", left: "-4rem",
            width: "18rem", height: "18rem", borderRadius: "50%",
            background: esMañana
              ? "rgba(255,180,50,0.12)"
              : "rgba(107,91,158,0.15)",
            pointerEvents: "none",
          }}
        />

        <div className="max-w-3xl mx-auto relative">
          <AnimatedSection direction="up" delay={0.05}>
            {/* Badge sesión */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                background: esMañana
                  ? "rgba(255,220,100,0.35)"
                  : "rgba(152,136,196,0.25)",
                border: `1px solid ${esMañana ? "rgba(196,149,106,0.4)" : "rgba(152,136,196,0.4)"}`,
                borderRadius: "9999px",
                marginBottom: "2rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase" as const,
                color: colorAccent,
              }}
            >
              {esMañana ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {esMañana ? "Versículo de la mañana" : "Versículo de la tarde"}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.15}>
            {sellado ? (
              /* ═══════════════════════════════════════════
                 CARD SELLADA — tap para revelar
              ═══════════════════════════════════════════ */
              <button
                onClick={revelar}
                aria-label="Toca para revelar el versículo del día"
                style={{
                  width: "100%",
                  background: esMañana
                    ? "rgba(255,255,255,0.55)"
                    : "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(18px)",
                  border: `2px dashed ${esMañana ? "rgba(196,149,106,0.55)" : "rgba(152,136,196,0.55)"}`,
                  borderRadius: "2rem",
                  padding: "clamp(3rem,7vw,5rem) clamp(2rem,5vw,3.5rem)",
                  marginBottom: "2rem",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1.75rem",
                  textAlign: "center" as const,
                  transition: "opacity 0.42s ease, transform 0.42s ease, box-shadow 0.2s ease",
                  boxShadow: esMañana
                    ? "0 8px 40px -8px rgba(196,149,106,0.22)"
                    : "0 8px 40px -8px rgba(107,91,158,0.32)",
                  opacity: revelando ? 0 : 1,
                  transform: revelando ? "scale(0.94)" : "scale(1)",
                }}
                onMouseEnter={(e) => {
                  if (!revelando) {
                    e.currentTarget.style.transform = "scale(1.015)";
                    e.currentTarget.style.boxShadow = esMañana
                      ? "0 18px 56px -8px rgba(196,149,106,0.38)"
                      : "0 18px 56px -8px rgba(107,91,158,0.48)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!revelando) {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = esMañana
                      ? "0 8px 40px -8px rgba(196,149,106,0.22)"
                      : "0 8px 40px -8px rgba(107,91,158,0.32)";
                  }
                }}
                onMouseDown={(e) => {
                  e.currentTarget.style.transform = "scale(0.985)";
                }}
                onMouseUp={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {/* Sello / Cruz animada */}
                <div
                  style={{
                    width: "6.5rem",
                    height: "6.5rem",
                    borderRadius: "50%",
                    background: esMañana
                      ? "linear-gradient(135deg, rgba(196,149,106,0.22), rgba(245,200,122,0.32))"
                      : "linear-gradient(135deg, rgba(107,91,158,0.38), rgba(152,136,196,0.22))",
                    border: `2.5px solid ${esMañana ? "rgba(196,149,106,0.55)" : "rgba(152,136,196,0.55)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3rem",
                    animation: "sello-pulso 2.8s ease-in-out infinite",
                  }}
                >
                  ✝️
                </div>

                {/* Texto principal */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.15rem, 2.8vw, 1.6rem)",
                      fontWeight: 600,
                      fontStyle: "italic",
                      color: colorTexto,
                      marginBottom: "0.6rem",
                      lineHeight: 1.35,
                    }}
                  >
                    Tu versículo de {esMañana ? "la mañana" : "la tarde"} te espera
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: colorSub,
                      lineHeight: 1.6,
                    }}
                  >
                    La Palabra del día ha sido preparada para ti
                  </p>
                </div>

                {/* Líneas decorativas como texto oculto */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.55rem",
                    width: "100%",
                    maxWidth: "18rem",
                  }}
                >
                  {[100, 82, 68, 90, 58].map((w, i) => (
                    <div
                      key={i}
                      style={{
                        height: "3px",
                        width: `${w}%`,
                        borderRadius: "9999px",
                        background: esMañana
                          ? `rgba(196,149,106,${0.13 + i * 0.025})`
                          : `rgba(152,136,196,${0.16 + i * 0.025})`,
                        margin: "0 auto",
                      }}
                    />
                  ))}
                </div>

                {/* Botón de interacción */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.65rem 1.6rem",
                    background: esMañana
                      ? "rgba(196,149,106,0.20)"
                      : "rgba(152,136,196,0.25)",
                    border: `1.5px solid ${esMañana ? "rgba(196,149,106,0.45)" : "rgba(152,136,196,0.45)"}`,
                    borderRadius: "9999px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.925rem",
                    fontWeight: 700,
                    color: colorAccent,
                    letterSpacing: "0.04em",
                  }}
                >
                  <span style={{ fontSize: "1.05rem" }}>👆</span>
                  Tocar para revelar
                </div>
              </button>
            ) : (
              /* ═══════════════════════════════════════════
                 CARD REVELADA — con animación de entrada
              ═══════════════════════════════════════════ */
              <div
                style={{
                  background: esMañana
                    ? "rgba(255,255,255,0.55)"
                    : "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(18px)",
                  border: `1px solid ${esMañana ? "rgba(196,149,106,0.25)" : "rgba(152,136,196,0.25)"}`,
                  borderRadius: "2rem",
                  padding: "clamp(2rem,5vw,3.5rem)",
                  marginBottom: "2rem",
                  position: "relative",
                  // Keyframe solo en el primer render post-reveal (revelado recién puesto en true)
                  animation: "revelar-versiculo 0.55s cubic-bezier(0.22,1,0.36,1) both",
                }}
              >
                {/* Referencia */}
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase" as const,
                    color: colorAccent,
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <BookOpen className="w-4 h-4" />
                  {versiculoMostrado.referencia}
                </div>

                {/* Libro */}
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "0.95rem",
                    fontStyle: "italic",
                    color: colorSub,
                    marginBottom: "1.5rem",
                  }}
                >
                  {versiculoMostrado.libro}
                </div>

                {/* Texto bíblico */}
                <blockquote
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.05rem, 2.5vw, 1.35rem)",
                    fontWeight: 500,
                    color: colorTexto,
                    lineHeight: 1.8,
                    marginBottom: "2rem",
                    borderLeft: `4px solid ${colorAccent}`,
                    paddingLeft: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  "{versiculoMostrado.texto}"
                </blockquote>

                {/* Tema */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.35rem 1rem",
                    background: esMañana
                      ? "rgba(196,149,106,0.15)"
                      : "rgba(152,136,196,0.20)",
                    border: `1px solid ${esMañana ? "rgba(196,149,106,0.30)" : "rgba(152,136,196,0.35)"}`,
                    borderRadius: "9999px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: colorAccent,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase" as const,
                    marginBottom: "1.5rem",
                  }}
                >
                  {versiculoMostrado.tema}
                </div>

                {/* Reflexión */}
                <div
                  style={{
                    background: esMañana
                      ? "rgba(196,149,106,0.10)"
                      : "rgba(152,136,196,0.12)",
                    borderRadius: "1rem",
                    padding: "1.25rem 1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      color: colorSub,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: colorAccent,
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.05rem",
                      }}
                    >
                      Reflexión:{" "}
                    </span>
                    {versiculoMostrado.reflexion}
                  </p>
                </div>

                {/* Botón favorito */}
                <button
                  onClick={toggleFavorito}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.65rem 1.5rem",
                    background: esFavorito
                      ? (esMañana ? "rgba(196,149,106,0.25)" : "rgba(152,136,196,0.30)")
                      : "transparent",
                    border: `2px solid ${esFavorito ? colorAccent : (esMañana ? "rgba(196,149,106,0.35)" : "rgba(152,136,196,0.35)")}`,
                    borderRadius: "9999px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: esFavorito ? colorAccent : colorSub,
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                >
                  <Heart
                    className="w-4 h-4"
                    style={{ fill: esFavorito ? colorAccent : "transparent" }}
                  />
                  {esFavorito ? "Guardado en favoritos" : "Guardar en favoritos"}
                </button>
              </div>
            )}
          </AnimatedSection>

          {/* Countdown */}
          <AnimatedSection direction="up" delay={0.25}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                padding: "1rem 2rem",
                background: esMañana
                  ? "rgba(255,255,255,0.40)"
                  : "rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${esMañana ? "rgba(196,149,106,0.25)" : "rgba(152,136,196,0.25)"}`,
                borderRadius: "9999px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.875rem",
                color: colorSub,
                fontWeight: 500,
                flexWrap: "wrap" as const,
                textAlign: "center" as const,
              }}
            >
              <Clock className="w-4 h-4" style={{ color: colorAccent, flexShrink: 0 }} />
              <span>
                Próximo versículo en:{" "}
                <strong style={{ fontVariantNumeric: "tabular-nums", color: colorAccent, fontWeight: 700 }}>
                  {cuenta}
                </strong>
              </span>
              <span style={{ opacity: 0.6 }}>
                ({esMañana ? "18:00 hs" : "06:00 hs"})
              </span>
            </div>
          </AnimatedSection>

          {/* Indicador si se está explorando */}
          {indiceExplora !== null && (
            <AnimatedSection direction="up" delay={0.1}>
              <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                <button
                  onClick={volverHoy}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    color: colorAccent,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "underline",
                    fontWeight: 600,
                  }}
                >
                  Volver al versículo de hoy
                </button>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* ── Navegador de versículos ──────────────────────── */}
      <section
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "3rem 1.25rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <AnimatedSection direction="up">
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: "#C4956A",
            }}
          >
            Explorar los 100 versículos
          </span>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.1}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexWrap: "wrap" as const,
              justifyContent: "center",
            }}
          >
            <button
              onClick={anterior}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                background: "rgba(152,136,196,0.10)",
                border: "1px solid rgba(152,136,196,0.25)",
                borderRadius: "9999px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#6B5B9E",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </button>

            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1rem",
                color: "#8B7355",
                fontStyle: "italic",
              }}
            >
              {versiculoMostrado.id} / 100
            </span>

            <button
              onClick={siguiente}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                background: "rgba(152,136,196,0.10)",
                border: "1px solid rgba(152,136,196,0.25)",
                borderRadius: "9999px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "#6B5B9E",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Siguiente
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </AnimatedSection>
      </section>

      {/* ── Favoritos ────────────────────────────────────── */}
      {favoritos.length > 0 && (
        <section style={{ maxWidth: "75rem", margin: "0 auto", padding: "0 1.25rem 5rem" }}>
          <AnimatedSection direction="up">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase" as const,
                  color: "#C4956A",
                }}
              >
                Mis versículos favoritos
              </span>
              <div
                style={{
                  width: "3rem",
                  height: "2px",
                  background: "linear-gradient(90deg, #C4956A, #9888C4)",
                  margin: "0.75rem auto",
                  borderRadius: "9999px",
                }}
              />
            </div>
          </AnimatedSection>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {favoritos.map((favId, i) => {
              const v = versiculos.find((v) => v.id === favId);
              if (!v) return null;
              return (
                <AnimatedSection key={favId} direction="up" delay={i * 0.07}>
                  <button
                    onClick={() => setIndiceExplora(v.id - 1)}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      padding: "1.5rem",
                      background: "rgba(255,255,255,0.70)",
                      border: "1px solid rgba(196,149,106,0.20)",
                      borderRadius: "1.5rem",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      boxShadow: "0 2px 12px -4px rgba(152,136,196,0.12)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase" as const,
                        color: "#C4956A",
                        marginBottom: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <Heart className="w-3 h-3" style={{ fill: "#C4956A" }} />
                      {v.referencia}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "0.95rem",
                        fontStyle: "italic",
                        color: "#2D2418",
                        lineHeight: 1.65,
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical" as const,
                        margin: 0,
                      }}
                    >
                      "{v.texto}"
                    </p>
                  </button>
                </AnimatedSection>
              );
            })}
          </div>
        </section>
      )}

      {/* ── Horarios banner ──────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #2D1B69 0%, #1A1035 100%)",
          padding: "4rem 1.25rem",
          textAlign: "center",
        }}
      >
        <AnimatedSection direction="up">
          <div className="max-w-3xl mx-auto">
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✝️</div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.5rem, 3.5vw, 2rem)",
                fontWeight: 700,
                color: "#EDE7F6",
                marginBottom: "1rem",
              }}
            >
              Un versículo para cada momento del día
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                color: "rgba(237,231,246,0.75)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Cada mañana a las 6:00 hs y cada tarde a las 18:00 hs, un nuevo versículo
              rico en enseñanza espiritual te espera aquí.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                flexWrap: "wrap" as const,
              }}
            >
              {[
                { hora: "06:00 hs", label: "Versículo de la mañana", icon: "🌅" },
                { hora: "18:00 hs", label: "Versículo de la tarde", icon: "🌙" },
              ].map(({ hora, label, icon }) => (
                <div
                  key={hora}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "1.5rem 2rem",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(152,136,196,0.25)",
                    borderRadius: "1.5rem",
                    minWidth: "140px",
                  }}
                >
                  <div style={{ fontSize: "2rem" }}>{icon}</div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#9888C4",
                    }}
                  >
                    {hora}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      color: "rgba(237,231,246,0.60)",
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
