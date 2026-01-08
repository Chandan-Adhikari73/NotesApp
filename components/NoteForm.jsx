"use client";
import { useEffect, useState } from "react";

export default function NoteForm({ onSave, editing }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setContent(editing.content);
    }
  }, [editing]);

  const submit = (e) => {
    e.preventDefault();
    onSave({ title, content }); 
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">
        {editing ? "Update Note" : "Add Note"}
      </button>
    </form>
  );
}
