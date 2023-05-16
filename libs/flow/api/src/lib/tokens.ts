import { InjectionToken } from '@angular/core';
import { SomeBridge } from './bridge';

export const BRIDGE_APP = new InjectionToken<SomeBridge>('BRIDGE_APP');
export const BRIDGE = new InjectionToken<SomeBridge>('SomeBridge');
