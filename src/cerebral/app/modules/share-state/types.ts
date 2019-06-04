import { Dictionary } from '@cerebral/fluent';
import * as sequences from './sequences';


export type TShareStateState = {
  shared: Dictionary<any>;
};

export type TShareStateSignals = {
  [key in keyof typeof sequences]: typeof sequences[key];
};
