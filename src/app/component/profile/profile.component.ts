import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor(public globalService: GlobalService) { 
    this.globalService.showNav.next(true);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.globalService.showNav.next(false);
  }

}
