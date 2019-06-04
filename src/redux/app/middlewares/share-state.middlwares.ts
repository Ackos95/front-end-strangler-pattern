import { AnyAction, Middleware } from 'redux';
import { SHARE_STATE_DATA_RECEIVED, SEND_SHARE_STATE_DATA, IShareStateAction } from '../types/share-state.types';
import { ShareStateContract } from '../../../facade/share/ShareStateContract';

import { setShareStateData } from '../actions/document/share-state.actions';
import { receivedShareStateData } from '../actions/event/share-state.actions';


const shareStateMiddleware: Middleware = ({ dispatch }) => {

  const shareStateContract = new class ReduxStateShareContract extends ShareStateContract {
    receive(data: any, key: string) {
      dispatch(receivedShareStateData(key, data));
    }
  }('RED');

  return (next) => (action: AnyAction) => {
    next(action);

    switch (action.type) {
      case SHARE_STATE_DATA_RECEIVED: {
        const { key, data } = (action as IShareStateAction).payload;

        dispatch(setShareStateData(key, data));
        break;
      }
      case SEND_SHARE_STATE_DATA: {
        const { key, data } = (action as IShareStateAction).payload;

        // set it in our shared state module as well
        dispatch(receivedShareStateData(key, data));
        // notify others about shared state change
        shareStateContract.share(data, key);
        break;
      }
    }
  };
};


export {
  shareStateMiddleware,
};
