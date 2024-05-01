import {Component, OnInit} from '@angular/core';
import {environment} from "../../../../../environment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {LessonService} from "../../services/lesson.service";

@Component({
  selector: 'app-step3-page',
  templateUrl: './step3-page.component.html',
  styleUrl: './step3-page.component.css'
})
export class Step3PageComponent implements OnInit{

  protected readonly environment = environment;
  lessonForm:FormGroup;


  chapterId!:string;
  usesAI:boolean=false;
  advices:string[]=[];
  summary?:string;
  lessonId?:number;

  constructor(private fb:FormBuilder,private route:ActivatedRoute,private toaster:ToastrService,private lessonService:LessonService) {
    this.lessonForm=this.fb.group({
      title:["",Validators.required],
      description:["",Validators.required],
      chapterId:["",Validators.required],
      material:["https://www.youtube.com/watch?v=x7X9w_GIm1s&ab_channel=Fireship"],
      usesAI:[""]
    })


  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.chapterId= params['id'];

        this.lessonForm.patchValue({
          chapterId:Number(this.chapterId)
        })
      }
    )

  }

  onRegenerateSubmit(form: FormGroup) {
    if (form.valid) {
      this.regenerateSummary(form.value);
    } else {

      console.log(form)
      this.toaster.error("form is not valid")
    }
  }




  onSubmitAi(){
    this.lessonForm.patchValue({
      usesAI: true
    });
    this.onSubmit();
  }

  onSubmitLesson(){
    this.lessonForm.patchValue({
      usesAI: false
    });
    this.onSubmit();
  }

  onSubmit(){
    if(this.lessonForm.invalid){
      this.toaster.error("form is not valid")
      this.lessonForm.markAllAsTouched();
      return;
    }

    if (this.lessonForm.valid){
      this.createLesson(this.lessonForm.value);
    }
  }

  createLesson(form:any){

    this.lessonService.createLesson(form).subscribe(

        data => {
          this.usesAI=data.data.usesAI;
          this.advices=data.data.advices;
          this.summary = data.data.summary;
          this.lessonId= data.data.id;
          this.toaster.success("lesson has been added");
        }

    )

  }

  regenerateSummary(form:any){
    this.lessonService.regenerateSummary(form,this.lessonId!).subscribe(
      data => {
        this.summary=data.data.summary;
        this.toaster.success("summary has been regenerated");
      }
    )
  }


}
