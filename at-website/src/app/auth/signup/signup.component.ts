import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  private newUserForm: FormGroup;
  public submitted: boolean;
  users: any[];

  firstName = new FormControl('', [
    Validators.required,
    Validators.maxLength(10)
  ])
  lastName = new FormControl('', [
    Validators.required,
    Validators.maxLength(20)
  ])
  email = new FormControl('', [
    Validators.required
  ])
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ])
  birthday = new FormControl('', [
    Validators.required
  ])
  gender = new FormControl('', [
    Validators.required
  ])
  constructor(private _buider: FormBuilder) { }

  ngOnInit() {
    this.users = [];
    this.newUserForm = this._buider.group({
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      birthday: this.birthday,
      gender: this.gender
    });
  }

  submit() {
    this.submitted = true;
  }


}
