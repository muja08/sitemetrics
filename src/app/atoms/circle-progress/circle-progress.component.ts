import { Component, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-circle-progress',
  templateUrl: './circle-progress.component.html',
  styleUrls: ['./circle-progress.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CircleProgressComponent implements OnChanges {

  @Input() circleProperties: any;
  @Input() strokeWidth: any = 12;
  @Input() max_limit: number = 100;

  public dashoffset: any;
  public strokeDasharray: any;

  constructor() {
  }

  ngOnChanges() {
    if (this.circleProperties && this.circleProperties.value >= 0) {
      this.setProgress();
    }
  }

  setProgress() {
    const RADIUS = 54;
    const circumference = 2 * Math.PI * RADIUS;
    const progress = this.circleProperties.value / this.max_limit;
    this.dashoffset = circumference * (1 - progress);
    this.strokeDasharray = circumference;
    if (!Number.isInteger(this.circleProperties.value)) {
      this.circleProperties.mainClass = 'font26';
    }
  }

}
