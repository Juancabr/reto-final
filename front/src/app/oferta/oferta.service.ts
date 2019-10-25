import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

serverURL: string = "http://172.23.137.142:3000/ofertas"

  constructor(private httpClient: HttpClient) { }

  
}
