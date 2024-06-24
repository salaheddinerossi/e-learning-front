import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CourseService } from "../../services/course.service";
import { CourseDetails } from "../../../../shared/models/CourseDetails";
import { environment } from "../../../../../environment";
import { Review } from "../../models/Review";
import { ReviewsService } from "../../services/reviews.service";
import { ErrorData } from "../../../../shared/models/ErrorData";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthenticationService } from "../../../../core/services/authentication.service";
import { User } from "../../../../shared/models/User";
import { EnrollingService } from "../../services/enrolling.service";
import { ToastrService } from "ngx-toastr";
import { CourseEnrollmentIds } from "../../../course-enrollment/models/CourseEnrollmentIds";

@Component({
  selector: 'app-course-details-page',
  templateUrl: './course-details-page.component.html',
  styleUrl: './course-details-page.component.css'
})
export class CourseDetailsPageComponent implements OnInit {

  constructor(
    private courseService: CourseService,
    private activatedRoute: ActivatedRoute,
    private reviewsService: ReviewsService,
    private authenticationService: AuthenticationService,
    private enrollingService: EnrollingService,
    private router: Router,
    private toastService: ToastrService,
    private cdr: ChangeDetectorRef
  ) { }

  error: ErrorData = {
    errorTitle: environment.notFound.courseNotFound,
    errorDescription: environment.notFound.courseNoFoundDescription
  }
  loading: boolean = true;
  isError = false;
  isStudentLoggedIn = false;
  isStudentHasCourse = false;
  courseEnrollmentId = 0;



  courseDetails: CourseDetails = {
    id: 0,
    image: "",
    title: "",
    about: "",
    requirements: "",
    languageEnum: "",
    courseLevelEnum: "",
    skillId: 0,
    chapterCourseResponses: [],
    skillName: ""
  };

  enrolledCourses: CourseEnrollmentIds[] = []

  reviews: Review[] = [];

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.getCourseDetails(id);
    }
    this.authenticationService.currentUser.subscribe(
      (user: User | null) => {
        if (user) {
          this.switchUserRole(user.role);
        }
      }
    );
    this.loadEnrolledCourses();
  }

  getCourseDetails(id: string) {
    this.loading = true;
    this.courseService.getCourseDetails(id).subscribe(
      data => {
        this.courseDetails = data.data;
        this.getReviews(id);
        this.loading = false;
        this.checkCourseInCourseEnrollments();
        this.cdr.detectChanges();
      },
      error => {
        this.handleError(error);
        this.isError = true;
        this.cdr.detectChanges();
      }
    );
  }

  getReviews(id: string) {
    this.reviewsService.getReviews(id).subscribe(
      data => {
        this.reviews = data.data;
        this.cdr.detectChanges();
      }
    );
  }

  private handleError(error: HttpErrorResponse): void {
    this.error.errorCode = error.status;
    this.error.errorTitle = 'Error fetching the course';
    this.error.errorDescription = error.error ? error.error.message : `An error occurred `;
    this.loading = false;
    this.cdr.detectChanges();
  }

  switchUserRole(role: string) {
    this.isStudentLoggedIn = role === "ROLE_STUDENT";
    this.cdr.detectChanges();
  }

  checkCourseInCourseEnrollments() {
    this.enrolledCourses.forEach(course => {
      if (course.course_id === this.courseDetails.id) {
        this.isStudentHasCourse = true;
        this.courseEnrollmentId = course.course_enrollment_id;
      }
    });
    this.cdr.detectChanges();
  }

  loadEnrolledCourses() {
    this.enrollingService.loadEnrolledCourses().subscribe(
      data => {
        if (data.data) {
          this.enrolledCourses = data.data;
          console.log(data.data);
          this.checkCourseInCourseEnrollments();
          this.cdr.detectChanges();
        }
      }
    );
  }

  protected readonly environment = environment;

  enrollCourse() {
    this.enrollingService.enrollCourse(this.courseDetails.id).subscribe(
      data => {
        console.log("hellooooooo")
        if (data.data) {
          console.log("hellooooooo")
          console.log(data.data);
          this.router.navigate(["/enrollment/" + data.data]);
          this.toastService.success("course has been enrolled");
          this.loadEnrolledCourses();
          this.cdr.detectChanges();
        }
      }
    );
  }

  mustLogin() {
    this.toastService.warning("You should login to enroll the course")
  }
}
