import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {BehaviorSubject, map, Observable} from 'rxjs';
import {Login} from "../../shared/models/Login";
import {environment} from "../../../environment";
import {ToastrService} from "ngx-toastr";
import {User} from "../../shared/models/User";
import {Router} from "@angular/router";
import {ApiResponse} from "../../shared/models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }


  constructor(private apiService: ApiService,private router:Router,private toastrService:ToastrService) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(formData: Login,userType:string):Observable<any>{
    return this.apiService.post(environment.services.authenticationService,"login/"+userType,formData)
        .pipe(map(response => {
          const user: ApiResponse<User> = response as ApiResponse<User>;
          localStorage.setItem('currentUser', JSON.stringify(user.data));
          this.currentUserSubject.next(user.data as User);
          return user.data;
        }));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/'])
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }


}
