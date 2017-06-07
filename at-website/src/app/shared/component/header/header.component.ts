import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Router }  from  '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: any;
  currentUser: any;
  searchData: any;
  constructor(
    private _authService: AuthService, 
    private _router: Router
  ) {
    this.searchData = '';
  }

  ngOnInit() {
  	this._authService.authStatus$.subscribe(bool => {
      this.isLogin = bool;
      setTimeout(() => {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      }, 100);
    });
  }

  logout() {
    this._authService.logout();
  }
  search(searchData) {
    this._router.navigate(['search'], { queryParams: { 'condition': searchData } });
  }
}
