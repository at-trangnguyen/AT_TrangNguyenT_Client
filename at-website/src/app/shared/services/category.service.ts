import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class CategoryService {
	constructor(private _http:Http) {}
	getAllCategory() {
		return this._http.get('data/categories.json')
		.map((res: any) => {
			return res.json();
		});
	}
}