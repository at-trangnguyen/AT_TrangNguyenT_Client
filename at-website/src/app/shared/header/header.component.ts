import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: any;
  currentUser: any;
  constructor(private _authService: AuthService) { }

  ngOnInit() {
  	this._authService.authStatus$.subscribe(bool => {
      this.isLogin = bool;
  	});
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
