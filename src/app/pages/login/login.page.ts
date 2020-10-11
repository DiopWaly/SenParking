import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthentificationService } from './../../services/authentification.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/services/test.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  signInForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;
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
    private ngZone: NgZone,
    private authService: TestService,
    private AlertController: AlertController,
    private auth : AuthentificationService

  ) {
      this.signInForm = new FormGroup({
        'email': new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
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
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  onLogin(){
    console.log();
    let res = this.auth.login(this.signInForm.value['email'], this.signInForm.value['password']);
    if(res == true){
          this.router.navigate(['detail-reservation'])
    }else{
      this.presentAlert();
      this.submitError = "Exist pas de compte pour cette identifiant voulez-vous inscrire ???";
    }
  }
}
