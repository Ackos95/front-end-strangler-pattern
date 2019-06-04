import * as React from 'react';
import { connect } from 'react-redux';

import { TAppState } from '../app/types';


const GlobalState = connect((state: TAppState) => ({
  globalStateRed1: state.shareState['globalStateRed1'] || null,
  globalStateRed2: state.shareState['globalStateRed2'] || null,
  globalStateCer1: state.shareState['globalStateCer1'] || null,
  globalStateCer2: state.shareState['globalStateCer2'] || null,
}))((props: {
  globalStateRed1: string | null;
  globalStateRed2: string | null;
  globalStateCer1: string | null;
  globalStateCer2: string | null;
}) => (
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
