import { mainReducer } from './main.reducer';
import { shareStateReducer } from './share-state.reducer';


const reducersMap = {
  main: mainReducer,
  shareState: shareStateReducer,
};


export {
  reducersMap,
};
