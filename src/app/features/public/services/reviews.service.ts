import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor( private apiService:ApiService) { }

  getReviews(courseId:string){
    return this.apiService.get<any>(environment.services.enrollmentService,"review/"+courseId)
  }
}
