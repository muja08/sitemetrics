import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit, OnDestroy {


  chips = [
    {
      label: 'All Categories',
      value: 'All'
    },
    {
      label: 'Movies',
      value: 'Movies'
    },
    {
      label: 'TV Series',
      value: 'TV Series'
    },
    {
      label: 'Netflix',
      value: 'Netflix'
    },
    {
      label: 'YouTube',
      value: 'YouTube'
    },
    {
      label: 'Prime',
      value: 'Prime'
    }
  ];

  videos: any = [];

  constructor(
    public userService: UserService,
    public globalService: GlobalService
    ) {
    this.globalService.showNav.next(true);
  }

  ngOnInit() {
    this.userService.getVideos({}).subscribe((response: any) => {
      console.log('response', response)
      this.videos = [];
      if (response && response.length) {
        response.forEach((each: any) => {
          this.videos.push({
            id: each.contentId,
            duration: each.duration,
            title: each.title,
            views: each.views,
            posted: each.createdAt,
            thumbNail: each.thumbnailLink,
            source: each.link
          });
        });
      }
    }, error => {
    });
  }
  ngOnDestroy() {
    this.globalService.showNav.next(false);
  }
}
