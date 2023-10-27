import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'analog-test-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <analog-test-analog-welcome /> `,
})
export default class HomeComponent {}
