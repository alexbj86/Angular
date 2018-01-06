import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
