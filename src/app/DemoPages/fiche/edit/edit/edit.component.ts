import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FicheService } from '../../fiche.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  fiche:any;
  constructor(private router : Router, private _service:FicheService) { }

  ngOnInit() {
    this._service.getFicheById().subscribe(e=>{
      this.fiche = e;
      console.log(this.fiche)
      
      this.router.config.push(this.fiche.result)
      
        })
  }

editPro(){

  setTimeout(()=>{    //<<<---    using ()=> syntax
    this.router.navigate(['/editProspet'])
  }, 1000);

}

editQuali(){
 
  setTimeout(()=>{    //<<<---    using ()=> syntax
    this.router.navigate(['/editQuali'])
  }, 1000);

}

editAnalyse(){
  this._service.getFicheById().subscribe(e=>{
this.fiche = e;
console.log(this.fiche)

this.router.config.push(this.fiche.result.analyse)

  })
  setTimeout(()=>{    //<<<---    using ()=> syntax
    this.router.navigate(['/editAnalyse'])
  }, 1000);

}


}
