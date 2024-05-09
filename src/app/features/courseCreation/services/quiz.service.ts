import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {MultiChoiceQuiz} from "../models/quizzes/MultiChoiceQuiz";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {Observable} from "rxjs";
import {TrueFalseQuiz} from "../models/quizzes/TrueFalseQuiz";
import {ExplanatoryQuiz} from "../models/quizzes/ExplanatoryQuiz";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private apiService:ApiService) { }

  updateMultipleChoiceQuiz(form:any,id:number):Observable<ApiResponse<MultiChoiceQuiz>>{
    return this.apiService.put(environment.services.courseCreationService,"quiz/multipleChoice/modify/"+id,form);
  }

  updateTrueFalseQuiz(form:any,id:number):Observable<ApiResponse<TrueFalseQuiz>> {
    return  this.apiService.put(environment.services.courseCreationService,"quiz/TrueFalse/modify/"+id,form);
  }

  updateExplanatoryQuiz(form:any,id:number):Observable<ApiResponse<ExplanatoryQuiz>>{
    return this.apiService.put(environment.services.courseCreationService,"quiz/explanatory/modify/"+id,form);
  }

  createMultipleChoiceQuiz(lessonId:number):Observable<ApiResponse<MultiChoiceQuiz>>{
    return this.apiService.post(environment.services.courseCreationService,"quiz/multipleChoice/"+lessonId,{});
  }

  createTrueFalseQuiz(lessonId:number):Observable<ApiResponse<TrueFalseQuiz>>{
    return this.apiService.post(environment.services.courseCreationService,"quiz/TrueFalse/"+lessonId,{});
  }

    createExplanatoryQuiz(lessonId:number):Observable<ApiResponse<ExplanatoryQuiz>>{
        return this.apiService.post(environment.services.courseCreationService,"quiz/explanatory/"+lessonId,{});
    }
}
