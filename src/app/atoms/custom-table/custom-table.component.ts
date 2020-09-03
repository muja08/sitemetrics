import { Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomTableComponent {

  @Input() headerData: any;
  @Input() headerProperties: any;
  @Input() tableRows: any;

  constructor() {
  }
}
