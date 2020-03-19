import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FicheService } from '../../fiche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editprosp',
  templateUrl: './editprosp.component.html',
  styleUrls: ['./editprosp.component.css']
})
export class EditprospComponent implements OnInit {

  co:string;
  prosForm:FormGroup;
number:any;
t1:any;
testCo:string;
  constructor(private _formBuilder:FormBuilder , private _service:FicheService, private router:Router) { }

  ngOnInit() {


    this.number= this.router.config.length
    this.t1=this.router.config[this.number - 1]
    this.testCo = this.t1.gotco;

    if(this.testCo == '1'){
      this.co = 'Oui';
    }else{
      this.co = 'Non';
    }
    console.log(this.t1)

    
    this.prosForm = this._formBuilder.group({
      dossier:[''],
      datedemande:[''],
      conseillerunip:[''],
      situationfamille:[''],
      civilite_e:[''],
      civilite_co:[''],
      nom_e:[''],
      nom_co:[''],
      prenom_e:[''],
      prenom_co:[''],
     
      dateness_e:[''],
      dateness_co:[''],
    
      adresse:[''],
      codepostal:[''],
      ville:[''],
      telp_e:[''],
      telp_co:[''],

      mail_e:[''],
      mail_co:[''],
    })
  }

  addPros(){
   

    this._service.editProsp(this.prosForm.value);
    alert("Modification avec succés")

      }

      addPros1(){
   

        this._service.editProsp(this.prosForm.value);
        alert("Modification avec succés")

        this.router.navigate(['/ficheQuali'])
          
          }

          select(event){
            this.co = event;
            console.log(event)
          }

}
