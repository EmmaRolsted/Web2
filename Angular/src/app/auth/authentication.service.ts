import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { GlobalVariable } from '../../globals';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private baseUrl =  GlobalVariable.BASE_API_URL + "users/api/";
    public redirectUrl: string;
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public isLoggedIn() {
        const token = this.getToken();
        if (token) {
        const payload = JSON.parse(window.atob(token.split('.')[1]));
        return payload.exp > Date.now() / 1000;
        } else {
        return false;
        }
      }

    public getCurrentUser(): User {
        if (this.isLoggedIn()) {
        const token = this.getToken();
        const payload = JSON.parse(window.atob(token.split('.')[1]));
        const user = new User();
        user.username = payload.name;
        return user;
        } else {
        return;
        }
    }
        
    public getToken() {
        if (window.localStorage['loc8r-token']) {
        return window.localStorage['loc8r-token'];
        } else {
        return '';
        }
        }

        public saveToken(token: string) {
            window.localStorage['loc8r-token'] = token;
            }
            

    public register(user: User) {
        const url = `${this.baseUrl}/register`;
        this.http.post<any>(url, user).subscribe(data => {
        this.saveToken(data.token);
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

        login(user: User){
          const url = `${this.baseUrl}/login`;
          return this.http.post<string>(url, user);
        }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
} 