"use client";

import { useEffect, useState } from "react";
import NoteForm from "@/components/NoteForm";
import NoteList from "@/components/NoteList";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  // Load all notes
  const loadNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  // Create or Update note
  const saveNote = async (note) => {
    if (editingNote) {
      // UPDATE
      await fetch(`/api/notes/${editingNote._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
      setEditingNote(null);
    } else {
      // CREATE
      await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
    }
    loadNotes();
  };

  // Delete note
  const deleteNote = async (id) => {
    await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });
    loadNotes();
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <main style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Notes App</h1>

      <NoteForm onSave={saveNote} editing={editingNote} />

      <NoteList
        notes={notes}
        onDelete={deleteNote}
        onEdit={setEditingNote}
      />
    </main>
  );
}
