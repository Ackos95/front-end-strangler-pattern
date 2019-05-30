import * as React from 'react';
import { connect } from '../fluent';


const SomePage = connect().with(({ state, signals }) => ({
  someCerebralInfo1: state.someCerebralInfo1,
  changeCerebralInfo1: () => signals.changeCerebralInfo1(),
})).to((props) => (
  <>
    <h1>This is somePage - {props.someCerebralInfo1}</h1>
    <button onClick={props.changeCerebralInfo1}>Change data</button>
  </>
));


export {
  SomePage,
};
