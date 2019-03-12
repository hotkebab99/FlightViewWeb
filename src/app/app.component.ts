import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FlightView';
  auth: boolean;

  constructor(private authService: AuthService) {
    this.auth = this.authService.getAuth();
    this.authService.getAuthObs().subscribe(b => this.auth = b);
  }

  changeAuth() {
    this.authService.changeAuth();
  }
}
