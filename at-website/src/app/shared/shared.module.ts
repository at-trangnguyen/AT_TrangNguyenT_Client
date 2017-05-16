import { NgModule } from '@angular/core'
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FavoriteArticleComponent } from './favorite-article/favorite-article.component';
import { PopularTagComponent } from './popular-tag/popular-tag.component';
import { BtnLikeComponent } from './btn-like/btn-like.component';
import { FooterComponent } from './footer/footer.component';
import { BtnFollowComponent } from './btn-follow/btn-follow.component';
import { FormArticleComponent } from './form-article/form-article.component'

@NgModule({
  imports: [],
  declarations: [
    HeaderComponent,
    ArticleComponent,
    EditUserComponent,
    NewUserComponent,
    PaginationComponent,
    FavoriteArticleComponent,
    PopularTagComponent,
    BtnLikeComponent,
    FooterComponent,
    BtnFollowComponent,
    FormArticleComponent
  ],
  exports: [
    HeaderComponent
  ]
})

export class SharedModule {}