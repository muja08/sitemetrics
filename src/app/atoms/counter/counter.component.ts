import { Component, Output, EventEmitter, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CounterComponent implements OnChanges {

  @Input() counterValue: any = 10;
  @Output() emitCounter = new EventEmitter();
  constructor() {
  }

  ngOnChanges() {

  }
 
  modifyCounter(addValue) {
    if (this.counterValue) {
      if (addValue === 'inc') {
        ++this.counterValue;
      } else if (addValue === 'dec') {
        this.counterValue - 1 ? --this.counterValue : {};
      } else if (addValue === 'enter') {
        this.counterValue = this.counterValue > 0 ? this.counterValue : 1;
      }
      this.emitCounter.emit(this.counterValue);
    } else {
      this.counterValue = 1;
      this.emitCounter.emit(this.counterValue);
    }
  }

  
}
