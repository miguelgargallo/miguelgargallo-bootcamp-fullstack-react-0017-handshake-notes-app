import "./styles.css";
import { useEffect, useState } from "react";
import { Note } from "./Note.js";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    setLoading(true);

    setTimeout(() => {
      console.log("ahora");
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log("setenado los cambios de la API");
          setNotes(json);
          setLoading(false);
        });
    }, 2000);
  }, [newNote]);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("crear nota");
    const noteToAddToState = {
      id: notes.lenght + 1,
      title: newNote,
      body: newNote
    };

    setNotes((prevNotes) => prevNotes.concat(noteToAddToState));
    setNewNote("");
  };

  console.log("render");

  return (
    <div>
      <h1>Posts</h1>
      {loading ? "Cargando..." : ""}
      <li>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </li>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Add fee</button>
      </form>
    </div>
  );
}
