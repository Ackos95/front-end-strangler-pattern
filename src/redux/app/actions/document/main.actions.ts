import { IMainAction, SET_REDUX_INFO_1, SET_REDUX_INFO_2 } from '../../types/main.types';


const setReduxInfo1 = (message: string): IMainAction => ({
  type: SET_REDUX_INFO_1,
  payload: message,
});

const setReduxInfo2 = (message: string): IMainAction => ({
  type: SET_REDUX_INFO_2,
  payload: message,
});


export {
  setReduxInfo1,
  setReduxInfo2,
};
