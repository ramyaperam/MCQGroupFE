import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminTopicsComponent } from './admin-topics/admin-topics.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';


import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { SaLandingComponent } from './sa-landing/sa-landing.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { CanActivateRouteGuardSUService } from './can-activate-route-guard-su.service';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomePageComponent},
  {path:'user-landing',component:UserLandingComponent},
  { path: 'admin', component: AdminLandingComponent },
  { path: 'admin/topics', component: AdminTopicsComponent },
  { path: 'admin/users', component: AdminUsersComponent },
  {path:'register-user',component:UserRegisterComponent},

  {path:'register-admin',component:AdminRegisterComponent},
  {path:'su-landing',component:SaLandingComponent},
  {path:'edit-user',component:EditUserComponent},
  { path: 'questions/:topicId', component: QuestionListComponent },

  {path:'register-admin',component:AdminRegisterComponent,canActivate:[CanActivateRouteGuardSUService]},
  {path:'su-landing',component:SaLandingComponent,canActivate:[CanActivateRouteGuardSUService]},
  {path:'edit-user',component:EditUserComponent,canActivate:[CanActivateRouteGuardSUService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
