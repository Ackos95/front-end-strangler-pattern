import { ShareStateContract } from '../../facade/share/ShareStateContract';
import { Provider } from '@cerebral/fluent';
import { Context } from '../fluent';


const ShareStateProvider = () => {

  let shareStateContract: ShareStateContract | null = null;

  return Provider({
    initialize(this: { context: Context }) {
      const context = this.context;

      shareStateContract = new class CerebralStateShareContract extends ShareStateContract {
        receive(data: any, key: string) {
          try {
            context.controller.getSignal('shareState.receive')({ data, key });
          } catch (e) {
            console.error(e);
          }
        }
      }('CER');
    },

    shareStateData(this: { context: Context }, data: any, key: string) {
      if (shareStateContract) {
        shareStateContract!.share(data, key);
      }
    },
  });
};


export {
  ShareStateProvider,
};
