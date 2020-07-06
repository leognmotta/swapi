import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/star-wars-4.svg';

import './index.scss';
import './global.scss';

const Layout: React.FC = ({ children }) => (
  <div className="page-container">
    <header>
      <Link to="/">
        <img src={logo} alt="Star Wars" />
      </Link>
    </header>

    <div className="page-content">{children}</div>

    <footer>
      {`Made by `}
      <a href="https://leomotta.me" target="__blank">
        Leonardo Motta
      </a>
    </footer>
  </div>
);

export default Layout;
