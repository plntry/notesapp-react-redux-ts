import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNotePreviewId } from "../../redux/actions/noteFieldsActions";

const Note: React.FC<INote> = ({ content, title, date, id }) => {
  const notePreviewId = useSelector((state: AppState) => state.notePreviewId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNoteClick = () => {
    navigate(`/${id}`);
    dispatch(setNotePreviewId(id));
  };

  const configuratedDate = new Date(date)
    .toLocaleDateString("en", {
      timeZone:"UTC",
      month:"long",
      day:"2-digit",
      year:"numeric"
    }) 

  const slicedNoteText =
  content.length > 40 ? content.slice(0, 40).concat("...") : content;

  let styledNote = "note-item";

  if (notePreviewId === id) {
    styledNote += " note-active";
  }

  return (
    <div className={styledNote} onClick={handleNoteClick}>
      <div className="flex-container">
        <div>{configuratedDate}</div>
        <div className="note-category">Task</div>
      </div>
      
      <div className="">{title}</div>
      <div className="">{slicedNoteText}</div>
      <small>{configuratedDate}</small>
    </div>
  );
};

export default Note;