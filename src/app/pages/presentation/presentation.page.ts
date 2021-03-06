import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { CrudService } from './../../services/crud.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.page.html',
  styleUrls: ['./presentation.page.scss'],
})
export class PresentationPage implements OnInit {

  public voitures = [];
  constructor( 
    private viewer: PhotoViewer,
    private platform: Platform,
    private route: Router
    ) { }

  ngOnInit() {
    
  }
  reserve(){
    this.route.navigate(['parc-vehicule']);
    // let options : ImagePickerOptions = {
    //   maximumImagesCount : 4,
    //   outputType : OutputType.FILE_URL
    // }
    // this.imagePicker.getPictures(options).then((results) => {
    //   for (var i = 0; i < results.length; i++) {
    //       console.log('Image URI: ' + results[i]);
    //   }
    // }, (err) => { });
  }
  viewImage(voiture: any){
    console.log(voiture);
    
    this.platform.ready().then( ()=>{
      let options = {
        share: true
      };
      this.viewer.show(voiture.url,voiture.libelle, options);
    });
  }
}
