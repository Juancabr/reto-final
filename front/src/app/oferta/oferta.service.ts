import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Oferta } from './oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  serverURL: string = "http://172.23.137.142:3000/ofertas"

  constructor(private http: HttpClient) { }

  getOfertas(): Observable<Oferta[]> {
    return this.http.get<Oferta[]>(this.serverURL);
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
