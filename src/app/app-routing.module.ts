import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'onboard',
    loadChildren: './component/onboard/onboard.module#OnboardModule'
  },
  {
    path: 'home',
    loadChildren: './component/homescreen/homescreen.module#HomeModule'
  },
  {
    path: 'profile',
    loadChildren: './component/profile/profile.module#ProfileModule'
  },
  {
    path: 'edit-profile',
    loadChildren: './component/profile/profile.module#ProfileModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
