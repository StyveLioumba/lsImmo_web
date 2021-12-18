import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers:new HttpHeaders(
    {
      'Content-Type':'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string="http://localhost:3000";

  constructor(public http:HttpClient) { }

  loginUser(data:any):Observable<any> {
    return this.http.post(this.apiURL+'users/login', data, httpOptions);
  }

  login(data: any):Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiURL+'users/login', data)
        .subscribe( {
          next: (token:any) => {
            localStorage.setItem('auth',token.token)
            resolve(token)
          },
          error: () => reject,
        })
    })
  }
}
