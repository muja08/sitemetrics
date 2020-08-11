import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonheaderModule } from './component/common-header/common-header.module';
import { HttpClientModule } from '@angular/common/http';
import { NavigatorModule } from './component/navigator/navigator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonheaderModule,
    HttpClientModule,
    NavigatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
