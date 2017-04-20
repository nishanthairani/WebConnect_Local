import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from '../models/index';

@Injectable()
export class UserService {
    constructor(private http: Http) { }
    private usersUrl = 'api/users';

    create(user: User) {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.usersUrl, JSON.stringify(user), {headers:headers})
            .map(response => response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}