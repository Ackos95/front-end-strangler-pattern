import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CerebralApp } from '../cerebral/App';
import { ReduxApp } from '../redux/App';


const AppRouter = () => (
  <Router>
    <Switch>
      <Route
        path="/(page-1|page-2)"
        component={ReduxApp}
      />
      <Route
        path="/*"
        component={CerebralApp}
      />
    </Switch>
  </Router>
);


export {
  AppRouter,
};
