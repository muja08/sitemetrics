import { Component, Output, EventEmitter, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProgressBarComponent implements OnChanges {

  
  @Input() background: any;
  @Input() height: any;
  @Input() fill: any;
  @Input() fillPercentage: any;

  constructor() {
  }

  ngOnChanges() {

  }
}
