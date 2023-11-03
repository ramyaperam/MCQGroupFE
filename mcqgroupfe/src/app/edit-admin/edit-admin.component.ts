import { Component } from '@angular/core';
import { User } from '../user';
import { GetDetailsService } from '../get-details.service';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent {
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
