import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../shared/models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private apiService:ApiService) {
  }

  createChat(studentLessonId:number){
    return this.apiService.post(environment.services.enrollmentService,"chat/"+studentLessonId,{})
  }

  askChat(question:string,studentLessonId:number):Observable<ApiResponse<string>>{
    return this.apiService.post(environment.services.enrollmentService,"chat/question/"+studentLessonId,{question:question})
  }
}
