import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipeService } from '../equipe.service';

@Component({
  selector: 'app-modifierequipe',
  templateUrl: './modifierequipe.component.html',
  styleUrls: ['./modifierequipe.component.sass']
})
export class ModifierequipeComponent implements OnInit {

  number: any;
  t1: any;
  id: number;
  nomEquipe: string;
  listAffect: any;
  listUser: any;
  listBy:any;
  constructor(private router: Router, private _service: EquipeService) { }

  ngOnInit() {

    this.number = this.router.config.length
    this.t1 = this.router.config[this.number - 1]
    this.id = this.t1.id;
this.nomEquipe = this.t1.equipe;
    console.log(this.t1)

    this._service.getAllUser().subscribe(data => {

      this.listUser = data
      console.log(this.listUser)
    })
  }

  edit(){
    this._service.editEquipe(this.id,this.nomEquipe,this.listAffect);


    
setTimeout(()=>{    //<<<---    using ()=> syntax

  this.router.navigate(['/equipe/list']);

}, 1000);

  }


}
