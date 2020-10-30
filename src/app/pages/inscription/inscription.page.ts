import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AngularFireAuth } from '@angular/fire/auth';
import { Client } from 'src/app/classes/client';
import { CrudService } from 'src/app/services/crud.service';
import { NavController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  clientForm: FormGroup;
  submitError: string;
  authRedirectResult: Subscription;

  validation_messages = {
    'prenom': [
      { type: 'required', message: 'Prenom est obligatoire.' },
      { type: 'pattern', message: 'Entrer un prenom valide svp' }
    ],
    'nom': [
      { type: 'required', message: 'Nom est obligatoire.' },
      { type: 'pattern', message: 'Entrer un nom valide svp' }
    ],
    'datenaissance': [
      { type: 'required', message: 'Obligatoire' }
    ],
    'lieunaissance': [
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
    public angularFire: AngularFireAuth,
    public router: Router,
    private back: NavController,
    private crud: CrudService
  ) {
   this.clientForm = new FormGroup({
      'prenom': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9 ]+$')
      ])),
      'nom': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]+$')
      ])),
      'civilite': new FormControl('', Validators.compose([
        Validators.required,
      ])),
      'datenaissance': new FormControl('', Validators.compose([
        Validators.required,
      ])),
      'lieunaissance': new FormControl('', Validators.compose([
        Validators.required,
      ])),
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'tel': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^([+]221[-. ])?(7[0678]{1})([-. ])?[0-9]{3}([-. ]?[0-9]{2}){2}$')
      ])),
      'numpermis': new FormControl('', Validators.compose([
        Validators.pattern('^[0-9]{10}$')
      ])),
      'username': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+$')
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ]))
    });
  }

  ngOnInit() {
  }

  inscrir(){
    let client = new Client(this.clientForm);
    console.log(client);
    this.crud.add("client/add",client)
      .subscribe(data=>{
        console.log(data);
        this.router.navigate(['login']);
      },err=>{
        console.log(err);
        
      });
  }
  pop(){
    this.back.back();
  }

}
