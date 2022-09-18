import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { updateNote, addNewNote, setEditStatus } from '../../redux/actions/noteListActions';
import { setNewNoteContent, setNewNoteTitle, setNewNoteCategory } from '../../redux/actions/noteFieldsActions';

export const CreateNewNote: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const notesList = useSelector((state: AppState) => state.notesList);

    const { title, content, category } = useSelector((state: AppState) => state.noteFields)

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
            category,
          };
          dispatch(updateNote(updatedNote));
        } else {
          dispatch(addNewNote({ title, content, category }));
        }
        navigate("/");
    }

    const handleFormCancel = () => {
        dispatch(setNewNoteContent(''));
        dispatch(setNewNoteTitle(''));
        dispatch(setNewNoteCategory('Task'));
        dispatch(setEditStatus(false));
    }

    return (
      <div className='open-form-btn-container'>
        <form
        className="create-note-form"
        onSubmit={(event) => handleFormSubmit(event)}
        >
          <label>Note's name:</label>
          <input
            type="text"
            name='title'
            className="create-note-form-elements"
            placeholder="Enter note's name here"
            value={title}
            onChange={(e) => dispatch(setNewNoteTitle(e.target.value))}
            required
            minLength={3}
          />
          <label>Note's content:</label>
          <textarea
            className="create-note-form-elements"
            id="noteTextarea"
            rows={4}
            value={content}
            onChange={(e) => dispatch(setNewNoteContent(e.target.value))}
            placeholder="Enter content here"
            required
          />
          <label>Note's category:</label>
          <select
            className='create-note-form-elements'
            value={category}
            onChange={(e) => dispatch(setNewNoteCategory(e.target.value))}
            required
          >
            <option defaultValue='Task'>Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
          </select>
          <button className="edit-note-btn" type="submit">
            Submit
          </button>
          <Link
            to="/"
            className="delete-note-btn"
            onClick={handleFormCancel}
          >
            Cancel
          </Link>
        </form>
      </div>
    )
}

export default CreateNewNote;