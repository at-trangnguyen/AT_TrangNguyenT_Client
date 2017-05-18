import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {

  constructor(private _http: Http) {}

  create(user: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    return this._http.post('http://localhost:3000/api/v1/users', user, {headers: headers})
    .map((res: Response) => {
      let x = res.json();
      console.log(x);
    });
  }
}