import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminTopicsComponent } from './admin-topics/admin-topics.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomePageComponent},
  {path:'user-landing',component:UserLandingComponent},
  { path: 'admin', component: AdminLandingComponent },
  { path: 'admin/topics', component: AdminTopicsComponent },
  { path: 'admin/users', component: AdminUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
