import { Component, OnInit } from '@angular/core';
import  {  ActivatedRoute  }  from  '@angular/router';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  id: number;
  sub: any;
  constructor( private _route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe((params: any) => {
      this.id = +params['id'];
    }); 
  }

}
