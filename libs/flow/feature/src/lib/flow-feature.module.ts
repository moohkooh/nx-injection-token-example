import { Inject, Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BRIDGE, BRIDGE_APP, FlowApiModule, SomeBridge } from '@example/flow/api';
import { DefaultBridge } from './default.bridge';
import { LoginService } from './login.service';

@NgModule({
  imports: [CommonModule, FlowApiModule],
  exports: [FlowApiModule],

})
export class FlowFeatureModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: FlowFeatureModule,
      providers: [
        DefaultBridge,
        {
          provide: BRIDGE,
          useFactory: getBridgeImpl,
          deps: [Injector, DefaultBridge],
        },
        LoginService,
      ],
    };
  }
}

/**
 In the nx-injection-token-example library, the BRIDGE token serves as a means of communication between the library and the consuming application. If the application wishes to provide an alternative implementation of a service within the library, it can use the BRIDGE_APP injection token to define the service.
To accomplish this, a factory function is used. The factory function checks if there is a custom implementation provided for the BRIDGE_APP token. If a custom implementation is available, it is used. Otherwise, the default implementation specified for the BRIDGE token, which is used throughout the library, is utilized.
By utilizing the BRIDGE and BRIDGE_APP injection tokens in this manner, the library allows flexibility for the application to provide its own services while also providing a fallback mechanism to ensure consistent functionality when a custom implementation is not available.
 */
export function getBridgeImpl(inj: Injector, defaultImpl: SomeBridge): SomeBridge {
  const impl = inj.get(BRIDGE_APP, null);
  return impl ? impl : defaultImpl;
}
