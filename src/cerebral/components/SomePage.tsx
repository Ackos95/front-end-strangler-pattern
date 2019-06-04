import * as React from 'react';
import { connect } from '../fluent';

import { GlobalState } from './GlobalState';


const SomePage = connect().with(({ state, signals }) => ({
  someCerebralInfo1: state.someCerebralInfo1,
  changeCerebralInfo1: () => signals.changeCerebralInfo1(),
  changeGlobalCer1: () => signals.shareState.share({ key: 'globalStateCer1', data: `${Math.random()}` }),
})).to((props) => (
  <>
    <h1>This is somePage - {props.someCerebralInfo1}</h1>
    <button onClick={props.changeCerebralInfo1}>Change data</button>
    <GlobalState />
    <button onClick={props.changeGlobalCer1}>Change global</button>
  </>
));


export {
  SomePage,
};
