import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication/AuthenticationService';
import { UserService } from './services/user/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TechnikonFrontEnd';

  constructor(public authenticationService: AuthenticationService, private router: Router) {}

 

  logout() {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
