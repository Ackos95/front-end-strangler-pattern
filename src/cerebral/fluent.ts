import {
  ConnectFactory,
  IContext,
  IBranchContext,
  SequenceFactory,
  SequenceWithPropsFactory
} from '@cerebral/fluent';

import * as app from './app/types';
import * as shareState from './app/modules/share-state/types';

import { IShareStateProvider } from './app/types';


export type TState = app.TAppState & {
  shareState: shareState.TShareStateState,
};

export type TSignals = app.TAppSignals & {
  shareState: shareState.TShareStateSignals,
};

export type TProviders = {
  shareState: IShareStateProvider,
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
