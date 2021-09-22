import { useState } from 'react';
import { lazy } from 'react';

import s from './CountriesList.module.css';

const DetailCountry = lazy(
  () =>
    import(
      './DetailCountry/DetailCountry' /* webpackChunkName: "DetailCountry" */
    ),
);

interface ICountry {
  Country: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
  id: string;
}

interface IHandleCloseDetail {
  (e: any): void;
}

const CountriesList = ({ countries }: { countries: ICountry[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [country, setCountry] = useState<ICountry>({
    Country: 'missed',
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
    id: `unknown`,
  });

  const handleList = (e: any) => {
    const tagName = e.target.tagName;
    if (tagName === 'H4' || tagName === 'LI') {
      const id = e.target.dataset.id;
      setCountry(countries[id]);
      setIsOpen(true);
    }
  };

  const handleCloseDetail: IHandleCloseDetail = e => {
    const id = e.target.id;
    if (id === 'close') {
      setIsOpen(false);
    }
  };

  return (
    <>
      <ul className={s.countriesList} onClick={handleList}>
        {countries.length > 0 &&
          countries.map((country: ICountry, index: number) => {
            const { Country, TotalConfirmed } = country;
            return (
              <li
                className={s.countriesList_item}
                key={index}
                data-id={String(index)}
              >
                <h4
                  className={s.countriesList_item_number}
                  data-id={String(index)}
                >
                  {index + 1}
                </h4>
                <h4
                  className={s.countriesList_item_country}
                  data-id={String(index)}
                >
                  {Country}
                </h4>
                <h4
                  className={s.countriesList_item_confirmed}
                  data-id={String(index)}
                >
                  {TotalConfirmed}
                </h4>
              </li>
            );
          })}
      </ul>
      {isOpen && (
        <DetailCountry
          handleCloseDetail={handleCloseDetail}
          country={country}
        />
      )}
    </>
  );
};

export default CountriesList;
