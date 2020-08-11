import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from 'src/app/atoms/loader/loader.module';
import { HomescreenComponent } from './homescreen.component';
import { HomeRoutingModule } from './homescreen-routing.module';
import { ChipModule } from 'src/app/atoms/chip/chip.module';
import { ListCardModule } from 'src/app/atoms/listcard/listcard.module';

@NgModule({
  declarations: [HomescreenComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule,
    ChipModule,
    ListCardModule
  ],
  exports: [HomescreenComponent]
})
export class HomeModule { }
