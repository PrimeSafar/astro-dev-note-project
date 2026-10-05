import { useState, useEffect } from "react";

export default function SearchNotes() {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/notes.json")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = notes.filter((note) => {
    const q = query.toLowerCase();
    return (
      note.title.toLowerCase().includes(q) ||
      note.topic.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title or topic..."
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          border: "2px solid #ddd",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />

      {loading && <p>Loading...</p>}

      {!loading && filtered.length === 0 && <p>No notes found.</p>}

      {!loading &&
        filtered.map((note) => (
          <article
            key={note.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "12px",
            }}
          >
            <h3 style={{ margin: "0 0 6px 0" }}>
              <a href={`/notes/${note.id}`}>{note.title}</a>
            </h3>
            <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
              Topic: {note.topic}
            </p>
          </article>
        ))}
    </div>
  );
}