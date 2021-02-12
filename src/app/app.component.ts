import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { AuthentificationService } from './services/authentification.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = "/accueil";
  public appPages = [
    {
      title: 'Accueil',
      url: '/accueil',
      icon: 'home'
    },
    {
      title: 'Presentation',
      url: '/imprime-reservation',
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
      url: '/logout',
      icon: 'log-out'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public test: string;
  public user: any;
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
    this.user ={
      prenom: localStorage.getItem("prenom"),
      nom: localStorage.getItem("nom"),
      civilite: localStorage.getItem("civilite")
    };
    this.test = localStorage.getItem("myToken");
  }
  navigate(url: string){
    // console.log("waly "+btoa(url));
    if(url == "/logout"){
      this.authser.logout();
      this.ngOnInit();
      this.appPages[5] = {
        title: 'Login',
        url: '/login',
        icon: 'log-out'
      }
      this.selectedIndex =  "/accueil";
      this.router.navigate(['accueil']);
    }else{
      this.router.navigate([url]);
      this.selectedIndex =  url;
    }
  }
}
