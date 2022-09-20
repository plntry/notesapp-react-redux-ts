import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Note from "./Note";

const NotesList: React.FC = () => {
  const location = useLocation();
  
  let isPageWithActiveNotes = true;
  let notesToShow: Array<any> = [];

  const { notesActiveList } = useSelector((state: AppState) => state);
  const { notesArchivedList } = useSelector((state: AppState) => state);

  if (location.pathname.slice(0, 15) === '/archived-tasks' ||
      location.pathname.slice(0, 25) === '/archived-random-thoughts' ||
      location.pathname.slice(0, 15) === '/archived-ideas') {
    isPageWithActiveNotes = false;
  }

  if (isPageWithActiveNotes)
    notesToShow = notesActiveList;
  else if (location.pathname.slice(0, 15) === '/archived-tasks')
    notesToShow = notesArchivedList.filter(note => note.category === 'Task');
  else if (location.pathname.slice(0, 25) === '/archived-random-thoughts')
    notesToShow = notesArchivedList.filter(note => note.category === 'Random Thought');
  else if (location.pathname.slice(0, 15) === '/archived-ideas')
    notesToShow = notesArchivedList.filter(note => note.category === 'Idea');
    
  return (
    <div className='notes-container'>
      {notesToShow
        .map((note) => (
          <Note
            key={note.id}
            id={note.id}
            date={note.date}
            content={note.content}
            title={note.title}
            category={note.category}
            status={note.status}
          />
        ))}
    </div>
  )
}

export default NotesList;