import { shareStateMiddleware} from './share-state.middlwares';
import { mainMiddleware } from './main.middlewares';


const middlewares = [
  shareStateMiddleware,
  mainMiddleware,
];


export {
  middlewares,
};
