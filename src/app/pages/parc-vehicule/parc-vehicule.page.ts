import { Component, OnInit } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/storage';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { CrudService } from 'src/app/services/crud.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Voiture } from 'src/app/classes/voiture';

@Component({
  selector: 'app-parc-vehicule',
  templateUrl: './parc-vehicule.page.html',
  styleUrls: ['./parc-vehicule.page.scss'],
})
export class ParcVehiculePage implements OnInit {

  public items: any; 
  public place;
  public voitures = [];
  //pour test locale
  private v: any = [];
  public vehicules=[];
  constructor(
        private authentification : AuthentificationService, 
        private router: Router,
        private crud: CrudService,
        private viewer: PhotoViewer,
        private afSG : AngularFireStorage,
        private platform: Platform
  ) { }

  ngOnInit() {
    this.recupeCategorie();
    // this.addvoiture();
    this.getVoitures();
    if(this.crud.cat){
      this.place = this.crud.cat;
      this.selectCategorie();
    }
  }
  selectCategorie(){
      console.log(this.place);
      //this.selectVoitures("voiture/trie/"+this.place);
      this.vehicules=[];
      for(let i=0; i< this.v["length"]; i++){
        if(this.v[i].modele.categorie.id == this.place){
            console.log("waly");
            this.vehicules.push(this.v[i]);
          }
      }
  }
  reservation(voiture:any){
    this.crud.setVoiture(new Voiture(voiture));
    // console.log(voiture);
    // console.log(this.crud.getVoiture());
    let autheticated = this.authentification.loadToken();
    if(autheticated){
      this.router.navigate(['detail-reservation']);
    }else{
      this.router.navigate(['login']);
    }
  }
  recupeCategorie(){
    this.crud.get('categorie/all')
      .subscribe(data=>{
        console.log(data);
        this.items = data;
      },err=>{
        console.log(err);
      });
  }

  getVoitureStorage(voiture:any){
    console.log(voiture.image);
    this.afSG.ref(voiture.image).getDownloadURL()
      .subscribe(data=>{
        console.log(data);
        this.voitures.push(
          {
            id: voiture.id,
            libelle: voiture.description,
            capacite: voiture.capacite,
            air: voiture.air,
            option: voiture.options,
            condition: voiture.conditions,
            price: voiture.tarifjrne,
            modele: voiture.modele,
            matricule: voiture.matricule,
            image: data
          }
        );
      });
  }

  getVoitures(){
    this.selectVoitures("voiture/all");
  }

  selectVoitures(url: string){
    this.crud.get(url)
      .subscribe(data=>{
        console.log(data); 
        this.v = data;
        this.vehicules = this.v;
        for(let i=0; i<data['length']; i++){
          console.log(i);
          this.getVoitureStorage(data[i]);
        }
        
      },err=>{
        console.log(err);
      });
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
}
