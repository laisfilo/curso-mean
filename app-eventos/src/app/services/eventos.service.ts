import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Evento } from '../models/evento';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  url = 'http://localhost:4200/api/eventos';

  // url = 'https://test.spaceflightnewsapi.net/api/v2/articles';

  constructor(private httpClient: HttpClient) { 
    // this.httpClient.get<Evento[]>(this.url)
  }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

      // Obtem todos os carros
  getEventos(): Observable<Evento[]> {
    return this.httpClient.get<Evento[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  create(model: Evento): Observable<Evento> {
    return this.httpClient.post<Evento>(this.url, model);

  }


    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Erro ocorreu no lado do client
        errorMessage = error.error.message;
      } else {
        // Erro ocorreu no lado do servidor
        errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    };

}
