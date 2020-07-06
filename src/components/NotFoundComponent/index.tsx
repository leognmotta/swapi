import React from 'react';

import bb8 from '../../assets/bb8-clipart-svg-4-transparent.png';

import './index.scss';

const NotFound: React.FC = () => (
  <div className="not-found-container">
    <div className="not-found-text">
      <span className="not-found">404</span>
      <span>This is not</span>
      <span>What you are</span>
      <span>Looking</span>
      <span>For</span>
    </div>

    <img src={bb8} alt="BB-8 from Star Wars." />
  </div>
);

export default NotFound;
