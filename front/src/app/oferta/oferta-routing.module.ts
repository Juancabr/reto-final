import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAllOfertasComponent } from './list-all-ofertas/list-all-ofertas.component';
import { InsertOfertasComponent } from './insert-ofertas/insert-ofertas.component';
import { PutOfertasComponent } from './put-ofertas/put-ofertas.component';

const ofertaRoutes: Routes = [
  {path: 'ofertas', component: ListAllOfertasComponent},
  {path: 'ofertas/add', component: InsertOfertasComponent},
  {path: 'ofertas/:id', component: PutOfertasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(ofertaRoutes)],
  exports: [RouterModule]
})
export class OfertaRoutingModule { }
