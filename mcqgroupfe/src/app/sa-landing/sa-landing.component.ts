import { Component } from '@angular/core';
import { Principal } from '../principal';
import { GetDetailsService } from '../get-details.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sa-landing',
  templateUrl: './sa-landing.component.html',
  styleUrls: ['./sa-landing.component.css']
})
export class SaLandingComponent {
allUsers:User[];
allAdmins:User[];
currentUser:Principal;
constructor(private getDetails:GetDetailsService,private router:Router,private auth:AuthService){}
ngOnInit(){
    this.currentUser = this.auth.getPrincipal()
    this.getDetails.getAdmins().subscribe(data=>{
      this.allAdmins=data;
      console.log(data);
    })
    this.getDetails.getUsers().subscribe(data=>{
      this.allUsers=data;
      console.log(data)
    })
}
editUser(user:User){
  console.log(user);
  this.getDetails.setUser(user);
  this.router.navigate(['edit-user']);
  
}
deleteUser(user:User){
  
  this.getDetails.deleteUser(user.userId).subscribe(data=>{
    this.getDetails.getAdmins().subscribe(data=>{
      this.allAdmins=data;
      console.log(data);
    })
    this.getDetails.getUsers().subscribe(data=>{
      this.allUsers=data;
      console.log(data)
    })
  })

  
}
addAdmin(){
  this.router.navigate(['register-admin'])
}
addUser(){
  this.router.navigate(['register-user'])
}
}
