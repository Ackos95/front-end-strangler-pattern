import {
  ConnectFactory,
  IContext,
  IBranchContext,
  SequenceFactory,
  SequenceWithPropsFactory
} from '@cerebral/fluent';

import * as app from './app/types';


export type TState = app.TAppState;

export type TSignals = app.TAppSignals;

export type TProviders = {
};

export interface Context<Props = {}> extends IContext<Props>, TProviders {
  state: TState;
  signals: TSignals;

  // TODO: again nasty hack
  controller: {
    getSignal: (...args: any[]) => any;
  };
}

export interface BranchContext<Props = {}, Paths = {}> extends IBranchContext<Paths, Props>, TProviders {
  state: TState;
  signals: TSignals;
}

// functions
const connect = ConnectFactory<TState, TSignals>();

const Sequence = SequenceFactory<Context>();

const SequenceWithProps = SequenceWithPropsFactory<Context>();

export {
  connect,
  Sequence,
  SequenceWithProps,
};
