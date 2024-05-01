import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {Observable} from "rxjs";

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



}
