import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {ActivatedRoute} from "@angular/router";
import {CategoryCourses} from "../../models/CategoryCourses";
import {NavbarType} from "../../../../shared/enums/navbar-type";
import {environment} from "../../../../../environment";
import {CategoryService} from "../../services/category.service";
import {CategoryName} from "../../models/CategoryName";
import {ErrorData} from "../../../../shared/models/ErrorData";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.css'
})
export class CoursesPageComponent implements OnInit{

  categoryCourses:CategoryCourses = {
    id:0,
    title:"",
    description:"",
    courseResponses:[],
  }

  categoryNames:CategoryName[] = [];
  loading: boolean = true;

  constructor(
    private courseService:CourseService,
    private categoryService:CategoryService,
    private route: ActivatedRoute
  ) {
  }


  error:ErrorData = {
    errorTitle:environment.notFound.coursesNotFound,
    errorDescription:environment.notFound.coursesNoFoundDescription
  }
  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id');

    if (categoryId){
      this.getCategoryCourses(categoryId);
      this.getCategoriesBySubCategory(categoryId);
    }
  }

  getCategoryCourses(id:string){
    this.courseService.getCourseByCategoryId(id).subscribe(
      data => {

        this.loading = true;
        this.categoryCourses=data.data;
        this.loading = false;
      },
      error => {
        this.handleError(error);
      }
    )
  }

  getCategoriesBySubCategory(id:string){
    this.categoryService.getCategoriesNamesBySubCategory(id).subscribe(
      data => {
        this.categoryNames = data.data;
      },
      error => {
        console.log(error);
      }
    );

  }

  private handleError(error: HttpErrorResponse): void {
    this.error.errorCode = error.status;
    this.error.errorTitle = 'Error fetching Courses';
    this.error.errorDescription = error.error ? error.error.message : `An error occurred `;
    this.loading = false;
  }



  protected readonly environment = environment;
}
