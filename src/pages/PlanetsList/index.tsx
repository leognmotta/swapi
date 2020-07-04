import React, { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { useLocation, useHistory } from 'react-router-dom';

import Swapi from '../../core/Swapi';
import { Planets, SwapiPagination } from '../../core/Swapi/interfaces';
import { PlanetCard, RingLoader, Search, Pagination } from '../../components';

const PlanetsList: React.FC = () => {
  const { search: urlSearch, pathname } = useLocation();
  const { push } = useHistory();

  const urlSearchParams = new URLSearchParams(urlSearch);
  const page = parseInt(urlSearchParams.get('page') || '1', 10);
  const search = urlSearchParams.get('search') || undefined;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<SwapiPagination<Planets>>();
  const [error, setError] = useState<AxiosError | undefined>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      try {
        const response = await Swapi.getAllPlanets({ page, search });

        setData(response);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    }

    loadData();
  }, [page, search]);

  if (error) {
    return <h1>error</h1>;
  }

  return (
    <div>
      <Search
        loading={loading}
        onSubmit={value => {
          push(
            `${pathname}?page=${page}${value !== '' ? `&search=${value}` : ''}`
          );
        }}
      />

      {loading ? (
        <RingLoader />
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          {data?.results.map(({ url, name, terrain, gravity, population }) => (
            <PlanetCard
              key={url}
              url={url}
              name={name}
              terrain={terrain}
              gravity={gravity}
              population={population}
            />
          ))}
        </div>
      )}

      <Pagination />
    </div>
  );
};

export default PlanetsList;
