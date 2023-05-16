import { SomeBridge } from '@example/flow/api';
import { Observable } from 'rxjs';

export class AppBridge implements SomeBridge {
  login(
    username: string,
    pwd: string
  ): Observable<{ result: boolean; msg: string }> {
    return new Observable((observe) => {
      observe.next({ result: true, msg: 'Result from App' });
    });
  }
}
