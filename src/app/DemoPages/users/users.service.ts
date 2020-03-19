import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }




  getAllusers(){
    return this._http.get('https://www.back.hayko-crm.dev/User/getAll');
  }


  editUser(id:number,username : string , password:string , role_id : number){

    return this._http.post('https://www.back.hayko-crm.dev/User/Updatebyadmin/'+id,{
        
        "username" :  username,
        "password" : password,
        "role_id" : role_id

    }).subscribe();
  }

  editAutorisation(id:number , afficher:string, modifier:string,communiquer:string){
    return this._http.post("https://www.back.hayko-crm.dev/User/Update/Autorisations/"+id,{

      "affichage": afficher,
      "communication": modifier,
      "modification": communiquer
    }).subscribe();
  }

  getUserByUsername(username:string){
    return this._http.get('https://www.back.hayko-crm.dev/User/getByYousername/'+username);
  }
}
