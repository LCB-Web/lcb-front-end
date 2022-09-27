import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemaService {

  constructor(private http: HttpClient) { }

  findOne(id:string):Observable<any>{
    return this.http.get<any>('http://localhost:3000/api/themas/'+id)
  }

  themaOverview(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/themas');
  }




}




