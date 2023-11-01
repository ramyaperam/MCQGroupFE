import { Component } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
userDetails=new User();

constructor(private register:RegisterService,private router:Router) {}
onSubmit(){
  console.log(this.userDetails)
  this.register.createUser(this.userDetails).subscribe(data=>{
    console.log(data)
    this.router.navigate(['su-landing'])
  })

}
}
