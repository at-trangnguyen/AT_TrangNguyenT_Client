import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  private editUserForm: FormGroup;
  public submitted: boolean;
  users: any[];
  currentUser: any;

  avatar = new FormControl('');
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

  constructor(
    private _builder: FormBuilder,
    private _userService: UserService) { 
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.users = [];
    this.editUserForm = this._builder.group({
      avatar: this.avatar,
      first_name: this.firstName,
      last_name: this.lastName,
      birthday: this.birthday,
      gender: this.gender
    });
  }

  updateUser() {
    this._userService.update(this.editUserForm.value)
      .subscribe((data: any) => {
        console.log('Success');
      })
    this.submitted = true;
  }

}
