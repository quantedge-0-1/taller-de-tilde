"use client";

import { useState, useRef, useEffect } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Send, Sparkles, RefreshCw } from "lucide-react";
import type { LunaMessage } from "@/types";

const suggestions = [
  "¿Cómo aprendo a tejer desde cero?",
  "¿Qué telas son mejores para principiantes?",
  "Enséñame sobre el punto jersey",
  "¿Cómo inicio mi propio diseño de moda?",
  "¿Qué herramientas necesito para coser?",
  "Explícame la diferencia entre patronaje y confección",
  "¿Cómo puedo inspirarme en Coco Chanel?",
  "Dame un ejercicio creativo para hoy",
];

export default function LunaPage() {
  const [messages, setMessages] = useState<LunaMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "¡Hola Tilde! 💜 Soy Luna, tu asistente de moda y creatividad. Estoy aquí para ayudarte a aprender, crear e inspirarte en cada paso de tu camino. ¿Qué le gustaría explorar hoy? Puedes preguntarme sobre técnicas de costura, tejido, diseñadores famosos, o simplemente pedirme que te dé un ejercicio creativo para esta tarde. ✨",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async (text?: string) => {
    const content = (text || input).trim();
    if (!content || loading) return;

    const userMsg: LunaMessage = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/luna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            ...messages.filter((m) => m.id !== "welcome"),
            userMsg,
          ].map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      const assistantMsg: LunaMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.content || "Lo siento, tuve un problema. ¿Puedes intentar de nuevo?",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Parece que hay un problema de conexión. Por favor intenta de nuevo en un momento. 💜",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "welcome-new",
        role: "assistant",
        content: "¡Hola de nuevo, Tilde! 💜 Conversación reiniciada. ¿En qué puedo ayudarte?",
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - 4.5rem)" }}>
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #9888C4 0%, #6B5B9E 100%)",
          padding: "2rem 1.25rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 80% 50%, rgba(255,255,255,0.10) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="max-w-3xl mx-auto"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.20)",
                border: "2px solid rgba(255,255,255,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.75rem",
              }}
            >
              🌙
            </div>
            <div>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#FEFEFE",
                  lineHeight: 1.2,
                }}
              >
                Luna IA
              </h1>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8125rem",
                  color: "rgba(255,255,255,0.80)",
                }}
              >
                <span
                  style={{
                    width: "0.5rem",
                    height: "0.5rem",
                    borderRadius: "50%",
                    background: "#4ade80",
                    display: "inline-block",
                  }}
                />
                Tu profesora virtual · Siempre disponible
              </div>
            </div>
          </div>

          <button
            onClick={clearChat}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              padding: "0.625rem 1.1rem",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "9999px",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: "#FEFEFE",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
          >
            <RefreshCw className="w-4 h-4" />
            Nueva conversación
          </button>
        </div>
      </section>

      {/* Chat area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "2rem 1.25rem",
          maxWidth: "48rem",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Suggestions */}
        {messages.length <= 1 && (
          <AnimatedSection direction="up">
            <div style={{ marginBottom: "1.75rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "#8B7355",
                  marginBottom: "0.875rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
              >
                <Sparkles className="w-4 h-4" style={{ color: "#C4956A" }} />
                Sugerencias para empezar:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    style={{
                      padding: "0.5rem 1rem",
                      background: "rgba(255,255,255,0.80)",
                      border: "1px solid rgba(152,136,196,0.22)",
                      borderRadius: "9999px",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "#2D2418",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(152,136,196,0.15)";
                      e.currentTarget.style.color = "#6B5B9E";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.80)";
                      e.currentTarget.style.color = "#2D2418";
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Messages */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: "flex",
                flexDirection: msg.role === "user" ? "row-reverse" : "row",
                alignItems: "flex-end",
                gap: "0.75rem",
              }}
            >
              {/* Avatar */}
              {msg.role === "assistant" && (
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #9888C4, #6B5B9E)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    flexShrink: 0,
                    marginBottom: "0.25rem",
                  }}
                >
                  🌙
                </div>
              )}

              <div
                className={msg.role === "assistant" ? "luna-bubble" : "user-bubble"}
                style={{ whiteSpace: "pre-wrap" }}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {loading && (
            <div style={{ display: "flex", alignItems: "flex-end", gap: "0.75rem" }}>
              <div
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #9888C4, #6B5B9E)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                🌙
              </div>
              <div className="luna-bubble" style={{ padding: "1rem 1.375rem" }}>
                <div style={{ display: "flex", gap: "0.3rem", alignItems: "center" }}>
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: "0.5rem",
                        height: "0.5rem",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.7)",
                        animation: "pulse-soft 1.4s ease-in-out infinite",
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input area */}
      <div
        style={{
          background: "rgba(237,231,246,0.95)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(152,136,196,0.18)",
          padding: "1.25rem",
        }}
      >
        <div
          className="max-w-3xl mx-auto"
          style={{ display: "flex", gap: "0.75rem", alignItems: "flex-end" }}
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Escribe tu pregunta a Luna... (Enter para enviar)"
            rows={1}
            style={{
              flex: 1,
              padding: "1rem 1.25rem",
              background: "rgba(255,255,255,0.90)",
              border: "1.5px solid rgba(152,136,196,0.28)",
              borderRadius: "1rem",
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              color: "#2D2418",
              outline: "none",
              resize: "none",
              lineHeight: 1.6,
              transition: "border-color 0.25s ease, box-shadow 0.25s ease",
              maxHeight: "7rem",
              overflowY: "auto",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#9888C4";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(152,136,196,0.15)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "rgba(152,136,196,0.28)";
              e.currentTarget.style.boxShadow = "none";
            }}
            disabled={loading}
          />
          <button
            onClick={() => send()}
            disabled={loading || !input.trim()}
            style={{
              width: "3.25rem",
              height: "3.25rem",
              borderRadius: "1rem",
              border: "none",
              cursor: loading || !input.trim() ? "not-allowed" : "pointer",
              background:
                loading || !input.trim()
                  ? "rgba(152,136,196,0.30)"
                  : "linear-gradient(135deg, #9888C4, #6B5B9E)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s ease",
              flexShrink: 0,
              boxShadow:
                !loading && input.trim()
                  ? "0 4px 14px -4px rgba(107,91,158,0.45)"
                  : "none",
            }}
            aria-label="Enviar mensaje"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
        <p
          style={{
            textAlign: "center",
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            color: "#B8A088",
            marginTop: "0.625rem",
          }}
        >
          Luna está impulsada por inteligencia artificial · Las respuestas pueden variar
        </p>
      </div>
    </div>
  );
}
