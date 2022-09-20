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
        <div className='flex-container categories'>
            <Link to='/archived-tasks' className="note-category note-category-hover">
              Tasks
              <span className="tooltiptext">Click to open archived tasks list</span>
            </Link> 
            <div className="category-text-container">
              <div className="category-text category-text-choose">Active: {numberOfActiveTasks}</div>
              <div className="category-text">Archived: {numberOfArchivedTasks}</div>
            </div>
            <Link to='/archived-random-thoughts' className="note-category note-random-thought note-category-hover">
              Random Thoughts
              <span className="tooltiptext">Click to open archived random thoughts list</span>
            </Link>
            <div className="category-text-container">
              <div className="category-text category-text-choose">Active: {numberOfActiveRandomThoughts}</div>
              <div className="category-text">Archived: {numberOfArchivedRandomThoughts}</div>
            </div>
            <Link to='/archived-ideas' className="note-category note-idea note-category-hover">
              Ideas
              <span className="tooltiptext">Click to open archived ideas list</span>
            </Link>
            <div className="category-text-container">
              <div className="category-text category-text-choose">Active: {numberOfActiveIdeas}</div>
              <div className="category-text">Archived: {numberOfArchivedIdeas}</div>
            </div>
        </div>
    </>
  )
}

export default Categories;