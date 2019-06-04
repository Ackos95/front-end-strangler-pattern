import * as React from 'react';
import { connect } from '../fluent';

import { GlobalState } from './GlobalState';


const OtherPage = connect().with(({ state, signals }) => ({
  someCerebralInfo2: state.someCerebralInfo2,
  changeCerebralInfo2: () => signals.changeCerebralInfo2(),
  changeGlobalCer2: () => signals.shareState.share({ key: 'globalStateCer2', data: `${Math.random()}` }),
})).to((props) => (
  <>
    <h1>This is other page - {props.someCerebralInfo2}</h1>
    <button onClick={props.changeCerebralInfo2}>Change data</button>
    <GlobalState />
    <button onClick={props.changeGlobalCer2}>Change global</button>
  </>
));


export {
  OtherPage,
};
