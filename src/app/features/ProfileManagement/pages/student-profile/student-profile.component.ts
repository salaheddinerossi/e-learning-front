import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {ToastrService} from "ngx-toastr";
import {CourseService} from "../../services/course.service";
import {Course} from "../../../../shared/models/Course";
import {ProfileService} from "../../services/profile.service";
import {FormGroup} from "@angular/forms";
import {Info} from "../../models/Info";
import {Skill} from "../../models/Skill";
import {SkillService} from "../../services/skill.service";

@Component({
    selector: 'app-student-profile',
    templateUrl: './student-profile.component.html',
    styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent implements OnInit {


    courses:Course[] = [];
    skills:Skill[] = [];

    openTabIndex = 1;
    activeClasses = 'bg-primary text-white';
    inactiveClasses = 'text-body-color dark:text-dark-6 dark:hover:text-white hover:bg-primary hover:text-white';

    openTab(index: number): void {
        this.openTabIndex = index;
    }


    constructor(private courseService:CourseService, private profileService: ProfileService,private skillService:SkillService, private toastService: ToastrService) {
    }

    ngOnInit() {
        this.loadPersonalInfo();
        this.loadCourses();
        this.loadSkills();
    }

    personalInfo: Info = {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
    };




    updatePassword(form: FormGroup) {
        this.profileService.updatePassword(form.value).subscribe(
            () => {
                this.toastService.success("password has been updated")
            }, error => {
                this.toastService.error(error.error)
            }
        )
    }

    submitInfoForm(form: FormGroup) {
        this.profileService.changePersonalInfo(form.value).subscribe(
            () => {
                this.toastService.success("info have been updated")
            }, error => {
                this.toastService.error(error.error)
            }
        )
    }


    loadPersonalInfo() {
        this.profileService.loadPersonalInfo().subscribe(
            data => {
                if (data.data) {
                    this.personalInfo = data.data;
                }
            }
        )
    }

    loadCourses(){
        this.courseService.loadEnrolledCourses().subscribe(
            data =>{
                if(data.data){
                    this.courses = data.data;
                    console.log(this.courses);
                }
            }
        )
    }

    loadSkills(){
        this.skillService.loadStudentSkills().subscribe(
            data => {
                if(data.data){
                    this.skills=data.data;
                }
            }
        );
    }


    protected readonly environment = environment;
}
