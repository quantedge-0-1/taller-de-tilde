"use client";

import { useState } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Save, RefreshCw, Download, Palette } from "lucide-react";

const garmentTypes = [
  { id: "vestido", label: "Vestido", emoji: "👗" },
  { id: "blusa", label: "Blusa", emoji: "👚" },
  { id: "falda", label: "Falda", emoji: "🩱" },
  { id: "abrigo", label: "Abrigo", emoji: "🧥" },
  { id: "pantalon", label: "Pantalón", emoji: "👖" },
  { id: "sueter", label: "Suéter", emoji: "🧶" },
];

const fabrics = ["Algodón", "Seda", "Lino", "Lana", "Terciopelo", "Tul", "Encaje", "Denim", "Organza", "Jersey"];
const collars = ["Redondo", "V profundo", "Cuadrado", "Halter", "Barco", "Sin cuello", "Alto (turtleneck)", "Asimétrico"];
const sleeves = ["Sin mangas", "Manga corta", "3/4", "Manga larga", "Globo", "Campana", "Off-shoulder", "Manga única"];
const lengths = ["Mini (muslo)", "Rodilla", "Midi (pantorrilla)", "Maxi (tobillo)", "Largo total", "Asimétrico"];
const patterns = ["Liso", "Rayas", "Lunares", "Flores", "Geométrico", "Tartán", "Animal print", "Abstracto", "Bordado floral"];
const decorations = ["Ninguna", "Encaje", "Bordado manual", "Lentejuelas", "Plumas", "Botones decorativos", "Cinturón", "Flecos", "Volantes"];

const palette = [
  "#FEFEFE", "#F5F0FF", "#EDE7F6", "#C8BDE0", "#9888C4", "#6B5B9E",
  "#FFF3E0", "#E8C9A8", "#C4956A", "#8B5C2A", "#3A2010",
  "#FCE4EC", "#F48FB1", "#E91E63", "#880E4F",
  "#E8F5E9", "#A5D6A7", "#4CAF50", "#1B5E20",
  "#E3F2FD", "#90CAF9", "#2196F3", "#0D47A1",
  "#FFF8E1", "#FFE082", "#FFC107", "#E65100",
  "#1C1C1E", "#3A3A3A", "#888888",
];

interface Config {
  garmentType: string;
  primaryColor: string;
  secondaryColor: string;
  fabric: string;
  collar: string;
  sleeve: string;
  length: string;
  pattern: string;
  decoration: string;
}

const defaultConfig: Config = {
  garmentType: "vestido",
  primaryColor: "#9888C4",
  secondaryColor: "#C4956A",
  fabric: "Algodón",
  collar: "Redondo",
  sleeve: "Manga corta",
  length: "Midi (pantorrilla)",
  pattern: "Liso",
  decoration: "Ninguna",
};

function GarmentPreview({ config }: { config: Config }) {
  const garment = garmentTypes.find((g) => g.id === config.garmentType);

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.95)",
        borderRadius: "1.5rem",
        border: "1px solid rgba(152,136,196,0.20)",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.25rem",
        minHeight: "380px",
        position: "sticky",
        top: "6rem",
        maxWidth: "100%",
      }}
    >
      <span className="section-label">Vista previa</span>

      {/* Garment silhouette */}
      <div
        style={{
          width: "160px",
          height: "220px",
          borderRadius: config.garmentType === "pantalon" ? "0.5rem 0.5rem 1rem 1rem" : "4rem 4rem 2rem 2rem",
          background: config.pattern === "Rayas"
            ? `repeating-linear-gradient(45deg, ${config.primaryColor}, ${config.primaryColor} 10px, ${config.secondaryColor} 10px, ${config.secondaryColor} 20px)`
            : config.pattern === "Lunares"
            ? `radial-gradient(circle at 20% 30%, ${config.secondaryColor} 8px, transparent 8px), radial-gradient(circle at 60% 70%, ${config.secondaryColor} 6px, transparent 6px), ${config.primaryColor}`
            : config.pattern === "Flores"
            ? `radial-gradient(ellipse at 30% 40%, ${config.secondaryColor}99 15px, transparent 15px), radial-gradient(ellipse at 70% 60%, ${config.secondaryColor}88 12px, transparent 12px), ${config.primaryColor}`
            : config.pattern === "Geométrico"
            ? `linear-gradient(45deg, ${config.primaryColor} 25%, ${config.secondaryColor} 25%, ${config.secondaryColor} 50%, ${config.primaryColor} 50%)`
            : config.primaryColor,
          backgroundSize: config.pattern === "Rayas" ? "28px 28px"
            : config.pattern === "Lunares" ? "60px 60px, 80px 80px, 100% 100%"
            : config.pattern === "Geométrico" ? "30px 30px"
            : "auto",
          boxShadow: `0 12px 40px -8px ${config.primaryColor}60`,
          position: "relative",
          transition: "all 0.4s ease",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "1rem",
        }}
      >
        {config.decoration !== "Ninguna" && (
          <div
            style={{
              position: "absolute",
              top: "15%",
              right: "10%",
              fontSize: "1.5rem",
            }}
          >
            {config.decoration === "Encaje" ? "🌸"
              : config.decoration === "Bordado manual" ? "🌺"
              : config.decoration === "Lentejuelas" ? "✨"
              : config.decoration === "Plumas" ? "🪶"
              : config.decoration === "Botones decorativos" ? "⚪"
              : config.decoration === "Cinturón" ? "⬛"
              : config.decoration === "Flecos" ? "〰️"
              : config.decoration === "Volantes" ? "🎀"
              : ""}
          </div>
        )}
      </div>

      {/* Details */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <div
          style={{
            textAlign: "center",
            fontFamily: "var(--font-serif)",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#1C1410",
          }}
        >
          {garment?.emoji} {garment?.label}
        </div>

        {[
          { label: "Tela", value: config.fabric },
          { label: "Cuello", value: config.collar },
          { label: "Mangas", value: config.sleeve },
          { label: "Largo", value: config.length },
          { label: "Estampado", value: config.pattern },
          { label: "Decoración", value: config.decoration },
        ].map(({ label, value }) => (
          <div
            key={label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0.35rem 0",
              borderBottom: "1px solid rgba(152,136,196,0.10)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
            }}
          >
            <span style={{ color: "#8B7355" }}>{label}</span>
            <span style={{ color: "#2D2418", fontWeight: 600 }}>{value}</span>
          </div>
        ))}
      </div>

      {/* Color swatches */}
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        <div
          style={{
            width: "2rem",
            height: "2rem",
            borderRadius: "50%",
            background: config.primaryColor,
            border: "2px solid rgba(255,255,255,0.8)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
          title="Color principal"
        />
        <div
          style={{
            width: "1.5rem",
            height: "1.5rem",
            borderRadius: "50%",
            background: config.secondaryColor,
            border: "2px solid rgba(255,255,255,0.8)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
          }}
          title="Color secundario"
        />
      </div>
    </div>
  );
}

export default function TallerPage() {
  const [config, setConfig] = useState<Config>(defaultConfig);
  const [saved, setSaved] = useState(false);

  const update = (key: keyof Config, value: string) =>
    setConfig((prev) => ({ ...prev, [key]: value }));

  const handleSave = () => {
    const designs = JSON.parse(localStorage.getItem("rincon_designs") || "[]");
    const garment = garmentTypes.find((g) => g.id === config.garmentType);
    const newDesign = {
      id: Date.now().toString(),
      name: `Mi ${garment?.label || "diseño"}`,
      category: garment?.label || "Diseño",
      emoji: garment?.emoji || "👗",
      color: config.primaryColor,
      date: new Date().toLocaleDateString("es-AR"),
      favorite: false,
      config,
    };
    localStorage.setItem("rincon_designs", JSON.stringify([...designs, newDesign]));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleReset = () => setConfig(defaultConfig);

  const Section = ({ title, emoji, children }: { title: string; emoji: string; children: React.ReactNode }) => (
    <div style={{ marginBottom: "1.75rem" }}>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.1rem",
          fontWeight: 700,
          color: "#1C1410",
          marginBottom: "0.875rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span>{emoji}</span> {title}
      </h3>
      {children}
    </div>
  );

  const OptionGrid = ({
    options,
    field,
    isColor = false,
  }: {
    options: string[];
    field: keyof Config;
    isColor?: boolean;
  }) => {
    if (isColor) {
      return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => update(field, opt)}
              title={opt}
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "50%",
                background: opt,
                border:
                  config[field] === opt
                    ? "3px solid #6B5B9E"
                    : "2px solid rgba(152,136,196,0.25)",
                cursor: "pointer",
                boxShadow:
                  config[field] === opt
                    ? "0 0 0 3px rgba(107,91,158,0.25)"
                    : "0 2px 8px rgba(0,0,0,0.10)",
                transition: "all 0.2s ease",
                transform: config[field] === opt ? "scale(1.15)" : "scale(1)",
              }}
            />
          ))}
        </div>
      );
    }

    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => update(field, opt)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              fontWeight: config[field] === opt ? 700 : 500,
              transition: "all 0.2s ease",
              background:
                config[field] === opt
                  ? "linear-gradient(135deg, #9888C4, #6B5B9E)"
                  : "rgba(152,136,196,0.10)",
              color: config[field] === opt ? "#FEFEFE" : "#2D2418",
              boxShadow:
                config[field] === opt
                  ? "0 4px 14px -4px rgba(107,91,158,0.40)"
                  : "none",
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #C8BDE0 0%, #9888C4 100%)",
          padding: "3.5rem 1.25rem 4.5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <AnimatedSection direction="up">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.85)" }}>Módulo 4</span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "#FEFEFE",
              margin: "0.5rem 0 1rem",
            }}
          >
            🎨 Taller de Diseño
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.90)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Diseña tu prenda ideal. Elige tipo, tela, colores, cuello, mangas y decoraciones. ¡La prenda perfecta te espera!
          </p>
        </AnimatedSection>
      </section>

      {/* Builder */}
      <div
        style={{
          maxWidth: "75rem",
          margin: "0 auto",
          padding: "3rem 1.25rem 5rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "2rem",
            alignItems: "start",
          }}
        >
          {/* Controls */}
          <AnimatedSection direction="up">
            <div className="card-luxury">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1C1410",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <Palette className="w-5 h-5" style={{ color: "#9888C4" }} />
                  Personaliza tu diseño
                </h2>
                <div style={{ display: "flex", gap: "0.625rem" }}>
                  <button onClick={handleReset} className="btn-ghost" style={{ gap: "0.4rem", padding: "0.6rem 1rem", fontSize: "0.875rem" }}>
                    <RefreshCw className="w-4 h-4" />
                    Reiniciar
                  </button>
                  <button
                    onClick={handleSave}
                    className="btn-primary"
                    style={{ gap: "0.4rem", padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}
                  >
                    <Save className="w-4 h-4" />
                    {saved ? "¡Guardado! 💛" : "Guardar"}
                  </button>
                </div>
              </div>

              {/* Garment type */}
              <Section title="Tipo de prenda" emoji="👗">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))", gap: "0.625rem" }}>
                  {garmentTypes.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => update("garmentType", g.id)}
                      style={{
                        padding: "0.875rem 0.5rem",
                        borderRadius: "1rem",
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.35rem",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                        fontWeight: config.garmentType === g.id ? 700 : 500,
                        transition: "all 0.2s ease",
                        background:
                          config.garmentType === g.id
                            ? "linear-gradient(135deg, rgba(196,149,106,0.20), rgba(152,136,196,0.20))"
                            : "rgba(152,136,196,0.07)",
                        color: "#2D2418",
                        border: config.garmentType === g.id
                          ? "1.5px solid rgba(196,149,106,0.40)"
                          : "1.5px solid transparent",
                      }}
                    >
                      <span style={{ fontSize: "1.6rem" }}>{g.emoji}</span>
                      {g.label}
                    </button>
                  ))}
                </div>
              </Section>

              {/* Colors */}
              <Section title="Color principal" emoji="🎨">
                <OptionGrid options={palette} field="primaryColor" isColor />
              </Section>

              <Section title="Color secundario" emoji="🎨">
                <OptionGrid options={palette} field="secondaryColor" isColor />
              </Section>

              <Section title="Tela" emoji="🧵">
                <OptionGrid options={fabrics} field="fabric" />
              </Section>

              <Section title="Tipo de cuello" emoji="👔">
                <OptionGrid options={collars} field="collar" />
              </Section>

              <Section title="Mangas" emoji="👐">
                <OptionGrid options={sleeves} field="sleeve" />
              </Section>

              <Section title="Largo" emoji="📏">
                <OptionGrid options={lengths} field="length" />
              </Section>

              <Section title="Estampado" emoji="🌸">
                <OptionGrid options={patterns} field="pattern" />
              </Section>

              <Section title="Decoración" emoji="✨">
                <OptionGrid options={decorations} field="decoration" />
              </Section>

              {/* Save confirmation */}
              {saved && (
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    background: "rgba(34,197,94,0.12)",
                    border: "1px solid rgba(34,197,94,0.30)",
                    borderRadius: "0.875rem",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9375rem",
                    color: "#166534",
                    textAlign: "center",
                  }}
                >
                  ✅ Diseño guardado en <strong>Mi Rincón</strong> 💛
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Preview */}
          <AnimatedSection direction="up" delay={0.1}>
            <GarmentPreview config={config} />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
