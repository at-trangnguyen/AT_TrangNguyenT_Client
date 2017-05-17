import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule, Validators} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './feature/home/home.component';
import { ArticleComponent } from './shared/article/article.component'
import { ArticleService } from './shared/services/article.service'
import { CategoryComponent } from './shared/category/category.component'
import {CategoryService} from './shared/services/category.service';
import { LoginComponent } from './auth/login/login.component'
import { AuthService } from './shared/services/auth.service'
import { PaginationComponent } from './shared/pagination/pagination.component';
import { FavoriteArticleComponent } from './shared/favorite-article/favorite-article.component';
import { PopularTagComponent } from './shared/popular-tag/popular-tag.component';
import { BtnLikeComponent } from './shared/btn-like/btn-like.component';
import { ArticleDetailComponent } from './feature/article-detail/article-detail.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BtnFollowComponent } from './shared/btn-follow/btn-follow.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { EditProfileComponent } from './feature/edit-profile/edit-profile.component';
import { EditArticleComponent } from './feature/edit-article/edit-article.component';
import { NewPostComponent } from './feature/new-post/new-post.component';
import { SearchComponent } from './feature/search/search.component';
import { FormArticleComponent } from './shared/form-article/form-article.component';

const routes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'login', component: LoginComponent },
 { path: 'signup', component: SignupComponent },
 { path: 'article', component: ArticleDetailComponent },
 { path: 'new-article', component: NewPostComponent },
 { path: 'profile', component: ProfileComponent },
 { path: 'edit-profile', component: EditProfileComponent },
 {
   path: '',
   redirectTo: '/home',
   pathMatch: 'full'
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
    PaginationComponent,
    FavoriteArticleComponent,
    PopularTagComponent,
    BtnLikeComponent,
    ArticleDetailComponent,
    FooterComponent,
    BtnFollowComponent,
    SignupComponent,
    ProfileComponent,
    EditProfileComponent,
    EditArticleComponent,
    NewPostComponent,
    SearchComponent,
    FormArticleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ArticleService, CategoryService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
