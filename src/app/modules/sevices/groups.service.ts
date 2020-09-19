
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from '../../../environments/environment.prod';

@Injectable({
providedIn: 'root'
})
export class GroupsService  {


    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    constructor(private http:HttpClient){
    }

    public getGroups(): Observable <any> {
      const url = `${environment.url}/groups/alfredo`;
      console.log("getGroups : " +url )
      return this.http.get(url);
    }

    public getByGroup(id:number): Observable <any> {
        const url = `${environment.url}/employees/alfredo/getByGroup?id=${id}`;
        console.log("getByGroup : " +url )
        return this.http.get(url);
    }


}