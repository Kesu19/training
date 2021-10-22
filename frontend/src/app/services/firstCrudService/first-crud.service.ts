import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'mon-entete-personnalise':'maValeur'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FirstCrudService {

  constructor(private http: HttpClient) { }
  
  getAllUser(): Observable<any[]>{
    const endpoint = 'http://localhost:4000/crud/selectAllUser';
    return this.http.get<any[]>(endpoint);
  }
  
  deletUser(id: any): Observable<any>{
    let params = new HttpParams().set('id', id);
    const endpoint = `http://localhost:4000/crud/deletUser`;
    console.log(params)
    return this.http.get<any>(endpoint,{ params: params })

  }
  updateUser(id:any):Observable<any>{
    let params = new HttpParams().set('id',id)
    const endpoint = `http://localhost:4000/crud/deletUser`;
    console.log(params)
    return this.http.get<any>(endpoint,{params:params})
  }
}
