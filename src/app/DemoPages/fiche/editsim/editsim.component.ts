import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FicheService } from '../fiche.service';

@Component({
  selector: 'app-editsim',
  templateUrl: './editsim.component.html',
  styleUrls: ['./editsim.component.sass']
})
export class EditsimComponent implements OnInit {

  
  fiche:any;
  constructor(private router : Router, private _service:FicheService) { }

  ngOnInit() {
    this._service.getFicheById().subscribe(e=>{
      this.fiche = e;
      console.log(this.fiche)
      
      this.router.config.push(this.fiche.result)
      
        })
  }


}
