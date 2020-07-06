import React from 'react';

import './index.scss';

const PlanetCard: React.FC = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default PlanetCard;
