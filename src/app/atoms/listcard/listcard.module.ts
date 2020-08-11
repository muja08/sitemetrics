import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListcardComponent } from './listcard.component';

@NgModule({
  declarations: [ListcardComponent],
  imports: [
    CommonModule,
  ],
  exports: [ListcardComponent]
})
export class ListCardModule { }
