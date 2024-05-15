import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {TeacherService} from "../../services/teacher.service";
import {TeacherResponse} from "../../models/TeacherResponse";
import {ToastrService} from "ngx-toastr";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-teachers-request-page',
  templateUrl: './teachers-request-page.component.html',
  styleUrl: './teachers-request-page.component.css'
})
export class TeachersRequestPageComponent implements OnInit{

    unreviewedTeachers:TeacherResponse[]=[];
    allTeachers:TeacherResponse[]=[];

    constructor(private teacherService:TeacherService,private toasterService:ToastrService) {
    }

    ngOnInit() {
      this.loadUnreviewedTeachers();
      this.loadAllTeachers();
    }

    loadUnreviewedTeachers(){
      this.teacherService.getUnreviewedTeachers().subscribe(
        data => {
          if(data.data){
            this.unreviewedTeachers=data.data;
          }
        },error => {
          this.toasterService.error(error.error)
        }
      );
    }

    activateAccount(id:number){
      this.teacherService.activateAccount(id).subscribe(
        data => {
          this.unreviewedTeachers = this.unreviewedTeachers.filter(teacher => teacher.id !== id)
          this.allTeachers = this.allTeachers.map(teacher => {
            if (teacher.id === id) {
              return {...teacher, isActive: true};
            } else {
              return teacher;
            }
          });
          this.toasterService.success("account has been activated")
        },
        error => {
          this.toasterService.error(error.error)
        }
      );
    }

    deactivateAccount(id:number){
      this.teacherService.deactivateAccount(id).subscribe(
        data =>{
          this.unreviewedTeachers = this.unreviewedTeachers.filter(teacher => teacher.id !== id)
          this.toasterService.success("account has been deactivated")
          this.allTeachers = this.allTeachers.map(teacher => {
            if (teacher.id === id) {
              return {...teacher, isActive: false};
            } else {
              return teacher;
            }
          });
        },
        error => {
          this.toasterService.error(error.error)
        }
      )

    }

    loadAllTeachers(){
      this.teacherService.getAllTeachers().subscribe(
        data => {
          if (data.data){
            this.allTeachers=data.data;
          }
        },error =>{
          this.toasterService.error(error.error)
        }
      )
    }
  protected readonly environment = environment;
}
