import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { SaLandingComponent } from './sa-landing/sa-landing.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomePageComponent},
  {path:'user-landing',component:UserLandingComponent},
  {path:'register-user',component:UserRegisterComponent},
  {path:'register-admin',component:AdminRegisterComponent},
  {path:'su-landing',component:SaLandingComponent},
  {path:'edit-user',component:EditUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
