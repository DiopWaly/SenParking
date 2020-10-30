import { Component, OnInit } from '@angular/core';

import { AuthentificationService } from './../../services/authentification.service';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  public slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    loop: true
   };
  public marques;
  public user: any
  constructor(private crud : CrudService, private auth: AuthentificationService) { }

  ngOnInit() {
    if(this.crud.user){
      this.user = this.crud.user;
    }else{
      this.user ={
        prenom: localStorage.getItem("prenom"),
        nom: localStorage.getItem("nom"),
        civilite: localStorage.getItem("civilite")
      };
      console.log("waly");
      console.log(this.user);
      
    }
    console.log(this.user);
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
