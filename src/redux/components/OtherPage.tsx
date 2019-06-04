import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { TAppState } from '../app/types';
import { changeReduxInfo1 } from '../app/actions/command/main.actions';
import { sendShareStateData } from '../app/actions/command/share-state.actions';

import { GlobalState } from './GlobalState';


const OtherPage = connect((state: TAppState) => ({
  someReduxInfo1: state.main.someReduxInfo1,
}), (dispatch: Dispatch) => ({
  changeReduxInfo1: () => dispatch(changeReduxInfo1()),
  changeGlobalRed1: () => dispatch(sendShareStateData('globalStateRed1', `${Math.random()}`)),
}))((props: { someReduxInfo1: string, changeReduxInfo1: () => {}, changeGlobalRed1: () => {} }) => (
  <>
    <h1>This is other page - {props.someReduxInfo1}</h1>
    <button onClick={props.changeReduxInfo1}>Change data</button>
    <GlobalState />
    <button onClick={props.changeGlobalRed1}>Change global</button>
  </>
));


export {
  OtherPage,
};
