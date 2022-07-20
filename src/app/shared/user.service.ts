import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './model/user.model';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	endPoint = 'http://localhost:3000/users';

	httpOptions = {
		header: new HttpHeaders({
			'Content-Type': 'application/json',
		}),
	};

	constructor(private http: HttpClient) {}

	saveUser(user: any): Observable<User> {
		return this.http.post<any>(this.endPoint, user);
	}
}
