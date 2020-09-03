import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';

import { ProgressBarModule } from '../progress-bar/progress-bar.module';
import { CircleProgressModule } from '../circle-progress/circle-progress.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarModule,
    CircleProgressModule,
    ButtonModule
  ],
  declarations: [AccordionComponent],
  exports: [AccordionComponent]

})
export class AccordionModule { }
