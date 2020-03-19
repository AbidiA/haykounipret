import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../equipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  listUser:any;
  listAffect:any;
  nomEquipe:string;

  constructor(private _service:EquipeService,private router:Router) { }

  ngOnInit() {
    this._service.getAllUser().subscribe(data=>{
      
      this.listUser = data
      console.log(this.listUser)
    })
  }

  change(){
    this._service.addEquipe(this.nomEquipe,this.listAffect);
    console.log(this.listAffect);

    
    setTimeout(()=>{    

      this.router.navigate(['/equipe/list']);
    
    }, 1000);
      }

}
