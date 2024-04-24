import { Injectable } from '@angular/core';
import {environment} from "../../../../environment";
import {ApiService} from "../../../core/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private apiService:ApiService) { }

  signUp(userType:string,formData:any){
    return this.apiService.post(environment.services.authenticationService,'register/'+userType,formData);
  }
}

