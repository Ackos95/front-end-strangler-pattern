import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import { SomePage } from './components/SomePage';
import { OtherPage } from './components/OtherPage';
import { NotFoundPage } from './components/NotFoundPage';


const CerebralRouter = () => (
  <Switch>
    <Route
      path="/page-3"
      component={SomePage}
    />
    <Route
      path="/page-4"
      component={OtherPage}
    />
    <Route
      path="/*"
      component={NotFoundPage}
    />
    />
  </Switch>
);


export {
  CerebralRouter,
};
