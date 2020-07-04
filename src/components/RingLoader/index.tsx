import React from 'react';
import RingLoaderSpinner from 'react-spinners/RingLoader';

import './index.scss';

const RingLoader: React.FC = () => (
  <div className="container">
    <RingLoaderSpinner size={220} />
  </div>
);

export default RingLoader;
