import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'componente-con-output',
  templateUrl: './componente-con-output.component.html',
  styleUrls: ['./componente-con-output.component.css']
})
export class ComponenteConOutputComponent implements OnInit {

  @Output()
  evento = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.evento.emit("ciao");
  }

}
