import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule, Validators} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './feature/home/home.component';
import {ArticleComponent} from './shared/article/article.component'
import {ArticleService} from './shared/services/article.service'
import {EditUserComponent} from './shared/edit-user/edit-user.component'
import {NewUserComponent} from './shared/new-user/new-user.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ArticleComponent,
    EditUserComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ArticleService],
  bootstrap: [NewUserComponent]
})
export class AppModule { }
