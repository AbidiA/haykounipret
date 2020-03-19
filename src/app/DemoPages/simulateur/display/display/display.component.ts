import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { ParametreService } from 'src/app/DemoPages/parametre/parametre.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  simForm:FormGroup;
  reste:any;
  clau:any
  tableAnnee:any;
  tableAnneeT:any;
  tx:any;
  txs:any;

  mens:any;
  duree:any;
  newMen:any;
newRo:any

v = 0.12;
x:any;
y:any;
z:any;
a:any;
gain:any;
newRa:any;

gainN:any;
ancienM:any;
garantie:any;
color:string;
t1:any;
number:any;
crd:any;
mensu:any;
  constructor(private _formBuilder:FormBuilder, private router:Router, private _service:ParametreService) { }

  ngOnInit() {

  

    this.getParam();
    
   
    this.simForm = this._formBuilder.group({
        organisme : [''],
        taux : [''],
        reste:[''],
        ancienMens : [''],
        tauxS : [''],

    })
    this.tableAnnee = [{'ans':6},{'ans':8},{'ans':10},{'ans':12}];
    this.tableAnneeT = [{'ans':10},{'ans':12},{'ans':15},{'ans':18},{'ans':20},{'ans':22},{'ans':25},{'ans':30},{'ans':35}];

    this.garantie = '';
   

    this.keyup(this.crd);
    this.keyup4(this.mensu);



  }
  troi:any;
  un:any;
  listParam:any;
  getParam(){
    this._service.getParametre().subscribe(e=>{
this.listParam = e;
this.troi = this.listParam.result[0].tauxdupretnominalmoyen.agfixe;
this.un = this.listParam.result[0].tauxdupretnominalmoyen.sg;


    })
  }

  keyup(value: string) {
      this.mens=value 
    //  console.log(this.mens)
      this.clau  = this.mens * 3 / 100


}
keyup4(value: string) {
  this.ancienM=value 
  this.gain = this.ancienM - this.newRo;

}



keyup1(value: string) {

        this.tx=value;
        this.x= this.mens * this.tx / 1200;

        this.a = 1 + this.tx / 1200;

        this.y= (Math.pow(this.a, -( this.duree * 12)));


        this.z = - this.y +1 ;

        this.newMen = this.x / this.z;
        this.newRo = Math.round(this.newMen*100)/100
        this.gain = this.ancienM - this.newRo;

       
        return this.newRo;

}

keyup2(value: string) {
  this.txs=value;
  this.x= this.mens * this.txs / 1200;

  this.a = 1 + this.txs / 1200;

  this.y= (Math.pow(this.a, -( this.duree * 12)));


  this.z = - this.y +1 ;

  this.newMen = this.x / this.z;
  this.newRo = Math.round(this.newMen*100)/100
  this.gain = this.ancienM - this.newRo;

 
  return this.newRo;

  
  }


  keyup3(value: string) {

    this.duree=value;
    this.x= this.mens * this.un / 1200;

    this.a = 1 + this.un / 1200;
    
    this.y= (Math.pow(this.a, -( this.duree * 12)));
    
    
    this.z = - this.y +1 ;
    
    this.newMen = this.x / this.z;
    this.newRa = Math.round(this.newMen*100)/100
  
    this.gainN = this.ancienM - this.newRa;
    this.gainN = Math.round(this.gainN*100)/100

    if(this.gainN < 0){
      this.color ='rouge';
    } else if(this.gainN > 0){
      this.color = 'vert';
    }

    return this.newRa;
}


keyup6(value: string) {

  this.duree=value;
  this.x= this.mens * this.troi / 1200;

  this.a = 1 + this.troi / 1200;
  
  this.y= (Math.pow(this.a, -( this.duree * 12)));
  
  
  this.z = - this.y +1 ;
  
  this.newMen = this.x / this.z;
  this.newRa = Math.round(this.newMen*100)/100

  this.gainN = this.ancienM - this.newRa;
  this.gainN = Math.round(this.gainN*100)/100

  if(this.gainN < 0){
    this.color ='rouge';
  } else if(this.gainN > 0){
    this.color = 'vert';
  }

  return this.newRa;
}

  
 

}
