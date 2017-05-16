import {Http, Headers, Response} from '@angular/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable() 
export class AuthService {
  token: string;
  constructor(private _http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
	}

  login(email: string, password: string): Observable<any> {
    console.log(email);
    return this._http.post('http://172.16.29.229:3000/api/v1/users/login', JSON.stringify({ email: email, password: password }))
      .map((res: Response) => {
        console.log(res.json());
        let token = res.json() && res.json().token;
        console.log(token);
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ email: email, token: token }));
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