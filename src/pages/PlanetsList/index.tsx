import React, { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { useLocation, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Swapi from '../../core/Swapi';
import { Planets, SwapiPagination } from '../../core/Swapi/interfaces';
import {
  PlanetCard,
  RingLoader,
  Search,
  Pagination,
  NotFoundComponent,
  PlanetDetail,
} from '../../components';

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

  return (
    <div>
      <Helmet>
        <meta name="description" content="Find Star Wars planets." />
      </Helmet>

      <Search
        loading={loading}
        onSubmit={value => {
          push(`${pathname}?page=1${value !== '' ? `&search=${value}` : ''}`);
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
          {data?.results.map(({ name, url, terrain, gravity, population }) => (
            <PlanetCard key={url}>
              <PlanetDetail
                name={name}
                terrain={terrain}
                gravity={gravity}
                population={population}
                url={url}
              />
            </PlanetCard>
          ))}
        </div>
      )}

      {data?.count && data.count > 0 && (
        <Pagination
          count={data?.count || 0}
          currentPage={page}
          navigate={to => {
            push(`${pathname}?page=${to}${search ? `&search=${search}` : ''}`);
          }}
        />
      )}

      {error && error.response?.status === 404 && <NotFoundComponent />}
    </div>
  );
};

export default PlanetsList;
