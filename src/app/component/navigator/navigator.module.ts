import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './navigator.component';
import { NavigatorRoutingModule } from './navigato-routing.module';

@NgModule({
  declarations: [NavigatorComponent],
  imports: [
    CommonModule,
    NavigatorRoutingModule,
  ],
  exports: [NavigatorComponent]
})
export class NavigatorModule { }
