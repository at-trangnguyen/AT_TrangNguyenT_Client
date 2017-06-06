import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { ApiService, END_POINT, IMAGE_ROOT } from '../../services/api.service';
@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.scss']
})

export class FormArticleComponent implements OnInit {
  articleForm: FormGroup;
  categories: any;
  param: string;
  article: any;
  category = new FormControl('',
    Validators.required
  );
  name = new FormControl('', [
    Validators.required
  ]);
  detail = new FormControl('', [
    Validators.required
  ]);
  tag = new FormControl('');
  file: File;
  imageSrc: string = '';

  constructor(
    private _build: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _api: ApiService
  ) { 
    this.categories = [];
    this.param = this._route.snapshot.params.id;
  }

 ngOnInit() {
    this.articleForm = this._build.group({
      category_id: this.category,
      name: this.name,
      detail: this.detail,
      tag: this.tag
    });
    this._api.get([END_POINT.categories])
    .subscribe((data: any) => {
      this.categories = data;
    });
    if (this.param) {
      this._api.get([END_POINT.articles, this.param])
      .subscribe((data: any) => {
        this.article = data.article;
        this.category.setValue(data.article.category.id);
        this.name.setValue(data.article.name);
        this.detail.setValue(data.article.detail);
        let tags = data.article.tags.map(function(tag) {
          return tag.name;
        });
        if(tags) {
          this.tag.setValue(tags.join());
        }
        this.imageSrc = IMAGE_ROOT + data.article.picture.url;
      });
    }
  }
  submit() {
    if (this.param) {
      this._api.put([END_POINT.articles, this.param], this.createDataRequest())
      .subscribe((data: any) =>  {
        this._router.navigate(['/article/' + this.param]);
     })
    }
    else {
      this._api.post([END_POINT.articles], this.createDataRequest())
      .subscribe((data: any) => {
        this._router.navigate(['/article/' + data.id]);
      })
    }
  }

  fileChange(event: any){
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }

   handleInputChange(e) {
    let fileList: FileList = e.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(this.file);
  }

  _handleReaderLoaded(e) {
    var reader = e.target;
    this.imageSrc = reader.result;
  }
  createDataRequest(){
    let formRequest: FormData = new FormData();
    formRequest.append("name", this.name.value);
    formRequest.append("category_id", this.category.value);
    formRequest.append("detail", this.detail.value);
    formRequest.append("tag", this.tag.value);
    formRequest.append("picture", this.file);
    return formRequest;
  }

}
