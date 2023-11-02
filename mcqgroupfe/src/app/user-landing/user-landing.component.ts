import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Principal } from '../principal';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent {
  currentUser:Principal

  constructor(private app:AuthService) {}
  ngOnInit(){
    this.currentUser=this.app.getPrincipal();
    this.app.getUserDetails(this.currentUser.userId).subscribe(data=>{
      this.currentUser=data;
      console.log(this.currentUser);
    })
  }
}
