"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { Plus, Trash2, Heart, StickyNote, Folder, Palette, Star } from "lucide-react";
import type { SavedDesign, Note, Collection } from "@/types";

const noteColors = [
  "#FFF3E0", "#FCE4EC", "#EDE7F6", "#E3F2FD", "#E8F5E9", "#FFF8E1",
];

const collectionEmojis = ["👗", "🧶", "🌸", "✨", "🎨", "💜", "🌹", "🏆", "🦋", "🌙"];

export default function RinconPage() {
  const [tab, setTab] = useState<"designs" | "notes" | "collections">("designs");
  const [designs, setDesigns] = useState<SavedDesign[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [mounted, setMounted] = useState(false);

  // New note form
  const [newNote, setNewNote] = useState({ title: "", content: "", color: noteColors[0] });
  const [showNoteForm, setShowNoteForm] = useState(false);

  // New collection form
  const [newCol, setNewCol] = useState({ name: "", emoji: "👗" });
  const [showColForm, setShowColForm] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDesigns(JSON.parse(localStorage.getItem("rincon_designs") || "[]"));
    setNotes(JSON.parse(localStorage.getItem("rincon_notes") || "[]"));
    setCollections(JSON.parse(localStorage.getItem("rincon_collections") || "[]"));
  }, []);

  const saveDesigns = (d: SavedDesign[]) => {
    setDesigns(d);
    localStorage.setItem("rincon_designs", JSON.stringify(d));
  };
  const saveNotes = (n: Note[]) => {
    setNotes(n);
    localStorage.setItem("rincon_notes", JSON.stringify(n));
  };
  const saveCols = (c: Collection[]) => {
    setCollections(c);
    localStorage.setItem("rincon_collections", JSON.stringify(c));
  };

  const toggleFav = (id: string) => {
    saveDesigns(designs.map((d) => d.id === id ? { ...d, favorite: !d.favorite } : d));
  };
  const deleteDesign = (id: string) => saveDesigns(designs.filter((d) => d.id !== id));

  const addNote = () => {
    if (!newNote.title.trim()) return;
    const note: Note = {
      id: Date.now().toString(),
      ...newNote,
      date: new Date().toLocaleDateString("es-AR"),
      pinned: false,
    };
    saveNotes([note, ...notes]);
    setNewNote({ title: "", content: "", color: noteColors[0] });
    setShowNoteForm(false);
  };
  const deleteNote = (id: string) => saveNotes(notes.filter((n) => n.id !== id));
  const pinNote = (id: string) => saveNotes(notes.map((n) => n.id === id ? { ...n, pinned: !n.pinned } : n));

  const addCollection = () => {
    if (!newCol.name.trim()) return;
    const col: Collection = {
      id: Date.now().toString(),
      ...newCol,
      date: new Date().toLocaleDateString("es-AR"),
      items: [],
    };
    saveCols([col, ...collections]);
    setNewCol({ name: "", emoji: "👗" });
    setShowColForm(false);
  };
  const deleteCollection = (id: string) => saveCols(collections.filter((c) => c.id !== id));

  const tabs = [
    { id: "designs", label: "Mis diseños", icon: Palette, count: designs.length },
    { id: "notes", label: "Mis notas", icon: StickyNote, count: notes.length },
    { id: "collections", label: "Colecciones", icon: Folder, count: collections.length },
  ] as const;

  if (!mounted) return null;

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #E8C9A8 0%, #C4956A 50%, #9888C4 100%)",
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
            background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <AnimatedSection direction="up">
          <span className="section-label" style={{ color: "rgba(255,255,255,0.85)" }}>Módulo 7</span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 700,
              color: "#FEFEFE",
              margin: "0.5rem 0 1rem",
            }}
          >
            💛 El Rincón de Tilde
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
            Tu espacio personal y privado. Aquí viven tus diseños, tus notas e inspiraciones, todo guardado con amor.
          </p>
        </AnimatedSection>
      </section>

      {/* Tabs */}
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
          style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}
        >
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.375rem",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  fontWeight: active ? 700 : 500,
                  transition: "all 0.22s ease",
                  background: active
                    ? "linear-gradient(135deg, #C4956A, #8B5C2A)"
                    : "rgba(152,136,196,0.10)",
                  color: active ? "#FEFEFE" : "#2D2418",
                  minHeight: "3.25rem",
                }}
              >
                <Icon className="w-4 h-4" />
                {t.label}
                <span
                  style={{
                    background: active ? "rgba(255,255,255,0.25)" : "rgba(152,136,196,0.15)",
                    color: active ? "#FEFEFE" : "#6B5B9E",
                    padding: "0.1rem 0.5rem",
                    borderRadius: "9999px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                  }}
                >
                  {t.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "75rem", margin: "0 auto", padding: "3rem 1.25rem 5rem" }}>

        {/* DESIGNS */}
        {tab === "designs" && (
          <div>
            {designs.length === 0 ? (
              <AnimatedSection direction="up">
                <div
                  style={{
                    textAlign: "center",
                    padding: "5rem 2rem",
                    background: "rgba(255,255,255,0.70)",
                    borderRadius: "1.5rem",
                    border: "1px dashed rgba(152,136,196,0.30)",
                  }}
                >
                  <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎨</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      color: "#1C1410",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Aún no tienes diseños guardados
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "1rem",
                      color: "#8B7355",
                      lineHeight: 1.7,
                      maxWidth: "380px",
                      margin: "0 auto",
                    }}
                  >
                    Ve al <strong>Taller de Diseño</strong> para crear tu primera prenda y guardarla aquí. ¡Te estará esperando!
                  </p>
                </div>
              </AnimatedSection>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {designs.map((d, i) => (
                  <AnimatedSection key={d.id} direction="up" delay={i * 0.05}>
                    <div className="card-luxury">
                      {/* Color swatch */}
                      <div
                        style={{
                          width: "100%",
                          height: "5rem",
                          borderRadius: "0.875rem",
                          background: d.color,
                          marginBottom: "1.25rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "2.25rem",
                        }}
                      >
                        {d.emoji}
                      </div>

                      <h4
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "#1C1410",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {d.name}
                      </h4>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.8125rem",
                          color: "#8B7355",
                          marginBottom: "1.25rem",
                        }}
                      >
                        {d.category} · {d.date}
                      </p>

                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <button
                          onClick={() => toggleFav(d.id)}
                          style={{
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "0.4rem",
                            padding: "0.6rem",
                            borderRadius: "0.75rem",
                            border: "none",
                            cursor: "pointer",
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            background: d.favorite ? "rgba(239,68,68,0.12)" : "rgba(152,136,196,0.08)",
                            color: d.favorite ? "#dc2626" : "#8B7355",
                            transition: "all 0.2s ease",
                          }}
                        >
                          <Heart className={`w-4 h-4 ${d.favorite ? "fill-red-500 text-red-500" : ""}`} />
                          {d.favorite ? "Favorito" : "Guardar"}
                        </button>
                        <button
                          onClick={() => deleteDesign(d.id)}
                          style={{
                            padding: "0.6rem",
                            borderRadius: "0.75rem",
                            border: "none",
                            cursor: "pointer",
                            background: "rgba(239,68,68,0.08)",
                            color: "#dc2626",
                            transition: "all 0.2s ease",
                          }}
                          aria-label="Eliminar diseño"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        )}

        {/* NOTES */}
        {tab === "notes" && (
          <div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1.75rem" }}>
              <button
                onClick={() => setShowNoteForm(!showNoteForm)}
                className="btn-primary"
                style={{ gap: "0.5rem" }}
              >
                <Plus className="w-4 h-4" />
                Nueva nota
              </button>
            </div>

            {showNoteForm && (
              <AnimatedSection direction="up">
                <div
                  className="card-luxury"
                  style={{ marginBottom: "2rem" }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#1C1410",
                      marginBottom: "1.25rem",
                    }}
                  >
                    ✏️ Nueva nota
                  </h3>
                  <input
                    className="input-elegant"
                    placeholder="Título de la nota..."
                    value={newNote.title}
                    onChange={(e) => setNewNote((p) => ({ ...p, title: e.target.value }))}
                    style={{ marginBottom: "0.875rem" }}
                  />
                  <textarea
                    className="input-elegant"
                    placeholder="Escribe tu nota aquí... Una idea, una inspiración, una técnica que aprendiste..."
                    value={newNote.content}
                    onChange={(e) => setNewNote((p) => ({ ...p, content: e.target.value }))}
                    style={{ marginBottom: "0.875rem", minHeight: "7rem" }}
                  />
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.25rem" }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "#8B7355" }}>
                      Color:
                    </span>
                    {noteColors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setNewNote((p) => ({ ...p, color: c }))}
                        style={{
                          width: "1.75rem",
                          height: "1.75rem",
                          borderRadius: "50%",
                          background: c,
                          border: newNote.color === c
                            ? "3px solid #6B5B9E"
                            : "2px solid rgba(152,136,196,0.25)",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          transform: newNote.color === c ? "scale(1.2)" : "scale(1)",
                        }}
                      />
                    ))}
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <button onClick={() => setShowNoteForm(false)} className="btn-ghost">
                      Cancelar
                    </button>
                    <button onClick={addNote} className="btn-primary">
                      Guardar nota 💛
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {notes.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "5rem 2rem",
                  background: "rgba(255,255,255,0.70)",
                  borderRadius: "1.5rem",
                  border: "1px dashed rgba(152,136,196,0.30)",
                }}
              >
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>📝</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "#1C1410", marginBottom: "0.75rem" }}>
                  Aún no tienes notas
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "#8B7355" }}>
                  Escribe tus ideas, inspiraciones y aprendizajes aquí.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {[...notes].sort((a, b) => Number(b.pinned) - Number(a.pinned)).map((note, i) => (
                  <AnimatedSection key={note.id} direction="up" delay={i * 0.05}>
                    <div
                      style={{
                        background: note.color,
                        borderRadius: "1.25rem",
                        padding: "1.5rem",
                        border: "1px solid rgba(152,136,196,0.12)",
                        boxShadow: note.pinned
                          ? "0 8px 28px -8px rgba(155,136,196,0.30)"
                          : "0 4px 16px -4px rgba(155,136,196,0.12)",
                        position: "relative",
                      }}
                    >
                      {note.pinned && (
                        <div
                          style={{
                            position: "absolute",
                            top: "0.875rem",
                            right: "0.875rem",
                            fontSize: "1rem",
                          }}
                        >
                          📌
                        </div>
                      )}
                      <h4
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "#1C1410",
                          marginBottom: "0.5rem",
                          paddingRight: note.pinned ? "1.5rem" : "0",
                        }}
                      >
                        {note.title}
                      </h4>
                      {note.content && (
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.9375rem",
                            color: "#2D2418",
                            lineHeight: 1.65,
                            marginBottom: "1rem",
                          }}
                        >
                          {note.content}
                        </p>
                      )}
                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.75rem",
                          color: "#8B7355",
                          marginBottom: "0.875rem",
                        }}
                      >
                        {note.date}
                      </div>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <button
                          onClick={() => pinNote(note.id)}
                          style={{
                            flex: 1,
                            padding: "0.5rem",
                            borderRadius: "0.75rem",
                            border: "1px solid rgba(152,136,196,0.20)",
                            cursor: "pointer",
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            background: "rgba(255,255,255,0.60)",
                            color: "#6B5B9E",
                          }}
                        >
                          {note.pinned ? "Desanclar" : "📌 Anclar"}
                        </button>
                        <button
                          onClick={() => deleteNote(note.id)}
                          style={{
                            padding: "0.5rem 0.75rem",
                            borderRadius: "0.75rem",
                            border: "1px solid rgba(239,68,68,0.20)",
                            cursor: "pointer",
                            background: "rgba(239,68,68,0.08)",
                            color: "#dc2626",
                          }}
                          aria-label="Eliminar nota"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        )}

        {/* COLLECTIONS */}
        {tab === "collections" && (
          <div>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1.75rem" }}>
              <button
                onClick={() => setShowColForm(!showColForm)}
                className="btn-primary"
                style={{ gap: "0.5rem" }}
              >
                <Plus className="w-4 h-4" />
                Nueva colección
              </button>
            </div>

            {showColForm && (
              <AnimatedSection direction="up">
                <div className="card-luxury" style={{ marginBottom: "2rem" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 700, color: "#1C1410", marginBottom: "1.25rem" }}>
                    🗂️ Nueva colección
                  </h3>
                  <input
                    className="input-elegant"
                    placeholder="Nombre de la colección..."
                    value={newCol.name}
                    onChange={(e) => setNewCol((p) => ({ ...p, name: e.target.value }))}
                    style={{ marginBottom: "0.875rem" }}
                  />
                  <div style={{ marginBottom: "1.25rem" }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "#8B7355", display: "block", marginBottom: "0.5rem" }}>
                      Ícono:
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {collectionEmojis.map((e) => (
                        <button
                          key={e}
                          onClick={() => setNewCol((p) => ({ ...p, emoji: e }))}
                          style={{
                            width: "2.5rem",
                            height: "2.5rem",
                            borderRadius: "0.625rem",
                            border: newCol.emoji === e
                              ? "2px solid #6B5B9E"
                              : "1px solid rgba(152,136,196,0.25)",
                            cursor: "pointer",
                            fontSize: "1.25rem",
                            background: newCol.emoji === e ? "rgba(107,91,158,0.12)" : "rgba(255,255,255,0.6)",
                          }}
                        >
                          {e}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "0.75rem" }}>
                    <button onClick={() => setShowColForm(false)} className="btn-ghost">Cancelar</button>
                    <button onClick={addCollection} className="btn-primary">Crear colección</button>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {collections.length === 0 ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "5rem 2rem",
                  background: "rgba(255,255,255,0.70)",
                  borderRadius: "1.5rem",
                  border: "1px dashed rgba(152,136,196,0.30)",
                }}
              >
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🗂️</div>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "#1C1410", marginBottom: "0.75rem" }}>
                  Aún no tienes colecciones
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "#8B7355" }}>
                  Crea colecciones para organizar tu inspiración por temas.
                </p>
              </div>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: "1.25rem",
                }}
              >
                {collections.map((col, i) => (
                  <AnimatedSection key={col.id} direction="up" delay={i * 0.05}>
                    <div className="card-luxury">
                      <div style={{ fontSize: "2.75rem", marginBottom: "1rem", textAlign: "center" }}>
                        {col.emoji}
                      </div>
                      <h4
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "#1C1410",
                          textAlign: "center",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {col.name}
                      </h4>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.8125rem",
                          color: "#8B7355",
                          textAlign: "center",
                          marginBottom: "1.25rem",
                        }}
                      >
                        Creada el {col.date}
                      </p>
                      <button
                        onClick={() => deleteCollection(col.id)}
                        style={{
                          width: "100%",
                          padding: "0.6rem",
                          borderRadius: "0.75rem",
                          border: "1px solid rgba(239,68,68,0.20)",
                          cursor: "pointer",
                          background: "rgba(239,68,68,0.06)",
                          color: "#dc2626",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.8125rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.4rem",
                        }}
                      >
                        <Trash2 className="w-4 h-4" />
                        Eliminar
                      </button>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
