import {Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['./login.component.css']
})
export class LoginComponent implements OnInit {


logForm:FormGroup;

  slideConfig2 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    dots: true,
  };

  constructor(private _service:UserService, private _formBuilder:FormBuilder,private router:Router) {
  }

  ngOnInit() {
    this.logForm = this._formBuilder.group({
     username: '',
     password : '' 
   
    } )
  }

  login(){
    this._service.login(this.logForm.value.username,this.logForm.value.password);
//console.log(this.logForm) 
 }

}
