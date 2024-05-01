import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/course.service";
import {CourseDetails} from "../../../../shared/models/CourseDetails";
import {NavbarType} from "../../../../shared/enums/navbar-type";
import {environment} from "../../../../../environment";
import {Review} from "../../models/Review";
import {ReviewsService} from "../../services/reviews.service";
import {ErrorData} from "../../../../shared/models/ErrorData";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrl: './course-details-page.component.css'
})
export class CourseDetailsPageComponent implements OnInit{

  constructor(
    private courseService:CourseService,
    private activatedRoute:ActivatedRoute,
    private reviewsService:ReviewsService
  ) {
  }

  error:ErrorData = {
    errorTitle:environment.notFound.courseNotFound,
    errorDescription:environment.notFound.courseNoFoundDescription
  }
  loading:boolean=true;
  isError=false;



  courseDetails:CourseDetails={
    id:0,
    image:"",
    title:"",
    about:"",
    requirements:"",
    languageEnum:"",
    courseLevelEnum:"",
    skillId:0,
    chapterCourseResponses:[],
    skillName:""
  };

  reviews:Review[]=[];

  ngOnInit(): void {
    const id =this.activatedRoute.snapshot.paramMap.get("id");
    if (id){
      this.getCourseDetails(id);
    }
  }

  getCourseDetails(id:string){
    this.loading=true;
    this.courseService.getCourseDetails(id).subscribe(
      data => {
        this.courseDetails=data.data;
        this.getReviews(id);
        this.loading=false;
      },
      error => {
        this.handleError(error)
        this.isError=true;
      }
    );
  }

  getReviews(id:string){
    this.reviewsService.getReviews(id).subscribe(
      data => {
        this.reviews = data.data;
      }
    );
  }

  private handleError(error: HttpErrorResponse): void {
    this.error.errorCode = error.status;
    this.error.errorTitle = 'Error fetching the course';
    this.error.errorDescription = error.error ? error.error.message : `An error occurred `;
    this.loading = false;
  }


  protected readonly environment = environment;
}
