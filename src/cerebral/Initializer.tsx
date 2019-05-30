import * as React from 'react';

import { Container } from '@cerebral/fluent';
import { controller } from './controller';


const CerebralInitializer = ({ children }: { children: React.ReactNode}) => (
  <Container controller={controller}>
    {children}
  </Container>
);


export {
  CerebralInitializer,
};
