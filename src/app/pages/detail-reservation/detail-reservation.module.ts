import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailReservationPageRoutingModule } from './detail-reservation-routing.module';

import { DetailReservationPage } from './detail-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailReservationPageRoutingModule
  ],
  declarations: [DetailReservationPage]
})
export class DetailReservationPageModule {}
