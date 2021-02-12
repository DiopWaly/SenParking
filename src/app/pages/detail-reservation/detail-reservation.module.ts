import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DetailReservationPage } from './detail-reservation.page';
import { DetailReservationPageRoutingModule } from './detail-reservation-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DetailReservationPageRoutingModule
  ],
  declarations: [DetailReservationPage]
})
export class DetailReservationPageModule {}
