import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { Type } from '../module/expensetype';
import { inject } from '@angular/core/testing';
import { Detail } from '../module/expense-detail';

@Injectable()
export class ExpenseDetailService {
    private _getURL = 'http://localhost:3000/detail';

    constructor(private http: Http) { }
getExpensetype(): Observable<Type[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
        .get(this._getURL + '/getExpetype', options)
          .map(res => {
              return <Type[]>res.json(); } );
}
createExpenseDetail(expenseDetail: Detail): Observable<Detail[]> {
    console.log(expenseDetail);
    return this.http.post(this._getURL + '/expenseDetail', expenseDetail)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'server error'));
}
getExpenseDetail(): Observable<Detail[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
        return this.http.get(this._getURL + '/getExpenseDetail', options)
            .map(res => {
            return <Detail[]>res.json(); } );
      }
deleteExpenseDetail(id: any) {
    return this.http.delete( this._getURL + '/expenseDetailDelete/' + id );
}
getExpenseId(id: number): Observable<Detail[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this
            .http
            .get(this._getURL + '/expenseDetailId/' + id, options)
            .map(res => {console.log(res);
              return <Detail[]>res.json();
            })
}
updateExpenseDetail(update: any, id): Observable<Detail[]> {
    console.log(update);
    return this.http
    .put(this._getURL + '/updateExpenseDetail/' + id, update)
    .map((res: Response) => res.json()
    );
}

}
