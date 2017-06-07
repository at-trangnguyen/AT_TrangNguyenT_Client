import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router  }  from  '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ApiService, END_POINT, IMAGE_ROOT } from '../../shared/services/api.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user: any;
  imageSrc: string;
  error: string;
  currentUser: any;
  editUserForm: FormGroup;
  avatar = new FormControl('');
  firstName = new FormControl('', [
    Validators.required,
    Validators.maxLength(10)
  ]);
  lastName = new FormControl('', [
    Validators.required,
    Validators.maxLength(20)
  ]);
  birthday = new FormControl('',
    Validators.required
  );
  gender = new FormControl('',
    Validators.required
  );
  old_password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);
  new_password = new FormControl('',
    Validators.minLength(8)
  );
  file: File;
  constructor(
    private _builder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _api: ApiService 
  ) {
    this.user = {};
    this.error = '';
    this.imageSrc = '';
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.editUserForm = this._builder.group({
      avatar: this.avatar,
      first_name: this.firstName,
      last_name: this.lastName,
      birthday: this.birthday,
      gender: this.gender,
      old_password: this.old_password,
      new_password: this.new_password
    });
    this._api.get([END_POINT.users, this.currentUser.id.toString()])
    .subscribe((data: any) => {
      this.user = data.user;
      this.firstName.setValue(data.user.first_name);
      this.lastName.setValue(data.user.last_name);
      this.birthday.setValue(data.user.birthday);
      this.imageSrc = IMAGE_ROOT + data.user.picture;
    });
  }
  updateUser() {
    this._api.put([END_POINT.users, this.currentUser.id.toString()], this.createDataRequest())
      .subscribe((data: any) => {
        this._router.navigate(['/profile/' + this.currentUser.id]);
      }, (error: any) => {
        this.error = "Old password is incorrect !"
      }
    );
  }
  handleInputChange(e) {
    let fileList: FileList = e.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(this.file);
  }

  _handleReaderLoaded(e) {
    var reader = e.target;
    this.imageSrc = reader.result;
  }
  createDataRequest(){
    let formRequest: FormData = new FormData();
    formRequest.append("first_name", this.firstName.value);
    formRequest.append("last_name", this.lastName.value);
    formRequest.append("birthday", this.birthday.value);
    formRequest.append("sex", this.gender.value);
    formRequest.append("old_password", this.old_password.value);
    formRequest.append("new_password", this.new_password.value);
    formRequest.append("avatar", this.file);
    return formRequest;
  }
}
