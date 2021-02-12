import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ContactPage } from './contact.page';
import { ContactPageRoutingModule } from './contact-routing.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ContactPageRoutingModule,
  ],
  declarations: [ContactPage]
})
export class ContactPageModule {}
