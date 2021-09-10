import s from './SortBar.module.css';

const SortBar = ({ handleSort }: { handleSort: any }) => {
  return (
    <div className={s.sortBarWrapper} onClick={handleSort}>
      <button
        className={s.sortBarWrapper__btn}
        data-sort="Country"
        type="button"
      >
        Sort By Country Name
      </button>
      <button
        className={s.sortBarWrapper__btn}
        data-sort="TotalConfirmed"
        type="button"
      >
        Sort By TotalConfirmed
      </button>
    </div>
  );
};

export default SortBar;
