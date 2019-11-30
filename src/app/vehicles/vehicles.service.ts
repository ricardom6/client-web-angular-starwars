import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Igeneric } from '../generic/igeneric';
import { Vehicles } from './vehicles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService implements Igeneric<Vehicles, number>{
  endpoint = environment.URL_API+"Vehicles";
  constructor(private http: HttpClient) { }
  post(data: Vehicles) {
    console.log("Entrou dentro do serviço VehiclesService - método POST");
    this.http.post(this.endpoint, data);
    }
    put(id?: number, data?:  Vehicles) {
      console.log("Entrou dentro do serviço VehiclesService - método Put");
      this.http.put(this.endpoint+"/"+id,data);  
    }
    patch(id?: number, data?:  Vehicles) {
      console.log("Entrou dentro do serviço VehiclesService - método Patch");
      this.http.patch(this.endpoint+"/"+id,data);
    }
    get(): Observable<Vehicles[]> {
      console.log("Entrou dentro do serviço VehiclesService - método Get");
      return this.http.get<Vehicles[]>(this.endpoint)  
      }
    getById(id?: number): Observable<Vehicles> {
      console.log("Entrou dentro do serviço VehiclesService - método GetById");
      return this.http.get<Vehicles>(this.endpoint+"/"+id);  
      }
    delete(id?: number) {
      console.log("Entrou dentro do serviço VehiclesService - método DELETE");
      this.http.delete(this.endpoint+"/"+id);
      }

}
