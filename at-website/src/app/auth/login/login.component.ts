import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  error: string;
  email = new FormControl('', [
    Validators.required		
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  private loginForm: FormGroup;
  
  constructor(
    private _builder: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) { 
    this.error = '';
  }

  ngOnInit() {
    this.loginForm = this._builder.group({
      email: this.email,
      password: this.password
    });
    this._authService.logout();
  }
  login() {
    this._authService.login(this.loginForm.controls.email.value,this.loginForm.controls.password.value)
    .subscribe((result: any) => {
      if (result === true) {
        this._router.navigate(['/home']);
      } 
    }, (error: any) => {
        this.error = 'Email or password is incorrect !';
    });
  }
}
