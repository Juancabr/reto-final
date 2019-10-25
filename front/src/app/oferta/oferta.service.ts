import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Oferta } from './oferta';
import { HandleError, HttpErrorHandler } from 'app/error.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  serverURL: string = "http://172.23.137.142:3000/ofertas";

  private handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('OwnerService');
  }

  getOfertas(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(this.serverURL)
    
  }

  getOfertasVigente(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(this.serverURL)
  }
  
  getOfertaById(oferta_id: string): Observable<Oferta> {
    return this.http.get<Oferta>(this.serverURL + '/' + oferta_id);
  }

  addOferta(Oferta: Oferta): Observable<Oferta> {
    return this.http.post<Oferta>(this.serverURL, Oferta);
  }

  updateOferta(oferta_id: string, oferta: Oferta): Observable<{}> {
    return this.http.put<Oferta>(this.serverURL + '/' + oferta_id, oferta);
  }

  deleteOferta(oferta_id: string): Observable<{}> {
    return this.http.delete<Oferta>(this.serverURL + '/' + oferta_id);
  }
}
