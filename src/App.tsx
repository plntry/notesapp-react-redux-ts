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

  const notesList = useSelector((state: AppState) => state.notesList);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [])

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    dispatch(fetchNotes(notes));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notesList));
  }, [notesList]);

  return (
    <>
      <Router>
        <Routes>
          <Route  path='/' element={<MainPage />} />
          <Route  path='/create-note' element={<CreateNewNote />} />
          <Route  path='/edit-note/:id' element={<CreateNewNote />} />
          <Route  path='/:id' element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;