import NotePreview from "../notes-components/NotePreview";
import NotesList from "../notes-components/NotesList";
import OpenCreateFormBtn from "../OpenCreateFormButton";


const MainPage: React.FC = () => {
  return (
    <>
        <OpenCreateFormBtn />
        <NotesList />
        <NotePreview />
    </>
  )
}

export default MainPage;