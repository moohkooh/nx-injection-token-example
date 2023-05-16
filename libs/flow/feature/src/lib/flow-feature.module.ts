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

export function getBridgeImpl(inj: Injector, defaultImpl: SomeBridge): SomeBridge {
  const impl = inj.get(BRIDGE_APP, null);
  return impl ? impl : defaultImpl;
}
