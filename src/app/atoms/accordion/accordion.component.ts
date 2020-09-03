import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent {

  @Input() accordionData: any;
  constructor() {
  }
  openCloseAccordion() {
    if (this.accordionData.tail && this.accordionData.tail.data && this.accordionData.tail.data.length) {
      this.accordionData.open = !this.accordionData.open;
    }
  }
}
