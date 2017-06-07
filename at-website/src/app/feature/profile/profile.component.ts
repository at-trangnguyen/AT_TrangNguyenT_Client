import { Component, OnInit } from '@angular/core';
import  {  Router,ActivatedRoute  }  from  '@angular/router';
import { ApiService, END_POINT, IMAGE_ROOT } from '../../shared/services/api.service';
import { AuthService } from '../../shared/services/auth.service';
import { ArticleService } from '../../shared/services/article.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any;
  currentUser: any;
  param: string;
  url: any;
  articles: any;
  article_count: number;
  pager: any;
  constructor(
    private _api: ApiService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService,
    private _authService: AuthService
  ) {
    this.pager = {};
    this.user = {};
    this.articles = [];
    this.url = IMAGE_ROOT;
    this.param = this._route.snapshot.params.id;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this._api.get([END_POINT.users,this.param])
    .subscribe((data: any) => {
      this.user = data.user;
    });
    this._api.get([END_POINT.users, this.param, 'articles'])
    .subscribe((data: any) => {
      this.articles = data.articles;
      this.setPage(1);
    });
  }
  isCurrentUser(userId) {
    if (this.currentUser) {
      return this.currentUser.id === userId;
    }
    return false;
  }
  setPage(page: number) {
    this._api.get([END_POINT.users, this.param, 'articles' + '?page=' + page.toString()])
    .subscribe((data: any) => {
      this.articles = data.articles;
      this.article_count = data.meta.articlesCount;
      this.pager = this._articleService.getPager(this.article_count, page);
      if (page < 1 || page > this.pager.totalPages) {
        return;
      }
    });
  }
  follow(user) {
    if (this._authService.isLogin()) {
      if (user.followed) {
        this._api.delete([END_POINT.users, user.id, 'follows'])
        .subscribe((data: any) => {
          user.followed = false;
        });
      } else {
        let param: string;
        this._api.post([END_POINT.users, user.id, 'follows'], param)
        .subscribe((data: any) => {
          user.followed = true;
        });
      }
    } else {
      this._router.navigate(['/login']);
    }
  }

}
