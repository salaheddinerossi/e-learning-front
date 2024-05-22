import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {Info} from "../models/Info";
import {ApiResponse} from "../../../shared/models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apiService:ApiService) { }

  loadPersonalInfo():Observable<ApiResponse<Info>>{
    return this.apiService.get(environment.services.profileManagementService,"profile")
  }

  changePersonalInfo(form:any):Observable<ApiResponse<any>>{
    return this.apiService.put(environment.services.profileManagementService,"changeInfo",form)
  }

  updatePassword(form:any){
    return this.apiService.post(environment.services.authenticationService,"changePassword",form)
  }

}
