import { Link } from 'react-router-dom';

const OpenCreateFormBtn: React.FC = () => {
  return (
    <>
      <div className='open-form-btn-container'>
        <Link to='/create-note' className="open-form-btn">
          Add new note
        </Link> 
      </div>
    </>
  )
}

export default OpenCreateFormBtn;