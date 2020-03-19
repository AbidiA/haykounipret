import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

username:string;
t1:any;
t2:any;
info:any;

  constructor(private httpClient:HttpClient, private router:Router) { }


  
  getToken(): string {
    return localStorage.getItem('token');
  }

  login(username: string, password: string) {
 
      return this.httpClient.post('https://www.back.hayko-crm.dev/oauth/v2/token', {
        "grant_type":"password",
        "client_id":"1_3bcbxd9e24g0gk4swg0kwcwg4o8k8g4g888kwc44gcc0gwwk4",
          "client_secret":"4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k",
          "username":username,
          "password":password
       },
       {
        headers:{
          'Content-Type':"application/json"
        }
          })
      .subscribe(
        data => {
          this.t2=data;
          this.username = username ;
          localStorage.setItem('username',username);

          console.log(data)
         // localStorage.setItem('username',username);
       

         localStorage.setItem('token', data['access_token']);      

         if(this.t2.error != null){
          alert(this.t2.error)
        }else{         
          this.getInfo().subscribe(e=>{this.info= e
            localStorage.setItem('profile',JSON.stringify(this.info))
            this.router.navigate(['/listFiche']);

          });
  

        }
         
        this.getInfo().subscribe(e=>{this.info= e
          localStorage.setItem('profile',JSON.stringify(this.info))

        });

        }
      );
    }

 
    signup(username: string, password: string,role:string) {
    
  
      return this.httpClient.post("https://www.back.hayko-crm.dev/User/Register", {
        "username" : username,
        "password" : password,
        "role" : [
          {
          "role_id": role
          }
        ]
        
     })
      .subscribe(
        data => {
          this.t1=data
          if(this.t1.errors != null){
            alert(this.t1.errors)
          }else{         
            this.router.navigate(['/users/listUsers']);
          }
        });

    }

    getInfo(){
      return this.httpClient.get("https://www.back.hayko-crm.dev/User/getByYousername/"+localStorage.getItem('username'))
    }
    
}
