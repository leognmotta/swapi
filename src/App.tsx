import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history';
import Layout from './layout';
import Routes from './routes';

const App: React.FC = () => (
  <Router history={history}>
    <Layout>
      <Routes />
    </Layout>
  </Router>
);

export default App;
