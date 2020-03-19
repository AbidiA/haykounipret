import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  constructor(private _http:HttpClient) { }



  getAllUser(){
    return this._http.get('https://www.back.hayko-crm.dev/User/getAllnotaffected');
  }

  addEquipe(nom:string,users:any){
    return this._http.post("https://www.back.hayko-crm.dev/Equipe/Post",{
       "equipe":nom,
      	"users" : users
    }).subscribe();
  }



  getAllEquipe(){
    return this._http.get("https://www.back.hayko-crm.dev/User/getAllEquipe");
  }


  desAffectUser(id:number){
    return this._http.post("https://www.back.hayko-crm.dev/User/Equipe/desAffect/"+id,{}).subscribe();
  }

  getUsersByEquipe(id:number){
    return this._http.get('https://www.back.hayko-crm.dev/User/getEquipe/'+id);
  }

  editEquipe(id:number,nom:string,users:any){
    return this._http.post("https://www.back.hayko-crm.dev/User/Equipe/Affect/"+id,{
      "equipe":nom,
      "users" : users
    }).subscribe();
  }
}
