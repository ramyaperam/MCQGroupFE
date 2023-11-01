import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Principal } from './principal';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {
selectedUser:User
  constructor(private http: HttpClient,private auth:AuthService) { }


  getUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8081/getUsers')
  }

  getAdmins():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8081/getAdmins')
  }

  deleteUser(id:number){
    return this.http.delete(`http://localhost:8081/delete/${id}`)
  }

  setUser(user:User){
    this.selectedUser=user
  }
  getUser():User{
    return this.selectedUser
  }

 
}
