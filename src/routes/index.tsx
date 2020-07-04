import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from '../pages/NotFound';
import PlanetsList from '../pages/PlanetsList';
import PlanetsDetails from '../pages/PlanetsDetails';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={PlanetsList} />

    <Route path="/planets/:id" exact component={PlanetsDetails} />

    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
