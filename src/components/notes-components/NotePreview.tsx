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
      <div>
        <p className="">You have no notes here yet</p>
      </div>
    )
  }

  if (!notePreview) {
    return (
      <div>
        <p className="">Click on the note to preview info</p>
      </div>
    );
  }

  const { title, noteText } = notePreview;

  const onNoteEdit = () => {
    dispatch(setEditStatus(true));
    dispatch(setNewNoteTitle(title));
    dispatch(setNewNoteContent(noteText));
  }

  return (
    <div className="">
      <div className="">
        <div className="">
          <h5 className="">{title}</h5>
          <p className="">{noteText}</p>
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
      </div>
    </div>
  );
};

export default NotePreview;