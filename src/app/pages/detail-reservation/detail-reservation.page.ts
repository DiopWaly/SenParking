import { AlertController, NavController, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Client } from './../../classes/client';
import { CrudService } from './../../services/crud.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Reserver } from './../../classes/reserver';
import { Router } from '@angular/router';
import { Voiture } from 'src/app/classes/voiture';
import { sha1 } from '@angular/compiler/src/i18n/digest';

@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.page.html',
  styleUrls: ['./detail-reservation.page.scss'],
})
export class DetailReservationPage implements OnInit {

  public voiture: Voiture;
  public clientForm: FormGroup;
  public submitError: string;
  public drive : boolean = false;
  public user: any;
  validation_messages = {
    'datereservation': [
      { type: 'required', message: 'Prenom est obligatoire.' },
      { type: 'pattern', message: 'Entrer un prenom valide svp' }
    ],
    'dateretour': [
      { type: 'required', message: 'Nom est obligatoire.' },
      { type: 'pattern', message: 'Entrer un nom valide svp' }
    ],
    'withdriver': [
      { type: 'required', message: 'Obligatoire' }
    ],
    'lieudispo': [
      { type: 'required', message: 'Champs requis.' },
      { type: 'pattern', message: 'En valide svp' }
    ],
    'tel': [
      { type: 'required', message: 'Telephone is required.' },
      { type: 'pattern', message: 'Enrer un numero tel valide !!!' }
    ],
    'numpermis': [
      { type: 'pattern', message: 'Entrer un numero de permis valide svp' }
    ],
    'username': [
      { type: 'pattern', message: 'Entrer un numero de permis valide svp' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' }
    ]
  };  

  constructor(
      private crud: CrudService,
      public router: Router,
      private back: NavController,
      private platform: Platform,
      private AlertController: AlertController,
      private viewer: PhotoViewer) { 
    this.clientForm = new FormGroup({
      'datereservation': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'dateretour': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'withdriver': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'lieudispo': new FormControl('', Validators.compose([
        Validators.required
      ])),
      'client': new FormControl('', Validators.compose([])),
      'chauffeur': new FormControl('', Validators.compose([])),
      'voiture': new FormControl('', Validators.compose([])),
      'tarif': new FormControl('', Validators.compose([])),
      'numerpermiscond': new FormControl('', Validators.compose([])),
      'datenaisconduteur': new FormControl('', Validators.compose([])),
      'datepermis': new FormControl('', Validators.compose([]))

    });
  }
  ngOnInit() {
    this.voiture = this.crud.getVoiture();
    console.log(this.voiture);
    this.infClient();
    
  }
  inscrir(){
    let reserve = new Reserver(this.clientForm);
    let dd = Date.parse(reserve.dateReservation.toString());
    let dr = Date.parse(reserve.dateRetour.toString());
    reserve.cli = this.user.id;
    reserve.v = this.voiture.id;
    reserve.c = 2;
    
    let tarif = ((dr-dd)/(3600*1000*24))*this.voiture.tarifjrne;
    if(reserve.withdriver == true){
        tarif += ((dr-dd)/(3600*1000*24))*100;
    }
    reserve.tarif = tarif;
    console.log(tarif);
    console.log(reserve);
    
    
    this.crud.setVoiture(this.voiture);
    this.addreservation(reserve); 
  }

  pop(){
    this.back.back();
  }
  viewImage(voiture: any){
    console.log(voiture['image']);
    
    this.platform.ready().then( ()=>{
      let options = {
        share: true
      };
      this.viewer.show(voiture['image'],voiture['libelle'], options);
      
    });
  }
  withdriver(){
    console.log(this.drive);
    
  }
  infClient(){
    this.user ={
      id: localStorage.getItem("id"),
      prenom: localStorage.getItem("prenom"),
      nom: localStorage.getItem("nom"),
      civilite: localStorage.getItem("civilite"),
      email: localStorage.getItem("email"),
      tel: localStorage.getItem("tel"),
      datenaissance:localStorage.getItem("datenaissance"),
      lieunaissance:localStorage.getItem("lieunaissance"),
      numpermis:localStorage.getItem("numpermis"),
      username:localStorage.getItem("username")
    };
  }
  
  async addreservation(reserver : Reserver) {
    if (true) {
      const confirmation = await this.warn();
      if (!confirmation) return;
      else{
        this.crud.add("reservation/add",reserver)
        .subscribe(data=>{
            this.crud.setReserver(reserver);
            console.log("reservation reserver !!!");
            this.router.navigate(['imprime-reservation']);
            },err=>{
              console.log(err);
            });
      }
    }
  }

  async warn() {
    return new Promise(async (resolve) => {
      const confirm = await this.AlertController.create({
        header: 'confirm',
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

