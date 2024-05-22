import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {Course} from "../../../shared/models/Course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private apiService:ApiService) { }

  loadPublishedCourses():Observable<ApiResponse<Course[]>>{
    return this.apiService.get(environment.services.courseCreationService,"course/published");
  }
}
