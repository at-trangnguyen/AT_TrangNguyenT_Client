import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from  '@angular/router';
import { ApiService, END_POINT, IMAGE_ROOT } from '../../shared/services/api.service';
@Component({
  selector: 'app-article-by-tag',
  templateUrl: './article-by-tag.component.html',
  styleUrls: ['./article-by-tag.component.scss']
})
export class ArticleByTagComponent implements OnInit {
  articles: any;
  param: any;
  tagName: any;
  id: any;
  constructor(
  	private _api: ApiService,
    private _route: ActivatedRoute
  ) { 
  	this.articles = [];
  }

  ngOnInit() {
  	this._route.params.subscribe((params: any) => {
  		this.id = +params['id'];
	  	this._api.get([END_POINT.tags, this.id, 'articles'])
	  	.subscribe((data: any) => {
	  		console.log(data)
	  		this.articles = data.articles;
	  		this.tagName = data.meta.tag.name;
	  	});
  	})
  }

}
