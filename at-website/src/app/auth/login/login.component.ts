import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  public submitted: boolean;
  user: any = {};
  error = '';
  email = new FormControl('', [
    Validators.required		
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ])
  constructor(
    private _builder: FormBuilder,
    private _router: Router,
    private _authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this._builder.group({
      email: this.email,
      password: this.password
    });
    this._authService.logout();
  }
  login() {
    this._authService.login(this.user.email, this.user.password)
    .subscribe(result => {
      if(result === true) {
        this._router.navigate(['/home']);
      }
      else {
        this.error = ' Email or password is incorrect !';
      }
    })
    console.log('Success');
  }

}
