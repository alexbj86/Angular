import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { PaeseComponent } from './paese/paese.component';
import { MenuComponent } from './menu/menu.component';

const routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "paese", component: PaeseComponent},
  {path: "about", component: AboutComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PaeseComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
