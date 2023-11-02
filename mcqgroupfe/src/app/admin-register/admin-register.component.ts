import { Component } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {
  userDetails=new User();

  constructor(private register:RegisterService,private router:Router) {}
  onSubmit(){
    console.log(this.userDetails)
    this.register.createAdmin(this.userDetails).subscribe(data=>{
      this.router.navigate(['su-landing'])
      console.log(data)
    })
  
  }
}
