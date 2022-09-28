import { Link } from 'react-router-dom';

const OpenCreateFormBtn: React.FC = () => {
  return (
    <>
      <div className='header-btn-container'>
        <Link to='/create-note' className="header-btn">
          New note
        </Link> 
      </div>
    </>
  )
}

export default OpenCreateFormBtn;