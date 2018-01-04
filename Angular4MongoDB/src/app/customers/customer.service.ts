import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Customer } from './customer';

@Injectable()
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/customers';

  constructor() { }

}
