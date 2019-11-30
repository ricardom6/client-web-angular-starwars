import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { People } from './people';
import { Igeneric } from '../generic/igeneric';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeopleService implements Igeneric<People, number>{
  endpoint = environment.URL_API+"films";
constructor(private http: HttpClient) { }
post(data: People) {
  console.log("Entrou dentro do serviço PeopleService - método POST");
  this.http.post(this.endpoint, data);
  }
  put(id?: number, data?:  People) {
    console.log("Entrou dentro do serviço PeopleService - método Put");
    this.http.put(this.endpoint+"/"+id,data);  
  }
  patch(id?: number, data?:  People) {
    console.log("Entrou dentro do serviço PeopleService - método Patch");
    this.http.patch(this.endpoint+"/"+id,data);
  }
  get(): Observable<People[]> {
    console.log("Entrou dentro do serviço PeopleService - método Get");
    return this.http.get<People[]>(this.endpoint)  
    }
  getById(id?: number): Observable<People> {
    console.log("Entrou dentro do serviço PeopleService - método GetById");
    return this.http.get<People>(this.endpoint+"/"+id);  
    }
  delete(id?: number) {
    console.log("Entrou dentro do serviço PeopleService - método DELETE");
    this.http.delete(this.endpoint+"/"+id);
    }

}
