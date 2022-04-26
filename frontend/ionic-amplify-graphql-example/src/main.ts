import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {API} from '@aws-amplify/api';
import {Amplify} from 'aws-amplify';
import {environment} from './environments/environment';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
API.configure(awsconfig);

if (environment.production) {
  enableProdMode();
  Amplify.Logger.LOG_LEVEL = 'INFO';
} else {
  Amplify.Logger.LOG_LEVEL = 'DEBUG';
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
