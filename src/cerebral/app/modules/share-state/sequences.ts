import { Sequence, SequenceWithProps } from '../../../fluent';

import * as actions from './actions';


const initializeSharedState = Sequence(s => s
  .action(actions.initializeSharedState)
);

const receive = SequenceWithProps<{ data: any, key: string }>(s => s
  .action(actions.updateSharedState)
);

const share = SequenceWithProps<{ data: any, key: string }>(s => s
  .action(actions.updateSharedState)
  .action(actions.shareSharedStateData)
);


export {
  initializeSharedState,
  receive,
  share,
};
