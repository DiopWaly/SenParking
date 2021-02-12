import { CrudService } from 'src/app/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public auth : boolean;
  public token : any;
  constructor(private httpclient : HttpClient,private crud: CrudService) { }

  login(client : any){
    return this.httpclient.patch(this.crud.url+"client/login",client);
  }

  public saveToken(client: any){
    this.token = "qwerty";
    localStorage.setItem("myToken", this.token);
    localStorage.setItem("id", client.id);
    localStorage.setItem("prenom", client.prenom);
    localStorage.setItem("nom", client.nom);
    localStorage.setItem("civilite", client.civilite);
    localStorage.setItem("email", client.email);
    localStorage.setItem("tel", client.tel);
    localStorage.setItem("dateNaissance", client.dateNaissance);
    localStorage.setItem("lieuNaissance", client.lieuNaissance);
    localStorage.setItem("numPermis", client.numPermis);
    localStorage.setItem("userName", client.userName);
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
    localStorage.removeItem("id");
    localStorage.removeItem("prenom");
    localStorage.removeItem("nom");
    localStorage.removeItem("civilite");
    localStorage.removeItem("email");
    localStorage.removeItem("tel");
    localStorage.removeItem("dateNaissance");
    localStorage.removeItem("lieuNaissance");
    localStorage.removeItem("numPermis");
    localStorage.removeItem("userName");
    this.auth = false;
  }
  init() {
  }

}
