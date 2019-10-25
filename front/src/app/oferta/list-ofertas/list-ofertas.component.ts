import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../oferta';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-ofertas',
  templateUrl: './list-ofertas.component.html',
  styleUrls: ['./list-ofertas.component.css']
})
export class ListOfertasComponent implements OnInit {
  errorMessage: string;
  ofertas: Oferta[];

  constructor(private router: Router, private ofertaService: OfertaService) { 
    this.ofertaService.getOfertasVigente().subscribe(
      ofertas => this.ofertas = ofertas,
      error => this.errorMessage = <any> error);
  }

  ngOnInit() {
  }

}
