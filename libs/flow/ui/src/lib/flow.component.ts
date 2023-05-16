import { Component } from '@angular/core';
import { LoginService } from '@example/flow/feature';
import { Observable } from 'rxjs';

@Component({
  selector: 'example-flow',
  template: `<p (click)="login()">
    Do Some login! {{ (loginResult | async)?.msg }}
  </p>`,
  styles: [],
})
export class FlowComponent {
  loginResult!: Observable<{ result: boolean; msg: string }>;

  constructor(private readonly loginService: LoginService) {}

  login() {
    this.loginResult = this.loginService.login('elaSu', 'JUHI');
  }
}
