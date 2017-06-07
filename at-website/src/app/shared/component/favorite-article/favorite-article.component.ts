import { Component, OnInit } from '@angular/core';
import { ApiService, END_POINT, IMAGE_ROOT } from '../../services/api.service';
@Component({
  selector: 'app-favorite-article',
  templateUrl: './favorite-article.component.html',
  styleUrls: ['./favorite-article.component.scss']
})
export class FavoriteArticleComponent implements OnInit {
  popularArticles: any;
  url: any;
  constructor(private _api: ApiService) { 
    this.popularArticles = [];
    this.url = IMAGE_ROOT;
  }

  ngOnInit() {
    this._api.get([END_POINT.popular_articles])
    .subscribe((data: any) => {
      this.popularArticles = data.articles;
    });
  }
}
