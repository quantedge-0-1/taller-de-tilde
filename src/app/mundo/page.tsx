"use client";

import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { cities } from "@/data/cities";
import { MapPin, TrendingUp, Star, Globe, Lightbulb, Palette } from "lucide-react";

export default function MundoPage() {
  const [selected, setSelected] = useState(cities[0].id);
  const city = cities.find((c) => c.id === selected)!;

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #1C4A3A 0%, #2D7A5E 50%, #1C4A3A 100%)",
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
            background: "radial-gradient(ellipse at 60% 40%, rgba(255,255,255,0.10) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <AnimatedSection direction="up">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.80)" }}>Módulo 3</span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "#FEFEFE",
              margin: "0.5rem 0 1rem",
            }}
          >
            🌍 Moda del Mundo
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.88)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Viaja por las cinco capitales de la moda y descubre cómo cada cultura expresa su identidad a través de la ropa.
          </p>
        </AnimatedSection>
      </section>

      {/* City selector */}
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
          {cities.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelected(c.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.625rem 1.25rem",
                borderRadius: "9999px",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                fontWeight: selected === c.id ? 700 : 500,
                transition: "all 0.25s ease",
                background:
                  selected === c.id
                    ? `linear-gradient(135deg, ${c.color}, ${c.accentColor})`
                    : "rgba(152,136,196,0.10)",
                color: selected === c.id ? "#FEFEFE" : "#2D2418",
                boxShadow:
                  selected === c.id
                    ? `0 4px 16px -4px ${c.color}60`
                    : "none",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{c.emoji}</span>
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* City content */}
      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "3rem 1.25rem 5rem" }}>
        <AnimatedSection direction="up" key={city.id}>
          {/* Header */}
          <div
            style={{
              background: `linear-gradient(135deg, ${city.color}18 0%, ${city.accentColor}12 100%)`,
              border: `1px solid ${city.color}25`,
              borderRadius: "1.75rem",
              padding: "2.5rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "3.5rem" }}>{city.emoji}</span>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.3rem" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.8rem,4vw,2.5rem)",
                      fontWeight: 700,
                      color: "#1C1410",
                    }}
                  >
                    {city.name}
                  </h2>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <MapPin className="w-4 h-4" style={{ color: city.accentColor }} />
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9rem",
                        color: "#8B7355",
                      }}
                    >
                      {city.country}
                    </span>
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    fontStyle: "italic",
                    color: city.accentColor,
                    margin: 0,
                  }}
                >
                  {city.tagline}
                </p>
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.0625rem",
                color: "#2D2418",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {city.history}
            </p>
          </div>

          <div style={{ display: "grid", gap: "1.5rem" }}>

            {/* Trends */}
            <div
              style={{
                background: "rgba(255,255,255,0.90)",
                border: "1px solid rgba(152,136,196,0.20)",
                borderRadius: "1.25rem",
                padding: "1.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <TrendingUp className="w-5 h-5" style={{ color: city.accentColor }} />
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1C1410",
                  }}
                >
                  Tendencias destacadas
                </h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {city.trends.map((t) => (
                  <li
                    key={t}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "#2D2418",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: "0.5rem",
                        height: "0.5rem",
                        borderRadius: "50%",
                        background: city.accentColor,
                        marginTop: "0.45rem",
                        flexShrink: 0,
                      }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Iconic designs */}
            <div
              style={{
                background: `${city.accentColor}08`,
                border: `1px solid ${city.accentColor}20`,
                borderRadius: "1.25rem",
                padding: "1.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <Star className="w-5 h-5" style={{ color: city.accentColor }} />
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1C1410",
                  }}
                >
                  Diseños icónicos
                </h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {city.iconicDesigns.map((d) => (
                  <div
                    key={d}
                    style={{
                      padding: "0.75rem 1rem",
                      background: "rgba(255,255,255,0.70)",
                      borderRadius: "0.75rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "#2D2418",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                    }}
                  >
                    <span style={{ color: city.accentColor }}>✦</span>
                    {d}
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural influences */}
            <div
              style={{
                background: "rgba(255,255,255,0.90)",
                border: "1px solid rgba(152,136,196,0.18)",
                borderRadius: "1.25rem",
                padding: "1.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <Globe className="w-5 h-5" style={{ color: "#9888C4" }} />
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1C1410",
                  }}
                >
                  Influencias culturales
                </h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {city.culturalInfluences.map((inf) => (
                  <li
                    key={inf}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9375rem",
                      color: "#2D2418",
                      lineHeight: 1.6,
                    }}
                  >
                    <Palette className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#9888C4" }} />
                    {inf}
                  </li>
                ))}
              </ul>
            </div>

            {/* Inspiration */}
            <div
              style={{
                background: `linear-gradient(135deg, ${city.color}12, ${city.accentColor}10)`,
                border: `1.5px dashed ${city.accentColor}35`,
                borderRadius: "1.25rem",
                padding: "1.75rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <Lightbulb className="w-5 h-5" style={{ color: city.accentColor }} />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: city.accentColor,
                  }}
                >
                  Inspiración para ti
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "#2D2418",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {city.inspiration}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
