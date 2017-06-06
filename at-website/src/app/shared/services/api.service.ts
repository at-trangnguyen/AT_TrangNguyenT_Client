import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams, XSRFStrategy, Request, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment.dev';
import { ApiRegistry } from './api.registry';

const API_ROOT = environment.BACKEND_ENDPOINT_URI;
export const IMAGE_ROOT = environment.IMAGE_ENDPOINT_URI;
export const END_POINT = ApiRegistry;

@Injectable()
export class ApiService {
	constructor(private _http: Http) {}

	get(endpoint: string[], params: string = '') {
    return this._http.get(this.query(endpoint, params), this.jwt())
      .map(this.extractData);
  }
  post(endpoint: string[], body) {
    return this._http.post(this.query(endpoint), body, this.jwt())
      .map(this.extractData);
  }
  put(endpoint: string[], body) {
    return this._http.put(this.query(endpoint), body, this.jwt())
      .map(this.extractData);
  }
  delete(endpoint: string[]) {
    return this._http.delete(this.query(endpoint), this.jwt())
      .map(this.extractData);
  }
	query(endpoint: string[], params: string = ''): string {
    if (params != '') {
      return API_ROOT + endpoint.join('/') + '?' + params;
    } else {
      return API_ROOT + endpoint.join('/');
    }
  }
	jwt() {
 		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.auth_token) {
      const headers = new Headers({ 'auth_token': currentUser.auth_token});
      return new RequestOptions({ headers: headers });
    }
  }
  extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
}