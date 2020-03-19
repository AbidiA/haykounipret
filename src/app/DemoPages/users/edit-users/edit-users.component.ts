import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.sass']
})
export class EditUsersComponent implements OnInit {

  number:any;
  t1:any;
  username:string;
  password:string;
  role_id : number;
  pathPhoto:string;
  nom:string;
  prenom:string;
  id:number;
  afficher:string;
  modifier:string;
  communiquer:string;
user:any;
  constructor(private router:Router , private _service:UsersService) { }


  ngOnInit() {

    this.number= this.router.config.length
    this.t1=this.router.config[this.number - 1]

    this.username = this.t1.username;
    this.role_id = this.t1.role_id;
    this.pathPhoto = this.t1.profil.photoFilename;
    this. prenom = this.t1.profil.prenom;
    this. nom = this.t1.profil.nom;
    this.id = this.t1.id;

    this._service.getUserByUsername(this.username).subscribe(data=>{
      this.user = data;
      this.afficher = this.user.autorisations.affichage;
      this.modifier = this.user.autorisations.modification;
      this.communiquer = this.user.autorisations.communication;

      console.log(this.user)
    })
    console.log(this.t1)
  }



editUser(){
  this._service.editUser(this.id,this.username,this.password,this.role_id);
  
  this.editAuto();

  setTimeout(()=>{   
    this.router.navigate(['/users/listUsers']);
  }, 1000);
}

editAuto(){
  this._service.editAutorisation(this.id,this.afficher,this.modifier,this.communiquer);
}

}