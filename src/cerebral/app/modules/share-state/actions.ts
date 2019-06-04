import { Context } from '../../../fluent';


const initializeSharedState = ({ shareState }: Context): void => {
  shareState.initialize();
};

const updateSharedState = ({ state, props }: Context<{ data: any, key: string }>): void => {
  state.shareState.shared.set(props.key, props.data);
};

const shareSharedStateData = ({ shareState, props }: Context<{ data: any, key: string }>): void => {
  shareState.shareStateData(props.data, props.key);
};


export {
  initializeSharedState,
  updateSharedState,
  shareSharedStateData,
};
