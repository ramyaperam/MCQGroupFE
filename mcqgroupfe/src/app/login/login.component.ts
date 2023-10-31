import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Credentials } from '../credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = new Credentials
  error:boolean
  constructor(private app: AuthService, private http: HttpClient, private router: Router) {
  }

  login() {
  this.app.authenticate(this.credentials).subscribe(data=>{
    console.log(data.principal)
    this.redirectUser(data.principal.role);
    this.app.registerSuccessfulLogin(this.credentials,data.principal);
  },
  error=>{
    this.router.navigate(['login'])
  })
    
    return false;
  }

  redirectUser(role:string){
    if(role==='USER'){
      console.log("User")
      this.router.navigate(['user-landing'])
    }
    if(role==='ADMIN'){
      console.log("Admin")
      this.router.navigate(['user-landing'])
    }
  }
}
