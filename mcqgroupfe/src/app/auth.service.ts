import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Credentials } from './credentials';
import { Observable, map } from 'rxjs';
import { Principal } from './principal';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;
  public username: String;
  public password: String;
  authenticatedUser:string;
  userdetails:Principal;
  isUser:boolean
  isAdmin:boolean
  isSU:boolean
  // credentials=new Credential();
  constructor(private http: HttpClient,private router:Router) { }
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
  console.log(principal.role);
  if(principal.role==='USER') this.isUser=true
  if(principal.role==='ADMIN') this.isAdmin=true
  if(principal.role==='SU') {
    this.isSU=true
    console.log(this.isSU);
    
  }
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
logout(){
  this.isAdmin=this.isSU=this.isUser=false;
  this.authenticated=false; 
  console.log("Logout");
  
  this.http.get(`http://localhost:8081/logout`).subscribe(data=>{
    this.router.navigate(['/'])
  },
  error=>{
    this.router.navigate(['/'])
  })
  
}
}

