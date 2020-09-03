import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table.component';
import { AccordionModule } from '../accordion/accordion.module';


@NgModule({
  imports: [
    CommonModule,
    AccordionModule
  ],
  declarations: [CustomTableComponent],
  exports: [CustomTableComponent]

})
export class CustomTableModule { }
