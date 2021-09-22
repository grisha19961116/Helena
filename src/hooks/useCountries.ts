import { useQuery } from 'react-query';
import { useState, useMemo } from 'react';
import { getAllCountries } from '../data/api';
import { chain } from 'lodash';

export enum SortBy {
  Country = 'Country',
  TotalConfirmed = 'TotalConfirmed',
}

interface ICountry {
  Country: string;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
  id: string;
}

type UseCountriesResult = [
  isLoading: boolean,
  setFilter: (filter: string) => void,
  setSorting: (sortBy: SortBy) => void,
  memoizedCountries: ICountry[],
];

export default function useCountries(): UseCountriesResult {
  const [filter, setFilter] = useState<string>('');
  const [sorting, setSorting] = useState<SortBy>(SortBy.Country);

  const { isLoading, data: countries } = useQuery<ICountry[]>(
    'countries',
    getAllCountries,
  );

  const memoizedCountries = useMemo(
    () =>
      chain(countries)
        .filter(({ Country }) =>
          Country.toLowerCase().includes(filter.toLowerCase()),
        )
        .sortBy([sorting])
        .value(),
    [countries, filter, sorting],
  );

  return [isLoading, setFilter, setSorting, memoizedCountries];
}
