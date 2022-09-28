import Categories from './Categories';
import HomeBtn from './HomeBtn';
import OpenCreateFormBtn from './OpenCreateFormBtn';

const Header: React.FC = () => {
  return (
    <>
      <header className='flex-container'>
        <HomeBtn />
        <Categories />
        <OpenCreateFormBtn />
      </header>
    </>
  )
}

export default Header;