import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersComponent } from './customers/customers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/customer', pathMatch: 'full' },
  {path: 'detail/:id', component: CustomerDetailsComponent},
  {path: 'jsa/customer', component: CustomersComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
