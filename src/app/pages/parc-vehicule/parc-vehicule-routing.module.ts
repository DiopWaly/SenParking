import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParcVehiculePage } from './parc-vehicule.page';

const routes: Routes = [
  {
    path: '',
    component: ParcVehiculePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParcVehiculePageRoutingModule {}
