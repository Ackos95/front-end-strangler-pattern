import { AnyAction } from 'redux';

// command
const SEND_SHARE_STATE_DATA = 'SEND_SHARE_STATE_DATA';

// document
const SET_SHARE_STATE_DATA = 'SET_SHARE_STATE_DATA';

// event
const SHARE_STATE_DATA_RECEIVED = 'SHARE_STATE_DATA_RECEIVED';

export type TShareState = {
  [key: string]: any;
};

export interface IShareStateAction extends AnyAction {
  type: typeof SEND_SHARE_STATE_DATA | typeof SET_SHARE_STATE_DATA | typeof SHARE_STATE_DATA_RECEIVED;
  payload: {
    key: string;
    data: any;
  };
}


export {
  SET_SHARE_STATE_DATA,
  SEND_SHARE_STATE_DATA,
  SHARE_STATE_DATA_RECEIVED,
};
