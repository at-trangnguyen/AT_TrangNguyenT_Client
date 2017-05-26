import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ShareService } from './share.service';

@Injectable()

export class ArticleService {

  constructor(
    private _http: Http,
    private _shareService: ShareService) {}

  getAllArticles(): Observable<any> {
    return this._http.get('http://localhost:3000/api/v1/articles', this._shareService.jwt())
    .map(this._shareService.extractData);
  }
  getArticleById(id: number) {
    return this._http.get('http://localhost:3000/api/v1/articles/' + id, this._shareService.jwt())
    .map(this._shareService.extractData);
  }
  create(article: any): Observable<any> {
    return this._http.post('http://localhost:3000/api/v1/articles', {article: article}, this._shareService.jwt())
      .map(this._shareService.extractData);
  }
}