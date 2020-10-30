import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  public place;
  public items: any;
  public slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 3,
    // autoplay:true,
    // loop: true
   };
  constructor(private crud: CrudService,private router: Router) { }

  ngOnInit() {
    this.recupeCategorie();
  }

  recuperMobileType(){
    console.log(this.place);
    this.crud.cat = this.place;
    this.router.navigate(['parc-vehicule']);
  }
  recupeCategorie(){
    this.crud.get('categorie/all')
      .subscribe(data=>{
        this.items = data;
      },err=>{
        console.log(err);
      });
  }
}
