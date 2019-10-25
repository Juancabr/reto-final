import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../oferta';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-all-ofertas',
  templateUrl: './list-all-ofertas.component.html',
  styleUrls: ['./list-all-ofertas.component.css']
})
export class ListAllOfertasComponent implements OnInit {
  errorMessage: string;
  ofertas: Oferta[];

  constructor(private router: Router, private ofertaService: OfertaService) { }

  ngOnInit() {
      this.ofertaService.getOfertas().subscribe(
        ofertas => this.ofertas = ofertas,
        error => this.errorMessage = <any> error);
  }

  onSelect(oferta: Oferta) {
    this.router.navigate(['/ofertas', oferta.id]);
  }

  addOfertas() {
    this.router.navigate(['/ofertas/add']);
  }


}
