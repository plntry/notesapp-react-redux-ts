import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNotePreviewId } from "../../redux/actions/noteFieldsActions";

const Note: React.FC<INote> = ({ content, title, date, id }) => {
  const data = new Date(date);
  const notePreviewId = useSelector((state: AppState) => state.notePreviewId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNoteClick = () => {
    navigate(`/${id}`);
    dispatch(setNotePreviewId(id));
  };

  const configuratedDate = data
    .toLocaleDateString("en", {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
    .split(",");

  const time = configuratedDate[2];
  const month = configuratedDate[1];

  const slicedNoteText =
  content.length > 40 ? content.slice(0, 40).concat("...") : content;

  let noteStyles = "list-group-item";

  if (notePreviewId === id) {
    noteStyles += " active";
  }

  return (
    <div className={noteStyles} onClick={handleNoteClick}>
      <div className="">
        <h5 className="">{title}</h5>
        <small>{time}</small>
      </div>
      <p className="">{slicedNoteText}</p>
      <small>{month}</small>
    </div>
  );
};

export default Note;