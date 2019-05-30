import { IMainActionCommand, CHANGE_REDUX_INFO_1, CHANGE_REDUX_INFO_2 } from '../../types/main.types';


const changeReduxInfo1 = (): IMainActionCommand => ({
  type: CHANGE_REDUX_INFO_1
});

const changeReduxInfo2 = (): IMainActionCommand => ({
  type: CHANGE_REDUX_INFO_2,
});


export {
  changeReduxInfo1,
  changeReduxInfo2,
};
