import s from './Header.module.css';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

const Header = ({ handleFilter }: { handleFilter: any }) => {
  return (
    <div className={s.headerWrapper}>
      <Logo />
      <SearchBar handleFilter={handleFilter} />
    </div>
  );
};

export default Header;
