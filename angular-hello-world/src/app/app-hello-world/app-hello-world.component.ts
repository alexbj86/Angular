import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './app-hello-world.component.html',
  styleUrls: ['./app-hello-world.component.css']
})
export class AppHelloWorldComponent implements OnInit {

  message = 'Hello Angular World!';

  constructor() { }

  ngOnInit() {
  }

}
