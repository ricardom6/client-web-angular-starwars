import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Igeneric } from '../generic/igeneric';
import { Planets } from './planets';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService implements Igeneric<Planets, number> {
  endpoint = environment.URL_API+"Planets";
  constructor(private http: HttpClient) { }
  post(data: Planets) {
    console.log("Entrou dentro do serviço PlanetsService - método POST");
    this.http.post(this.endpoint, data);
    }
    put(id?: number, data?:  Planets) {
      console.log("Entrou dentro do serviço PlanetsService - método Put");
      this.http.put(this.endpoint+"/"+id,data);  
    }
    patch(id?: number, data?:  Planets) {
      console.log("Entrou dentro do serviço PlanetsService - método Patch");
      this.http.patch(this.endpoint+"/"+id,data);
    }
    get(): Observable<Planets[]> {
      console.log("Entrou dentro do serviço PlanetsService - método Get");
      return this.http.get<Planets[]>(this.endpoint)  
      }
    getById(id?: number): Observable<Planets> {
      console.log("Entrou dentro do serviço PlanetsService - método GetById");
      return this.http.get<Planets>(this.endpoint+"/"+id);  
      }
    delete(id?: number) {
      console.log("Entrou dentro do serviço PlanetsService - método DELETE");
      this.http.delete(this.endpoint+"/"+id);
      }

}
