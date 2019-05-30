import * as React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { CerebralApp } from '../cerebral/App';
import { ReduxApp } from '../redux/App';


const AppRouter = () => (
  <Router>
    <div>
      <Link to="/page-1">Page 1</Link>
      <Link to="/page-2">Page 2</Link>
      <Link to="/page-3">Page 3</Link>
      <Link to="/page-4">Page 4</Link>
    </div>

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
