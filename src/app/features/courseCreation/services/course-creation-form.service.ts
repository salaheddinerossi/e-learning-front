import {Injectable, OnInit} from '@angular/core';
import {ApiService} from "../../../core/services/api.service";
import {environment} from "../../../../environment";
import {ApiResponse} from "../../../shared/models/ApiResponse";
import {SkillName} from "../models/SkillName";
import {Observable} from "rxjs";
import {CategoryWithParent} from "../models/CategoryWithParent";
import {ChapterWithParentId} from "../models/ChapterWithParentId";

@Injectable({
  providedIn: 'root'
})
export class CourseCreationFormService {

  constructor(private apiService:ApiService) { }

  loadSkillsOptions():Observable<ApiResponse<SkillName[]>>{
    return this.apiService.get(environment.services.skillService,"names");
  }

  loadCategories():Observable<ApiResponse<CategoryWithParent[]>>{
    return this.apiService.get(environment.services.courseCreationService,"category/all");
  }

  createCourse(form:any):Observable<ApiResponse<any>>{
    return this.apiService.post(environment.services.courseCreationService,"course/",form);
  }

  getCourseById(id:string):Observable<ApiResponse<any>>{
    return this.apiService.get(environment.services.courseCreationService,"course/teacherCourse/"+id);
  }

  createChapter(form:any):Observable<ApiResponse<ChapterWithParentId>>{
    return this.apiService.post(environment.services.courseCreationService,"chapter/",form);
  }

  loadCourse(id:string):Observable<ApiResponse<any>>{
    return this.apiService.get(environment.services.courseCreationService,"course/teacherCourse/"+id);
  }

  updateCourse(form:any,id:number|string):Observable<ApiResponse<any>>{
    return this.apiService.put(environment.services.courseCreationService,"course/"+id,form);
  }

  loadChapter(id:number):Observable<ApiResponse<any>>{
    return this.apiService.get(environment.services.courseCreationService,"chapter/"+id);
  }

  updateChapter(form:any,id:number):Observable<ApiResponse<any>>{
    return this.apiService.put(environment.services.courseCreationService,"chapter/"+id,form);
  }

  deleteChapter(chapterId:number){
    return this.apiService.delete(environment.services.courseCreationService,"chapter/"+chapterId);
  }

  deleteLesson(lessonId:number){
    return this.apiService.delete(environment.services.courseCreationService,"lesson/"+lessonId);
  }

  publishCourse(id:number){
    return this.apiService.put(environment.services.courseCreationService,"course/publish/"+id,{});
  }


}
