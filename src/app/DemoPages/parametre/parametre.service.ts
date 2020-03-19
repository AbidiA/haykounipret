import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  constructor( private _http:HttpClient) { }


  getParametre():Observable<any>{
return this._http.get('https://www.back.hayko-crm.dev/Parametre/Get');
  }

  editParam(montantminimumpretsg :any,
  montantminimumpretag: any,
  tauxhonorairessg:any,
  tauxhonorairesag:any,
  fraisdossierpreteurtauxsg:any,
  fraisdossierpreteurplafondsg:any,
  fraisdossierpreteurtauxag:any,
  fraisdossierpreteurplafondag:any,
  tauxdupretnominalmoyensg:any,
  tauxdupretnominalmoyenagfixe:any,
  tauxdupretnominalmoyenagvariable:any,
  durepossibledespretminimumsg:any,
  durepossibledespretmaximumsg:any,
  durepossibledespretmimimumag:any,
  durepossibledespretmaximumag:any,
  tauxdendettementapressg:any,
  tauxdendettementapresagfixe:any,
  tauxdendettementapresagvariable:any,
  limitagepretageendebutdepret:any,
  limitagepretageenfindepret:any,
  resteravivrep1:any,
  resteravivrep2:any,
  resteravivrep3:any,
  resteravivrep4:any,
  resteravivrep5:any,
  resteravivreparenfantsupple:any,
  radiohypothecairemaximum:any,
  assurancetauxannuel:any,
  revenusminimumsg:any,
  revenusminimumag:any,
  txsaisisable:any,
  propcommercial:any,
  analysedossier:any){
    return this._http.post("https://www.back.hayko-crm.dev/Parametre/Post",{

      "montantminimumpret" : {
        "sg": montantminimumpretsg,
        "ag" :montantminimumpretag
      },
      "tauxhonoraires" : {
        "sg": tauxhonorairessg,
        "ag" :tauxhonorairesag
      },
      "fraisdossierpreteur" : {
        "tauxsg": fraisdossierpreteurtauxsg,
        "plafondsg" :fraisdossierpreteurplafondsg,
        "tauxag": fraisdossierpreteurtauxag,
        "plafondag" :fraisdossierpreteurplafondag
      },
      "tauxdupretnominalmoyen" : {
        "tauxsaisissable": txsaisisable,
        "sg" :tauxdupretnominalmoyensg,
        "agfixe": tauxdupretnominalmoyenagfixe,
        "agvariable" :tauxdupretnominalmoyenagvariable
      },
      "durepossibledespret" : {
        "minimumsg": durepossibledespretminimumsg,
        "maximumsg" :durepossibledespretmaximumsg,
        "mimimumag": durepossibledespretmimimumag,
        "maximumag" :durepossibledespretmaximumag
      },
      "tauxdendettementapres" : {
        "sg": tauxdendettementapressg,
        "agfixe" :tauxdendettementapresagfixe,
        "agvariable": tauxdendettementapresagvariable
      },
      "limitagepret" : {
        "ageendebutdepret": limitagepretageendebutdepret,
        "ageenfindepret" :limitagepretageenfindepret
      },
      "resteravivre" : {
        "p1": resteravivrep1,
        "p2": resteravivrep2,
        "p3": resteravivrep3,
        "p4": resteravivrep4,	
        "p5": resteravivrep5,
        "parenfantsupple" :resteravivreparenfantsupple
      },
      "radiohypothecaire" : {
        "maximum": radiohypothecairemaximum
      },
      "assurance" : {
        "tauxannuel": assurancetauxannuel
      },
      "revenus" : {
        "minimumsg": revenusminimumsg,
        "minimumag": revenusminimumag
      },
      "propositionco" : propcommercial,
      "analyserapidescdp" : analysedossier

    }).subscribe();
  }
}

