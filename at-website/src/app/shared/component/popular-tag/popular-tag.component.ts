import { Component, OnInit } from '@angular/core';
import { ApiService, END_POINT } from '../../services/api.service';
@Component({
  selector: 'app-popular-tag',
  templateUrl: './popular-tag.component.html',
  styleUrls: ['./popular-tag.component.scss']
})
export class PopularTagComponent implements OnInit {
  popularTags: any;
  constructor(private _api: ApiService) { 
    this.popularTags = [];
  }

  ngOnInit() {
    this._api.get([END_POINT.popular_tags])
    .subscribe((data: any) => {
      this.popularTags = data.tags;
    });
  }

}
