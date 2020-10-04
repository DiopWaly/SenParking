import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  public marques;
  constructor(private crud : CrudService) { }

  ngOnInit() {
    this.listMarque();
  }
  listMarque(){
    this.crud.get("marque/all")
      .subscribe(data=>{
        this.marques = data;
        console.log(this.marques);
      },err=>{
        console.log(err);
      });
  }
  detail(marque){
    console.log(marque);
  } 

}
