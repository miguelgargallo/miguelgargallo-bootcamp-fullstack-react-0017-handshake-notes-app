import "./styles.css";
import { useState } from "react";
import { Note } from "./Note.js";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("crear nota");
    const noteToAddToState = {
      hash: notes.lenght + 1,
      fee: newNote
    };

    setNotes((prevNotes) => prevNotes.concat(noteToAddToState));
    setNewNote("");
  };

  return (
    <div>
      <h1>HNS Transfers</h1>
      <ol>
        {notes.map((note, index) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Add fee</button>
      </form>
    </div>
  );
}
