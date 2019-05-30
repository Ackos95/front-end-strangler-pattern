import { Module } from '@cerebral/fluent';

import { TAppSignals, TAppState } from './types';
import * as sequences from './sequences';


const state: TAppState = {
  someCerebralInfo1: 'Cerebral Info 1',
  someCerebralInfo2: 'Cerebral Info 2',
};

const signals: TAppSignals = {
  ...sequences,
};


const AppModule = Module({
  state,
  signals,
});

export {
  AppModule
};
