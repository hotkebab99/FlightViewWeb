import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: boolean = true;
  private authObs: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  changeAuth() {
    this.auth = !this.auth;
    this.authObs.emit(this.auth);
  }

  getAuth() {
    return this.auth;
  }

  getAuthObs() {
    return this.authObs;
  }
}
