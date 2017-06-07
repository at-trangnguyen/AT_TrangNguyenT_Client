import { Component, OnInit, Input } from '@angular/core';
import { ApiService, END_POINT } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any;
  constructor( private _api: ApiService ) { 
    this.categories = [];
  }
  ngOnInit() {
    this._api.get([END_POINT.categories])
    .subscribe((data: any) => {
      this.categories = data;
    });
  }
}
