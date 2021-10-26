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
  ID: string;
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
    ID: `unknown`,
  });

  const handleOpenDetail = (e: any) => {
    const tagName = e.target.tagName;
    if (tagName === 'H4' || tagName === 'LI') {
      const ID = e.target.dataset.id;
      const selectedCountry = countries.find(el => el.ID === ID);
      selectedCountry && setCountry(selectedCountry);
      setIsOpen(true);
    }
  };

  const handleCloseDetail: IHandleCloseDetail = e =>
    e.target.id === 'close' && setIsOpen(false);

  return (
    <>
      <ul className={s.countriesList} onClick={handleOpenDetail}>
        {countries.length > 0 &&
          countries.map((country: ICountry, index: number) => {
            const { Country, TotalConfirmed, ID } = country;
            return (
              <li className={s.countriesList_item} key={ID} data-id={ID}>
                <h4 className={s.countriesList_item_number} data-id={ID}>
                  {index + 1}
                </h4>
                <h4 className={s.countriesList_item_country} data-id={ID}>
                  {Country}
                </h4>
                <h4 className={s.countriesList_item_confirmed} data-id={ID}>
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
