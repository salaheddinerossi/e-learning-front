import {Injectable, OnInit} from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {SkillName} from "../models/SkillName";
import {Observable} from "rxjs";
import {CategoryWithParent} from "../models/CategoryWithParent";

@Injectable({
  providedIn: 'root'
})
export class CourseCreationFormService {

  constructor(private apiService:ApiService) { }

  loadSkillsOptions():Observable<ApiResponse<SkillName[]>>{
    return this.apiService.get(environment.services.skillService,"names");
  }

  loadCategories():Observable<ApiResponse<CategoryWithParent[]>>{
    return this.apiService.get(environment.services.courseCreationService,"category/all");
  }


}
