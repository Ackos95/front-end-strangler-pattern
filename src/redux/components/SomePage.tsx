import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { TAppState } from '../app/types';
import { changeReduxInfo2 } from '../app/actions/command/main.actions';


const SomePage = connect((state: TAppState) => ({
  someReduxInfo2: state.main.someReduxInfo2,
}), (dispatch: Dispatch) => ({
  changeReduxInfo2: () => dispatch(changeReduxInfo2())
}))((props: { someReduxInfo2: string, changeReduxInfo2: () => {}}) => (
  <>
    <h1>This is somePage - {props.someReduxInfo2}</h1>
    <button onClick={props.changeReduxInfo2}>Change data</button>
  </>
));


export {
  SomePage,
};
