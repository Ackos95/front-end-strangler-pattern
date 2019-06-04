import * as React from 'react';

import { Container } from '@cerebral/fluent';
import { controller } from './controller';

import { BasicInitializer } from './components/BasicInitializer';


const CerebralInitializer = ({ children }: { children: React.ReactNode}) => (
  <Container controller={controller}>
    <BasicInitializer>
      {children}
    </BasicInitializer>
  </Container>
);


export {
  CerebralInitializer,
};
