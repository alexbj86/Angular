import { Component, OnInit } from '@angular/core';
import { Customer    } from './customer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
    customers: Customer[];
    selectedCustomer: Customer;

    constructor() {}
    
    getCustomers(){
        return [
                new Customer(1, 'Mary', 'Taylor', 24),
                new Customer(2, 'Peter', 'Smith', 18),
                new Customer(3, 'Lauren', 'Taylor', 31),
                ];
    }
    
    ngOnInit(): void {
        this.customers = this.getCustomers();
    }
    
    onSelect(cust: Customer): void {
        this.selectedCustomer = cust;
    }

}
