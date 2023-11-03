import { Component } from '@angular/core';
import { GetDetailsService } from '../get-details.service';
import { User } from '../user';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  selectedUser:User
  constructor(private detailsService:GetDetailsService,private registerService:RegisterService,private route:Router,private  auth:AuthService){}

  ngOnInit(){
    this.selectedUser=this.detailsService.getUser();
  }

  onSubmit(){

    console.log(this.selectedUser)
    this.registerService.editUser(this.selectedUser).subscribe(data=>{
      console.log(data)
      if(this.auth.isSU)
        this.route.navigate(['/su-landing']);
      if(this.auth.isAdmin)
         this.route.navigate(['/admin/users']);

    })
  
  }


}
