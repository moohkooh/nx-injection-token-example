import { Component } from '@angular/core';
import { FlowUiModule } from '@example/flow/ui';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, FlowUiModule],
  selector: 'example-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
}
