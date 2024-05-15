import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {SkillResponse} from "../models/SkillResponse";
import {ApiResponse} from "../../../shared/models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private apiService:ApiService) { }

  getSkills(): Observable<ApiResponse<SkillResponse[]>>{
    return this.apiService.get(environment.services.skillService,"");
  }

  createSkill(form:any) :Observable<ApiResponse<SkillResponse>>{
    return this.apiService.post(environment.services.skillService,"",form)
  }

  modifySkill(form:any,id:number):Observable<ApiResponse<SkillResponse>>{
    return this.apiService.put(environment.services.skillService,""+id,form)
  }

  approveSkill(id:number){
    return this.apiService.put(environment.services.skillService,'approve/'+id,{})
  }

  refuseSkill(id:number){
    return this.apiService.put(environment.services.skillService,'refuse/'+id,{})
  }

}
