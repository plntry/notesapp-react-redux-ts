import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setNewNoteTitle, setNewNoteContent, setNewNoteCategory } from "../../redux/actions/noteFieldsActions";
import { archiveNote, unarchiveNote, removeNote, setEditStatus } from "../../redux/actions/noteListActions";
import { regexp } from "../../constants/constants";

const NotePreview: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { notesActiveList, notesArchivedList, notePreviewId } = useSelector((state: AppState) => state);
  
  let notesToShow = [];
  let isArchivedPage = false;

  if (location.pathname.includes('archived')) {
    isArchivedPage = true;
    if (location.pathname.includes('tasks'))
      notesToShow = notesArchivedList.filter(note => note.category === 'Task');
    else if (location.pathname.includes('thoughts'))
      notesToShow = notesArchivedList.filter(note => note.category === 'Random Thought');
    else if (location.pathname.includes('ideas'))
      notesToShow = notesArchivedList.filter(note => note.category === 'Idea');
  } else
    notesToShow = notesActiveList;

  if (notesToShow.length === 0) {
    return (
      <div className="open-form-btn-container">
        <p className="notes-message no-notes-message">You have no notes here yet :(</p>
      </div>
    )
  }

  let notePreview = notesToShow.filter(({ id }) => id === notePreviewId)[0];

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

  const onNoteArchive = () => {
    dispatch(archiveNote(notePreview));
    navigate(-1);
  }

  const onNoteUnarchive = () => {
    dispatch(unarchiveNote(notePreview));
    navigate(-1);
  }

  let onNoteAction: () => void;

  let archiveBtnText = '';
  if (isArchivedPage) {
    archiveBtnText = 'Unarchive';
    onNoteAction = () => onNoteUnarchive();
  } else {
    archiveBtnText = 'Archive';
    onNoteAction = () => onNoteArchive();
  }
  // isArchivedPage ? archiveBtnText = 'Unarchive' : archiveBtnText = 'Archive';

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
      <button className="archive-note-btn" onClick={() => onNoteAction()}>
        {archiveBtnText}
      </button>
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