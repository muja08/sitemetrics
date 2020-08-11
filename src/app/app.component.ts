import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatApp';
  public showNav: boolean;

  constructor (
    private router: Router,
    public globalService: GlobalService
    // private elementRef: ElementRef
    ) {
    let loggedIn: any = localStorage.getItem('userData');
    // if (!loggedIn) {
    //   loggedIn = JSON.parse(loggedIn);
    //   this.globalService.userData.next(loggedIn);
    //   this.router.navigateByUrl('home');
    // } else {
    //   this.router.navigateByUrl('onboard');
    // }

    this.globalService.showNav.subscribe((data: any) => {
      if (this.showNav !== data) {
        this.showNav = data;
      }
    });


    // this.elementRef.nativeElement.style.setProperty('--main-color', 'red');
  }


}
