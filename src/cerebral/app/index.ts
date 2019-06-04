import { Module } from '@cerebral/fluent';

import { TAppSignals, TAppState } from './types';
import * as sequences from './sequences';

import { ShareStateProvider } from './providers';

import { ShareStateModule } from './modules/share-state';


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
  modules: {
    shareState: ShareStateModule,
  },
  providers: {
    shareState: ShareStateProvider(),
  }
});

export {
  AppModule
};
