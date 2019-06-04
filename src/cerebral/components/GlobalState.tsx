import * as React from 'react';
import { connect } from '../fluent';


const GlobalState = connect().with(({ state, signals }) => ({
  globalStateRed1: state.shareState.shared.get('globalStateRed1') || null,
  globalStateRed2: state.shareState.shared.get('globalStateRed2') || null,
  globalStateCer1: state.shareState.shared.get('globalStateCer1') || null,
  globalStateCer2: state.shareState.shared.get('globalStateCer2') || null,
})).to((props) => (
  <table>
    <thead>
    <tr>
      <th>Redux 1</th>
      <th>Redux 2</th>
      <th>Cerebral 1</th>
      <th>Cerebral 2</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{props.globalStateRed1}</td>
      <td>{props.globalStateRed2}</td>
      <td>{props.globalStateCer1}</td>
      <td>{props.globalStateCer2}</td>
    </tr>
    </tbody>
  </table>
));


export {
  GlobalState,
};
