import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProfileService } from './profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  proForm:FormGroup;
  public pubFile:any=File;

  constructor(private _service:ProfileService, private _formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.proForm = this._formBuilder.group({
      nom : '',
      prenom:''
    })
  }

  onSelectFile(event){
    const file = event.target.files[0];
    this.pubFile=file;
  }


  editPro(){
 const formData = new FormData();
        // formData.append('user',JSON.stringify(user));
        formData.append('file',this.pubFile);
        formData.append('nom',this.proForm.value.nom);
        formData.append('prenom',this.proForm.value.prenom);

       console.log(formData)
    this._service.addPhotoProfile(formData).subscribe((file)=>{
      console.log(file)
      this.pubFile = file.filename;
      let  p = JSON.parse(localStorage.getItem('profile'));
      p.profil.photoFilename = this.pubFile;
      p.profil.nom = this.proForm.value.nom;
      p.profil.prenom = this.proForm.value.prenom;
      localStorage.setItem('profile',JSON.stringify(p));
      console.log(p)
      this.router.navigate(['/profile'])

    });
  }
}
