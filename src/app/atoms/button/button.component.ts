import { Component, Output, EventEmitter, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnChanges {

  @Output() submit = new EventEmitter();
  @Input() btnProperties: any;
  @Input() icon: any;
  @Input() fontSize: any = '14px';
  @Input() background: any = 'var(--one)';
  @Input() fontColor: any = 'var(--fourteen)';
  @Input() borderRadius: any = '5px';
  @Input() height: any;
  @Input() width: any;

  buttonStyle = {};
  constructor() {
  }

  ngOnChanges() {
    const property: any = this.btnProperties.style ? this.btnProperties.style : {};
    this.buttonStyle = {
      ...property,
      ...{
        'color': this.fontColor,
        'font-size': this.fontSize,
        'background': this.background,
        'height': this.height,
        'width': this.width,
        'border-radius': this.borderRadius
      }
    };
  }
  emitCall(type: string) {
      this.submit.emit(type);
  }
}
