import { Observable } from 'rxjs';

export interface SomeBridge {
  login(
    username: string,
    pwd: string
  ): Observable<{ result: boolean; msg: string }>;
}
