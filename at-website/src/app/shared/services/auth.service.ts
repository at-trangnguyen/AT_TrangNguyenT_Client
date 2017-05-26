import {Http, Headers, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  user: any;
  authStatus = new BehaviorSubject(false);
  authStatus$ = this.authStatus.asObservable();
  constructor(private _http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.user = currentUser;
    if (this.user !== null) {
      this.authStatus.next(true);
    }
	}

  login(email: string, password: string): Observable<any> {
    let encoded_data = JSON.stringify({ email: email, password: password });
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this._http.post('http://localhost:3000/api/v1/users/login', encoded_data, {headers: headers})
      .map((res: Response) => {
        let user = res.json();
        if (user) {
          this.authStatus.next(true);
          this.user = user;
          localStorage.setItem('currentUser', JSON.stringify(user));
          return true;
        }
        else {
          return false;
        }
    });
  }
  logout(): void {
    this.authStatus.next(false);
    this.user = null;
    localStorage.removeItem('currentUser');
  }
}