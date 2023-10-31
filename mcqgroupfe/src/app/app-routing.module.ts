import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLandingComponent } from './user-landing/user-landing.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomePageComponent},
  {path:'user-landing',component:UserLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
