import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setNewNoteTitle, setNewNoteContent, setNewNoteCategory } from "../../redux/actions/noteFieldsActions";
import { removeNote, setEditStatus } from "../../redux/actions/noteListActions";
import { regexp } from "../../constants/constants";

const NotePreview: React.FC = () => {
  const dispatch = useDispatch();
  const { notesList, notePreviewId } = useSelector((state: AppState) => state);
  const notePreview = notesList.filter(({ id }) => id === notePreviewId)[0];

  if (notesList.length === 0) {
    return (
      <div className="open-form-btn-container">
        <p className="notes-message no-notes-message">You have no notes here yet :(</p>
      </div>
    )
  }

  if (!notePreview) {
    return (
      <div className="open-form-btn-container">
        <p className="notes-message">Click on the note to preview info</p>
      </div>
    )
  }

  const { title, content, category, date } = notePreview;
  
  const configuratedDate = (new Date(date)).toLocaleDateString("en", {
    timeZone:"UTC",
    month:"long",
    day:"2-digit",
    year:"numeric"
  })

  let dateMatch = Array.from(content.matchAll(regexp)).join(', ');

  const onNoteEdit = () => {
    dispatch(setEditStatus(true));
    dispatch(setNewNoteTitle(title));
    dispatch(setNewNoteContent(content));
    dispatch(setNewNoteCategory(category));
  }

  return (
    <div className="preview-note-item">
      <div className="preview-point">Created: </div><div>{configuratedDate}</div>
      <div className="preview-point">Name: </div><div className="">{title}</div>
      <div className="preview-point">Content: </div><div className="">{content}</div>
      <div className="preview-point">Category: </div><div className="">{category}</div>
      <div className="preview-point">Dates: </div><div className="">{dateMatch}</div>
      <Link
        to={`/edit-note/${notePreview.id}`}
        className="edit-note-btn"
        onClick={() => onNoteEdit()}
      >
        Edit
      </Link>
      <Link
        to="/"
        className="delete-note-btn"
        onClick={() => dispatch(removeNote(notePreview.id))}
      >
        Delete
      </Link>
    </div>
  );
};

export default NotePreview;