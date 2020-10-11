import { Component, OnInit } from '@angular/core';

import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parc-vehicule',
  templateUrl: './parc-vehicule.page.html',
  styleUrls: ['./parc-vehicule.page.scss'],
})
export class ParcVehiculePage implements OnInit {

  public items = [
    {name: "brown"},
    {name: "blonde"},
    {name: "black"},
    {name: "red"}
  ];
  public place;
  public voitures = [
    {
      libelle: "Awesome Title",
      capacite: "4 sieges | 4 portes",
      air: "Air conditionné",
      option: "Manuelle",
      condition: "Plein a rendre plein",
      image: "../assets/images/voitures/1.jpg",
      price: 115
    },
    {
      libelle: "Awesome Title",
      capacite: "4 sieges | 4 portes",
      air: "Air conditionné",
      option: "Manuelle",
      condition: "Plein a rendre plein",
      image: "../assets/images/voitures/bmw_s7.jpg",
      price: 120
    },
    {
      libelle: "Awesome Title",
      capacite: "4 sieges | 4 portes",
      air: "Air conditionné",
      option: "Manuelle",
      condition: "Plein a rendre plein",
      image: "../assets/images/voitures/bmw_s8_coupe.jpg",
      price: 200
    }
  ];
  constructor(private authentification : AuthentificationService, private router: Router) { }

  ngOnInit() {
  }
  selectCategorie(){
      console.log(this.place);
  }
  reservation(voiture){
    console.log(voiture);
    let autheticated = this.authentification.loadToken();
    if(autheticated){
      this.router.navigate(['detail-reservation']);
    }else{
      this.router.navigate(['login']);
    }
  }
}
