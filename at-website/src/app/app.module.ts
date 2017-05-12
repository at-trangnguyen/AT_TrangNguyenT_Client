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
import { EditUserComponent } from './shared/edit-user/edit-user.component'
import { NewUserComponent } from './shared/new-user/new-user.component';
import { CategoryComponent } from './feature/category/category.component'
import {CategoryService} from './shared/services/category.service';
import { LoginComponent } from './auth/login/login.component'

const routes: Routes = [
 { path: 'home', component: HomeComponent },
 { path: 'login', component:LoginComponent },
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
    EditUserComponent,
    NewUserComponent,
    CategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ArticleService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
