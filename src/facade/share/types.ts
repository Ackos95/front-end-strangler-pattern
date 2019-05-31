export interface IShareStateContract {
  id: string;

  receive(data: any, key: string): void;
}

export interface IShareFunction {
  (data: any, key: string): void;
}

export interface IShareStateRouter {
  register(source: IShareStateContract): IShareFunction;
}
