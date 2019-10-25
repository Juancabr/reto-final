import { Component, OnInit } from '@angular/core';
import { Oferta } from '../oferta';
import { OfertaService } from '../oferta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-ofertas',
  templateUrl: './insert-ofertas.component.html',
  styleUrls: ['./insert-ofertas.component.css']
})
export class InsertOfertasComponent implements OnInit {

  oferta: Oferta;
  errorMessage: string;

  constructor(private ofertaService: OfertaService, private router: Router) {
    this.oferta = <Oferta>{};
  }

  ngOnInit() {
  }

  onSubmit(oferta: Oferta) {
    oferta.id = null;
    this.ofertaService.addOferta(oferta).subscribe(
      new_oferta => {
        this.oferta = new_oferta;
        this.gotoOfertasList();
      },
      error => this.errorMessage = <any>error
    );
  }

  gotoOfertasList() {
    this.router.navigate(['/ofertas']);
  }

}
