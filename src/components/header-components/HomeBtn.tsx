import { Link } from 'react-router-dom';

const HomeBtn: React.FC = () => {
  return (
    <>
      <div className='open-form-btn-container'>
        <Link to='/' className="open-home-btn">
          Home
          <span className="tooltiptext">Click to open active tasks list</span>
        </Link>
      </div>
    </>
  )
}

export default HomeBtn;