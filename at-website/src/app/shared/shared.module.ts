import {NgModule} from '@angular/core'
import {HeaderComponent} from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { SignupComponent } from './signup/signup.component'

@NgModule({
  imports: [],
  declarations: [
    HeaderComponent,
    ArticleComponent,
    EditUserComponent,
    SignupComponent
  ],
  exports: [
    HeaderComponent
  ]
})

export class SharedModule {}