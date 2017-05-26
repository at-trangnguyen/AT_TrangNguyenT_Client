import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {ArticleService} from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: any;
  id: number;
  constructor(
    private _articleService: ArticleService,
    private _router: ActivatedRoute) { }

  ngOnInit() {
    this.articles = [];
    this._articleService.getAllArticles()
    .subscribe((data: any) => {
      this.articles = data.articles;
    })
  }

}
