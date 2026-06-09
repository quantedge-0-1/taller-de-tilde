"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { versiculos, getVersiculoDelDia, getProximoCambio } from "@/data/versiculos";
import { BookOpen, Sun, Moon, Clock, Heart } from "lucide-react";

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

  // mounted evita hydration mismatch con localStorage
  const [mounted, setMounted] = useState(false);
  const [revelado, setRevelado] = useState(false);
  const [revelando, setRevelando] = useState(false);
  const [animarReveal, setAnimarReveal] = useState(false);

  const [favoritos, setFavoritos] = useState<number[]>([]);
  const cuenta = useCuenta();

  // Leer estado desde localStorage después de la hidratación
  useEffect(() => {
    const guardados = localStorage.getItem("oracion_favoritos");
    if (guardados) setFavoritos(JSON.parse(guardados));

    const yaRevelado = localStorage.getItem(claveRevelado(versiculo.id, sesion)) === "1";
    setRevelado(yaRevelado);
    setMounted(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cuando cambia el versículo (cada 60 s)
  useEffect(() => {
    const id = setInterval(() => {
      const nueva = getVersiculoDelDia();
      setSesionData(nueva);
      const yaRevelado =
        localStorage.getItem(claveRevelado(nueva.versiculo.id, nueva.sesion)) === "1";
      setRevelado(yaRevelado);
      setAnimarReveal(false);
    }, 60000);
    return () => clearInterval(id);
  }, []);

  const esMañana = sesion === "mañana";
  const esFavorito = favoritos.includes(versiculo.id);

  const sellado = mounted && !revelado;

  function revelar() {
    if (revelando || revelado) return;
    setRevelando(true);
    setTimeout(() => {
      setRevelado(true);
      setRevelando(false);
      setAnimarReveal(true);
      localStorage.setItem(claveRevelado(versiculo.id, sesion), "1");
    }, 420);
  }

  function toggleFavorito() {
    const nuevos = esFavorito
      ? favoritos.filter((id) => id !== versiculo.id)
      : [...favoritos, versiculo.id];
    setFavoritos(nuevos);
    localStorage.setItem("oracion_favoritos", JSON.stringify(nuevos));
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
            background: esMañana ? "rgba(255,220,100,0.18)" : "rgba(152,136,196,0.12)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute", bottom: "-4rem", left: "-4rem",
            width: "18rem", height: "18rem", borderRadius: "50%",
            background: esMañana ? "rgba(255,180,50,0.12)" : "rgba(107,91,158,0.15)",
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
                background: esMañana ? "rgba(255,220,100,0.35)" : "rgba(152,136,196,0.25)",
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
            {/* Placeholder invisible hasta hidratación */}
            {!mounted ? (
              <div
                style={{
                  minHeight: "380px",
                  borderRadius: "2rem",
                  background: esMañana ? "rgba(255,255,255,0.30)" : "rgba(255,255,255,0.04)",
                  marginBottom: "2rem",
                }}
              />
            ) : sellado ? (
              /* ═══════════════════════════════════════════
                 CARD SELLADA — tap para revelar
              ═══════════════════════════════════════════ */
              <button
                onClick={revelar}
                aria-label="Toca para revelar el versículo del día"
                style={{
                  width: "100%",
                  background: esMañana ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(18px)",
                  border: `2px dashed ${esMañana ? "rgba(196,149,106,0.60)" : "rgba(152,136,196,0.60)"}`,
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
                    ? "0 8px 40px -8px rgba(196,149,106,0.25)"
                    : "0 8px 40px -8px rgba(107,91,158,0.35)",
                  opacity: revelando ? 0 : 1,
                  transform: revelando ? "scale(0.94)" : "scale(1)",
                }}
                onMouseEnter={(e) => {
                  if (!revelando) {
                    e.currentTarget.style.transform = "scale(1.015)";
                    e.currentTarget.style.boxShadow = esMañana
                      ? "0 20px 60px -8px rgba(196,149,106,0.40)"
                      : "0 20px 60px -8px rgba(107,91,158,0.50)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!revelando) {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = esMañana
                      ? "0 8px 40px -8px rgba(196,149,106,0.25)"
                      : "0 8px 40px -8px rgba(107,91,158,0.35)";
                  }
                }}
                onMouseDown={(e) => { e.currentTarget.style.transform = "scale(0.985)"; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
              >
                {/* Cruz / sello animado */}
                <div
                  style={{
                    width: "7rem",
                    height: "7rem",
                    borderRadius: "50%",
                    background: esMañana
                      ? "linear-gradient(135deg, rgba(196,149,106,0.25), rgba(245,200,122,0.35))"
                      : "linear-gradient(135deg, rgba(107,91,158,0.40), rgba(152,136,196,0.25))",
                    border: `2.5px solid ${esMañana ? "rgba(196,149,106,0.60)" : "rgba(152,136,196,0.60)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3.25rem",
                    animation: "sello-pulso 2.8s ease-in-out infinite",
                  }}
                >
                  ✝️
                </div>

                {/* Texto */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.2rem, 3vw, 1.7rem)",
                      fontWeight: 700,
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
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: colorSub,
                      lineHeight: 1.6,
                    }}
                  >
                    La Palabra del día ha sido preparada para ti
                  </p>
                </div>

                {/* Líneas decorativas como texto oculto */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", width: "100%", maxWidth: "18rem" }}>
                  {[100, 82, 68, 90, 58].map((w, i) => (
                    <div
                      key={i}
                      style={{
                        height: "3px",
                        width: `${w}%`,
                        borderRadius: "9999px",
                        background: esMañana
                          ? `rgba(196,149,106,${0.14 + i * 0.025})`
                          : `rgba(152,136,196,${0.18 + i * 0.025})`,
                        margin: "0 auto",
                      }}
                    />
                  ))}
                </div>

                {/* Hint de interacción */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.7rem 1.75rem",
                    background: esMañana ? "rgba(196,149,106,0.22)" : "rgba(152,136,196,0.28)",
                    border: `1.5px solid ${esMañana ? "rgba(196,149,106,0.50)" : "rgba(152,136,196,0.50)"}`,
                    borderRadius: "9999px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: colorAccent,
                    letterSpacing: "0.04em",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>👆</span>
                  Tocar para revelar
                </div>
              </button>
            ) : (
              /* ═══════════════════════════════════════════
                 CARD REVELADA
              ═══════════════════════════════════════════ */
              <div
                style={{
                  background: esMañana ? "rgba(255,255,255,0.60)" : "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(18px)",
                  border: `1px solid ${esMañana ? "rgba(196,149,106,0.28)" : "rgba(152,136,196,0.28)"}`,
                  borderRadius: "2rem",
                  padding: "clamp(2rem,5vw,3.5rem)",
                  marginBottom: "2rem",
                  position: "relative",
                  // Animación solo cuando se acaba de revelar (no en carga de página)
                  animation: animarReveal
                    ? "revelar-versiculo 0.55s cubic-bezier(0.22,1,0.36,1) both"
                    : undefined,
                }}
              >
                {/* Referencia */}
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
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
                  {versiculo.referencia}
                </div>

                {/* Libro */}
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.05rem",
                    fontStyle: "italic",
                    color: colorSub,
                    marginBottom: "1.5rem",
                  }}
                >
                  {versiculo.libro}
                </div>

                {/* Texto bíblico — más grande y más grueso */}
                <blockquote
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.2rem, 2.8vw, 1.55rem)",
                    fontWeight: 600,
                    color: colorTexto,
                    lineHeight: 1.85,
                    marginBottom: "2rem",
                    borderLeft: `4px solid ${colorAccent}`,
                    paddingLeft: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  "{versiculo.texto}"
                </blockquote>

                {/* Tema */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.4rem 1.1rem",
                    background: esMañana ? "rgba(196,149,106,0.15)" : "rgba(152,136,196,0.20)",
                    border: `1px solid ${esMañana ? "rgba(196,149,106,0.30)" : "rgba(152,136,196,0.35)"}`,
                    borderRadius: "9999px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: colorAccent,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase" as const,
                    marginBottom: "1.5rem",
                  }}
                >
                  {versiculo.tema}
                </div>

                {/* Reflexión */}
                <div
                  style={{
                    background: esMañana ? "rgba(196,149,106,0.10)" : "rgba(152,136,196,0.12)",
                    borderRadius: "1rem",
                    padding: "1.375rem 1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1.0625rem",
                      fontWeight: 500,
                      color: colorSub,
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 700,
                        color: colorAccent,
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.1rem",
                      }}
                    >
                      Reflexión:{" "}
                    </span>
                    {versiculo.reflexion}
                  </p>
                </div>

                {/* Botón favorito */}
                <button
                  onClick={toggleFavorito}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.7rem 1.6rem",
                    background: esFavorito
                      ? (esMañana ? "rgba(196,149,106,0.25)" : "rgba(152,136,196,0.30)")
                      : "transparent",
                    border: `2px solid ${esFavorito ? colorAccent : (esMañana ? "rgba(196,149,106,0.35)" : "rgba(152,136,196,0.35)")}`,
                    borderRadius: "9999px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
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
                background: esMañana ? "rgba(255,255,255,0.40)" : "rgba(255,255,255,0.06)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${esMañana ? "rgba(196,149,106,0.25)" : "rgba(152,136,196,0.25)"}`,
                borderRadius: "9999px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
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

        </div>
      </section>

      {/* ── Favoritos ────────────────────────────────────── */}
      {favoritos.length > 0 && (
        <section style={{ maxWidth: "75rem", margin: "0 auto", padding: "0 1.25rem 5rem" }}>
          <AnimatedSection direction="up">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem", fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase" as const,
                  color: "#C4956A",
                }}
              >
                Mis versículos favoritos
              </span>
              <div
                style={{
                  width: "3rem", height: "2px",
                  background: "linear-gradient(90deg, #C4956A, #9888C4)",
                  margin: "0.75rem auto", borderRadius: "9999px",
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
                  <div
                    style={{
                      display: "block", width: "100%", textAlign: "left",
                      padding: "1.5rem",
                      background: "rgba(255,255,255,0.70)",
                      border: "1px solid rgba(196,149,106,0.20)",
                      borderRadius: "1.5rem",
                      boxShadow: "0 2px 12px -4px rgba(152,136,196,0.12)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.75rem", fontWeight: 700,
                        letterSpacing: "0.08em", textTransform: "uppercase" as const,
                        color: "#C4956A", marginBottom: "0.5rem",
                        display: "flex", alignItems: "center", gap: "0.4rem",
                      }}
                    >
                      <Heart className="w-3 h-3" style={{ fill: "#C4956A" }} />
                      {v.referencia}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1rem", fontWeight: 500,
                        fontStyle: "italic", color: "#2D2418",
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
                  </div>
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
                fontWeight: 700, color: "#EDE7F6", marginBottom: "1rem",
              }}
            >
              Un versículo para cada momento del día
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem", fontWeight: 500,
                color: "rgba(237,231,246,0.80)",
                lineHeight: 1.7, marginBottom: "2rem",
              }}
            >
              Cada mañana a las 6:00 hs y cada tarde a las 18:00 hs, un nuevo versículo
              rico en enseñanza espiritual te espera aquí.
            </p>
            <div
              style={{
                display: "flex", justifyContent: "center",
                gap: "2rem", flexWrap: "wrap" as const,
              }}
            >
              {[
                { hora: "06:00 hs", label: "Versículo de la mañana", icon: "🌅" },
                { hora: "18:00 hs", label: "Versículo de la tarde", icon: "🌙" },
              ].map(({ hora, label, icon }) => (
                <div
                  key={hora}
                  style={{
                    display: "flex", flexDirection: "column",
                    alignItems: "center", gap: "0.5rem",
                    padding: "1.5rem 2rem",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(152,136,196,0.25)",
                    borderRadius: "1.5rem", minWidth: "140px",
                  }}
                >
                  <div style={{ fontSize: "2rem" }}>{icon}</div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", fontWeight: 700, color: "#9888C4" }}>
                    {hora}
                  </div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem", color: "rgba(237,231,246,0.60)", fontWeight: 500 }}>
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
