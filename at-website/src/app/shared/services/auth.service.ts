import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  user: any;
  authStatus = new BehaviorSubject(false);
  authStatus$ = this.authStatus.asObservable();
  currentUser: any;
  islogin: any = false;
  constructor( private _http: Http ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if( this.currentUser ) {
      this.authStatus.next(true);
    }
    else {
      this.authStatus.next(false);
    }
	}

  login( email: string, password: string ): Observable<boolean> {
    const encoded_data = JSON.stringify({ email: email, password: password });
    const headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this._http.post('http://localhost:3000/api/v1/users/login', encoded_data, {headers: headers})
      .map((res: Response) => {
        let user = res.json().user;
        if(user) {
          this.authStatus.next(true);
          this.user = user;
          localStorage.setItem('currentUser', JSON.stringify(this.user));
          return true;
        }
        else {
          return false;
        }
    });
  }
  logout() {
    this.authStatus.next(false);
    this.user = null;
    localStorage.removeItem('currentUser');
  }
  isLogin() {
    if(localStorage.getItem('currentUser')) {
      return  true;
    } else {
      return false;
    }
  }
}