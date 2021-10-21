import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirstCrudService {

  constructor(private http: HttpClient) { }
  
  getAllUser(): Observable<any[]>{
    const endpoint = 'http://localhost:4000/crud/selectAllUser';
    return this.http.get<any[]>(endpoint);
  }
  
  deletUser(param: any): Observable<any>{
    const endpoint = `http://localhost:4000/crud/deletUser/?id={param}`;
    console.log(param)
    return this.http.get<any>(endpoint,param)

  }
}
