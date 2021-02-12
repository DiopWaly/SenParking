import { Component, OnInit } from '@angular/core';

import { CrudService } from './../../services/crud.service';
import { NavController } from '@ionic/angular';
import { Reserver } from './../../classes/reserver';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-imprime-reservation',
  templateUrl: './imprime-reservation.page.html',
  styleUrls: ['./imprime-reservation.page.scss'],
})
export class ImprimeReservationPage implements OnInit {

  public reserves:any = [];
  constructor(private crud: CrudService,private back: NavController) {}

  ngOnInit() {
    //console.log(this.crud.getVoiture());
    console.log("Waly");
    // this.reserve = this.crud.getReserver();
    this.recupreservation();
    console.log(this.reserves);
  }

   recupreservation(){
    this.crud.get("/reservation/all")
    .subscribe(data=>{
      for(let i=0; i< data["length"]; i++){
        if(data[i]['client']['id'] == localStorage.getItem("id")){
          this.reserves.push(data[i]);
        }
      }
      console.log(data);
      
    },err=>{
      console.log(err);
      
    });
  }
  pop(){
    this.back.back();
  }

}
