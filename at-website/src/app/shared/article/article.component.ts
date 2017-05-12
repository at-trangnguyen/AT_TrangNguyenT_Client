import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../services/article.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: any[];
  constructor(private _article: ArticleService) { }

  ngOnInit() {
    this.articles = [];
    this._article.getAllArticle()
    .subscribe((data: any) => {
      this.articles = data.articles;
    })
  }

}
