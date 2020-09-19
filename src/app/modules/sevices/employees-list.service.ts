
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from '../../../environments/environment.prod';

@Injectable({
providedIn: 'root'
})
export class EmployedService  {

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    constructor(private http:HttpClient){
    }

    public getEmployees(): Observable <any> {
      const url = `${environment.url}/employees/alfredo`;
      console.log("getEmployees : " +url )
      return this.http.get(url);
    }

    public setEmployees(data:any): Observable<any>  {
      const url = `${environment.url}/employees/alfredo`;
      return this.http.post(url, data, this.httpOptions);
    } 
  

}