import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {Skill} from "../models/Skill";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private apiService:ApiService) { }

  loadStudentSkills():Observable<ApiResponse<Skill[]>>{
    return this.apiService.get(environment.services.skillService,"studentSkills")
  }
}
