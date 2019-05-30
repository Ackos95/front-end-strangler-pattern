import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import { SomePage } from './components/SomePage';
import { OtherPage } from './components/OtherPage';


const ReduxRouter = () => (
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
);


export {
  ReduxRouter,
};
