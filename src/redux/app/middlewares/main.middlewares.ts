import { AnyAction, Middleware } from 'redux';
import { CHANGE_REDUX_INFO_1, CHANGE_REDUX_INFO_2 } from '../types/main.types';
import { setReduxInfo1, setReduxInfo2 } from '../actions/document/main.actions';


const mainMiddleware: Middleware = ({ dispatch }) => (next) => (action: AnyAction) => {
  next(action);

  switch (action.type) {
    case CHANGE_REDUX_INFO_1:
      dispatch(setReduxInfo1('Changed Redux Info 1'));
      break;
    case CHANGE_REDUX_INFO_2:
      dispatch(setReduxInfo2('Changed Redux Info 2'));
      break;
  }
};


export {
  mainMiddleware,
};
