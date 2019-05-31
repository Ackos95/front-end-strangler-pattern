import { IShareFunction, IShareStateContract, IShareStateRouter } from './types';


class GlobalShareState implements IShareStateRouter {

  private static instance: GlobalShareState;

  private registeredSources: IShareStateContract[] = [];

  private constructor() {
    this.registeredSources = [];
  }

  public static getInstance(): GlobalShareState {
    if (GlobalShareState.instance === null) {
      GlobalShareState.instance = new GlobalShareState();
    }

    return GlobalShareState.instance;
  }

  private receive = (from: string, data: any, key: string) => {
    this.registeredSources.forEach((source: IShareStateContract) => {
      if (source.id === from) {
        return;
      }

      source.receive(data, key);
    })
  };


  public register = (source: IShareStateContract): IShareFunction => {
    this.registeredSources.push(source);

    return this.receive.bind(this, source.id);
  }

}


export {
  GlobalShareState,
};
