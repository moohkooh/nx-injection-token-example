import { Inject, Injectable } from '@angular/core';
import { BRIDGE, SomeBridge } from '@example/flow/api';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService implements SomeBridge {
  constructor(@Inject(BRIDGE) private readonly bridge: SomeBridge) {}

  /**
   * default implementation of the bridge
   * @param username
   * @param pwd
   * @returns
   */
  login(username: string, pwd: string): Observable<{ result: boolean, msg: string }> {
    return this.bridge.login(username, pwd);
  }
}
