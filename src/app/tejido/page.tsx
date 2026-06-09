"use client";

import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";

const levels = [
  {
    id: "principiante",
    label: "Principiante",
    emoji: "🌱",
    color: "#22c55e",
    bg: "rgba(34, 197, 94, 0.08)",
    border: "rgba(34, 197, 94, 0.25)",
    description: "Perfecta para comenzar desde cero. Con paciencia y práctica, pronto dominarás los puntos básicos.",
    sections: [
      {
        title: "Puntos básicos",
        emoji: "🧵",
        lessons: [
          {
            title: "El nudo deslizable",
            content: "El primer paso de cualquier tejido. Coloca el hilo formando un lazo, introduce los dedos y jala el extremo del hilo para crear un nudo que puedas ajustar.",
            tip: "El nudo no debe quedar tan apretado que no deslice por la aguja.",
          },
          {
            title: "Montar puntos",
            content: "Existen varios métodos: el del pulgar (sencillo y elástico) y el del índice (más firme). Practica con el del pulgar: coloca el hilo en el dedo, introduce la aguja y forma el punto.",
            tip: "Monta siempre 10% más puntos de los necesarios: es más fácil desmontar que añadir.",
          },
          {
            title: "El punto al derecho",
            content: "Introduce la aguja por delante del punto, pasa el hilo por detrás y extrae el nuevo punto. Este es el punto derecho, la base de todo tejido a palillos.",
            tip: "Mantén la tensión uniforme: ni muy floja ni muy apretada.",
          },
          {
            title: "El punto al revés",
            content: "Introduce la aguja por detrás del punto (al frente de la labor), pasa el hilo por delante y extrae el nuevo punto. Combinando derecho y revés creas texturas increíbles.",
            tip: "Practica alternando filas de derecho y revés para hacer el punto jersey.",
          },
          {
            title: "Cerrar puntos",
            content: "Teje 2 puntos, luego pasa el primero sobre el segundo. Repite hasta el final. Corta el hilo con 20cm de cola y pasa por el último punto para asegurar.",
            tip: "El cierre no debe quedar muy apretado para que el borde quede elástico.",
          },
        ],
      },
      {
        title: "Primeros proyectos",
        emoji: "🎁",
        lessons: [
          {
            title: "Una muestra de 10x10",
            content: "Antes de cualquier proyecto, haz siempre una muestra de 10x10 puntos con la lana y agujas que usarás. Esto te permite calcular cuántos puntos necesitas para el tamaño deseado.",
            tip: "Guarda tus muestras en un cuaderno: son tu biblioteca de tensiones y texturas.",
          },
          {
            title: "Tu primera bufanda",
            content: "Monta 20 puntos con lana gruesa. Teje todas las filas al derecho (punto bobo) durante 150cm. Este punto es el más sencillo y queda igual por los dos lados.",
            tip: "La lana gruesa y las agujas grandes avanzan rápido: ¡ves el progreso enseguida!",
          },
          {
            title: "Un posavasos de punto musgo",
            content: "Monta 20 puntos. Teje 4 filas al derecho, 4 al revés, alternando hasta completar un cuadrado perfecto. El patrón cuadriculado que se forma es muy elegante.",
            tip: "El algodón es ideal para posavasos: es lavable y mantiene la forma.",
          },
        ],
      },
      {
        title: "Uso de herramientas",
        emoji: "🔧",
        lessons: [
          {
            title: "Tipos de agujas",
            content: "Agujas rectas (para tejidos planos), agujas circulares (para tejidos en redondo o proyectos grandes), agujas de doble punta (para tubos pequeños como calcetines). El número indica el grosor en milímetros.",
            tip: "Las agujas de bambú son ideales para principiantes: no resbalan.",
          },
          {
            title: "Cómo leer un patrón básico",
            content: "Los patrones usan abreviaturas: D = punto derecho, R = revés, m = montar, c = cerrar. '2D, 2R' significa 2 puntos al derecho, 2 al revés. Repites lo que esté entre asteriscos (*) hasta el final.",
            tip: "Marca siempre con un señalizador dónde empiezan las repeticiones.",
          },
          {
            title: "Cómo añadir un nuevo ovillo",
            content: "Cuando te queden unos 20cm de hilo, deja el extremo y empieza el nuevo ovillo. Deja ambas colas de 15cm y escóndelas al revés de la labor con la aguja lanera cuando termines.",
            tip: "Siempre cambia el hilo al inicio de una fila, nunca en el medio.",
          },
        ],
      },
    ],
  },
  {
    id: "intermedio",
    label: "Intermedio",
    emoji: "🌿",
    color: "#f59e0b",
    bg: "rgba(245, 158, 11, 0.08)",
    border: "rgba(245, 158, 11, 0.25)",
    description: "Ya dominas los puntos básicos y estás lista para crear prendas más complejas con patrones y texturas.",
    sections: [
      {
        title: "Patrones y combinaciones",
        emoji: "📐",
        lessons: [
          {
            title: "Punto jersey (stockinette)",
            content: "Alterna filas de puntos derechos (por el lado derecho de la labor) con filas de puntos revés (por el revés). El resultado es una superficie lisa por un lado y texturizada por el otro. Es el punto de los suéteres clásicos.",
            tip: "El punto jersey tiende a rizarse en los bordes. Añade 2-3 puntos de punto bobo en cada orillo para estabilizarlo.",
          },
          {
            title: "Punto de arroz",
            content: "Alterna 1 punto derecho, 1 punto revés en cada fila, pero en la siguiente fila invierte: donde hiciste derecho, haz revés. El resultado es una textura granulada muy hermosa.",
            tip: "El punto de arroz queda perfecto para bufandas reversibles: es igual por los dos lados.",
          },
          {
            title: "Punto elástico 2x2",
            content: "En cada fila: 2 puntos derechos, 2 puntos revés, repite hasta el final. Mantén el mismo patrón en todas las filas. Crea un tejido muy elástico ideal para cuellos, puños y cinturones.",
            tip: "El elástico debe montarse con el 20% menos de puntos que el ancho final deseado.",
          },
          {
            title: "Trenza básica",
            content: "Las trenzas se hacen cruzando grupos de puntos usando una aguja auxiliar. Deja 3 puntos en la aguja auxiliar adelante, teje los siguientes 3, luego teje los de la auxiliar. La trenza 'tuerce' hacia adelante.",
            tip: "Una trenza hacia adelante (C6F) gira a la izquierda; hacia atrás (C6B) gira a la derecha.",
          },
        ],
      },
      {
        title: "Acabados profesionales",
        emoji: "✂️",
        lessons: [
          {
            title: "Costuras de tejido",
            content: "La costura mattress stitch (costura de colchonero) es invisible. Alinea los dos bordes, introduce la aguja bajo las barras horizontales entre el primer y segundo punto de cada lado, alternando. El resultado parece que no hay costura.",
            tip: "Trabaja con la misma lana del tejido para que la costura sea completamente invisible.",
          },
          {
            title: "Rematar las hebras",
            content: "Enhebra la cola en la aguja lanera. Pasa la aguja por el revés de la labor, entrando por los puntos o las barras del tejido en zigzag durante al menos 5cm. Corta el exceso muy cerca.",
            tip: "Remata siempre en el mismo sentido de las fibras del tejido para que no se vea.",
          },
          {
            title: "Bloqueo del tejido",
            content: "Sumerge la prenda terminada en agua fría con unas gotas de suavizante. Exprímela suavemente (sin retorcer), extiéndela sobre una superficie plana con alfileres a las medidas correctas y deja secar completamente. El bloqueo abre el tejido y lo perfecciona.",
            tip: "La lana de calidad siempre mejora mucho con el bloqueo. ¡Es el toque final que marca la diferencia!",
          },
        ],
      },
    ],
  },
  {
    id: "avanzado",
    label: "Avanzado",
    emoji: "🌸",
    color: "#9888C4",
    bg: "rgba(152, 136, 196, 0.08)",
    border: "rgba(152, 136, 196, 0.25)",
    description: "Técnicas profesionales para crear prendas completas de alta calidad, incluyendo diseños con jacquard y construcciones complejas.",
    sections: [
      {
        title: "Técnicas complejas",
        emoji: "🏆",
        lessons: [
          {
            title: "Tejido en redondo",
            content: "Con agujas circulares o de doble punta, puedes tejer tubos sin costuras: perfectos para gorros, cuello vuelto, calcetines y mangas. Monta los puntos, une sin torcer y teje siempre hacia adelante.",
            tip: "Usa un señalizador de inicio de vuelta para no perder la cuenta.",
          },
          {
            title: "Merma y aumento",
            content: "Para dar forma a las prendas, debes aumentar (añadir puntos) y mermar (quitar puntos). K2tog merma 2 puntos a la derecha; SSK merma 2 a la izquierda. M1R y M1L añaden puntos sin agujero visible.",
            tip: "Las mermas a derecha e izquierda crean líneas de conformación que pueden ser decorativas.",
          },
          {
            title: "Jacquard y color",
            content: "El jacquard (o fair isle) teje con dos o más colores en la misma vuelta. Lleva los hilos que no usas flotando por el revés, con tensión uniforme. Practica primero con patrones simples de 5 puntos de ancho.",
            tip: "Los flotantes no deben superar 5 puntos sin anclar o el tejido se fruncirá.",
          },
          {
            title: "Encaje tejido",
            content: "El encaje se crea con aumentos (hebra hacia adelante = YO) combinados con mermadas (K2tog, SSK). El agujero que deja el aumento crea el dibujo calado. Los patrones de encaje se leen en cuadrículas simbólicas.",
            tip: "Teje el encaje sobre fondo de punto jersey: los agujeros resaltan mucho más.",
          },
        ],
      },
      {
        title: "Prendas completas",
        emoji: "👕",
        lessons: [
          {
            title: "Construcción top-down (de arriba a abajo)",
            content: "Los suéteres top-down empiezan por el cuello y las mangas y cuerpo se tejen simultáneamente aumentando hasta las axilas, donde se separan. Sin costuras, ajuste perfecto mientras tejes.",
            tip: "Pruébate la prenda en la aguja circular a medida que tejes para verificar el tamaño.",
          },
          {
            title: "Calcetines de dos agujas",
            content: "Los calcetines tienen talón, vuelta del talón y punta. El talón se teje en punto bobo de lado a lado. La punta se cierra con el grafting (kitchener stitch) para una costura completamente invisible.",
            tip: "La lana Superwash merina es ideal para calcetines: es suave, resistente y lavable a máquina.",
          },
          {
            title: "Guantes sin dedos",
            content: "Teje un tubo básico hasta la base del pulgar, deja los puntos del pulgar en espera y cierra los de la mano. Vuelve por los puntos del pulgar y teje un pequeño tubo corto. El patrón puede llevar trenzas o encaje.",
            tip: "El número de puntos del pulgar es siempre el 25% del total de la mano.",
          },
        ],
      },
    ],
  },
];

export default function TejidoPage() {
  const [openLevel, setOpenLevel] = useState<string>("principiante");
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openLesson, setOpenLesson] = useState<string | null>(null);

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
            background: "radial-gradient(ellipse at 40% 60%, rgba(255,255,255,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <AnimatedSection direction="up">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.85)" }}>Módulo 5</span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "#FEFEFE",
              margin: "0.5rem 0 1rem",
            }}
          >
            🧶 Taller de Tejido
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
            Desde tus primeros puntos hasta prendas completas. Un mundo cálido y creativo que espera por ti, hilo a hilo.
          </p>
        </AnimatedSection>
      </section>

      {/* Level tabs */}
      <div
        style={{
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(152,136,196,0.15)",
          padding: "1.25rem",
          position: "sticky",
          top: "4.5rem",
          zIndex: 30,
        }}
      >
        <div
          className="max-w-4xl mx-auto"
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {levels.map((lv) => (
            <button
              key={lv.id}
              onClick={() => setOpenLevel(lv.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontSize: "1rem",
                fontWeight: openLevel === lv.id ? 700 : 500,
                transition: "all 0.25s ease",
                background:
                  openLevel === lv.id
                    ? `linear-gradient(135deg, ${lv.color}, ${lv.color}CC)`
                    : "rgba(152,136,196,0.10)",
                color: openLevel === lv.id ? "#FEFEFE" : "#2D2418",
                boxShadow:
                  openLevel === lv.id
                    ? `0 4px 16px -4px ${lv.color}60`
                    : "none",
                minHeight: "3.25rem",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{lv.emoji}</span>
              {lv.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "3rem 1.25rem 5rem" }}>
        {levels
          .filter((lv) => lv.id === openLevel)
          .map((lv) => (
            <AnimatedSection key={lv.id} direction="up">
              {/* Level intro */}
              <div
                style={{
                  background: lv.bg,
                  border: `1px solid ${lv.border}`,
                  borderRadius: "1.5rem",
                  padding: "1.75rem 2rem",
                  marginBottom: "2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                }}
              >
                <span style={{ fontSize: "2.5rem" }}>{lv.emoji}</span>
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#1C1410",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Nivel {lv.label}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "#2D2418",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {lv.description}
                  </p>
                </div>
              </div>

              {/* Sections */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {lv.sections.map((section) => {
                  const sKey = `${lv.id}-${section.title}`;
                  const sOpen = openSection === sKey;

                  return (
                    <div
                      key={sKey}
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        border: "1px solid rgba(152,136,196,0.18)",
                        borderRadius: "1.25rem",
                        overflow: "hidden",
                        boxShadow: sOpen
                          ? "0 8px 32px -8px rgba(155,136,196,0.20)"
                          : "0 2px 12px -4px rgba(155,136,196,0.10)",
                        transition: "box-shadow 0.3s ease",
                      }}
                    >
                      <button
                        onClick={() => setOpenSection(sOpen ? null : sKey)}
                        style={{
                          width: "100%",
                          padding: "1.375rem 1.75rem",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          textAlign: "left",
                        }}
                        aria-expanded={sOpen}
                      >
                        <span style={{ fontSize: "1.5rem" }}>{section.emoji}</span>
                        <span
                          style={{
                            flex: 1,
                            fontFamily: "var(--font-serif)",
                            fontSize: "1.15rem",
                            fontWeight: 700,
                            color: "#1C1410",
                          }}
                        >
                          {section.title}
                        </span>
                        <span
                          style={{
                            background: lv.bg,
                            color: lv.color,
                            padding: "0.2rem 0.6rem",
                            borderRadius: "9999px",
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            fontFamily: "var(--font-sans)",
                          }}
                        >
                          {section.lessons.length} lecciones
                        </span>
                        {sOpen
                          ? <ChevronUp className="w-5 h-5" style={{ color: lv.color, flexShrink: 0 }} />
                          : <ChevronDown className="w-5 h-5" style={{ color: "#9888C4", flexShrink: 0 }} />
                        }
                      </button>

                      {sOpen && (
                        <div style={{ padding: "0 1.75rem 1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                          {section.lessons.map((lesson) => {
                            const lKey = `${sKey}-${lesson.title}`;
                            const lOpen = openLesson === lKey;

                            return (
                              <div
                                key={lKey}
                                style={{
                                  border: `1px solid ${lv.border}`,
                                  borderRadius: "1rem",
                                  overflow: "hidden",
                                }}
                              >
                                <button
                                  onClick={() => setOpenLesson(lOpen ? null : lKey)}
                                  style={{
                                    width: "100%",
                                    padding: "1rem 1.25rem",
                                    background: lv.bg,
                                    border: "none",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: "0.75rem",
                                    textAlign: "left",
                                  }}
                                  aria-expanded={lOpen}
                                >
                                  <span
                                    style={{
                                      fontFamily: "var(--font-sans)",
                                      fontSize: "0.9375rem",
                                      fontWeight: 600,
                                      color: "#1C1410",
                                    }}
                                  >
                                    {lesson.title}
                                  </span>
                                  {lOpen
                                    ? <ChevronUp className="w-4 h-4" style={{ color: lv.color, flexShrink: 0 }} />
                                    : <ChevronDown className="w-4 h-4" style={{ color: lv.color, flexShrink: 0 }} />
                                  }
                                </button>

                                {lOpen && (
                                  <div style={{ padding: "1.25rem" }}>
                                    <p
                                      style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.9375rem",
                                        color: "#2D2418",
                                        lineHeight: 1.75,
                                        marginBottom: "1rem",
                                      }}
                                    >
                                      {lesson.content}
                                    </p>
                                    <div
                                      style={{
                                        display: "flex",
                                        gap: "0.6rem",
                                        padding: "0.875rem 1rem",
                                        background: "rgba(196,149,106,0.08)",
                                        borderRadius: "0.75rem",
                                        border: "1px solid rgba(196,149,106,0.18)",
                                      }}
                                    >
                                      <span style={{ flexShrink: 0, fontSize: "1rem" }}>💡</span>
                                      <p
                                        style={{
                                          fontFamily: "var(--font-sans)",
                                          fontSize: "0.875rem",
                                          color: "#2D2418",
                                          lineHeight: 1.65,
                                          margin: 0,
                                          fontStyle: "italic",
                                        }}
                                      >
                                        <strong>Consejo:</strong> {lesson.tip}
                                      </p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          ))}
      </div>
    </div>
  );
}
