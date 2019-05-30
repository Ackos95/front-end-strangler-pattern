import { Controller } from '@cerebral/fluent';
import * as app from './app';


const controller = Controller(app.AppModule);


export { controller };
