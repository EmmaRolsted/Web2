import { Component, OnInit, HostListener } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLoggedIn: boolean; 

  constructor(private authService: AuthenticationService,
     private router : Router,
    ) {
     
     }


  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout(){
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(["/login"]);

  }

}
