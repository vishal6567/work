import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Pass } from '../module/pass';
import 'rxjs/add/operator/map';
import 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ChangePassService {
    private _getURL = 'http://localhost:3000/chanpass';
    constructor(private http: Http) { }
    getPass(): Observable <Pass[]> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http
            .get(this._getURL + '/pass', options)
              .map(res => {
                  return <Pass[]>res.json();
              });
      }
      createPass(newPass: Pass): Observable <Pass[]> {
        console.log(newPass);
          return this.http.post(this._getURL + '/cha_pass', newPass )
          .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json().error || 'server error'));

        }
}