import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FicheService {

  constructor(private _http:HttpClient) { }

  res:any;
  id_fich:number;
  id_user:number;



  addProsp(formData:{}){
return this._http.post('https://www.back.hayko-crm.dev/Fiche/Post',formData).subscribe(
  e=>{
    console.log(e)
    this.res = e;
    localStorage.setItem('id_fich',JSON.stringify(this.res.id_fiche));

    //this.id_f =this.res.id_fiche;
  }
);

  }

  addQual(nb_enfantsach :any,
     status_habitation:any,
    status_professionnelle:any,
status_professionnelleco:any,
     revenusmoisnet_e:any,
    revenusmoisnet_co:any,
     fancier:any,
    caf:any, 
    autre:any,
     loyer:any,


    pensionalimentaire_verse:any,
     autres:any,
    residance_principale:any,
    residence_locative:any,
     residance_secondaire:any,

    fichage_banquedefrance:any,
     tresorerie:any,
    total_revenus:any, total_charges:any,

    totalcreditimmobilier_parmois:any,
     totalcreditimmobilier_crd:any,
    totalcreditconsommation_parmois:any, 
    totalcreditconsommation_crd:any,

    totalcredit_parmois:any,
     totalcredit_crd:any,
    endettementavant_parmois:any, 
     endettementavant_crd:any,
    endettementapres_parmoissarter:any,
     endettementapres_crdsarter:any, 
     endettementapres_parmoisprime:any 
    , endettementapres_crdprime:any, credit:any,note:any)
   
    {
      this.id_fich=JSON.parse(localStorage.getItem('id_fich'));

return this._http.post('https://www.back.hayko-crm.dev/Qualification/Post/'+this.id_fich,{
  
	"nb_enfantsach":nb_enfantsach,
	"status_habitation":status_habitation,
  "status_professionnelle":status_professionnelle,
  "status_professionnelleco":status_professionnelleco,
	"revenus" : {
		"revenusmoisnet_e" : revenusmoisnet_e,
	    "revenusmoisnet_co" : revenusmoisnet_co,
		"fancier" : fancier,
		"caf" : caf,
		"autre" : autre
	},
	"charges" : {
		"loyer": loyer,
		"pensionalimentaire_verse": pensionalimentaire_verse,
		"autre": autres
	},
	"valeurimmobilier" : {
		"residance_principale":residance_principale,
		"residence_locative":residence_locative,
		"residance_secondaire":residance_secondaire
	},
	"fichage_banquedefrance":fichage_banquedefrance,
	"credis" :	credit,
	"tresorerie":tresorerie,
	"total_revenus":total_revenus,
	"total_charges":total_charges,
	"totalcreditimmobilier_parmois":totalcreditimmobilier_parmois,
	"totalcreditimmobilier_crd":totalcreditimmobilier_crd,
	"totalcreditconsommation_parmois":totalcreditconsommation_parmois,
	"totalcreditconsommation_crd":totalcreditconsommation_crd,
	"totalcredit_parmois":totalcredit_parmois,
	"totalcredit_crd":totalcredit_crd,
    "endettementavant_parmois":endettementavant_parmois,
	"endettementavant_crd":endettementavant_crd,
	"endettementapres_parmoissarter":endettementapres_parmoissarter,
	"endettementapres_crdsarter":endettementapres_crdsarter,
	"endettementapres_parmoisprime":endettementapres_parmoisprime,
  "endettementapres_crdprime":endettementapres_crdprime,
  "note":note

}).subscribe()

    }  


    
  addQual1(salairenet_e:any, pensionalimentaireperc_e:any,allocationadulthandi_e:any,pensionrente_e:any,pensioreversion_e:any,
    revenusfancier_e:any,
    autrepresise_e:any,
    revenusnonpris_e:any,
    salairenet_co:any,
    pensionalimentaireperc_co:any,
    allocationadulthandi_co:any,
    pensionrente_co:any,
    pensionreversion_co:any,
    revenusfancier_co:any,
    autrepresise_co:any,
    revenusnonpris_co:any,
    allocationfamiliale:any,
    allocationlogement:any,
    revenus:any,
      pensionalimentaireverse_e:any,
      pensionalimentaireverse_co:any,
      loyerhorcharge:any,
      loyerfictif:any,
      autre_e:any,
      autre_co:any,
      totalcharge:any,
      dateemme:any,
      banquep:any,
      dateouverturecompte:any,
      fichagebdf:any)
{
  this.id_fich=JSON.parse(localStorage.getItem('id_fich'));

return this._http.post('https://www.back.hayko-crm.dev/Qualification/Post/'+this.id_fich,{
"revenus":{
"salairenet_e":salairenet_e,
"pensionalimentaireperc_e":pensionalimentaireperc_e,
"allocationadulthandi_e":allocationadulthandi_e,
"pensionrente_e":pensionrente_e,
"pensionreversion_e":pensioreversion_e,
"revenusfancier_e":revenusfancier_e,
"autrepresise_e":autrepresise_e,
"revenusnonpris_e":revenusnonpris_e,
"salairenet_co":salairenet_co,
"pensionalimentaireperc_co":pensionalimentaireperc_co,
"allocationadulthandi_co":allocationadulthandi_co,
"pensionrente_co":pensionrente_co,
"pensionreversion_co":pensionreversion_co,
"revenusfancier_co":revenusfancier_co,
"autrepresise_co":autrepresise_co,
"revenusnonpris_co":revenusnonpris_co,
"allocationfamiliale":allocationfamiliale,
"allocationlogement":allocationlogement,
"revenus":revenus
},
"charges":{
"pensionalimentaireverse_e":pensionalimentaireverse_e,
"pensionalimentaireverse_co":pensionalimentaireverse_co,
"loyerhorcharge":loyerhorcharge,
"loyerfictif":loyerfictif,
"autre_e":autre_e,
"autre_co":autre_co,
"totalcharge":totalcharge,
"dateemme":dateemme,
"banquep":banquep,
"dateouverturecompte":dateouverturecompte,
"fichagebdf":fichagebdf
}
}).subscribe()

}




addAna(credit:any,tresou:string,protre:string){
  
  return this._http.post("https://www.back.hayko-crm.dev/Analyse/Post/"+this.id_fich,{
    "tresorerie":tresou,
    "projettreso":protre,
    "credis":credit
}).subscribe();

}

editAna(credit:any,tresou:string,protre:string){
  this.id_fich=JSON.parse(localStorage.getItem('id_fich'));

  return this._http.post("https://www.back.hayko-crm.dev/Analyse/Update/"+this.id_fich,{
    "tresorerie":tresou,
    "projettreso":protre,
    "credis":credit
}).subscribe();

}
getFiche(){

  let p = JSON.parse(localStorage.getItem('profile'));
  this.id_user = p.id;
  return this._http.get('https://www.back.hayko-crm.dev/Fiche/Get/'+this.id_user);
}

getFicheById(){
  this.id_fich=JSON.parse(localStorage.getItem('id_fich'));

  return this._http.get('https://www.back.hayko-crm.dev/Fiche/GetOne/' +this.id_fich); 
}


editProsp(formData:{}){
  this.id_fich=JSON.parse(localStorage.getItem('id_fich'));

  return this._http.post('https://www.back.hayko-crm.dev/Fiche/Update/'+this.id_fich,formData).subscribe(
    e=>{
      console.log(e)
      this.res = e;
      localStorage.setItem('id_fich',JSON.stringify(this.res.id_fiche));
  
      //this.id_f =this.res.id_fiche;
    }
  );
  
    }


    editQual1(nb_enfantsach :any,
      status_habitation:any,
     status_professionnelle:any,
     status_professionnelleco:any,

      revenusmoisnet_e:any,
     revenusmoisnet_co:any,
      fancier:any,
     caf:any, 
     autre:any,
      loyer:any,
 
 
     pensionalimentaire_verse:any,
      autres:any,
     residance_principale:any,
     residence_locative:any,
      residance_secondaire:any,
 
     fichage_banquedefrance:any,
      tresorerie:any,
     total_revenus:any, total_charges:any,
 
     totalcreditimmobilier_parmois:any,
      totalcreditimmobilier_crd:any,
     totalcreditconsommation_parmois:any, 
     totalcreditconsommation_crd:any,
 
     totalcredit_parmois:any,
      totalcredit_crd:any,
     endettementavant_parmois:any, 
      endettementavant_crd:any,
     endettementapres_parmoissarter:any,
      endettementapres_crdsarter:any, 
      endettementapres_parmoisprime:any 
     , endettementapres_crdprime:any, credit:any,note:any)
  {
    this.id_fich=JSON.parse(localStorage.getItem('id_fich'));
  
  return this._http.post('https://www.back.hayko-crm.dev/Qualification/Update/'+this.id_fich,{
    "nb_enfantsach":nb_enfantsach,
    "status_habitation":status_habitation,
    "status_professionnelle":status_professionnelle,
    "status_professionnelleco":status_professionnelleco,

    "revenus" : {
      "revenusmoisnet_e" : revenusmoisnet_e,
        "revenusmoisnet_co" : revenusmoisnet_co,
      "fancier" : fancier,
      "caf" : caf,
      "autre" : autre
    },
    "charges" : {
      "loyer": loyer,
      "pensionalimentaire_verse": pensionalimentaire_verse,
      "autre": autres
    },
    "valeurimmobilier" : {
      "residance_principale":residance_principale,
      "residence_locative":residence_locative,
      "residance_secondaire":residance_secondaire
    },
    "fichage_banquedefrance":fichage_banquedefrance,
    "credis" :	credit,
    "tresorerie":tresorerie,
    "total_revenus":total_revenus,
    "total_charges":total_charges,
    "totalcreditimmobilier_parmois":totalcreditimmobilier_parmois,
    "totalcreditimmobilier_crd":totalcreditimmobilier_crd,
    "totalcreditconsommation_parmois":totalcreditconsommation_parmois,
    "totalcreditconsommation_crd":totalcreditconsommation_crd,
    "totalcredit_parmois":totalcredit_parmois,
    "totalcredit_crd":totalcredit_crd,
      "endettementavant_parmois":endettementavant_parmois,
    "endettementavant_crd":endettementavant_crd,
    "endettementapres_parmoissarter":endettementapres_parmoissarter,
    "endettementapres_crdsarter":endettementapres_crdsarter,
    "endettementapres_parmoisprime":endettementapres_parmoisprime,
    "endettementapres_crdprime":endettementapres_crdprime,
    "note":note
  
  
  }).subscribe();
  
  }
  
  
  

}