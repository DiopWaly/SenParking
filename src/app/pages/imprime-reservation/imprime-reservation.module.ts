import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImprimeReservationPageRoutingModule } from './imprime-reservation-routing.module';

import { ImprimeReservationPage } from './imprime-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImprimeReservationPageRoutingModule
  ],
  declarations: [ImprimeReservationPage]
})
export class ImprimeReservationPageModule {}
