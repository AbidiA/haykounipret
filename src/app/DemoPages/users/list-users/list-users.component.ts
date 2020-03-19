import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUser:any;

  constructor(private _service:UsersService,private router:Router) { }

  ngOnInit() {

    this._service.getAllusers().subscribe(data=>{
      this.listUser = data ;
      console.log(this.listUser)
    })

  }

  edit(i:any){
  
    this.router.config.push(i)
    
    this.router.navigate(['/users/editUsers'])
   }
}
