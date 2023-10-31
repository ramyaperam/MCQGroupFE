import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mcqgroupfe';

  constructor(private app: AuthService,private http: HttpClient){ }
 
}
