import { AlertController, NavController } from '@ionic/angular';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { AngularFireAuth } from '@angular/fire/auth';
import { AppComponent } from './../../app.component';
import { AppPage } from './../../../../e2e/src/app.po';
import { AuthentificationService } from './../../services/authentification.service';
import { CrudService } from './../../services/crud.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  signInForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;
  public user : any;
  private database: SQLiteObject;
  validation_messages = {
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
    public angularFire: AngularFireAuth,
    public router: Router,
    private AlertController: AlertController,
    private auth : AuthentificationService,
    private sqlite: SQLite,
    private navCtrl: NavController,
    private crud: CrudService

  ) {
      this.signInForm = new FormGroup({
        'email': new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^\.+$')
          ])),
        'password': new FormControl('', Validators.compose([
            Validators.minLength(6),
            Validators.required
      ]))
    });
  }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.AlertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Identifiant',
      message: 'Login ou mot de passe incorect !!!',
      buttons: ['OK']
    });

    await alert.present();
  }

  onLogin(){
    const client = {
        email : this.signInForm.value['email'], 
        password : this.signInForm.value['password']
      };
      this.auth.login(client)
      .subscribe(data=>{
        if(data){
          this.navCtrl.pop();
          console.log(this.crud.getVoiture());
          if(this.crud.getVoiture()){
            this.router.navigate(['detail-reservation']);
          }else{
            this.router.navigate(['accueil']);
          }
          data['dateNaissance'] = data['dateNaissance'].split('T')[0]
          this.user = data;
          this.crud.user = data;
          this.auth.auth = true;
          this.auth.saveToken(data);
          console.log(this.user);
        }else{
          this.presentAlert();
          this.submitError = "Exist pas de compte pour cette identifiant voulez-vous inscrire ???";
        }
      },err=>{
        console.log(err);
      });
  }
 
}
