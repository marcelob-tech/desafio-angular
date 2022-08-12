import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { retry, catchError, shareReplay } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	endPoint: string = 'http://localhost:3000';

	httpOptions = {
		header: new HttpHeaders({
			'Content-Type': 'application/json',
		}),
	};

	constructor(private http: HttpClient) {}

	saveUser(user: any): Observable<User> {
		return this.http.post<any>(`${this.endPoint}` + '/users', user, { headers: this.httpOptions.header }).pipe(shareReplay(1));
	}
}
