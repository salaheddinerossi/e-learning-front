import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {LessonDetails} from "../models/LessonDetails";

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  constructor(private apiService:ApiService) { }

  loadVideo(lessonId:number):Observable<ApiResponse<LessonDetails>>{
    return this.apiService.get(environment.services.courseCreationService,"lesson/"+lessonId)
  }
}
