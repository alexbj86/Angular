import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { UserApiService } from './services/user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'devismol.net Tutorial';
    users: User[];

    constructor(private userService: UserApiService) {

    }

    ngOnInit(): void {
        this.userService.getUsers().then(u => this.users = u);
    }
}
