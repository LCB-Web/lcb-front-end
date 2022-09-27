import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NieuwsService {

  constructor(private http: HttpClient) { }

  findOne(id:string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/nieuws/detail/' + id)
  }

  findAll(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/nieuws')
  }

  nieuwsOverview(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/nieuws?take=3')
  }




}
