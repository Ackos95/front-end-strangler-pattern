import { Context } from '../fluent';


const changeCerebralInfo1 = ({ state }: Context): void => {
  state.someCerebralInfo1 = 'Changed Cerebral Info 1';
};

const changeCerebralInfo2 = ({ state }: Context): void => {
  state.someCerebralInfo2 = 'Changed Cerebral Info 2';
};


export {
  changeCerebralInfo1,
  changeCerebralInfo2,
};
