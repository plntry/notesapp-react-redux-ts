import { Link } from 'react-router-dom';

const HomeBtn: React.FC = () => {
  return (
    <>
      <div className='header-btn-container'>
        <Link to='/' className="header-btn">
          Home
        </Link>
      </div>
    </>
  )
}

export default HomeBtn;