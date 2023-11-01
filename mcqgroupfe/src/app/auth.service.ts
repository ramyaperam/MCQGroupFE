import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Credentials } from './credentials';
import { Observable, map } from 'rxjs';
import { Principal } from './principal';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;
  public username: String;
  public password: String;
  authenticatedUser:string;
  userdetails:Principal;
  
  // credentials=new Credential();
  constructor(private http: HttpClient) { }
  authenticate(credentials:Credentials):Observable<Credentials> {
    const headers = new HttpHeaders(credentials ? {
      authorization : this.createBasicAuthToken(credentials.username,credentials.password)
  } : {});

  let formData: FormData = new FormData(); 
    formData.append('username', credentials.username); 
    formData.append('password', credentials.password); 
  return this.http.get<Credentials>('http://localhost:8081/', {headers: headers})
}

createBasicAuthToken(username: String, password: String) {
  return 'Basic ' + window.btoa(username + ":" + password)
}

registerSuccessfulLogin(credentials:Credentials,principal:Principal) {
  this.authenticatedUser= this.createBasicAuthToken(credentials.username,credentials.password)
  this.userdetails = principal
  this.authenticated=true;
}
getAuthenticatedUser():string{
  return this.authenticatedUser;
}
getPrincipal():Principal{
  return this.userdetails;
}
getUserDetails(id:number){
  const headers = new HttpHeaders( {
    authorization : this.getAuthenticatedUser()
} );
return this.http.get<Principal>(`http://localhost:8081/get/${id}`, {headers: headers})
}
}

