import Categories from './Categories';
import HomeBtn from './HomeBtn';
import OpenCreateFormBtn from './OpenCreateFormBtn';

const Header: React.FC = () => {
  return (
    <>
      <header>
        <HomeBtn />
        <Categories />
        <OpenCreateFormBtn />
      </header>
    </>
  )
}

export default Header;