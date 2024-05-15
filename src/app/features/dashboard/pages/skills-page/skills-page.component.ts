import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {SkillService} from "../../services/skill.service";
import {SkillResponse} from "../../models/SkillResponse";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {CourseResponse} from "../../models/CourseResponse";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css'
})
export class SkillsPageComponent implements OnInit{
  skillForm: FormGroup;
  protected readonly environment = environment;
  skills:SkillResponse[] = [];
  isUpdate:boolean = false;
  courses:CourseResponse[] = [];

  currentSkill?:SkillResponse;

  constructor(private skillService:SkillService , private fb:FormBuilder, private toasterService:ToastrService,private  courseService:CourseService) {
    this.skillForm = this.fb.group({
      name: ['', Validators.required],
      skillLevel: ['', Validators.required],
      skillDescription: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadSkills();
    this.loadPublishedCourses();
  }

  loadSkills(){
    this.skillService.getSkills().subscribe(
      data => {
        if(data.data) {
          this.skills = data.data;
        }
      }
    )
  }

  onSubmit() {
    if (this.skillForm.invalid){
      this.toasterService.error("this form is not valid");
      this.skillForm.markAllAsTouched();
      return;
    }

    if (this.skillForm.valid && !this.isUpdate ){
      this.createSkill(this.skillForm.value);
      return;
    }

    if (this.skillForm.valid && this.isUpdate ) {
      console.log(this.currentSkill!.id,this.skillForm.value)
      this.updateSkill(this.skillForm.value,this.currentSkill!.id);
      return;
    }
  }

  createSkill(form:any){
    this.skillService.createSkill(form).subscribe(
      data =>{
        if(data.data){
          this.skills.push(data.data)
          this.skillForm.reset();
          this.toasterService.success("skill has been created");
        }
      },error => {
        this.toasterService.error(error.error)
      }
    )
  }

  modifySkill(id:number){
    this.skills.map(
      skill => {
        if (skill.id === id){
          this.isUpdate= true;
          this.currentSkill = skill;
          this.skillForm.patchValue({
            name: skill.name,
            skillLevel: skill.skillLevel,
            skillDescription: skill.skillDescription
          });
        }
      }
    )
  }

  updateSkill(form:any,id:number){
    this.skillService.modifySkill(form,id).subscribe(
      data => {
        if (data.data){
          this.skills = this.skills.map(
            skill => {
              if (skill.id == id && data.data){
                return data.data;

              }else{
                return skill;
              }
            }
          )
          this.skillForm.reset();
          this.toasterService.success("skill ha been updated");
        }
      },error => {
        this.toasterService.error(error.error)
      }
    )
  }

  loadPublishedCourses(){
    this.courseService.loadPublishedCourses().subscribe(

      data => {
        if (data.data){
          this.courses = data.data;
        }
      }

    )
  }

  approveCourse(id:number){
    this.skillService.approveSkill(id).subscribe(

      () =>{
        this.toasterService.success("course has been approved");
        this.courses= this.courses.filter(
          skill => skill.id != id
        )
      },error =>{
        this.toasterService.error(error.error)
      }
    )
  }

  refuseCourse(id:number){
    this.skillService.refuseSkill(id).subscribe(
      () =>{
        this.toasterService.success("course has been refused");
        this.courses= this.courses.filter(
          skill => skill.id != id
        )
      },error =>{
        this.toasterService.error(error.error)
      }
    )
  }
}
