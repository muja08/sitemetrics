import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listcard',
  templateUrl: './listcard.component.html',
  styleUrls: ['./listcard.component.css']
})
export class ListcardComponent implements OnInit {

  @Input() listDetails: any;
  
  constructor() { }

  ngOnInit() {
  }

}
