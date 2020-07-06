import React from 'react';
import { GiRingedPlanet } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import { Planets } from '../../core/Swapi/interfaces';

import './index.scss';

const PlanetDetail: React.FC<Planets> = ({ name, url, ...restPlanet }) => {
  const planetKeys = Object.keys(restPlanet);
  const planetValues = Object.values(restPlanet);
  const planetData = planetKeys.map((key, index) => ({
    title: key,
    value: planetValues[index],
  }));

  return (
    <div>
      <div className="header">
        {url ? (
          <Link to={`/planets/${url?.split('/')[5]}`}>
            <h2 className="card-title">{name}</h2>
          </Link>
        ) : (
          <h1 className="card-title">{name}</h1>
        )}
      </div>

      <div className="content">
        <div className="data">
          {planetData.map(({ title, value }) => (
            <p key={title + value}>
              <strong>{`${title}:`}</strong>
              <span className="text-secondary">{` ${value}`}</span>
            </p>
          ))}
        </div>

        <div className="icon">
          <GiRingedPlanet size={48} />
        </div>
      </div>
    </div>
  );
};

export default PlanetDetail;
