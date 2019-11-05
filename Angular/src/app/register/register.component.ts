import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../auth/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import {User} from '../models/user'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : User = {}
  constructor(private authservice: AuthenticationService) { }

  ngOnInit() {
  }

  register(){
    this.authservice.register(this.user).subscribe(data => {
      this.authservice.saveToken(data);
      return true;
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
      return false;
      });
  }

}
