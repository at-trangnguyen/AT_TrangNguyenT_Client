import {Http} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'

@Injectable()

export class ArticleService {
  constructor(private _http: Http) {}

  getAllArticle() : Observable<any> {
    return this._http.get('data/articles.json')
    .map((res: any) => {
      return res.json();
    });
  }
}