import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../services/crud.service';
import { Voiture } from 'src/app/classes/voiture';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.page.html',
  styleUrls: ['./detail-reservation.page.scss'],
})
export class DetailReservationPage implements OnInit {

  public voiture: Voiture;
  constructor(private crud: CrudService) { }
  ngOnInit() {
    this.voiture = this.crud.getVoiture()
    console.log(this.voiture);
    
  }

}
