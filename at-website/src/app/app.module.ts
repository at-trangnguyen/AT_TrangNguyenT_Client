import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { HomeComponent } from './feature/home/home.component';
import { ArticleComponent } from './shared/component/article/article.component';
import { ArticleService } from './shared/services/article.service';
import { CategoryComponent } from './shared/component/category/category.component'
import { LoginComponent } from './auth/login/login.component'
import { AuthService } from './shared/services/auth.service';
import { FavoriteArticleComponent } from './shared/component/favorite-article/favorite-article.component';
import { PopularTagComponent } from './shared/component/popular-tag/popular-tag.component';
import { ArticleDetailComponent } from './feature/article-detail/article-detail.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { BtnFollowComponent } from './shared/component/btn-follow/btn-follow.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { EditProfileComponent } from './feature/edit-profile/edit-profile.component';
import { SearchComponent } from './feature/search/search.component';
import { FormArticleComponent } from './shared/component/form-article/form-article.component';
import { PicturePipe } from './shared/pipes/picture-article.pipe';
import { AvatarPipe } from './shared/pipes/avatar.pipe';
import { AuthGuard } from './common/auth.guard';
import { ApiService } from './shared/services/api.service';
import { BtnLikeComponent } from './shared/component/btn-like/btn-like.component';
import { ArticleByTagComponent } from './feature/article-by-tag/article-by-tag.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'login',
    component: LoginComponent 
  },
  { 
    path: 'signup',
    component: SignupComponent 
  },
  { 
    path: 'article/:id', 
    component: ArticleDetailComponent,
  },
  { 
    path: 'editor', 
    component: FormArticleComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'editor/:id', 
    component: FormArticleComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'profile/:id', 
    component: ProfileComponent
  },
  { 
    path: 'edit-profile', 
    component: EditProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'category/:id',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }, {
    path: 'tag/:id',
    component: ArticleByTagComponent
  }
];
export const routing = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticleComponent,
    CategoryComponent,
    LoginComponent,
    FavoriteArticleComponent,
    PopularTagComponent,
    ArticleDetailComponent,
    FooterComponent,
    BtnFollowComponent,
    SignupComponent,
    ProfileComponent,
    EditProfileComponent,
    SearchComponent,
    FormArticleComponent,
    PicturePipe,
    AvatarPipe,
    BtnLikeComponent,
    ArticleByTagComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    PaginationModule.forRoot(),
    routing
  ],
    
  providers: [ApiService, ArticleService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
