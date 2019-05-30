import * as React from 'react';
import { Container } from '@cerebral/fluent';
import { controller } from './controller';

import { CerebralRouter } from './Router';


const CerebralApp = () => (
  <Container controller={controller}>
    <h1>This is cerebral App</h1>
    <CerebralRouter />
  </Container>
);


export {
  CerebralApp,
};
