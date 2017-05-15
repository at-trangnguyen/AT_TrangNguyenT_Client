import {Http, Headers, Response} from '@angular/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable() 
export class AuthService {
	public token: string;

	constructor(private _http: Http) {
		var currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.token = currentUser;
	}

	login(email: string, password: string): Observable<any> {
		return this._http.post('data/users.json', JSON.stringify({ email: email, password: password }))
		.map((res: Response) => {
			let token = res.json();
			console.log(token);
			if (token) {
				this.token = token;
				localStorage.setItem('currentUser', JSON.stringify({email: email, token: token}));
				return true;
			}
			else {
				return false;
			}
		});
	}
	logout(): void {
		this.token = null;
		localStorage.removeItem('currentUser');
	}
}