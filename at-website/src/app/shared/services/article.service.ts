import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as _ from 'underscore';
@Injectable()

export class ArticleService {

  constructor(private _http: Http) {}
  getPager(totalArticle: number, currentPage: number = 1, pageSize: number = 5) {
    let totalPages = Math.ceil(totalArticle / pageSize);
    let startPage: number, endPage: number;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalArticle - 1);
    let pages = _.range(startPage, endPage + 1);
    return {
      totalArticle: totalArticle,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }
}
