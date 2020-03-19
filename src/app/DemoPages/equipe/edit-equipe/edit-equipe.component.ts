import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeService } from '../equipe.service';

@Component({
  selector: 'app-edit-equipe',
  templateUrl: './edit-equipe.component.html',
  styleUrls: ['./edit-equipe.component.sass']
})
export class EditEquipeComponent implements OnInit {

  number:any;
  t1:any;
  users:any;
  id:number;
  listBy:any;
  listByUsers:any;

  constructor(private router:Router, private _service:EquipeService) { }

  ngOnInit() {

    this.number= this.router.config.length
    this.t1=this.router.config[this.number - 1]

    this.users = this.t1.users;
    this.id = this.t1.id;

    this._service.getUsersByEquipe(this.id).subscribe(data=>{
      this.listBy = data;
      this.listByUsers = this.listBy.users;
      console.log(this.listByUsers)
    })

    this.router.config.push(this.t1);

  
  }


  delete(id:number){
    this._service.desAffectUser(id);

    this._service.getUsersByEquipe(this.id).subscribe(data=>{
      this.listBy = data;
      this.listByUsers = this.listBy.users;
      console.log(this.listByUsers)
    })

    this._service.getUsersByEquipe(this.id).subscribe(data=>{
      this.listBy = data;
      this.listByUsers = this.listBy.users;
      console.log(this.listByUsers)
    })

  }


}
