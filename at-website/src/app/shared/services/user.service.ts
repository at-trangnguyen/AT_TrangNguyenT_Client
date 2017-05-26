import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ShareService } from './share.service';

@Injectable()

export class UserService {
  constructor(
    private _http: Http,
    private _shareService: ShareService) {}

  create(user: any): Observable<any> {
    return this._http.post('http://localhost:3000/api/v1/users', user, this._shareService.jwt())
      .map(this._shareService.extractData);
  }
  update(user: any): Observable<any> {
    return this._http.put('http://localhost:3000/api/v1/users/' + user.id, user, this._shareService.jwt())
      .map(this._shareService.extractData);
  }
}