import { Component, OnInit } from '@angular/core';
import { ApiService, END_POINT, IMAGE_ROOT } from '../../shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	articles: any;
	searchData: any;
  constructor(private _api: ApiService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.queryParams.subscribe((data: any) => {
      this.searchData = data.condition;
    }); 
    console.log(this.searchData);
    this._api.get([END_POINT.searches + '?condition=' + this.searchData])
    .subscribe((data: any) => {
      this.articles = data.searches;
      console.log(data.searches);
    });
  }

}
