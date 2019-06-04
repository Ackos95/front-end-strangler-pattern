import { Module, Dictionary } from '@cerebral/fluent';
import { TShareStateState, TShareStateSignals } from './types';

import * as sequences from './sequences';


const state: TShareStateState = {
  shared: Dictionary<any>({}),
};

const signals: TShareStateSignals = {
  ...sequences,
};

const ShareStateModule = Module({
  state,
  signals,
});


export {
  ShareStateModule,
};
