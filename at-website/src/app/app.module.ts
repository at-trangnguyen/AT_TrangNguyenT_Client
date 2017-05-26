import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';
// import { MediumEditorDirective } from 'angular2-medium-editor/medium-editor.directive';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './feature/home/home.component';
import { ArticleComponent } from './shared/article/article.component';
import { ArticleService } from './shared/services/article.service';
import { CategoryComponent } from './shared/category/category.component'
import { CategoryService } from './shared/services/category.service';
import { LoginComponent } from './auth/login/login.component'
import { AuthService } from './shared/services/auth.service';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { FavoriteArticleComponent } from './shared/favorite-article/favorite-article.component';
import { PopularTagComponent } from './shared/popular-tag/popular-tag.component';
import { ArticleDetailComponent } from './feature/article-detail/article-detail.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BtnFollowComponent } from './shared/btn-follow/btn-follow.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { EditProfileComponent } from './feature/edit-profile/edit-profile.component';
import { SearchComponent } from './feature/search/search.component';
import { FormArticleComponent } from './shared/form-article/form-article.component';
import { PicturePipe } from './shared/pipes/picture-article.pipe';
import { UserService } from './shared/services/user.service';
import { AvatarPipe } from './shared/pipes/avatar.pipe';
import { ShareService } from './shared/services/share.service';
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
  { path: 'signup',
  component: SignupComponent 
  },
  { 
    path: 'article/:id', 
    component: ArticleDetailComponent 
  },
  { 
    path: 'editor', 
    component: FormArticleComponent 
  },
  { 
    path: 'editor/:id', 
    component: FormArticleComponent 
  },
  { 
    path: 'profile', 
    component: ProfileComponent 
  },
  { 
    path: 'edit-profile', 
    component: EditProfileComponent 
  },
  { 
    path: 'search', 
    component: SearchComponent 
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
    // MediumEditorDirective
  ],
  imports: [
    PaginationModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
    
  providers: [ArticleService, CategoryService, AuthService, UserService, ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
