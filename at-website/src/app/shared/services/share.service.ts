import { Headers, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ShareService {
	constructor() {}
	jwt() {
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.auth_token) {
      const headers = new Headers({ 'auth_token': currentUser.auth_token});
      // headers.append('auth_token', currentUser.auth_token);
      return new RequestOptions({ headers: headers });
    }
  }
  extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}