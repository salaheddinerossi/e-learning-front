import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private apiService:ApiService) { }

  getCourseByCategoryId(id:string){
    return this.apiService.get<any>(environment.services.courseCreationService,"course/categoryCourses/"+id)
  }

  getCourseDetails(id:string){
    return this.apiService.get<any>(environment.services.courseCreationService,"course/" + id)
  }


}
