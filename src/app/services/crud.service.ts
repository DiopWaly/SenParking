import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserver } from './../classes/reserver';
import { Voiture } from './../classes/voiture';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  // public url:string = "http://localhost:8010/";
  public url:string = "https://demowalyapi.herokuapp.com/";
  private voiture: Voiture;
  private reserver: Reserver;
  public cat: number;
  public user: any;
  constructor(private httpclient : HttpClient) {}
  
  get(route:string){
    return this.httpclient.get(this.url+""+route);
  }

  delete(route:String){
    return this.httpclient.delete(this.url+""+route);
  }
  
  update(route:String, marque : any){
    return this.httpclient.put(this.url+""+route,marque);
  }
  add(route:String, marque : any){
    return this.httpclient.post(this.url+""+route,marque);
  }
  public getVoiture(): Voiture{
    return this.voiture;
  }
  public async setVoiture(voiture: Voiture){
    this.voiture = voiture;
  }
  public getReserver(): Reserver{
    return this.reserver;
  }
  public async setReserver(reserver: Reserver){
    this.reserver = reserver;
  }
}
