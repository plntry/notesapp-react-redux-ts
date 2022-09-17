import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

const NotesList: React.FC = () => {
  const { notesList, searchText } = useSelector((state: AppState) => state);

  return (
    <div className='notes-container'>
      {notesList
        .filter((note) =>
          searchText
            ? note.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1
            : note
        )
        .map((note) => (
          <Note
            key={note.id}
            id={note.id}
            date={note.date}
            content={note.content}
            title={note.title}
          />
        ))}
    </div>
  )
}

export default NotesList;