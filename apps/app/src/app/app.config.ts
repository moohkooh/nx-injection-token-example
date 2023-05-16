import { ApplicationConfig } from '@angular/core';
import { BRIDGE_APP } from '@example/flow/api';
import { AppBridge } from './app.bridge';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: BRIDGE_APP,
      useClass: AppBridge,
      multi: false,
    },
  ],
};
