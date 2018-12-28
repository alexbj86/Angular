import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getCoutries() {
    return this.http.get("https://--------------------restcountries.eu/rest/v2/all")
  }
}
