import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FicheService } from '../../fiche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {

  qualForm: FormGroup;
  totalMensu:any;
  totalCrd:any;
  x:number;
  constructor(private _formBuilder: FormBuilder, private _service: FicheService, private router: Router) { }

  ngOnInit() {

    this.crd = 0;
    this.mensu = 0;
    this.x= 0;
    this.crd1 = 0;
    this.mensu1 = 0;
    this.qualForm = this._formBuilder.group(
      {
        nb_enfantsach: '',
        salairenet_e: '',
        status_habitation: '',
        status_professionnelle: '',
        status_professionnelleco:'',
        revenusmoisnet_e: '',
        revenusmoisnet_co: '',
        fancier: '',
        caf: '',

        autre: '',
        autres: '',

        loyer: '',
        pensionalimentaire_verse: '',
        residance_principale: '',
        residence_locative: '',
        residance_secondaire: '',
        fichage_banquedefrance: '',
        tresorerie: '',
        total_revenus: '',
        total_charges: '',
        totalcreditimmobilier_parmois: '',
        totalcreditimmobilier_crd: '',
        totalcreditconsommation_parmois: '',
        totalcreditconsommation_crd: '',
        totalcredit_parmois: '',
        totalcredit_crd: '',
        endettementavant_parmois: '',
        endettementavant_crd: '',
        endettementapres_parmoissarter: '',
        endettementapres_crdsarter: '',

        endettementapres_parmoisprime: '',
        endettementapres_crdprime: '',
        note:''


      }
    )

    this.revenu = 0;
    this.charges = 0;

    this.a = 0;
    this.b = 0;
    this.d = 0;
    this.e = 0;
    this.t = 0;
    this.c = 0;
    this.z = 0;
    this.y = 0;



    this.rev();
    this.charge();
  }




  addQual() {
    this._service.addQual(this.qualForm.value.nb_enfantsach, this.qualForm.value.status_habitation,
      this.qualForm.value.status_professionnelle,this.qualForm.value.status_professionnelleco,this.qualForm.value.revenusmoisnet_e,
      this.qualForm.value.revenusmoisnet_co, this.qualForm.value.fancier,
      this.qualForm.value.caf, this.qualForm.value.autre, this.qualForm.value.loyer,


      this.qualForm.value.pensionalimentaire_verse, this.qualForm.value.autres,
      this.qualForm.value.residance_principale,
      this.qualForm.value.residence_locative, this.qualForm.value.residance_secondaire,

      this.qualForm.value.fichage_banquedefrance, this.qualForm.value.tresorerie,
      this.qualForm.value.total_revenus, this.qualForm.value.total_charges,

      this.qualForm.value.totalcreditimmobilier_parmois, this.qualForm.value.totalcreditimmobilier_crd,
      this.qualForm.value.totalcreditconsommation_parmois, this.qualForm.value.totalcreditconsommation_crd,

      this.qualForm.value.totalcredit_parmois, this.qualForm.value.totalcredit_crd,
      this.qualForm.value.endettementavant_parmois, this.qualForm.value.endettementavant_crd,
      this.qualForm.value.endettementapres_parmoissarter, this.qualForm.value.endettementapres_crdsarter, this.qualForm.value.endettementapres_parmoisprime 
      , this.qualForm.value.endettementapres_crdprime,this.addresses,this.qualForm.value.note)
    alert("Fiche Qualification est ajouté avec succés")
  
    this._service.getFicheById().subscribe(e=>{
      this.t2=e;
      
      this.router.config.push(this.t2.result)
      
      })
      setTimeout(()=>{    //<<<---    using ()=> syntax
        this.router.navigate(['/editSimu'])
      }, 1000);
       
  }
   
  y: any;
  z: any;
  a: any;
  b: any;
  c: any;
  d: any;
  e: any;
  t: any;

  revenu: any;

  
  keyup1(value: number) {



    if(value > 0){
      this.z = value;
      this.rev();
    }else{
      value = 0;
      this.z = value;

      this.rev();
    }
  
  }

  keyup2(value: number) {
   
    
   

    if(value > 0){
      this.y = value;
      this.rev();
    }else{
      value = 0;
      this.y = value;
      this.rev();
    }

    

  }
  keyup3(value: number) {


  

    if(value > 0){
      this.a = value;
      this.rev();
    }else{
      value = 0;
      this.a = value;
      this.rev();
    }

  }
  keyup4(value: number) {


    if(value > 0){
      this.b = value;
      this.rev();
    }else{
      value = 0;
      this.b = value;
      this.rev();
    }
   

  }
  keyup5(value: number) {

    if(value > 0){
      this.t = value;
      this.rev();
    }else{
      value = 0;
      this.t = value;
      this.rev();
    }

    

  }


  keyup6(value: number) {

    if(value > 0){
      this.c = value;
      this.charge();
    }else{
      value = 0;
      this.c = value;
      this.charge();
    }


  }
  keyup7(value: number) {

    if(value > 0){
      this.d = value;
      this.charge();
    }else{
      value = 0;
      this.d = value;
      this.charge();
    }


  

  }
  keyup8(value: number) {

    if(value > 0){
      this.e = value;
      this.charge();
    }else{
      value = 0;
      this.e = value;
      this.charge();
    }


  

  }
 


 

  rev() {
    this.revenu = parseInt(this.a) + parseInt(this.b)+ parseInt(this.t)  + parseInt(this.z) + parseInt(this.y) 
  }



 

  charges: any;
  charge() {
 

    this.charges = parseInt(this.c) + parseInt(this.d) + parseInt(this.e)

  }



  public addresses: any[] = [{
    mensualite: '',
    crd: '',
    type: '',
    organisme: '',
    mensualiteretard: '',
    aracheter: ''

  },
  {
    mensualite: '',
    crd: '',
    type: '',
    organisme: '',
    mensualiteretard: '',
    aracheter: ''


  }];

  addAddress() {
    this.addresses.push({
      mensualite: '',
      crd: '',
      type: '',
      organisme: '',
      mensualiteretard: '',
      aracheter: ''

    });
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }
  t2: any;
  addCredit() {
    alert("Ajout avec succés")
    this._service.getFicheById().subscribe(e => {
      this.t2 = e;

      this.router.config.push(this.t2.result)


    })

    setTimeout(() => {    //<<<---    using ()=> syntax
      this.router.navigate(['/simulateur'])
    }, 1000);
  }

crd:any;
mensu:any;
crd1:any;
mensu1:any;
 

keyup(value:number){




  for(var i =0;i<this.addresses.length;i++){
    if(this.addresses[i].type == "Immobilier"){
    this.crd += parseInt(this.addresses[i].crd);
  }else{
    this.crd1 += parseInt(this.addresses[i].crd);

  }
  }




  for(var i =0;i<this.addresses.length;i++){
    if(this.addresses[i].type != "Immobilier"){

    this.mensu1 += parseInt(this.addresses[i].mensualite);
  }else{
    this.mensu += parseInt(this.addresses[i].mensualite);

  }
  }

this.totalCrd = this.crd + this.crd1;
this.totalMensu = this.mensu + this.mensu1;

this.x= 1 ;
}


  
}
