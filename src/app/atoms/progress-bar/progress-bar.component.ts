import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressBarComponent {

  @Input() background: any;
  @Input() height: any;
  @Input() fill: any;
  @Input() fillPercentage: any;

  constructor() {
  }
}
