import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailReservationPage } from './detail-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: DetailReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailReservationPageRoutingModule {}
