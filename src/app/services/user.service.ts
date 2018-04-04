import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { Type } from '../module/expensetype';

@Injectable()
export class UserService {
  private _getURL = 'http://localhost:3000';

  constructor(private http: Http) { }
  getExpensetype(): Observable<Type[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
        .get(this._getURL + '/getExpensetype', options)
          .map(res => {
              return <Type[]>res.json(); } );
  }
  createExpensetype(expensetype: Type): Observable<Type[]> {
    console.log(expensetype);
    return this.http.post(this._getURL + '/expenseType', expensetype)
    .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'server error'));
 }
 deleteExpensetype(expensetype: any) {
  return this.http.delete( this._getURL + '/expensetypeDelete/' + expensetype );
  }

}
