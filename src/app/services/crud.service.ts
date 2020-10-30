import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Voiture } from './../classes/voiture';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private url:string = "https://localhost:8000/";
  private voiture: Voiture;
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
}
