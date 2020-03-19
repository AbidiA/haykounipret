import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FicheService } from '../../fiche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prospet',
  templateUrl: './prospet.component.html',
  styleUrls: ['./prospet.component.css']
})
export class ProspetComponent implements OnInit {

  prosForm:FormGroup;
  username:string;

  constructor(private _formBuilder:FormBuilder , private _service:FicheService, private router:Router) { }

  ngOnInit() {

    this.co = 'Oui'
    this.username = localStorage.getItem('username');
    
    console.log(this.username)
    this.prosForm = this._formBuilder.group({
      dossier:[''],
      datedemande:[''],
      conseillerunip : this.username,
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
   

    this._service.addProsp(this.prosForm.value);
    alert("Ajout avec succés")
    this.router.navigate(['/listFiche'])

      }

      addPros1(){
   

        this._service.addProsp(this.prosForm.value);
        alert("Ajout avec succés")

        this.router.navigate(['/ficheQuali'])
          
          }

          co:string;
          select(event){
            this.co = event;
            console.log(event)
          }
}
