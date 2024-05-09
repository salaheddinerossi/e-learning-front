import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {Observable} from "rxjs";
import {LessonDetails} from "../models/LessonDetails";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private api:ApiService) { }

  createLesson(form:any):Observable<ApiResponse<any>>{
    return this.api.post(environment.services.courseCreationService,"lesson/" ,form)
  }

  regenerateSummary(form:any,id:number):Observable<ApiResponse<any>>{
    return this.api.post(environment.services.courseCreationService,"lesson/summary/"+id,form)
  }

  getLessonDetails(id:number):Observable<ApiResponse<LessonDetails>>{
    return this.api.get(environment.services.courseCreationService,'lesson/teacher/'+id);
  }

  updateCourseDetails(id:number,form:any){
    return this.api.put(environment.services.courseCreationService,"lesson/" +id,form)
  }





}
