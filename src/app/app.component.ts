import { Component, OnInit } from '@angular/core';

import { AuthentificationService } from './services/authentification.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Accueil',
      url: '/accueil',
      icon: 'home'
    },
    {
      title: 'Presentation',
      url: '/presentation',
      icon: 'paper-plane'
    },
    {
      title: 'Parc de vehicule',
      url: '/parc-vehicule',
      icon: 'car-sport'
    },
    {
      title: 'Reservation',
      url: '/reservation',
      icon: 'cart'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'at'
    },
    {
      title: 'Logout',
      url: '/login',
      icon: 'log-out'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public test = 123;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    private authser: AuthentificationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }
  navigate(url: string){
    if(url == "/login"){
      this.authser.logout();
      this.router.navigate(['accueil']);
    }else{
      this.router.navigate([url]);
    }
  }
}
