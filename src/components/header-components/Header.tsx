import Categories from './Categories';
import HomeBtn from './HomeBtn';
import OpenCreateFormBtn from './OpenCreateFormBtn';

const Header: React.FC = () => {
  return (
    <>
      <div className='flex-container'>
        <HomeBtn />
        <Categories />
        <OpenCreateFormBtn />
      </div>
    </>
  )
}

export default Header;