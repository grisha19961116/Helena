import s from './SearchBar.module.css';
import magnifierImg from '../../../img/magnifier.svg';

const SearchBar = ({ handleFilter }: { handleFilter: any }) => {
  return (
    <form className={s.searchBar} onChange={handleFilter}>
      <input
        type="text"
        className={s.searchBar__input}
        placeholder="Write country name..."
      ></input>
      <button className={s.searchBar__btn} type="submit">
        <img src={magnifierImg} alt="magnifier" width="30px" height="30px" />
      </button>
    </form>
  );
};

export default SearchBar;
