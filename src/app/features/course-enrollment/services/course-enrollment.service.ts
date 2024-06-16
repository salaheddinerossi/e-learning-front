import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {CourseEnrollmentResponse} from "../models/CourseEnrollmentResponse";
import {StudentLessonResponse} from "../models/StudentLessonResponse";

@Injectable({
  providedIn: 'root'
})
export class CourseEnrollmentService {

  constructor(private api:ApiService) { }

  loadCourseEnrollment(courseId:number):Observable<ApiResponse<CourseEnrollmentResponse>>{
    return this.api.get(environment.services.enrollmentService,"enrollment/"+courseId)
  }

  loadStudentLesson(studentLessonId:number):Observable<ApiResponse<StudentLessonResponse>>{
    return this.api.get(environment.services.enrollmentService,"studentLesson/"+studentLessonId)

  }

}
