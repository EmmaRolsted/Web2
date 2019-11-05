import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../auth/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import {User} from '../models/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User = {}
  hide = true;

  constructor(private authservice: AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    console.log(this.user);
    console.log(this.authservice);
    this.authservice.loginAPI(this.user).subscribe(body => {
      console.log(body);
      this.authservice.saveToken(body);
      },
      // Errors will call this callback instead:
      (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', err.error.message);
      } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
      });
  }

}
