import { Injectable } from "@angular/core";
import { SomeBridge } from "@example/flow/api";
import { Observable } from "rxjs";

@Injectable()
export class DefaultBridge implements SomeBridge {
  login(username: string, pwd: string):  Observable<{ result: boolean; msg: string }> {
    return new Observable((observe) => {
      observe.next({result: true, msg: "Result from Default Brdige"});
      observe.complete();
    });
  }
}
