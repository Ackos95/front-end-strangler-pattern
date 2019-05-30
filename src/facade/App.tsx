import React from 'react';
import { AppRouter } from './Router';

import { CerebralInitializer } from '../cerebral/Initializer';
import { ReduxInitializer } from '../redux/Initializer';


const App: React.FC = () => {
  return (
    <CerebralInitializer>
      <ReduxInitializer>
        <AppRouter />
      </ReduxInitializer>
    </CerebralInitializer>
  );
};


export {
  App
};
