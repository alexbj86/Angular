import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserApiService {

    private userApiUrl = 'http://localhost:8080/users';

    constructor(private http: Http) { }

    public getUsers(): Promise<User[]> {
        return this.http.get(this.userApiUrl)
                        .toPromise()
                        .then(response => response.json() as User[]);
    }
}
