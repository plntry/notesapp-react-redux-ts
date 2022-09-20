import Categories from './Categories';
import OpenCreateFormBtn from './OpenCreateFormBtn';

const Header: React.FC = () => {
  return (
    <>
      <div className='flex-container'>
        <Categories />
        <OpenCreateFormBtn />
      </div>
    </>
  )
}

export default Header;