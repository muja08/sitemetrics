import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  logoutTigger: any = false;
  @ViewChild('logoutToggle') logoutToggle: ElementRef;
  @ViewChild('logoutChild') logoutChild: ElementRef;
  userData: any;


  constructor(
    private renderer: Renderer2,
    private router: Router,
    public globalservice: GlobalService,) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!(this.logoutToggle && this.logoutToggle.nativeElement.contains(e.target))
        && !(this.logoutChild && this.logoutChild.nativeElement.contains(e.target))) {
        this.logoutTigger = false;
      }
    });

    this.globalservice.userData.subscribe((data) => {
      console.log('data', data)
      this.userData = data;
    });

  }
  
  ngOnInit() {
  }

  logout() {
    this.logoutTigger = false;
    this.router.navigateByUrl('onboard');
    localStorage.clear();
  }
}
