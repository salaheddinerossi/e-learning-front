import {Component, OnInit} from '@angular/core';
import {Course} from "../../../../shared/models/Course";
import {ToastrService} from "ngx-toastr";
import {CourseService} from "../../services/course.service";
import {environment} from "../../../../../environment";
import {FormGroup} from "@angular/forms";
import {Info} from "../../models/Info";
import {ProfileService} from "../../services/profile.service";

@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrl: './teacher-profile.component.css'
})
export class TeacherProfileComponent implements OnInit{

  personalInfo:Info={
    id:0,
    firstName:"",
    lastName:"",
    email:"",
  };

  allCourses:Course[]=[];


  draftedCourses:Course[] = []
  publishedCourses:Course[] = []
  approvedCourses:Course[] = []

  openTabIndex = 1;
  activeClasses = 'bg-primary text-white';
  inactiveClasses = 'text-body-color dark:text-dark-6 dark:hover:text-white hover:bg-primary hover:text-white';



  constructor(private toastService:ToastrService,private courseService:CourseService,private profileService:ProfileService) {
  }


  openTab(index: number): void {
    this.openTabIndex = index;
  }

  ngOnInit() {
    this.loadCourses();
    this.loadPersonalInfo();
  }




  setCourses(){
    this.draftedCourses = this.allCourses.filter(
        course => course && course.courseStatusEnum=="DRAFT"
    )

    this.publishedCourses = this.allCourses.filter(
        course => course && course.courseStatusEnum=="PUBLIC"
    )

    this.approvedCourses = this.allCourses.filter(
        course => course && course.courseStatusEnum=="APPROVED"
    )

  }

  submitInfoForm(form:FormGroup){
    this.profileService.changePersonalInfo(form.value).subscribe(
        ()=>{
          this.toastService.success("info have been updated")
        },error => {
          this.toastService.error(error.error)
        }
    )
  }


  updatePassword(form:FormGroup){
    this.profileService.updatePassword(form.value).subscribe(
        () => {
          this.toastService.success("password has been updated")
        },error => {
          this.toastService.error(error.error)
        }
    )
  }

  loadCourses(){
    this.courseService.loadTeacherCourses().subscribe(
        data => {
          if (data.data){
            this.allCourses=data.data;
            this.setCourses();
          }
        },error => {
          this.toastService.error(error.error)
        }
    )
  }

  loadPersonalInfo(){
    this.profileService.loadPersonalInfo().subscribe(
        data=>{
          if (data.data){
            this.personalInfo=data.data;
          }
        }
    )
  }

  protected readonly environment = environment;


}
