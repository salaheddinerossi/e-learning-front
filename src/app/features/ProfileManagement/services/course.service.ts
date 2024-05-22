import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {Course} from "../../../shared/models/Course";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private apiService:ApiService) { }

  loadTeacherCourses():Observable<ApiResponse<Course[]>>{
    return this.apiService.get(environment.services.courseCreationService,"course/teacher/courses");
  }

  loadEnrolledCourses():Observable<ApiResponse<Course[]>>{
    return this.apiService.get(environment.services.enrollmentService,"enrollment/enrolledCourses");
  }

}
