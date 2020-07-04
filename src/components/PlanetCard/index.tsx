import React from 'react';
import { GiRingedPlanet } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import { Planets } from '../../core/Swapi/interfaces';

import './index.scss';

const PlanetCard: React.FC<Planets> = ({
  url,
  name,
  terrain,
  gravity,
  population,
}) => {
  return (
    <div className="card">
      <div className="header">
        <Link to={`/planets/${url?.split('/')[5]}`}>
          <h2 className="card-title">{name}</h2>
        </Link>
      </div>

      <div className="content">
        <div className="data">
          {terrain && (
            <p>
              <strong>Terrain:</strong>
              <span className="text-secondary">{` ${terrain}`}</span>
            </p>
          )}

          {gravity && (
            <p>
              <strong>Gravity:</strong>
              <span className="text-secondary">{` ${gravity}`}</span>
            </p>
          )}

          {population && (
            <p>
              <strong>Population:</strong>
              <span className="text-secondary">{` ${population}`}</span>
            </p>
          )}
        </div>

        <div className="icon">
          <GiRingedPlanet size={48} />
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
