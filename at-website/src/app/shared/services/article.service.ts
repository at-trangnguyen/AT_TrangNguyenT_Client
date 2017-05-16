import {Http} from '@angular/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'

@Injectable()

export class ArticleService {
  constructor(private _http: Http) {}

  getAllArticle() : Observable<any> {
    return this._http.get('http://172.16.29.229:3000/api/v1/home')
    .map((res: any) => {
      let x = res.json();
      console.log(x);
    });
  }
}