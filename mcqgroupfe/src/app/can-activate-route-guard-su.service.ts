import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteGuardSUService implements CanActivate {

  constructor(private auth:AuthService) { }

  canActivate(): boolean {
    console.log("AlwaysAuthGuard");
    return this.auth.isSU;
  }
}
