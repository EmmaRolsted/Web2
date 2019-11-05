import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { GlobalVariable } from '../../globals';

@Injectable({
  providedIn: 'root'
})
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
            

        register(user: User) {
        const url = `${this.baseUrl}register`;
        return this.http.post<string>(url, user);
        }

        loginAPI(user: User){
          const url = `${this.baseUrl}login`;
          return this.http.post<string>(url, user);
        }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
} 