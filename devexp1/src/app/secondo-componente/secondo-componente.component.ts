import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'secondo-componente',
  templateUrl: './secondo-componente.component.html',
  styleUrls: ['./secondo-componente.component.css']
})
export class SecondoComponenteComponent implements OnInit {

  @Input()
  dato2: {nome: string}

  @Output()
  clickBottone = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emettiEvento(){
    this.clickBottone.emit("ciao " + this.dato2.nome);
  }

}
