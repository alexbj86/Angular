import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UtenteComponent} from "./utente/utente.component";
import { UppercaserComponent } from './uppercaser/uppercaser.component';
import { LowercaserComponent } from './lowercaser/lowercaser.component';
import { PanelComponent } from './panel/panel.component';
import { Panel2Component } from './panel2/panel2.component';

@NgModule({
  declarations: [
    AppComponent,
    UtenteComponent,
    UppercaserComponent,
    LowercaserComponent,
    PanelComponent,
    Panel2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
