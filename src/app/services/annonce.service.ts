import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";

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
export class AnnonceService {

  apiURL: string="http://localhost:3000";

  constructor(public http:HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  listAnnonces():Observable<any[]>{
    return this.http.get<any[]>(this.apiURL+'/advertisements');
  }

  detailAnnonce(id:number) : Observable<any>{
    const url = `${this.apiURL+'/advertisements'}/${id}`;
    return this.http.get<any>(url);
  }
}
