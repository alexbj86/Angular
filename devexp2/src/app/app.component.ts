import { Component } from '@angular/core';
import {Utente} from "./utente/utente.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  utenti: Utente[] = [
    {nome: "Sa", cognome: "Ro", eta: 33},
    {nome: "Ma", cognome: "Bi", eta: 31},
    {nome: "Fa", cognome: "Ma", eta: 17},
    {nome: "Be", cognome: "Ca", eta: 6}
  ]

  constructor() {
   // this.utenti = this.utenti.filter(u => u.eta >=18)
  }
}
