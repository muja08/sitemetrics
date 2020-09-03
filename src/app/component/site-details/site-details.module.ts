import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteDetailsComponent } from './site-details.component';
import { SiteDetailsRoutingModule } from './site-details-routing.module';
import { ButtonModule } from 'src/app/atoms/button/button.module';
import { DialogModalModule } from 'src/app/atoms/dialog-modal/dialog-modal.module';
import { CounterModule } from 'src/app/atoms/counter/counter.module';
import { SearchModule } from 'src/app/atoms/search/search.module';
import { CustomTableModule } from 'src/app/atoms/custom-table/custom-table.module';

@NgModule({
  imports: [
    CommonModule,
    SiteDetailsRoutingModule,
    ButtonModule,
    DialogModalModule,
    CounterModule,
    SearchModule,
    CustomTableModule
  ],
  declarations: [SiteDetailsComponent],
  exports: [SiteDetailsComponent],
  providers: [],
})
export class SiteDetailsModule { }
