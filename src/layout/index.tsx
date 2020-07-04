import React from 'react';
import { Helmet } from 'react-helmet';

import './index.scss';
import './global.scss';

const Layout: React.FC = ({ children }) => (
  <>
    <Helmet>
      <meta name="description" content="Star Wars Planets." />
    </Helmet>

    {children}
  </>
);

export default Layout;
