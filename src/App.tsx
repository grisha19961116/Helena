import { lazy } from 'react';

import s from './App.module.css';
import useCountries from './hooks/useCountries';

const CountriesList = lazy(
  () =>
    import(
      './components/CountriesList/CountriesList' /* webpackChunkName: "CountriesList" */
    ),
);
const Header = lazy(
  () => import('./components/Header/Header' /* webpackChunkName: "Header" */),
);
const SortBar = lazy(
  () =>
    import('./components/SortBar/SortBar' /* webpackChunkName: "SortBar" */),
);
const Loader = lazy(
  () => import('./components/Loader/Loader' /* webpackChunkName: "Loader" */),
);

function App() {
  const [isLoading, setFilter, setSorting, countries] = useCountries();

  const handleFilter = (e: any) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  const handleSort = (e: any) => {
    const sortBy = e.target.dataset.sort;
    sortBy && setSorting(sortBy);
  };

  return (
    <div className={s.appWrapper}>
      <Header handleFilter={handleFilter} />
      <SortBar handleSort={handleSort} />
      {countries !== [] && <CountriesList countries={countries} />}
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
