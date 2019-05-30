import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { TAppState } from '../app/types';
import { changeReduxInfo1 } from '../app/actions/command/main.actions';


const OtherPage = connect((state: TAppState) => ({
  someReduxInfo1: state.main.someReduxInfo1,
}), (dispatch: Dispatch) => ({
  changeReduxInfo1: () => dispatch(changeReduxInfo1())
}))((props: { someReduxInfo1: string, changeReduxInfo1: () => {}}) => (
  <>
    <h1>This is other page - {props.someReduxInfo1}</h1>
    <button onClick={props.changeReduxInfo1}>Change data</button>
  </>
));


export {
  OtherPage,
};
