import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Customer } from './customer';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getCustomer(id:string): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCustomersList(query = {}): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, customer);
  }

  updateCustomer(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, {responseType: 'text'});
  }
}
