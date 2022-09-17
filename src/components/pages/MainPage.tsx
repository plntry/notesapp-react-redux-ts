import NotePreview from "../notes-components/NotePreview";
import NotesList from "../notes-components/NotesList";
import OpenCreateFormBtn from "../OpenCreateFormBtn";


const MainPage: React.FC = () => {
  return (
    <>
        <OpenCreateFormBtn />
        <div className="main-page-container">
          <NotesList />
          <NotePreview />
        </div>
    </>
  )
}

export default MainPage;