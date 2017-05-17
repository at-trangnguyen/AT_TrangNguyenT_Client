import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service'
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: any[];
  constructor(private _categories: CategoryService ) { }

  ngOnInit() {
    this.categories = [];
    this._categories.getAllCategory()
    .subscribe((data: any) => {
      this.categories = data.categories;
    })
  }

}
