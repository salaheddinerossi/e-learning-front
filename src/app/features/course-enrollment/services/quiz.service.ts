import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {QuizCorrectionDto} from "../models/QuizCorrectionDto";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {QuizCorrectionResponse} from "../models/QuizCorrectionResponse";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private api:ApiService) { }

  correctQuiz(quizCorrectionDto:QuizCorrectionDto):Observable<ApiResponse<QuizCorrectionResponse>>{
    return this.api.post(environment.services.enrollmentService,"correct/",quizCorrectionDto)
  }

}
