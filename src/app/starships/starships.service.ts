import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Starships } from './starships';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenericResource } from '../generic/igeneric-resource';
import { IGenericOperations } from '../generic/igeneric-operations';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService implements IGenericOperations<Starships, number>{
  endpoint = environment.URL_API+"Starships";
  constructor(private http: HttpClient) { }
  post(data: Starships) {
    console.log("Entrou dentro do serviço StarshipsService - método POST");
    this.http.post(this.endpoint, data);
    }
    put(id?: number, data?:  Starships) {
      console.log("Entrou dentro do serviço StarshipsService - método Put");
      this.http.put(this.endpoint+"/"+id,data);  
    }
    patch(id?: number, data?:  Starships) {
      console.log("Entrou dentro do serviço StarshipsService - método Patch");
      this.http.patch(this.endpoint+"/"+id,data);
    }
    get(): Observable<IGenericResource<Starships>> {
      console.log("Entrou dentro do serviço FilmeService - método Get");
      return this.http.get<IGenericResource<Starships>>(this.endpoint);  
      }
    getById(id?: number): Observable<Starships> {
      console.log("Entrou dentro do serviço StarshipsService - método GetById");
      return this.http.get<Starships>(this.endpoint+"/"+id);  
      }
    delete(id?: number) {
      console.log("Entrou dentro do serviço StarshipsService - método DELETE");
      this.http.delete(this.endpoint+"/"+id);
      }

}
