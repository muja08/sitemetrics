import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHeaderComponent } from './common-header.component';

@NgModule({
  declarations: [CommonHeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [CommonHeaderComponent]
})
export class CommonheaderModule { }
