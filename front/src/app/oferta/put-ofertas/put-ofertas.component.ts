import { Component, OnInit } from '@angular/core';
import { Oferta } from '../oferta';
import { OfertaService } from '../oferta.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-put-ofertas',
  templateUrl: './put-ofertas.component.html',
  styleUrls: ['./put-ofertas.component.css']
})
export class PutOfertasComponent implements OnInit {

  id: number;
  oferta: Oferta;
  errorMessage: string;

  constructor(private ofertaService: OfertaService, private router: Router, private route: ActivatedRoute) {
    this.oferta = <Oferta>{};
  }

  ngOnInit() {
    const ownerId = this.route.snapshot.params['id'];
    this.ofertaService.getOfertaById(ownerId).subscribe(
      oferta => this.oferta = oferta,
      error => this.errorMessage = <any>error);
  }

  onSubmit(oferta: Oferta) {
    oferta.id = 0;
    console.log(oferta);

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
