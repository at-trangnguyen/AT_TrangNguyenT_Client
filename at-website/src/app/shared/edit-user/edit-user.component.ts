import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  private editUserForm: FormGroup;
  public submitted: boolean;
  users: any[];

  firstName = new FormControl('', [
    Validators.required,
    Validators.maxLength(10)
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.maxLength(20)
  ]);
  birthday = new FormControl('', [
    Validators.required
  ]);
  gender = new FormControl('', [
    Validators.required
  ]);

  constructor(private _builder: FormBuilder) { }

  ngOnInit() {
    this.users = [];
    this.editUserForm = this._builder.group({
      first_name: this.firstName,
      last_name: this.lastName,
      birthday: this.birthday,
      gender: this.gender
    });
  }

  updateUser() {
    this.submitted = true;
  }
}
