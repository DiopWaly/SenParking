import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImprimeReservationPage } from './imprime-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: ImprimeReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImprimeReservationPageRoutingModule {}
