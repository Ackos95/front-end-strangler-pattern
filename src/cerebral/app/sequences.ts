import { Sequence } from '../fluent';

import * as actions from './actions';

import { initializeSharedState } from './modules/share-state/sequences';


const changeCerebralInfo1 = Sequence(s => s
  .action(actions.changeCerebralInfo1)
);

const changeCerebralInfo2 = Sequence(s => s
  .action(actions.changeCerebralInfo2)
);

// basic initialization
const initialize = Sequence(s => s
  .sequence(initializeSharedState)
);


export {
  changeCerebralInfo1,
  changeCerebralInfo2,
  initialize,
};
