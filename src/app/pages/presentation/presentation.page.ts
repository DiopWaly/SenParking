import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
})
export class PresentationPage implements OnInit {

  public voitures = [];
  constructor( 
    private afSG : AngularFireStorage,
    private afDB : AngularFireDatabase
    ) { }

  ngOnInit() {
    this.getVoitureDatabase();
  }
  add(){
    this.afDB.list('voitures/').push(
      // {
      //   libelle : 'bmw_s7',
      //   ref : 'voitures/bmw_s7.jpg'
      // },
      // {
      //   libelle : '1',
      //   ref : 'voitures/1.png'
      // },
      {
        libelle : 'bmw_s8_coupe',
        ref : 'voitures/bmw_s8_coupe.jpg'
      }
    );
  }
  getVoitureStorage(voiture:any){
    this.afSG.ref(voiture.ref).getDownloadURL()
      .subscribe(data=>{
        console.log(data);
        this.voitures.push(
          {
            libelle: voiture.libelle,
            url: data
          }
        );
      });
  }

  getVoitureDatabase(){
    let i =0;
    this.afDB.list('voitures/').snapshotChanges(['child_added'])
      .subscribe(data=>{
        data.forEach(dat =>{
          console.log(dat.payload.exportVal());
          console.log(dat.payload.exportVal().ref);
          this.getVoitureStorage(dat.payload.exportVal());
        });
        
        
      },err=>{
        console.log(err);
        
      });
  }
}
