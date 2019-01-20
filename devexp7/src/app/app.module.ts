import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInputsDirective } from './directives/log-inputs.directive';
import { BkgDirective } from './directives/bkg.directive';

@NgModule({
  declarations: [
    AppComponent,
    LogInputsDirective,
    BkgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
