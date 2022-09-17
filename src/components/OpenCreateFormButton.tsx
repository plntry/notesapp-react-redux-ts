import { Link } from 'react-router-dom';

const OpenCreateFormBtn: React.FC = () => {
  return (
    <>
        <Link to='/create-note' className="">
          Add new note
        </Link>   
    </>
  )
}

export default OpenCreateFormBtn;