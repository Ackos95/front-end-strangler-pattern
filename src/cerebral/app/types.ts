import { IShareFunction } from '../../facade/share/types';
import * as sequences from './sequences';


export type TAppState = {
  someCerebralInfo1: string,
  someCerebralInfo2: string,
};

export type TAppSignals = {
  [key in keyof typeof sequences]: typeof sequences[key];
};

export interface IShareStateProvider {
  initialize: () => void;
  shareStateData: IShareFunction;
}
