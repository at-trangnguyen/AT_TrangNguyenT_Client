import { Component, OnInit, Input } from '@angular/core';
import { ApiService, END_POINT } from '../../services/api.service';
@Component({
  selector: 'app-btn-like',
  templateUrl: './btn-like.component.html',
  styleUrls: ['./btn-like.component.scss']
})
export class BtnLikeComponent implements OnInit {
  @Input() favorites_count :number;
  id: any;
  constructor(private _api: ApiService) { 
    this.favorites_count = 0;
  }

  ngOnInit() {
  }
  like(article) {
    if(article.is_favorited) {
      this._api.delete([END_POINT.articles, article.id, 'favorites'])
      .subscribe((data: any) => {
        console.log('aaaaa');
        article.is_favorited = false;
        article.favorites_count = data.article.favorites_count;
      });
    } else {
      let param: string;
      this._api.post([END_POINT.articles,article.id, 'favorites'], param)
      .subscribe((data: any) => {
        article.is_favorited = true;
        article.favorites_count = data.article.favorites_count;
      });
    }
  }
}
