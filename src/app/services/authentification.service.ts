import { CrudService } from 'src/app/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public auth : boolean;
  public token : any;
  constructor(private httpclient : HttpClient) { }

  login(client : any){
    return this.httpclient.patch("https://localhost:8000/client/login",client);
  }

  public saveToken(client: any){
    this.token = "qwerty";
    localStorage.setItem("myToken", this.token);
    localStorage.setItem("prenom", client.prenom);
    localStorage.setItem("nom", client.nom);
    localStorage.setItem("civilite", client.civilite);
  }
  public loadToken(){
    this.token = localStorage.getItem("myToken");
    if(this.token == "qwerty"){
      this.auth = true;
    }else{
      this.auth = false;
    }
    console.log(this.token);
    return this.auth;
  }

  public logout(){
    localStorage.removeItem("myToken");
    localStorage.removeItem("prenom");
    localStorage.removeItem("nom");
    localStorage.removeItem("civilite");
    this.auth = false;
  }
  init() {
  }

}
