import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile:{};
  constructor(private _httpClient: HttpClient) {

    this.profile = JSON.parse(localStorage.getItem('profile')) 
    console.log(this.profile['id'])
   }

  
  addPhotoProfile(formData:FormData):Observable<any>{

    return this._httpClient.post<any>("https://www.back.hayko-crm.dev/User/Update/"+this.profile['id'],
      formData,
      
    )
   
  }

}
