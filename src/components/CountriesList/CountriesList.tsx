import { useState, useEffect } from 'react';

import s from './CountriesList.module.css';
import { getAllCountries } from '../../data/api.js';

interface ICountry {
  Country: string;
  TotalConfirmed: number;
}

const CountriesList = () => {
  const [countries, setCountries] = useState<any>([]);
  useEffect(() => {
    (async function getCountries() {
      const data = await getAllCountries();
      console.log(data, `data`);
      setCountries(data);
    })();
  }, []);
  return (
    <ul className={s.countriesList}>
      {countries.length > 0 &&
        countries.map((country: ICountry, index: number) => {
          const { Country, TotalConfirmed } = country;
          return (
            <li className={s.countriesList_item} key={index}>
              <h4 className={s.countriesList_item_number}>{index + 1}</h4>
              <h4 className={s.countriesList_item_country}>{Country}</h4>
              <h4 className={s.countriesList_item_confirmed}>
                {TotalConfirmed}
              </h4>
            </li>
          );
        })}
    </ul>
  );
};

export default CountriesList;
