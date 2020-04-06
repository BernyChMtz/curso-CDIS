import { MessagesService } from './messages.service';
import { Automovil } from './models';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos';
  private autosActionsURL = 'https://catalogo-autos.herokuapp.com/api/autos';

  constructor(private http: HttpClient, private messagesServices: MessagesService) { }

  getAutos(): Observable<any> {
    return this.http.get<any>(this.autosURL).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=> this.messagesServices.add('Autos obtenidos'))
    )
  }

  updateAutos(auto: Automovil): Observable<any> {
    return this.http.put<any>(`${this.autosActionsURL}/${auto._id}`, auto).pipe(
      catchError(this.handleError<any>('updateAutos')),
      tap(()=> this.messagesServices.add('Auto actualizado'))
    )
  }

  agregarAutos(auto: Automovil): Observable<any> {
    return this.http.post<any>(this.autosActionsURL, auto).pipe(
      catchError(this.handleError<any>('agregarAuto')),
      tap((result) => {
        console.log(result);
        this.messagesServices.add(`Auto agregado con id: ${result.data._id}`)
      })
    )
  }

  deleteAuto(auto: Automovil): Observable<any> {
    return this.http.delete<any>(`${this.autosActionsURL}/${auto._id}`).pipe(
      catchError(this.handleError<any>('deleteAutos')),
      tap(()=> this.messagesServices.add('Auto eliminado'))
    )
  }

  private handleError<T>(operation = 'operacion', result?: T) {
    return(error: any): Observable<T> => {
      this.messagesServices.add(`${operation} fallo: ${error.message}`);
      return of(result as T);
    }
  }
}
