'use client';
export default function NoteList({ notes, onDelete }) {
  return notes.map(n => (
    <div key={n._id}>
      <h3>{n.title}</h3>
      <p>{n.content}</p>
      <button onClick={()=>onDelete(n._id)}>Delete</button>
    </div>
  ));
}
