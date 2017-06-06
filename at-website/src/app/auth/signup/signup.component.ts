import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService, END_POINT } from '../../shared/services/api.service';

function isValidMailFormat(control: FormControl) {
  let email_regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (control.value.match(email_regex)) {
    return null
  }
  else {
    return { 'email': true };
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  firstName = new FormControl('', [
    Validators.required,
    Validators.maxLength(10)
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.maxLength(20)
  ]);
  email = new FormControl('', [
    Validators.required,
    isValidMailFormat
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  birthday = new FormControl('', [
    Validators.required
  ]);
  sex = new FormControl('', [
    Validators.required
  ]);
  private newUserForm: FormGroup;
  
  constructor(
    private _api: ApiService,
    private _buider: FormBuilder,
    private _router: Router) { }

  ngOnInit() {
    this.newUserForm = this._buider.group({
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      password: this.password,
      birthday: this.birthday,
      sex: this.sex
    });
  }

  submit() {
    this._api.post([END_POINT.users], this.newUserForm.value)
      .subscribe((data: any) => {
        this._router.navigate(['/login']);
      })
  }
}
