import { Injectable } from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private  apiService:ApiService) { }

  getCategoriesNamesBySubCategory(id:number){
    return this.apiService.get<any>(environment.services.courseCreationService,"category/parentCategories/" + id );
  }
}
