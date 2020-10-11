import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private auth : boolean;
  public token : any;
  conObj: any;
  todos: any;
  constructor(private storage: Storage, private sqlite: SQLite) { }

  public login(username: string, password: string){
    if(username === 'admin@gmail.com' && password == '123456'){
      this.auth = true;
      this.saveToken();
    }
    return this.auth;
  }

  private saveToken(){
    this.token = "qwerty"; 
    localStorage.setItem("myToken", this.token);
    // this.storage.set("myToken", this.token);
  }
  public loadToken(){
    this.token =localStorage.getItem("myToken");
    if(this.token == "qwerty"){
      this.auth = true;
    }else{
      this.auth = false;
    }
    return this.auth;
  }

  public logout(){
    localStorage.removeItem("myToken");
    this.auth = false;
  }
  // private set(settingName,value){
  //   return this.storage.set(`setting:${ settingName }`,value);
  // }
  // private async get(settingName){
  //   return await this.storage.get(`setting:${ settingName }`);
  // }
  // private async remove(settingName){
  //   return await this.storage.remove(`setting:${ settingName }`);
  // }
  // private clear() {
  //   this.storage.clear().then(() => {
  //     console.log('all keys cleared');
  //   });
  // }
 //creation de la base de donnees
  init() {
    this.sqlite.create({
      name: "todoApp",
      location: 'default'
    }).then((res) => {

      this.conObj = res;

      this.conObj.executeSql("CREATE TABLE IF NOT EXISTS todo (id integer primary key,createdAt VARCHAR(255), title VARCHAR(255), isDone BOOLEAN)", []).then(() => {
        console.log("Table Created");
      }).catch((err) => {
        console.log(err);
        console.log("Table Creation Error" + err);
      })
    }).catch(err => {
      console.log(err);
    });

  }
//insertion de donnees
  insert(task) {
    let createdAt = Date.now();
    this.conObj.executeSql("INSERT INTO todo (createdAt, title, isDone) VALUES (?,?,?)", [createdAt, task, 0]).then(() => {
      console.log("Inserted")
      this.readAllData();
    }).catch((err) => {
      console.log(err);
      console.log("Insert Error" + err);
    })
  }

  readAllData() {
    this.conObj.executeSql("SELECT * FROM todo", []).then(res => {
      console.log(res);

      let tmp = [];
      for (let i = 0; i < res.rows.length; i++) {
        tmp.push({ id: res.rows.item(i).id, createdAt: res.rows.item(i).createdAt, title: res.rows.item(i).title, isDone: res.rows.item(i).isDone })
      }
      this.todos = tmp;
      console.log(this.todos);

    }).catch(() => {
      console.log("READ ERROR");
    })
  }

}
