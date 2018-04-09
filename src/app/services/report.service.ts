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
import { Report } from '../module/report';

@Injectable()
export class ReportService {
    private _getURL = 'http://localhost:3000/report';

    constructor(private http: Http) { }
getExpensetype(): Observable<Detail[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
        .get(this._getURL + '/getExpetype', options)
          .map(res => {
              return <Detail[]>res.json(); } );
}
createReport(report: Report): Observable<Report[]> {
    console.log(report);
    return this.http.post(this._getURL + '/reportDetail', report)
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw(error.json().error || 'server error'));
}
getReportDetail(): Observable<Report[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
        return this.http.get(this._getURL + '/getReportDetail', options)
            .map(res => {
            return <Report[]>res.json(); } );
      }
deleteReportDetail(id: any) {
    return this.http.delete( this._getURL + '/reportDetailDelete/' + id );
}
getReportId(id: number): Observable<Report[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this
            .http
            .get(this._getURL + '/reportDetailId/' + id, options)
            .map(res => {console.log(res);
              return <Report[]>res.json();
            })
}
updateReportDetail(update: any, id): Observable<Report[]> {
    console.log(update);
    return this.http
    .put(this._getURL + '/updateReportDetail/' + id, update)
    .map((res: Response) => res.json()
    );
}

}
