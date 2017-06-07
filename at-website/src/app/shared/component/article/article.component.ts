import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService, END_POINT, IMAGE_ROOT } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() item: any;
  url: any;
  loading: boolean;
  constructor(
    private _api: ApiService,
    private _authService: AuthService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.item = {};
    this.url = IMAGE_ROOT;
    this.loading = false;
  }

  ngOnInit() {
  }
  like(article) {
    if (this._authService.isLogin()) {
      if (article.favorited) {
        this.loading = true;
        this._api.delete([END_POINT.articles, article.id, 'favorites'])
        .subscribe((data: any) => {
          article.favorited = false;
          article.favorites_count = data.favorites_count;
          this.loading = false;
        });
      } else {
        this.loading = true;
        let param: string;
        this._api.post([END_POINT.articles,article.id, 'favorites'], param)
        .subscribe((data: any) => {
          article.favorited = true;
          article.favorites_count = data.favorites_count;
          this.loading = false;
        });
      } 
    } else {
      this._router.navigate(['/login']);
    }
  }
}
