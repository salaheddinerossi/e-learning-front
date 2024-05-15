import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {TeacherResponse} from "../models/TeacherResponse";
import {ApiResponse} from "../../../shared/models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private apiService:ApiService) { }

  getUnreviewedTeachers():Observable<ApiResponse<TeacherResponse[]>>{
    return this.apiService.get(environment.services.profileManagementService,"teacher/accounts/unreviewed");
  }

  getAllTeachers():Observable<ApiResponse<TeacherResponse[]>>{
    return this.apiService.get(environment.services.profileManagementService,"teacher/accounts/all")
  }

  activateAccount(id:number|string){
    return this.apiService.put(environment.services.profileManagementService,"teacher/activate/"+ id,{})
  }
  deactivateAccount(id:number|string){
    return this.apiService.put(environment.services.profileManagementService,"teacher/deactivate/"+ id,{})
  }



}
