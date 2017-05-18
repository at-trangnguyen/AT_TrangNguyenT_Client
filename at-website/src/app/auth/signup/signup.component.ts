import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  
  submitted: boolean;

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
  sex = new FormControl('', [
    Validators.required
  ])
  private newUserForm: FormGroup;
  
  constructor(
    private _buider: FormBuilder,
    private _router: Router,
    private _userService: UserService) { }

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
    this._userService.create(this.newUserForm.value)
    .subscribe((data: any) => {
      console.log(data);
      this._router.navigate(['/login']);
    });
    this.submitted = true;
  }


}
