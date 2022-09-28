import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Categories: React.FC = () => {

  const notesActiveList = useSelector((state: AppState) => state.notesActiveList);
  const notesArchivedList = useSelector((state: AppState) => state.notesArchivedList);

  const numberOfActiveTasks = notesActiveList.filter(note => note.category === 'Task').length;
  const numberOfActiveRandomThoughts = notesActiveList.filter(note => note.category === 'Random Thought').length;
  const numberOfActiveIdeas = notesActiveList.filter(note => note.category === 'Idea').length;

  const numberOfArchivedTasks = notesArchivedList.filter(note => note.category === 'Task').length;
  const numberOfArchivedRandomThoughts = notesArchivedList.filter(note => note.category === 'Random Thought').length;
  const numberOfArchivedIdeas = notesArchivedList.filter(note => note.category === 'Idea').length;

  return (
    <>
        <div className='categories'>
            <Link to='/archived-tasks' className="note-category note-category-hover">
              Tasks
            </Link> 
            <div className="category-text-container">
              <div className="category-text">Active: {numberOfActiveTasks}</div>
              <div className="category-text">Archived: {numberOfArchivedTasks}</div>
            </div>
            <Link to='/archived-random-thoughts' className="note-category note-random-thought note-category-hover">
              Random Thoughts
            </Link>
            <div className="category-text-container">
              <div className="category-text">Active: {numberOfActiveRandomThoughts}</div>
              <div className="category-text">Archived: {numberOfArchivedRandomThoughts}</div>
            </div>
            <Link to='/archived-ideas' className="note-category note-idea note-category-hover">
              Ideas
            </Link>
            <div className="category-text-container">
              <div className="category-text">Active: {numberOfActiveIdeas}</div>
              <div className="category-text">Archived: {numberOfArchivedIdeas}</div>
            </div>
        </div>
    </>
  )
}

export default Categories;