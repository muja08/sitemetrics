import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModalComponent } from './dialog-modal.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [ DialogModalComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule
  ],
  exports: [ DialogModalComponent ]
})
export class DialogModalModule { }
