import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DemoService {


  url:string="https://reqres.in/api/user?page=1";
  
  constructor(private http:HttpClient) { }



getData(){
  return this.http.get(this.url);
}

getUsers(): Observable<any> {
  const authtoken = localStorage.getItem('token');
  return this.http.get('https://dummyjson.com/todos', {headers:new HttpHeaders({'content-type':'application/json'})});
 }



 
}
          