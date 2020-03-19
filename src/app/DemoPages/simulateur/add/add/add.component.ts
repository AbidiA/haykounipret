import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ParametreService } from 'src/app/DemoPages/parametre/parametre.service';
import { FicheService } from 'src/app/DemoPages/fiche/fiche.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  tabClaud:any [ ];
  simForm:FormGroup;
  reste:any;
  clau:any
  tableAnnee:any;
  tableAnneeT:any;
  testTab:any;
  testTab1:any;
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
monDuPreAG:any;
monDuPreSG:any;
ageE:number;
limiteAge:string;
ageenfindepret:number;
minimumsg:number;
limA:number;
revenus:any;
nbrFam:number;
charges:number;
testRev:string;
testRevS:string;

revMinAg:any;
revMinSg:any;

  constructor(private _formBuilder:FormBuilder, private router:Router, private _service:ParametreService, private _service1:FicheService) { }

  ngOnInit() {

    setTimeout(()=>{   
     
      //<<<---    using ()=> syntax
    }, 500);

    this.crd=0;
    this.mensu=0;
  
    this.limiteAge = '';
    this.testRev = '';
    this.testRevS = '';
   
    this.tableAnnee =  [{'ans':2},{'ans':4},{'ans':6},{'ans':8},{'ans':10},{'ans':12},{'ans':14},{'ans':15},{'ans':18}];
    this.tableAnneeT = [{'ans':2},{'ans':4},{'ans':6},{'ans':8},{'ans':10},{'ans':12},{'ans':15},{'ans':18},{'ans':20},{'ans':22},{'ans':25},{'ans':30},{'ans':35}];
    this.testTab = [];
    this.testTab1 = [];

    

    this.number= this.router.config.length
    this.t1=this.router.config[this.number - 1]
    this.revenus = this.t1.qualification.total_revenus;
    this.charges = this.t1.qualification.total_charges;
    this.nbrFam = this.t1.nbfamille;
   

  console.log(this.t1)

    this.getParam();

    this.ageE = this.t1.age_e;
    
   

    for(var i =0;i<this.t1.qualification.credis.length;i++){
      if(this.t1.qualification.credis[i].aracheter == "oui"){
      this.crd += parseInt(this.t1.qualification.credis[i].crd);
    }else{
    }
    }


    for(var i =0;i<this.t1.qualification.credis.length;i++){
      if(this.t1.qualification.credis[i].aracheter == "oui"){

      this.mensu += parseInt(this.t1.qualification.credis[i].mensualite);
    }else{
    }
    }

    //this.getParam();
    
   
    this.simForm = this._formBuilder.group({
        organisme : [''],
        taux : [''],
        reste:[''],
        ancienMens : [''],
        tauxS : [''],

    })
   
    this.garantie = '';
   

    
   


    this.keyup(this.crd);
    this.keyup4(this.mensu);

    


  }

  troi:any;
  un:any;
  listParam:any;

resteAvi:any;
testAnn1:any;
testAnn2:any;
testAnn3:any;
testAnn4:any;

  getParam(){
          this._service.getParametre().subscribe(e=>{
          this.listParam = e;
          this.troi = this.listParam.result[0].tauxdupretnominalmoyen.agfixe;
          this.un = this.listParam.result[0].tauxdupretnominalmoyen.sg;
          this.monDuPreAG = this.listParam.result[0].montantminimumpret.ag;
          this.monDuPreSG = this.listParam.result[0].montantminimumpret.sg;
          this.minimumsg = this.listParam.result[0].durepossibledespret.minimumsg;
          this.ageenfindepret = this.listParam.result[0].limitagepret.ageenfindepret;
          this.revMinAg = this.listParam.result[0].revenus.minimumag;
          this.revMinSg = this.listParam.result[0].revenus.minimumsg;
          this.testAnn1 = this.listParam.result[0].durepossibledespret.minimumsg;
          this.testAnn2 = this.listParam.result[0].durepossibledespret.maximumsg;
          this.testAnn3 = this.listParam.result[0].durepossibledespret.mimimumag;
          this.testAnn4 = this.listParam.result[0].durepossibledespret.maximumag;
       


          this.limA = this.ageenfindepret - (this.minimumsg/12);
        

          for(var i =0;i<this.tableAnnee.length;i++){
            if(this.tableAnnee[i].ans >= (this.testAnn1 / 12)  && this.tableAnnee[i].ans <= (this.testAnn2 / 12) +2 ){
              this.tableAnnee[i].restAvivre = "";
              this.tableAnnee[i].revCol = "";
              this.tableAnnee[i].testAge = "";
             
              this.testTab.push(this.tableAnnee[i])
            } else {
              
            }
          }
          console.log(this.testTab)

          for(var i =0;i<this.tableAnneeT.length;i++){
            if(this.tableAnneeT[i].ans >= (this.testAnn3 / 12)  && this.tableAnneeT[i].ans <= (this.testAnn4 / 12) +2 ){
            
            this.tableAnneeT[i].restAvivre = "";
            this.tableAnneeT[i].revCol = "";
            this.tableAnneeT[i].testAge = "";

              this.testTab1.push(this.tableAnneeT[i])

            } else {
              
            }

          }
          console.log(this.testTab1)


          if(this.ageE > this.limA){
            this.limiteAge = "l'age limite est dépassé";
          } else if(this.ageE < this.limA){
            this.limiteAge = '';
          }
    
          if(this.revenus < this.revMinAg){
            this.testRev = 'noWay';
            
          } else if(this.revenus > this.revMinAg){
            this.testRev = ''
      
          }
          
          if(this.revenus < this.revMinSg){
            this.testRevS = 'noWay'
          } else if(this.revenus > this.revMinSg){
            this.testRevS = ''
      
          }

          if(this.crd > this.monDuPreAG){
            this.monDuPreCol = 'vali';
          } else if(this.crd < this.monDuPreAG){
            this.monDuPreCol = 'noVali';
          }

        
    if(this.crd > this.monDuPreSG){
      this.monDuPreColS = 'vali';
    } else if(this.crd < this.monDuPreSG){
      this.monDuPreColS = 'noVali';
    }



    if(this.nbrFam == 1){
      this.resteAvi = this.listParam.result[0].resteravivre.p1;
    }else if(this.nbrFam == 2){
      this.resteAvi = this.listParam.result[0].resteravivre.p2;
    } else if(this.nbrFam == 3){
      this.resteAvi = this.listParam.result[0].resteravivre.p3;
    } else if(this.nbrFam == 4){
      this.resteAvi = this.listParam.result[0].resteravivre.p4;
    }else if(this.nbrFam == 5){
      this.resteAvi = this.listParam.result[0].resteravivre.p5;
    }else if(this.nbrFam > 5){
      this.resteAvi =  ((this.nbrFam - 5)*250)  + parseInt(this.listParam.result[0].resteravivre.p5);
    }
  
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

  restOk:string;
  restOkS:string;
testok1:string;
  keyup3(value: number , index:number) {
  

    this.duree=value;
    this.x= this.mens * this.un / 1200;

    this.a = 1 + this.un / 1200;
    
    this.y= (Math.pow(this.a, -( this.duree * 12)));
    
    
    this.z = - this.y +1 ;
    
    this.newMen = this.x / this.z;
    this.newRa = Math.round(this.newMen*100)/100
  
    this.gainN = this.ancienM - this.newRa;
    this.gainN = Math.round(this.gainN*100)/100

    /*
    if(this.gainN < 0){
      this.color ='rouge';
    } else if(this.gainN > 0){
      this.color = 'vert';
    }*/
    
    if(this.newRa / this.revenus > 0.45){
      this.revColS = 'Tx Endett > 45%';
    }else if(this.newRa / this.revenus < 0.45){
      this.revColS = ''
  
  
    }

    if(this.revenus - this.charges - this.newRa < this.resteAvi){
      this.restOkS = 'Reste à Vivre insuffisant';

    }

    else  if(this.revenus - this.charges - this.newRa > this.resteAvi){
      this.restOkS = '';

    } 


    if(parseInt(this.ageE.toString()) + parseInt(value.toString())  > parseInt(this.ageenfindepret.toString())){
      
      this.testAge2 = 'age est depassé'
      }else if(parseInt(this.ageE.toString()) + parseInt(value.toString())  < parseInt(this.ageenfindepret.toString())){
      
        this.testAge2 = ''

      }
    
      


      this.testTab[index].restAvivre = this.restOkS;
      this.testTab[index].testAge = this.testAge2;
      this.testTab[index].revCol = this.revColS;
      


    return this.newRa;
}

monDuPreCol:string;
monDuPreColS:string;

revCol:string;
revColS:string;

testAge1:string;
testAge2:string;


testOk:string;


keyup6(value: number,index:number) {
 

  this.duree=value;
  this.x= this.mens * this.troi / 1200;

  this.a = 1 + this.troi / 1200;
  
  this.y= (Math.pow(this.a, -( this.duree * 12)));
  
  
  this.z = - this.y +1 ;
  
  this.newMen = this.x / this.z;
  this.newRa = Math.round(this.newMen*100)/100

  this.gainN = this.ancienM - this.newRa;
  this.gainN = Math.round(this.gainN*100)/100;


  
  if(this.newRa / this.revenus > 0.45){
    this.revCol = 'Tx Endett > 45%';
    
  }else if(this.newRa / this.revenus < 0.45){
    this.revCol = ''


  }
 /* if(this.gainN < 0){
    this.color ='rouge';
  } else if(this.gainN > 0){
    this.color = 'vert';
  }*/
    if(this.revenus - this.charges - this.newRa < this.resteAvi){
    this.restOk = 'Reste à Vivre insuffisant';

  }else if(this.revenus - this.charges - this.newRa > this.resteAvi){
    this.restOk = '';

  }

if(parseInt(this.ageE.toString()) + parseInt(value.toString())  > parseInt(this.ageenfindepret.toString())  ){
  this.testAge1 = 'age est depassé'
}else if(parseInt(this.ageE.toString()) + parseInt(value.toString())  < parseInt(this.ageenfindepret.toString())){

  this.testAge1 = ''

}

this.testTab1[index].restAvivre = this.restOk;
this.testTab1[index].testAge = this.testAge1;
this.testTab1[index].revCol = this.revCol;



  return this.newRa;
}
/*
download(){
  html2canvas(document.getElementById('pdf')).then(canvas =>{
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;

    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf('p','mm','a4');
    var position = 0 ;
    pdf.addImage(contentDataURL,'PNG',0,position,200,250)
    pdf.save('file.pdf');
})}
*/

}
