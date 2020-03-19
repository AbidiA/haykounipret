import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../equipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {

  listEquipe:any;
  
  constructor(private _service:EquipeService,private router:Router) { }

  ngOnInit() {
    this._service.getAllEquipe().subscribe(data=>{
      this.listEquipe = data;

      console.log(this.listEquipe)
    })
  }

  edit(i:any){
  
    this.router.config.push(i)
    
    this.router.navigate(['/equipe/edit'])
   }

   
}
