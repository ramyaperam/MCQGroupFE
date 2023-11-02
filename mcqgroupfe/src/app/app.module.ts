import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserLandingComponent } from './user-landing/user-landing.component';

import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminTopicsComponent } from './admin-topics/admin-topics.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HttpInterceptorServiceService } from './http-interceptor-service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { SaLandingComponent } from './sa-landing/sa-landing.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { QuestionListComponent } from './question-list/question-list.component';
import { CanActivateRouteGuardSUService } from './can-activate-route-guard-su.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    UserLandingComponent,
    AdminLandingComponent,
    AdminTopicsComponent,
    AdminUsersComponent,
    UserRegisterComponent,
    AdminRegisterComponent,
    SaLandingComponent,
    EditUserComponent,

    QuestionListComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorServiceService,
    multi: true
  },CanActivateRouteGuardSUService],
  bootstrap: [AppComponent]
})
export class AppModule { }
