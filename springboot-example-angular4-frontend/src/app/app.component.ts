import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'devismol.net Tutorial';
//    u1: User = new User('Davis', 'Molinari', 'Italy', 34);
//    u2: User = new User('Lionel', 'Messi', 'Argentina', 30);
//    u3: User = new User('Jason', 'Bourne', 'US', 30);
    users: User[] = [this.u1, this.u2, this.u3];
}
