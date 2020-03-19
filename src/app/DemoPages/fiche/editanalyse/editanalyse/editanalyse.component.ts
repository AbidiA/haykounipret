import { Component, OnInit } from '@angular/core';
import { FicheService } from '../../fiche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editanalyse',
  templateUrl: './editanalyse.component.html',
  styleUrls: ['./editanalyse.component.css']
})
export class EditanalyseComponent implements OnInit {

  
  treSou:any;
  proTre:any;
  t1:any;
  number:any;
  constructor(private _service:FicheService, private router:Router) { }

  ngOnInit() {

    this.number= this.router.config.length
    this.t1=this.router.config[this.number - 1]


    console.log(this.t1)
    this.addresses = this.t1.credis;
    this.treSou = this.t1.tresorerie;
    this.proTre = this.t1.projettreso;
  }

  public addresses: any[] = [{
    mensualite:'' ,
    crd: '',
    type: '',
    organisme:'',
    mensualiteretard:'',
    aracheter:''
 
  },
  {
    mensualite: '',
    crd: '',
    type: '',
    organisme:'',
    mensualiteretard:'',
    aracheter:''
 

  }];

  addAddress() {
    this.addresses.push({
      mensualite: '',
      crd: '',
      type: '',
      organisme:'',
      mensualiteretard:'',
      aracheter:''
 
    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }
t2:any;
  addCredit(){
this._service.editAna(this.addresses,this.treSou,this.proTre);
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
