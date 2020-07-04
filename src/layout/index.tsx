import React from 'react';
import { Helmet } from 'react-helmet';

import './index.scss';
import './global.scss';

const Layout: React.FC = ({ children }) => (
  <>
    <Helmet>
      <meta name="description" content="Start wars planets web site." />
    </Helmet>

    {children}
  </>
);

export default Layout;
