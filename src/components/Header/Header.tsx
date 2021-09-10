import s from './Header.module.css';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
  return (
    <div className={s.headerWrapper}>
      <Logo />
      <SearchBar />
    </div>
  );
};

export default Header;
