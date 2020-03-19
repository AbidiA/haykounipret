import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FicheService } from '../../fiche.service';

@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css']
})
export class AnalyseComponent implements OnInit {

  treSou:any;
  proTre:any;
  constructor(private _service:FicheService, private router:Router) { }

  ngOnInit() {
  }

  public addresses: any[] = [{
    mensualite:'' ,
    crd: '',
    type: '',
    organisme:'',
    menRetard:'',
    rachete:''
 
  },
  {
    mensualite: '',
    crd: '',
    type: '',
    organisme:'',
    menRetard:'',
    rachete:''
 

  }];

  addAddress() {
    this.addresses.push({
      mensualite: '',
      crd: '',
      type: '',
      organisme:'',
      menRetard:'',
      rachete:''
 
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }
t2:any;
  addCredit(){
this._service.addAna(this.addresses,this.treSou,this.proTre);
alert("Ajout avec succés") 
this._service.getFicheById().subscribe(e=>{
this.t2=e;

this.router.config.push(this.t2.result)
console.log(this.t2.result)


})



setTimeout(()=>{    //<<<---    using ()=> syntax
  this.router.navigate(['/simulateur'])
}, 1000);
  }
}
