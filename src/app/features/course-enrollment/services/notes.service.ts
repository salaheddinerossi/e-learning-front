import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {CourseNotesResponse} from "../models/CourseNotesResponse";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private apiService:ApiService) { }

  addNote(studentLessonId:number,note:string):Observable<ApiResponse<CourseNotesResponse>>{
    return this.apiService.post(environment.services.enrollmentService,"notes/"+studentLessonId,{record:note})
  }
}
