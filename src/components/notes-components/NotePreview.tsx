import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setNewNoteTitle, setNewNoteContent } from "../../redux/actions/noteFieldsActions";
import { removeNote, setEditStatus } from "../../redux/actions/noteListActions";
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
    );
  }

  const { title, content, date } = notePreview;

  Date.parse(date);
  const configuratedDate = date.toLocaleDateString("en", {
    timeZone:"UTC",
    month:"long",
    day:"2-digit",
    year:"numeric"
  });

  const onNoteEdit = () => {
    dispatch(setEditStatus(true));
    dispatch(setNewNoteTitle(title));
    dispatch(setNewNoteContent(content));
  }

  return (
    <div className="preview-note-item">
      <h5 className="">{title}</h5>
      <p className="">{content}</p>
      <p className="">{configuratedDate}</p>
      <Link
        to="/"
        className=""
        onClick={() => dispatch(removeNote(notePreview.id))}
      >
        Delete
      </Link>
      <Link
        to={`/edit-note/${notePreview.id}`}
        className=""
        onClick={() => onNoteEdit()}
      >
        Edit
      </Link>
    </div>
  );
};

export default NotePreview;