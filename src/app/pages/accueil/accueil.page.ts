import { AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { AuthentificationService } from './../../services/authentification.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { CrudService } from 'src/app/services/crud.service';
import { Reserver } from './../../classes/reserver';
import { Router } from '@angular/router';

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
  constructor(
      private crud : CrudService, 
      private auth: AuthentificationService,
      private router : Router,
      private authser: AuthentificationService,
      private nav: NavController,
      private callNumber: CallNumber,
      private AlertController: AlertController
  ) { }

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
  navigate(url: string){
    this.router.navigate([url]);
    this.nav.pop();
  }
  // call(){
  //       this.callNumber.callNumber("770331545", true)
  //         .then(res => console.log('Launched dialer!', res))
  //           .catch(err => console.log('Error launching dialer', err));

  // }
  async call() {
    if (true) {
      const confirmation = await this.warn();
      if (!confirmation) return;
      else{
        this.callNumber.callNumber("770331545", true)
          .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
      }
    }
  }

  async warn() {
    return new Promise(async (resolve) => {
      const confirm = await this.AlertController.create({
        header: 'confirmation',
        message: 'Etes-vous sur !!!',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              return resolve(false);
            },
          },
          {
            text: 'OK',
            handler: () => {
              return resolve(true);
            },
          },
        ],
      });

      await confirm.present();
    });
  }

}
