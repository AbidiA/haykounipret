import {Component, OnInit} from '@angular/core';
import {ThemeOptions} from '../../../../../theme-options';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
})
export class UserBoxComponent implements OnInit {
 
  profile:any;
 username:string;
 role:string;
 nom:string;
 prenom:string;
pathPhoto:string;
  toggleDrawer() {
    this.globals.toggleDrawer = !this.globals.toggleDrawer;
  }

  constructor(public globals: ThemeOptions, private router:Router) {
  }

  ngOnInit() {

    this.profile = JSON.parse(localStorage.getItem('profile')) 
    this.username = this.profile.username;
    this.role = this.profile.role;
    this.nom = this.profile.profil.nom;
    this.prenom = this.profile.profil.prenom;
    this.pathPhoto = this.profile.profil.photoFilename;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/pages/login']);
  }
}
