import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FicheService } from '../../fiche.service';

@Component({
  selector: 'app-afficher',
  templateUrl: './afficher.component.html',
  styleUrls: ['./afficher.component.css']
})
export class AfficherComponent implements OnInit {

  
  listFiche:any;
  listResult:any;
  t1:any;
  constructor(private _service:FicheService, private router:Router) { }

  ngOnInit() {
    this._service.getFiche().subscribe(e=>{
      this.listFiche= e;
      this.listResult = this.listFiche.result;
      console.log(this.listFiche)
    })
  }

  addQuali(id:number){
    localStorage.setItem('id_fich',JSON.stringify(id));
    this.router.navigate(['/ficheQuali']);
  }

  sim(i:any){
    localStorage.setItem('id_fich',JSON.stringify(i.id));

    this.router.config.push(i)
    
    this.router.navigate(['/editSimu'])
   }

   edit(id:number){
    localStorage.setItem('id_fich',JSON.stringify(id));

    this._service.getFicheById().subscribe(e=>{
      this.t1 = e
      this.router.config.push(this.t1.result)

    })

    setTimeout(()=>{    //<<<---    using ()=> syntax
      this.router.navigate(['/edit'])
    }, 1000);

   }
}
