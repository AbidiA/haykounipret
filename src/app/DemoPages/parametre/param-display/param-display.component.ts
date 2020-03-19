import { Component, OnInit } from '@angular/core';
import { ParametreService } from '../parametre.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-param-display',
  templateUrl: './param-display.component.html',
  styleUrls: ['./param-display.component.css']
})
export class ParamDisplayComponent implements OnInit {

  constructor(private _service:ParametreService, private _formBuilder:FormBuilder) { }

  listParam:any;
  paramForm:FormGroup;

  ngOnInit() {

    this.paramForm = this._formBuilder.group({
      montantminimumpretsg :[''],
      montantminimumpretag: [''],
      tauxhonorairessg:[''],
      tauxhonorairesag:[''],
      fraisdossierpreteurtauxsg:[''],
      fraisdossierpreteurplafondsg:[''],
      fraisdossierpreteurtauxag:[''],
      fraisdossierpreteurplafondag:[''],
      tauxdupretnominalmoyensg:[''],
      tauxdupretnominalmoyenagfixe:[''],
      tauxdupretnominalmoyenagvariable:[''],
      durepossibledespretminimumsg:[''],
      durepossibledespretmaximumsg:[''],
      durepossibledespretmimimumag:[''],
      durepossibledespretmaximumag:[''],
      tauxdendettementapressg:[''],
      tauxdendettementapresagfixe:[''],
      tauxdendettementapresagvariable:[''],
      limitagepretageendebutdepret:[''],
      limitagepretageenfindepret:[''],
      resteravivrep1:[''],
      resteravivrep2:[''],
      resteravivrep3:[''],
      resteravivrep4:[''],
      resteravivrep5:[''],
      resteravivreparenfantsupple:[''],
      radiohypothecairemaximum:[''],
      assurancetauxannuel:[''],
      revenusminimumsg:[''],
      revenusminimumag:[''],
      txsaisisable:[''],
      propcommercial:[''],
      analysedossier:['']

  })

    this._service.getParametre().subscribe(e=>{
      this.listParam=e.result[0];
      console.log(this.listParam)

    })

  }

  editParametre(){
    this._service.editParam(
      this.paramForm.value.montantminimumpretsg,
      this.paramForm.value.montantminimumpretag,
      this.paramForm.value.tauxhonorairessg,
      this.paramForm.value.tauxhonorairesag,
      this.paramForm.value.fraisdossierpreteurtauxsg,
      this.paramForm.value.fraisdossierpreteurplafondsg,
      this.paramForm.value.fraisdossierpreteurtauxag,
      this.paramForm.value.fraisdossierpreteurplafondag,
      this.paramForm.value.tauxdupretnominalmoyensg,
      this.paramForm.value.tauxdupretnominalmoyenagfixe,
      this.paramForm.value.tauxdupretnominalmoyenagvariable,
      this.paramForm.value.durepossibledespretminimumsg,
      this.paramForm.value.durepossibledespretmaximumsg,
      this.paramForm.value.durepossibledespretmimimumag,
      this.paramForm.value.durepossibledespretmaximumag,
      this.paramForm.value.tauxdendettementapressg,
      this.paramForm.value.tauxdendettementapresagfixe,
      this.paramForm.value.tauxdendettementapresagvariable,
      this.paramForm.value.limitagepretageendebutdepret,
      this.paramForm.value.limitagepretageenfindepret,
      this.paramForm.value.resteravivrep1,
      this.paramForm.value.resteravivrep2,
      this.paramForm.value.resteravivrep3,
      this.paramForm.value.resteravivrep4,
      this.paramForm.value.resteravivrep5,
      this.paramForm.value.resteravivreparenfantsupple,
      this.paramForm.value.radiohypothecairemaximum,
      this.paramForm.value.assurancetauxannuel,
      this.paramForm.value.revenusminimumsg,
      this.paramForm.value.revenusminimumag,
      this.paramForm.value.txsaisisable,
      this.paramForm.value.propcommercial,
      this.paramForm.value.analysedossier
    );
    alert("Modification avec succés")
  }

}
