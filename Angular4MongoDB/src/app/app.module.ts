import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CustomersCreateComponent } from './customers/customers-create/customers-create.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomersCreateComponent,
    CustomerDetailsComponent,
    CreateCustomerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
