import { InjectionToken } from '@angular/core';
import { SomeBridge } from './bridge';

export const BRIDGE = new InjectionToken<SomeBridge>('SomeBridge');
