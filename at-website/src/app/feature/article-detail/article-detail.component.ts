import { Component, OnInit } from '@angular/core';
import  {  ActivatedRoute  }  from  '@angular/router';
import { ArticleService } from '../../shared/services/article.service';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  id: number;
  article: any;
  constructor( 
    private _router: ActivatedRoute,
    private _articleService: ArticleService) { }

  ngOnInit() {
    let param = this._router.snapshot.params.id;
    this._articleService.getArticleById(param)
    .subscribe(data => {
      this.article = data.article;
      console.log(this.article);
    })
  }
}
