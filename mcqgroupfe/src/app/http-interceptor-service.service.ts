import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorServiceService implements HttpInterceptor {

  constructor(private auth:AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("intercepted")
    if (this.auth.authenticated && req.url.indexOf('basicauth') === -1) {
        console.log("authenticated")
        const authReq = req.clone({
            headers: new HttpHeaders({
                
                'Authorization': `${this.auth.getAuthenticatedUser()}`
            })
        });
        return next.handle(authReq);
    } else {
        return next.handle(req);
    }
}
}
