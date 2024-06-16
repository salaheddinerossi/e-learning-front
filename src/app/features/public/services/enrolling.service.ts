import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {Course} from "../../../shared/models/Course";
import {environment} from "../../../../environment";
import {CourseEnrollmentIds} from "../../course-enrollment/models/CourseEnrollmentIds";

@Injectable({
  providedIn: 'root'
})
export class EnrollingService {

  constructor(private apiService:ApiService) { }


  loadEnrolledCourses():Observable<ApiResponse<CourseEnrollmentIds[]>>{
    return  this.apiService.get(environment.services.enrollmentService,"enrollment/courseEnrollments")
  }

  enrollCourse(courseId:number):Observable<ApiResponse<number>>{
    return  this.apiService.post(environment.services.enrollmentService,"enrollment/"+courseId,{})
  }
}
