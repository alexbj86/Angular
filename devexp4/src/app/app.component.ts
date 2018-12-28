import { Component } from '@angular/core';
import {DataService} from "./services/data.service";
import {ApiService} from "./services/api.service";
import {ErrorService} from "./services/error.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private data: DataService, private api: ApiService, private errorService: ErrorService) {
    console.log(data.utenti)

    const onSuccess = (res) => {
      console.log("success", res)
    }

    const onError = (res) => {
      console.log("error", res)
      this.errorService.message = "Errore nel caricamento dei countries."
    }

    this.api.getCoutries().subscribe(onSuccess, onError)
  }

}
