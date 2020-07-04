import React from 'react';
import { Helmet } from 'react-helmet';

import logo from '../assets/star-wars-4.svg';

import './index.scss';
import './global.scss';

const Layout: React.FC = ({ children }) => (
  <>
    <Helmet>
      <meta name="description" content="Star Wars Planets." />
    </Helmet>

    <header>
      <img src={logo} alt="Star Wars" />
    </header>

    {children}

    <footer>
      {`Made by `}
      <a href="https://leomotta.me" target="__blank">
        Leonardo Motta
      </a>
    </footer>
  </>
);

export default Layout;
