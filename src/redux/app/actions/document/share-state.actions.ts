import { SET_SHARE_STATE_DATA, IShareStateAction } from '../../types/share-state.types';


const setShareStateData = (key: string, data: any): IShareStateAction => ({
  type: SET_SHARE_STATE_DATA,
  payload: {
    key,
    data,
  },
});


export {
  setShareStateData,
};
