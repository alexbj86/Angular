import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countries: any;

  constructor(private api: ApiService) { }

  ngOnInit() {

    const onSuccess = res => {
      this.countries = res;
    }

    const onError = (err) => {
      console.log(err)
    }

    this.api.getCoutries().subscribe(onSuccess, onError)

  }

}
