import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {ArticleService} from '../services/article.service';
import { CategoryService } from '../../shared/services/category.service'
@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.scss']
})
export class FormArticleComponent implements OnInit {
  categories: any;
  category = new FormControl('',
    Validators.required
  );
  name = new FormControl('', [
    Validators.required
  ]);
  detail = new FormControl('', [
    Validators.required
  ]);
  image = new FormData();
  tag = new FormControl('', [
    Validators.required
  ]);

  private articleForm: FormGroup;
  constructor(
    private _build: FormBuilder,
    private _router: ActivatedRoute,
    private _articleService: ArticleService,
    private _categories: CategoryService,
    private http: Http) { }

  ngOnInit() {
    this.categories = [];
    this.articleForm = this._build.group({
      category_id: this.category,
      name: this.name,
      detail: this.detail,
      tag: this.tag
    });
    this._categories.getAllCategory()
    .subscribe((data: any) => {
      this.categories = data.categories;
    })
  }
  submit() {
    this._articleService.create(this.articleForm.value)
    .subscribe(data => {
      console.log('success');
    })
  }
}