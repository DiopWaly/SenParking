import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParcVehiculePageRoutingModule } from './parc-vehicule-routing.module';

import { ParcVehiculePage } from './parc-vehicule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParcVehiculePageRoutingModule
  ],
  declarations: [ParcVehiculePage]
})
export class ParcVehiculePageModule {}
