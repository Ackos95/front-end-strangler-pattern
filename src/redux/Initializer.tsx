import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './app/store';


const ReduxInitializer = ({ children }: { children: React.ReactNode}) => (
  <Provider store={configureStore()}>
    {children}
  </Provider>
);


export {
  ReduxInitializer,
}