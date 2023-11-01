import { Component } from '@angular/core';
import { GetDetailsService } from '../get-details.service';
import { User } from '../user';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  selectedUser:User
  constructor(private detailsService:GetDetailsService,private registerService:RegisterService,private route:Router){}

  ngOnInit(){
    this.selectedUser=this.detailsService.getUser();
  }

  onSubmit(){
    console.log(this.selectedUser)
    this.registerService.editAdmin(this.selectedUser).subscribe(data=>{
      console.log(data)
      this.route.navigate(['su-landing']);
    })
  
  }


}
