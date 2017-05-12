import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;
  public submitted: boolean;

  email = new FormControl('', [
    Validators.required		
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ])
  constructor(private _builder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this._builder.group({
      email: this.email,
      password: this.password
    });
  }

}
