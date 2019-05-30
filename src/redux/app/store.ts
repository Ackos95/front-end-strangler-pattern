import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducersMap } from './reducers';
import { middlewares } from './middlewares';


const configureStore = () => createStore(
  combineReducers(reducersMap),
  composeWithDevTools(applyMiddleware(...middlewares)),
);


export {
  configureStore,
};
