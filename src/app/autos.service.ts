import { Automovil } from './models';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos/';
  private autosActionsURL = 'https://catalogo-autos.herokuapp.com/api/autos/';

  constructor(private http: HttpClient) { }

  getAutos(): Observable<any> {
    return this.http.get(this.autosURL)
  }

  updateAutos(auto: Automovil): Observable<any> {
    return this.http.put(`${this.autosActionsURL}/${auto._id}`, auto);
  }

  agregarAutos(auto: Automovil): Observable<any> {
    return this.http.post(this.autosActionsURL, auto);
  }

  deleteAuto(auto: Automovil): Observable<any> {
    return this.http.delete(`${this.autosActionsURL}/${auto._id}`);
  }
}
