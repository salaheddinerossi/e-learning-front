import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private api:ApiService) { }


  createReview(form:any,enrollmentId:number){
    return this.api.post(environment.services.enrollmentService,"review/"+ enrollmentId,form)
  }
}
