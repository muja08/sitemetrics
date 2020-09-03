import { Component, Output, EventEmitter, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent implements OnChanges {

  @Input() accordionData: any;
  constructor() {
  }

  ngOnChanges() {
  }

  openCloseAccordion() {
    if (this.accordionData.tail && this.accordionData.tail.data && this.accordionData.tail.data.length) {
      this.accordionData.open = !this.accordionData.open;
    }
  }
}
