import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-afficherprofile',
  templateUrl: './afficherprofile.component.html',
  styleUrls: ['./afficherprofile.component.sass']
})
export class AfficherprofileComponent implements OnInit {
 
  profile:any;
 username:string;
 role:string;
 nom:string;
 prenom:string;
pathPhoto:string;

  constructor() { }

  ngOnInit() {

    this.profile = JSON.parse(localStorage.getItem('profile')) 
    this.username = this.profile.username;
    this.role = this.profile.role;
    this.nom = this.profile.profil.nom;
    this.prenom = this.profile.profil.prenom;
    this.pathPhoto = this.profile.profil.photoFilename;
  }

}
