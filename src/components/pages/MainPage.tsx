import NotePreview from "../notes-components/NotePreview";
import NotesList from "../notes-components/NotesList";
import Header from "../header-components/Header";

const MainPage: React.FC = () => {
  return (
    <>
        <Header />
        <div className="main-page-container">
          <NotesList />
          <NotePreview />
        </div>
    </>
  )
}

export default MainPage;