import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Credentials } from './credentials';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient,private auth:AuthService) { }

  createUser(user:User){
    
      const headers = new HttpHeaders( {
        authorization : this.auth.getAuthenticatedUser()
    });
    console.log(this.auth.getAuthenticatedUser());
    return this.http.post<any>(`http://localhost:8081/createUser`, user)
  }
  createAdmin(user:User){
    
    const headers = new HttpHeaders( {
      authorization : this.auth.getAuthenticatedUser()
  });

  console.log(this.auth.getAuthenticatedUser());
  return this.http.post<any>(`http://localhost:8081/createAdmin`, user)
}
editAdmin(user:User){
    
console.log(this.auth.getAuthenticatedUser());
return this.http.post<any>(`http://localhost:8081/editAdmin`, user)
}
}
