import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SomePage } from './components/SomePage';
import { OtherPage } from './components/OtherPage';


const ReduxRouter = () => (
  <Router>
    <Switch>
      <Route
        path="/page-1"
        component={SomePage}
      />
      <Route
        path="/page-2"
        component={OtherPage}
      />
    </Switch>
  </Router>
);


export {
  ReduxRouter,
};
