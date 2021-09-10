import { useState, useEffect } from 'react';

import s from './App.module.css';
import { getAllCountries } from './data/api';
import CountriesList from './components/CountriesList/CountriesList';
import Header from './components/Header/Header';
import SortBar from './components/SortBar/SortBar';

function App() {
  const [countries, setCountries] = useState<any>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    (async function getCountries() {
      const data = await getAllCountries();
      setCountries(data);
    })();
  }, []);

  const handleFilter = (e: any) => {
    e.preventDefault();
    const value = e.target.value;
    setFilter(value);
  };

  const handleSort = (e: any) => {
    const sortBy = e.target.dataset.sort;
    if (sortBy) {
      setCountries((prevState: any) => [
        ...prevState.sort(function (a: any, b: any) {
          if (a[sortBy] < b[sortBy]) {
            return -1;
          } else if (a[sortBy] > b[sortBy]) {
            return 1;
          }
          return 0;
        }),
      ]);
    }
  };

  return (
    <div className={s.appWrapper}>
      <Header handleFilter={handleFilter} />
      <SortBar handleSort={handleSort} />
      <CountriesList filter={filter} countries={countries} />
    </div>
  );
}

export default App;
