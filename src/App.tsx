import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotes } from './redux/actions/noteListActions';
import { CreateNewNote } from './components/notes-components/CreateNewNote';
import MainPage from './components/pages/MainPage';
import { notes } from './data/notes';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const notesActiveList = useSelector((state: AppState) => state.notesActiveList);
  const notesArchivedList = useSelector((state: AppState) => state.notesArchivedList);

  useEffect(() => {
    localStorage.setItem('notesActiveList', JSON.stringify(notes));
  }, [])

  useEffect(() => {
    const activeNotes = JSON.parse(localStorage.getItem('notesActiveList') || '[]');
    dispatch(fetchNotes(activeNotes));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('notesActiveList', JSON.stringify(notesActiveList));
    localStorage.setItem('notesArchivedList', JSON.stringify(notesArchivedList));
  }, [notesActiveList, notesArchivedList]);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/create-note' element={<CreateNewNote />} />
          <Route path='/edit-note/:id' element={<CreateNewNote />} />
          <Route path='/:id' element={<MainPage />} />
          <Route path='/archived-tasks' element={<MainPage />} />
          <Route path='/archived-random-thoughts' element={<MainPage />} />
          <Route path='/archived-ideas' element={<MainPage />} />
          <Route path='/archived-tasks/edit-note/:id' element={<CreateNewNote />} />
          <Route path='/archived-random-thoughts/edit-note/:id' element={<CreateNewNote />} />
          <Route path='/archived-ideas/edit-note/:id' element={<CreateNewNote />} />
          <Route path='/archived-tasks/:id' element={<MainPage />} />
          <Route path='/archived-ideas/:id' element={<MainPage />} />
          <Route path='/archived-random-thoughts/:id' element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;