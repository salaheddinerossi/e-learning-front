import {Component, OnInit} from '@angular/core';
import {NavbarType} from "../../../../shared/enums/navbar-type";
import {environment} from "../../../../../environment";
import {ErrorData} from "../../../../shared/models/ErrorData";
import {FormOptions} from "../../models/FormOptions";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {SignUpService} from "../../services/sign-up.service";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent implements OnInit{

  signUpForm:FormGroup;
  user: string | null = null;



  constructor(private fb: FormBuilder,private activatedRoute:ActivatedRoute,private toastrService:ToastrService,private signUpService:SignUpService,private router:Router) {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['']
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.user = params.get('user');
      if (this.user){
        this.handelUserFormType(this.user);
      }
    });

  }



  isPageExist:boolean=true;

  formOptions:FormOptions={
    title:"",
    optionLink:""
  }

  error:ErrorData={
    errorTitle:environment.error404.errorTitle,
    errorCode:environment.error404.errorCode,
    errorDescription:environment.error404.errorDescription
  }

  handelUserFormType(user:string){
    switch (user){
      case "student":
        this.setStudentForm();
        break;
      case "teacher":
        this.setTeacherForm();
        break;
      default:
        this.isPageExist=false;
    }
  }


  setStudentForm(){
    this.formOptions.title=environment.signUpStudent.title;
    this.formOptions.optionLink=environment.signUpStudent.optionLink;
    this.formOptions.otherOption=environment.signUpStudent.otherOption;
    this.formOptions.otherOptionLink=environment.signUpStudent.otherOptionLink;
  }

  setTeacherForm(){
    this.formOptions.title=environment.signUpTeacher.title;
    this.formOptions.optionLink=environment.signUpTeacher.optionLink;
    this.formOptions.otherOption=environment.signUpTeacher.otherOption;
    this.formOptions.otherOptionLink=environment.signUpTeacher.otherOptionLink;
  }

  onSubmit(){

    if (this.signUpForm.valid){
      this.signUp();
    }else {
      this.toastrService.error("form is not valid")
      this.signUpForm.markAllAsTouched();
    }
  }

  signUp(){
    this.signUpService.signUp(this.user!,this.signUpForm.value).subscribe(
      data => {
        this.toastrService.success("Account created");
        this.router.navigate(['/login/'+this.formOptions.optionLink])
      },
      error => {
        this.toastrService.error(error.error.message);
      }
    )
  }





}
