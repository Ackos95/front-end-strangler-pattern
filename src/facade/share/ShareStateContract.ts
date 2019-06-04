import {IShareFunction, IShareStateContract} from './types';
import {GlobalShareState} from "./SharedState";


abstract class ShareStateContract implements IShareStateContract {

  public id: string;

  abstract receive(data: any, key: string): void;

  public share: IShareFunction;

  constructor(id: string) {
    this.id = id;
    this.share = GlobalShareState.getInstance().register(this);
  }

}


export {
  ShareStateContract,
};
