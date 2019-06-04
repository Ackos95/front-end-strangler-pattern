import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { TAppState } from '../app/types';
import { changeReduxInfo2 } from '../app/actions/command/main.actions';
import { sendShareStateData } from '../app/actions/command/share-state.actions';

import { GlobalState } from './GlobalState';


const SomePage = connect((state: TAppState) => ({
  someReduxInfo2: state.main.someReduxInfo2,
}), (dispatch: Dispatch) => ({
  changeReduxInfo2: () => dispatch(changeReduxInfo2()),
  changeGlobalRed2: () => dispatch(sendShareStateData('globalStateRed2', `${Math.random()}`)),
}))((props: { someReduxInfo2: string, changeReduxInfo2: () => {}, changeGlobalRed2: () => {} }) => (
  <>
    <h1>This is somePage - {props.someReduxInfo2}</h1>
    <button onClick={props.changeReduxInfo2}>Change data</button>
    <GlobalState />
    <button onClick={props.changeGlobalRed2}>Change global</button>
  </>
));


export {
  SomePage,
};
