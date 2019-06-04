import { TShareState, SET_SHARE_STATE_DATA, IShareStateAction } from '../types/share-state.types';


const initialState: TShareState = {};

const shareStateReducer = (state: TShareState = initialState, action: IShareStateAction) => {
  switch (action.type) {
    case SET_SHARE_STATE_DATA:
      return {
        ...state,
        [action.payload.key]: action.payload.data,
      };
    default:
      return state;
  }
};


export {
  shareStateReducer,
};
