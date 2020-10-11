import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { LoginPipe } from './pages/login.pipe';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

export const firebaseConfig = {
  apiKey: "AIzaSyAPYuSH6VrADywYPas8JJcwLeY2xIGCNNc",
  authDomain: "frontsenparking.firebaseapp.com",
  databaseURL: "https://frontsenparking.firebaseio.com",
  projectId: "frontsenparking",
  storageBucket: "frontsenparking.appspot.com",
  messagingSenderId: "252784741203",
  appId: "1:252784741203:web:a495a4d683617c77c2afa6",
  measurementId: "G-DY5WYLMCPJ"
};

@NgModule({
  declarations: [AppComponent, LoginPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
