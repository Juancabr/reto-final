import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertaRoutingModule } from './oferta-routing.module';
import { InsertOfertasComponent } from './insert-ofertas/insert-ofertas.component';
import { ListAllOfertasComponent } from './list-all-ofertas/list-all-ofertas.component';
import { OfertaService } from './oferta.service';
import { PutOfertasComponent } from './put-ofertas/put-ofertas.component';
import { ListOfertasComponent } from './list-ofertas/list-ofertas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    OfertaRoutingModule,
    FormsModule,
  ],
  declarations: [
    InsertOfertasComponent,
    PutOfertasComponent,
    ListAllOfertasComponent,
    ListOfertasComponent,
  ],
  providers: [OfertaService]
})
export class OfertaModule { }
