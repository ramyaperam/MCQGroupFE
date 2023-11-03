
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',

import { Component, Input } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'header',

  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  constructor(private auth:AuthService){}
  loggedIn=false;
  isUser:boolean
  isAdmin:boolean
  isSU:boolean
  dash:string;
  ngOnInit(){
    this.loggedIn=this.auth.authenticated;
    this.isUser = this.auth.isUser;
    this.isAdmin = this.auth.isAdmin;
    this.isSU  = this.auth.isSU;
    console.log("Hi");
    if(this.isSU) this.dash='/su-landing'
    if(this.isUser) this.dash='/user-landing'
    if(this.isAdmin) this.dash='/admin-landing'
    
  }
  @Input() headerType = 1

  logout(){
    console.log("logout");
    
    this.auth.logout();
  }

}
