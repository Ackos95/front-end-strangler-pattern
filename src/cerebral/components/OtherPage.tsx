import * as React from 'react';
import { connect } from '../fluent';


const OtherPage = connect().with(({ state, signals }) => ({
  someCerebralInfo2: state.someCerebralInfo2,
  changeCerebralInfo2: () => signals.changeCerebralInfo2(),
})).to((props) => (
  <>
    <h1>This is other page - {props.someCerebralInfo2}</h1>
    <button onClick={props.changeCerebralInfo2}>Change data</button>
  </>
));


export {
  OtherPage,
};
