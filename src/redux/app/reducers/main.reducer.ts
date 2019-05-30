import { TMainState, IMainAction, SET_REDUX_INFO_1, SET_REDUX_INFO_2 } from '../types/main.types';


const initialState: TMainState = {
  someReduxInfo1: 'Redux Info 1',
  someReduxInfo2: 'Redux Info 2',
};

const mainReducer = (state: TMainState = initialState, action: IMainAction) => {
  switch (action.type) {
    case SET_REDUX_INFO_1:
      return {
        ...state,
        someReduxInfo1: action.payload,
      };
    case SET_REDUX_INFO_2:
      return {
        ...state,
        someReduxInfo2: action.payload,
      };
    default:
      return state;
  }
};


export {
  mainReducer,
};
