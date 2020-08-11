import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.css']
})
export class ChipComponent implements OnInit {

  @Input() customizeCss: any = '';
  @Input() chipData: any;

  constructor() { }

  ngOnInit() {
  }

}
