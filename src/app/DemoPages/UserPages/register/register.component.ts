import {Component, OnInit} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  slideConfig2 = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 500,
    dots: false,
  };

username : string;
role : string;
password:string;
  constructor(private _service : UserService) {
  }

  ngOnInit() {
    this.addresses=  {
     
    }
  }


  public addresses: {}
  

  addUser(){
this._service.signup(this.username,this.password,this.role) 
 }
}
