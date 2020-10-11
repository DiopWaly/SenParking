import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { InscriptionPage } from './inscription.page';
import { InscriptionPageRoutingModule } from './inscription-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InscriptionPageRoutingModule
  ],
  declarations: [InscriptionPage]
})
export class InscriptionPageModule {}
