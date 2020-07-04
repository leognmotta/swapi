import React, { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { useLocation } from 'react-router-dom';

import Swapi from '../../core/Swapi';
import { Planets, Pagination } from '../../core/Swapi/interfaces';
import { PlanetCard } from '../../components';

const PlanetsList: React.FC = () => {
  const { search: urlSearch } = useLocation();
  const urlSearchParams = new URLSearchParams(urlSearch);

  const [page] = useState(parseInt(urlSearchParams.get('page') || '1', 10));
  const [search] = useState(urlSearchParams.get('search') || undefined);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Pagination<Planets>>();
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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>error</h1>;
  }

  return (
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
  );
};

export default PlanetsList;
