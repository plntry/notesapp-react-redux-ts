import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNotePreviewId } from "../../redux/actions/noteFieldsActions";
import { regexp } from "../../constants/constants";

const Note: React.FC<INote> = ({ content, title, category, date, id }) => {
  const notePreviewId = useSelector((state: AppState) => state.notePreviewId);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleNoteClick = () => {
    if (location.pathname === '/') {
      navigate(`/${id}`);
      dispatch(setNotePreviewId(id));
    }
    else if (!isNaN(parseInt(location.pathname.slice(-1)))) {
      if (location.pathname.includes('tasks')) {
        navigate(`/archived-tasks/${id}`);
        dispatch(setNotePreviewId(id));
      } else if (location.pathname.includes('random-thoughts')) {
        navigate(`/archived-random-thoughts/${id}`);
        dispatch(setNotePreviewId(id));
      } else if (location.pathname.includes('ideas')) {
        navigate(`/archived-ideas/${id}`);
        dispatch(setNotePreviewId(id));
      } else {
        navigate(`/${id}`);
        dispatch(setNotePreviewId(id));
      }
    }
    else {
      navigate(`${location.pathname}/${id}`);
      dispatch(setNotePreviewId(id));
    }
  };

  const configuratedDate = new Date(date)
    .toLocaleDateString("en", {
      timeZone:"UTC",
      month:"long",
      day:"2-digit",
      year:"numeric"
    })

  let dateMatch = Array.from(content.matchAll(regexp)).join(', ');

  const slicedContent =
  content.length > 40 ? content.slice(0, 40).concat("...") : content;

  let previewNoteStyle = 'note-item';

  if (notePreviewId === id) {
    previewNoteStyle += ' note-active';
  }

  let categoryStyle = 'note-category';

  if (category === 'Idea') {
    categoryStyle += ' note-idea';
  } else if (category === 'Random Thought') {
    categoryStyle += ' note-random-thought';
  }

  return (
    <div className={previewNoteStyle} onClick={handleNoteClick}>
      <div className="flex-container">
        <div className="note-date">{configuratedDate}</div>
        <div className={categoryStyle}>{category}</div>
      </div>
      <div className="note-title">{title}</div>
      <div className="note-content">{slicedContent}</div>
      <div className="note-dates">{dateMatch}</div>
    </div>
  );
};

export default Note;