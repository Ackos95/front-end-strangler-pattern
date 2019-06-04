import { TMainState } from './main.types';
import { TShareState } from './share-state.types';


export type TAppState = {
  main: TMainState,
  shareState: TShareState,
};
