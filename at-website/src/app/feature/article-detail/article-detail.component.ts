import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }  from  '@angular/router';
import { ApiService, END_POINT, IMAGE_ROOT } from '../../shared/services/api.service';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  id: number;
  article: any;
  url: any = IMAGE_ROOT ;
  param: string;
  currentUser: any;
  loading: boolean = false;
  comments: any;
  isEditingID: number;
  contentEdit: any;
  content = new FormControl('');
  commentForm: FormGroup;
  constructor( 
    private _api: ApiService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _builder: FormBuilder
  ) {
    this.param = this._route.snapshot.params.id;
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.comments = [];
    this.isEditingID = 0;
  }

  ngOnInit() {
    this.commentForm = this._builder.group({
      content: this.content
    }); 
    this._api.get([END_POINT.articles, this.param])
    .subscribe((data: any) => {
      this.article = data.article;
    });
    this.getComment();
  }
  isCurrentUser(userId) {
    if (this.currentUser) {
      return this.currentUser.id === userId;
    }
    return false;
  }
  like(article) {
    if (this._authService.isLogin()) {
      if (article.favorited) {
        this.loading = true;
        this._api.delete([END_POINT.articles, article.id, 'favorites'])
        .subscribe((data: any) => {
          article.favorited = false;
          article.favorites_count = data.favorites_count;
          this.loading = false;
        });
      } else {
        this.loading = true;
        let param: string;
        this._api.post([END_POINT.articles,article.id, 'favorites'], param)
        .subscribe((data: any) => {
          article.favorited = true;
          article.favorites_count = data.favorites_count;
          this.loading = false;
        });
      }
    } else {
      this._router.navigate(['/login']);
    }
  }
  follow(user) {
    if (this._authService.isLogin()) {
      if (user.followed) {
        this._api.delete([END_POINT.users, user.id, 'follows'])
        .subscribe((data: any) => {
          user.followed = false;
        });
      } else {
        let param: string;
        this._api.post([END_POINT.users, user.id, 'follows'], param)
        .subscribe((data: any) => {
          user.followed = true;
        });
      }
    } else {
      this._router.navigate(['/login']);
    }
  } 
  getComment() {
    this._api.get([END_POINT.articles, this.param, 'comments'])
    .subscribe((data: any) => {
      this.comments = data.comments;
    });
  }
  postComment() {
    if (this._authService.isLogin()) {
      this._api.post([END_POINT.articles, this.param, 'comments'], {content: this.content.value})
      .subscribe((data: any) => {
        this.comments.push(data.comment);
      });
      this.content.setValue('');
    } else {
      this._router.navigate(['/login']);
    }
  }
  deleteComment(commentId) {
    if (confirm("Are you sure?")) {
      this._api.delete([END_POINT.articles, this.param, 'comments', commentId])
      .subscribe((data: any) => {
        this.getComment();
      });
    } else {
      this.isEditingID = null;
    }
  }
  deleteArticle(articleId) {
    this._api.delete([END_POINT.articles, this.param])
    .subscribe((data: any) => {
      this._router.navigate(['/home']);
    });
  }
  editComment(commentId) {
    this.isEditingID = commentId;
    for (let i in this.comments) {
      if(this.comments[i].id === commentId) {
        this.contentEdit = this.comments[i].content;
      }
    }
  }
  updateComment(comment) {
    if (this.contentEdit === '') {
      return this.deleteComment(comment.id);
    } else {
      this._api.put([END_POINT.articles, this.param, 'comments', comment.id], {content: this.contentEdit})
      .subscribe((data: any) => {
        this.getCommentInArray(comment.id).content = data.comment.content;
        console.log(this.getCommentInArray(comment.id).content);
      });
    }
    this.isEditingID = null;
  }
  getCommentInArray(commentId) {
    return this.comments.find(comment => comment.id === commentId);
  }
  cancleComment() {
    this.isEditingID = null;
  }
}
