import { Sequence } from '../fluent';

import * as actions from './actions';


const changeCerebralInfo1 = Sequence(s => s
  .action(actions.changeCerebralInfo1)
);

const changeCerebralInfo2 = Sequence(s => s
  .action(actions.changeCerebralInfo2)
);


export {
  changeCerebralInfo1,
  changeCerebralInfo2,
};
