import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

url:string="https://dummyjson.com/todos";


  constructor(private http:HttpClient) { }

viewData(): Observable <any>{
  return this.http.get(this.url);
}



}
