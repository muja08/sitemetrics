import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    private router: Router,
    public globalService: GlobalService
    ) {
      this.router.navigateByUrl('/sitedetails');
  }


}
