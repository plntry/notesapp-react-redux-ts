import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { updateNote, addNewNote, setEditStatus } from '../../redux/actions/noteListActions';
import { setNewNoteContent, setNewNoteTitle } from '../../redux/actions/noteFieldsActions';

export const CreateNewNote: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const notesList = useSelector((state: AppState) => state.notesList);

    const { title, content } = useSelector((state: AppState) => state.noteFields)

    const isEdit = useSelector((state: AppState) => state.isEdit);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (isEdit) {
          const note = notesList.find(
            (n) => n.id === +location.pathname.split('/')[2]
          );
          
          const updatedNote = {
            ...note,
            title,
            content,
          };
          dispatch(updateNote(updatedNote));
        } else {
          dispatch(addNewNote({ title, content }));
        }
        navigate("/");
    }

    const handleFormCancel = () => {
        dispatch(setNewNoteContent(''));
        dispatch(setNewNoteTitle(''));
        dispatch(setEditStatus(false));
    }

    return (
        <form
          className=""
          onSubmit={(event) => handleFormSubmit(event)}
        >

        <input
          type="text"
          className=""
          placeholder="Enter note's name here"
          value={title}
          onChange={(e) => dispatch(setNewNoteTitle(e.target.value))}
          required
          minLength={3}
        />

        <div className="">
          <textarea
            className=""
            id="noteTextarea"
            rows={4}
            value={content}
            onChange={(e) => dispatch(setNewNoteContent(e.target.value))}
            placeholder="Enter content here"
            required
          />
        </div>

        <div className="">
          <button className="" type="submit">
            Submit
          </button>
          <Link
            to="/"
            className=""
            onClick={handleFormCancel}
          >
            Cancel
          </Link>
        </div>
      </form>
    )
}

export default CreateNewNote;