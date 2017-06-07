import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../shared/services/article.service';
import { ApiService, END_POINT, IMAGE_ROOT } from '../../shared/services/api.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	articles: any;
	url: any;
  pager: any;
  article_count: number;
  sub: any;
  id: any;
  constructor(
		private _api: ApiService,
    private _articleService: ArticleService,
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _router: Router
 	) { 
  	this.articles = [];
    this.url = IMAGE_ROOT;
    this.pager = {};
    this.article_count = 0;
    this.id = 0;
 	}

  ngOnInit() {
    this.sub = this._route.params.subscribe((params: any) => {
      this.id = +params['id'];			
      this.setPage(1);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();  
  }
  setPage(page: number) {
    if (this.id) {
      this._api.get([END_POINT.categories, this.id, 'articles' + '?page=' + page.toString()])
        .subscribe((data: any) => {
          this.articles = data.articles;
          this.article_count = data.meta.articlesCount;
          this.pager = this._articleService.getPager(this.article_count, page);
          if (page < 1 || page > this.pager.totalPages) {
            return;
          }
        });
    } else {
      this._api.get([END_POINT.articles + '?page=' + page.toString()])
        .subscribe((data: any) => {
          this.articles = data.articles;
          this.article_count = data.meta.articlesCount;
          this.pager = this._articleService.getPager(this.article_count, page);
          if (page < 1 || page > this.pager.totalPages) {
            return;
          }
        });
    }
  }
}
