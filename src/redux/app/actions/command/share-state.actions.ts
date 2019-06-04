import { SEND_SHARE_STATE_DATA, IShareStateAction } from '../../types/share-state.types';


const sendShareStateData = (key: string, data: any): IShareStateAction => ({
  type: SEND_SHARE_STATE_DATA,
  payload: {
    key,
    data,
  },
});


export {
  sendShareStateData,
};
