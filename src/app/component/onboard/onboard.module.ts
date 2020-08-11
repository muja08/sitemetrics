import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardComponent } from './onboard.component';
import { OnboardRoutingModule } from './onboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from 'src/app/atoms/loader/loader.module';

@NgModule({
  declarations: [OnboardComponent],
  imports: [
    CommonModule,
    OnboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule
  ],
  exports: [OnboardComponent]
})
export class OnboardModule { }
