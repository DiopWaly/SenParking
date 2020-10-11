import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {

  public place;
  public slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 3,
    // autoplay:true,
    // loop: true
   };
  constructor() { }

  ngOnInit() {
  }

  recuperMobileType(){
    console.log(this.place);
    
  }
}
