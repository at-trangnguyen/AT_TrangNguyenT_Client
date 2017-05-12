import { NgModule } from '@angular/core'
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { PaginationComponent } from './pagination/pagination.component'

@NgModule({
  imports: [],
  declarations: [
    HeaderComponent,
    ArticleComponent,
    EditUserComponent,
    NewUserComponent,
    PaginationComponent
  ],
  exports: [
    HeaderComponent
  ]
})

export class SharedModule {}