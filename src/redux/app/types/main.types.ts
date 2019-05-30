import { AnyAction } from 'redux';

// command
const CHANGE_REDUX_INFO_1 = 'CHANGE_REDUX_INFO_1';
const CHANGE_REDUX_INFO_2 = 'CHANGE_REDUX_INFO_2';

// document
const SET_REDUX_INFO_1 = 'SET_REDUX_INFO_1';
const SET_REDUX_INFO_2 = 'SET_REDUX_INFO_2';

export type TMainState = {
  someReduxInfo1: string,
  someReduxInfo2: string,
};

export interface IMainAction extends AnyAction {
  type: typeof SET_REDUX_INFO_1 | typeof SET_REDUX_INFO_2;
  payload: string;
}

export interface IMainActionCommand extends AnyAction {
  type: typeof CHANGE_REDUX_INFO_1 | typeof CHANGE_REDUX_INFO_2;
}

export {
  SET_REDUX_INFO_1,
  SET_REDUX_INFO_2,
  CHANGE_REDUX_INFO_1,
  CHANGE_REDUX_INFO_2,
};
