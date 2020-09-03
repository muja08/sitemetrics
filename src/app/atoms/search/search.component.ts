import { Component, Output, EventEmitter, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent {


  @Input() searchValue: any;
  @Output() emitSearch = new EventEmitter();

  constructor() {
  }

  emitSearchValue() {
    this.emitSearch.emit(this.searchValue);
  }
}
