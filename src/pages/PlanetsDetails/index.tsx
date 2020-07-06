import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Swapi from '../../core/Swapi';
import { Planets } from '../../core/Swapi/interfaces';
import {
  RingLoader,
  PlanetCard,
  PlanetDetail,
  NotFoundComponent,
} from '../../components';

const PlanetsDetails: React.FC = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [planet, setPlanet] = useState<Planets>();
  const [error, setError] = useState<AxiosError | undefined>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      try {
        const response = await Swapi.getPlanet(parseInt(id, 10));

        setPlanet(response);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    }

    loadData();
  }, [id]);

  return (
    <>
      {error && error.response?.status === 404 ? (
        <NotFoundComponent />
      ) : (
        <div>
          {planet && (
            <Helmet>
              <title>{`Star Wars Planets | ${planet?.name}`}</title>
              <meta
                name="description"
                content={`Planet ${planet?.name} which the terrais is mainly of ${planet.terrain} `}
              />
            </Helmet>
          )}

          {planet && !loading ? (
            <PlanetCard>
              <PlanetDetail
                name={planet.name}
                terrain={planet.terrain}
                gravity={planet.gravity}
                population={planet.population}
                climate={planet.climate}
                diameter={planet.diameter}
                orbital_period={planet.orbital_period}
                rotation_period={planet.rotation_period}
                surface_water={planet.surface_water}
              />
            </PlanetCard>
          ) : (
            <RingLoader />
          )}
        </div>
      )}
    </>
  );
};

export default PlanetsDetails;
