import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }
  @Input() type: any;
  @Input() loaderStyle: any;
  @ViewChild('loader') loader: any;
  ngOnInit() {
  }

}
