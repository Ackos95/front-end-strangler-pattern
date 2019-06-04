import { SHARE_STATE_DATA_RECEIVED, IShareStateAction } from '../../types/share-state.types';


const receivedShareStateData = (key: string, data: any): IShareStateAction => ({
  type: SHARE_STATE_DATA_RECEIVED,
  payload: {
    key,
    data,
  },
});


export {
  receivedShareStateData,
};
