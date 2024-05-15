import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {Observable} from "rxjs";
import {CategoryWithParent} from "../../courseCreation/models/CategoryWithParent";
import {ApiResponse} from "../../../shared/models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apiService:ApiService) { }

  loadCategories():Observable<ApiResponse<CategoryWithParent[]>>{
    return this.apiService.get(environment.services.courseCreationService,"category/all");
  }

  createCategory(form:any):Observable<ApiResponse<CategoryWithParent>> {
    return this.apiService.post(environment.services.courseCreationService,"category/",form);
  }

  updateCategory(form:any,id:number):Observable<ApiResponse<CategoryWithParent>>{
    return this.apiService.put(environment.services.courseCreationService,"category/"+id,form)
  }
}
